import { ConversationChatBubbleProfilePicture, ReceivedMessageWrapper, MessageWrapper } from "../../conversationStyling";
import ChatMessageLoadingSpinner from "../../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { useState, useEffect } from "react";
import { userModelSelector } from "../../../../state/selectors/userModel";
import { useRecoilState } from "recoil";

interface MessageProps {
    loading?: boolean;
    message: {
        author: string;
        body: string;
    };
    listingOwnerProfilePictureURL: string;
    prevMessage?: {
        author: string;
    };
}

export default function Message({ loading, message, listingOwnerProfilePictureURL, prevMessage }: MessageProps) {
    const [msgLoading, setMsgLoading] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const isSameAuthor = prevMessage?.author === message.author;

    //show spinner if message is not sent after 2 seconds
    useEffect(() => {
        let loadingTimer: NodeJS.Timeout | null = null;
        if (loading) {
            loadingTimer = setTimeout(() => {
                setMsgLoading(true);
            }, 2000);
        } else {
            setMsgLoading(false);
        }
        return () => {
            if (loadingTimer) clearTimeout(loadingTimer);
        };
    }, [loading]);

    if (message.author !== userModel!.id) {
        return (
            <div
                style={
                    isSameAuthor ? { display: "flex", alignItems: "flex-start", gap: "8px", width: "70%" } : { display: "flex", alignItems: "flex-start", gap: "8px", width: "70%", marginTop: "20px" }
                }
            >
                <ConversationChatBubbleProfilePicture src={listingOwnerProfilePictureURL} />
                <ReceivedMessageWrapper>{message.body}</ReceivedMessageWrapper>
            </div>
        );
    } else {
        return (
            <div style={{ display: "flex", width: "70%", marginLeft: "auto" }}>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "16px" }}>
                    <ChatMessageLoadingSpinner style={{ visibility: msgLoading ? "visible" : "hidden" }} />
                    <MessageWrapper isSameAuthor={isSameAuthor}>{message.body}</MessageWrapper>
                </div>
            </div>
        );
    }
}
