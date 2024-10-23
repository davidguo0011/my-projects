import MessageInput from "./MessageInput/MessageInput";
import { ConversationMessageInputContentWrapper, BookingRequestButtonWrapper, BookingRequestDetailsButton, BookingRequestDetailsButtonComplete } from "../../../conversation/conversationStyling";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { UserHostModel } from "../../../../interfaces/models/userHostModel";
import { ConversationModel } from "../../../../interfaces/models/conversationModel";
import { BookingRequestModel } from "../../../../interfaces/models/bookingRequestModel";

interface MessageInputComponentProps {
    userHostModel: UserHostModel | null;
    accessToken: string;
    addMessage: (message: any) => Promise<void>;
    scrollToBottomConversation: () => void;
    conversation: ConversationModel | null;
    bookingRequest: BookingRequestModel;
}

export default function MessageInputComponent({ accessToken, conversation, addMessage, scrollToBottomConversation, bookingRequest, userHostModel }: MessageInputComponentProps) {
    const getBookingRequestBtn = () => {
        if (bookingRequest) {
            if (bookingRequest.ChangeBookingRequestModel.items.length === 0) {
                if (bookingRequest.cancelled || bookingRequest.declined) return null;
                if (bookingRequest.confirmed === null && bookingRequest.completed) {
                    return (
                        <BookingRequestButtonWrapper>
                            <BookingRequestDetailsButton style={{ background: ColorTheme.Yellow.color }} to={`/booking-request/${bookingRequest.id}`}>
                                Response
                            </BookingRequestDetailsButton>
                        </BookingRequestButtonWrapper>
                    );
                } else if ((bookingRequest.confirmed && bookingRequest.completed) || !bookingRequest.completed) {
                    return (
                        <BookingRequestButtonWrapper>
                            <BookingRequestDetailsButton style={{ background: ColorTheme.Blue.color }} to={`/booking-request/${bookingRequest.id}`}>
                                Details
                            </BookingRequestDetailsButton>
                        </BookingRequestButtonWrapper>
                    );
                }
            } else {
                if (bookingRequest.ChangeBookingRequestModel.items[0].confirmed) {
                    return (
                        <BookingRequestButtonWrapper>
                            <BookingRequestDetailsButton style={{ background: ColorTheme.Blue.color }} to={`/booking-request/${bookingRequest.id}`}>
                                Details
                            </BookingRequestDetailsButton>
                        </BookingRequestButtonWrapper>
                    );
                } else {
                    return (
                        <BookingRequestButtonWrapper>
                            <BookingRequestDetailsButtonComplete style={{ background: ColorTheme.Yellow.color }} to={`/booking-request/${bookingRequest.id}`}>
                                Review changes
                            </BookingRequestDetailsButtonComplete>
                        </BookingRequestButtonWrapper>
                    );
                }
            }
        }
    };
    return (
        <ConversationMessageInputContentWrapper>
            <MessageInput
                accessToken={accessToken}
                conversationmodelID={conversation!.id}
                addMessage={addMessage}
                scrollToBottomConversation={scrollToBottomConversation}
                userHostModel={userHostModel}
            />
            {getBookingRequestBtn()}
        </ConversationMessageInputContentWrapper>
    );
}
