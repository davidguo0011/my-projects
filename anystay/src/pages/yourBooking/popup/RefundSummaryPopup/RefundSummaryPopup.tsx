import {
    YourBookingReportBookingWrapper,
    YourBookingCancelBookingRefundTitle,
    YourBookingCancelBookingRefundSubtitle,
    YourBookingCancelBookingRefundDivider,
    YourBookingCancelBookingRefundDividerDesktop,
    YourBookingCancelBookingRefundSubtotalWrapper,
    YourBookingCancelBookingRefundTotalText,
    YourBookingCancelBookingRefundTotalPrice,
    YourBookingCancelBookingRefundContent,
} from "../../yourBookingStyling";
import useClickOutside from "../../../../hook/useClickOutside";
import { YourBookingRequestBookingRequest } from "../../yourBooking";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

interface RefundPopupProps {
    refundAmount: number;
    bookingRequest: YourBookingRequestBookingRequest;
    activateCard: (name: string) => void;
    deactivatePopupCards: () => void;
}

const RefundPopup: React.FC<RefundPopupProps> = ({ refundAmount, bookingRequest, activateCard, deactivatePopupCards }) => {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            closePopup={deactivatePopupCards}
            cancelBtnText={"Don't cancel"}
            backBtnType={"Arrow"}
            btnText={"Continue"}
            btnColor={"red"}
            handleSave={() => {
                activateCard("cancelStayMenuRefundMessage");
            }}
        >
            <YourBookingReportBookingWrapper>
                <YourBookingCancelBookingRefundContent>
                    <YourBookingCancelBookingRefundTitle>{`You will be refunded $${refundAmount > 0 ? Number(refundAmount / 100).toFixed(2) : "0.00"}`}</YourBookingCancelBookingRefundTitle>
                    <YourBookingCancelBookingRefundSubtitle>You will be refunded according to this booking's cancellation policy.</YourBookingCancelBookingRefundSubtitle>
                </YourBookingCancelBookingRefundContent>
                <YourBookingCancelBookingRefundDivider />
                <YourBookingCancelBookingRefundSubtotalWrapper>
                    <YourBookingCancelBookingRefundTotalText>You paid</YourBookingCancelBookingRefundTotalText>
                    <YourBookingCancelBookingRefundTotalPrice>${Number(bookingRequest.paymentAmount / 100).toFixed(2)}</YourBookingCancelBookingRefundTotalPrice>
                </YourBookingCancelBookingRefundSubtotalWrapper>
                <YourBookingCancelBookingRefundDivider />
                <YourBookingCancelBookingRefundSubtotalWrapper>
                    <YourBookingCancelBookingRefundTotalText>Your refund</YourBookingCancelBookingRefundTotalText>
                    <YourBookingCancelBookingRefundTotalPrice>${Number(refundAmount / 100).toFixed(2)}</YourBookingCancelBookingRefundTotalPrice>
                </YourBookingCancelBookingRefundSubtotalWrapper>
                <YourBookingCancelBookingRefundDividerDesktop style={{ marginBottom: "16px" }} />
            </YourBookingReportBookingWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default RefundPopup;
