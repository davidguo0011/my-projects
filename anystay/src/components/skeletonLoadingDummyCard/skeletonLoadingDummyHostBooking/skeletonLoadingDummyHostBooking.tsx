import {
    BookingRequestWrapper,
    BookingRequestTitle,
    BookingRequestSubtitle,
    BookingRequestContentWrapper,
    BookingRequestContentTextWrapper,
    BookingRequestContentText,
    BookingRequestGuestProfilePicture,
    BookingRequestRespondButton,
} from "./skeletonLoadingDummyHostBookingStyling";
const SkeletonLoadingDummyHostBooking: React.FC = () => {
    return (
        <BookingRequestWrapper>
            <BookingRequestTitle></BookingRequestTitle>
            <BookingRequestSubtitle></BookingRequestSubtitle>
            <BookingRequestContentWrapper>
                <BookingRequestContentTextWrapper>
                    <BookingRequestContentText></BookingRequestContentText>
                    <BookingRequestContentText style={{ width: "200px" }}></BookingRequestContentText>
                </BookingRequestContentTextWrapper>
                <BookingRequestGuestProfilePicture />
            </BookingRequestContentWrapper>
            <BookingRequestRespondButton></BookingRequestRespondButton>
        </BookingRequestWrapper>
    );
};

export default SkeletonLoadingDummyHostBooking;
