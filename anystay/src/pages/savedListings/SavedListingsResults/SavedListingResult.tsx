import { useState } from "react";
import {
    SavedListingResultCardImageWrapper,
    SavedListingResultCard,
    SavedListingResultCardTitle,
    SavedListingResultCardSubtitle,
    ViewListingSaveButton,
    ViewListingSaveButtonWrapper,
} from "../savedListingsStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";

// Define the shape of the listing object
interface Listing {
    id: string;
    suburb: string;
    typeOfPlace: string;
    propertyType: string;
    propertyTitle: string;
    listingImages: Array<{ key: string }>;
}

// Define the props for the component
interface SavedListingResultProps {
    listing: Listing;
    deleteListing: (id: string) => Promise<void>;
}

const SavedListingResult: React.FC<SavedListingResultProps> = ({ listing, deleteListing }) => {
    const [saved, setSaved] = useState<boolean>(true);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const getPlaceType = (): string => {
        let placeType = "";
        if (listing && listing.suburb !== null) {
            const place = listing.suburb.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
            switch (listing.typeOfPlace) {
                case "entire-place":
                    placeType = listing.propertyType + " in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "hotel-room":
                    placeType = "Hotel in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "private-room":
                    placeType = "Private room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "shared-room":
                    placeType = "Shared room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                default:
                    break;
            }
        }

        return placeType;
    };
    const handleButtonClick = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            setSaved(false);
            setIsDeleting(true);
            await deleteListing(listing.id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SavedListingResultCard id={"saved-card"} to={`/listing/${listing.id}`} target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener noreferrer">
            <ViewListingSaveButtonWrapper onClick={handleButtonClick}>
                <ViewListingSaveButton id={"save-button"} isActive={saved} activeColor={ColorTheme.Red.color} onClick={() => {}} />
            </ViewListingSaveButtonWrapper>

            <SavedListingResultCardImageWrapper>
                <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} src={constructOptimisedImageUrl(listing.listingImages[0].key, 800)} alt="Listing" />
            </SavedListingResultCardImageWrapper>
            <SavedListingResultCardSubtitle>{getPlaceType()}</SavedListingResultCardSubtitle>
            <SavedListingResultCardTitle>{listing.propertyTitle}</SavedListingResultCardTitle>
        </SavedListingResultCard>
    );
};

export default SavedListingResult;
