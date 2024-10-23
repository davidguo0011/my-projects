import {
    YourBookingReportBookingWrapper,
    YourBookingReportBookingTitleWrapper,
    CancellationPolicyDoneButton,
    YourBookingReportSubmittedTitle,
    YourBookingReportSubmittedSubtitle,
    YourBookingReportSubmittedDivider,
} from "../../yourBookingStyling";
import useClickOutside from "../../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

interface BookingCanceledPopupProps {
    deactivatePopupCards: () => void;
}

const BookingCanceledPopup: React.FC<BookingCanceledPopupProps> = ({ deactivatePopupCards }) => {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} closePopup={deactivatePopupCards} backBtnType={"Arrow"} noContinueBtn={true}>
            <YourBookingReportBookingWrapper noContinueBtn={true}>
                <YourBookingReportBookingTitleWrapper style={{ borderBottom: "none", marginTop: "10px" }}>
                    <YourBookingReportSubmittedTitle>Booking cancelled</YourBookingReportSubmittedTitle>
                    <YourBookingReportSubmittedSubtitle>Eligible refunds have been processed and will arrive back in your original payment method shortly.</YourBookingReportSubmittedSubtitle>
                    <YourBookingReportSubmittedDivider />
                    <YourBookingReportSubmittedTitle>Our commitment</YourBookingReportSubmittedTitle>
                    <YourBookingReportSubmittedSubtitle>
                        We are commited to providing you with a perfect accomodation experience. On the rare occasionm things go wrong, rest assured knowing our friendly support team is here to help
                        you out.
                    </YourBookingReportSubmittedSubtitle>
                </YourBookingReportBookingTitleWrapper>
                <CancellationPolicyDoneButton style={{ marginTop: "auto", width: "100%" }} type="button" onClick={deactivatePopupCards}>
                    Done
                </CancellationPolicyDoneButton>
            </YourBookingReportBookingWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default BookingCanceledPopup;
