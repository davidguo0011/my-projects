import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import Footer from "../../components/footer/footer";
import { ProfileDesktopContentWrapper } from "../profile/profileStyling";
import {
    EditProfileContainer,
    EditProfileWrapper,
    EditProfileAboutTitleWrapper,
    EditProfileAboutTitle,
    EditProfileAboutEditButton,
    EditProfileAboutText,
    EditProfileDetailTitleWrapper,
    EditProfileDetailTitle,
    EditProfileDetailEditButton,
    EditProfileDetailText,
    EditProfilePrompts,
    EditProfileContentWrapper,
    EditProfileSocialWrapper,
    EditProfileSocialTitle,
    EditProfileSocialSubtitle,
    EditProfileSocialItemWrapper,
    EditProfileSocialIcon,
    EditProfileSocialInput,
    EditProfileHoverWrapper,
} from "./editProfileStyling";
import awsconfig from "../../aws-exports";
import EditProfileTitle from "./EditProfileTitle/EditProfileTitle";
import ProfiledesktopHeader from "./ProfiledesktopHeader/ProfiledesktopHeader";
import AddASocialPrompt from "./Prompts/AddASocialPrompt";
import AddABioPrompt from "./Prompts/AddABioPrompt";
// import AddAProfilePhotoPrompt from './Prompts/AddAProfilePhotoPrompt';
import VerifyEmailPrompt from "./Prompts/VerifyEmailPrompt";
// import VerifyPhonePrompt from './Prompts/VerifyPhonePrompt';
import VerifyIdentityPrompt from "./Prompts/VerifyIdentityPrompt";
// import IdVerification from "./EditProfilePopups/IdVerification";
import EditProfilePhone from "./EditProfilePopups/EditProfilePhone";
import EditProfileUpdateVerifyPhone from "./EditProfilePopups/EditProfileUpdateVerifyPhone";
import EditProfileUpdateVerifyEmail from "./EditProfilePopups/EditProfileUpdateVerifyEmail";
import EditProfileVerifyEmail from "./EditProfilePopups/EditProfileVerifyEmail";
import EditProfileEmail from "./EditProfilePopups/EditProfileEmail";
import EditProfileDOB from "./EditProfilePopups/EditProfileDOB";
import EditProfileLegalName from "./EditProfilePopups/EditProfileLegalName";
import EditProfileAbout from "./EditProfilePopups/EditProfileAbout";
import { useNavigate } from "react-router-dom";
import { userModelSelector } from "../../state/selectors/userModel";
import { stripeAccountSelector } from "../../state/selectors/stripeAccount";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import SocialMediaInputFacebook from "./SocialMediaInputs/SocialMediaInputFacebook";
import SocialMediaInputInstagram from "./SocialMediaInputs/SocialMediaInputInstagram";
import SocialMediaInputTwitter from "./SocialMediaInputs/SocialMediaInputTwitter";
import SocialMediaInputTiktok from "./SocialMediaInputs/SocialMediaInputTiktok";

Amplify.configure(awsconfig);

export default function EditProfile() {
    const navigate = useNavigate();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [stripeHostAccount, setStripeHostAccount] = useRecoilState(stripeAccountSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [newPhone, setNewPhone] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [inputStates, setInputStates] = useState({
        aboutInputActive: false,
        legalNameInputActive: false,
        dobInputActive: false,
        emailInputActive: false,
        verifyEmailInputActive: false,
        phoneInputActive: false,
        idInputActive: false,
        verifyUpdateEmailInputActive: false,
        verifyUpdatePhoneInputActive: false,
    });
    const [linkInstagramPopup, setLinkInstagramPopup] = useState(false);
    const [linkFacebookPopup, setLinkFacebookPopup] = useState(false);
    const [linkTwitterPopup, setLinkTwitterPopup] = useState(false);
    const [linkTiktokPopup, setLinkTiktokPopup] = useState(false);
    useEffect(() => {
        const shouldHideOverflow = linkInstagramPopup || linkFacebookPopup || linkTwitterPopup || linkTiktokPopup;
        document.body.style.overflow = shouldHideOverflow ? "hidden" : "unset";
    }, [linkInstagramPopup, linkFacebookPopup, linkTwitterPopup, linkTiktokPopup]);

    const toggleInput = (inputName: string, value: boolean) => {
        setInputStates((prevState) => {
            return { ...prevState, [inputName]: value };
        });
    };

    useEffect(() => {
        if (!userModel) {
            navigate("/");
        }
    }, [userModel, navigate]);

    const getProfileShortDescription = () => {
        if (!userModel) return;
        if (userModel.profileDescription) {
            if (userModel.profileDescription.length > 40) {
                return `${userModel.profileDescription.substr(0, 40)}...`;
            } else {
                return userModel.profileDescription;
            }
        } else {
            return "Add a bio";
        }
    };
    const renderGovernmentIDStatus = () => {
        if (stripeHostAccount) {
            if (stripeHostAccount?.individual?.verification?.status === "verified") {
                return "Verified";
            } else if (stripeHostAccount?.individual?.verification?.status === "pending") {
                return "Pending";
            } else {
                return "Not verified";
            }
        } else {
            return "Please add a bank account first";
        }
    };
    const renderGovernmentIDBtn = () => {
        return (
            <EditProfileDetailEditButton
                onClick={() => {
                    navigate("/payout-settings");
                }}
            >
                Edit
            </EditProfileDetailEditButton>
        );
    };

    if (!userModel) {
        return null;
    }

    return (
        <>
            <HelmetTags title="Edit profile | Anystay" />
            <EditProfileContainer>
                <EditProfileTitle />
                <EditProfileContentWrapper>
                    <ProfiledesktopHeader />
                    <ProfileDesktopContentWrapper>
                        <EditProfilePrompts>
                            {userModel.emailConfirmed === false && (
                                <VerifyEmailPrompt
                                    handleClick={() => {
                                        toggleInput("verifyEmailInputActive", true);
                                    }}
                                />
                            )}
                            {stripeHostAccount?.individual?.verification?.status !== "verified" && (
                                <VerifyIdentityPrompt
                                    handleClick={() => {
                                        navigate("/payout-settings");
                                        toggleInput("idInputActive", true);
                                    }}
                                />
                            )}
                            {(userModel.profileDescription === "" || userModel.profileDescription === null) && (
                                <AddABioPrompt
                                    handleClick={() => {
                                        toggleInput("aboutInputActive", true);
                                    }}
                                />
                            )}
                            {userModel.instagramURL === null && userModel.facebookURL === null && userModel.twitterURL === null && <AddASocialPrompt />}
                        </EditProfilePrompts>
                        <EditProfileHoverWrapper>
                            <EditProfileWrapper onClick={() => toggleInput("aboutInputActive", true)}>
                                <EditProfileAboutTitleWrapper>
                                    <EditProfileAboutTitle>Bio</EditProfileAboutTitle>
                                    <EditProfileAboutEditButton onClick={() => toggleInput("aboutInputActive", true)}>Edit</EditProfileAboutEditButton>
                                </EditProfileAboutTitleWrapper>
                                <EditProfileAboutText>{getProfileShortDescription()}</EditProfileAboutText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileHoverWrapper>
                            <EditProfileWrapper onClick={() => toggleInput("legalNameInputActive", true)}>
                                <EditProfileDetailTitleWrapper>
                                    <EditProfileDetailTitle>Name</EditProfileDetailTitle>
                                    <EditProfileDetailEditButton onClick={() => toggleInput("legalNameInputActive", true)}>Edit</EditProfileDetailEditButton>
                                </EditProfileDetailTitleWrapper>
                                <EditProfileDetailText>{`${userModel.firstName} ${userModel.lastName}`}</EditProfileDetailText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileHoverWrapper>
                            <EditProfileWrapper onClick={() => toggleInput("dobInputActive", true)}>
                                <EditProfileDetailTitleWrapper>
                                    <EditProfileDetailTitle>Birthdate</EditProfileDetailTitle>
                                    <EditProfileDetailEditButton onClick={() => toggleInput("dobInputActive", true)}>Edit</EditProfileDetailEditButton>
                                </EditProfileDetailTitleWrapper>
                                <EditProfileDetailText>{userModel.dateOfBirth}</EditProfileDetailText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileHoverWrapper>
                            <EditProfileWrapper
                                onClick={() => {
                                    if (userModel.emailConfirmed) {
                                        toggleInput("emailInputActive", true);
                                    } else {
                                        toggleInput("verifyEmailInputActive", true);
                                    }
                                }}
                            >
                                <EditProfileDetailTitleWrapper>
                                    <EditProfileDetailTitle>Email address</EditProfileDetailTitle>
                                    {userModel.emailConfirmed ? (
                                        <EditProfileDetailEditButton onClick={() => toggleInput("emailInputActive", true)}>Edit</EditProfileDetailEditButton>
                                    ) : (
                                        <div style={{ display: "flex", gap: "16px" }}>
                                            <EditProfileDetailEditButton onClick={() => toggleInput("verifyEmailInputActive", true)}>Edit</EditProfileDetailEditButton>
                                        </div>
                                    )}
                                </EditProfileDetailTitleWrapper>
                                <EditProfileDetailText>{userModel.email}</EditProfileDetailText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileHoverWrapper>
                            <EditProfileWrapper onClick={() => toggleInput("phoneInputActive", true)}>
                                <EditProfileDetailTitleWrapper>
                                    <EditProfileDetailTitle>Phone number</EditProfileDetailTitle>
                                    <EditProfileDetailEditButton onClick={() => toggleInput("phoneInputActive", true)}>Edit</EditProfileDetailEditButton>
                                </EditProfileDetailTitleWrapper>
                                <EditProfileDetailText>{userModel.phone}</EditProfileDetailText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileHoverWrapper>
                            <EditProfileWrapper
                                onClick={() => {
                                    navigate("/payout-settings");
                                }}
                            >
                                <EditProfileDetailTitleWrapper>
                                    <EditProfileDetailTitle>Government ID</EditProfileDetailTitle>
                                    {renderGovernmentIDBtn()}
                                </EditProfileDetailTitleWrapper>
                                <EditProfileDetailText>{renderGovernmentIDStatus()}</EditProfileDetailText>
                            </EditProfileWrapper>
                        </EditProfileHoverWrapper>

                        <EditProfileSocialWrapper style={{ marginTop: "24px" }}>
                            <EditProfileSocialTitle>Social links</EditProfileSocialTitle>
                            <EditProfileSocialSubtitle>Add social links to your profile</EditProfileSocialSubtitle>
                            <EditProfileSocialItemWrapper onClick={() => setLinkInstagramPopup(!linkInstagramPopup)}>
                                <EditProfileSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg"} alt="" />
                                <EditProfileSocialInput type="button" selected={Boolean(userModel.instagramURL)}>
                                    {userModel.instagramURL ? userModel.instagramURL : "@username"}
                                </EditProfileSocialInput>
                            </EditProfileSocialItemWrapper>
                            <EditProfileSocialItemWrapper onClick={() => setLinkFacebookPopup(!linkFacebookPopup)}>
                                <EditProfileSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt="" />
                                <EditProfileSocialInput type="button" selected={Boolean(userModel.facebookURL)}>
                                    {userModel.facebookURL ? userModel.facebookURL : "@username"}
                                </EditProfileSocialInput>
                            </EditProfileSocialItemWrapper>
                            <EditProfileSocialItemWrapper onClick={() => setLinkTwitterPopup(!linkTwitterPopup)}>
                                <EditProfileSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt="" />
                                <EditProfileSocialInput type="button" selected={Boolean(userModel.twitterURL)}>
                                    {userModel.twitterURL ? userModel.twitterURL : "@username"}
                                </EditProfileSocialInput>
                            </EditProfileSocialItemWrapper>
                            <EditProfileSocialItemWrapper onClick={() => setLinkTiktokPopup(!linkTiktokPopup)}>
                                <EditProfileSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg"} alt="" />
                                <EditProfileSocialInput type="button" selected={Boolean(userModel.tiktokURL)}>
                                    {userModel.tiktokURL ? userModel.tiktokURL : "@username"}
                                </EditProfileSocialInput>
                            </EditProfileSocialItemWrapper>
                        </EditProfileSocialWrapper>
                        {linkInstagramPopup && <SocialMediaInputInstagram selected={linkInstagramPopup} toggleSelected={() => setLinkInstagramPopup(!linkInstagramPopup)} />}
                        {linkFacebookPopup && <SocialMediaInputFacebook selected={linkFacebookPopup} toggleSelected={() => setLinkFacebookPopup(!linkFacebookPopup)} />}
                        {linkTwitterPopup && <SocialMediaInputTwitter selected={linkTwitterPopup} toggleSelected={() => setLinkTwitterPopup(!linkTwitterPopup)} />}
                        {linkTiktokPopup && <SocialMediaInputTiktok selected={linkTiktokPopup} toggleSelected={() => setLinkTiktokPopup(!linkTiktokPopup)} />}

                        {inputStates.aboutInputActive && <EditProfileAbout toggleInput={toggleInput} active={inputStates.aboutInputActive} />}

                        {inputStates.legalNameInputActive && <EditProfileLegalName toggleInput={toggleInput} active={inputStates.legalNameInputActive} />}

                        {inputStates.dobInputActive && <EditProfileDOB toggleInput={toggleInput} active={inputStates.dobInputActive} />}

                        {inputStates.emailInputActive && <EditProfileEmail setNewEmail={setNewEmail} active={inputStates.emailInputActive} toggleInput={toggleInput} />}

                        {inputStates.phoneInputActive && <EditProfilePhone setNewPhone={setNewPhone} active={inputStates.phoneInputActive} toggleInput={toggleInput} />}

                        {inputStates.verifyEmailInputActive && <EditProfileVerifyEmail active={inputStates.verifyEmailInputActive} toggleInput={toggleInput} />}

                        <EditProfileUpdateVerifyEmail newEmail={newEmail} toggleInput={toggleInput} active={inputStates.verifyUpdateEmailInputActive} />

                        <EditProfileUpdateVerifyPhone newPhone={newPhone} toggleInput={toggleInput} active={inputStates.verifyUpdatePhoneInputActive} />

                        {/* <IdVerification active={inputStates.idInputActive} toggleInput={toggleInput} /> */}
                    </ProfileDesktopContentWrapper>
                </EditProfileContentWrapper>
            </EditProfileContainer>
            <Footer />
        </>
    );
}
