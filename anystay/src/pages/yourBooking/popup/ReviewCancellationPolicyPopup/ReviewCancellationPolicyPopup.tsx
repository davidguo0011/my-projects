import { Fragment } from "react";
import {
    YourBookingReportBookingWrapper,
    YourBookingReportBookingTitleWrapper,
    YourBookingReportBookingTitle,
    YourBookingReportBookingSubtitle,
    CancellationPolicyRowWrapper,
    CancellationPolicyRowTextWrapper,
    CancellationPolicyDate,
    CancellationPolicyDateTitle,
    CancellationPolicyDateSubtitle,
} from "../../yourBookingStyling";
import useClickOutside from "../../../../hook/useClickOutside";
import { YourBookingRequestBookingRequest } from "../../yourBooking";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
import { callApi } from "../../../../utils/api/api";

interface ReviewCancellationPolicyPopupProps {
    accessToken: string;
    bookingRequest: YourBookingRequestBookingRequest;
    activateCard: (name: string) => void;
    deactivatePopupCards: () => void;
    setRefundAmount: (refundAmount: number) => void;
}

const ReviewCancellationPolicyPopup: React.FC<ReviewCancellationPolicyPopupProps> = ({ accessToken, bookingRequest, activateCard, deactivatePopupCards, setRefundAmount }) => {
    const wrapperRef = useClickOutside(true, deactivatePopupCards, true);

    const getOneDayBeforeArrival = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);
        arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 1);
        // arrivalDate.getUTCDate()
        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };
    const getWeekBeforeArrival = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);
        arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 7);
        // arrivalDate.getUTCDate()
        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };
    const getTwoDaysAfterBooking = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let confirmedDate = new Date(bookingRequest.confirmedAt);
        confirmedDate.setUTCDate(confirmedDate.getUTCDate() + 2);
        // arrivalDate.getUTCDate()
        return `${confirmedDate.getUTCDate()} ${month[confirmedDate.getUTCMonth()]}`;
    };
    const getWeekForArrival = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);
        arrivalDate.setUTCDate(arrivalDate.getUTCDate());
        // arrivalDate.getUTCDate()
        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };

    const daysToArrivalDate = (arrivalDate: string) => {
        const today = new Date(new Date().toString().split(" ").slice(1, 5).join(" ") + " GMT+0000");
        const millisecond = new Date(arrivalDate).getTime() - today.getTime();
        const day = Math.ceil(millisecond / 1000 / 3600 / 24);
        return day;
    };

    const getTime = (time: number) => {
        if (time < 100 || time > 2400) {
            return null;
        }
        const ampm = time > 1100 && time < 2400 ? " pm" : " am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };

    const handleCancelStayClick = async () => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/cancel/check", {
            headers: {
                Authorization: accessToken,
                bookingId: bookingRequest.id,
            },
            body: {
                bookingRequestID: bookingRequest.id,
            },
        })
            .then((res) => {
                if (res.success) {
                    setRefundAmount(res.refund);
                    activateCard("cancelStayMenuRefundSummary");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            closePopup={deactivatePopupCards}
            cancelBtnText={"Cancel stay"}
            backBtnType={"Arrow"}
            btnText={"Done"}
            handleSave={deactivatePopupCards}
            btnColor={"red"}
            cancelPopup={handleCancelStayClick}
        >
            <YourBookingReportBookingWrapper>
                <YourBookingReportBookingTitleWrapper>
                    <YourBookingReportBookingTitle>Cancellation policy</YourBookingReportBookingTitle>
                    <YourBookingReportBookingSubtitle>Review your host’s cancellation policy for your booking.</YourBookingReportBookingSubtitle>
                </YourBookingReportBookingTitleWrapper>
                {bookingRequest.cancellationPolicy === "flexible" ? (
                    <Fragment>
                        <CancellationPolicyRowWrapper>
                            <CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDate>{getOneDayBeforeArrival()}</CancellationPolicyDate>
                                <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                            </CancellationPolicyRowTextWrapper>
                            <CancellationPolicyDateSubtitle>Full refund including cleaning and service fee</CancellationPolicyDateSubtitle>
                        </CancellationPolicyRowWrapper>
                        <CancellationPolicyRowWrapper style={{ marginBottom: "16px" }}>
                            <CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDate>{new Date(bookingRequest.departureDate).toLocaleDateString("au", { month: "short", day: "numeric" })}</CancellationPolicyDate>
                                <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkOutTime)}</CancellationPolicyDateTitle>
                            </CancellationPolicyRowTextWrapper>
                            <CancellationPolicyDateSubtitle>Full refund of unspent nights minus cleaning and service fee</CancellationPolicyDateSubtitle>
                        </CancellationPolicyRowWrapper>
                    </Fragment>
                ) : bookingRequest.cancellationPolicy === "moderate" ? (
                    <Fragment>
                        {daysToArrivalDate(bookingRequest.arrivalDate) >= 7 && (
                            <CancellationPolicyRowWrapper>
                                <CancellationPolicyRowTextWrapper>
                                    <CancellationPolicyDate>{getWeekBeforeArrival()}</CancellationPolicyDate>
                                    <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                                </CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDateSubtitle>Full refund including cleaning and service fee</CancellationPolicyDateSubtitle>
                            </CancellationPolicyRowWrapper>
                        )}
                        <CancellationPolicyRowWrapper style={{ marginBottom: "16px" }}>
                            <CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDate>{new Date(bookingRequest.departureDate).toLocaleDateString("au", { month: "short", day: "numeric" })}</CancellationPolicyDate>
                                <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkOutTime)}</CancellationPolicyDateTitle>
                            </CancellationPolicyRowTextWrapper>
                            <CancellationPolicyDateSubtitle>50% refund of unspent nights minus cleaning and service fee</CancellationPolicyDateSubtitle>
                        </CancellationPolicyRowWrapper>
                    </Fragment>
                ) : bookingRequest.cancellationPolicy === "strict" ? (
                    <Fragment>
                        {daysToArrivalDate(bookingRequest.arrivalDate) > 7 && daysToArrivalDate(bookingRequest.confirmedAt) >= -2 ? (
                            <CancellationPolicyRowWrapper>
                                <CancellationPolicyRowTextWrapper>
                                    <CancellationPolicyDate>{getTwoDaysAfterBooking()}</CancellationPolicyDate>
                                    <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                                </CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDateSubtitle>Full refund including cleaning and service fee</CancellationPolicyDateSubtitle>
                            </CancellationPolicyRowWrapper>
                        ) : (
                            daysToArrivalDate(bookingRequest.arrivalDate) >= 7 && (
                                <CancellationPolicyRowWrapper>
                                    <CancellationPolicyRowTextWrapper>
                                        <CancellationPolicyDate>{getWeekBeforeArrival()}</CancellationPolicyDate>
                                        <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                                    </CancellationPolicyRowTextWrapper>
                                    <CancellationPolicyDateSubtitle>50% refund of unspent nights minus cleaning fee</CancellationPolicyDateSubtitle>
                                </CancellationPolicyRowWrapper>
                            )
                        )}
                        <CancellationPolicyRowWrapper>
                            <CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDate>{getWeekForArrival()}</CancellationPolicyDate>
                                <CancellationPolicyDateTitle>Before {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                            </CancellationPolicyRowTextWrapper>
                            <CancellationPolicyDateSubtitle>Refund cleaning fee</CancellationPolicyDateSubtitle>
                        </CancellationPolicyRowWrapper>
                        <CancellationPolicyRowWrapper style={{ marginBottom: "16px" }}>
                            <CancellationPolicyRowTextWrapper>
                                <CancellationPolicyDate>{getWeekForArrival()}</CancellationPolicyDate>
                                <CancellationPolicyDateTitle>After {getTime(bookingRequest.checkInTime)}</CancellationPolicyDateTitle>
                            </CancellationPolicyRowTextWrapper>
                            <CancellationPolicyDateSubtitle>No refund</CancellationPolicyDateSubtitle>
                        </CancellationPolicyRowWrapper>
                    </Fragment>
                ) : null}
            </YourBookingReportBookingWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default ReviewCancellationPolicyPopup;
