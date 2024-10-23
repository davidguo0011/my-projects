import { ConversationInboxContainerLoadingWrapper } from "./ConversationInboxDesktopWrapperLoadingStyling";
import ChatMessageLoadingSpinner from "../../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
export default function ConversationInboxDesktopWrapperLoading() {
    return (
        <ConversationInboxContainerLoadingWrapper>
            <ChatMessageLoadingSpinner style={{ width: "50px", height: "50px" }} />
        </ConversationInboxContainerLoadingWrapper>
    );
}
