import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import { ConversationWrapper } from "../conversation/conversationStyling";
import TopNavHeader from "./mobileComponent/TopNavHeader";
import ChatBoxTopHeader from "./desktopComponent/ChatBoxTopHeader";
import HostConversationInbox from "./HostConversationInbox/HostConversationInbox";
import TopBookingInfo from "./mobileComponent/TopBookingInfo";
import HostConversationBookingDetails from "./HostConversationBookingDetails/HostConversationBookingDetails";
import HostConversationChatBox from "./HostConversationChatBox/HostConversationChatBox";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

export default function HostConversation() {
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loadingPage, setLoadingPage] = useState(true);
    const [bookingRequest, setBookingRequest] = useState(null);
    const [listingData, setListingData] = useState(null);
    const [bookingGuestData, setBookingGuestData] = useState(null);
    const [guestProfilePictureURL, setGuestProfilePictureURL] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [hostPriceBreakdown, setHostPriceBreakdown] = useState(null);

    const getConversation = useCallback(async () => {
        if (id !== "null" && id) {
            await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `conversation/${id}`, {
                headers: {
                    Authorization: accessToken,
                    conversationId: id,
                },
            }).then(async (res) => {
                if (!res || !res.body.conversation.BookingRequestModel || !res.body.conversation.BookingRequestModel.ListingModel) {
                    console.log("Conversations related booking or listing has been deleted.");
                    return;
                }
                if (res.body.conversation.UserModel.profilePicture) {
                    const guestProfilePic = constructOptimisedProtectedImageUrl(res.body.conversation.UserModel.profilePicture, res.body.conversation.UserModel.identityID, 100);
                    setGuestProfilePictureURL(guestProfilePic);
                }
                setBookingGuestData(res.body.conversation.UserModel);
                setBookingRequest(res.body.conversation.BookingRequestModel);
                setListingData(res.body.conversation.BookingRequestModel.ListingModel);
                setHostPriceBreakdown(JSON.parse(res.body.conversation.BookingRequestModel.hostPriceBreakdown));
            });
        }
    }, [id, accessToken]);

    useEffect(() => {
        const init = async () => {
            setLoadingPage(true);
            await getConversation();
            setLoadingPage(false);
        };
        if (userHostModel) {
            init();
        } else {
            navigate("/");
        }
    }, [getConversation, navigate, userHostModel]);

    return (
        <ConversationWrapper>
            <HelmetTags title="Inbox | Anystay" />
            {window.innerWidth < 768 && <TopNavHeader bookingGuestData={bookingGuestData} />}
            <HostConversationInbox accessToken={accessToken} />
            {window.innerWidth < 768 && <TopBookingInfo bookingRequest={bookingRequest} listingData={listingData} />}
            <ChatBoxTopHeader bookingGuestData={bookingGuestData} />
            <HostConversationChatBox accessToken={accessToken} guestProfilePictureURL={guestProfilePictureURL} />
            <HostConversationBookingDetails
                bookingRequest={bookingRequest}
                bookingGuestData={bookingGuestData}
                guestProfilePictureURL={guestProfilePictureURL}
                listingData={listingData}
                loadingPage={loadingPage}
                hostPriceBreakdown={hostPriceBreakdown}
            />
        </ConversationWrapper>
    );
}
