import { ConversationBookingRequestDesktopWrapperLoadingWrapper } from "./ConversationBookingRequestDesktopWrapperLoadingStyling";
import ChatMessageLoadingSpinner from "../../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";

export default function ConversationBookingRequestDesktopWrapperLoading() {
    return (
        <ConversationBookingRequestDesktopWrapperLoadingWrapper>
            <ChatMessageLoadingSpinner style={{ width: "50px", height: "50px" }} />
        </ConversationBookingRequestDesktopWrapperLoadingWrapper>
    );
}
