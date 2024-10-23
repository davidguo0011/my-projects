import { ReviewStayModel } from "../../../interfaces/models/reviewStayModel";
import { ListingInterface } from "../viewListing";
import {
    ViewListingReviewWrapper,
    ViewListingReviewBox,
    ViewListingReviewTitle,
    ViewListingReviewContentTitle,
    ViewListingReviewContentHeader,
    ViewListingReviewContentSubtitle,
} from "../viewListingStyling";

interface ViewListingReviewPreviewProps {
    listing: ListingInterface;
    reviews: ReviewStayModel[];
}

export default function ViewListingReviewPreview({ listing, reviews }: ViewListingReviewPreviewProps) {
    const reviewContent = reviews.find((e) => e.body !== "");
    return (
        <ViewListingReviewWrapper>
            <ViewListingReviewBox>
                <ViewListingReviewTitle reviews={reviews}>{reviews.length !== 0 ? ((listing.overallAverage / 10) * 2).toFixed(1) : "NEW"}</ViewListingReviewTitle>
            </ViewListingReviewBox>
            <ViewListingReviewContentHeader>
                <ViewListingReviewContentTitle>
                    {reviews.length > 0 ? (reviews.length > 1 ? `Rated by ${reviews.length} reviews` : `Rated by ${reviews.length} review`) : "Be the first to review this place"}
                </ViewListingReviewContentTitle>
                <ViewListingReviewContentSubtitle>
                    {reviews.length > 0
                        ? reviewContent
                            ? reviewContent.body
                            : "The user did not leave a review"
                        : "To celebrate this place’s launch on Anystay, a discount has been automatically applied for the next 2 guests"}
                </ViewListingReviewContentSubtitle>
            </ViewListingReviewContentHeader>
        </ViewListingReviewWrapper>
    );
}
