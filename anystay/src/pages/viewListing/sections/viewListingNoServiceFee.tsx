import {
    ViewListingNoServiceFeeIcon,
    ViewListingNoServiceFeeIconWrapper,
    ViewListingNoServiceFeeSubtitle,
    ViewListingNoServiceFeeTitle,
    ViewListingNoServiceFeeTitleWrapper,
    ViewListingNoServiceFeeWrapper,
} from "../viewListingStyling";

export default function ViewListingNoServiceFee() {
    return (
        <ViewListingNoServiceFeeWrapper>
            <ViewListingNoServiceFeeIconWrapper>
                <ViewListingNoServiceFeeIcon src="https://d292awxalydr86.cloudfront.net/Listing+page+icons/No+service+fee+icon.jpg" alt="No Service Fee Icon" />
            </ViewListingNoServiceFeeIconWrapper>
            <ViewListingNoServiceFeeTitleWrapper>
                <ViewListingNoServiceFeeTitle>No service fee</ViewListingNoServiceFeeTitle>
                <ViewListingNoServiceFeeSubtitle>You don’t have to pay any fees for this booking.</ViewListingNoServiceFeeSubtitle>
            </ViewListingNoServiceFeeTitleWrapper>
        </ViewListingNoServiceFeeWrapper>
    );
}
