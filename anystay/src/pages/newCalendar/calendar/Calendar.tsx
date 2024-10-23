import { Calendar } from "anystay-ui";
import { CalendarCalendarWrapper } from "../yourCalendarStyling";
import { useMemo } from "react";
import { getFormattedDate, getFormattedDateAndTime } from "../dateUtil/dateUtil";
import Popup from "../popUp/popUp";
import { useState, useRef } from "react";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { YourCalendarListing, BookingRequestModelsCalendarDetail } from "../yourCalendar";
import {
    CalendarSelectProp,
    CalendarMonthlySelectProp,
    CalendarFillRowProp,
    CalendarBlockRowProp,
    CalendarOccupiedRowProp,
    CalendarOccupiedColumnProp,
    CalendarBlockColumnProp,
    CalendarFillColumnProp,
    CalendarType,
} from "../../../../node_modules/anystay-ui/dist/Calendar/interface";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
interface CalendarComponentProps {
    listings: YourCalendarListing[];
    loadListings: (nextTokenData: string | null) => Promise<void>;
    calendarMode: string;
    monthlyModeActiveListing: string;
}

interface CalendarRef extends HTMLInputElement {
    forceClearSelect: () => void;
}
const CalendarComponent: React.FC<CalendarComponentProps> = ({ listings, loadListings, calendarMode, monthlyModeActiveListing }) => {
    const [currentSelection, setCurrentSelection] = useState<CalendarSelectProp | CalendarMonthlySelectProp | null>(null);
    const [popupActive, setPopupActive] = useState(false);
    const calendarRef = useRef<CalendarRef>(null);
    const rowsData = useMemo(() => {
        if (calendarMode === "Month" && monthlyModeActiveListing) {
            const listing = listings.filter((listing) => listing.id === monthlyModeActiveListing);
            return listing.map((listing) => {
                return {
                    rowId: listing.id,
                    value: `$${listing.minimumPrice / 100}`,
                };
            });
        }
        return listings.map((listing) => {
            return {
                rowId: listing.id,
                value: `$${listing.minimumPrice / 100}`,
            };
        });
    }, [calendarMode, listings, monthlyModeActiveListing]);

    const getBookingRequestTitle = (bookingRequest: BookingRequestModelsCalendarDetail) => {
        switch (bookingRequest.status) {
            case "Change Requested":
                return "Changes requested";
            case "Refund Requested":
                return "Refund requested";
            case "Booking Requested":
                return "Stay requested";
            case "Review Pending":
            case "Stay Review Pending":
                return "Review Guest";
            case "Guest Review Pending":
            case "Reviewed":
                return "Reviewed";
            default:
                return "Confirmed";
        }
    };

    const getBookingRequestColor = (bookingRequest: BookingRequestModelsCalendarDetail) => {
        if (bookingRequest.status === "Change Requested" || bookingRequest.status === "Refund Requested" || bookingRequest.status === "Booking Requested") {
            return `${ColorTheme.Yellow.color}`;
        }
        return undefined;
    };

    const navigate = useNavigate();
    const fillRowsDataCollection = useMemo(() => {
        const fillRowsData: CalendarFillRowProp[] = [];
        const blockedRowsData: CalendarBlockRowProp[] = [];
        const occupiedRowsData: CalendarOccupiedRowProp[] = [];

        // Function to process listings (reusable for both modes)
        const processListing = (listing: YourCalendarListing) => {
            const fillRowsColumn: CalendarFillColumnProp[] = [];
            const blockedRowsColumn: CalendarBlockColumnProp[] = [];
            const occupiedRowsColumn: CalendarOccupiedColumnProp[] = [];

            listing.iCalUnavailableDates.forEach((beginAndEndDate) => {
                let parsedBeginAndEndDate = JSON.parse(beginAndEndDate);
                let beginDate = parsedBeginAndEndDate.beginDate.replace("Z", "");
                let endDate = parsedBeginAndEndDate.endDate.replace("Z", "");
                blockedRowsColumn.push({
                    startDate: getFormattedDate(beginDate),
                    endDate: getFormattedDate(endDate),
                    value: `$${listing.minimumPrice / 100}`,
                });
            });

            listing.BookingRequestModels.items
                .filter((item: BookingRequestModelsCalendarDetail) => !item.cancelled && !item.declined && item.status !== "Declined" && item.status !== "Overdue")
                .forEach((booking: BookingRequestModelsCalendarDetail) => {
                    let arrivalDate = booking.arrivalDate.replace("Z", "");
                    let departureDate = booking.departureDate.replace("Z", "");
                    const profilePic = booking.UserModel?.profilePicture ? constructOptimisedProtectedImageUrl(booking.UserModel.profilePicture, booking.UserModel.identityID, null) : null;
                    occupiedRowsColumn.push({
                        startDate: getFormattedDateAndTime(arrivalDate),
                        endDate: getFormattedDateAndTime(departureDate),
                        name: booking.id === "externalUnavailableDate" ? "External Booking" : booking.UserModel?.firstName,
                        text: getBookingRequestTitle(booking) as string,
                        link: booking.id,
                        avatar: profilePic || "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
                    });
                });

            listing.rules.forEach((rule) => {
                let beginDate = rule.beginDate.replace("Z", "");
                let endDate = rule.endDate.replace("Z", "");
                if (rule.disabled) {
                    blockedRowsColumn.push({
                        startDate: getFormattedDate(beginDate),
                        endDate: getFormattedDate(endDate),
                        value: rule.minimumPrice ? `$${rule.minimumPrice / 100}` : `$${listing.minimumPrice / 100}`,
                    });
                } else {
                    fillRowsColumn.push({
                        startDate: getFormattedDate(beginDate),
                        endDate: getFormattedDate(endDate),
                        value: rule.minimumPrice ? `$${rule.minimumPrice / 100}` : `$${listing.minimumPrice / 100}`,
                    });
                }
            });

            fillRowsData.push({
                rowId: listing.id,
                columns: fillRowsColumn,
            });
            blockedRowsData.push({
                rowId: listing.id,
                columns: blockedRowsColumn,
            });
            occupiedRowsData.push({
                rowId: listing.id,
                columns: occupiedRowsColumn,
            });
        };

        // If calendarMode is "Month", process a single listing
        if (calendarMode === "Month" && monthlyModeActiveListing) {
            const listing = listings.filter((listing) => listing.id === monthlyModeActiveListing)[0];
            processListing(listing);
        } else {
            // Otherwise, process all listings
            listings.forEach((listing) => {
                processListing(listing);
            });
        }

        return { fillRowsData, blockedRowsData, occupiedRowsData };
    }, [listings, calendarMode, monthlyModeActiveListing]);

    return (
        <CalendarCalendarWrapper popupActive={popupActive} calendarMode={calendarMode}>
            {calendarMode === "Day" && (
                <Calendar
                    type={CalendarType.Day}
                    ref={calendarRef}
                    columnWidth={85}
                    subtractDayNumber={730}
                    totalDayNumber={1095}
                    rows={rowsData}
                    blockRows={fillRowsDataCollection.blockedRowsData}
                    fillRows={fillRowsDataCollection.fillRowsData}
                    occupiedRows={fillRowsDataCollection.occupiedRowsData}
                    onSelect={(prop) => {
                        setCurrentSelection(prop);
                        setPopupActive(true);
                    }}
                    onOccupiedClick={(link: string) => {
                        if (link !== "externalUnavailableDate") {
                            navigate(`/booking-request/${link}`);
                        }
                    }}
                />
            )}

            {calendarMode === "Month" && (
                <Calendar
                    type={CalendarType.Month}
                    ref={calendarRef}
                    columnWidth={85}
                    subtractMonthNumber={24}
                    totalMonthNumber={60}
                    rows={rowsData}
                    blockRows={fillRowsDataCollection.blockedRowsData}
                    fillRows={fillRowsDataCollection.fillRowsData}
                    occupiedRows={fillRowsDataCollection.occupiedRowsData}
                    onSelect={(prop) => {
                        setCurrentSelection(prop);
                        setPopupActive(true);
                    }}
                    onOccupiedClick={(link: string) => {
                        if (link !== "externalUnavailableDate") {
                            navigate(`/booking-request/${link}`);
                        }
                    }}
                />
            )}

            {popupActive && currentSelection && (
                <Popup
                    currentSelection={currentSelection}
                    closePopup={() => {
                        setCurrentSelection(null);
                        setPopupActive(false);
                        calendarRef.current && calendarRef.current.forceClearSelect();
                    }}
                    monthlyModeActiveListing={monthlyModeActiveListing}
                    loadListings={loadListings}
                />
            )}
        </CalendarCalendarWrapper>
    );
};

export default CalendarComponent;
