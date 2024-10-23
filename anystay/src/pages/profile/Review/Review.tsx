import { useState, useEffect } from "react";
import { ProfileReviewsReviewWrapper, ProfileReviewsReviewImage, ProfileReviewsReviewName, ProfileReviewsReviewDate, ProfileReviewsReviewText } from "../profileStyling";
import { ReviewGuestModel } from "../../../interfaces/models/reviewGuestModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface ReviewProps {
    review: ReviewGuestModel;
}

export default function Review({ review }: ReviewProps) {
    const [reviewOwnerProfilePictureURL, setReviewOwnerProfilePictureURL] = useState<string>("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    useEffect(() => {
        if (review && review?.UserHostModel?.UserModel?.profilePicture) {
            const profilePic = constructOptimisedProtectedImageUrl(review.UserHostModel.UserModel.profilePicture, review.UserHostModel.UserModel.identityID, 100);
            setReviewOwnerProfilePictureURL(profilePic);
        }
    }, [review]);
    if (!review.body) return null;
    return (
        <ProfileReviewsReviewWrapper>
            {review && (
                <div style={{ display: "flex" }}>
                    <ProfileReviewsReviewImage src={reviewOwnerProfilePictureURL} alt="Picture of the guest who made the review" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <ProfileReviewsReviewName>{review?.UserHostModel?.UserModel?.firstName}</ProfileReviewsReviewName>
                        <ProfileReviewsReviewDate>{new Date(review.createdAt).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}</ProfileReviewsReviewDate>
                    </div>
                </div>
            )}
            {review.body && <ProfileReviewsReviewText>{review.body}</ProfileReviewsReviewText>}
        </ProfileReviewsReviewWrapper>
    );
}
