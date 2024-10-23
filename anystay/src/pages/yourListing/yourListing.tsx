import { useState, useEffect, useCallback, useRef } from "react";
import {
    YourListingsContainer,
    YourListingsTitle,
    YourListingAddListingLink,
    YourListingsNoListingsWrapper,
    YourListingsNoListingsTitle,
    YourListingsNoListingsSubtitle,
    YourListingAddListingIcon,
    YourListingResultsContainer,
    PaginationWrapper,
    PaginationTitle,
} from "./yourListingStyling";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState, RecoilState } from "recoil";
import Pagination from "@mui/material/Pagination";
import YourListingResult from "./YourListingResult/YourListingResult";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";

interface ListingImage {
    key: string;
    // Add other properties of listingImage if any
}

interface Listing {
    id: string;
    draft: boolean;
    status: string;
    listingImages: ListingImage[];
    internalName: string;
    // Add other properties of a listing here
}

interface ListingsState {
    [page: number]: Listing[];
}

interface UserHostModel {
    id: string;
    // Add other properties of userHostModel here
}

interface ExclusiveStartKeys {
    [key: number]: string | null;
}

type UserHostModelState = UserHostModel | null;

const YourListing: React.FC = () => {
    const [listings, setListings] = useState<ListingsState>({});
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const exclusiveStartKeys = useRef<ExclusiveStartKeys | null>(null);

    const fetchListings = useCallback(
        async (exclusiveStartKey: string | null, page: number, deleteDraft: boolean) => {
            console.log("fetched");
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, "listings", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    userHostModelId: userHostModel?.id,
                    exclusiveStartKey: exclusiveStartKey,
                },
            })
                .then(async (res) => {
                    if (page === 1) {
                        setTotalItems(res.body.totalItems);
                        setPageCount(res.body.totalPages);
                        exclusiveStartKeys.current = res.body.exclusiveStartKeys;
                    }
                    //when a draft is deleted, need to reinit the obj, so that the order is kept consistent in pagination
                    if (deleteDraft) {
                        setListings({ [page]: res.body.listingsData });
                    } else {
                        setListings((prevState) => {
                            return { ...prevState, [page]: res.body.listingsData };
                        });
                    }
                    setLoading(false);
                })
                .catch((err) => console.log(err));
        },
        [accessToken, userHostModel?.id]
    );

    useEffect(() => {
        fetchListings(null, 1, false);
    }, [fetchListings]);

    const deleteListing = async (listingID: string) => {
        await callApi("del", `${process.env.REACT_APP_ENV}-anystay-listing`, `draft/${listingID}`, {
            headers: {
                Authorization: accessToken,
                listingID: listingID,
            },
            body: {
                listingmodelID: listingID,
            },
        })
            .then(async (res) => {
                if (res.success) {
                    let listingsData = listings[page].filter((listing) => listing.id !== listingID);
                    const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                    if (userHostModel) {
                        userHostModelCopy.ListingModels.items = userHostModel.ListingModels.items.filter((item) => item.id !== listingID);
                    }
                    setUserHostModel(userHostModelCopy);
                    //if the user is at the end of the page and delete the last item in that page, go back to the previous page, else update the page
                    if (exclusiveStartKeys.current) {
                        if (listingsData.length === 0 && page > 1) {
                            await fetchListings(exclusiveStartKeys.current[page - 1], page - 1, true);
                            setPage((prevState) => prevState - 1);
                        } else {
                            await fetchListings(exclusiveStartKeys.current[page], page, true);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));
    };

    const handlePageChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        if (!listings[value] && exclusiveStartKeys.current) {
            await fetchListings(exclusiveStartKeys.current[value], value, false);
        }
        setPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <HelmetTags title="Listings | Anystay" />
            <MobileNavbar hide={null} />
            <YourListingsContainer>
                <YourListingsTitle>
                    {totalItems === 0 && "Listings"}
                    {totalItems > 0 && `${totalItems} ${totalItems > 1 ? "listings" : "listing"}`}
                    <YourListingAddListingLink to={`/create-listing/${userHostModel?.id}`}>
                        <YourListingAddListingIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"} alt={"Add a listing"} />
                    </YourListingAddListingLink>
                </YourListingsTitle>
                {loading && (
                    <YourListingsNoListingsWrapper>
                        <YourListingsNoListingsTitle></YourListingsNoListingsTitle>
                        <YourListingsNoListingsSubtitle></YourListingsNoListingsSubtitle>
                    </YourListingsNoListingsWrapper>
                )}
                {!loading && totalItems > 0 && listings[page] && (
                    <YourListingResultsContainer>
                        <>
                            {listings[page].map(function (listing, index) {
                                return <YourListingResult deleteListing={deleteListing} listing={listing} key={index} internalName={listing.internalName} />;
                            })}

                            {pageCount > 1 && (
                                <PaginationWrapper>
                                    <Pagination page={page} onChange={handlePageChange} count={pageCount} size="small" />
                                    <PaginationTitle>
                                        Showing {page} of {pageCount} pages
                                    </PaginationTitle>
                                </PaginationWrapper>
                            )}
                        </>
                    </YourListingResultsContainer>
                )}
                {!loading && totalItems === 0 && (
                    <YourListingsNoListingsWrapper>
                        <YourListingsNoListingsTitle>No listings yet</YourListingsNoListingsTitle>
                        <YourListingsNoListingsSubtitle>
                            Add your first listing to start <br />
                            getting bookings
                        </YourListingsNoListingsSubtitle>
                    </YourListingsNoListingsWrapper>
                )}
            </YourListingsContainer>
        </>
    );
};

export default YourListing;
