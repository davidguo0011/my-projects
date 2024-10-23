import {
    ConversationCreatedBubble,
    ConversationMessagesContainer,
    ConversationCreatedDate,
    ConversationNoMessagesYetTitle,
    ConversationNoMessagesYetSubtitle,
    FetchMoreMessagesLoadingWrapper,
} from "../../conversation/conversationStyling";
import ConversationMessagesContainerLoading from "../loading/ConversationMessagesContainerLoading/ConversationMessagesContainerLoading";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { Fragment, useState, useRef, useEffect, useCallback } from "react";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import Message from "./Message/Message";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable-ts";
import { callApi } from "../../../utils/api/api";
import * as customSubscriptions from "../../../graphql/customSubscriptions";
import MessageInputComponent from "./MessageInputComponent/MessageInputComponent";
import { ConversationModel } from "../../../interfaces/models/conversationModel";

interface HostConversationChatBoxProps {
    accessToken: string;
    guestProfilePictureURL: string;
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

export default function HostConversationChatBox({ accessToken, guestProfilePictureURL }: HostConversationChatBoxProps) {
    const [loadingPage, setLoadingPage] = useState(true);
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const conversationMessageContainerRef = useRef<HTMLDivElement | null>(null);
    const nextToken = useRef<string | null>(null);
    const currentScrollPos = useRef<number>(0);
    const messageFetching = useRef(false);
    const [isTop, setIsTop] = useState(false);
    const [conversation, setConversation] = useState<ConversationModel | null>(null);
    const [bookingRequest, setBookingRequest] = useState<any>(null);
    const [listingOwnerData, setListingOwnerData] = useState<any>(null);

    const { id } = useParams<{ id: string }>();
    const previousIdRef = useRef<string | null>(null);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);

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
        //each time the scroll is at the top, fetch more messages, interval is 30 messages, therefore the length need to be dynamic
        if (hasMessagesOverFlow() && !messageFetching.current) {
            if (nextToken.current === null) {
                return;
            }
            //capture the current scroll position
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
                    if (res) {
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
                            if (messages.length > 0 && messages[messages.length - 1].author !== userHostModel!.id) {
                                if (conversationMessageScrollWhenReceive) {
                                    scrollToBottomConversation();
                                }
                            }
                            return messages;
                        });
                    }
                });
            }
        },
        [id, accessToken, userHostModel, refreshMessages]
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
            if (userHostModel) {
                initConversationSubscription();
                await getConversation(id !== previousIdRef.current);
            }
            if (id) {
                previousIdRef.current = id;
            }
            setLoadingPage(false);
        };
        init();
    }, [getConversation, initConversationSubscription, id, userHostModel]);

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

    if (loadingPage) return <ConversationMessagesContainerLoading />;
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
                    <ConversationCreatedDate style={{ marginTop: "0px" }}>{`${new Date(conversation.createdAt).toLocaleDateString("au", {
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
                                return <ConversationCreatedBubble key={index}>{message.hostNoteBody}</ConversationCreatedBubble>;
                            } else {
                                return message.body ? <Message key={index} url={guestProfilePictureURL} message={message} prevMessage={prevMessage} /> : null;
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
                                        <Fragment key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleDateString("au", { day: "numeric", month: "short", year: "numeric" })}, ${new Date(
                                                message.createdAt
                                            ).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <ConversationCreatedBubble>{message.hostNoteBody}</ConversationCreatedBubble>
                                        </Fragment>
                                    );
                                } else {
                                    return (
                                        <Fragment key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <ConversationCreatedBubble>{message.hostNoteBody}</ConversationCreatedBubble>
                                        </Fragment>
                                    );
                                }
                            } else {
                                return <ConversationCreatedBubble key={index}>{message.hostNoteBody}</ConversationCreatedBubble>;
                            }
                        } else {
                            if (!message.body) return null;
                            if (timeDiff >= 1) {
                                if (messageDate.getDate() !== previousMessage.getDate()) {
                                    return (
                                        <Fragment key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleDateString("au", { day: "numeric", month: "short", year: "numeric" })}, ${new Date(
                                                message.createdAt
                                            ).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>

                                            <Message loading={message.loading} url={guestProfilePictureURL} message={message} prevMessage={prevMessage} />
                                        </Fragment>
                                    );
                                } else {
                                    return (
                                        <Fragment key={index}>
                                            <ConversationCreatedDate>{`${new Date(message.createdAt).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}`}</ConversationCreatedDate>
                                            <Message loading={message.loading} url={guestProfilePictureURL} message={message} prevMessage={prevMessage} />
                                        </Fragment>
                                    );
                                }
                            } else {
                                return <Message loading={message.loading} url={guestProfilePictureURL} message={message} key={index} prevMessage={prevMessage} />;
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
                userHostModel={userHostModel}
            />
        </>
    );
}
