import { ViewListingFooterButton } from "../viewListingStyling";
import { useNavigate } from "react-router-dom";
import { ListingInterface } from "../viewListing";
import { GuestsInterface } from "../viewListing";
interface DesktopReserveButtonProps {
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    listing: ListingInterface;
    toggleCalendar: () => void;
    guests: GuestsInterface;
}

export default function DesktopReserveButton({ dates, listing, toggleCalendar, guests }: DesktopReserveButtonProps) {
    const navigate = useNavigate();
    //prepare for url

    const renderBtnContent = () => {
        if (listing.approved === false || listing.status === "inactive") {
            return "Listing inactive";
        } else if (!(dates.startDate && dates.startDate !== "anyArrival" && dates.endDate && dates.endDate !== "anyDeparture")) {
            return "Select dates";
        } else {
            return "Reserve";
        }
    };
    const btnOnClick = () => {
        if (renderBtnContent() === "Select dates") {
            toggleCalendar();
        } else {
            const arrivalDate = `${String((dates.startDate as Date).getDate()).padStart(2, "0")}-${String((dates.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.startDate as Date).getFullYear()}`;
            const departureDate = `${String((dates.endDate as Date).getDate()).padStart(2, "0")}-${String((dates.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.endDate as Date).getFullYear()}`;

            const adultsString = guests.adults ? `adults=${guests.adults}` : "";
            const childrenString = guests.children ? `children=${guests.children}` : "";
            const petsString = guests.pets ? `pets=${guests.pets}` : "";
            const infantsString = guests.infants ? `infants=${guests.infants}` : "";
            const searchParamsStrings = [adultsString, childrenString, petsString, infantsString].filter((param) => param !== "").join("&");

            navigate(`/create-booking/${listing.id}/${arrivalDate}/${departureDate}${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
        }
    };

    return (
        <ViewListingFooterButton
            type="button"
            onClick={btnOnClick}
            disabled={listing.approved === false || listing.status === "inactive"}
            inactive={listing.approved === false || listing.status === "inactive"}
        >
            {renderBtnContent()}
        </ViewListingFooterButton>
    );
}
