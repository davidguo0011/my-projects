import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ViewListingFooterWrapper, ViewListingFooterButton, ViewListingFooterTitleText, ViewListingFooterTextWrapper, ViewListingFooterSubtitleText } from "../viewListingStyling";
import { ListingInterface } from "../viewListing";
import { BookingDetail } from "../../../interfaces/models/bookingDetail";
import { GuestsInterface } from "../viewListing";

interface ViewListingFooterProps {
    bookingDetails: BookingDetail | null;
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    guests: GuestsInterface;
    listing: ListingInterface;
    toggleCalendar: () => void;
}

export default function ViewListingFooter({ listing, dates, guests, toggleCalendar, bookingDetails }: ViewListingFooterProps) {
    return (
        <Fragment>
            <ViewListingFooterWrapper>
                <ViewListingFooterTextWrapper onClick={() => toggleCalendar()}>
                    {listing && bookingDetails ? (
                        <ViewListingFooterTitleText>
                            <span>{bookingDetails.displayItems.subTotalItems[0].amountFormatted} AUD</span>
                        </ViewListingFooterTitleText>
                    ) : (
                        <ViewListingFooterTitleText>
                            <span>Select dates</span>
                        </ViewListingFooterTitleText>
                    )}
                    <ViewListingFooterSubtitleText underlineActive={dates.startDate !== "anyArrival" && dates.endDate !== "anyDeparture"}>
                        {dates.startDate && dates.endDate && dates.startDate !== "anyArrival" && dates.endDate !== "anyArrival"
                            ? `${(dates.startDate as Date).toLocaleDateString("au", { month: "short", day: "numeric" })} - ${(dates.endDate as Date).toLocaleDateString("au", {
                                  month: "short",
                                  day: "numeric",
                              })}`
                            : listing && listing.minimumStay > 1
                              ? `${listing.minimumStay} nights minimum`
                              : "No min. stay"}
                    </ViewListingFooterSubtitleText>
                </ViewListingFooterTextWrapper>
                <FooterReserveButton listingID={listing.id} dates={dates} guests={guests} toggleCalendar={toggleCalendar} />
            </ViewListingFooterWrapper>
        </Fragment>
    );
}

interface FooterReserveButtonProps {
    listingID: string;
    toggleCalendar: () => void;
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    guests: GuestsInterface;
}

function FooterReserveButton({ dates, guests, listingID, toggleCalendar }: FooterReserveButtonProps) {
    let navigate = useNavigate();

    return (
        <ViewListingFooterButton
            type="button"
            onClick={() => {
                if (dates.startDate && dates.startDate !== "anyArrival" && dates.endDate && dates.endDate !== "anyDeparture") {
                    const arrivalDate = `${String((dates.startDate as Date).getDate()).padStart(2, "0")}-${String((dates.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.startDate as Date).getFullYear()}`;
                    const departureDate = `${String((dates.endDate as Date).getDate()).padStart(2, "0")}-${String((dates.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.endDate as Date).getFullYear()}`;
                    const adultsString = guests.adults ? `adults=${guests.adults}` : "";
                    const childrenString = guests.children ? `children=${guests.children}` : "";
                    const petsString = guests.pets ? `pets=${guests.pets}` : "";
                    const infantsString = guests.infants ? `infants=${guests.infants}` : "";
                    const searchParamsStrings = [adultsString, childrenString, petsString, infantsString].filter((param) => param !== "").join("&");

                    navigate(`/create-booking/${listingID}/${arrivalDate}/${departureDate}${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
                } else {
                    toggleCalendar();
                }
            }}
        >
            {dates.startDate && dates.startDate !== "anyArrival" && dates.endDate && dates.endDate !== "anyDeparture" ? "Reserve" : "Select dates"}
        </ViewListingFooterButton>
    );
}
