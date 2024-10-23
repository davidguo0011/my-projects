import { useState } from "react";
import { callApi } from "../../../../../utils/api/api";
import { ConversationMessageInputWrapper, ConversationMessagesInput, ConversationMessagesInputSendButton, SendButtonImg } from "../../../../conversation/conversationStyling";
import { UserHostModel } from "../../../../../interfaces/models/userHostModel";

interface MessageInputProps {
    userHostModel: UserHostModel | null;
    conversationmodelID: string;
    accessToken: string;
    addMessage: (message: any) => Promise<void>;
    scrollToBottomConversation: () => void;
}

const MessageInput: React.FC<MessageInputProps> = (props) => {
    const [message, setMessage] = useState("");
    const [numberOfMessageSend, setNumberOfMessageSend] = useState(0);
    const makeid = (length: number): string => {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    const createMessage = async () => {
        setMessage("");
        setNumberOfMessageSend((prevState) => prevState + 1);
        // console.log("MessageInput -> createMessage: ", props.userHostModel)
        if (message.trim().length > 0) {
            if (numberOfMessageSend < 5) {
                const tempId = makeid(10);
                await props.addMessage({
                    author: props.userHostModel!.id,
                    body: message.trim(),
                    conversationmodelID: props.conversationmodelID,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    isNote: null,
                    guestNoteBody: null,
                    hostNoteBody: null,
                    id: null,
                    loading: true,
                    tempId: tempId,
                });
                props.scrollToBottomConversation();
                await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "conversation/host/message", {
                    headers: {
                        Authorization: props.accessToken,
                        conversationId: props.conversationmodelID,
                    },
                    body: {
                        author: props.userHostModel!.id,
                        body: message.trim(),
                        conversationmodelId: props.conversationmodelID,
                        tempId: tempId,
                    },
                })
                    .then((res) => {
                        setNumberOfMessageSend((prevState) => prevState - 1);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                alert("Sending too quickly!");
            }
        }
    };
    return (
        <ConversationMessageInputWrapper>
            <ConversationMessagesInput
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && createMessage()}
            />
            <ConversationMessagesInputSendButton type="button" onClick={() => createMessage()}>
                <SendButtonImg src={"https://d292awxalydr86.cloudfront.net/Inbox/Send.svg"} alt={"Send button"} />
            </ConversationMessagesInputSendButton>
        </ConversationMessageInputWrapper>
    );
};

export default MessageInput;
