import {
    ViewListingReservationDatepickerLabelWrapper,
    ViewListingDesktopMenuWrapper,
    ViewListingDesktopMenu,
    ViewListingDesktopMenuPrice,
    ViewListingDesktopMenuDatesItem,
    ViewListingDesktopMenuDatesItemTitle,
    ViewListingDesktopMenuDatesItemSubtitle,
    ViewListingDesktopMenuDatesWrapper,
    ViewListingDesktopMenuDatesSelectSubtitle,
    ViewListingDesktopMenuDatesSubtotal,
    ViewListingDesktopMenuDatesDivider,
    ViewListingDesktopMenuDatesTotal,
} from "../viewListingStyling";
import DesktopReserveButton from "../sections/viewListingDesktopReserveButton";
import NightlyPriceBreakdownPopup from "../../../components/nightlyPriceBreakdownPopup/NightlyPriceBreakdownPopup";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { BookingDetail } from "../../../interfaces/models/bookingDetail";
import { ListingInterface } from "../viewListing";

interface ViewListingReservationDetailsProps {
    dates: { startDate: string | Date; endDate: string | Date };
    bookingDetails: BookingDetail | null;
    listing: ListingInterface;
    toggleCalendar: () => void;
    toggleGuests: () => void;
    guests: { adults: number; children: number; infants: number; pets: number };
    toggleNightlyPriceBreakdownPopup: () => void;
    nightlyPriceBreakdownPopupActive: boolean;
}

export default function ViewListingReservationDetails({
    dates,
    bookingDetails,
    listing,
    toggleCalendar,
    toggleGuests,
    guests,
    toggleNightlyPriceBreakdownPopup,
    nightlyPriceBreakdownPopupActive,
}: ViewListingReservationDetailsProps) {
    const formatGuestsValue = () => {
        let guestsArray = [];
        if (guests.adults === 0) {
            return "Select Guests";
        }
        if (guests.adults) {
            guestsArray.push(`${guests.adults} ${guests.adults > 1 ? "adults" : "adult"}`);
        }
        if (guests.children) {
            guestsArray.push(`${guests.children} ${guests.children > 1 ? "children" : "child"}`);
        }
        if (guests.infants) {
            guestsArray.push(`${guests.infants} ${guests.infants > 1 ? "infants" : "infant"}`);
        }
        if (guests.pets) {
            guestsArray.push(`${guests.pets} ${guests.pets > 1 ? "pets" : "pet"}`);
        }
        return guestsArray.join(", ");
    };

    return (
        <ViewListingDesktopMenuWrapper>
            <ViewListingDesktopMenu>
                {bookingDetails ? (
                    bookingDetails.displayItems.subTotalItems[0] ? (
                        <ViewListingDesktopMenuPrice>
                            <span>{bookingDetails.displayItems.subTotalItems[0]?.amountFormatted} AUD</span> total
                        </ViewListingDesktopMenuPrice>
                    ) : (
                        <ViewListingDesktopMenuPrice>
                            <span>${Number(bookingDetails.pricePerNight / 100).toFixed(2)} AUD</span> / night
                        </ViewListingDesktopMenuPrice>
                    )
                ) : (
                    <ViewListingDesktopMenuPrice>
                        <span>${Number(listing.minimumPrice / 100).toFixed(2)} AUD</span> / night
                    </ViewListingDesktopMenuPrice>
                )}
                <ViewListingDesktopMenuDatesWrapper>
                    <ViewListingDesktopMenuDatesItem onClick={() => toggleCalendar()} type="button" style={{ gridColumn: "1/2" }}>
                        <ViewListingDesktopMenuDatesItemTitle>Arrive</ViewListingDesktopMenuDatesItemTitle>
                        <ViewListingDesktopMenuDatesItemSubtitle>
                            {dates.startDate && dates.startDate !== "anyArrival"
                                ? `${String(new Date(dates.startDate).getDate()).padStart(2, "0")}/${String(new Date(dates.startDate).getMonth() + 1).padStart(2, "0")}/${String(
                                      new Date(dates.startDate).getFullYear()
                                  ).padStart(2, "0")}`
                                : "Add date"}
                        </ViewListingDesktopMenuDatesItemSubtitle>
                    </ViewListingDesktopMenuDatesItem>
                    <ViewListingDesktopMenuDatesItem onClick={() => toggleCalendar()} type="button" style={{ gridColumn: "2/3", borderLeft: `1px solid ${ColorTheme.Grey1.color}` }}>
                        <ViewListingDesktopMenuDatesItemTitle>Depart</ViewListingDesktopMenuDatesItemTitle>
                        <ViewListingDesktopMenuDatesItemSubtitle>
                            {dates.endDate && dates.endDate !== "anyDeparture"
                                ? `${String(new Date(dates.endDate).getDate()).padStart(2, "0")}/${String(new Date(dates.endDate).getMonth() + 1).padStart(2, "0")}/${String(
                                      new Date(dates.endDate).getFullYear()
                                  ).padStart(2, "0")}`
                                : "Add date"}
                        </ViewListingDesktopMenuDatesItemSubtitle>
                    </ViewListingDesktopMenuDatesItem>
                    <ViewListingDesktopMenuDatesItem style={{ gridColumn: "1/3", borderTop: `1px solid ${ColorTheme.Grey1.color}` }} onClick={toggleGuests}>
                        <ViewListingDesktopMenuDatesItemTitle>Guests</ViewListingDesktopMenuDatesItemTitle>
                        <ViewListingDesktopMenuDatesItemSubtitle>{formatGuestsValue()}</ViewListingDesktopMenuDatesItemSubtitle>
                    </ViewListingDesktopMenuDatesItem>
                </ViewListingDesktopMenuDatesWrapper>
                <DesktopReserveButton toggleCalendar={toggleCalendar} dates={dates} guests={guests} listing={listing} />
                <ViewListingDesktopMenuDatesSelectSubtitle>
                    {dates.startDate !== "anyArrival" && dates.endDate !== "anyDeparture"
                        ? "Price shown is your total price including fees and taxes."
                        : listing.minimumStay
                          ? `${listing.minimumStay} ${listing.minimumStay === 1 ? "night" : "nights"} minimum`
                          : "No min. stay"}
                </ViewListingDesktopMenuDatesSelectSubtitle>
                {bookingDetails && (
                    <>
                        {bookingDetails.displayItems.priceItems
                            .filter((item) => item.label !== "Deposit")
                            .map((item, index) => {
                                const showBreakdown = index === 0;
                                return (
                                    <ViewListingReservationDatepickerLabelWrapper key={item.label}>
                                        <ViewListingDesktopMenuDatesSubtotal
                                            showBreakdown={showBreakdown}
                                            onClick={() => {
                                                if (showBreakdown) {
                                                    toggleNightlyPriceBreakdownPopup();
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </ViewListingDesktopMenuDatesSubtotal>
                                        <ViewListingDesktopMenuDatesSubtotal>{item.amountFormatted}</ViewListingDesktopMenuDatesSubtotal>
                                        {showBreakdown && nightlyPriceBreakdownPopupActive && bookingDetails && (
                                            <NightlyPriceBreakdownPopup bookingDetails={bookingDetails} toggleModal={toggleNightlyPriceBreakdownPopup} />
                                        )}
                                    </ViewListingReservationDatepickerLabelWrapper>
                                );
                            })}
                        <ViewListingDesktopMenuDatesDivider />
                        {bookingDetails.displayItems.subTotalItems.map((item, index) => {
                            if (item.label === "Total (AUD)")
                                return (
                                    <ViewListingReservationDatepickerLabelWrapper key={item.label}>
                                        <ViewListingDesktopMenuDatesTotal style={{ fontWeight: "600", marginBottom: "12px" }}>{item.label}</ViewListingDesktopMenuDatesTotal>
                                        <ViewListingDesktopMenuDatesTotal style={{ fontWeight: "600", marginBottom: "12px" }}>{item.amountFormatted}</ViewListingDesktopMenuDatesTotal>
                                    </ViewListingReservationDatepickerLabelWrapper>
                                );
                            return null;
                        })}
                    </>
                )}
            </ViewListingDesktopMenu>
        </ViewListingDesktopMenuWrapper>
    );
}
