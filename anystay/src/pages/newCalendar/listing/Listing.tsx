import {
    CalendarListingWrapper,
    CalendarListingTitle,
    CalendarListingSearchWrapper,
    CalendarListingContiner,
    CalendarListingTitleBackBtn,
    CalendarListingTitleBackBtnImg,
    CalendarListingTitleConainer,
} from "../yourCalendarStyling";
import ListingItem from "./ListingItem/ListingItem";
import { YourCalendarListing } from "../yourCalendar";

interface ListingComponentProps {
    listings: YourCalendarListing[];
    calendarMode: string;
    setMonthlyModeActiveListing: any;
    monthlyModeActiveListing: string;
    setCalendarMode: any;
}

const ListingComponent: React.FC<ListingComponentProps> = ({ listings, calendarMode, setMonthlyModeActiveListing, monthlyModeActiveListing, setCalendarMode }) => {
    return (
        <CalendarListingWrapper>
            <CalendarListingTitleConainer>
                {calendarMode === "Month" && (
                    <CalendarListingTitleBackBtn
                        onClick={() => {
                            setMonthlyModeActiveListing("");
                            setCalendarMode("Day");
                        }}
                    >
                        <CalendarListingTitleBackBtnImg src="https://anystay-assets.s3.ap-southeast-2.amazonaws.com/Universal+icons/Back.svg" />
                    </CalendarListingTitleBackBtn>
                )}
                <CalendarListingTitle>Calendar</CalendarListingTitle>
            </CalendarListingTitleConainer>

            <CalendarListingSearchWrapper></CalendarListingSearchWrapper>
            <CalendarListingContiner>
                {listings.map((listing) => {
                    return (
                        <ListingItem
                            listing={listing}
                            key={listing.id}
                            monthlyModeActiveListing={monthlyModeActiveListing}
                            setCalendarMode={setCalendarMode}
                            setMonthlyModeActiveListing={setMonthlyModeActiveListing}
                        />
                    );
                })}
            </CalendarListingContiner>
        </CalendarListingWrapper>
    );
};

export default ListingComponent;
