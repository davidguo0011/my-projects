import { useState } from "react";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import CopiedToClipboardPortal from "../../components/popupNotification/copiedToClipboard/CopiedToClipboard";
import { AnimatePresence } from "framer-motion";
import {
    ReferralPageContainer,
    ShareButtonandViewImgContainer,
    ShareButtonWrapper,
    PageTitle,
    LinkContainer,
    LinkInput,
    CopyButton,
    ShareButtons,
    ViewImage,
    ReferralDescription,
    ReferralDescriptionTitleWrapper,
    ReferralDescriptionNumber,
    ReferralDescriptionTitle,
    ReferralDescriptionSubTitle,
    GetYourCodeBtn,
    ShareEmailButton,
    ShareTwitterButton,
    ShareFacebookButton,
    SharePinterestButton,
    ShareButtonText,
    ShareButtonIcon,
    ShareWhatsappButton,
    ShareMessengerButton,
    ViewImageWrapper,
    ReferralDescriptionWrapper,
    MobileShareButtons,
    MobileShareButton,
    MobileShareText,
    GetYourCodeBtnIcon,
    GetYourCodeBtnText,
} from "./referralPageStyling";
import HelmetTags from "../../components/Helmet/HelmetTags";
import useIsDesktopSize from "../../hook/useIsDesktopSize";
import { ColorTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
import GetYourCode from "./popups/GetYourCode";
import BackBtn from "../../components/btn/backBtn/backBtn";

const ReferralPage = () => {
    const [copied, setCopied] = useState(false);
    const isDesktopSize = useIsDesktopSize();
    const link = "t.ly/UejTz";
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const navigate = useNavigate();
    const [getCodePopup, setGetCodePopup] = useState(false);

    const handleClosePopup = () => {
        setGetCodePopup((prev) => !prev);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Anystay",
                    url: `http://anystay.com.au/referral-page`,
                });
                console.log("Share successful");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Web Share is not supported in your browser.");
        }
    };

    const handleBackButton = () => {
        if (userModel) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    // const shareToInstagramStory = () => {
    //     const instagramUrl = `instagram-stories://share?source_url=${encodeURIComponent("https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg")}`;
    //     window.location.href = instagramUrl;
    //     setTimeout(() => {
    //         if (document.visibilityState === "visible") {
    //             alert("It seems that Instagram is not installed on your device. Please install Instagram to use this feature.");
    //         }
    //     }, 2000);
    // };

    // const handleShareToInstagram = () => {
    //     const imageUrl = "https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg";
    //     const instagramAppUrl = `instagram://library?AssetPath=${imageUrl}`;

    //     window.location.href = instagramAppUrl;
    // };

    return (
        <>
            <HelmetTags title="Referral | Anystay" />
            {!isDesktopSize && <BackBtn onClick={handleBackButton} type="Arrow" mobileTop={24} mobileLeft={24} />}
            <ReferralPageContainer>
                <ShareButtonandViewImgContainer>
                    <ShareButtonWrapper>
                        <PageTitle>Invite 5+ friends for 10% off stays in Australia</PageTitle>
                        <LinkContainer>
                            <LinkInput>{link}</LinkInput>
                            {isDesktopSize ? (
                                <CopyButton onClick={copyLink}>{copied ? "Copied" : "Copy link"}</CopyButton>
                            ) : (
                                <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Copy.svg"} onClick={copyLink} />
                            )}
                            <AnimatePresence>{copied && <CopiedToClipboardPortal />}</AnimatePresence>
                        </LinkContainer>
                        {isDesktopSize ? (
                            <ShareButtons>
                                <ShareEmailButton url={"https://anystay.com.au"} subject={""} separator={" "} body={"Come check out Anystay.com.au!"}>
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Email Icon"} />
                                    <ShareButtonText>Email</ShareButtonText>
                                </ShareEmailButton>
                                <ShareMessengerButton url={"https://anystay.com.au"} appId="">
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Messenger.svg"} alt={"Messenger Icon"} />
                                    <ShareButtonText>Messenger</ShareButtonText>
                                </ShareMessengerButton>
                                <ShareWhatsappButton url={"https://anystay.com.au"} separator={" "}>
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Whatsapp.svg"} alt={"Whatsapp Icon"} />
                                    <ShareButtonText>Whatsapp</ShareButtonText>
                                </ShareWhatsappButton>
                                <ShareFacebookButton quote={"Check out Anystay!"} url={"https://anystay.com.au"} hashtag={"#anystay"}>
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt={"Facebook Icon"} />
                                    <ShareButtonText>Facebook</ShareButtonText>
                                </ShareFacebookButton>
                                <ShareTwitterButton title={"Check out Anystay!"} url={"https://anystay.com.au"}>
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Twitter Icon"} />
                                    <ShareButtonText>Twitter</ShareButtonText>
                                </ShareTwitterButton>
                                <SharePinterestButton
                                    url={"https://anystay.com.au"}
                                    media={"https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg"}
                                    description={"Check out Anystay!"}
                                >
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Pinterest.svg"} alt={"Pinterest Icon"} />
                                    <ShareButtonText>Pinterest</ShareButtonText>
                                </SharePinterestButton>
                            </ShareButtons>
                        ) : (
                            <MobileShareButtons>
                                {/* <MobileShareButton onClick={handleShareToInstagram}>
                                    <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg"} alt={"Instagram Icon"} />
                                    <ShareButtonText>Share to instagram story</ShareButtonText>
                                </MobileShareButton> */}
                                <MobileShareButton url={"https://anystay.com.au"} subject={""} separator={" "} body={"Come check out Anystay.com.au!"}>
                                    {/* <ShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Email Icon"} /> */}
                                    <ShareButtonText>Share with Email</ShareButtonText>
                                </MobileShareButton>
                                <MobileShareText onClick={handleShare}>Or, share another way</MobileShareText>
                            </MobileShareButtons>
                        )}
                    </ShareButtonWrapper>
                    <ViewImageWrapper>
                        <ViewImage src="https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg" alt="Referral page image" />
                    </ViewImageWrapper>
                </ShareButtonandViewImgContainer>
                <ReferralDescription>
                    <ReferralDescriptionWrapper>
                        {isDesktopSize && <ReferralDescriptionNumber>1.</ReferralDescriptionNumber>}
                        <ReferralDescriptionTitleWrapper>
                            {isDesktopSize ? (
                                <ReferralDescriptionTitle>Share with 5 or more friends</ReferralDescriptionTitle>
                            ) : (
                                <ReferralDescriptionTitle>1. Share with 5 or more friends</ReferralDescriptionTitle>
                            )}
                            <ReferralDescriptionSubTitle>Invite 5 or more friends to join Anystay to get up to 10% off your first stay anywhere in Australia.</ReferralDescriptionSubTitle>
                        </ReferralDescriptionTitleWrapper>
                    </ReferralDescriptionWrapper>

                    <ReferralDescriptionWrapper>
                        {isDesktopSize && <ReferralDescriptionNumber>2.</ReferralDescriptionNumber>}
                        <ReferralDescriptionTitleWrapper>
                            {isDesktopSize ? (
                                <ReferralDescriptionTitle>Enter your email address</ReferralDescriptionTitle>
                            ) : (
                                <ReferralDescriptionTitle>2. Enter your email address</ReferralDescriptionTitle>
                            )}
                            <ReferralDescriptionSubTitle>We’ll send a discount code to your email address.</ReferralDescriptionSubTitle>
                        </ReferralDescriptionTitleWrapper>
                    </ReferralDescriptionWrapper>

                    <ReferralDescriptionWrapper>
                        {isDesktopSize && <ReferralDescriptionNumber>3.</ReferralDescriptionNumber>}
                        <ReferralDescriptionTitleWrapper>
                            {isDesktopSize ? (
                                <ReferralDescriptionTitle>Use your coupon when booking</ReferralDescriptionTitle>
                            ) : (
                                <ReferralDescriptionTitle>3. Add coupon at checkout</ReferralDescriptionTitle>
                            )}
                            <ReferralDescriptionSubTitle>Find your next stay and apply your discount code to any property in Australia.</ReferralDescriptionSubTitle>
                        </ReferralDescriptionTitleWrapper>
                    </ReferralDescriptionWrapper>
                </ReferralDescription>
                <GetYourCodeBtn onClick={handleClosePopup}>
                    <GetYourCodeBtnIcon width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30 17.5V50M30 17.5H21.1607C19.8583 17.5 18.6092 16.9732 17.6883 16.0355C16.7674 15.0978 16.25 13.8261 16.25 12.5C16.25 11.1739 16.7674 9.90215 17.6883 8.96447C18.6092 8.02677 19.8583 7.5 21.1607 7.5C28.0357 7.5 30 17.5 30 17.5ZM30 17.5H38.8392C40.1417 17.5 41.3907 16.9732 42.3117 16.0355C43.2325 15.0978 43.75 13.8261 43.75 12.5C43.75 11.1739 43.2325 9.90215 42.3117 8.96447C41.3907 8.02677 40.1417 7.5 38.8392 7.5C31.9642 7.5 30 17.5 30 17.5ZM12.5 30H47.5V44.5C47.5 47.3002 47.5 48.7005 46.955 49.77C46.4757 50.7108 45.7108 51.4757 44.77 51.955C43.7005 52.5 42.3003 52.5 39.5 52.5H20.5C17.6997 52.5 16.2996 52.5 15.2301 51.955C14.2892 51.4757 13.5243 50.7108 13.045 49.77C12.5 48.7005 12.5 47.3002 12.5 44.5V30ZM11.5 30H48.5C49.9002 30 50.6003 30 51.135 29.7275C51.6055 29.4877 51.9878 29.1055 52.2275 28.635C52.5 28.1003 52.5 27.4002 52.5 26V21.5C52.5 20.0999 52.5 19.3998 52.2275 18.865C51.9878 18.3946 51.6055 18.0122 51.135 17.7725C50.6003 17.5 49.9002 17.5 48.5 17.5H11.5C10.0999 17.5 9.3998 17.5 8.86503 17.7725C8.39463 18.0122 8.01217 18.3946 7.77247 18.865C7.5 19.3998 7.5 20.0999 7.5 21.5V26C7.5 27.4002 7.5 28.1003 7.77247 28.635C8.01217 29.1055 8.39463 29.4877 8.86503 29.7275C9.3998 30 10.0999 30 11.5 30Z"
                            stroke={ColorTheme.White.color}
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </GetYourCodeBtnIcon>
                    <GetYourCodeBtnText>Get your code</GetYourCodeBtnText>
                </GetYourCodeBtn>
            </ReferralPageContainer>
            <Footer />
            {getCodePopup && <GetYourCode getCodePopup={getCodePopup} handleClosePopup={handleClosePopup} />}
        </>
    );
};

export default ReferralPage;
