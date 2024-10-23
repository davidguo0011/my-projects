import {
    YourBookingHeaderDetailsDatesSection,
    YourBookingHeaderDetailsDatesWrapper,
    YourBookingHeaderDetailsDatesTitle,
    YourBookingHeaderDetailsDatesSubtitle,
    YourBookingHeaderDetailsTimes,
    YourBookingHeaderDetailsDatesDivider,
} from "../yourBookingStyling";
import { YourBookingRequestBookingRequest } from "../yourBooking";

interface YourBookingDateDetailsProps {
    bookingRequest: YourBookingRequestBookingRequest;
}

const YourBookingDateDetails: React.FC<YourBookingDateDetailsProps> = ({ bookingRequest }) => {
    const getArrivalDate = () => {
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);

        return `${day[arrivalDate.getUTCDay()]}, ${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}, ${arrivalDate.getUTCFullYear()}`;
    };
    const getDepartureDate = () => {
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let departureDate = new Date(bookingRequest.departureDate);

        return `${day[departureDate.getUTCDay()]}, ${departureDate.getUTCDate()} ${month[departureDate.getUTCMonth()]}, ${departureDate.getUTCFullYear()}`;
    };
    const getTime = (time: number) => {
        if (time < 100 || time > 2400) {
            return null;
        }
        const ampm = time > 1100 && time < 2400 ? " pm" : " am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };
    return (
        <YourBookingHeaderDetailsDatesSection>
            <YourBookingHeaderDetailsDatesWrapper>
                <YourBookingHeaderDetailsDatesTitle>Arrive</YourBookingHeaderDetailsDatesTitle>
                <YourBookingHeaderDetailsDatesSubtitle>{`${getArrivalDate()}`}</YourBookingHeaderDetailsDatesSubtitle>
                <YourBookingHeaderDetailsTimes>{`${getTime(bookingRequest.checkInTime)}`}</YourBookingHeaderDetailsTimes>
            </YourBookingHeaderDetailsDatesWrapper>
            <YourBookingHeaderDetailsDatesDivider></YourBookingHeaderDetailsDatesDivider>
            <YourBookingHeaderDetailsDatesWrapper style={{ marginLeft: "24px" }}>
                <YourBookingHeaderDetailsDatesTitle>Depart</YourBookingHeaderDetailsDatesTitle>
                <YourBookingHeaderDetailsDatesSubtitle>{`${getDepartureDate()}`}</YourBookingHeaderDetailsDatesSubtitle>
                <YourBookingHeaderDetailsTimes>{`${getTime(bookingRequest.checkOutTime)}`}</YourBookingHeaderDetailsTimes>
            </YourBookingHeaderDetailsDatesWrapper>
        </YourBookingHeaderDetailsDatesSection>
    );
};

export default YourBookingDateDetails;
