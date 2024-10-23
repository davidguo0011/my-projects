import {
    EditListingListingDetailsSectionTitleWrapper,
    EditListingListingDetailsSectionTitle,
    EditListingListingDetailsSectionEditButton,
    EditListingBasicsQuestionTitle,
    EditListingBasicsQuestionTitleWrapper,
    EditListingBasicsQuestionTitleText,
    EditListingBasicsQuestionEditButton,
    EditListingBasicsQuestionText,
    EditListingPricingDetailsSubPageWrapper,
    EditListingBasicsQuestionHoverWrapper,
    EditListingMarginWrapper,
} from "../../editListingStyling";
import { Fragment } from "react";
import AnimationWrapperForPageSlider from "../../../../components/animationWrapper/AnimationWrapperForPageSlider";
import { EditListingContentInterface } from "../../editListing";
import useIsDesktopSize from "../../../../hook/useIsDesktopSize";

export default function RulesAndPolicies({ activateCard, listingData, editListingIndex }: EditListingContentInterface) {
    const formatCheckInCheckOutTime = (time: number) => {
        if (time < 900 || time > 1700) {
            return "None";
        }
        const ampm = time > 1100 && time < 2400 ? "pm" : "am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };
    //listingData.cancellationpolicy is missing in listingData, maybe it should have a default policy
    const listingPolicies = [
        {
            name: "Cancellation policy",
            clickFun: () => activateCard("updateCancellationCard"),

            questionTextContent: listingData.cancellationPolicy ? listingData.cancellationPolicy : "Flexible",
        },
        {
            name: "Instant book",
            clickFun: () => activateCard("updateInstantBookCard"),

            questionTextContent: listingData.instantBookEnabled ? "Enabled" : "Request only",
        },
        {
            name: "Deposit",
            clickFun: () => activateCard("updateDepositCard"),

            questionTextContent: listingData.deposit ? `$${Number(listingData.deposit / 100).toFixed(2)}` : "None",
        },
    ];
    const renderPreparationTime = () => {
        if (listingData.timeBeforeCheckIn > 0 && listingData.timeAfterCheckOut > 0) {
            return `${listingData.timeBeforeCheckIn} days before, ${listingData.timeAfterCheckOut} days after`;
        } else if (listingData.timeBeforeCheckIn > 0) {
            return `${listingData.timeBeforeCheckIn} days before`;
        } else if (listingData.timeAfterCheckOut > 0) {
            return `${listingData.timeAfterCheckOut} days after`;
        } else {
            return "None";
        }
    };
    const isDesktopSize = useIsDesktopSize();

    return (
        <EditListingPricingDetailsSubPageWrapper>
            <EditListingBasicsQuestionTitle style={isDesktopSize ? { marginTop: "48px" } : { marginTop: "32px" }}>Policies</EditListingBasicsQuestionTitle>
            {listingPolicies.map((policy) => {
                return (
                    <Fragment key={policy.name}>
                        <EditListingBasicsQuestionHoverWrapper>
                            <EditListingBasicsQuestionTitleWrapper onClick={policy.clickFun}>
                                <EditListingBasicsQuestionTitleText>{policy.name}</EditListingBasicsQuestionTitleText>
                                <EditListingBasicsQuestionEditButton onClick={policy.clickFun} type="button">
                                    Edit
                                </EditListingBasicsQuestionEditButton>
                            </EditListingBasicsQuestionTitleWrapper>
                            <EditListingBasicsQuestionText onClick={policy.clickFun}>
                                {policy.questionTextContent.charAt(0).toUpperCase() + policy.questionTextContent.slice(1)}
                            </EditListingBasicsQuestionText>
                        </EditListingBasicsQuestionHoverWrapper>
                    </Fragment>
                );
            })}

            <EditListingBasicsQuestionTitle>House rules</EditListingBasicsQuestionTitle>

            {/* <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Check-in</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateCheckInCheckOutCard")} type="button">
                    Edit
                </EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper>
            <EditListingBasicsQuestionText>{listingData.checkInTime ? `After ${formatCheckInCheckOutTime(listingData.checkInTime)}` : "None"}</EditListingBasicsQuestionText>
            <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Checkout</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateCheckInCheckOutCard")} type="button">
                    Edit
                </EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper> */}
            {/* <EditListingBasicsQuestionText>{listingData.checkOutTime ? `Before ${formatCheckInCheckOutTime(listingData.checkOutTime)}` : "None"}</EditListingBasicsQuestionText> */}
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updatePreparationTimeCard")}>
                    <EditListingBasicsQuestionTitleText>Preparation time</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updatePreparationTimeCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updatePreparationTimeCard")}>
                    {renderPreparationTime()}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>
            {/* <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Payment policy</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard({updatePaymentPolicyCard: true})} type="button">Edit</EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper> */}
            {/* <EditListingBasicsQuestionText style={{marginBottom: 0}}>
                {listingData ? listingData.onceOffPaymentsOnly ? 'Once off payments only' : 'Flexible' : null}
            </EditListingBasicsQuestionText> */}
            <EditListingMarginWrapper>
                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingListingDetailsSectionTitleWrapper onClick={() => activateCard("updateHouseRulesCard")}>
                        <EditListingListingDetailsSectionTitle>Other rules</EditListingListingDetailsSectionTitle>
                        <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateHouseRulesCard")} type="button">
                            Edit
                        </EditListingListingDetailsSectionEditButton>
                    </EditListingListingDetailsSectionTitleWrapper>
                    <EditListingBasicsQuestionText style={{ marginTop: 0, marginBottom: 0 }} onClick={() => activateCard("updateHouseRulesCard")}>
                        {listingData.houseRules.length > 0 ? listingData.houseRules.length : "None"}
                    </EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>
            </EditListingMarginWrapper>
            {(listingData.state === "NSW" || listingData.state === "VIC") && (
                <Fragment>
                    <EditListingMarginWrapper>
                        <EditListingBasicsQuestionHoverWrapper>
                            <EditListingListingDetailsSectionTitleWrapper onClick={() => activateCard("updateStraIDCard")}>
                                <EditListingListingDetailsSectionTitle>STRA</EditListingListingDetailsSectionTitle>
                                <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateStraIDCard")} type="button">
                                    Edit
                                </EditListingListingDetailsSectionEditButton>
                            </EditListingListingDetailsSectionTitleWrapper>
                            <EditListingBasicsQuestionText style={{ marginTop: 0, marginBottom: 0 }} onClick={() => activateCard("updateStraIDCard")}>
                                {listingData.straID ? listingData.straID : "None"}
                            </EditListingBasicsQuestionText>
                        </EditListingBasicsQuestionHoverWrapper>
                    </EditListingMarginWrapper>
                </Fragment>
            )}
        </EditListingPricingDetailsSubPageWrapper>
    );
}
