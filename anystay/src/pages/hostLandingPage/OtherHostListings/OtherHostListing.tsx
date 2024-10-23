import {
    HostLandingPageOtherListingButtonIcon,
    HostLandingPageOtherListingWrapper,
    HostLandingPageOtherListingTitle,
    HostLandingPageOtherListingContent,
    HostLandingPageOtherListingButton,
} from "./OtherHostListingStyling";
import ListingCard from "./ListingCard/ListingCard";
import { useState } from "react";
import useClickOutside from "../../../hook/useClickOutside";

interface OtherHostLisitingProps {
    createListingBtnOnClick: any;
}

const OtherHostListing: React.FC<OtherHostLisitingProps> = ({ createListingBtnOnClick }) => {
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

    const contactSupportIntercomeRef = useClickOutside<HTMLButtonElement>(isOpen, createListingBtnOnClick);

    return (
        <HostLandingPageOtherListingWrapper>
            <HostLandingPageOtherListingTitle>Join hosts from around Australia</HostLandingPageOtherListingTitle>
            <HostLandingPageOtherListingContent>
                <ListingCard
                    title="Cockatoo, VIC"
                    description="Trickle Hill is located on the edge of the Dandenong ranges, very close to Kurth Kiln and Bunyip National park."
                    imgUrl="https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Listing+1.jpg"
                />
                <ListingCard
                    title="North Bondi, NSW"
                    description="Welcome to the ultimate Bondi Luxury stay. Simply the best view of the iconic Bondi Beach."
                    imgUrl="https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Listing+2.jpg"
                />
                <ListingCard
                    title="Kalinga, NSW"
                    description="Our beautiful Kirribilli apartment has the best views of the Sydney Harbour Bridge you could possibly ask for."
                    imgUrl="https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/listing+3.jpg"
                />
            </HostLandingPageOtherListingContent>
            <HostLandingPageOtherListingButton onClick={() => createListingBtnOnClick()} ref={contactSupportIntercomeRef}>
                <HostLandingPageOtherListingButtonIcon src={"https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway+icon.svg"} />
                Sync with Hostaway
            </HostLandingPageOtherListingButton>
        </HostLandingPageOtherListingWrapper>
    );
};

export default OtherHostListing;
