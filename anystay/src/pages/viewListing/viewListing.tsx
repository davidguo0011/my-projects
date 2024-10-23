import { useState, useEffect, Fragment, useCallback, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
    ViewListingContainer,
    ViewListingCouponHeader,
    ViewListingCouponHeaderBtn,
    ViewListingCouponHeaderTitle,
    ViewListingExapndableDesktopWrapper,
    ViewListingTopContainer,
    ViewListingTopContainerWrapper,
} from "./viewListingStyling";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { signInMenuActivatedSelector } from "../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import Footer from "../../components/footer/footer";
import { callApi } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";
import useIsDesktopSize from "../../hook/useIsDesktopSize";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import constructOptimisedImageUrl from "../../utils/imageOptimisation/constructOptimisedImageUrl";

// Import sections
import ViewListingDesktopHeader from "./sections/viewListingDesktopHeader";
import ViewListingFeaturedImages from "./sections/viewListingFeaturedImages";
import ViewListingTitle from "./sections/viewListingTitle";
import ViewListingVerifyListing from "./sections/viewListingVerifyListing";
import ViewListingDescription from "./sections/viewListingDescription";
import ViewListingAvailableRooms from "./sections/viewListingRooms";
import ViewListingAmenitiesList from "./sections/viewListingAmenitiesList";
import ViewListingReviews from "./sections/viewListingsReviews";
import ViewListingAboutLocation from "./sections/viewListingAboutLocation";
import ViewListingExpandableSection from "./sections/viewListingDeposit";
import ViewListingHouseRulesSection from "./sections/viewListingHouseRules";
import ViewListingExpandableCancellationSection from "./sections/viewListingCancellation";
import ViewListingOwnerSection from "./sections/viewListingOwner";
import ViewListingFooter from "./sections/viewListingFooter";
import ViewListingNoServiceFee from "./sections/viewListingNoServiceFee";
import ViewListingReviewPreview from "./sections/viewListingReviewPreview";

// Import skeleton
import SkeletonViewListingPage from "./skeletonViewListingPage/skeletonViewListingPage";

// Import popups
import DatepickerBooking from "../../components/datepicker/DatepickerBooking";
import SendMessageRequestPopup from "./popups/viewListingSendMessage";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";
import GuestPicker from "../../components/guestpicker/GuestPicker";
import ReservationDetails from "./sections/viewListingReservationDetails";
import ShareListingPopup from "./popups/viewListingShare";
import HelmetTags from "../../components/Helmet/HelmetTags";
import ReviewPopup from "./popups/viewListingReviewPopup";
import { toggleSaved } from "../../utils/savedListings/toggleSaved";
import ViewListingSimilarStaySection from "./sections/viewListingSimilarStay";
import { ListingModel } from "../../interfaces/models/listingModel";
import { BookingDetail } from "../../interfaces/models/bookingDetail";
import { UserModel } from "../../interfaces/models/userModel";
import { identityIdSelector } from "../../state/selectors/identityId";
import { loggedInSelector } from "../../state/selectors/loggedIn";
import { Helmet } from "react-helmet-async";
import { generateJsonLd } from "./seo/jsonLd";
import ViewListingTopBtn from "./sections/viewListingTopBtn";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});
export interface ListingInterface extends ListingModel {
    streetNumber: string;
    streetName: string;
    unitNumber?: string;
    stateShort: string;
    overallAverage: number;
    checkOutTime: number;
    checkInTime: number;
    advanceNotice: number;
    advanceNoticeTime: number;
}
export interface GuestsInterface {
    adults: number;
    children: number;
    infants: number;
    pets: number;
}
interface DatesInterface {
    startDate: Date | string;
    endDate: Date | string;
}
interface QueryParams {
    arrivalDate?: string;
    departureDate?: string;
    adults?: string;
    children?: string;
    infants?: string;
    pets?: string;
}

export default function ViewListing() {
    const { id } = useParams();

    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [identityId, setIdentityId] = useRecoilState(identityIdSelector);
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const navigate = useNavigate();

    //get query params
    const location = useLocation();
    const queryParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = {};
        for (let [key, value] of searchParams.entries()) {
            params[key as keyof QueryParams] = value;
        }
        return params;
    }, [location.search]);

    //picker state
    const [dates, setDates] = useState({
        startDate: queryParams.arrivalDate ? new Date(`${queryParams.arrivalDate.split("-")[2]}-${queryParams.arrivalDate.split("-")[1]}-${queryParams.arrivalDate.split("-")[0]}`) : "anyArrival",
        endDate: queryParams.departureDate
            ? new Date(`${queryParams.departureDate.split("-")[2]}-${queryParams.departureDate.split("-")[1]}-${queryParams.departureDate.split("-")[0]}`)
            : "anyDeparture",
    });
    const [guests, setGuests] = useState<GuestsInterface>({
        adults: queryParams.adults && Number(queryParams.adults) ? Number(queryParams.adults) : 1,
        children: queryParams.children && Number(queryParams.children) ? Number(queryParams.children) : 0,
        infants: queryParams.infants && Number(queryParams.infants) ? Number(queryParams.infants) : 0,
        pets: queryParams.pets && Number(queryParams.pets) ? Number(queryParams.pets) : 0,
    });

    //data
    const [listing, setListing] = useState<ListingInterface | null>(null);
    const [listingOwnerData, setListingOwnerData] = useState<UserModel | null>(null);
    const [listingOwnerProfilePictureURL, setListingOwnerProfilePictureURL] = useState<string>("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [bookingDetails, setBookingDetails] = useState<BookingDetail | null>(null);
    const [unavailableDates, setUnavailableDates] = useState<{ date: string; checkOutPossible: boolean }[] | null>(null);
    //popup state
    const [calendarSelected, setCalendarSelected] = useState(false);
    const [shareListingSelected, setShareListingSelected] = useState(false);
    const [sendMessage, setSendMessage] = useState(false);
    const [isReview, setIsReview] = useState(false);
    const [reservervationGuestsMenu, setReservationGuestsMenu] = useState(false);
    const [nightlyPriceBreakdownPopupActive, setNightlyPriceBreakdownPopupActive] = useState(false);
    //page state
    const [sendAMessageBtnClicked, setSendAMessageBtnClicked] = useState(false);

    const [isSaved, setIsSaved] = useState(false);
    const isDesktopSize = useIsDesktopSize();
    //disable scroll when popup is active
    useEffect(() => {
        if (calendarSelected || shareListingSelected || sendMessage || reservervationGuestsMenu || isReview) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [calendarSelected, shareListingSelected, sendMessage, reservervationGuestsMenu, isReview]);

    useEffect(() => {
        if (userModel && userModel.savedListings.includes(listing ? listing.id : "")) {
            setIsSaved(true);
        }
        setTimeout(() => {
            if (listing && userModel) {
                analytics.track("viewListingPageView", {
                    userId: loggedIn ? userModel?.username : `anon_${identityId}`,
                    listingId: id,
                    propertyTitle: listing.propertyTitle,
                    queryParams: queryParams,
                });
            } else {
                analytics.track("viewListingPageView", {
                    userId: loggedIn ? userModel?.username : `anon_${identityId}`,
                    listingId: id,
                    propertyTitle: listing?.propertyTitle,
                    queryParams: queryParams,
                });
            }
        }, 1200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, listing, userModel]);

    const calculatePrice = useCallback(async (dates: DatesInterface, guests: GuestsInterface, listing: ListingInterface) => {
        let res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/details/${listing.id}`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                coupon: null,
                listingModelId: listing.id,
                arrivalDate: dates.startDate.toString(),
                departureDate: dates.endDate.toString(),
                guests: guests.adults + guests.children,
            },
        });

        if (res.success) {
            setBookingDetails(res.bookingDetails);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const initListing = useCallback(
        async (id: string, dates: DatesInterface, guests: GuestsInterface) => {
            try {
                let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}`, {
                    headers: {
                        Authorization: accessToken,
                    },
                });
                listingData = listingData.body.listing;
                setListing(listingData);
                setUnavailableDates(listingData.unavailableDates);
                if (listingData.UserHostModel.UserModel?.profilePicture) {
                    const listingOwnerProfilePic = constructOptimisedProtectedImageUrl(listingData.UserHostModel.UserModel.profilePicture, listingData.UserHostModel.UserModel.identityID, 100);
                    setListingOwnerProfilePictureURL(listingOwnerProfilePic);
                }
                setListingOwnerData(listingData.UserHostModel.UserModel);
                if (dates.startDate !== "anyArrival" && dates.endDate !== "anyDeparture") {
                    await calculatePrice(dates, guests, listingData);
                }
            } catch (err) {
                console.log(err);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [calculatePrice]
    );
    //init data
    useEffect(() => {
        const init = async () => {
            await initListing(id as string, dates, guests);
        };
        init();
    }, [dates, guests, id, initListing]);

    const updateDates = async (date: Date[]) => {
        if (!listing) return;
        await calculatePrice({ startDate: date[0], endDate: date[1] }, guests, listing);
        setDates({ startDate: date[0], endDate: date[1] });
        analytics.track("ViewListingUpdateDates", {
            userId: loggedIn ? userModel?.username : `anon_${identityId}`,
            listingId: id,
            propertyTitle: listing?.propertyTitle,
            arrivalDate: date[0],
            departureDate: date[1],
        });
    };
    const updateGuests = async (guests: { adults: number; children: number; infants: number; pets: number }) => {
        if (!listing) return;
        await calculatePrice(dates, guests, listing);
        setGuests({
            adults: guests.adults,
            children: guests.children,
            infants: guests.infants,
            pets: guests.pets,
        });
        analytics.track("ViewListingUpdateGuests", {
            userId: loggedIn ? userModel?.username : `anon_${identityId}`,
            listingId: id,
            propertyTitle: listing?.propertyTitle,
            guests: guests.adults + guests.children,
            adults: guests.adults,
            children: guests.children,
            infants: guests.infants,
            pets: guests.pets,
        });
    };

    const toggleCalendar = () => {
        setCalendarSelected(!calendarSelected);
    };
    const toggleGuests = () => {
        setReservationGuestsMenu(!reservervationGuestsMenu);
    };

    const toggleSendMessageRequest = async () => {
        if (userModel) {
            setSendMessage(!sendMessage);
        } else {
            setSignInMenuActivated(true);
        }
    };
    const toggleSeeReview = async () => {
        setIsReview(!isReview);
        analytics.track("ViewListingSeeAllReviewsOpened", {
            userId: loggedIn ? userModel?.username : `anon_${identityId}`,
            listingId: id,
            propertyTitle: listing?.propertyTitle,
        });
    };
    const toggleSendAMessageBtnClicked = async () => {
        setSendAMessageBtnClicked(!sendAMessageBtnClicked);
    };
    const toggleNightlyPriceBreakdownPopup = () => {
        setNightlyPriceBreakdownPopupActive(!nightlyPriceBreakdownPopupActive);
    };

    const toggleShareListing = async () => {
        setShareListingSelected(!shareListingSelected);
        analytics.track("ViewListingShareListingPopupOpened", {
            userId: loggedIn ? userModel?.username : `anon_${identityId}`,
            listingId: id,
            propertyTitle: listing?.propertyTitle,
        });
    };

    const openedGalleryEvent = async () => {
        analytics.track("ViewListingGalleryOpened", {
            userId: loggedIn ? userModel?.username : `anon_${identityId}`,
            listingId: id,
            propertyTitle: listing?.propertyTitle,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleShare = async () => {
        if (navigator.share && listing) {
            try {
                await navigator.share({
                    title: "Anystay",
                    text: `${listing!.propertyTitle}`,
                    url: `http://anystay.com.au/listing/${listing.id}`,
                });
                console.log("Share successful");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Web Share is not supported in your browser.");
        }
    };

    const clickedListingFromRecommendation = (listingId: string) => {
        analytics.track("ClickedListingFromRecommendation", {
            userId: loggedIn ? userModel?.id : identityId,
            listingId: listingId,
        });
    };

    const sendMessageEvent = (listingId: any, startDate: any, endDate: any, message: any) => {
        analytics.track("SentMessageFromViewListing", {
            userId: loggedIn ? userModel?.id : identityId,
            listingId: listingId,
            startDate: startDate,
            endDate: endDate,
            message: message,
        });
    };

    const jsonLd = generateJsonLd(listing);

    if (!listing || !listingOwnerData || !unavailableDates) {
        return <SkeletonViewListingPage />;
    }
    const tagContent = {
        title: listing ? `${listing.propertyTitle} | ${listing.propertyType} in ${listing.suburb}, ${listing.state}, Australia | Anystay` : "Anystay | Short & Long Stays, Holiday Homes, Rooms & More",
        description: listing
            ? `Explore our curated list of properties available for short-term stays in ${listing.suburb}. Find your perfect accommodation with AnyStay.`
            : "Book the perfect Australian stay at the best prices with Anystay. Find amazing deals on the biggest range of accommodation in Australia.",
        imgUrl:
            listing && listing.listingImages[0]
                ? constructOptimisedImageUrl(JSON.parse(listing.listingImages[0] as string).key, 100)
                : "https://d292awxalydr86.cloudfront.net/General/Stays+in+Australia.jpg",
        url: listing ? `https://anystay.com.au/listing/${listing.id}` : "https://www.anystay.com.au/",
    };
    return (
        <Fragment>
            {/* <HelmetTags
                title={`${listing.propertyTitle} | ${listing.propertyType} in ${listing.suburb}, ${listing.state}, Australia | Anystay`}
                description={`Explore our curated list of properties available for short-term stays in ${listing.suburb}. Find your perfect accommodation with AnyStay.`}
                imgUrl={constructOptimisedImageUrl(JSON.parse(listing.listingImages[0] as string).key, 100)}
                url={`https://anystay.com.au/listing/${listing.id}`}
            /> */}
            <Helmet>
                <title>{tagContent.title}</title>
                <meta property="og:title" content={tagContent.title} />
                <meta property="twitter:title" content={tagContent.title} />
                <meta property="og:type" content="website" />
                <meta name="description" content={tagContent.description} />
                <meta name="twitter:description" content={tagContent.description} />
                <meta name="og:description" content={tagContent.description} />
                <meta property="og:image" content={tagContent.imgUrl} />
                <meta property="twitter:image" content={tagContent.imgUrl} />
                <meta property="og:url" content={tagContent.url} />
                <meta property="twitter:url" content={tagContent.url} />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <ViewListingTopBtn
                toggleSaved={toggleSaved}
                toggleShareListing={toggleShareListing}
                handleShare={handleShare}
                listing={listing}
                accessToken={accessToken}
                isSaved={isSaved ? isSaved : false}
                setIsSaved={setIsSaved}
                loggedIn={loggedIn}
            />

            {!loggedIn && (
                <ViewListingCouponHeader>
                    <ViewListingCouponHeaderTitle>10% off your stay</ViewListingCouponHeaderTitle>
                    <ViewListingCouponHeaderBtn onClick={() => setSignInMenuActivated(true)}>Sign up</ViewListingCouponHeaderBtn>
                </ViewListingCouponHeader>
            )}

            <ViewListingDesktopHeader
                handleShare={handleShare}
                toggleShareListing={toggleShareListing}
                dates={dates}
                guests={guests}
                bookingDetails={bookingDetails}
                listing={listing}
                accessToken={accessToken}
                toggleCalendar={toggleCalendar}
                toggleSaved={toggleSaved}
                isSaved={isSaved ? isSaved : false}
                setIsSaved={setIsSaved}
            />
            <ViewListingFeaturedImages openedGalleryEvent={openedGalleryEvent} listingImages={listing.listingImages as string[]} />
            <ViewListingContainer>
                <ViewListingTopContainerWrapper>
                    <ViewListingTopContainer>
                        <ViewListingTitle propertyTitle={listing.propertyTitle} propertyType={listing.propertyType} suburb={listing.suburb} state={listing.stateShort} listing={listing} />
                        {listing.verified && <ViewListingVerifyListing />}
                        <ViewListingNoServiceFee />
                        <ViewListingReviewPreview listing={listing} reviews={listing.ReviewStayModels.items} />
                        <ViewListingDescription description={listing.propertyDescription ? listing.propertyDescription : "No description yet"} />
                        <ViewListingAvailableRooms availableRooms={listing.RoomModels.items} />
                        <ViewListingAmenitiesList title={"Included at your place"} amenities={listing.amenities} cardQty={10} />
                    </ViewListingTopContainer>
                    <ReservationDetails
                        dates={dates}
                        guests={guests}
                        bookingDetails={bookingDetails}
                        listing={listing}
                        toggleCalendar={toggleCalendar}
                        toggleGuests={toggleGuests}
                        toggleNightlyPriceBreakdownPopup={toggleNightlyPriceBreakdownPopup}
                        nightlyPriceBreakdownPopupActive={nightlyPriceBreakdownPopupActive}
                    />
                </ViewListingTopContainerWrapper>

                <ViewListingReviews listing={listing} reviews={listing.ReviewStayModels.items} toggleSeeReview={toggleSeeReview} />

                <ViewListingAboutLocation hasReviews={listing.overallAverage > 0} listing={listing} lat={JSON.parse(listing.location).lat} lng={JSON.parse(listing.location).lon} />

                <ViewListingOwnerSection
                    listing={listing}
                    dates={dates}
                    listingOwnerData={listingOwnerData}
                    listingOwnerProfilePictureURL={listingOwnerProfilePictureURL}
                    toggleCalendar={toggleCalendar}
                    toggleSendMessageRequest={toggleSendMessageRequest}
                    toggleSendAMessageBtnClicked={toggleSendAMessageBtnClicked}
                    sendAMessageBtnClicked={sendAMessageBtnClicked}
                />
                <ViewListingExapndableDesktopWrapper>
                    <ViewListingHouseRulesSection title={"House rules"} checkOutTime={listing.checkOutTime} checkInTime={listing.checkInTime} points={listing.houseRules} />
                    <ViewListingExpandableSection deposit={listing.deposit} />

                    <ViewListingExpandableCancellationSection title={"Cancellations"} cancellationPolicy={listing.cancellationPolicy} />
                </ViewListingExapndableDesktopWrapper>
                {/* {process.env.REACT_APP_ENV === "dev" && <ViewListingSimilarStaySection clickedListingFromRecommendation={clickedListingFromRecommendation} />} */}
            </ViewListingContainer>
            {!isDesktopSize && <ViewListingFooter toggleCalendar={toggleCalendar} dates={dates} guests={guests} listing={listing} bookingDetails={bookingDetails} />}
            <Footer />
            {sendMessage && (
                <SendMessageRequestPopup
                    accessToken={accessToken}
                    listing={listing}
                    toggleSelected={toggleSendMessageRequest}
                    selected={sendMessage}
                    dates={dates}
                    guests={guests}
                    bookingDetails={bookingDetails}
                    sendMessageEvent={sendMessageEvent}
                />
            )}
            {isReview && <ReviewPopup listing={listing} reviews={listing.ReviewStayModels.items} toggleSeeReview={toggleSeeReview} isReview={isReview} />}
            {listing && reservervationGuestsMenu && (
                <GuestPicker
                    listing={listing}
                    listingOwnerData={listingOwnerData}
                    toggleGuests={toggleGuests}
                    adults={guests.adults}
                    pets={guests.pets}
                    children={guests.children}
                    infants={guests.infants}
                    updateGuests={updateGuests}
                />
            )}

            {calendarSelected && (
                <DatepickerBooking
                    unavailableDates={unavailableDates}
                    startDate={dates.startDate}
                    endDate={dates.endDate}
                    listing={listing}
                    cancelFunc={() => {
                        toggleCalendar();
                        if (sendAMessageBtnClicked) {
                            toggleSendAMessageBtnClicked();
                        }
                    }}
                    saveFunc={async (dateRange: Date[]) => {
                        await updateDates(dateRange);
                        if (sendAMessageBtnClicked) {
                            toggleSendMessageRequest();
                            toggleSendAMessageBtnClicked();
                        }
                    }}
                    handleClickOutside={() => {
                        toggleCalendar();
                        if (sendAMessageBtnClicked) {
                            toggleSendAMessageBtnClicked();
                        }
                    }}
                />
            )}
            {shareListingSelected && <ShareListingPopup toggleShareListing={toggleShareListing} listing={listing} selected={shareListingSelected} />}
        </Fragment>
    );
}
