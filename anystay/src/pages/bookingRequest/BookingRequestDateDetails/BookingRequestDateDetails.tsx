import {
    BookingRequestDateWrapper,
    BookingRequestSection,
    BookingRequestDate,
    BookingRequestSectionRowText,
    BookingRequestSectionCheckInText,
    BookingRequestSectionRowWrapper,
    BookingRequestSubHeaderButton,
    BookingRequestCallButton,
    BookingRequestReservationGuestsSplitter,
    BookingRequestChangeDatesWrapper,
    BookingRequestChangeDatesTitle,
    BookingRequestChangeDate,
    BookingRequestChangeDateText,
    BookingRequestChangeDateTextStrikethrough,
} from "../bookingRequestStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { ExtendedBookingRequestModel, ExtendedChangeBookingRequestModel } from "../interface/interface";
import { UserModel } from "../../../interfaces/models/userModel";

interface BookingRequestDateDetailsProps {
    changeRequest: ExtendedChangeBookingRequestModel | null;
    bookingRequest: ExtendedBookingRequestModel | null;
    newArrivalDate: Date | null;
    newDepartureDate: Date | null;
    arrivalDate: Date | null;
    guestData: UserModel | null;
    departureDate: Date | null;
}

const BookingRequestDateDetails: React.FC<BookingRequestDateDetailsProps> = ({ changeRequest, bookingRequest, newArrivalDate, newDepartureDate, arrivalDate, guestData, departureDate }) => {
    const getFormatedDate = (date: Date | null) => {
        if (!date) return;
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const unFormatedDate = new Date(date);

        return `${day[unFormatedDate.getDay()]}, ${unFormatedDate.getDate()} ${month[unFormatedDate.getMonth()]} ${unFormatedDate.getFullYear()}`;
    };
    const getTime = (time: number) => {
        if (time < 100 || time > 2400) {
            return null;
        }
        const ampm = time > 1100 && time < 2400 ? "pm" : "am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };
    const renderGuestsInChangeRequest = () => {
        const guestString = [];
        if (changeRequest) {
            guestString.push(`${changeRequest.newAdults} adult${changeRequest.newAdults > 1 ? "s" : ""}`);
            if (changeRequest.newChildren > 0) {
                guestString.push(`${changeRequest.newChildren} child${changeRequest.newChildren > 1 ? "ren" : ""}`);
            }
            if (changeRequest.newInfants > 0) {
                guestString.push(`${changeRequest.newInfants} infant${changeRequest.newInfants > 1 ? "s" : ""}`);
            }
            if (changeRequest.newPets > 0) {
                guestString.push(`${changeRequest.newPets} pet${changeRequest.newPets > 1 ? "s" : ""}`);
            }
        }
        return guestString.join(", ");
    };
    const renderGuestsInBookingRequest = () => {
        const guestString = [];
        if (bookingRequest) {
            guestString.push(`${bookingRequest.adults} adult${bookingRequest.adults > 1 ? "s" : ""}`);
            if (bookingRequest.children > 0) {
                guestString.push(`${bookingRequest.children} child${bookingRequest.children > 1 ? "ren" : ""}`);
            }
            if (bookingRequest.infants > 0) {
                guestString.push(`${bookingRequest.infants} infant${bookingRequest.infants > 1 ? "s" : ""}`);
            }
            if (bookingRequest.pets > 0) {
                guestString.push(`${bookingRequest.pets} pet${bookingRequest.pets > 1 ? "s" : ""}`);
            }
        }
        return guestString.join(", ");
    };
    if (!bookingRequest) return null;

    return (
        <>
            {!bookingRequest.changeRequested ? (
                <>
                    <BookingRequestDateWrapper>
                        <BookingRequestSection style={{ borderBottom: "none" }}>
                            <BookingRequestDate>
                                <BookingRequestSectionRowText style={{ fontWeight: 600 }}>Arrive</BookingRequestSectionRowText>

                                <BookingRequestSectionRowText>{getFormatedDate(newArrivalDate ? newArrivalDate : arrivalDate)}</BookingRequestSectionRowText>

                                <BookingRequestSectionCheckInText>{getTime(bookingRequest.checkInTime)}</BookingRequestSectionCheckInText>
                            </BookingRequestDate>
                        </BookingRequestSection>
                        <div style={{ height: "32px", width: "1px", background: ColorTheme.Grey2.color }} />
                        <BookingRequestSection style={{ borderBottom: "none" }}>
                            <BookingRequestDate>
                                <BookingRequestSectionRowText style={{ fontWeight: 600 }}>Depart</BookingRequestSectionRowText>

                                <BookingRequestSectionRowText>{getFormatedDate(newDepartureDate ? newDepartureDate : departureDate)}</BookingRequestSectionRowText>

                                <BookingRequestSectionCheckInText>{getTime(bookingRequest.checkOutTime)}</BookingRequestSectionCheckInText>
                            </BookingRequestDate>
                        </BookingRequestSection>
                    </BookingRequestDateWrapper>
                    <BookingRequestSection style={{ borderTop: `1px solid ${ColorTheme.Grey2.color}`, borderBottom: "None" }}>
                        <BookingRequestSectionRowWrapper style={{ gap: "16px" }}>
                            <BookingRequestSubHeaderButton to={`/guest/profile/${bookingRequest.usermodelID}`}>Profile</BookingRequestSubHeaderButton>
                            <BookingRequestSubHeaderButton to={`/host-conversation/${bookingRequest.conversationmodelID}`}>Message</BookingRequestSubHeaderButton>
                        </BookingRequestSectionRowWrapper>
                        {bookingRequest.confirmed && <BookingRequestCallButton href={`tel:${guestData && guestData.phone}`}>Call {guestData && guestData.phone}</BookingRequestCallButton>}
                    </BookingRequestSection>
                    <BookingRequestReservationGuestsSplitter />
                    <BookingRequestSection>
                        <BookingRequestSectionRowWrapper>
                            <BookingRequestSectionRowText>Guests</BookingRequestSectionRowText>
                            <BookingRequestSectionRowText>{renderGuestsInBookingRequest()}</BookingRequestSectionRowText>
                        </BookingRequestSectionRowWrapper>
                    </BookingRequestSection>
                </>
            ) : (
                <>
                    <BookingRequestChangeDatesWrapper>
                        <BookingRequestChangeDatesTitle>Arrive</BookingRequestChangeDatesTitle>
                        <BookingRequestChangeDate>
                            <BookingRequestChangeDateText>{getFormatedDate(newArrivalDate)}</BookingRequestChangeDateText>
                            {getFormatedDate(newArrivalDate) !== getFormatedDate(arrivalDate) && (
                                <BookingRequestChangeDateTextStrikethrough>{getFormatedDate(arrivalDate)}</BookingRequestChangeDateTextStrikethrough>
                            )}
                        </BookingRequestChangeDate>
                    </BookingRequestChangeDatesWrapper>
                    <BookingRequestChangeDatesWrapper>
                        <BookingRequestChangeDatesTitle>Depart</BookingRequestChangeDatesTitle>
                        <BookingRequestChangeDate>
                            <BookingRequestChangeDateText>{getFormatedDate(newDepartureDate)}</BookingRequestChangeDateText>
                            {getFormatedDate(newDepartureDate) !== getFormatedDate(departureDate) && (
                                <BookingRequestChangeDateTextStrikethrough>{getFormatedDate(departureDate)}</BookingRequestChangeDateTextStrikethrough>
                            )}
                        </BookingRequestChangeDate>
                    </BookingRequestChangeDatesWrapper>
                    <BookingRequestChangeDatesWrapper>
                        <BookingRequestChangeDatesTitle>Guests</BookingRequestChangeDatesTitle>
                        <BookingRequestChangeDate>
                            <BookingRequestChangeDateText>{renderGuestsInChangeRequest()}</BookingRequestChangeDateText>
                            {renderGuestsInChangeRequest() !== renderGuestsInBookingRequest() && (
                                <BookingRequestChangeDateTextStrikethrough>{renderGuestsInBookingRequest()}</BookingRequestChangeDateTextStrikethrough>
                            )}
                        </BookingRequestChangeDate>
                    </BookingRequestChangeDatesWrapper>
                </>
            )}
        </>
    );
};
export default BookingRequestDateDetails;
