import { useState, useEffect, useCallback, useRef } from "react";
import { callApi } from "../../../utils/api/api";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { SavedListingsEmptyWrapper, SavedListingsEmptyTitle, SavedListingsWrapper, SavedListingsEmptySubtitle, PaginationWrapper, PaginationTitle } from "../savedListingsStyling";
import Pagination from "@mui/material/Pagination";
import SavedListingResult from "./SavedListingResult";
import { accessTokenSelector } from "../../../state/selectors/accessToken";

interface Listing {
    id: string;
    suburb: string;
    typeOfPlace: string;
    propertyType: string;
    propertyTitle: string;
    listingImages: Array<{ key: string }>;
    // Add other properties of listing as needed
}

interface UserModel {
    id: string;
    savedListings: string[];
    // Add other properties of userModel as needed
}

interface SavedListings {
    [page: number]: Listing[];
}

interface ListingData {
    body: {
        totalPages: number;
        listingData: Listing[];
    };
}

const SavedListingsResults: React.FC = () => {
    const [userModel, setUserModel] = useRecoilState<any>(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [pageCount, setPageCount] = useState<number>(1);
    const [page, setPage] = useState<number>(1);
    const [savedListings, setSavedListings] = useState<SavedListings>({});
    const init = useRef<boolean>(false);

    const fetchSavedListings = useCallback(
        async (pageNum: number, userModelId: string): Promise<Listing[]> => {
            let listingData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listings/saved`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    userModelId: userModelId,
                    page: pageNum,
                },
            });
            setPageCount(listingData.body.totalPages);
            return listingData.body.listingData;
        },
        [accessToken]
    );

    useEffect(() => {
        //init
        const fetchListings = async () => {
            try {
                const listingData = await fetchSavedListings(1, userModel.id);
                init.current = true;
                setSavedListings({ 1: listingData });
            } catch (err) {
                console.log(err);
            }
        };
        if (!init.current) {
            fetchListings();
        }
    }, [fetchSavedListings, userModel.id]);

    const deleteListing = async (listingID: string) => {
        try {
            let newListingIDs = userModel.savedListings.filter((item: string) => item !== listingID);
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/saved`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    listingId: listingID,
                },
            });
            const userModelCopy = JSON.parse(JSON.stringify(userModel));
            userModelCopy.savedListings = newListingIDs;
            setUserModel(userModelCopy);

            if (page > 1 && page > Math.ceil(newListingIDs.length / 30)) {
                let listingsData = await fetchSavedListings(page - 1, userModel.id);
                //reinit everytime delete happens
                setSavedListings({ [page - 1]: listingsData });
                setPage((prevState) => prevState - 1);
            } else {
                if (newListingIDs.length > 0) {
                    let listingsData = await fetchSavedListings(page, userModel.id);
                    //reinit everytime delete happens
                    setSavedListings({ [page]: listingsData });
                }
            }
        } catch (error: any) {
            console.error("Error updating listings:", error);
            throw new Error("Error updating listings:", error.message);
        }
    };

    const handlePageChange = async (event: React.ChangeEvent<any>, value: number) => {
        if (!savedListings[value]) {
            let listingData = await fetchSavedListings(value, userModel.id);
            setSavedListings((prevState) => {
                return { ...prevState, [value]: listingData };
            });
        }
        setPage(value);
    };

    if (userModel.savedListings.length === 0) {
        return (
            <SavedListingsEmptyWrapper>
                <SavedListingsEmptyTitle>Nothing saved yet</SavedListingsEmptyTitle>
                <SavedListingsEmptySubtitle>
                    Start exploring for your <br /> next stay anywhere
                </SavedListingsEmptySubtitle>
            </SavedListingsEmptyWrapper>
        );
    }
    if (!savedListings[page]) return null;

    return (
        <>
            <SavedListingsWrapper>
                {savedListings[page].map((listing) => {
                    return <SavedListingResult deleteListing={deleteListing} listing={listing} key={listing.id} />;
                })}
            </SavedListingsWrapper>
            {pageCount > 1 && (
                <PaginationWrapper>
                    <Pagination page={page} onChange={handlePageChange} count={pageCount} size="small" />
                    <PaginationTitle>
                        Showing {page} of {pageCount} pages
                    </PaginationTitle>
                </PaginationWrapper>
            )}
        </>
    );
};

export default SavedListingsResults;
