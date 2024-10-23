import {
    ConversationMessagesContainer,
    FetchMoreMessagesLoadingWrapper,
    ConversationCreatedDate,
    ConversationCreatedBubble,
    ConversationNoMessagesYetTitle,
    ConversationNoMessagesYetSubtitle,
} from "../conversationStyling";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import Message from "./Message/Message";
import MessageInputComponent from "./MessageInputComponent/MessageInputComponent";
import { useState, useRef, useEffect, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import * as customSubscriptions from "../../../graphql/customSubscriptions";
import ConversationMessagesContainerLoading from "../loading/ConversationMessagesContainerLoading/ConversationMessagesContainerLoading";
import { callApi } from "../../../utils/api/api";
import Observable from "zen-observable-ts";
import { ConversationModel } from "../../../interfaces/models/conversationModel";

interface ConversationChatBoxProps {
    accessToken: string;
    listingOwnerProfilePictureURL: string;
}

interface MessageProps {
    id: string | null;
    tempId: string;
    author: string;
    body: string;
    conversationmodelID: string;
    createdAt: string;
    updatedAt: string;
    isNote: boolean | null;
    guestNoteBody: string | null;
    hostNoteBody: string | null;
    loading: boolean;
}

interface MessageModelsItem {
    createdAt: string;
}

export default function ConversationChatBox({ accessToken, listingOwnerProfilePictureURL }: ConversationChatBoxProps) {
    const [loadingPage, setLoadingPage] = useState(true);
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const conversationMessageContainerRef = useRef<HTMLDivElement>(null);
    const nextToken = useRef<string | null>(null);
    const currentScrollPos = useRef<number>(0);
    const messageFetching = useRef(false);
    const [isTop, setIsTop] = useState(false);
    const [conversation, setConversation] = useState<ConversationModel | null>(null);
    const [bookingRequest, setBookingRequest] = useState<any>(null);
    const [listingOwnerData, setListingOwnerData] = useState<any>(null);

    const { id } = useParams<{ id: string }>();
    const previousIdRef = useRef<string | null>(null);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    const scrollToBottomConversation = () => {
        conversationMessageContainerRef.current?.scrollTo({ top: conversationMessageContainerRef.current?.scrollHeight });
    };
    const addMessage = async (message: MessageProps) => {
        setMessages([...messages, message]);
    };
    const hasMessagesOverFlow = () => {
        return conversationMessageContainerRef.current?.scrollHeight! > conversationMessageContainerRef.current?.clientHeight!;
    };

    const keepScrollPositionAfterFetchMore = () => {
        conversationMessageContainerRef.current?.scrollTo({ top: conversationMessageContainerRef.current?.scrollHeight - currentScrollPos.current });
    };
    const handleMessagesScroll = useCallback(() => {
        if (hasMessagesOverFlow() && !messageFetching.current) {
            if (nextToken.current === null) {
                return;
            }
            if (conversationMessageContainerRef.current?.scrollHeight) {
                currentScrollPos.current = conversationMessageContainerRef.current?.scrollHeight;
            }
            setIsTop(conversationMessageContainerRef.current?.scrollTop === 0);
        }
    }, []);

    const refreshMessages = useCallback((fetchedMessages: MessageProps[], messages: MessageProps[]) => {
        let newMessages = [...messages];
        let newMessagesToAdd = [];
        for (let i = 0; i < fetchedMessages.length; i++) {
            let toAdd = true;
            for (let j = 0; j < messages.length; j++) {
                // if the message is loading and the message is already in the state, remove the loading state
                if (fetchedMessages[i].tempId === messages[j].tempId && messages[j].loading) {
                    newMessages[j] = fetchedMessages[i];
                }
                // if new msg and the msg in the state have same id, that means the msg is already received, so don't add it
                // if new msg and the msg in the state have same tempid, that means the msg sent by me is already received, so don't add it
                if (fetchedMessages[i].id === messages[j].id || fetchedMessages[i].tempId === messages[j].tempId) {
                    toAdd = false;
                }
            }
            if (toAdd) {
                newMessagesToAdd.push(fetchedMessages[i]);
            }
        }
        return newMessages.concat(newMessagesToAdd);
    }, []);

    const fetchMoreMessages = useCallback(
        async (token: string) => {
            messageFetching.current = true;
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `conversation`, {
                headers: {
                    Authorization: accessToken,
                    conversationID: conversation!.id,
                },
                body: {
                    conversationId: conversation!.id,
                    nextToken: token,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        nextToken.current = res.body.nextToken;
                        setIsTop(false);
                        setMessages((prevMsg) => {
                            return [
                                ...res.body.conversation.MessageModels.items.sort((a: MessageModelsItem, b: MessageModelsItem) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
                                prevMsg,
                            ];
                        });
                        keepScrollPositionAfterFetchMore();
                        messageFetching.current = false;
                    }
                })
                .catch((err) => console.log(err));
        },
        [conversation, accessToken]
    );

    const getConversation = useCallback(
        async (pageChange = false) => {
            //50 is the threshold for the scroll to bottom
            let conversationMessageScrollWhenReceive =
                Math.floor(conversationMessageContainerRef.current?.scrollTop!) + conversationMessageContainerRef.current?.clientHeight! >=
                    conversationMessageContainerRef.current?.scrollHeight! - 50 ||
                (!conversationMessageContainerRef.current?.scrollTop && !conversationMessageContainerRef.current?.scrollHeight && !conversationMessageContainerRef.current?.clientHeight);
            if (id !== "null" && id) {
                await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `conversation/${id}`, {
                    headers: {
                        Authorization: accessToken,
                        conversationId: id,
                    },
                }).then(async (res) => {
                    console.log("message", res);

                    nextToken.current = res.body.nextToken;
                    setBookingRequest(res.body.conversation.BookingRequestModel);
                    setListingOwnerData(res.body.conversation.UserHostModel.UserModel);
                    setConversation(res.body.conversation);
                    setMessages((prevMsg) => {
                        const messages = pageChange
                            ? res.body.conversation.MessageModels.items.sort((a: MessageModelsItem, b: MessageModelsItem) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                            : refreshMessages(
                                  res.body.conversation.MessageModels.items.sort((a: MessageModelsItem, b: MessageModelsItem) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
                                  prevMsg
                              );
                        if (messages.length > 0 && messages[messages.length - 1].author !== userModel!.id) {
                            if (conversationMessageScrollWhenReceive) {
                                scrollToBottomConversation();
                            }
                        }
                        return messages;
                    });
                });
            }
        },
        [id, accessToken, refreshMessages, userModel]
    );

    const initConversationSubscription = useCallback(() => {
        const subscription = API.graphql(
            graphqlOperation(customSubscriptions.onMessageByConversationModelID, {
                conversationmodelID: id,
            })
        ) as Observable<any>;

        subscription.subscribe({
            next: async ({ provider, value }) => {
                await getConversation();
            },
            error: (error: any) => console.log(error),
        });
    }, [getConversation, id]);

    useEffect(() => {
        //init on load and when id changes
        const init = async () => {
            setLoadingPage(true);
            if (userModel) {
                initConversationSubscription();
                await getConversation(id !== previousIdRef.current);
            }
            if (id) {
                previousIdRef.current = id;
            }
            setLoadingPage(false);
        };

        init();
    }, [getConversation, initConversationSubscription, userModel, id]);

    useEffect(() => {
        if (!loadingPage) {
            const { current } = conversationMessageContainerRef;
            scrollToBottomConversation();
            current?.addEventListener("scroll", handleMessagesScroll);
            return () => {
                current?.removeEventListener("scroll", handleMessagesScroll);
            };
        }
    }, [handleMessagesScroll, loadingPage]);

    useEffect(() => {
        if (isTop && nextToken.current) {
            fetchMoreMessages(nextToken.current);
        }
    }, [fetchMoreMessages, isTop]);

    if (loadingPage) {
        return <ConversationMessagesContainerLoading />;
    }
    if (messages.length === 0) {
        return (
            <ConversationMessagesContainer>
                <ConversationNoMessagesYetTitle>No messages yet</ConversationNoMessagesYetTitle>
                <ConversationNoMessagesYetSubtitle>All of your messages will appear here</ConversationNoMessagesYetSubtitle>
            </ConversationMessagesContainer>
        );
    }

    return (
        <>
            <ConversationMessagesContainer ref={conversationMessageContainerRef}>
                {isTop && (
                    <FetchMoreMessagesLoadingWrapper>
                        <ChatMessageLoadingSpinner />
                    </FetchMoreMessagesLoadingWrapper>
                )}
                {conversation && (
                    <ConversationCreatedDate style={{ marginTop: "0px" }}>{`${new Date(conversation.updatedAt).toLocaleDateString("au", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}, ${new Date(conversation.createdAt).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                )}
                {conversation &&
                    listingOwnerData &&
                    messages.map((message, index) => {
                        const prevMessage = index > 0 ? messages[index - 1] : undefined;
                        if (index === 0) {
                            if (message.isNote) {
                                return <ConversationCreatedBubble key={index}>{message.guestNoteBody}</ConversationCreatedBubble>;
                            } else {
                                return message.body ? <Message key={index} listingOwnerProfilePictureURL={listingOwnerProfilePictureURL} message={message} prevMessage={prevMessage} /> : null;
                            }
                        }
                        const messageDate = new Date(message.createdAt);
                        const previousMessage = new Date(messages[index - 1].createdAt);
                        const oneHour = 1000 * 60 * 60;
                        const timeDiff = (messageDate.getTime() - previousMessage.getTime()) / oneHour;
                        if (message.isNote) {
                            if (timeDiff >= 1) {
                                if (messageDate.getDate() !== previousMessage.getDate()) {
                                    return (
                                        <div key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleDateString("au", { day: "numeric", month: "short", year: "numeric" })}, ${new Date(
                                                message.createdAt
                                            ).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <ConversationCreatedBubble>{message.guestNoteBody}</ConversationCreatedBubble>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <ConversationCreatedBubble>{message.guestNoteBody}</ConversationCreatedBubble>
                                        </div>
                                    );
                                }
                            } else {
                                return <ConversationCreatedBubble key={index}>{message.guestNoteBody}</ConversationCreatedBubble>;
                            }
                        } else {
                            if (!message.body) {
                                return null;
                            }
                            if (timeDiff >= 1) {
                                if (messageDate.getDate() !== previousMessage.getDate()) {
                                    return (
                                        <div key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleDateString("au", { day: "numeric", month: "short", year: "numeric" })}, ${new Date(
                                                message.createdAt
                                            ).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <Message loading={message.loading} listingOwnerProfilePictureURL={listingOwnerProfilePictureURL} message={message} prevMessage={prevMessage} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <Message loading={message.loading} listingOwnerProfilePictureURL={listingOwnerProfilePictureURL} message={message} prevMessage={prevMessage} />
                                        </div>
                                    );
                                }
                            } else {
                                return <Message loading={message.loading} key={index} listingOwnerProfilePictureURL={listingOwnerProfilePictureURL} message={message} prevMessage={prevMessage} />;
                            }
                        }
                    })}
            </ConversationMessagesContainer>
            <MessageInputComponent
                accessToken={accessToken}
                conversation={conversation}
                addMessage={addMessage}
                scrollToBottomConversation={scrollToBottomConversation}
                bookingRequest={bookingRequest}
            />
        </>
    );
}
