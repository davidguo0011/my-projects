import {
    YourBookingHeaderDetailsDatesTextSection,
    YourBookingTextLinkImage,
    YourBookingHeaderDetailsChangeWrapper,
    YourBookingHeaderDetailsChangeButton,
    YourBookingHeaderDetailsChangeTextWrapper,
    YourBookingHeaderDetailsTextTitle,
    YourBookingHeaderDetailsTextSubtitle,
    YourBookingText,
    YourBookingGetSupportTitle,
    YourBookingHeaderDetailsChangeButtonActive,
    YourBookingHeaderDetailsDatesTextSectionButton,
} from "../yourBookingStyling";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ColorTheme, GradientTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { YourBookingRequestBookingRequest, YourBookingRequestListingData } from "../yourBooking";
import { UserHostModel } from "../../../interfaces/models/userHostModel";

interface YourBookingDetailsChangeAndCancelSectionProps {
    listingData: YourBookingRequestListingData;
    bookingRequest: YourBookingRequestBookingRequest;
    refundRequested: boolean;
    changesRequested: boolean;
    hostData: UserHostModel["UserModel"];
    activateCard: (name: string) => void;
}

const YourBookingDetailsChangeAndCancelSection: React.FC<YourBookingDetailsChangeAndCancelSectionProps> = ({
    bookingRequest,
    listingData,
    changesRequested,
    refundRequested,
    activateCard,
    hostData,
}) => {
    const [copied, setCopied] = useState(false);
    const { id } = useParams();

    const getShortArrivalDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);

        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };
    const getShortDepartureDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let departureDate = new Date(bookingRequest.departureDate);

        return `${departureDate.getUTCDate()} ${month[departureDate.getUTCMonth()]}`;
    };
    const renderGuests = () => {
        const guestsArray = [];
        if (bookingRequest.adults > 0) {
            guestsArray.push(`${bookingRequest.adults} adult${bookingRequest.adults > 1 ? "s" : ""}`);
        }
        if (bookingRequest.children > 0) {
            guestsArray.push(`${bookingRequest.children} child${bookingRequest.children > 1 ? "ren" : ""}`);
        }
        if (bookingRequest.infants > 0) {
            guestsArray.push(`${bookingRequest.infants} infant${bookingRequest.infants > 1 ? "s" : ""}`);
        }
        if (bookingRequest.pets > 0) {
            guestsArray.push(`${bookingRequest.pets} pet${bookingRequest.pets > 1 ? "s" : ""}`);
        }
        return guestsArray.join(", ");
    };

    return (
        <>
            <YourBookingHeaderDetailsDatesTextSection>
                <YourBookingHeaderDetailsChangeWrapper>
                    <YourBookingGetSupportTitle style={{ margin: "8px 0 0 0" }}>
                        Your stay at {hostData.firstName}'s {listingData.propertyType} in {listingData.suburb}{" "}
                    </YourBookingGetSupportTitle>
                </YourBookingHeaderDetailsChangeWrapper>
            </YourBookingHeaderDetailsDatesTextSection>
            <YourBookingHeaderDetailsDatesTextSection>
                <YourBookingHeaderDetailsChangeWrapper>
                    <YourBookingHeaderDetailsChangeTextWrapper>
                        <YourBookingHeaderDetailsTextTitle>Dates</YourBookingHeaderDetailsTextTitle>
                        <YourBookingHeaderDetailsTextSubtitle>{bookingRequest ? `${getShortArrivalDate()} - ${getShortDepartureDate()}` : ""}</YourBookingHeaderDetailsTextSubtitle>
                    </YourBookingHeaderDetailsChangeTextWrapper>
                    {bookingRequest.confirmed && !bookingRequest.cancelled && !bookingRequest.declined && !changesRequested && !refundRequested ? (
                        <YourBookingHeaderDetailsChangeButtonActive to={`/change-your-booking/${id}`}>Change</YourBookingHeaderDetailsChangeButtonActive>
                    ) : (
                        <YourBookingHeaderDetailsChangeButton>Change</YourBookingHeaderDetailsChangeButton>
                    )}
                </YourBookingHeaderDetailsChangeWrapper>
            </YourBookingHeaderDetailsDatesTextSection>
            <YourBookingHeaderDetailsDatesTextSection>
                <YourBookingHeaderDetailsChangeWrapper>
                    <YourBookingHeaderDetailsChangeTextWrapper>
                        <YourBookingHeaderDetailsTextTitle>Guests</YourBookingHeaderDetailsTextTitle>
                        <YourBookingHeaderDetailsTextSubtitle>{renderGuests()}</YourBookingHeaderDetailsTextSubtitle>
                    </YourBookingHeaderDetailsChangeTextWrapper>
                    {bookingRequest.confirmed && !bookingRequest.cancelled && !bookingRequest.declined && !changesRequested && !refundRequested ? (
                        <YourBookingHeaderDetailsChangeButtonActive to={`/change-your-booking/${id}`}>Change</YourBookingHeaderDetailsChangeButtonActive>
                    ) : (
                        <YourBookingHeaderDetailsChangeButton>Change</YourBookingHeaderDetailsChangeButton>
                    )}
                </YourBookingHeaderDetailsChangeWrapper>
            </YourBookingHeaderDetailsDatesTextSection>
            <YourBookingHeaderDetailsDatesTextSection>
                <YourBookingHeaderDetailsChangeWrapper>
                    <YourBookingHeaderDetailsChangeTextWrapper>
                        <YourBookingHeaderDetailsTextTitle>Booking ref.</YourBookingHeaderDetailsTextTitle>
                        <YourBookingHeaderDetailsTextSubtitle>{bookingRequest.confirmationCode}</YourBookingHeaderDetailsTextSubtitle>
                    </YourBookingHeaderDetailsChangeTextWrapper>
                    <YourBookingHeaderDetailsChangeButton
                        type="button"
                        style={{ background: GradientTheme.Red.background }}
                        onClick={() => {
                            setCopied(true);
                            navigator.clipboard.writeText(bookingRequest.confirmationCode);
                        }}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </YourBookingHeaderDetailsChangeButton>
                </YourBookingHeaderDetailsChangeWrapper>
            </YourBookingHeaderDetailsDatesTextSection>
            {!bookingRequest.cancelled && (
                <YourBookingHeaderDetailsDatesTextSectionButton type="button" onClick={() => activateCard("sendReceiptPopup")}>
                    <YourBookingText>
                        Get receipt
                        <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                    </YourBookingText>
                </YourBookingHeaderDetailsDatesTextSectionButton>
            )}

            {!bookingRequest.cancelled && (
                <YourBookingHeaderDetailsDatesTextSectionButton type="button" onClick={() => activateCard("cancelStayMenuPolicy")} style={{ borderBottom: "none" }}>
                    <YourBookingText>
                        Cancellations
                        <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                    </YourBookingText>
                </YourBookingHeaderDetailsDatesTextSectionButton>
            )}
        </>
    );
};

export default YourBookingDetailsChangeAndCancelSection;
