import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ChangeBookingTitle,
    ChangeBookingTitleWrapper,
    ShareYourStaySocialsWrapper,
    ShareListingCopyLinkButtonWrapper,
    ShareListingCopyLink,
    ShareListingCopyLinkButton,
    IndividualFacebookShareButton,
    IndividualShareButtonIcon,
    IndividualShareButtonText,
    IndividualEmailShareButton,
    IndividualTwitterShareButton,
    ChangeBookingButtonWrapper,
} from "../changeBookingStyling";
import { AnimatePresence } from "framer-motion";
import CycleBtn from "../../../components/btn/cycleBtn/cycleBtn";
import CopiedToClipboardPortal from "../../../components/popupNotification/copiedToClipboard/CopiedToClipboard";
import { ExtendedBookingRequestModel, ExtendedListingModel } from "../interface/interface";

interface ShareUsProps {
    bookingRequest: ExtendedBookingRequestModel;
    bookingRequestListing: ExtendedListingModel;
}

const ShareUs: React.FC<ShareUsProps> = ({ bookingRequest, bookingRequestListing }) => {
    const navigate = useNavigate();
    const [shareLinkCopied, setShareLinkCopied] = useState(false);

    return (
        <Fragment>
            <ChangeBookingTitleWrapper style={{ paddingLeft: window.innerWidth < 768 ? "24px" : "" }}>
                <ChangeBookingTitle style={{ marginLeft: "0" }}>Share us</ChangeBookingTitle>
            </ChangeBookingTitleWrapper>
            <ShareYourStaySocialsWrapper>
                <ShareListingCopyLinkButtonWrapper>
                    <ShareListingCopyLink>{`Anystay.com.au/listing/${bookingRequest.listingmodelID}`.slice(0, 26) + "..."}</ShareListingCopyLink>
                    <ShareListingCopyLinkButton
                        type="button"
                        onClick={() => {
                            setShareLinkCopied(true);
                            setTimeout(() => {
                                setShareLinkCopied(false);
                            }, 2000);
                            navigator.clipboard.writeText(`https://anystay.com.au/listing/${bookingRequest.listingmodelID}`);
                        }}
                    >
                        {shareLinkCopied ? "Copied" : "Copy"}
                    </ShareListingCopyLinkButton>
                    <AnimatePresence>{shareLinkCopied && <CopiedToClipboardPortal />}</AnimatePresence>
                </ShareListingCopyLinkButtonWrapper>
                <IndividualFacebookShareButton quote={"Check out Anystay!"} url={"https://anystay.com.au"} hashtag={"#anystay"}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Facebook</IndividualShareButtonText>
                </IndividualFacebookShareButton>
                <IndividualEmailShareButton
                    url={"https://anystay.com.au"}
                    subject={bookingRequestListing ? `Come check out: ${bookingRequestListing.propertyTitle}!` : ""}
                    separator={" "}
                    body={"Come check out the listing i will be staying at!"}
                >
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Email</IndividualShareButtonText>
                </IndividualEmailShareButton>
                <IndividualTwitterShareButton title={"Check out Anystay!"} url={"https://anystay.com.au"} hashtags={["#anystay"]}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Twitter</IndividualShareButtonText>
                </IndividualTwitterShareButton>
            </ShareYourStaySocialsWrapper>
            <ChangeBookingButtonWrapper>
                <CycleBtn
                    style={{ marginRight: window.innerWidth > 768 ? "32px" : "", marginBottom: window.innerWidth < 768 ? "16px" : "" }}
                    background={"red"}
                    onClick={() => navigate(`/your-booking/${bookingRequest ? bookingRequest.id : ""}`)}
                />
            </ChangeBookingButtonWrapper>
        </Fragment>
    );
};
export default ShareUs;
