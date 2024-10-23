import { ConversationMessagesContainerLoadingWrapper } from "./ConversationMessagesContainerLoadingStyling";
import ChatMessageLoadingSpinner from "../../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
export default function ConversationMessagesContainerLoading() {
    return (
        <ConversationMessagesContainerLoadingWrapper>
            <ChatMessageLoadingSpinner style={{ width: "50px", height: "50px" }} />
        </ConversationMessagesContainerLoadingWrapper>
    );
}
