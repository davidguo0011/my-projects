import {
    CreateBookingDesktopWrapper,
    CreateBookingHeaderWrapper,
    NavbarLogoHomeButton,
    NavbarLogoImage,
    CreateBookingHeaderSupport,
    NavbarFullLogoHomeButton,
    NavbarFullLogoImage,
} from "./createBookingStyling";
import { momentTimezone } from "@mobiscroll/react";
import moment from "moment-timezone";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import RightLayoutContent from "./RightLayoutContent/RightLayoutContent";
import ShareUsPage from "./ShareUsPage/ShareUsPage";
import SendMsgPage from "./SendMsgPage/SendMsgPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import PaymentFailedNotAvailableBooking from "../../components/paymentFailedModal/paymentFailedNotAvailableBookingModal";
import { callApi } from "../../utils/api/api";
import { Link } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { ListingModel } from "../../interfaces/models/listingModel";
import { UserModel } from "../../interfaces/models/userModel";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { identityIdSelector } from "../../state/selectors/identityId";
import { loggedInSelector } from "../../state/selectors/loggedIn";
import { useLocation } from "react-router-dom";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGtagSendEvent } from "../../hook/useGtagSendEvent";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});

momentTimezone.moment = moment;

interface PaymentIntentProps {
    paymentIntent: { id: string };
    id: string;
}

interface ExtendedListing extends ListingModel {
    instantBookEnabled: boolean;
    advanceNotice: number;
    advanceNoticeTime: number;
}
interface ExtendedBookingRequestModel extends BookingRequestModel {
    conversationmodelID: string;
}

export interface GuestsProps {
    guests?: number;
    adults: number;
    children: number;
    infants: number;
    pets: number;
}
export interface QueryParams {
    adults?: string;
    children?: string;
    infants?: string;
    pets?: string;
}

export default function CreateBooking() {
    const { gtagSendEvent } = useGtagSendEvent();
    const navigate = useNavigate();
    const { bookingID, id, arrivalDate, departureDate } = useParams();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [identityId, setIdentityId] = useRecoilState(identityIdSelector);
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [pageIndex, setPageIndex] = useState(0);
    const [listing, setListing] = useState<ExtendedListing | null>(null);
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
    const [guests, setGuests] = useState<GuestsProps>({ guests: 0, adults: 0, children: 0, infants: 0, pets: 0 });
    const [startDate, setStartDate] = useState(arrivalDate ? new Date(`${arrivalDate.split("-")[2]}-${arrivalDate.split("-")[1]}-${arrivalDate.split("-")[0]}`) : null);
    const [endDate, setEndDate] = useState(departureDate ? new Date(`${departureDate.split("-")[2]}-${departureDate.split("-")[1]}-${departureDate.split("-")[0]}`) : null);
    const [cancellationPolicy, setCancellationPolicy] = useState<string | null>(null);
    const [paymentIntent, setPaymentIntent] = useState<PaymentIntentProps | null>(null);
    const [bookingRequest, setBookingRequest] = useState<ExtendedBookingRequestModel | null>(null);
    const [listingOwnerData, setListingOwnerData] = useState<UserHostModel | null>(null);
    const [listingOwnerProfilePictureURL, setListingOwnerProfilePictureURL] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [clientSecret, setClientSecret] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [couponCodeInputSubmitted, setCouponCodeInputSubmitted] = useState("");
    const [bookingUnavailablePopup, setBookingUnavailablePopup] = useState(false);
    const [cookies] = useCookies(["referralCode"]);

    const initGuests = useCallback(() => {
        const adultsParamValue = queryParams.adults && Number(queryParams.adults) >= 0 ? Number(queryParams.adults) : 1;
        const childrenParamValue = queryParams.children && Number(queryParams.children) >= 0 ? Number(queryParams.children) : 0;
        const infantsParamValue = queryParams.infants && Number(queryParams.infants) >= 0 ? Number(queryParams.infants) : 0;
        const petsParamValue = queryParams.pets && Number(queryParams.pets) >= 0 ? Number(queryParams.pets) : 0;
        const guestsParamValue = adultsParamValue + childrenParamValue;
        const guests = {
            guests: guestsParamValue,
            adults: adultsParamValue,
            children: childrenParamValue,
            infants: infantsParamValue,
            pets: petsParamValue,
        };
        setGuests(guests);
        return guests;
    }, [queryParams.adults, queryParams.children, queryParams.infants, queryParams.pets]);

    const initBookingRequest = useCallback(
        async (bookingID: string) => {
            const bookingRequestData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${bookingID}`, {
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingID,
                },
            });
            let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${bookingRequestData.body.bookingRequest.listingmodelID}`);
            const guests = {
                guests: Number(bookingRequestData.body.bookingRequest.adults + bookingRequestData.body.bookingRequest.children),
                adults: bookingRequestData.body.bookingRequest.adults,
                children: bookingRequestData.body.bookingRequest.children,
                infants: bookingRequestData.body.bookingRequest.infants,
                pets: bookingRequestData.body.bookingRequest.pets,
            };
            setBookingRequest(bookingRequestData.body.bookingRequest);
            setGuests(guests);
            setStartDate(new Date(bookingRequestData.body.bookingRequest.arrivalDate));
            setEndDate(new Date(bookingRequestData.body.bookingRequest.departureDate));
            setListing(listingData.body.listing);
            setCancellationPolicy(listingData.body.listing.cancellationPolicy);
            return {
                listing: listingData.body.listing,
                guests: guests,
                startDate: new Date(bookingRequestData.body.bookingRequest.arrivalDate),
                endDate: new Date(bookingRequestData.body.bookingRequest.departureDate),
            };
        },
        [accessToken]
    );

    const initListingData = useCallback(async (id: string) => {
        let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}`);
        setListing(listingData.body.listing);
        setCancellationPolicy(listingData.body.listing.cancellationPolicy);
        return listingData.body.listing;
    }, []);

    const createPaymentIntent = useCallback(
        async (startDate: Date, endDate: Date, guestsNum: number, listing: ExtendedListing, userModel: UserModel) => {
            try {
                let res = await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/payment", {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        listingModelId: listing.id,
                        arrivalDate: startDate.toString(),
                        departureDate: endDate.toString(),
                        guests: guestsNum,
                        userModelId: userModel.id,
                        referralCode: cookies.referralCode,
                    },
                });
                if (res.success && res.paymentIntent && res.clientSecret && res.bookingDetails) {
                    setPaymentIntent(res.paymentIntent);
                    setClientSecret(res.clientSecret);
                    setBookingDetails(res.bookingDetails);
                    return;
                }
                if (!res.success) {
                    if (res.message === "Payment intent was not created due to invalid booking." || res.message === "Payment intent was not created due to selected dates not available") {
                        setBookingDetails(res.bookingDetails);
                        setBookingUnavailablePopup(true);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        [accessToken]
    );

    const updatePaymentIntent = async (couponCodeInput: string, arrivalDate: Date | null, departureDate: Date | null, guestNum: number, userModel: UserModel) => {
        if (!paymentIntent && startDate && endDate && listing) {
            await createPaymentIntent(startDate, endDate, guestNum, listing, userModel);
            return;
        }
        try {
            let res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/payment", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    coupon: couponCodeInput,
                    paymentIntentID: paymentIntent?.id,
                    listingmodelID: listing!.id,
                    arrivalDate: arrivalDate!.toString(),
                    departureDate: departureDate!.toString(),
                    guests: guestNum,
                    instantBookEnabled: listing!.instantBookEnabled,
                    userId: userModel.id,
                    referralCode: cookies.referralCode,
                },
            });
            if (res.success && res.paymentIntent && res.clientSecret && res.bookingDetails) {
                setPaymentIntent(res.paymentIntent);
                setClientSecret(res.clientSecret);
                setBookingDetails(res.bookingDetails);
            }
            return res;
        } catch (err) {
            console.log(err);
            return { success: false, errorCode: "SOMETHING_WENT_WRONG" };
        }
    };

    // listingData = listing, couponCodeInput = null, arrivalDate = startDate, departureDate = endDate, guestsNum = guests.guests
    const calculatePrice = useCallback(
        async (listingData: ExtendedListing, couponCodeInput: string | null, arrivalDate: Date, departureDate: Date, guestsNum: number) => {
            try {
                let res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/details/${listingData.id}`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        coupon: couponCodeInput,
                        listingModelId: listingData.id,
                        arrivalDate: arrivalDate.toString(),
                        departureDate: departureDate.toString(),
                        guests: guestsNum,
                        referralCode: cookies.referralCode,
                    },
                });
                if (res.success) {
                    analytics.track("CreateBookingPriceDelivered", {
                        loggedIn: loggedIn,
                        userId: loggedIn ? userModel?.id : identityId,
                        bookingID: bookingID,
                        listingID: id,
                        bookingDetails: res.bookingDetails,
                    });
                    setBookingDetails(res.bookingDetails);
                } else {
                    if (res.message === "Booking is not available." || res.message === "Payment intent was not created due to selected dates not available") {
                        setBookingDetails(res.bookingDetails);
                        setBookingUnavailablePopup(true);
                        analytics.track("CreateBookingPriceFailed", {
                            loggedIn: loggedIn,
                            userId: loggedIn ? userModel?.id : identityId,
                            bookingID: bookingID,
                            listingID: id,
                            bookingDetails: res.bookingDetails,
                        });
                    }
                }
                return res;
            } catch (err) {
                console.log(err);
                return { success: false, errorCode: "SOMETHING_WENT_WRONG" };
            }
        },
        // dependency no need state for analytics
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [accessToken]
    );

    const createBookingRequest = async (paymentIntent: PaymentIntentProps) => {
        if (paymentIntent) {
            analytics.track("CreateBookingSubmitted", {
                loggedIn: loggedIn,
                userId: loggedIn ? userModel?.id : identityId,
                bookingID: bookingID,
                listingID: id,
            });
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking", {
                body: {
                    listingModelId: listing!.id,
                    coupon: couponCodeInputSubmitted,
                    arrivalDate: startDate!.toString(),
                    departureDate: endDate!.toString(),
                    paymentIntentId: paymentIntent.paymentIntent.id,
                    guests: guests.guests,
                    adults: guests.adults,
                    children: guests.children,
                    infants: guests.infants,
                    pets: guests.pets,
                    bookingId: bookingID ? bookingID : null,
                    // conversationModelId: bookingID && bookingRequest? bookingRequest.conversationmodelID : null,
                    userModelId: userModel!.id,
                    referralCode: cookies.referralCode,
                },
                headers: {
                    Authorization: accessToken,
                },
            })
                .then(async (res) => {
                    if (res.success) {
                        if (res.body.bookingRequest.UserHostModel.UserModel.profilePicture) {
                            const profileImg = constructOptimisedProtectedImageUrl(
                                res.body.bookingRequest.UserHostModel.UserModel.profilePicture,
                                res.body.bookingRequest.UserHostModel.UserModel.identityID,
                                100
                            );
                            setListingOwnerProfilePictureURL(profileImg);
                        }
                        setListingOwnerData(res.body.bookingRequest.UserHostModel.UserModel);
                        setPageIndex(1);
                        setBookingRequest(res.body.bookingRequest);
                        window.scrollTo(0, 0);
                        window.fbq("track", "Purchase", { currency: "AUD", value: parseFloat(`${(res.body.bookingRequest.paymentAmount / 100).toFixed(2)}`) });
                        gtagSendEvent();
                        analytics.track("CreateBookingSuccess", {
                            loggedIn: loggedIn,
                            userId: loggedIn ? userModel?.id : identityId,
                            bookingID: res.body.bookingRequest.id,
                            listingID: id,
                        });
                    }
                })
                .catch(async (err) => {
                    console.log(err);
                    analytics.track("CreateBookingFailed", {
                        loggedIn: loggedIn,
                        userId: loggedIn ? userModel?.id : identityId,
                        bookingID: bookingID,
                        listingID: id,
                    });
                });
        } else {
            console.log("No payment intent, can't request booking");
        }
    };

    const updateGuests = async (guests: GuestsProps) => {
        let res = null;
        const guestNum = guests.adults + guests.children;
        if (userModel) {
            res = await updatePaymentIntent(couponCodeInputSubmitted, startDate, endDate, guestNum, userModel);
        } else if (listing && startDate && endDate) {
            res = await calculatePrice(listing, couponCodeInputSubmitted, startDate, endDate, guestNum);
        }
        if (res.success) {
            setGuests({
                guests: guestNum,
                adults: guests.adults,
                children: guests.children,
                infants: guests.infants,
                pets: guests.pets,
            });
            analytics.track("UpdatedGuestsFromCreateBooking", {
                loggedIn: loggedIn,
                userId: loggedIn ? userModel?.id : identityId,
                bookingID: bookingID,
                listingID: id,
                guests: guestNum,
                adults: guests.adults,
                children: guests.children,
                infants: guests.infants,
                pets: guests.pets,
            });
        }
    };
    const updateDates = async (dates: Date[]) => {
        let res = null;
        if (userModel) {
            res = await updatePaymentIntent(couponCodeInputSubmitted, dates[0], dates[1], guests.guests as number, userModel);
        } else if (listing && guests.guests) {
            res = await calculatePrice(listing, couponCodeInputSubmitted, dates[0], dates[1], guests.guests);
        }
        if (res.success) {
            setStartDate(dates[0]);
            setEndDate(dates[1]);
            analytics.track("UpdatedDatesFromCreateBooking", {
                loggedIn: loggedIn,
                userId: loggedIn ? userModel?.id : identityId,
                bookingID: bookingID,
                listingID: id,
                arrivalDate: dates[0],
                departureDate: dates[1],
            });
        }
    };
    const updateCoupon = async (couponCodeInput: string) => {
        let res = null;
        if (userModel) {
            res = await updatePaymentIntent(couponCodeInput, startDate, endDate, guests.guests as number, userModel);
        } else if (listing && startDate && endDate && guests.guests) {
            res = await calculatePrice(listing, couponCodeInput, startDate, endDate, guests.guests);
        }
        if (res.success) {
            setCouponCodeInputSubmitted(couponCodeInput);
            // Track page view
            analytics.track("AddedCouponFromCreateBooking", {
                loggedIn: loggedIn,
                userId: loggedIn ? userModel?.id : identityId,
                bookingID: bookingID,
                listingID: id,
                couponCodeInput: couponCodeInput,
            });
        }
        return res;
    };

    useEffect(() => {
        const init = async () => {
            let startDate = null;
            let endDate = null;
            let guests = null;
            let listing = null;
            if (bookingID) {
                const res = await initBookingRequest(bookingID);
                startDate = res.startDate;
                endDate = res.endDate;
                guests = res.guests;
                listing = res.listing;
            } else {
                guests = initGuests();
                startDate = arrivalDate ? new Date(`${arrivalDate.split("-")[2]}-${arrivalDate.split("-")[1]}-${arrivalDate.split("-")[0]}`) : null;
                endDate = departureDate ? new Date(`${departureDate.split("-")[2]}-${departureDate.split("-")[1]}-${departureDate.split("-")[0]}`) : null;
                listing = await initListingData(id as string);
            }
            if (userModel && startDate && endDate) {
                await createPaymentIntent(startDate, endDate, guests.guests, listing, userModel);
            } else if (startDate && endDate) {
                await calculatePrice(listing, null, startDate, endDate, guests.guests);
            } else {
                navigate("/");
            }
        };
        init();
    }, [arrivalDate, departureDate, bookingID, id, userModel, calculatePrice, createPaymentIntent, initBookingRequest, initGuests, initListingData, navigate]);

    // Track page view
    useEffect(() => {
        analytics.track("CreateBookingPageView", {
            loggedIn: loggedIn,
            userId: loggedIn ? userModel?.id : identityId,
            bookingID: bookingID,
            listingID: id,
            arrivalDate: arrivalDate,
            departureDate: departureDate,
            guest: guests.guests,
            adults: queryParams.adults,
            children: queryParams.children,
            infants: queryParams.infants,
            pets: queryParams.pets,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!bookingDetails || !listing) {
        return <LoadingFullPageModal reverse={true} guestMode={true} />;
    }
    return (
        <CreateBookingDesktopWrapper pageIndex={pageIndex}>
            <HelmetTags title="Confirm your stay" />
            <CreateBookingHeaderWrapper pageIndex={pageIndex}>
                {pageIndex === 0 ? (
                    <NavbarFullLogoHomeButton>
                        <Link to="/">
                            <NavbarFullLogoImage src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+full+logo+red.svg"} alt={"Anystay Logo"} />
                        </Link>
                    </NavbarFullLogoHomeButton>
                ) : (
                    <>
                        <NavbarLogoHomeButton>
                            <Link to="/">
                                <NavbarLogoImage src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+red.svg"} alt={"Anystay Logo"} />
                            </Link>
                        </NavbarLogoHomeButton>
                        <CreateBookingHeaderSupport href="https://help.anystay.com.au/" target="_blank" rel="noopener norefferer">
                            Get help
                        </CreateBookingHeaderSupport>
                    </>
                )}
            </CreateBookingHeaderWrapper>
            {pageIndex === 0 && (
                <>
                    <CheckoutPage
                        pageIndex={pageIndex}
                        listing={listing}
                        imageKey={JSON.parse(listing.listingImages[0] as string).key}
                        bookingDetails={bookingDetails}
                        guests={guests}
                        startDate={startDate}
                        endDate={endDate}
                        listingOwnerData={listingOwnerData}
                        updateGuests={updateGuests}
                        updateDates={updateDates}
                        updateCoupon={updateCoupon}
                        clientSecret={clientSecret}
                        createBookingRequest={createBookingRequest}
                        cancellationPolicy={cancellationPolicy}
                    />
                    <RightLayoutContent listing={listing} imageKey={JSON.parse(listing.listingImages[0] as string).key} />
                </>
            )}
            {pageIndex === 1 && (
                <SendMsgPage
                    listingOwnerProfilePictureURL={listingOwnerProfilePictureURL}
                    listingOwnerData={listingOwnerData}
                    bookingRequest={bookingRequest}
                    setPageIndex={setPageIndex}
                    listing={listing}
                    pageIndex={pageIndex}
                    accessToken={accessToken}
                    imageKey={JSON.parse(listing.listingImages[0] as string).key}
                />
            )}
            {/* {pageIndex === 2 && <ShareUsPage bookingRequest={bookingRequest} listing={listing} pageIndex={pageIndex} />} */}

            {bookingUnavailablePopup && (
                <PaymentFailedNotAvailableBooking
                    closeModal={() => {
                        setBookingUnavailablePopup(false);
                    }}
                />
            )}
        </CreateBookingDesktopWrapper>
    );
}
