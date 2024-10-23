import Calendar from "./calendar/Calendar";
import Listing from "./listing/Listing";
import { CalendarWrapper, MobileCalendarWrapper, MobileCalendarTitle, FeatureNotAvilableWrapper, FeatureNotAvailableText } from "./yourCalendarStyling";
import { useState, useRef, useEffect, useCallback } from "react";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../utils/api/api";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import { ListingModel } from "../../interfaces/models/listingModel";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { UserModel } from "../../interfaces/models/userModel";

interface Rule {
    beginDate: string;
    discount: number;
    endDate: string;
    id: string;
    maximumStay: number;
    minimumPrice: number;
    minimumStay: number;
    disabled?: boolean;
}

export interface BookingRequestModelsCalendar {
    items: BookingRequestModelsCalendarDetail[];
}

export interface BookingRequestModelsCalendarDetail extends BookingRequestModel {
    UserModel: UserModel;
    status?: string;
}

export interface YourCalendarListing extends ListingModel {
    unitNumber: number;
    rules: Rule[];
    BookingRequestModels: BookingRequestModelsCalendar;
    iCalUnavailableDates: string[];
    unavailableDates: string[];
}

const YourCalendar: React.FC = () => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const nextToken = useRef(null);
    const nextFetching = useRef(false);
    const [listings, setListings] = useState<YourCalendarListing[]>([]);

    const [calendarMode, setCalendarMode] = useState("Day");
    const [monthlyModeActiveListing, setMonthlyModeActiveListing] = useState("");

    const loadListings = useCallback(
        async (nextTokenData: string | null) => {
            nextFetching.current = true;
            let listingsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/calendar/listings", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    nextToken: nextTokenData,
                },
            });
            //remove draft listings
            const filteredListing = listingsData.body.listings.filter((listing: YourCalendarListing) => {
                return !listing.draft;
            });
            nextToken.current = listingsData.body.nextToken;
            if (!nextTokenData) {
                setListings(filteredListing);
            } else {
                setListings((prevState) => [...prevState, ...filteredListing]);
            }

            nextFetching.current = false;
        },
        [accessToken]
    );
    useEffect(() => {
        loadListings(null);
    }, [loadListings]);
    return (
        <>
            <MobileCalendarWrapper>
                <MobileCalendarTitle>Calendar</MobileCalendarTitle>
                <FeatureNotAvilableWrapper>
                    <FeatureNotAvailableText>Mobile calendar features are not yet available</FeatureNotAvailableText>
                </FeatureNotAvilableWrapper>
            </MobileCalendarWrapper>
            <CalendarWrapper>
                <Listing
                    listings={listings}
                    calendarMode={calendarMode}
                    setMonthlyModeActiveListing={setMonthlyModeActiveListing}
                    monthlyModeActiveListing={monthlyModeActiveListing}
                    setCalendarMode={setCalendarMode}
                />
                <Calendar listings={listings} loadListings={loadListings} calendarMode={calendarMode} monthlyModeActiveListing={monthlyModeActiveListing} />
            </CalendarWrapper>
            <MobileNavbar />
        </>
    );
};

export default YourCalendar;
