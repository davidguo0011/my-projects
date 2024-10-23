import { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import * as customSubscriptions from "../../graphql/customSubscriptions";
import Observable from "zen-observable-ts";

// Import components
import { Link } from "react-router-dom";

// Import styling
import {
    BookingRequestWrapper,
    BookingRequestTitle,
    BookingRequestTitleWrapper,
    BookingRequestTitleIcon,
    BookingRequestSection,
    BookingRequestSectionRowWrapper,
    BookingRequestSectionRowText,
    BookingRequestPaymentSectionTitle,
    BookingRequestGuestPolicyText,
    BookingRequestGuestPolicyLink,
    BookingRquestYourPayoutPriceLabel,
    BookingRquestYourPayoutPrice,
    BookingRequestSectionRowWrapperPayouts,
    BookingRequestYourPayoutDivider,
    BookingRequestReservationGuestsSplitter,
    BookingRequestSectionRowTextButton,
    BookingRequestSupportSectionRowWrapper,
    BookingRequestTitleBackButton,
} from "./bookingRequestStyling";
import DeclineBookingRequestPopup from "./popup/DeclineBookingRequestPopup/DeclineBookingRequestPopup";
import HostCancellationMessagePopup from "./popup/HostCancellationMessagePopup/HostCancellationMessagePopup";
// import HostCancellationPopup from "./popup/HostCancellationPopup/HostCancellationPopup";
import HostCancellationPayoutDetailsPopup from "./popup/HostCancellationPayoutDetailsPopup/HostCancellationPayoutDetailsPopup";
import HostCancellationCancelledPopup from "./popup/HostCancellationCancelledPopup/HostCancellationCancelledPopup";
import ReviewGuestRefundPopup from "./popup/ReviewGuestRefundPopup/ReviewGuestRefundPopup";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import BookingRequestActionBtn from "./BookingRequestActionBtn/BookingRequestActionBtn";
import BookingRequestIntroHeader from "./BookingRequestIntroHeader/BookingRequestIntroHeader";
import BookingRequestDateDetails from "./BookingRequestDateDetails/BookingRequestDateDetails";
import { useNavigate } from "react-router-dom";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { UserModel } from "../../interfaces/models/userModel";
import { ExtendedBookingRequestModel, ExtendedChangeBookingRequestModel } from "./interface/interface";
import { HostPriceBreakdownTypes } from "./interface/interface";
import { ListingModel } from "../../interfaces/models/listingModel";
import { ExtendedRefundRequestModel } from "./interface/interface";
import useClickOutside from "../../hook/useClickOutside";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import BackBtn from "../../components/btn/backBtn/backBtn";

export default function BookingRequest() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [pageLoading, setPageLoading] = useState(true);
    const [bookingRequest, setBookingRequest] = useState<ExtendedBookingRequestModel | null>(null);
    const [listingData, setListingData] = useState<ListingModel | null>(null);
    const [guestData, setGuestData] = useState<UserModel | null>(null);
    const [guestProfilePicture, setGuestProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [nightsDifference, setNightsDifference] = useState<number>(0);
    const [daysTillArrival, setDaysTillArrival] = useState<number>(0);
    const [daysTillDeparture, setDaysTillDeparture] = useState<number>(0);
    const [confirmationCode, setConfirmationCode] = useState("");
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [newArrivalDate, setNewArrivalDate] = useState<Date | null>(null);
    const [newDepartureDate, setNewDepartureDate] = useState<Date | null>(null);
    const [bookingRequestConfirmed, setBookingRequestConfirmed] = useState(false);
    const [declineRequestPopup, setDeclineRequestPopup] = useState(false);
    const [cancelBookingPopup, setCancelBookingPopup] = useState(false);
    const [payoutDetailsPopup, setPayoutDetailsPopup] = useState(false);
    const [cancelBookingMessagePopup, setCancelBookingMessagePopup] = useState(false);
    const [cancelBookingCancelledPopup, setCancelBookingCancelledPopup] = useState(false);
    const [refundRequestedPopup, setRefundRequestedPopup] = useState(false);
    const [refundRequest, setRefundRequest] = useState<ExtendedRefundRequestModel | null>(null);
    const [changeRequest, setChangeRequest] = useState<ExtendedChangeBookingRequestModel | null>(null);
    const [reasonCancelled, setReasonCancelled] = useState("");
    const [hostPriceBreakdown, setHostPriceBreakdown] = useState<HostPriceBreakdownTypes | null>(null);
    const [isContactSupportIntercomOpen, setIsContactSupportIntercomOpen] = useState(false);
    const [isReportGuestIntercomeOpen, setIsReportGuestIntercomeOpen] = useState(false);

    const getDaysTillArrival = useCallback(async (arrivalDate: Date, departureDate: Date) => {
        let currentDate = new Date();
        let arrivalDateObj = arrivalDate;
        let departureDateObj = departureDate;

        const difference_in_time = departureDateObj.getTime() - currentDate.getTime();
        const difference_in_days = difference_in_time / (1000 * 3600 * 24);
        const difference_in_time_till_arrival = arrivalDateObj.getTime() - currentDate.getTime();
        const difference_in_days_till_arrival = difference_in_time_till_arrival / (1000 * 3600 * 24);

        setDaysTillArrival(difference_in_days_till_arrival);
        setDaysTillDeparture(difference_in_days);
    }, []);
    const fetchBooking = useCallback(async () => {
        try {
            let bookingRequest = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
                headers: {
                    Authorization: accessToken,
                    bookingId: id,
                },
            });

            bookingRequest = bookingRequest.body.bookingRequest;

            let guestData = bookingRequest.UserModel;
            let listingData = bookingRequest.ListingModel;

            if (guestData.profilePicture) {
                const guestProfilePic = constructOptimisedProtectedImageUrl(guestData.profilePicture, guestData.identityID, 100);
                setGuestProfilePicture(guestProfilePic);
            }

            const arrivalDate = new Date(bookingRequest.arrivalDate.replace("Z", ""));
            const departureDate = new Date(bookingRequest.departureDate.replace("Z", ""));

            if (bookingRequest.changeRequested) {
                setChangeRequest(bookingRequest.ChangeBookingRequestModel);
                setNewArrivalDate(new Date(bookingRequest.ChangeBookingRequestModel.newArrivalDate.replace("Z", "")));
                setNewDepartureDate(new Date(bookingRequest.ChangeBookingRequestModel.newDepartureDate.replace("Z", "")));
            }
            if (bookingRequest.refundRequested) {
                setRefundRequest(bookingRequest.RefundRequestModel);
            }
            setRefundRequestedPopup(bookingRequest.refundRequested);

            setHostPriceBreakdown(JSON.parse(bookingRequest.hostPriceBreakdown));
            setBookingRequest(bookingRequest);
            setGuestData(guestData);
            setListingData(listingData);
            setNightsDifference(bookingRequest.changeRequested ? bookingRequest.ChangeBookingRequestModel.nights : bookingRequest.nights);
            setArrivalDate(arrivalDate);
            setDepartureDate(departureDate);
            setConfirmationCode(bookingRequest.confirmationCode);
            setBookingRequestConfirmed(bookingRequest.confirmed);
            getDaysTillArrival(arrivalDate, departureDate);
            return { bookingRequest };
        } catch (err) {
            console.log(err);
        }
    }, [getDaysTillArrival, id, accessToken]);

    // const setupBookingSubscription = useCallback(

    //     async (bookingRequest: BookingRequestModel) => {
    //         const subscription = (await API.graphql({
    //             query: customSubscriptions.onUpdateBookingByID,
    //             variables: {
    //                 id: bookingRequest.id,
    //             },
    //         })) as Observable<any>;

    //         subscription.subscribe({
    //             next: async ({ provider, value }) => {
    //                 await fetchBooking();
    //             },
    //             error: (error) => console.log(error),
    //         });
    //     },
    //     [fetchBooking]
    // );

    useEffect(() => {
        const execution = async () => {
            await fetchBooking();
            // setupBookingSubscription(bookingRequest);
            setPageLoading(false);
        };
        execution();
    }, [fetchBooking]);

    const declineBooking = async (reasonDeclined: string, declinedMessage: string) => {
        try {
            if (bookingRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/decline", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        id: bookingRequest.id,
                        reasonDeclined: reasonDeclined,
                        declinedMessage: declinedMessage,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const confirmRefund = async () => {
        try {
            if (bookingRequest && refundRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/refund/confirm", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        bookingRequestID: bookingRequest.id,
                        refundRequestID: refundRequest.id,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const declineRefund = async () => {
        try {
            if (bookingRequest && refundRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/refund/decline", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        bookingRequestID: bookingRequest.id,
                        refundRequestID: refundRequest.id,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getCancellationPolicy = useMemo(() => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (arrivalDate && bookingRequest) {
            let currentDate = new Date();
            let futureDate = new Date(arrivalDate).setUTCDate(arrivalDate.getUTCDate() - 1);
            let futureDate14 = new Date(arrivalDate).setUTCDate(arrivalDate.getUTCDate() - 1);
            let futureDate2 = currentDate.setUTCDate(currentDate.getUTCDate() + 2);
            let futureDate28 = new Date(arrivalDate).setUTCDate(arrivalDate.getUTCDate() - 28);
            let futureDateString = `${new Date(futureDate).getUTCDate()} ${month[new Date(futureDate).getUTCMonth()]}`;
            let futureDate14String = `${new Date(futureDate14).getUTCDate()} ${month[new Date(futureDate14).getUTCMonth()]}`;
            let futureDate2String = `${new Date(futureDate2).getUTCDate()} ${month[new Date(futureDate2).getUTCMonth()]}`;
            let futureDate28String = `${new Date(futureDate28).getUTCDate()} ${month[new Date(futureDate28).getUTCMonth()]}`;

            switch (bookingRequest.cancellationPolicy) {
                case "flexible":
                    return (
                        <BookingRequestGuestPolicyText>
                            <strong style={{ fontWeight: 575 }}>Free cancellation before {futureDateString}.</strong> After that, you will be paid for every night the guest spends. <br />
                            <BookingRequestGuestPolicyLink href={"https://help.anystay.com.au/en/articles/7010772-cancellations"} target={window.innerWidth > 768 ? "_blank" : ""}>
                                Learn more
                            </BookingRequestGuestPolicyLink>
                        </BookingRequestGuestPolicyText>
                    );
                case "moderate":
                    return (
                        <BookingRequestGuestPolicyText>
                            <strong style={{ fontWeight: 575 }}>Free cancellation before {futureDate14String}.</strong> After that, you will be paid for every night spent, plus 50% of unspent nights.{" "}
                            <BookingRequestGuestPolicyLink href={"https://help.anystay.com.au/en/articles/7010772-cancellations"} target={window.innerWidth > 768 ? "_blank" : ""}>
                                Learn more
                            </BookingRequestGuestPolicyLink>
                        </BookingRequestGuestPolicyText>
                    );
                case "strict":
                    return (
                        <BookingRequestGuestPolicyText>
                            <strong style={{ fontWeight: 575 }}>Free cancellation before {futureDate2String}.</strong> If you cancel before {futureDate28String} you will receive a 50% refund minus
                            service fees. After that, you won't be Refunded.{" "}
                            <BookingRequestGuestPolicyLink href={"https://help.anystay.com.au/en/articles/7010772-cancellations"} target={window.innerWidth > 768 ? "_blank" : ""}>
                                Learn more
                            </BookingRequestGuestPolicyLink>
                        </BookingRequestGuestPolicyText>
                    );
                default:
                    return "";
            }
        }
    }, [arrivalDate, bookingRequest]);

    const getBookingRequestTitle = () => {
        let status;
        if (bookingRequest) {
            if (bookingRequest.refundRequested) {
                status = "Refund request";
            } else if (bookingRequest.changeRequested) {
                status = "Change request";
            } else if (!bookingRequest.confirmed) {
                status = "Request to stay";
            } else {
                status = "Stay details";
            }
        } else {
            status = "Request to stay";
        }
        return status;
    };

    const toggleRefundedPopup = (value: boolean) => {
        setRefundRequestedPopup(value);
    };
    const toggleDeclineRequestPopup = (value: boolean) => {
        setDeclineRequestPopup(value);
    };
    const toggleCancelBookingPopup = (value: boolean) => {
        setCancelBookingPopup(value);
    };
    const togglePayoutDetailsPopup = (value: boolean) => {
        setPayoutDetailsPopup(value);
    };
    const toggleCancelBookingMessagePopup = (value: boolean) => {
        setCancelBookingMessagePopup(value);
    };
    const toggleCancelBookingCancelledPopup = (value: boolean) => {
        setCancelBookingCancelledPopup(value);
    };
    const toggleRefundRequestedPopup = (value: boolean) => {
        setRefundRequestedPopup(value);
    };

    const handleClick = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => {
        if (!isOpen) {
            (window as any).Intercom("showNewMessage", "");
            setIsOpen(true);
        } else {
            (window as any).Intercom("hide");
            setIsOpen(false);
        }
    };

    const contactSupportIntercomeRef = useClickOutside(isContactSupportIntercomOpen, () => handleClick(isContactSupportIntercomOpen, setIsContactSupportIntercomOpen));
    const reportGuestIntercomeRef = useClickOutside(isReportGuestIntercomeOpen, () => handleClick(isReportGuestIntercomeOpen, setIsReportGuestIntercomeOpen));

    if (pageLoading) {
        return <LoadingFullPageModal guestMode={true} reverse={false} />;
    }
    return (
        <Fragment>
            <HelmetTags title={`${guestData?.firstName} stay | ${confirmationCode} | Anystay`} />
            <BookingRequestWrapper>
                <BookingRequestTitleWrapper>
                    <BackBtn
                        onClick={() => {
                            navigate(-1);
                        }}
                        type={"Arrow"}
                        mobileTop={24}
                    />
                    <BookingRequestTitle>{getBookingRequestTitle()}</BookingRequestTitle>

                    <BookingRequestActionBtn
                        bookingRequest={bookingRequest}
                        changeRequest={changeRequest}
                        accessToken={accessToken}
                        fetchBooking={fetchBooking}
                        toggleRefundedPopup={toggleRefundedPopup}
                        toggleDeclineRequestPopup={toggleDeclineRequestPopup}
                    />
                </BookingRequestTitleWrapper>

                <BookingRequestIntroHeader
                    changeRequest={changeRequest}
                    bookingRequest={bookingRequest}
                    bookingRequestConfirmed={bookingRequestConfirmed}
                    daysTillArrival={daysTillArrival}
                    daysTillDeparture={daysTillDeparture}
                    guestData={guestData}
                    listingData={listingData}
                    nightsDifference={nightsDifference}
                    guestProfilePicture={guestProfilePicture}
                />

                <BookingRequestDateDetails
                    changeRequest={changeRequest}
                    bookingRequest={bookingRequest}
                    newArrivalDate={newArrivalDate}
                    newDepartureDate={newDepartureDate}
                    arrivalDate={arrivalDate}
                    departureDate={departureDate}
                    guestData={guestData}
                />

                {bookingRequest && (
                    <>
                        <BookingRequestSection>
                            <BookingRequestSectionRowWrapper>
                                <BookingRequestSectionRowText>Booking date</BookingRequestSectionRowText>
                                <BookingRequestSectionRowText>{`${new Date(bookingRequest.createdAt).toDateString().split(" ")[0]}, ${new Date(bookingRequest.createdAt).toLocaleDateString("au", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}`}</BookingRequestSectionRowText>
                            </BookingRequestSectionRowWrapper>
                        </BookingRequestSection>
                        <BookingRequestSection>
                            <BookingRequestSectionRowWrapper>
                                <BookingRequestSectionRowText>Booking ref.</BookingRequestSectionRowText>
                                <BookingRequestSectionRowText>{bookingRequest.confirmationCode}</BookingRequestSectionRowText>
                            </BookingRequestSectionRowWrapper>
                        </BookingRequestSection>
                    </>
                )}
                {bookingRequest?.changeRequested && (
                    <BookingRequestSection>
                        <BookingRequestSectionRowWrapper>
                            <BookingRequestSectionRowText>Booking ID</BookingRequestSectionRowText>
                            <BookingRequestSectionRowText>{confirmationCode}</BookingRequestSectionRowText>
                        </BookingRequestSectionRowWrapper>
                    </BookingRequestSection>
                )}
                <BookingRequestSection>
                    <BookingRequestSectionRowWrapper>
                        <Link to={`/your-calendar`}>
                            <BookingRequestSectionRowTextButton style={{ textDecoration: "underline" }}>See calendar</BookingRequestSectionRowTextButton>
                        </Link>
                    </BookingRequestSectionRowWrapper>
                </BookingRequestSection>
                <BookingRequestReservationGuestsSplitter />
                <BookingRequestSection>
                    <BookingRequestSectionRowWrapper>
                        <BookingRequestPaymentSectionTitle>Your payout</BookingRequestPaymentSectionTitle>
                        {/* <BookingRequestPaymentSectionTitlePayout>Paid in full</BookingRequestPaymentSectionTitlePayout> */}
                    </BookingRequestSectionRowWrapper>
                    {hostPriceBreakdown?.priceItems.map((item) => {
                        return (
                            <BookingRequestSectionRowWrapperPayouts key={item.label}>
                                <BookingRquestYourPayoutPriceLabel>{item.label}</BookingRquestYourPayoutPriceLabel>
                                <BookingRquestYourPayoutPrice>{item.amountFormatted}</BookingRquestYourPayoutPrice>
                            </BookingRequestSectionRowWrapperPayouts>
                        );
                    })}
                    {hostPriceBreakdown?.subTotalItems.map((item, index: number) => {
                        return (
                            <BookingRequestSectionRowWrapperPayouts key={item.label}>
                                <BookingRquestYourPayoutPriceLabel style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.label}</BookingRquestYourPayoutPriceLabel>
                                <BookingRquestYourPayoutPrice style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.amountFormatted}</BookingRquestYourPayoutPrice>
                            </BookingRequestSectionRowWrapperPayouts>
                        );
                    })}
                </BookingRequestSection>

                {!bookingRequest?.changeRequested && (
                    <BookingRequestSection>
                        <BookingRequestSectionRowWrapper>
                            {bookingRequest ? (
                                <Link to={`/payment-details/${bookingRequest.id}`}>
                                    <BookingRequestSectionRowTextButton style={{ textDecoration: "underline" }}>Manage payout</BookingRequestSectionRowTextButton>
                                </Link>
                            ) : null}
                        </BookingRequestSectionRowWrapper>
                    </BookingRequestSection>
                )}
                {!bookingRequest?.changeRequested && (
                    <Fragment>
                        <BookingRequestReservationGuestsSplitter />
                        <BookingRequestSection>
                            <BookingRequestSectionRowWrapper>
                                <BookingRequestPaymentSectionTitle>Guest policy</BookingRequestPaymentSectionTitle>
                            </BookingRequestSectionRowWrapper>
                            {bookingRequest && getCancellationPolicy}
                            {bookingRequest && bookingRequest.deposit ? (
                                <BookingRequestGuestPolicyText>
                                    <strong style={{ fontWeight: 575 }}>You may charge up to ${Number(bookingRequest.deposit / 100).toFixed(2)} AUD in deposit.</strong> This is usually processed at
                                    check-in.{" "}
                                    <BookingRequestGuestPolicyLink href={"https://help.anystay.com.au/en/articles/7016835-deposits"} target={window.innerWidth > 768 ? "_blank" : ""}>
                                        Learn more
                                    </BookingRequestGuestPolicyLink>
                                </BookingRequestGuestPolicyText>
                            ) : (
                                <BookingRequestGuestPolicyText>
                                    <strong style={{ fontWeight: 575 }}>No damage deposit.</strong> You guest does not have to pay a deposit. However, they may still be liable for damages.{" "}
                                    <BookingRequestGuestPolicyLink href={"https://help.anystay.com.au/en/articles/7016835-deposits"} target={window.innerWidth > 768 ? "_blank" : ""}>
                                        Learn more
                                    </BookingRequestGuestPolicyLink>
                                </BookingRequestGuestPolicyText>
                            )}
                        </BookingRequestSection>
                        {bookingRequest && bookingRequest.confirmed && (
                            <BookingRequestSection>
                                <BookingRequestSupportSectionRowWrapper>
                                    <BookingRequestSectionRowTextButton onClick={() => navigate(`/booking-receipt/${bookingRequest.id}`)}>Tax invoice</BookingRequestSectionRowTextButton>
                                </BookingRequestSupportSectionRowWrapper>
                            </BookingRequestSection>
                        )}
                        <BookingRequestSection>
                            <BookingRequestSupportSectionRowWrapper>
                                <BookingRequestSectionRowTextButton onClick={() => handleClick(isReportGuestIntercomeOpen, setIsReportGuestIntercomeOpen)} ref={reportGuestIntercomeRef}>
                                    Report guest
                                </BookingRequestSectionRowTextButton>
                            </BookingRequestSupportSectionRowWrapper>
                        </BookingRequestSection>
                    </Fragment>
                )}
                {bookingRequest && bookingRequest.cancelled !== true && bookingRequest.changeRequested !== true && (
                    <BookingRequestSection>
                        <BookingRequestSectionRowWrapper
                            onClick={() => {
                                if (bookingRequest.cancelled) {
                                    toggleCancelBookingCancelledPopup(true);
                                } else {
                                    togglePayoutDetailsPopup(true);
                                }
                            }}
                        >
                            <BookingRequestSectionRowTextButton style={{ color: ColorTheme.Blue.color, textDecoration: "underline" }}>Cancel booking</BookingRequestSectionRowTextButton>
                        </BookingRequestSectionRowWrapper>
                    </BookingRequestSection>
                )}
                <BookingRequestReservationGuestsSplitter />
                <BookingRequestSection>
                    <BookingRequestSectionRowWrapper>
                        <BookingRequestPaymentSectionTitle>Get support</BookingRequestPaymentSectionTitle>
                    </BookingRequestSectionRowWrapper>
                    <BookingRequestGuestPolicyText>Get in touch with our friendly host support team. We're always ready to assist you with anything you need.</BookingRequestGuestPolicyText>
                </BookingRequestSection>
                <BookingRequestSection style={{ borderBottom: "0" }}>
                    <BookingRequestSupportSectionRowWrapper>
                        {/* <BookingRequestSectionRowText style={{color: ColorTheme.Blue.color, textDecoration: "underline"}}>Contact support</BookingRequestSectionRowText> */}
                        <BookingRequestSectionRowTextButton onClick={() => handleClick(isContactSupportIntercomOpen, setIsContactSupportIntercomOpen)} ref={contactSupportIntercomeRef}>
                            Contact support
                        </BookingRequestSectionRowTextButton>
                    </BookingRequestSupportSectionRowWrapper>
                </BookingRequestSection>
            </BookingRequestWrapper>

            {declineRequestPopup && (
                <DeclineBookingRequestPopup
                    declineRequestPopup={declineRequestPopup}
                    fetchBooking={fetchBooking}
                    declineBooking={declineBooking}
                    toggleDeclineRequestPopup={toggleDeclineRequestPopup}
                    guestData={guestData}
                />
            )}

            {/* {cancelBookingPopup && (
                <HostCancellationPopup
                    updateReasonCancelled={(e: string) => setReasonCancelled(e)}
                    toggleCancelBookingPopup={toggleCancelBookingPopup}
                    togglePayoutDetailsPopup={togglePayoutDetailsPopup}
                />
            )} */}

            {payoutDetailsPopup && (
                <HostCancellationPayoutDetailsPopup
                    accessToken={accessToken}
                    bookingRequest={bookingRequest}
                    togglePayoutDetailsPopup={togglePayoutDetailsPopup}
                    toggleCancelBookingMessagePopup={toggleCancelBookingMessagePopup}
                />
            )}

            {cancelBookingMessagePopup && (
                <HostCancellationMessagePopup
                    guestData={guestData}
                    accessToken={accessToken}
                    reasonCancelled={reasonCancelled}
                    bookingRequest={bookingRequest}
                    fetchBooking={fetchBooking}
                    toggleCancelBookingMessagePopup={toggleCancelBookingMessagePopup}
                    toggleCancelBookingCancelledPopup={toggleCancelBookingCancelledPopup}
                />
            )}

            {cancelBookingCancelledPopup && <HostCancellationCancelledPopup toggleCancelBookingCancelledPopup={toggleCancelBookingCancelledPopup} />}

            {refundRequestedPopup && (
                <ReviewGuestRefundPopup
                    guestData={guestData}
                    refund={refundRequest}
                    confirmRefund={confirmRefund}
                    declineRefund={declineRefund}
                    toggleRefundRequestedPopup={toggleRefundRequestedPopup}
                />
            )}
        </Fragment>
    );
}
