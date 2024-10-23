import { useState, useRef, useEffect, useCallback } from "react";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import { YourInboxContainer, YourInboxTitle, YourInboxNoStaysTitle, YourInboxNoStaysSubtitle, YourInboxCovnersationsWrapper, LoadingWrapper } from "../yourInbox/yourInboxStyling";
import HostInboxConversation from "./HostInboxConversation/HostInboxConversation";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import ChatMessageLoadingSpinner from "../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ConversationModel } from "../../interfaces/models/conversationModel";

export default function HostInbox() {
    const navigate = useNavigate();
    const [conversations, setConversations] = useState<ConversationModel[]>([]);
    const [isBottom, setIsBottom] = useState(false);
    const conversationsContainerRef = useRef<HTMLDivElement>(null);
    const conversationNextToken = useRef<string | null>(null);
    const conversationsFetching = useRef(false);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const hasConversationOverFlow = () => {
        return conversationsContainerRef.current?.scrollHeight! > conversationsContainerRef.current?.clientHeight!;
    };

    const handleConversationScroll = useCallback(() => {
        // check if the conversation has overflow and if the user is at the bottom of the conversation
        if (hasConversationOverFlow() && !conversationsFetching.current) {
            if (conversationNextToken.current === null) {
                return;
            }
            setIsBottom(Math.ceil(conversationsContainerRef.current?.scrollTop!) + conversationsContainerRef.current?.clientHeight! >= conversationsContainerRef.current?.scrollHeight!);
        }
    }, []);

    const fetchConversations = useCallback(async (): Promise<ConversationModel[] | void> => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/host/conversations`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                userHostModelId: userHostModel!.id,
                nextToken: null,
            },
        })
            .then((res) => {
                console.log("hostInboxConversations", res);
                if (res.success) {
                    conversationNextToken.current = res.body.nextToken;
                    setConversations(res.body.conversations);
                    return res.body.conversations;
                }
            })
            .catch((err) => {
                console.log(err);
                return false;
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
                        setIsBottom(false);
                        setConversations((prevState) => {
                            return [...prevState, ...res.body.conversations];
                        });
                        conversationsFetching.current = false;
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken, userHostModel]
    );

    const triggerDesktopRedirect = useCallback(
        (conversations: ConversationModel[]) => {
            if (window.innerWidth > 768) {
                if (conversations) {
                    if (conversations.length > 0) {
                        navigate(`/host-conversation/${conversations[0].id}`);
                    }
                }
            }
        },
        [navigate]
    );

    useEffect(() => {
        if (isBottom && conversationNextToken.current) {
            fetchMoreConversations(conversationNextToken.current);
        }
    }, [fetchMoreConversations, isBottom]);

    useEffect(() => {
        const { current } = conversationsContainerRef;
        current?.addEventListener("scroll", handleConversationScroll);
        return () => {
            current?.removeEventListener("scroll", handleConversationScroll);
        };
    }, [handleConversationScroll]);

    useEffect(() => {
        const init = async () => {
            const conversations = await fetchConversations();
            if (conversations) {
                triggerDesktopRedirect(conversations);
            }
        };
        init();
    }, [fetchConversations, triggerDesktopRedirect]);

    if (!userHostModel) {
        return <LoadingFullPageModal guestMode={true} reverse={false} />;
    }
    return (
        <>
            <HelmetTags title="Inbox | Anystay" />
            <MobileNavbar hide={false} />
            <YourInboxContainer ref={conversationsContainerRef}>
                <YourInboxTitle>Inbox</YourInboxTitle>
                {conversations.length > 0 ? (
                    <YourInboxCovnersationsWrapper>
                        {conversations.map((conversation, index) => {
                            return <HostInboxConversation conversation={conversation} key={index} />;
                        })}
                        {isBottom && (
                            <LoadingWrapper>
                                <ChatMessageLoadingSpinner />
                            </LoadingWrapper>
                        )}
                    </YourInboxCovnersationsWrapper>
                ) : (
                    <>
                        <YourInboxNoStaysTitle>No messages yet</YourInboxNoStaysTitle>
                        <YourInboxNoStaysSubtitle>All of your messages will appear here</YourInboxNoStaysSubtitle>
                    </>
                )}
            </YourInboxContainer>
        </>
    );
}
