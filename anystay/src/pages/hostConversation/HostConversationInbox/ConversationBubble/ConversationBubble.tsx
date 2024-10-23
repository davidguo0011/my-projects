import { useState, useEffect } from "react";
import constructOptimisedProtectedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import {
    RecentConversationBubble,
    RecentConversationBubblesGuestImage,
    RecentConversationBubblesTitle,
    RecentConversationBubbleTextWrapper,
    RecentConversationBubblesSubtitle,
} from "../../../conversation/conversationStyling";
import { useParams } from "react-router-dom";

interface Conversation {
    id: string;
    UserModel: {
        profilePicture: string;
        identityID: string;
        firstName: string;
    };
    updatedAt: string;
    BookingRequestModel: {
        declined: boolean;
        cancelled: boolean;
        completed: boolean;
        confirmed: boolean;
        expired: boolean;
        ListingModel: {
            propertyTitle: string;
        } | null;
    };
    MessageModels: {
        items: Array<{
            body: string | null;
            hostNoteBody: string | null;
        }>;
    };
}

interface ConversationBubbleProps {
    conversation: Conversation;
}

export default function ConversationBubble({ conversation }: ConversationBubbleProps) {
    const { id } = useParams();
    const [profilePhoto, setProfilePhoto] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    useEffect(() => {
        if (conversation?.UserModel?.profilePicture) {
            const profilePic = constructOptimisedProtectedImageUrl(conversation.UserModel.profilePicture, conversation.UserModel.identityID, 100);
            setProfilePhoto(profilePic);
        }
    }, [conversation]);

    const fetchTimeDifference = () => {
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

    const getBookingRequestState = () => {
        if (conversation.BookingRequestModel.declined) {
            return "Declined";
        }
        if (conversation.BookingRequestModel.cancelled) {
            return "Cancelled";
        }
        if (!conversation.BookingRequestModel.completed) {
            return "Enquiry";
        }
        if (conversation.BookingRequestModel.confirmed) {
            return "Confirmed";
        }
        if (conversation.BookingRequestModel.expired) {
            return "Expired";
        }
        return "Requested";
    };

    const getConversationSubtitle = () => {
        if (conversation.BookingRequestModel.ListingModel) {
            const subtitle = `${getBookingRequestState()} • ${conversation.BookingRequestModel.ListingModel.propertyTitle}`;

            if (subtitle.length > 43) {
                return subtitle.substring(0, 40).trim() + "...";
            } else {
                return subtitle;
            }
        } else {
            return "";
        }
    };

    const getTheMostRecentConversationMsg = () => {
        if (conversation.MessageModels.items.length === 0) {
            return null;
        } else if (conversation.MessageModels.items[0].body !== null) {
            return conversation.MessageModels.items[0].body;
        } else if (conversation.MessageModels.items[0].hostNoteBody !== null) {
            return conversation.MessageModels.items[0].hostNoteBody;
        }
    };

    return (
        <RecentConversationBubble to={`/host-conversation/${conversation.id}`} selected={conversation.id === id}>
            <RecentConversationBubblesGuestImage src={profilePhoto} alt="Photo fo listing owner" />
            <RecentConversationBubbleTextWrapper>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <RecentConversationBubblesTitle>{conversation.UserModel?.firstName}</RecentConversationBubblesTitle>
                    {conversation.BookingRequestModel && <RecentConversationBubblesSubtitle>{fetchTimeDifference()}</RecentConversationBubblesSubtitle>}
                </div>
                <RecentConversationBubblesTitle>{getTheMostRecentConversationMsg()}</RecentConversationBubblesTitle>
                <RecentConversationBubblesSubtitle>{getConversationSubtitle()}</RecentConversationBubblesSubtitle>
            </RecentConversationBubbleTextWrapper>
        </RecentConversationBubble>
    );
}
