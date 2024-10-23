import {
    YourInboxConversationWrapper,
    YourInboxGuestConversationImage,
    YourInboxConversationTextWrapper,
    YourInboxConversationTextFirstName,
    YourInboxConversationTextMessage,
    YourInboxConversationTextType,
} from "../yourInboxStyling";
import { useState, useEffect } from "react";
import { ConversationModel } from "../../../interfaces/models/conversationModel";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface YourInboxConversationProps {
    conversation: ConversationModel;
}

export default function YourInboxConversation({ conversation }: YourInboxConversationProps) {
    const [profilePhoto, setProfilePhoto] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    useEffect(() => {
        if (conversation?.BookingRequestModel?.ListingModel?.listingImages) {
            const img = constructOptimisedImageUrl(JSON.parse(conversation.BookingRequestModel.ListingModel.listingImages[0]).key, 300);
            setProfilePhoto(img);
        }
    }, [conversation]);

    const getTimeDifference = () => {
        let startDate = new Date(conversation.updatedAt);
        let endDate = new Date();
        let timeDiff = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;
        if (timeDiff > 24) {
            return `${Math.floor(timeDiff / 24)}d`;
        } else if (timeDiff < 1) {
            return `${Math.floor(timeDiff * 60)}m`;
        } else {
            return `${Math.floor(timeDiff)}h`;
        }
    };

    const getConversationMessage = () => {
        const ellipsis = (message: string) => {
            if (message.length > 25) {
                return message.substring(0, 25) + "...";
            } else {
                return message;
            }
        };
        if (conversation.MessageModels.items.length === 0) {
            return null;
        } else if (conversation.MessageModels.items[0].body !== null) {
            return ellipsis(conversation.MessageModels.items[0].body);
        } else if (conversation.MessageModels.items[0].guestNoteBody !== null) {
            return ellipsis(conversation.MessageModels.items[0].guestNoteBody);
        }
    };

    const getConversationStatus = () => {
        if (!conversation?.BookingRequestModel?.completed) {
            return "Enquiry";
        } else if (conversation?.BookingRequestModel?.expired) {
            return "Expired";
        } else if (conversation?.BookingRequestModel?.declined) {
            return "Declined";
        } else if (conversation?.BookingRequestModel?.cancelled) {
            return "Cancelled";
        } else if (!conversation?.BookingRequestModel?.confirmed) {
            return "Requested";
        } else {
            return "Confirmed";
        }
    };

    const getShortArrivalDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(conversation?.BookingRequestModel?.arrivalDate);
        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };

    const getShortDepartureDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let departureDate = new Date(conversation?.BookingRequestModel?.departureDate);
        return `${departureDate.getUTCDate()} ${month[departureDate.getUTCMonth()]}`;
    };

    const getConversationSubtitle = () => {
        const subtitle = `${getConversationStatus()} • ${getShortArrivalDate()} - ${getShortDepartureDate()} • ${conversation?.BookingRequestModel?.ListingModel?.propertyTitle}`;
        if (subtitle.length > 43) {
            return subtitle.substring(0, 40).trim() + "...";
        } else {
            return subtitle;
        }
    };

    return (
        <YourInboxConversationWrapper to={`/conversation/${conversation.id}`}>
            <YourInboxGuestConversationImage src={profilePhoto} alt={"Image of receipient"} />
            <YourInboxConversationTextWrapper>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <YourInboxConversationTextFirstName guestSeen={conversation.guestSeen}>{conversation?.UserHostModel?.UserModel?.firstName}</YourInboxConversationTextFirstName>
                    <YourInboxConversationTextType guestSeen={conversation.guestSeen}>{getTimeDifference()}</YourInboxConversationTextType>
                </div>
                <YourInboxConversationTextMessage guestSeen={conversation.guestSeen}>{getConversationMessage()}</YourInboxConversationTextMessage>
                <YourInboxConversationTextType>{getConversationSubtitle()}</YourInboxConversationTextType>
            </YourInboxConversationTextWrapper>
        </YourInboxConversationWrapper>
    );
}
