import { useEffect, useState } from "react";
import {
    YourInboxConversationWrapper,
    YourInboxHostConversationImage,
    YourInboxConversationTextWrapper,
    YourInboxConversationTextFirstName,
    YourInboxConversationTextMessage,
    YourInboxConversationTextType,
} from "../../yourInbox/yourInboxStyling";
import { ConversationModel } from "../../../interfaces/models/conversationModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface ConversationProps {
    conversation: ConversationModel;
}

export default function HostInboxConversation({ conversation }: ConversationProps) {
    const [profilePhoto, setProfilePhoto] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    useEffect(() => {
        if (conversation?.UserModel?.profilePicture) {
            const profilePic = constructOptimisedProtectedImageUrl(conversation.UserModel.profilePicture, conversation.UserModel.identityID, 100);
            setProfilePhoto(profilePic);
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
        } else if (conversation.MessageModels.items[0].hostNoteBody !== null) {
            return ellipsis(conversation.MessageModels.items[0].hostNoteBody);
        }
    };

    const getConversationStatus = () => {
        if (conversation) {
            if (!conversation.BookingRequestModel.completed) {
                return "Enquiry";
            } else if (conversation.BookingRequestModel.expired) {
                return "Expired";
            } else if (conversation.BookingRequestModel.declined) {
                return "Declined";
            } else if (conversation.BookingRequestModel.cancelled) {
                return "Cancelled";
            } else if (!conversation.BookingRequestModel.confirmed) {
                return "Requested";
            } else {
                return "Confirmed";
            }
        }
    };

    const getConversationSubtitle = () => {
        const getShortDepartureDate = () => {
            const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let departureDate = new Date(conversation.BookingRequestModel!.departureDate!);

            return `${departureDate.getUTCDate()} ${month[departureDate.getUTCMonth()]}`;
        };
        const getShortArrivalDate = () => {
            const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let arrivalDate = new Date(conversation.BookingRequestModel!.arrivalDate!);

            return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
        };
        if (conversation) {
            const subtitle = `${getConversationStatus()} • ${getShortArrivalDate()} - ${getShortDepartureDate()} • ${conversation.BookingRequestModel.ListingModel.propertyTitle}`;
            if (subtitle.length > 43) {
                return subtitle.substring(0, 40).trim() + "...";
            } else {
                return subtitle;
            }
        }
    };

    return (
        <YourInboxConversationWrapper to={`/host-conversation/${conversation.id}`}>
            <YourInboxHostConversationImage src={profilePhoto} alt={"Image of receipient"} />
            <YourInboxConversationTextWrapper>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <YourInboxConversationTextFirstName guestSeen={conversation.hostSeen}>{conversation.UserModel.firstName}</YourInboxConversationTextFirstName>
                    <YourInboxConversationTextType guestSeen={conversation.hostSeen}>{getTimeDifference()}</YourInboxConversationTextType>
                </div>
                <YourInboxConversationTextMessage guestSeen={conversation.hostSeen}>{getConversationMessage()}</YourInboxConversationTextMessage>
                <YourInboxConversationTextType>{getConversationSubtitle()}</YourInboxConversationTextType>
            </YourInboxConversationTextWrapper>
        </YourInboxConversationWrapper>
    );
}
