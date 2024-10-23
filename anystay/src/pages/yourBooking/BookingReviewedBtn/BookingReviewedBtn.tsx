import {
    BookingReviewedBtnWrapper,
    BookingReviewedRatingIcon,
    BookingReviewedRatingTitle,
    BookingReviewedRatingComment,
    BookingReviewedRatingContainer,
    // BookingReviewedRatingArrow,
} from "./BookingReviewedBtnStyling";
import { YourBookingRequestBookingRequest } from "../yourBooking";

interface BookingReviewBtnProps {
    bookingRequest: YourBookingRequestBookingRequest;
}
const BookingReviewBtn: React.FC<BookingReviewBtnProps> = ({ bookingRequest }) => {
    return (
        <BookingReviewedBtnWrapper>
            <BookingReviewedRatingIcon>{bookingRequest.overall}</BookingReviewedRatingIcon>
            <BookingReviewedRatingContainer>
                <BookingReviewedRatingTitle>You rated your stay {bookingRequest.overall} out of 5.0</BookingReviewedRatingTitle>
                <BookingReviewedRatingComment>{bookingRequest.reviewContent ? bookingRequest.reviewContent : "You have not left a review yet"}</BookingReviewedRatingComment>
            </BookingReviewedRatingContainer>
            {/* <BookingReviewedRatingArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" /> */}
        </BookingReviewedBtnWrapper>
    );
};

export default BookingReviewBtn;
