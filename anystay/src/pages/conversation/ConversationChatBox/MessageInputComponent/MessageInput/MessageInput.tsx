import { useState } from "react";
import { ConversationMessageInputWrapper, ConversationMessagesInput, ConversationMessagesInputSendButton, SendButtonImg } from "../../../conversationStyling";
import { userModelSelector } from "../../../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../../../utils/api/api";
import { UserModel } from "../../../../../interfaces/models/userModel";

interface MessageInputProps {
    conversationmodelID: string;
    accessToken: string;
    addMessage: (message: any) => Promise<void>;
    scrollToBottomConversation: () => void;
}

export default function MessageInput({ conversationmodelID, accessToken, addMessage, scrollToBottomConversation }: MessageInputProps) {
    const [message, setMessage] = useState("");
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
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
        if (message.trim().length > 0) {
            if (numberOfMessageSend < 5) {
                const tempId = makeid(10);
                await addMessage({
                    author: userModel!.id,
                    body: message.trim(),
                    conversationmodelID: conversationmodelID,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    isNote: null,
                    guestNoteBody: null,
                    hostNoteBody: null,
                    id: null,
                    loading: true,
                    tempId: tempId,
                });
                scrollToBottomConversation();
                await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "conversation/guest/message", {
                    headers: {
                        Authorization: accessToken,
                        conversationID: conversationmodelID,
                    },
                    body: {
                        author: userModel!.id,
                        body: message.trim(),
                        conversationModelId: conversationmodelID,
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
                onKeyPress={(e) => (e.key === "Enter" ? createMessage() : null)}
            />
            <ConversationMessagesInputSendButton type="button" onClick={() => createMessage()}>
                <SendButtonImg src={"https://d292awxalydr86.cloudfront.net/Inbox/Send.svg"} alt={"Send button"} />
            </ConversationMessagesInputSendButton>
        </ConversationMessageInputWrapper>
    );
}
