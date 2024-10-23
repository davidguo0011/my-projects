import { useState, useEffect, useCallback, useMemo } from "react";
import {
    ProfileContainer,
    ProfileTitleWrapper,
    ProfileTitle,
    ProfileHeaderWrapper,
    ProfileHeaderTitleWrapper,
    ProfileHeaderTitle,
    ProfileHeaderSubtitle,
    ProfileReviewsWrapper,
    ProfileReviewsTitle,
    ProfileReviewsSubtitle,
    ProfileVerifiedWrapper,
    ProfileVerifiedContact,
    ProfileVerifiedContactIcon,
    ProfileVerifiedContactText,
    ProfileHeaderImageWrapper,
    ProfileDesktopHeaderWrapper,
    ProfileHeaderDesktopDivider,
    ProfileHeaderEditButton,
    ProfileReviewsText,
    ProfileOverallReviewScoreWrapper,
    ProfileOverallReviewScoreText,
    ProfileOverallReviewScoreStar,
    ProfileMainContainer,
    ProfileDescriptionReviewsContainer,
    ProfileHeaderImage,
} from "./profileStyling";
import Footer from "../../components/footer/footer";
import { callApi } from "../../utils/api/api";
import Review from "./Review/Review";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { UserModel } from "../../interfaces/models/userModel";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import useClickOutside from "../../hook/useClickOutside";
import BackBtn from "../../components/btn/backBtn/backBtn";

const Profile: React.FC = () => {
    const [reviews, setReviews] = useState<Array<any>>([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [guestUserModel, setGuestUserModel] = useState<UserModel | null>(null);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    const getProfile = useCallback(async () => {
        await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, `user/guest/profile/${id}`)
            .then(async (res) => {
                console.log(res);
                setGuestUserModel(res.body.userModel);
                setReviews(res.body.userModel.ReviewGuestModel ? res.body.userModel.ReviewGuestModel.items : []);
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });
    }, [id]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    const overallScore = useMemo(() => {
        if (reviews.length > 0) {
            let totalScore = 0;
            reviews.forEach((review) => {
                totalScore += review.overall;
            });
            return totalScore / reviews.length;
        }
    }, [reviews]);

    const renderTitle = () => {
        if (userModel?.id === guestUserModel?.id) {
            return `Welcome, ${userModel?.firstName}`;
        }
        return "Meet your guest";
    };

    const handleBack = () => {
        navigate(-1);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            (window as any).Intercom("showNewMessage", "");
            setIsOpen(true);
        } else {
            (window as any).Intercom("hide");
            setIsOpen(false);
        }
    };
    const wrapperRef = useClickOutside<HTMLAnchorElement>(isOpen, handleClick);

    if (!guestUserModel) return null;

    return (
        <>
            <HelmetTags title="Profile | Anystay" />
            <ProfileContainer>
                <ProfileTitleWrapper>
                    <BackBtn onClick={handleBack} type="Arrow" mobileLeft={24} mobileTop={24} />
                    <ProfileTitle>{renderTitle()}</ProfileTitle>
                </ProfileTitleWrapper>
                <ProfileMainContainer>
                    <ProfileDesktopHeaderWrapper>
                        <ProfileHeaderWrapper>
                            <ProfileHeaderImageWrapper>
                                <ProfileHeaderImage
                                    src={
                                        guestUserModel.profilePicture
                                            ? constructOptimisedProtectedImageUrl(guestUserModel.profilePicture, guestUserModel.identityID, 100)
                                            : "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"
                                    }
                                    alt="Featured User profile picture Image"
                                />
                                {overallScore && (
                                    <ProfileOverallReviewScoreWrapper>
                                        <ProfileOverallReviewScoreStar src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Star.svg"} alt="" />
                                        <ProfileOverallReviewScoreText>{Number(overallScore).toFixed(1)}</ProfileOverallReviewScoreText>
                                    </ProfileOverallReviewScoreWrapper>
                                )}
                            </ProfileHeaderImageWrapper>
                            <ProfileHeaderTitleWrapper>
                                <ProfileHeaderTitle>{guestUserModel.firstName}</ProfileHeaderTitle>
                                <ProfileHeaderSubtitle>Guest</ProfileHeaderSubtitle>
                                <ProfileHeaderEditButton onClick={handleClick} ref={wrapperRef}>
                                    Report guest
                                </ProfileHeaderEditButton>
                            </ProfileHeaderTitleWrapper>
                        </ProfileHeaderWrapper>
                        <ProfileHeaderDesktopDivider></ProfileHeaderDesktopDivider>
                        <ProfileVerifiedWrapper>
                            <ProfileVerifiedContact>
                                <ProfileVerifiedContactIcon
                                    src={
                                        guestUserModel.userIDConfirmed
                                            ? "https://d292awxalydr86.cloudfront.net/Universal+icons/Identity.svg"
                                            : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                                    }
                                    alt={"Verified contact icon"}
                                />
                                <ProfileVerifiedContactText>{guestUserModel.userIDConfirmed ? "ID verified" : "ID unverified"}</ProfileVerifiedContactText>
                            </ProfileVerifiedContact>
                            <ProfileVerifiedContact>
                                <ProfileVerifiedContactIcon
                                    src={
                                        guestUserModel.phoneConfirmed
                                            ? "https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg"
                                            : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                                    }
                                    alt={"Verified contact icon"}
                                />
                                <ProfileVerifiedContactText>{guestUserModel.phoneConfirmed ? "Phone verified" : "Phone unverified"}</ProfileVerifiedContactText>
                            </ProfileVerifiedContact>
                            <ProfileVerifiedContact>
                                <ProfileVerifiedContactIcon
                                    src={
                                        guestUserModel.emailConfirmed
                                            ? "https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg"
                                            : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                                    }
                                    alt={"Verified contact icon"}
                                />
                                <ProfileVerifiedContactText>{guestUserModel.emailConfirmed ? "Email verified" : "Email unverified"}</ProfileVerifiedContactText>
                            </ProfileVerifiedContact>
                        </ProfileVerifiedWrapper>
                    </ProfileDesktopHeaderWrapper>
                    <ProfileDescriptionReviewsContainer>
                        <ProfileDescription guestUserModel={guestUserModel} />
                        {reviews.length > 0 ? (
                            <ProfileReviewsWrapper>
                                <ProfileReviewsTitle>{reviews.length} reviews</ProfileReviewsTitle>
                                {reviews.map((review, index) => {
                                    return <Review review={review} key={index} />;
                                })}
                            </ProfileReviewsWrapper>
                        ) : (
                            <ProfileReviewsWrapper>
                                <ProfileReviewsTitle>Reviews</ProfileReviewsTitle>
                                <ProfileReviewsSubtitle>No reviews yet</ProfileReviewsSubtitle>
                                <ProfileReviewsText>
                                    Reviews by you and from
                                    <br />
                                    hosts will appear here
                                </ProfileReviewsText>
                            </ProfileReviewsWrapper>
                        )}
                    </ProfileDescriptionReviewsContainer>
                </ProfileMainContainer>
            </ProfileContainer>
            <Footer />
        </>
    );
};

export default Profile;
