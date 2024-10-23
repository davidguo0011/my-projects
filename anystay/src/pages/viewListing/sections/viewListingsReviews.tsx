import { useMemo, useEffect, useState } from "react";
import {
    ViewListingReviewsTitle,
    ViewListingReservationDivider,
    ViewListingReviewsSubtitle,
    ViewListingReviewsAverageAttributesWrapper,
    ViewListingReviewsAverageAttribute,
    ViewListingReviewsAverageAttributeTitle,
    ViewListingReviewsAverageAttributeRating,
    ViewListingReviewsAverageAttributeRatingInner,
    ViewListingReviewsReviewWrapper,
    ViewListingReviewsReviewText,
    ViewListingReviewsReviewDate,
    ViewListingReviewsReviewImage,
    ViewListingReviewsReviewName,
    ViewListingReviewsWrapper,
    ViewListingReviewsItemWrapper,
    ViewListingReviewsHeaderWrapper,
    ViewListingReviewsHeaderRating,
    ViewListingReviewsHeader,
    ViewListingReviewsHeaderRatingTitle,
    ViewListingReviewsCommentSwiper,
    ViewListingReviewsCommentSwiperWrapper,
    ViewListingReviewsSeeAllReviewBtn,
    ViewListingReviewsHeaderDivider,
    ViewListingNoReviewsTitle,
    ViewListingNoReviewsCommentWrapper,
    ViewListingNoReviewsCommentTitle,
    ViewListingNoReviewsCommentSubtitle,
    ReadMoreButton,
    ViewListingReviewsExternalPopup,
} from "../viewListingStyling";
import { ListingInterface } from "../viewListing";
import { ReviewStayModel } from "../../../interfaces/models/reviewStayModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import useClickOutside from "../../../hook/useClickOutside";

const attributes = [
    { title: "Communication", fieldName: "communicationAverage" },
    { title: "Amenities", fieldName: "amenitiesAverage" },
    { title: "Cleaning", fieldName: "cleaningAverage" },
    { title: "Location", fieldName: "locationAverage" },
    { title: "Service", fieldName: "serviceAverage" },
    { title: "Value", fieldName: "valueAverage" },
];

type ListingKey = keyof ListingInterface;

export default function ViewListingReviews({ listing, reviews, toggleSeeReview }: { listing: ListingInterface; reviews: ReviewStayModel[]; toggleSeeReview: () => Promise<void> }) {
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
        <ViewListingReviewsWrapper>
            <ViewListingReviewsHeaderWrapper>
                {listing.overallAverage > 0 ? (
                    <>
                        <ViewListingReviewsHeaderRating>
                            <ViewListingReviewsHeaderRatingTitle>{((listing.overallAverage / 10) * 2).toFixed(1)}</ViewListingReviewsHeaderRatingTitle>
                        </ViewListingReviewsHeaderRating>
                        <ViewListingReviewsHeaderDivider />
                        <ViewListingReviewsHeader>
                            <ViewListingReviewsTitle>
                                {reviews.length} {reviews.length > 1 ? "reviews" : "review"}
                            </ViewListingReviewsTitle>
                            <ViewListingReviewsSubtitle>Rated {((listing.overallAverage / 10) * 2).toFixed(1)} out of 10 on average</ViewListingReviewsSubtitle>
                        </ViewListingReviewsHeader>
                    </>
                ) : (
                    <ViewListingReviewsHeader>
                        <ViewListingNoReviewsTitle>No reviews yet</ViewListingNoReviewsTitle>
                        <ViewListingReviewsSubtitle>This place has not been reviewed yet</ViewListingReviewsSubtitle>
                    </ViewListingReviewsHeader>
                )}
            </ViewListingReviewsHeaderWrapper>

            <ViewListingReviewsAverageAttributesWrapper>
                {attributes.map((item) => {
                    return (
                        <ViewListingReviewsAverageAttribute key={item.fieldName}>
                            <ViewListingReviewsAverageAttributeTitle>{item.title}</ViewListingReviewsAverageAttributeTitle>
                            <ViewListingReviewsAverageAttributeRating>
                                <ViewListingReviewsAverageAttributeRatingInner value={(listing[item.fieldName as ListingKey] as number) / 10}></ViewListingReviewsAverageAttributeRatingInner>
                            </ViewListingReviewsAverageAttributeRating>
                        </ViewListingReviewsAverageAttribute>
                    );
                })}
            </ViewListingReviewsAverageAttributesWrapper>
            <ViewListingReservationDivider />
            {renderReview && reviews.length > 0 ? (
                <ViewListingReviewsCommentSwiperWrapper isShow={renderReview.length > 0}>
                    <ViewListingReviewsCommentSwiper>
                        <ViewListingReviewsItemWrapper>
                            {renderReview.map((review, index) => {
                                return <Review review={review} key={index} />;
                            })}
                        </ViewListingReviewsItemWrapper>
                    </ViewListingReviewsCommentSwiper>
                </ViewListingReviewsCommentSwiperWrapper>
            ) : (
                <ViewListingNoReviewsCommentWrapper>
                    <ViewListingNoReviewsCommentTitle>Be the first review here</ViewListingNoReviewsCommentTitle>
                    <ViewListingNoReviewsCommentSubtitle>
                        Reviews will appear here after this <br />
                        listing has been rated
                    </ViewListingNoReviewsCommentSubtitle>
                </ViewListingNoReviewsCommentWrapper>
            )}

            {renderReview && renderReview.length > 6 && <ViewListingReviewsSeeAllReviewBtn onClick={toggleSeeReview}>See {renderReview.length} reviews</ViewListingReviewsSeeAllReviewBtn>}
        </ViewListingReviewsWrapper>
    );
}

function Review({ review }: { review: ReviewStayModel }) {
    const [reviewOwnerProfilePictureURL, setReviewOwnerProfilePictureURL] = useState<string>("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    const [isExpanded, setIsExpanded] = useState(true);

    const [externalSource, setExternalSource] = useState(false);
    const handleClick = () => {
        setExternalSource(!externalSource);
    };
    const wrapperRef = useClickOutside(externalSource, handleClick, true);
    useEffect(() => {
        if (review?.UserModel?.profilePicture) {
            const reviewOwnerProfilePic = constructOptimisedProtectedImageUrl(review.UserModel.profilePicture, review.UserModel.identityID, 100);
            setReviewOwnerProfilePictureURL(reviewOwnerProfilePic);
        }
    }, [review]);

    if (!review.body) return null;
    return (
        <ViewListingReviewsReviewWrapper>
            <div style={{ display: "flex" }}>
                <ViewListingReviewsReviewImage src={reviewOwnerProfilePictureURL} alt="Picture of the guest who made the review" onClick={handleClick} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxHeight: "100%" }}>
                    <ViewListingReviewsReviewName>{review?.UserModel?.firstName ? review.UserModel.firstName : review.externalUserFirstName}</ViewListingReviewsReviewName>
                    <ViewListingReviewsReviewDate>{new Date(review.createdAt).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}</ViewListingReviewsReviewDate>
                </div>
            </div>
            {externalSource && !review.usermodelID && (
                <ViewListingReviewsExternalPopup ref={wrapperRef}>
                    This review was made from a trusted external source. <strong style={{ textDecoration: "underline" }}>Learn more</strong>
                </ViewListingReviewsExternalPopup>
            )}
            <ViewListingReviewsReviewText>
                {isExpanded ? (review.body.length > 100 ? review.body.slice(0, 100) + "..." : review.body) : review.body}{" "}
                {review.body.length > 50 && <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read more" : "Show less"}</ReadMoreButton>}
            </ViewListingReviewsReviewText>
        </ViewListingReviewsReviewWrapper>
    );
}
