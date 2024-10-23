import {
    ConversationBookingRequestDesktopHeaderWrapper,
    ConversationBookingRequestDesktopHeaderTitle,
    ConversationBookingRequestDesktopHeaderHostPhoneBtn,
    ConversationCallIcon,
} from "../../conversation/conversationStyling";

interface ChatBoxTopHeaderProps {
    bookingGuestData: {
        email: string;
        firstName: string;
        id: string;
        identityID: string;
        phone: string;
        profilePicture: string;
    } | null;
}

export default function ChatBoxTopHeader({ bookingGuestData }: ChatBoxTopHeaderProps) {
    if (!bookingGuestData) return null;
    return (
        <ConversationBookingRequestDesktopHeaderWrapper>
            <div>
                <ConversationBookingRequestDesktopHeaderTitle>{bookingGuestData.firstName}</ConversationBookingRequestDesktopHeaderTitle>
            </div>
            <ConversationBookingRequestDesktopHeaderHostPhoneBtn href={`tel:${bookingGuestData.phone}`}>
                <ConversationCallIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Call.svg"} alt={"Call"} />
            </ConversationBookingRequestDesktopHeaderHostPhoneBtn>
        </ConversationBookingRequestDesktopHeaderWrapper>
    );
}
