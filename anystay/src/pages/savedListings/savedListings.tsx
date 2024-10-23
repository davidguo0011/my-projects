import React from 'react';
import { SavedListingsContainer, SavedListingsTitle, SavedListingsTitleWrapper } from "./savedListingsStyling";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import SavedListingsResults from "./SavedListingsResults/SavedListingsResults";
import HelmetTags from "../../components/Helmet/HelmetTags";

const SavedListings: React.FC = () => {
    return (
        <>
            <HelmetTags title="Saved | Anystay" />
            <MobileNavbar hide={null} />
            <SavedListingsContainer>
                <SavedListingsTitleWrapper>
                    <SavedListingsTitle>Saved</SavedListingsTitle>
                </SavedListingsTitleWrapper>
                <SavedListingsResults />
            </SavedListingsContainer>
        </>
    );
}

export default SavedListings