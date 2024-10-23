import {
    CreateBookingWrapper,
    CreateBookingContentWrapper,
    CreateBookingTitleWrapper,
    CreateBookingTitle,
    ShareListingOptionsWrapper,
    ShareListingCopyLinkButtonWrapper,
    ShareListingCopyLink,
    ShareListingCopyLinkButton,
    IndividualFacebookShareButton,
    IndividualShareButtonIcon,
    IndividualShareButtonText,
    IndividualEmailShareButton,
    IndividualTwitterShareButton,
    CreateBookingButtonWrapper,
} from "../createBookingStyling";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CopiedToClipboardPortal from "../../../components/popupNotification/copiedToClipboard/CopiedToClipboard";
import CycleBtn from "../../../components/btn/cycleBtn/cycleBtn";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";

interface ShareUsPageProps {
    bookingRequest: BookingRequestModel | null;
    listing: ListingModel;
    pageIndex: number;
}
export default function ShareUsPage({ bookingRequest, listing, pageIndex }: ShareUsPageProps) {
    const [shareLinkCopied, setShareLinkCopied] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const navigate = useNavigate();

    return (
        <CreateBookingWrapper pageIndex={pageIndex}>
            <CreateBookingContentWrapper pageIndex={pageIndex}>
                <CreateBookingTitleWrapper>
                    <CreateBookingTitle style={{marginLeft: 0}}>Share us for 10% off your next stay</CreateBookingTitle>
                </CreateBookingTitleWrapper>
                <ShareListingOptionsWrapper>
                    <ShareListingCopyLinkButtonWrapper>
                        <ShareListingCopyLink>t.ly/UejTz</ShareListingCopyLink>
                        {/* listing URL link */}
                        {/* {`Anystay.com.au/listing/${bookingRequest!.listingmodelID}`.slice(0, 26) + "..."} */}
                        <ShareListingCopyLinkButton
                            type="button"
                            onClick={() => {
                                setShareLinkCopied(true);
                                setTimeout(() => {
                                    setShareLinkCopied(false);
                                }, 2000);

                                navigator.clipboard.writeText(`https://anystay.com.au/listing`);
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
                        subject={`Come check out: ${listing.propertyTitle}!`}
                        separator={" "}
                        body={"Come check out the listing i will be staying at!"}
                    >
                        <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>Email</IndividualShareButtonText>
                    </IndividualEmailShareButton>

                    <IndividualTwitterShareButton title={"Check out Anystay!"} url={"https://anystay.com.au"}>
                        <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>Twitter</IndividualShareButtonText>
                    </IndividualTwitterShareButton>
                </ShareListingOptionsWrapper>
                {window.innerWidth < 768 ? (
                    <CreateBookingButtonWrapper>
                        <CycleBtn background={"red"} onClick={() => navigate(`/your-stays/${userModel!.id}`)} style={{ marginBottom: "16px" }} />
                    </CreateBookingButtonWrapper>
                ) : (
                    <CreateBookingButtonWrapper>
                        <CycleBtn
                            background={"red"}
                            onClick={() => navigate(`/your-stays/${userModel!.id}`)}
                        />
                    </CreateBookingButtonWrapper>
                )}
            </CreateBookingContentWrapper>
        </CreateBookingWrapper>
    );
}
