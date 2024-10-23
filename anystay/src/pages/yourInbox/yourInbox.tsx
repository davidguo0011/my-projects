import { useState, useRef, Fragment, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { YourInboxContainer, YourInboxTitle, YourInboxNoStaysTitle, YourInboxNoStaysSubtitle, YourInboxCovnersationsWrapper, LoadingWrapper } from "./yourInboxStyling";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import YourInboxConversation from "./YourInboxConversation/YourInboxConversation";
import { callApi } from "../../utils/api/api";
import ChatMessageLoadingSpinner from "../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ConversationModel } from "../../interfaces/models/conversationModel";

export default function YourInbox() {
    const [conversations, setConversations] = useState<ConversationModel[]>([]);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [isBottom, setIsBottom] = useState(false);
    const navigate = useNavigate();
    const conversationsContainerRef = useRef<HTMLDivElement>(null);
    const conversationNextToken = useRef<string | null>(null);
    const conversationsFetching = useRef(false);

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

    const triggerDesktopRedirect = useCallback(
        (conversations: ConversationModel[]) => {
            if (window.innerWidth > 768) {
                if (conversations?.length > 0) {
                    navigate(`/conversation/${conversations[0].id}`);
                }
            }
        },
        [navigate]
    );

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
                setConversations(res.body.conversations);
                triggerDesktopRedirect(res.body.conversations);
            }
        });
    }, [accessToken, triggerDesktopRedirect]);

    const fetchMoreConversations = useCallback(
        async (nextToken: string | null) => {
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
                        setIsBottom(false);
                        setConversations((prevState) => {
                            return [...prevState, ...res.body.conversations];
                        });
                        conversationsFetching.current = false;
                    }
                })
                .catch((err) => console.log(err));
        },
        [accessToken]
    );

    useEffect(() => {
        if (isBottom) {
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
        fetchConversations();
    }, [fetchConversations]);

    return (
        <>
            <HelmetTags title="Inbox | Anystay" />
            <MobileNavbar hide={false} />
            <YourInboxContainer ref={conversationsContainerRef}>
                <YourInboxTitle>Inbox</YourInboxTitle>
                {conversations.length > 0 ? (
                    <YourInboxCovnersationsWrapper>
                        {conversations.map((conversation, index) => {
                            return <YourInboxConversation conversation={conversation} key={index} />;
                        })}
                        {isBottom && (
                            <LoadingWrapper>
                                <ChatMessageLoadingSpinner />
                            </LoadingWrapper>
                        )}
                    </YourInboxCovnersationsWrapper>
                ) : (
                    <Fragment>
                        <YourInboxNoStaysTitle>No messages yet</YourInboxNoStaysTitle>
                        <YourInboxNoStaysSubtitle>All of your messages will appear here</YourInboxNoStaysSubtitle>
                    </Fragment>
                )}
            </YourInboxContainer>
        </>
    );
}
