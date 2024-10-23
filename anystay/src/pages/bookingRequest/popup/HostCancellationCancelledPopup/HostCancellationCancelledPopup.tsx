import {
    HostCancellationPopupWrapper,
    HostCancellationPayoutDetailsPopupTitle,
    HostCancellationPayoutDetailsPopupSubtitle,
    HostCancellationPayoutDetailsPopupDivider,
    HostCancellationCancelledDoneButton,
} from "../../bookingRequestStyling";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../../hook/useClickOutside";
interface HostCancellationCancelledPopupProps {
    toggleCancelBookingCancelledPopup: (arg: boolean) => void;
}
const HostCancellationCancelledPopup: React.FC<HostCancellationCancelledPopupProps> = ({ toggleCancelBookingCancelledPopup }) => {
    const wrapperRef = useClickOutside(true, () => {
        toggleCancelBookingCancelledPopup(false);
    });
    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={() => toggleCancelBookingCancelledPopup(false)} noContinueBtn={true}>
            <HostCancellationPopupWrapper>
                <HostCancellationPayoutDetailsPopupTitle>Booking cancelled</HostCancellationPayoutDetailsPopupTitle>
                <HostCancellationPayoutDetailsPopupSubtitle>
                    Your booking was successfully cancelled. Frequent cancellations may result in your account being reviewed.
                </HostCancellationPayoutDetailsPopupSubtitle>
                <HostCancellationPayoutDetailsPopupDivider />
                <HostCancellationPayoutDetailsPopupTitle>Our commitment</HostCancellationPayoutDetailsPopupTitle>
                <HostCancellationPayoutDetailsPopupSubtitle>
                    We are committed to providing you with a perfect hosting experience. When you don't feel comfortable about a booking, rest assured knowing our friendly support team is here to help
                    you out.
                </HostCancellationPayoutDetailsPopupSubtitle>
                <HostCancellationPayoutDetailsPopupDivider />
                <HostCancellationCancelledDoneButton type="button" onClick={() => toggleCancelBookingCancelledPopup(false)}>
                    Done
                </HostCancellationCancelledDoneButton>
            </HostCancellationPopupWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default HostCancellationCancelledPopup;
