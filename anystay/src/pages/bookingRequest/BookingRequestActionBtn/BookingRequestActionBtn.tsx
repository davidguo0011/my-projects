import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingRequestAcceptButtonWrapper, BookingRequestReviewButton } from "../bookingRequestStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import { callApi } from "../../../utils/api/api";
import { ExtendedBookingRequestModel, ExtendedChangeBookingRequestModel } from "../interface/interface";

interface BookingRequestActionBtnProps {
    bookingRequest: ExtendedBookingRequestModel | null;
    changeRequest: ExtendedChangeBookingRequestModel | null;
    accessToken: string;
    fetchBooking: () => Promise<{ bookingRequest: any } | void>;
    toggleRefundedPopup: (arg: boolean) => void;
    toggleDeclineRequestPopup: (arg: boolean) => void;
}

const BookingRequestActionBtn: React.FC<BookingRequestActionBtnProps> = ({ bookingRequest, changeRequest, accessToken, fetchBooking, toggleRefundedPopup, toggleDeclineRequestPopup }) => {
    const [isDeclineContinueBtnLoading, setIsDeclineContinueBtnLoading] = useState(false);
    const [isAcceptContinueBtnLoading, setIsAcceptContinueBtnLoading] = useState(false);
    const navigate = useNavigate();
    const confirmChangeBooking = async () => {
        try {
            if (bookingRequest && changeRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/change/confirm", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        bookingRequestId: bookingRequest.id,
                        changeBookingRequestId: changeRequest.id,
                        listingModelId: bookingRequest.listingmodelID,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };
    const declineChangeBooking = async () => {
        try {
            if (bookingRequest && changeRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/change/decline", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        bookingRequestId: bookingRequest.id,
                        changeBookingRequestId: changeRequest.id,
                        listingModelId: bookingRequest.listingmodelID,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };
    const confirmBooking = async () => {
        try {
            if (bookingRequest) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/confirm", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingRequest.id,
                    },
                    body: {
                        id: bookingRequest.id,
                        confirmed: true,
                    },
                });
                await fetchBooking();
            }
        } catch (err) {
            console.log(err);
        }
    };
    if (!bookingRequest) return null;
    return (
        <>
            {bookingRequest.refundRequested ? (
                <BookingRequestAcceptButtonWrapper style={{ gridTemplateColumns: "100%" }}>
                    <BookingRequestReviewButton
                        type="button"
                        onClick={() => {
                            toggleRefundedPopup(true);
                        }}
                    >
                        Respond
                    </BookingRequestReviewButton>
                </BookingRequestAcceptButtonWrapper>
            ) : bookingRequest.changeRequested ? (
                <BookingRequestAcceptButtonWrapper>
                    <ContinueBtn
                        style={{ width: window.innerWidth < 768 ? "100%" : "unset" }}
                        disabled={isDeclineContinueBtnLoading}
                        isLoading={isDeclineContinueBtnLoading}
                        background={"grey"}
                        onClick={async () => {
                            setIsDeclineContinueBtnLoading(true);
                            await declineChangeBooking();
                            setIsDeclineContinueBtnLoading(false);
                        }}
                    >
                        Decline
                    </ContinueBtn>
                    <ContinueBtn
                        style={{ width: window.innerWidth < 768 ? "100%" : "unset" }}
                        disabled={isAcceptContinueBtnLoading}
                        isLoading={isAcceptContinueBtnLoading}
                        background={"blue"}
                        onClick={async () => {
                            setIsAcceptContinueBtnLoading(true);
                            await confirmChangeBooking();
                            setIsAcceptContinueBtnLoading(false);
                        }}
                    >
                        Accept
                    </ContinueBtn>
                </BookingRequestAcceptButtonWrapper>
            ) : !bookingRequest.confirmed && !bookingRequest.declined ? (
                <BookingRequestAcceptButtonWrapper>
                    <ContinueBtn
                        style={{ width: window.innerWidth < 768 ? "100%" : "unset" }}
                        disabled={isDeclineContinueBtnLoading}
                        isLoading={isDeclineContinueBtnLoading}
                        background={"grey"}
                        onClick={() => {
                            toggleDeclineRequestPopup(true);
                        }}
                    >
                        Decline
                    </ContinueBtn>
                    <ContinueBtn
                        style={{ width: window.innerWidth < 768 ? "100%" : "unset" }}
                        disabled={isAcceptContinueBtnLoading}
                        isLoading={isAcceptContinueBtnLoading}
                        background={"blue"}
                        onClick={async () => {
                            setIsAcceptContinueBtnLoading(true);
                            await confirmBooking();
                            setIsAcceptContinueBtnLoading(false);
                        }}
                    >
                        Accept
                    </ContinueBtn>
                </BookingRequestAcceptButtonWrapper>
            ) : (
                new Date().getTime() > new Date(bookingRequest.departureDate).getTime() && (
                    <BookingRequestAcceptButtonWrapper>
                        <BookingRequestReviewButton
                            type="button"
                            onClick={() => {
                                navigate(`/review-guest/${bookingRequest.id}`);
                            }}
                        >
                            Review guest
                        </BookingRequestReviewButton>
                    </BookingRequestAcceptButtonWrapper>
                )
            )}
        </>
    );
};
export default BookingRequestActionBtn;
