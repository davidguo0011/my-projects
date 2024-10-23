import {
    HostLandingPageOtherListingCardWrapper,
    HostLandingPageOtherListingCardImageWrapper,
    HostLandingPageOtherListingCardImage,
    HostLandingPageOtherListingCardSubtitle,
    HostLandingPageOtherListingCardFooterWrapper,
} from "../OtherHostListingStyling";

interface ListingCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ imgUrl, title, description }) => {
    return (
        <HostLandingPageOtherListingCardWrapper>
            <HostLandingPageOtherListingCardImageWrapper>
                <HostLandingPageOtherListingCardImage src={imgUrl} alt="Host image" />
            </HostLandingPageOtherListingCardImageWrapper>
            <HostLandingPageOtherListingCardSubtitle>
                {title}
            </HostLandingPageOtherListingCardSubtitle>
            <HostLandingPageOtherListingCardFooterWrapper>
                {description}
            </HostLandingPageOtherListingCardFooterWrapper>
        </HostLandingPageOtherListingCardWrapper>
    );
};

export default ListingCard;
