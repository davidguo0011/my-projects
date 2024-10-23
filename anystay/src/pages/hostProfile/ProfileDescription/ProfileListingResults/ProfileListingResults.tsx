import React from "react";
import { ProfileResultsCardWrapper, ProfileResultsContainer } from "../../profileStyling";
import { PaginationWrapper, PaginationTitle } from "../../../searchListing/searchListingStyling";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import ProfileListingResult from "./ProfileListingResult/ProfileListingResult";

interface ProfileListingResultsProps {
    listings: any[];
}

const ProfileListingResults: React.FC<ProfileListingResultsProps> = ({ listings }) => {
    const pageCount = Math.ceil(listings.length / 30);
    const [page, setPage] = useState<number>(1);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <ProfileResultsContainer>
            <ProfileResultsCardWrapper>
                {listings.map(function (listing: any, index: number) {
                    if (page > 1) {
                        if (index >= (page - 1) * 30 && index < page * 30) {
                            return <ProfileListingResult listing={listing} key={index} />;
                        } else {
                            return null;
                        }
                    } else {
                        if (index < 30) {
                            return <ProfileListingResult listing={listing} key={index} />;
                        } else {
                            return null;
                        }
                    }
                })}
            </ProfileResultsCardWrapper>
            {pageCount > 1 && (
                <PaginationWrapper>
                    <Pagination page={page} onChange={handlePageChange} count={pageCount} size="small" />
                    <PaginationTitle>
                        Showing {page} of {pageCount} pages
                    </PaginationTitle>
                </PaginationWrapper>
            )}
        </ProfileResultsContainer>
    );
};

export default ProfileListingResults;
