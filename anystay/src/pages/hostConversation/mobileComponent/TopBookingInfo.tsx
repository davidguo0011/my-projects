import {
    ConversationBookingRequestHeaderWrapper,
    ConversationBookingRequestHeaderImage,
    ConversationBookingRequestHeaderTextWrapper,
    ConversationBookingRequestHeaderSubtitle,
    ConversationBookingRequestHeaderTitle,
} from "../../conversation/conversationStyling";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { defaultSearchFilter } from "../../../utils/defaultSearchQuery/defaultSearchQuery";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface BookingRequest extends BookingRequestModel {
    expired: boolean;
}
interface TopBookingInfoProps {
    bookingRequest: BookingRequest | null;
    listingData: ListingModel | null;
}

export default function TopBookingInfo({ bookingRequest, listingData }: TopBookingInfoProps) {
    const navigate = useNavigate();
    const getMonth = (month: number) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month] ? months[month] : "";
    };
    const getBookingRequestState = () => {
        if (bookingRequest) {
            if (bookingRequest.declined) {
                return "Declined";
            }
            if (bookingRequest.cancelled) {
                return "Cancelled";
            }
            if (!bookingRequest.completed) {
                return "Enquiry";
            }
            if (bookingRequest.confirmed) {
                return "Confirmed";
            }
            if (bookingRequest.expired) {
                return "Expired";
            } else {
                return "Requested";
            }
        }
    };
    const getArrivalDate = () => {
        if (bookingRequest!.arrivalDate === null) {
            return "-";
        }
        let arrivalDate = new Date(bookingRequest!.arrivalDate.replace("Z", ""));

        return `${arrivalDate.getDate()} ${getMonth(arrivalDate.getMonth())}`;
    };
    const getDepartureDate = () => {
        if (bookingRequest!.departureDate === null) {
            return "-";
        }
        let departureDate = new Date(bookingRequest!.departureDate.replace("Z", ""));

        return `${departureDate.getDate()} ${getMonth(departureDate.getMonth())}`;
    };
    if (!bookingRequest || !listingData) return null;
    return (
        <ConversationBookingRequestHeaderWrapper
            type="button"
            onClick={() => {
                if (bookingRequest.completed) {
                    navigate(`/your-booking/${bookingRequest.id}`);
                } else {
                    navigate(`/listing/${bookingRequest.listingmodelID}`);
                }
            }}
        >
            <ConversationBookingRequestHeaderImage src={constructOptimisedImageUrl(JSON.parse(listingData.listingImages[0] as string).key, 500)} alt="Picture of listing model" />
            <ConversationBookingRequestHeaderTextWrapper>
                <ConversationBookingRequestHeaderTitle>{`${listingData.propertyTitle.substr(0, 15)}${
                    listingData.propertyTitle.split("").length > 15 ? "..." : ""
                }`}</ConversationBookingRequestHeaderTitle>
                <ConversationBookingRequestHeaderSubtitle
                    style={{
                        color: bookingRequest.declined || bookingRequest.cancelled || bookingRequest.confirmed || !bookingRequest.completed ? ColorTheme.Black.color : ColorTheme.Yellow.color,
                    }}
                >
                    {getBookingRequestState()} • {getArrivalDate()} - {getDepartureDate()}{" "}
                </ConversationBookingRequestHeaderSubtitle>
            </ConversationBookingRequestHeaderTextWrapper>
        </ConversationBookingRequestHeaderWrapper>
    );
}
