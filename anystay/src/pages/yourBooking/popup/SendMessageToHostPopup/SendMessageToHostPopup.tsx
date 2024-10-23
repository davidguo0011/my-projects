import { useState } from "react";
import { callApi } from "../../../../utils/api/api";
import {
    YourBookingReportBookingTitleWrapper,
    YourBookingReportBookingTitle,
    YourBookingReportBookingSubtitle,
    ReportBookingRequestInput,
    YourBookingReportBookingWrapper,
} from "../../yourBookingStyling";
import useClickOutside from "../../../../hook/useClickOutside";
import { YourBookingRequestBookingRequest, guestPriceBreakdownType } from "../../yourBooking";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
interface SendMessageToHostPopupProps {
    accessToken: string;
    bookingRequest: YourBookingRequestBookingRequest;
    setGuestPriceBreakdown: (guestPriceBreakdown: guestPriceBreakdownType) => void;
    setBookingRequest: React.Dispatch<React.SetStateAction<YourBookingRequestBookingRequest | null>>;
    activateCard: (name: string) => void;
    deactivatePopupCards: () => void;
}

const SendMessageToHostPopup: React.FC<SendMessageToHostPopupProps> = ({ accessToken, bookingRequest, activateCard, deactivatePopupCards, setBookingRequest, setGuestPriceBreakdown }) => {
    const [refundMessageText, setRefundMessageText] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const wrapperRef = useClickOutside(true, deactivatePopupCards);
    const handleCancelBooking = async () => {
        try {
            setIsContinueBtnLoading(true);

            const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/cancel", {
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingRequest.id,
                },
                body: {
                    bookingRequestID: bookingRequest.id,
                    message: refundMessageText,
                },
            });

            setIsContinueBtnLoading(false);
            setGuestPriceBreakdown(JSON.parse(res.body.bookingRequest.guestPriceBreakdown));
            setBookingRequest((prevState) => {
                return { ...prevState, cancelled: true } as YourBookingRequestBookingRequest;
            });
            activateCard("cancelStayPopupSubmitted");
        } catch (err) {
            setIsContinueBtnLoading(false);
            console.log(err);
        }
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            closePopup={deactivatePopupCards}
            cancelBtnText={"Don't cancel"}
            backBtnType={"Arrow"}
            btnText={"Cancel stay"}
            handleSave={handleCancelBooking}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnColor={"red"}
        >
            <YourBookingReportBookingWrapper>
                <YourBookingReportBookingTitleWrapper style={{ borderBottom: "none" }}>
                    <YourBookingReportBookingTitle>Send a message</YourBookingReportBookingTitle>
                    <YourBookingReportBookingSubtitle>Tell your host why you had to cancel your stay.</YourBookingReportBookingSubtitle>
                    <ReportBookingRequestInput placeholder="Type your message" value={refundMessageText} onChange={(e) => setRefundMessageText(e.target.value)} maxLength={4096} />
                </YourBookingReportBookingTitleWrapper>
            </YourBookingReportBookingWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default SendMessageToHostPopup;
