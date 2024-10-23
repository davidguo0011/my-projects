import { RecentConversationsWrapper, RecentConversationsTitle, RecentConversationBubblesWrapper, FetchMoreConversationLoadingWrapper } from "../../conversation/conversationStyling";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import ConversationBubble from "./ConversationBubble/ConversationBubble";
import { useRef, useState, useEffect, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as customSubscriptions from "../../../graphql/customSubscriptions";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import ConversationInboxDesktopWrapperLoading from "../loading/ConversationInboxDesktopWrapperLoading/ConversationInboxDesktopWrapperLoading";
import { callApi } from "../../../utils/api/api";
import Observable from "zen-observable-ts";

interface HostConversationInboxProps {
    accessToken: string;
}

interface Conversation {
    id: string;
    updatedAt: string;
    status: string;
    UserModel: {
        profilePicture: string;
        identityID: string;
        firstName: string;
    };
    BookingRequestModel: {
        declined: boolean;
        cancelled: boolean;
        completed: boolean;
        confirmed: boolean;
        expired: boolean;
        ListingModel: {
            propertyTitle: string;
        } | null;
    };
    MessageModels: {
        items: Array<{
            body: string | null;
            hostNoteBody: string | null;
        }>;
    };
}

export default function HostConversationInbox({ accessToken }: HostConversationInboxProps) {
    const conversationsContainerRef = useRef<HTMLDivElement | null>(null);
    const conversationNextToken = useRef<string | null>(null);
    const conversationsFetching = useRef(false);
    const [isConversationBottom, setIsConversationBottom] = useState(false);
    const [hostConversations, setHostConversations] = useState<Conversation[]>([]);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [loadingPage, setLoadingPage] = useState(false);

    const hasConversationOverFlow = () => {
        return conversationsContainerRef.current?.scrollHeight! > conversationsContainerRef.current?.clientHeight!;
    };
    const handleConversationScroll = useCallback(() => {
        // check if the conversation has overflow and if the user is at the bottom of the conversation
        if (hasConversationOverFlow() && !conversationsFetching.current) {
            if (conversationNextToken.current === null) {
                return;
            }
            setIsConversationBottom(Math.ceil(conversationsContainerRef.current?.scrollTop!) + conversationsContainerRef.current?.clientHeight! >= conversationsContainerRef.current?.scrollHeight!);
        }
    }, []);

    const updateHostConversationsSubscription = useCallback(async (userHostModelId: string) => {
        const subscription = API.graphql(
            graphqlOperation(customSubscriptions.onUpdateConversationByUserHostModelID, {
                userhostmodelID: userHostModelId,
            })
        ) as Observable<any>;

        subscription.subscribe({
            next: ({ provider, value }) => {
                setHostConversations((prevConversations) => {
                    const updatedConversation = value.data.onUpdateConversationByUserHostModelID;
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
    const sortConversations = (hostConversations: Conversation[]) => {
        return [...hostConversations.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())];
    };
    const fetchConversations = useCallback(async () => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/host/conversations`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                userHostModelId: userHostModel!.id,
                nextToken: null,
            },
        }).then((res) => {
            console.log(res);
            if (res && res.success) {
                conversationNextToken.current = res.body.nextToken;
                setHostConversations(res.body.conversations);
            }
        });
    }, [accessToken, userHostModel]);
    const fetchMoreConversations = useCallback(
        async (nextToken: string) => {
            conversationsFetching.current = true;
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/host/conversations`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    userHostModelId: userHostModel!.id,
                    nextToken: nextToken,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        conversationNextToken.current = res.body.nextToken;
                        setIsConversationBottom(false);
                        setHostConversations((prevState) => {
                            return [...prevState, ...res.body.conversations];
                        });
                        conversationsFetching.current = false;
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken, userHostModel]
    );

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
            await updateHostConversationsSubscription(userHostModel!.id);
            setLoadingPage(false);
        };
        init();
    }, [fetchConversations, updateHostConversationsSubscription, userHostModel]);

    if (loadingPage) return <ConversationInboxDesktopWrapperLoading />;
    return (
        <RecentConversationsWrapper ref={conversationsContainerRef}>
            <RecentConversationsTitle>Inbox</RecentConversationsTitle>
            <RecentConversationBubblesWrapper>
                {hostConversations.map((hostConversation) => {
                    return <ConversationBubble key={hostConversation.id} conversation={hostConversation} />;
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
