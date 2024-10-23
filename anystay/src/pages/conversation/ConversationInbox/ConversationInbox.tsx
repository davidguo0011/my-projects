import { RecentConversationsWrapper, RecentConversationsTitle, RecentConversationBubblesWrapper, FetchMoreConversationLoadingWrapper } from "../conversationStyling";
import ConversationBubble from "./ConversationBubble/ConversationBubble";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { useEffect, useRef, useCallback, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as customSubscriptions from "../../../graphql/customSubscriptions";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import Observable from "zen-observable-ts";
import { ConversationModel } from "../../../interfaces/models/conversationModel";

interface ConversationInboxProps {
    accessToken: string;
}

export default function ConversationInbox({ accessToken }: ConversationInboxProps) {
    const conversationsContainerRef = useRef<HTMLDivElement | null>(null);
    const conversationsFetching = useRef(false);
    const conversationNextToken = useRef<string | null>(null);
    const [isConversationBottom, setIsConversationBottom] = useState(false);
    const [conversations, setConversations] = useState<ConversationModel[]>([]);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [loadingPage, setLoadingPage] = useState(false);

    const sortConversations = (conversations: ConversationModel[]) => {
        return [...conversations.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())];
    };
    const hasConversationOverFlow = () => {
        return conversationsContainerRef.current?.scrollHeight! > conversationsContainerRef.current?.clientHeight!;
    };

    const updateGuestConversationsSubscription = useCallback(async (userModelId: string) => {
        const subscription = API.graphql(
            graphqlOperation(customSubscriptions.onUpdateConversationByMessageOwnerID, {
                messageownerID: userModelId,
            })
        ) as Observable<any>;

        subscription.subscribe({
            next: ({ provider, value }) => {
                setConversations((prevConversations) => {
                    const updatedConversation = value.data.onUpdateConversationByMessageOwnerID;
                    const conversationsCopy = prevConversations.map((conversation) => {
                        if (conversation.id === updatedConversation.id) {
                            return {
                                ...conversation,
                                MessageModels: updatedConversation.MessageModels,
                                updatedAt: new Date().toISOString(),
                                status: updatedConversation.status,
                            };
                        }
                        return conversation;
                    });
                    return sortConversations(conversationsCopy);
                });
            },
            error: (error) => console.warn(error),
        });
    }, []);

    const fetchConversations = useCallback(async () => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/guest/conversations`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                nextToken: null,
            },
        }).then((res) => {
            console.log(res);
            if (res.success) {
                conversationNextToken.current = res.body.nextToken;
                setConversations(res.body?.conversations);
            }
        });
    }, [accessToken]);

    const fetchMoreConversations = useCallback(
        async (nextToken: string) => {
            conversationsFetching.current = true;
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/guest/conversations`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    nextToken: nextToken,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        conversationNextToken.current = res.body.nextToken;
                        setIsConversationBottom(false);
                        setConversations((prevConversations) => {
                            return sortConversations([...prevConversations, ...res.body.conversations]);
                        });
                        conversationsFetching.current = false;
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken]
    );

    const handleConversationScroll = useCallback(() => {
        // check if the conversation has overflow and if the user is at the bottom of the conversation
        if (hasConversationOverFlow() && !conversationsFetching.current) {
            if (conversationNextToken.current === null) {
                return;
            }
            setIsConversationBottom(Math.ceil(conversationsContainerRef.current?.scrollTop!) + conversationsContainerRef.current?.clientHeight! >= conversationsContainerRef.current?.scrollHeight!);
        }
    }, []);

    useEffect(() => {
        if (!loadingPage) {
            const { current } = conversationsContainerRef;
            current?.addEventListener("scroll", handleConversationScroll);

            return () => {
                current?.removeEventListener("scroll", handleConversationScroll);
            };
        }
    }, [handleConversationScroll, loadingPage]);

    useEffect(() => {
        if (isConversationBottom && conversationNextToken.current) {
            console.log("fetch more conversation");
            fetchMoreConversations(conversationNextToken.current);
        }
    }, [fetchMoreConversations, isConversationBottom]);

    //init
    useEffect(() => {
        const init = async () => {
            setLoadingPage(true);
            await fetchConversations();
            await updateGuestConversationsSubscription(userModel!.id);
            setLoadingPage(false);
        };
        init();
    }, [fetchConversations, updateGuestConversationsSubscription, userModel]);

    return (
        <RecentConversationsWrapper ref={conversationsContainerRef}>
            <RecentConversationsTitle>Inbox</RecentConversationsTitle>

            <RecentConversationBubblesWrapper>
                {conversations.map((conversation) => {
                    return <ConversationBubble key={conversation.id} conversation={conversation} />;
                })}
                {isConversationBottom && (
                    <FetchMoreConversationLoadingWrapper>
                        <ChatMessageLoadingSpinner />
                    </FetchMoreConversationLoadingWrapper>
                )}
            </RecentConversationBubblesWrapper>
        </RecentConversationsWrapper>
    );
}
