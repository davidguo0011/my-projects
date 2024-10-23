import {
    EditListingListingDetailsSectionEditButton,
    EditListingBasicsQuestionTitle,
    EditListingBasicsQuestionTitleWrapper,
    EditListingBasicsQuestionTitleText,
    EditListingBasicsQuestionEditButton,
    EditListingBasicsQuestionText,
    EditListingPricingDetailsSubPageWrapper,
    EditListingBasicsQuestionHoverWrapper,
} from "../../editListingStyling";
import AnimationWrapperForPageSlider from "../../../../components/animationWrapper/AnimationWrapperForPageSlider";
import { EditListingContentInterface } from "../../editListing";
import useIsDesktopSize from "../../../../hook/useIsDesktopSize";

export default function PricingAndFees({ activateCard, listingData }: EditListingContentInterface) {
    const isDesktopSize = useIsDesktopSize();
    return (
        <EditListingPricingDetailsSubPageWrapper>
            <EditListingBasicsQuestionTitle style={isDesktopSize ? { marginTop: "48px" } : { marginTop: "32px" }}>Pricing</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updatePriceCard")}>
                    <EditListingBasicsQuestionTitleText>Base price</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updatePriceCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updatePriceCard")}>
                    ${Number(listingData.minimumPrice / 100)}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>
            {/* <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Listing currency</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard({updateCurrencyCard: true})} type="button">Edit</EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper>
            <EditListingBasicsQuestionText style={{marginBottom: 0}}>
                AUD - Australian Dollar 
            </EditListingBasicsQuestionText> */}

            <EditListingBasicsQuestionTitle>Discounts</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateDiscountCard")}>
                    <EditListingBasicsQuestionTitleText>Weekly discount</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateDiscountCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updateDiscountCard")}>{listingData.weeklyDiscount}%</EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateDiscountCard")}>
                    <EditListingBasicsQuestionTitleText>Monthly discount</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateDiscountCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updateDiscountCard")}>
                    {listingData.monthlyDiscount}%
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionTitle>Additional fees</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper style={{ marginTop: "0px" }} onClick={() => activateCard("updateCleaningCard")}>
                    <EditListingBasicsQuestionTitleText>Cleaning fee</EditListingBasicsQuestionTitleText>
                    <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateCleaningCard")} type="button">
                        Edit
                    </EditListingListingDetailsSectionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginTop: "8px" }} onClick={() => activateCard("updateCleaningCard")}>
                    {listingData.cleaningFee === null ? "$0" : `$${Number(listingData.cleaningFee / 100)}`}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper style={{ marginTop: "0px" }} onClick={() => activateCard("updateExtraGuestCard")}>
                    <EditListingBasicsQuestionTitleText>Extra guest fee</EditListingBasicsQuestionTitleText>
                    <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateExtraGuestCard")} type="button">
                        Edit
                    </EditListingListingDetailsSectionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginTop: "8px" }} onClick={() => activateCard("updateExtraGuestCard")}>
                    {listingData.extraGuestFee ? `$${Number(listingData.extraGuestFee / 100)}` : "$0"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>
            {/* <EditListingVerifyListingButton>Verify listing</EditListingVerifyListingButton> */}
        </EditListingPricingDetailsSubPageWrapper>
        // </AnimationWrapperForPageSlider>
    );
}
