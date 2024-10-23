import { useState, useEffect } from "react";
import {
    ShareListingPopupWrapper,
    ShareListingPopupTitleWrapper,
    ShareListingPopupTitle,
    ShareListingPopupHeaderWrapper,
    ShareListingPopupHeaderImage,
    ShareListingPopupHeaderPlaceType,
    ShareListingPopupHeaderText,
    ShareListingPopupHeaderTextPrice,
    ShareListingDivider,
    ShareListingDoneButton,
    IndividualShareButton,
    IndividualShareButtonIcon,
    IndividualShareButtonText,
    IndividualEmailShareButton,
    IndividualFacebookShareButton,
    IndividualTwitterShareButton,
} from "../viewListingStyling";
import CopiedToClipboardPortal from "../../../components/popupNotification/copiedToClipboard/CopiedToClipboard";
import { AnimatePresence } from "framer-motion";
import useClickOutside from "../../../hook/useClickOutside";
import { ListingInterface } from "../viewListing";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

export default function ShareListingPopup({ listing, selected, toggleShareListing }: { listing: ListingInterface; selected: boolean; toggleShareListing: () => Promise<void> }) {
    const [copied, setCopied] = useState(false);
    const wrapperRef = useClickOutside(selected, toggleShareListing);

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);
            // Clear the timeout when the component unmounts or copied state changes
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    const getPlaceType = (placeType: string) => {
        switch (placeType) {
            case "entire-place":
                return "Entire place";
            case "hotel-room":
                return "Hotel room";
            case "private-room":
                return "Private room";
            case "shared-room":
                return "Shared room";
            default:
                break;
        }
    };

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={toggleShareListing} noContinueBtn={true}>
            <ShareListingPopupWrapper>
                <ShareListingPopupTitleWrapper>
                    <ShareListingPopupTitle>Share listing</ShareListingPopupTitle>
                </ShareListingPopupTitleWrapper>
                <ShareListingPopupHeaderWrapper>
                    <ShareListingPopupHeaderImage src={constructOptimisedImageUrl(JSON.parse(listing.listingImages[0] as string).key, 500)} alt={"Listing image"} />
                    <div style={{ gridRow: "1/2", gridColumn: "2/3", display: "flex", flexDirection: "column" }}>
                        <ShareListingPopupHeaderPlaceType>{getPlaceType(listing.typeOfPlace)}</ShareListingPopupHeaderPlaceType>
                        <ShareListingPopupHeaderText>{listing.propertyTitle}</ShareListingPopupHeaderText>
                        <ShareListingPopupHeaderTextPrice>
                            <span>${Number(listing.minimumPrice / 100).toFixed(2)} AUD</span> / night
                        </ShareListingPopupHeaderTextPrice>
                    </div>
                </ShareListingPopupHeaderWrapper>
                <div style={{ width: "100%", display: "grid", gridTemplateColumns: "calc(50% - 8px) calc(50% - 8px)", gap: "16px", padding: "32px 0" }}>
                    <IndividualFacebookShareButton quote={"Check out Anystay!"} url={"https://anystay.com.au"} hashtag={"#anystay"}>
                        <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>Facebook</IndividualShareButtonText>
                    </IndividualFacebookShareButton>
                    <IndividualEmailShareButton
                        url={"https://anystay.com.au"}
                        subject={`Come check out: ${listing.propertyTitle}!`}
                        separator={" "}
                        body={"Come check out the listing I will be staying at!"}
                    >
                        <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>Email</IndividualShareButtonText>
                    </IndividualEmailShareButton>
                    <IndividualTwitterShareButton title={"Check out Anystay!"} url={"https://anystay.com.au"} hashtags={["#anystay"]}>
                        <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>Twitter</IndividualShareButtonText>
                    </IndividualTwitterShareButton>
                    <IndividualShareButton
                        onClick={() => {
                            navigator.clipboard.writeText(`http://anystay.com.au/listing/${listing.id}`);
                            setCopied(true);
                        }}
                    >
                        <IndividualShareButtonIcon style={{ height: "24px", width: "24px" }} src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Duplicate+2.svg"} alt={"Icon"} />
                        <IndividualShareButtonText>{copied ? "Copied" : "Copy link"}</IndividualShareButtonText>
                        <AnimatePresence>{copied && <CopiedToClipboardPortal />}</AnimatePresence>
                    </IndividualShareButton>
                </div>

                <ShareListingDivider />
                <ShareListingDoneButton type="button" onClick={toggleShareListing}>
                    Done
                </ShareListingDoneButton>
            </ShareListingPopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
