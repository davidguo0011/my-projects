import {
    HeroListingCardContainer,
    HeroListingCardImage,
    HeroListingCardTitle,
    HeroListingCardSubtitle,
    HeroListingCardPrice
} from "./heroListingCardStyling";  

const HeroListingCard = () => {
    return (
        <HeroListingCardContainer>
            <HeroListingCardImage src="https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Hero+listing.jpg" />
            <HeroListingCardTitle>House in Tambourine Mountains</HeroListingCardTitle>
            <HeroListingCardSubtitle>Mountain Majesty with Poolside: Relaxing Gateway</HeroListingCardSubtitle>
            <HeroListingCardSubtitle>4 - 12 Jan</HeroListingCardSubtitle>
            <HeroListingCardPrice>$124 AUD</HeroListingCardPrice>
        </HeroListingCardContainer>
    );
};

export default HeroListingCard;
