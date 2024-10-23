import {
    ConversationBookingRequestHeaderWrapper,
    ConversationBookingRequestHeaderImage,
    ConversationBookingRequestHeaderTextWrapper,
    ConversationBookingRequestHeaderSubtitle,
    ConversationBookingRequestHeaderTitle,
} from "../conversationStyling";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ConversationModel } from "../../../interfaces/models/conversationModel";
import { ListingModel } from "../../../interfaces/models/listingModel";

interface BookingRequest extends BookingRequestModel {
    expired: boolean;
}

interface TopBookingInfoProps {
    bookingRequest: BookingRequest | null;
    listingPictureURL?: string;
    listingData: ListingModel | null;
    conversation: ConversationModel | null;
}

export default function TopBookingInfo({ bookingRequest, conversation, listingData }: TopBookingInfoProps) {
    const navigate = useNavigate();
    const getMonth = (month: number) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
    };
    const getArrivalDate = () => {
        let arrivalDate = new Date(bookingRequest!.arrivalDate.replace("Z", ""));

        return `${arrivalDate.getDate()} ${getMonth(arrivalDate.getMonth())}`;
    };

    const getDepartureDate = () => {
        let departureDate = new Date(bookingRequest!.departureDate.replace("Z", ""));

        return `${departureDate.getDate()} ${getMonth(departureDate.getMonth())}`;
    };

    const imgKey = useMemo(() => {
        if (listingData) {
            return JSON.parse(listingData.listingImages[0] as string).key;
        }
    }, [listingData]);

    if (!bookingRequest || !conversation || !listingData) return null;
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
            <ConversationBookingRequestHeaderImage src={constructOptimisedImageUrl(imgKey, 800)} alt="Picture of listing model" />
            <ConversationBookingRequestHeaderTextWrapper>
                <ConversationBookingRequestHeaderTitle>{`${listingData.propertyTitle.substring(0, 15)}${
                    listingData.propertyTitle.split("").length > 15 ? "..." : ""
                }`}</ConversationBookingRequestHeaderTitle>
                <ConversationBookingRequestHeaderSubtitle confirmed={conversation.status === "Requested" ? false : true}>
                    {conversation ? conversation.status : ""} • {getArrivalDate()} - {getDepartureDate()}{" "}
                </ConversationBookingRequestHeaderSubtitle>
            </ConversationBookingRequestHeaderTextWrapper>
        </ConversationBookingRequestHeaderWrapper>
    );
}
