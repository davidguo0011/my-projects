import {
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

interface CalendarDetailsProps extends EditListingContentInterface {
    iCalToken: string;
}

export default function CalendarDetails({ activateCard, listingData, iCalToken }: CalendarDetailsProps) {
    const isDesktopSize = useIsDesktopSize();
    return (
        <EditListingPricingDetailsSubPageWrapper>
            <EditListingBasicsQuestionTitle style={isDesktopSize ? { marginTop: "48px" } : { marginTop: "32px" }}>Stay length</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateMinimumStayCard")}>
                    <EditListingBasicsQuestionTitleText>Minimum stay</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateMinimumStayCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updateMinimumStayCard")}>
                    {listingData.minimumStay ? `${listingData.minimumStay} nights` : "Unset"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateMinimumStayCard")}>
                    <EditListingBasicsQuestionTitleText>Maximum stay</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateMinimumStayCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updateMinimumStayCard")}>
                    {listingData.maximumStay ? `${listingData.maximumStay} nights` : "Unset"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionTitle>Calendar sync</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateICalCard")}>
                    <EditListingBasicsQuestionTitleText>Import iCal link</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateICalCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updateICalCard")}>iCal link</EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateICalExportCard")}>
                    <EditListingBasicsQuestionTitleText>Export iCal link</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateICalExportCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updateICalExportCard")}>
                    {iCalToken}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionTitle>Availability</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateAdvancedNoticeCard")}>
                    <EditListingBasicsQuestionTitleText>Advance notice</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateAdvancedNoticeCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updateAdvancedNoticeCard")}>
                    {listingData.advanceNotice === 0
                        ? "Same day bookings"
                        : listingData.advanceNotice === 1
                          ? "1 day notice"
                          : listingData.advanceNotice === 2
                            ? "2 day notice"
                            : listingData.advanceNotice === 3
                              ? "3 day notice"
                              : "Not set"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateAvailableDatesCard")}>
                    <EditListingBasicsQuestionTitleText>Availability window</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateAvailableDatesCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updateAvailableDatesCard")}>
                    {listingData.availabilityRange
                        ? listingData.availabilityRange === "all-future-dates"
                            ? "All future dates"
                            : listingData.availabilityRange === "24-months"
                              ? "24 months in advance"
                              : listingData.availabilityRange === "18-months"
                                ? "18 months in advance"
                                : listingData.availabilityRange === "12-months"
                                  ? "12 months in advance"
                                  : listingData.availabilityRange === "6-months"
                                    ? "6 months in advance"
                                    : listingData.availabilityRange === "3-months"
                                      ? "3 months in advance"
                                      : "All future dates"
                        : "All future dates"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>
            {/* <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Unavailable dates</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard({updateUnavailableDates: true})} type="button">Edit</EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper>
            <EditListingBasicsQuestionText>
                {listingData ? listingData.unavailableDates ? `${listingData.unavailableDates.length} selected` : "None selected" : "None selected"}
            </EditListingBasicsQuestionText> */}
            {/* <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Restricted days</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard({updateRestrictedDaysCard: true})} type="button">Edit</EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper>
            <EditListingBasicsQuestionText>
                Restricted booking days
            </EditListingBasicsQuestionText>
            <EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionTitleText>Date blocking</EditListingBasicsQuestionTitleText>
                <EditListingBasicsQuestionEditButton onClick={() => activateCard({updateDateBlockingCard: true})} type="button">Edit</EditListingBasicsQuestionEditButton>
            </EditListingBasicsQuestionTitleWrapper>
            <EditListingBasicsQuestionText style={{marginBottom: 0}}>
                10%
            </EditListingBasicsQuestionText> */}
            {/* <EditListingListingDetailsSectionTitleWrapper>
                <EditListingListingDetailsSectionTitle>
                    Calendar sync
                </EditListingListingDetailsSectionTitle>
                <EditListingListingDetailsSectionEditButton onClick={() => activateCard({updateICalCard: true})} type="button">Edit</EditListingListingDetailsSectionEditButton>
            </EditListingListingDetailsSectionTitleWrapper>
            <EditListingBasicsQuestionText style={{marginTop: "8px"}}>
                iCal sync
            </EditListingBasicsQuestionText> */}
            {/* <EditListingVerifyListingButton>Verify listing</EditListingVerifyListingButton> */}
        </EditListingPricingDetailsSubPageWrapper>
    );
}
