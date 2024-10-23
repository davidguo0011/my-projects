import { useState, useEffect } from "react";
import {
    RecentConversationBubble,
    RecentConversationBubblesListingImage,
    RecentConversationBubblesTitle,
    RecentConversationBubbleTextWrapper,
    RecentConversationBubblesSubtitle,
} from "../../conversationStyling";
import { useParams } from "react-router-dom";
import { ConversationModel } from "../../../../interfaces/models/conversationModel";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
interface ConversationBubbleProps {
    conversation: ConversationModel;
}

export default function ConversationBubble({ conversation }: ConversationBubbleProps) {
    const { id } = useParams();
    const [profilePhoto, setProfilePhoto] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    useEffect(() => {
        if (conversation?.BookingRequestModel?.ListingModel?.listingImages) {
            const img = constructOptimisedImageUrl(JSON.parse(conversation.BookingRequestModel.ListingModel.listingImages[0]).key, 300);
            setProfilePhoto(img);
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

    const getMonth = (month: number) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
    };

    const getFormatedDate = (date: Date | string) => {
        if (conversation.BookingRequestModel) {
            let unFormatedDate = new Date(date!);
            return `${unFormatedDate.getUTCDate()} ${getMonth(unFormatedDate.getMonth())}`;
        } else {
            return "";
        }
    };

    const getBookingRequestState = () => {
        if (conversation?.BookingRequestModel?.declined) {
            return "Declined";
        }
        if (conversation?.BookingRequestModel?.cancelled) {
            return "Cancelled";
        }
        if (!conversation?.BookingRequestModel?.completed) {
            return "Enquiry";
        }
        if (conversation?.BookingRequestModel?.confirmed) {
            return "Confirmed";
        }
        if (conversation?.BookingRequestModel?.expired) {
            return "Expired";
        }
        return "Requested";
    };

    const getConversationSubtitle = () => {
        let subtitle = `${getBookingRequestState()} • ${getFormatedDate(conversation?.BookingRequestModel?.arrivalDate)} - ${getFormatedDate(conversation?.BookingRequestModel?.departureDate)}`;

        if (subtitle.length > 44) {
            return `${subtitle.slice(0, 40)}...`;
        } else {
            return subtitle;
        }
    };

    const getTheMostRecentConversationMsg = () => {
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

    return (
        <RecentConversationBubble to={`/conversation/${conversation.id}`} selected={conversation.id === id}>
            <RecentConversationBubblesListingImage src={profilePhoto} alt="Photo for listing owner" />
            <RecentConversationBubbleTextWrapper>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <RecentConversationBubblesTitle>{conversation.UserHostModel?.UserModel?.firstName}</RecentConversationBubblesTitle>
                    {conversation.BookingRequestModel && <RecentConversationBubblesSubtitle>{fetchTimeDifference()}</RecentConversationBubblesSubtitle>}
                </div>
                <RecentConversationBubblesTitle>{getTheMostRecentConversationMsg()}</RecentConversationBubblesTitle>
                <RecentConversationBubblesSubtitle>{getConversationSubtitle()}</RecentConversationBubblesSubtitle>
            </RecentConversationBubbleTextWrapper>
        </RecentConversationBubble>
    );
}
