import { useState, useEffect, useCallback } from "react";
import {
    ChangeBookingContainer,
    ChangeBookingContentWrapper,
    ChangeBookingListingDetailsWrapper,
    ChangeBookingDesktopListingTitle,
    ChangeBookingDesktopListingSubtitle,
    ChangeBookingDesktopListingImage,
    ChangeBookingListingContentWrapper,
    ChangeBookingOtherContentWrapper,
    ChangeBookingOtherContainer,
    ChangeBookingTitleContentWrapper,
    ChangeBookingReviews,
    ChangeBookingNoReviews,
} from "./changeBookingStyling";
import DatepickerBooking from "../../components/datepicker/DatepickerBooking";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import GuestPicker from "../../components/guestpicker/GuestPicker";
import NightlyPriceBreakdownPopup from "../../components/nightlyPriceBreakdownPopup/NightlyPriceBreakdownPopup";
import ChangeDetail from "./ChangeDetail/changeDetail";
import SendRequest from "./SendRequest/sendRequest";
import ShareUs from "./ShareUs/shareUs";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import constructOptimisedImageUrl from "../../utils/imageOptimisation/constructOptimisedImageUrl";
import { useNavigate } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ExtendedBookingRequestModel, ExtendedListingModel } from "./interface/interface";
import { UserModel } from "../../interfaces/models/userModel";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { ListingModel } from "../../interfaces/models/listingModel";

interface GuestType {
    adults: number;
    children: number;
    infants: number;
    pets: number;
}

export default function ChangeBooking() {
    const { id } = useParams();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const navigate = useNavigate();

    const [pageIndex, setPageIndex] = useState(0);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [calendarActive, setCalendarActive] = useState(false);
    const [guestsPopupActive, setGuestsPopupActive] = useState(false);
    const [bookingRequest, setBookingRequest] = useState<ExtendedBookingRequestModel | null>(null);
    const [bookingRequestListing, setBookingRequestListing] = useState<ExtendedListingModel | null>(null);

    const [guests, setGuests] = useState({
        guests: 0,
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    });

    // const [guests, setGuests] = useState(0);
    // const [adults, setAdults] = useState(0);
    // const [children, setChildren] = useState(0);
    // const [infants, setInfants] = useState(0);
    // const [pets, setPets] = useState(0);

    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [originalBeginDate, setOriginalBeginDate] = useState("");
    const [originalEndDate, setOriginalEndDate] = useState("");

    const [listingOwnerData, setListingOwnerData] = useState<UserModel | null>(null);
    const [listingOwnerProfilePictureURL, setListingOwnerProfilePictureURL] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [unavailableDates, setUnavailableDates] = useState([]);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [nightlyPriceBreakdownPopupActive, setNightlyPriceBreakdownPopupActive] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const getUnavailableDates = useCallback(async (startDate: string, endDate: string, bookingRequestListing: ListingModel) => {
        let unavailableDates = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `getunavailabledates/${bookingRequestListing.id}?beginDate=${startDate}&endDate=${endDate}`);
        setUnavailableDates(unavailableDates.body.unavailableDates);
    }, []);

    const fetchBookingRequest = useCallback(
        async (id: string) => {
            const bookingRequestData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
                headers: {
                    Authorization: accessToken,
                },
            });

            if (bookingRequestData.body.bookingRequest.UserHostModel.UserModel.profilePicture) {
                //overide the default profile picture if the user has uploaded one
                const hostProfilePic = constructOptimisedProtectedImageUrl(
                    bookingRequestData.body.bookingRequest.UserHostModel.UserModel.profilePicture,
                    bookingRequestData.body.bookingRequest.UserHostModel.UserModel.identityID,
                    100
                );
                setListingOwnerProfilePictureURL(hostProfilePic);
            }

            const arrivalDate = new Date(
                new Date(bookingRequestData.body.bookingRequest.arrivalDate).getUTCFullYear(),
                new Date(bookingRequestData.body.bookingRequest.arrivalDate).getUTCMonth(),
                new Date(bookingRequestData.body.bookingRequest.arrivalDate).getUTCDate()
            );
            const departureDate = new Date(
                new Date(bookingRequestData.body.bookingRequest.departureDate).getUTCFullYear(),
                new Date(bookingRequestData.body.bookingRequest.departureDate).getUTCMonth(),
                new Date(bookingRequestData.body.bookingRequest.departureDate).getUTCDate()
            );

            //hao's handy dandy date formatter
            const formattedStartDate = arrivalDate.toString();
            const formattedEndDate = departureDate.toString();

            setBookingRequest(bookingRequestData.body.bookingRequest);
            setBookingRequestListing(bookingRequestData.body.bookingRequest.ListingModel);
            setListingOwnerData(bookingRequestData.body.bookingRequest.UserHostModel.UserModel);
            setGuests({
                guests: bookingRequestData.body.bookingRequest.guests,
                adults: bookingRequestData.body.bookingRequest.adults,
                children: bookingRequestData.body.bookingRequest.children,
                infants: bookingRequestData.body.bookingRequest.infants,
                pets: bookingRequestData.body.bookingRequest.pets,
            });
            setArrivalDate(arrivalDate);
            setDepartureDate(departureDate);
            setOriginalBeginDate(formattedStartDate);
            setOriginalEndDate(formattedEndDate);

            return {
                formattedStartDate: formattedStartDate,
                formattedEndDate: formattedEndDate,
                startDate: arrivalDate,
                endDate: departureDate,
                listingModelId: bookingRequestData.body.bookingRequest.ListingModel.id,
                guestsNum: bookingRequestData.body.bookingRequest.guests,
                oldPrice: bookingRequestData.body.bookingRequest.bookingAmountIncludingServiceFee,
                bookingRequestListing: bookingRequestData.body.bookingRequest.ListingModel,
            };
        },
        [accessToken]
    );

    const createPaymentIntent = useCallback(
        async (startDate: Date, endDate: Date, guestNum: number, bookingID: string) => {
            if (!userModel) return;
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/change/payment", {
                headers: {
                    Authorization: accessToken,
                    bookingID: bookingID,
                },
                body: {
                    receiptEmail: userModel.email,
                    newArrivalDate: startDate,
                    newDepartureDate: endDate,
                    newGuests: guestNum,
                    bookingRequestID: bookingID,
                },
            })
                .then(async (res) => {
                    console.log(res);
                    if (!res.refund) {
                        setPaymentIntent(res.paymentIntent);
                        setClientSecret(res.paymentIntent.client_secret);
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken, userModel]
    );

    const updatePaymentIntent = useCallback(
        async (startDate: Date, endDate: Date, guestNum: number, paymentIntentID: string, bookingID: string) => {
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/change/payment", {
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingID,
                },
                body: {
                    newGuests: guestNum,
                    newArrivalDate: startDate,
                    newDepartureDate: endDate,
                    bookingRequestID: bookingID,
                    paymentIntentID: paymentIntentID,
                },
            })
                .then(async (res) => {
                    console.log(res);
                    if (!res.refund) {
                        setPaymentIntent(res.paymentIntent);
                        setClientSecret(res.clientSecret);
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken]
    );

    const calculatePrice = useCallback(
        async (coupon: null | string, listingmodelID: string, startDate: Date, endDate: Date, guestsNum: number, oldPrice: number, bookingRequestId: string, paymentIntent: any) => {
            try {
                const bookingDetails = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `/booking/change/details/${bookingRequestId}`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        coupon: coupon,
                        listingmodelID: listingmodelID,
                        arrivalDate: startDate.toString(),
                        departureDate: endDate.toString(),
                        guests: guestsNum,
                        oldPrice: oldPrice,
                        bookingRequestId: bookingRequestId,
                    },
                });
                setBookingDetails(bookingDetails.bookingDetails);
                if (bookingDetails.bookingDetails.displayItems.priceDiffItems.length > 0 && bookingDetails.bookingDetails.displayItems.priceDiffItems[2].amount > 0) {
                    if (paymentIntent) {
                        await updatePaymentIntent(startDate, endDate, guestsNum, paymentIntent.id, bookingRequestId);
                    } else {
                        await createPaymentIntent(startDate, endDate, guestsNum, bookingRequestId);
                    }
                }
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        },
        [createPaymentIntent, accessToken, updatePaymentIntent]
    );

    useEffect(() => {
        const initFunc = async () => {
            if (id) {
                const { formattedStartDate, formattedEndDate, startDate, endDate, listingModelId, guestsNum, oldPrice, bookingRequestListing } = await fetchBookingRequest(id);
                await getUnavailableDates(formattedStartDate, formattedEndDate, bookingRequestListing);
                // parameters: coupon, listingmodelID, startDate, endDate, guestsNum, oldPrice, bookingRequestId, paymentIntent
                await calculatePrice(null, listingModelId, startDate, endDate, guestsNum, oldPrice, id, null);
            }
        };
        initFunc();
    }, [calculatePrice, fetchBookingRequest, getUnavailableDates, id]);

    const getPlaceType = () => {
        let placeType = "";

        if (bookingRequestListing && bookingRequestListing.suburb !== null) {
            switch (bookingRequestListing.typeOfPlace) {
                case "entire-place":
                    placeType = bookingRequestListing.propertyType + " in " + bookingRequestListing.suburb.toLowerCase();
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "hotel-room":
                    placeType = "Hotel room in " + bookingRequestListing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "private-room":
                    placeType = "Private room in " + bookingRequestListing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "shared-room":
                    placeType = "Shared room in " + bookingRequestListing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                default:
                    break;
            }
        }

        return placeType;
    };

    const toggleDatepicker = () => {
        setCalendarActive((prev) => !prev);
    };

    const toggleGuestsPopup = () => {
        setGuestsPopupActive((prev) => !prev);
    };

    const updateDateFromPopup = async (dates: Date[]) => {
        if (!bookingRequestListing || !bookingRequest) return;
        const guestsNum = guests.adults + guests.children;
        if (id) {
            const success = await calculatePrice(null, bookingRequestListing.id, dates[0], dates[1], guestsNum, bookingRequest.bookingAmountIncludingServiceFee, id, paymentIntent);
            if (success) {
                setArrivalDate(dates[0]);
                setDepartureDate(dates[1]);
            }
        }
    };

    const updateGuestsFromPopup = async (guests: GuestType) => {
        if (!bookingRequestListing || !bookingRequest) return;
        const guestsNum = guests.adults + guests.children;
        if (arrivalDate && departureDate && id) {
            const success = await calculatePrice(null, bookingRequestListing.id, arrivalDate, departureDate, guestsNum, bookingRequest.bookingAmountIncludingServiceFee, id, paymentIntent);
            if (success) {
                setGuests({
                    guests: guests.adults + guests.children,
                    adults: guests.adults,
                    children: guests.children,
                    infants: guests.infants,
                    pets: guests.pets,
                });
            }
        }
    };

    const toggleNightlyPriceBreakdownPopup = () => {
        setNightlyPriceBreakdownPopupActive(!nightlyPriceBreakdownPopupActive);
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (!bookingRequest || !bookingDetails || !bookingRequestListing || !listingOwnerData) {
        return <LoadingFullPageModal guestMode={true} reverse={false} />;
    }
    return (
        <>
            <HelmetTags title="Change your stay | Anystay" />
            {pageIndex === 0 && (
                <ChangeBookingContainer>
                    <ChangeBookingContentWrapper>
                        <ChangeDetail
                            getPlaceType={getPlaceType}
                            bookingRequestListing={bookingRequestListing}
                            startDate={arrivalDate}
                            endDate={departureDate}
                            guests={guests}
                            accessToken={accessToken}
                            bookingDetails={bookingDetails}
                            toggleNightlyPriceBreakdownPopup={toggleNightlyPriceBreakdownPopup}
                            bookingRequest={bookingRequest}
                            clientSecret={clientSecret}
                            originalBeginDate={originalBeginDate}
                            originalEndDate={originalEndDate}
                            setPageIndex={setPageIndex}
                            toggleGuestsPopup={toggleGuestsPopup}
                            toggleDatepicker={toggleDatepicker}
                        />
                    </ChangeBookingContentWrapper>

                    {pageIndex === 0 && (
                        <ChangeBookingListingDetailsWrapper>
                            <ChangeBookingListingContentWrapper>
                                <ChangeBookingDesktopListingImage
                                    src={constructOptimisedImageUrl(JSON.parse(bookingRequestListing.listingImages[0] as string).key, 500)}
                                    alt="Featured listing image"
                                    onClick={handleBack}
                                />
                                <ChangeBookingTitleContentWrapper>
                                    <ChangeBookingDesktopListingSubtitle>{bookingRequestListing ? bookingRequestListing.propertyTitle : null}</ChangeBookingDesktopListingSubtitle>

                                    {bookingRequestListing.overallAverage > 0 ? (
                                        <ChangeBookingReviews>
                                            {(bookingRequestListing.overallAverage / 10).toFixed(1)} <span>({bookingRequestListing.ReviewStayModels.items.length})</span>
                                        </ChangeBookingReviews>
                                    ) : (
                                        <ChangeBookingNoReviews>New</ChangeBookingNoReviews>
                                    )}
                                </ChangeBookingTitleContentWrapper>
                                <ChangeBookingDesktopListingTitle>{getPlaceType()}</ChangeBookingDesktopListingTitle>
                            </ChangeBookingListingContentWrapper>
                        </ChangeBookingListingDetailsWrapper>
                    )}
                </ChangeBookingContainer>
            )}
            {(pageIndex === 1 || pageIndex === 2) && (
                <ChangeBookingOtherContainer>
                    <ChangeBookingOtherContentWrapper>
                        {pageIndex === 1 && (
                            <SendRequest
                                bookingRequest={bookingRequest}
                                listingOwnerProfilePictureURL={listingOwnerProfilePictureURL}
                                listingOwnerData={listingOwnerData}
                                accessToken={accessToken}
                                setPageIndex={setPageIndex}
                            />
                        )}
                        {pageIndex === 2 && <ShareUs bookingRequest={bookingRequest} bookingRequestListing={bookingRequestListing} />}
                    </ChangeBookingOtherContentWrapper>
                </ChangeBookingOtherContainer>
            )}
            {window.innerWidth < 768 && nightlyPriceBreakdownPopupActive && <NightlyPriceBreakdownPopup bookingDetails={bookingDetails} toggleModal={toggleNightlyPriceBreakdownPopup} />}
            {calendarActive && (
                <DatepickerBooking
                    startDate={arrivalDate}
                    endDate={departureDate}
                    unavailableDates={unavailableDates}
                    cancelFunc={toggleDatepicker}
                    handleClickOutside={toggleDatepicker}
                    listing={bookingRequestListing}
                    saveFunc={updateDateFromPopup}
                />
            )}
            {guestsPopupActive && (
                <GuestPicker
                    adults={guests.adults}
                    infants={guests.infants}
                    children={guests.children}
                    pets={guests.pets}
                    listingOwnerData={listingOwnerData}
                    listing={bookingRequestListing}
                    toggleGuests={toggleGuestsPopup}
                    updateGuests={updateGuestsFromPopup}
                />
            )}
        </>
    );
}
