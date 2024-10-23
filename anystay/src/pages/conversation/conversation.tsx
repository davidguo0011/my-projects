import { useEffect, useCallback, useState } from "react";
import { ConversationWrapper } from "./conversationStyling";
import TopNavHeader from "./mobileComponent/TopNavHeader";
import ChatBoxTopHeader from "./desktopComponent/ChatBoxTopHeader";
import TopBookingInfo from "./mobileComponent/TopBookingInfo";
import ConversationInbox from "./ConversationInbox/ConversationInbox";
import ConversationBookingDetails from "./ConversationBookingDetails/ConversationBookingDetails";
import ConversationChatBox from "./ConversationChatBox/ConversationChatBox";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

export default function Conversations() {
    const { id } = useParams();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const navigate = useNavigate();

    const [loadingPage, setLoadingPage] = useState(true);
    const [conversation, setConversation] = useState(null);
    const [bookingRequest, setBookingRequest] = useState(null);
    const [listingData, setListingData] = useState(null);
    const [listingOwnerData, setListingOwnerData] = useState(null);
    const [listingOwnerProfilePictureURL, setListingOwnerProfilePictureURL] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [guestPriceBreakdown, setGuestPriceBreakdown] = useState(null);

    // Fetch the conversation and update the state
    const getConversation = useCallback(async () => {
        //50 is the threshold for the scroll to bottom
        if (id !== "null" && id) {
            await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `conversation/${id}`, {
                headers: {
                    Authorization: accessToken,
                    conversationId: id,
                },
            }).then(async (res) => {
                console.log(res);
                if (res.body.conversation.UserHostModel.UserModel.profilePicture) {
                    const listingOwnerProfilePic = constructOptimisedProtectedImageUrl(
                        res.body.conversation.UserHostModel.UserModel.profilePicture,
                        res.body.conversation.UserHostModel.UserModel.identityID,
                        100
                    );
                    setListingOwnerProfilePictureURL(listingOwnerProfilePic);
                }
                setConversation(res.body?.conversation);
                setBookingRequest(res.body?.conversation?.BookingRequestModel);
                setListingData(res.body?.conversation?.BookingRequestModel?.ListingModel);
                setListingOwnerData(res.body?.conversation?.UserHostModel?.UserModel);
                if (res.body?.conversation?.BookingRequestModel?.guestPriceBreakdown) {
                    setGuestPriceBreakdown(JSON.parse(res.body?.conversation?.BookingRequestModel?.guestPriceBreakdown));
                }
            });
        }
    }, [id, accessToken]);
    useEffect(() => {
        const init = async () => {
            setLoadingPage(true);
            await getConversation();
            setLoadingPage(false);
        };
        if (userModel) {
            init();
        } else {
            navigate("/");
        }
    }, [getConversation, navigate, userModel]);

    return (
        <ConversationWrapper>
            <HelmetTags title="Inbox | Anystay" />
            {window.innerWidth < 768 && <TopNavHeader listingOwnerData={listingOwnerData} bookingRequest={bookingRequest} />}

            <ChatBoxTopHeader listingOwnerData={listingOwnerData} bookingRequest={bookingRequest} />

            {window.innerWidth < 768 && <TopBookingInfo bookingRequest={bookingRequest} conversation={conversation} listingData={listingData} />}

            <ConversationInbox accessToken={accessToken} />

            <ConversationChatBox accessToken={accessToken} listingOwnerProfilePictureURL={listingOwnerProfilePictureURL} />

            <ConversationBookingDetails
                loadingPage={loadingPage}
                bookingRequest={bookingRequest}
                listingOwnerData={listingOwnerData}
                listingData={listingData}
                guestPriceBreakdown={guestPriceBreakdown}
            />
        </ConversationWrapper>
    );
}
