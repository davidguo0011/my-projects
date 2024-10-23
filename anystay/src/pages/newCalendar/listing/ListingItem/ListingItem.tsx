import {
    CalendarListingListingItemWrapper,
    CalendarListingListingItemImg,
    CalendarListingListingItemContent,
    CalendarListingListingItemTitle,
    CalendarListingListingItemAddress,
    CalendarListingListingItemStatus,
} from "../../yourCalendarStyling";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { useMemo } from "react";
import { YourCalendarListing } from "../../yourCalendar";

interface ListingItemProps {
    listing: YourCalendarListing;
    monthlyModeActiveListing: string;
    setCalendarMode: any;
    setMonthlyModeActiveListing: any;
}

const ListingItem: React.FC<ListingItemProps> = ({ listing, monthlyModeActiveListing, setCalendarMode, setMonthlyModeActiveListing }) => {
    const imgKey = useMemo(() => {
        return JSON.parse(listing.listingImages[0] as string).key;
    }, [listing.listingImages]);
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <CalendarListingListingItemWrapper
            onClick={() => {
                setMonthlyModeActiveListing(listing.id);
                setCalendarMode("Month");
            }}
            active={listing.id === monthlyModeActiveListing}
        >
            <CalendarListingListingItemImg src={constructOptimisedImageUrl(imgKey, 300)} />
            <CalendarListingListingItemContent>
                <CalendarListingListingItemTitle>{listing.propertyTitle}</CalendarListingListingItemTitle>
                <CalendarListingListingItemAddress>{`${listing.unitNumber ? `${listing.unitNumber}/` : ""}${listing.streetNumber} ${listing.street}, ${
                    listing.suburb
                }`}</CalendarListingListingItemAddress>
                <CalendarListingListingItemStatus>{capitalizeFirstLetter(listing.status)}</CalendarListingListingItemStatus>
            </CalendarListingListingItemContent>
        </CalendarListingListingItemWrapper>
    );
};

export default ListingItem;
