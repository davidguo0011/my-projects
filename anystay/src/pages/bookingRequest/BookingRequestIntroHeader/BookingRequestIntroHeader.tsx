import {
    BookingRequestSection,
    BookingRequestHeaderContentWrapper,
    BookingRequestHeaderTextWrapper,
    BookingRequestHeaderSubtitle,
    BookingRequestHeaderTitle,
    BookingRequestHeaderPriceText,
    BookingRequestHeaderLink,
    BookingRequestHeaderDateText,
    BookingRequestHeaderProfilePicture,
} from "../bookingRequestStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { useMemo } from "react";
import { ExtendedBookingRequestModel, ExtendedChangeBookingRequestModel } from "../interface/interface";
import { UserModel } from "../../../interfaces/models/userModel";
import { ListingModel } from "../../../interfaces/models/listingModel";

interface BookingRequestIntroHeaderProps {
    bookingRequest: ExtendedBookingRequestModel | null;
    bookingRequestConfirmed: boolean;
    daysTillArrival: number;
    daysTillDeparture: number;
    guestData: UserModel | null;
    listingData: ListingModel | null;
    nightsDifference: number;
    guestProfilePicture: string;
    changeRequest: ExtendedChangeBookingRequestModel | null;
}

const BookingRequestIntroHeader: React.FC<BookingRequestIntroHeaderProps> = ({
    bookingRequest,
    bookingRequestConfirmed,
    daysTillArrival,
    daysTillDeparture,
    guestData,
    listingData,
    nightsDifference,
    guestProfilePicture,
    changeRequest,
}) => {
    const getColor = () => {
        if (bookingRequest) {
            let currentDate = new Date();
            let departureDate = new Date(bookingRequest.departureDate);

            const difference_in_time = departureDate.getTime() - currentDate.getTime();
            const difference_in_days = difference_in_time / (1000 * 3600 * 24);

            if (difference_in_days < -0.5) {
                return ColorTheme.Black.color;
            } else if (bookingRequest.confirmed === null) {
                return ColorTheme.Yellow.color;
            } else if (bookingRequest.confirmed) {
                return ColorTheme.Black.color;
            } else {
                return ColorTheme.Black.color;
            }
        }
    };
    const renderHeaderPrice = () => {
        if (bookingRequest) {
            const amount = (bookingRequest.bookingAmount / 100).toFixed(2);
            const refundedAmount = (bookingRequest.refundedAmount / 100).toFixed(2);
            return `$${amount} ${bookingRequest.refundedAmount > 0 ? `(-$${refundedAmount})` : ""} AUD`;
        }
    };

    const guestsData = useMemo(() => {
        const guestString = [];
        if (bookingRequest?.changeRequested && changeRequest) {
            guestString.push(`${changeRequest.newGuests} guest${changeRequest.newGuests > 1 ? "s" : ""}`);
            if (changeRequest.newInfants > 0) {
                guestString.push(`${changeRequest.newInfants} infant${changeRequest.newInfants > 1 ? "s" : ""}`);
            }
            if (changeRequest.newPets > 0) {
                guestString.push(`${changeRequest.newPets} pet${changeRequest.newPets > 1 ? "s" : ""}`);
            }
        } else if (bookingRequest) {
            guestString.push(`${bookingRequest.guests} guest${bookingRequest.guests > 1 ? "s" : ""}`);
            if (bookingRequest.infants > 0) {
                guestString.push(`${bookingRequest.infants} infant${bookingRequest.infants > 1 ? "s" : ""}`);
            }
            if (bookingRequest.pets > 0) {
                guestString.push(`${bookingRequest.pets} pet${bookingRequest.pets > 1 ? "s" : ""}`);
            }
        }
        return guestString.join(", ");
    }, [changeRequest, bookingRequest]);

    if (!bookingRequest) return null;

    return (
        <BookingRequestSection>
            <BookingRequestHeaderContentWrapper>
                <BookingRequestHeaderTextWrapper>
                    <BookingRequestHeaderSubtitle>
                        {bookingRequest.cancelled ? (
                            <span style={{ color: ColorTheme.Black.color }}>Cancelled</span>
                        ) : bookingRequest.changeRequested || bookingRequest.refundRequested ? (
                            <span style={{ color: ColorTheme.Yellow.color }}>{bookingRequest.expiryTime > 0 ? `Expires in ${bookingRequest.expiryTime} hours` : "Overdue"}</span>
                        ) : bookingRequest.declined ? (
                            <span style={{ color: ColorTheme.Black.color }}>Declined</span>
                        ) : bookingRequestConfirmed === true ? (
                            <span style={{ color: getColor() }}>
                                {daysTillArrival > 1 ? `Arriving in ${Math.ceil(daysTillArrival)} days` : daysTillDeparture > 0 ? `Departing in ${Math.ceil(daysTillDeparture)} days` : `Complete`}
                            </span>
                        ) : (
                            <span style={{ color: ColorTheme.Yellow.color }}>{bookingRequest.expiryTime > 0 ? `Expires in ${bookingRequest.expiryTime} hours` : "Overdue"}</span>
                        )}
                    </BookingRequestHeaderSubtitle>
                    <BookingRequestHeaderTitle>{guestData && `${guestData.firstName} ${guestData.lastName}`}</BookingRequestHeaderTitle>
                    {listingData && (
                        <>
                            <BookingRequestHeaderPriceText>{renderHeaderPrice()}</BookingRequestHeaderPriceText>
                            <BookingRequestHeaderLink to={`/edit-listing/${listingData.id}`}>{listingData.propertyTitle}</BookingRequestHeaderLink>

                            <BookingRequestHeaderDateText>
                                {`${nightsDifference} night${nightsDifference > 1 ? "s" : ""}`} • {guestsData}
                            </BookingRequestHeaderDateText>
                        </>
                    )}
                </BookingRequestHeaderTextWrapper>
                <BookingRequestHeaderProfilePicture src={guestProfilePicture} alt="Guest profile picture" />
            </BookingRequestHeaderContentWrapper>
        </BookingRequestSection>
    );
};

export default BookingRequestIntroHeader;
