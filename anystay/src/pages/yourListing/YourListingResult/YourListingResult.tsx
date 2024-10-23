import { useState } from "react";
import {
    YourListingResultWrapper,
    YourListingResultTitle,
    YourListingEditBarWrapper,
    YourListingEditButton,
    YourListingResultImageWrapper,
    YourListingLink,
    YourListingResultImage,
    YourListingCardIconButton,
    YourListingCardIconButtonIcon,
    YourListingResultSubtitle,
} from "../yourListingStyling";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState, RecoilState } from "recoil";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface ListingImage {
    key: string;
    // Add other properties of listingImage if any
}

interface Listing {
    id: string;
    draft: boolean;
    listingImages: ListingImage[];
    propertyTitle?: string;
    status: string;
    // Add other properties of listing if necessary
}

interface UserHostModel {
    id: string;
    // Add other properties of userHostModel if necessary
}

interface YourListingResultProps {
    listing: Listing;
    deleteListing: (id: string) => Promise<void>;
    internalName?: string;
}

// Create a union type for the possible states of userHostModel
type UserHostModelState = UserHostModel | null;

const YourListingResult: React.FC<YourListingResultProps> = ({ listing, deleteListing, internalName }) => {
    const [isDeleteBtnLoading, setIsDeleteBtnLoading] = useState<boolean>(false);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector as RecoilState<UserHostModelState>);

    return (
        <>
            <YourListingResultWrapper>
                <YourListingLink to={listing.draft ? `/create-listing/${userHostModel?.id}/${listing.id}` : `/edit-listing/${listing.id}`} style={{ height: "100%" }}>
                    <YourListingResultImageWrapper id="yourListingResultImage">
                        {listing.listingImages.length > 0 && <YourListingResultImage src={constructOptimisedImageUrl(listing.listingImages[0].key, 800)} alt="img" />}
                    </YourListingResultImageWrapper>
                    <YourListingResultTitle>{listing.propertyTitle ? listing.propertyTitle : "Finish your draft"}</YourListingResultTitle>
                    {internalName && <YourListingResultSubtitle>{internalName}</YourListingResultSubtitle>}
                    <YourListingEditBarWrapper>
                        <YourListingEditButton status={listing.status} draft={listing.draft}>
                            {listing.draft ? "Draft" : listing.status === "active" ? "Active" : "Inactive"}
                        </YourListingEditButton>
                    </YourListingEditBarWrapper>
                </YourListingLink>
                {listing.draft && (
                    <YourListingCardIconButton
                        onClick={async () => {
                            setIsDeleteBtnLoading(true);
                            await deleteListing(listing.id);
                            setIsDeleteBtnLoading(false);
                        }}
                    >
                        {isDeleteBtnLoading ? (
                            <ChatMessageLoadingSpinner />
                        ) : (
                            <YourListingCardIconButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg"} alt={"Delete button icon"} />
                        )}
                    </YourListingCardIconButton>
                )}
            </YourListingResultWrapper>
        </>
    );
};

export default YourListingResult;
