import { useState, useEffect, useMemo } from "react";
import {
    ViewListingReviewPop,
    ViewListingReviewPopCloseBtnWrapper,
    ViewListingReviewPopCloseBtnIcon,
    ViewListingReviewPopWrapper,
    ViewListingReviewsHeaderWrapper,
    ViewListingReviewsHeader,
    ViewListingReviewPopTitle,
    ViewListingReviewsSubtitle,
    ViewListingReviewsAverageAttribute,
    ViewListingReviewsAverageAttributeTitle,
    ViewListingReviewsAverageAttributeRating,
    ViewListingReviewsAverageAttributeRatingInner,
    ViewListingReservationDivider,
    ViewListingReviewPopReviewWrapper,
    ViewListingReviewsReviewImage,
    ViewListingReviewsReviewName,
    ViewListingReviewsReviewDate,
    ViewListingReviewsReviewText,
    ViewListingReviewPopSwiperWrapper,
    ViewListingReviewPopItemWrapper,
    ViewListingReviewPopRateWrapper,
} from "../viewListingStyling";
import { ListingInterface } from "../viewListing";
import { ReviewStayModel } from "../../../interfaces/models/reviewStayModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface ReviewPopupProps {
    listing: ListingInterface;
    reviews: ReviewStayModel[];
    toggleSeeReview: () => Promise<void>;
    isReview: boolean;
}

export default function ReviewPopup({ listing, reviews, toggleSeeReview, isReview }: ReviewPopupProps) {
    const attributes = [
        { title: "Communication", fieldName: "communicationAverage" },
        { title: "Amenities", fieldName: "amenitiesAverage" },
        { title: "Cleaning", fieldName: "cleaningAverage" },
        { title: "Location", fieldName: "locationAverage" },
        { title: "Service", fieldName: "serviceAverage" },
        { title: "Value", fieldName: "valueAverage" },
    ];

    const renderReview = useMemo(() => {
        let reviewsData = [];
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].body && !reviews[i].hidden) {
                reviewsData.push(reviews[i]);
            }
        }
        return reviewsData;
    }, [reviews]);

    return (
        <ViewListingReviewPop>
            <ViewListingReviewPopCloseBtnWrapper onClick={toggleSeeReview}>
                <ViewListingReviewPopCloseBtnIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Close filter button" />
            </ViewListingReviewPopCloseBtnWrapper>
            <ViewListingReviewPopWrapper>
                <ViewListingReviewsHeaderWrapper>
                    <ViewListingReviewsHeader>
                        <ViewListingReviewPopTitle>
                            {reviews.length} {reviews.length > 1 ? "reviews" : "review"}
                        </ViewListingReviewPopTitle>
                        <ViewListingReviewsSubtitle>Rated {((listing.overallAverage / 10) * 2).toFixed(1)} out of 10 on average</ViewListingReviewsSubtitle>
                    </ViewListingReviewsHeader>
                </ViewListingReviewsHeaderWrapper>

                <ViewListingReviewPopRateWrapper>
                    {attributes.map((item) => {
                        return (
                            <ViewListingReviewsAverageAttribute key={item.fieldName}>
                                <ViewListingReviewsAverageAttributeTitle>{item.title}</ViewListingReviewsAverageAttributeTitle>
                                <ViewListingReviewsAverageAttributeRating>
                                    <ViewListingReviewsAverageAttributeRatingInner
                                        value={(listing[item.fieldName as keyof ListingInterface] as number) / 10}
                                    ></ViewListingReviewsAverageAttributeRatingInner>
                                </ViewListingReviewsAverageAttributeRating>
                            </ViewListingReviewsAverageAttribute>
                        );
                    })}
                </ViewListingReviewPopRateWrapper>
                <ViewListingReservationDivider />
                <ViewListingReviewPopSwiperWrapper>
                    <ViewListingReviewPopItemWrapper>
                        {renderReview.map((review, index) => {
                            return <Review review={review} key={index} />;
                        })}
                    </ViewListingReviewPopItemWrapper>
                </ViewListingReviewPopSwiperWrapper>
            </ViewListingReviewPopWrapper>
        </ViewListingReviewPop>
    );
}

function Review({ review }: { review: ReviewStayModel }) {
    const [reviewOwnerProfilePictureURL, setReviewOwnerProfilePictureURL] = useState<string>("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    useEffect(() => {
        if (review?.UserModel?.profilePicture) {
            const reviewOwnerProfilePic = constructOptimisedProtectedImageUrl(review.UserModel.profilePicture, review.UserModel.identityID, 100);
            setReviewOwnerProfilePictureURL(reviewOwnerProfilePic);
        }
    }, [review]);

    if (!review.body) return null;

    return (
        <ViewListingReviewPopReviewWrapper>
            {review && (
                <div style={{ display: "flex" }}>
                    <ViewListingReviewsReviewImage src={reviewOwnerProfilePictureURL} alt="Picture of the guest who made the review" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxHeight: "100%" }}>
                        <ViewListingReviewsReviewName>{review?.UserModel?.firstName}</ViewListingReviewsReviewName>
                        <ViewListingReviewsReviewDate>{new Date(review.createdAt).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}</ViewListingReviewsReviewDate>
                    </div>
                </div>
            )}
            <ViewListingReviewsReviewText>{review.body}</ViewListingReviewsReviewText>
        </ViewListingReviewPopReviewWrapper>
    );
}
