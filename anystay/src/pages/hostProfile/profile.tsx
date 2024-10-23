import { useState, useEffect, useCallback } from "react";
import { ProfileTitleIcon, ProfileHeaderSubtitle, ProfileTitleBackButton } from "./profileStyling";
import Footer from "../../components/footer/footer";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { UserModel } from "../../interfaces/models/userModel";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { ListingModel } from "../../interfaces/models/listingModel";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import BackBtn from "../../components/btn/backBtn/backBtn";
import {
    ProfileContainer,
    ProfileDescriptionReviewsContainer,
    ProfileDesktopHeaderWrapper,
    ProfileHeaderDesktopDivider,
    ProfileHeaderEditButton,
    ProfileHeaderImage,
    ProfileHeaderImageWrapper,
    ProfileHeaderTitle,
    ProfileHeaderTitleWrapper,
    ProfileHeaderWrapper,
    ProfileMainContainer,
    ProfileTitle,
    ProfileTitleWrapper,
    ProfileVerifiedContact,
    ProfileVerifiedContactIcon,
    ProfileVerifiedContactText,
    ProfileVerifiedWrapper,
} from "../profile/profileStyling";

const HostProfile: React.FC = () => {
    const [hostUserModel, setHostUserModel] = useState<UserModel | null>(null);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [listings, setListings] = useState<Array<ListingModel>>([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const getHostProfile = useCallback(async (): Promise<void> => {
        await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, `user/host/profile/${id}`)
            .then((res) => {
                console.log(res);
                setHostUserModel(res.body.userModel);
                setListings(res.body.listings.items);
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });
    }, [id]);

    useEffect(() => {
        getHostProfile();
    }, [getHostProfile]);

    const handleBack = () => {
        navigate(-1);
    };
    const renderTitle = () => {
        if (userModel?.id === hostUserModel?.id) {
            return `Welcome, ${userModel?.firstName}`;
        }
        return "Meet your host";
    };

    if (!listings || !hostUserModel) {
        return null;
    }
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
                                        hostUserModel.profilePicture
                                            ? constructOptimisedProtectedImageUrl(hostUserModel.profilePicture, hostUserModel.identityID, 100)
                                            : "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"
                                    }
                                    alt="Featured User profile picture"
                                />
                            </ProfileHeaderImageWrapper>
                            <ProfileHeaderTitleWrapper>
                                <ProfileHeaderTitle>{hostUserModel.firstName}</ProfileHeaderTitle>
                                <ProfileHeaderSubtitle confirmed={false}>Host</ProfileHeaderSubtitle>
                                <ProfileHeaderEditButton className={"intercom_custom_launcher"}>Report host</ProfileHeaderEditButton>
                            </ProfileHeaderTitleWrapper>
                        </ProfileHeaderWrapper>
                        <ProfileHeaderDesktopDivider></ProfileHeaderDesktopDivider>
                        <ProfileVerifiedWrapper>
                            {hostUserModel.userIDConfirmed ? (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Identity.svg"} alt={"verified contact icon"} />
                                    <ProfileVerifiedContactText>ID verified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            ) : (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"} alt={"unverified contact icon"} />
                                    <ProfileVerifiedContactText>ID unverified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            )}
                            {hostUserModel.phoneConfirmed ? (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"verified contact icon"} />
                                    <ProfileVerifiedContactText>Phone verified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            ) : (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"} alt={"unerified contact icon"} />
                                    <ProfileVerifiedContactText>Phone unverified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            )}
                            {hostUserModel.emailConfirmed ? (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon
                                        width="12px"
                                        height="12px"
                                        src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"}
                                        alt={"Verified contact icon"}
                                    />
                                    <ProfileVerifiedContactText>Email verified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            ) : (
                                <ProfileVerifiedContact>
                                    <ProfileVerifiedContactIcon
                                        width="12px"
                                        height="12px"
                                        src={"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"}
                                        alt={"Verified contact icon"}
                                    />
                                    <ProfileVerifiedContactText>Email unverified</ProfileVerifiedContactText>
                                </ProfileVerifiedContact>
                            )}
                        </ProfileVerifiedWrapper>
                    </ProfileDesktopHeaderWrapper>
                    <ProfileDescriptionReviewsContainer>
                        <ProfileDescription listings={listings} userModel={hostUserModel} />
                    </ProfileDescriptionReviewsContainer>
                </ProfileMainContainer>
            </ProfileContainer>
            <Footer />
        </>
    );
};

export default HostProfile;
