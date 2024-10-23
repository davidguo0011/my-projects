import { YourBookingNoticeWrapper, YourBookingNoticeTitle, YourBookingNoticeSubtitle } from "../yourBookingStyling";
import BookingReviewedBtn from "../BookingReviewedBtn/BookingReviewedBtn";
import ReviewStarBtn from "../ReviewStarBtn/ReviewStarBtn";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { YourBookingRequestBookingRequest } from "../yourBooking";

interface YourBookingHeaderMessageProps {
    bookingRequest: YourBookingRequestBookingRequest;
    refundRequested: boolean;
    changesRequested: boolean;
}

const YourBookingHeaderMessage: React.FC<YourBookingHeaderMessageProps> = ({ bookingRequest, refundRequested, changesRequested }) => {
    let notificationTitle = "";
    let notificationSubtitle = "";
    let color = "";
    if (bookingRequest.stayReviewed) {
        return <BookingReviewedBtn bookingRequest={bookingRequest} />;
    }
    if (bookingRequest) {
        const currentTimestamp = new Date().getTime();
        if (currentTimestamp > new Date(bookingRequest.departureDate.replace("Z", "")).getTime()) {
            return (
                <YourBookingNoticeWrapper>
                    <YourBookingNoticeTitle color={ColorTheme.Black.color}>How was your stay?</YourBookingNoticeTitle>
                    <ReviewStarBtn bookingRequest={bookingRequest} />
                </YourBookingNoticeWrapper>
            );
        } else if (bookingRequest.declined) {
            notificationTitle = "Your stay was declined";
            notificationSubtitle = "Your host has declined your stay";
            color = ColorTheme.Black.color;
        } else if (bookingRequest.cancelled) {
            notificationTitle = "Your stay was cancelled";
            notificationSubtitle = "Your stay has been cancelled";
            color = ColorTheme.Black.color;
        } else if (!bookingRequest.completed) {
            notificationTitle = "Your stay is pending";
            notificationSubtitle = "Your host will respond within 24 hours";
            color = ColorTheme.Yellow.color;
        } else if (refundRequested) {
            notificationTitle = "Your refund was requested";
            notificationSubtitle = "Your host will respond within 24 hours";
            color = ColorTheme.Yellow.color;
        } else if (changesRequested) {
            notificationTitle = "Your changes were requested";
            notificationSubtitle = "Your host will respond within 24 hours";
            color = ColorTheme.Yellow.color;
        } else {
            return null;
        }
    }

    return (
        <YourBookingNoticeWrapper>
            <YourBookingNoticeTitle color={color}>{notificationTitle}</YourBookingNoticeTitle>
            <YourBookingNoticeSubtitle>{notificationSubtitle}</YourBookingNoticeSubtitle>
        </YourBookingNoticeWrapper>
    );
};

export default YourBookingHeaderMessage;
