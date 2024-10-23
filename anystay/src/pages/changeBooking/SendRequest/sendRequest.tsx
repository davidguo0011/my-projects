import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { userModelSelector } from "../../../state/selectors/userModel";
import {
    ChangeBookingTitle,
    ChangeBookingTitleWrapper,
    ChangeBookingTitleIcon,
    ChangeBookingRequestSentHeaderWrapper,
    ChangeBookingRequestSentHeaderHostProfileImage,
    ChangeBookingRequestSentHeaderHostProfileTitle,
    ChangeBookingRequestSentHeaderHostProfileSubtitle,
    ChangeBookingRequestSentText,
    ChangeBookingRequestSentInput,
    ChangeBookingButtonWrapper,
} from "../changeBookingStyling";
import { useRecoilState } from "recoil";
import CycleBtn from "../../../components/btn/cycleBtn/cycleBtn";
import { callApi } from "../../../utils/api/api";
import { UserModel } from "../../../interfaces/models/userModel";
import { ExtendedBookingRequestModel } from "../interface/interface";
import BackBtn from "../../../components/btn/backBtn/backBtn";

interface SendRequestProps {
    listingOwnerProfilePictureURL: string;
    listingOwnerData: UserModel;
    accessToken: string;
    bookingRequest: ExtendedBookingRequestModel;
    setPageIndex: (arg: number) => void;
}

const SendRequest: React.FC<SendRequestProps> = ({ bookingRequest, listingOwnerProfilePictureURL, listingOwnerData, accessToken, setPageIndex }) => {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [requestSentMessage, setRequestSentMessage] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const submitChangeBookingRequestMessage = async () => {
        if (!userModel) return;
        await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "conversation/guest/message", {
            headers: {
                Authorization: accessToken,
                conversationID: bookingRequest.conversationmodelID,
            },
            body: {
                author: userModel.id,
                body: requestSentMessage,
                conversationModelId: bookingRequest.conversationmodelID,
                userHostModelId: bookingRequest.userhostmodelID,
            },
        }).then(() => {
            setPageIndex(2);
        });
    };

    return (
        <Fragment>
            <ChangeBookingTitleWrapper>
                <Link to={`/your-booking/${bookingRequest ? bookingRequest.id : ""}`}>
                    <BackBtn
                        onClick={() => {
                            setPageIndex(0);
                        }}
                        type="Arrow"
                        mobileTop={24}
                        mobileLeft={0}
                    />
                </Link>
                <ChangeBookingTitle>Your changes have been requested</ChangeBookingTitle>
            </ChangeBookingTitleWrapper>
            <ChangeBookingRequestSentHeaderWrapper>
                <ChangeBookingRequestSentHeaderHostProfileImage src={listingOwnerProfilePictureURL} alt="" />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <ChangeBookingRequestSentHeaderHostProfileTitle>{listingOwnerData ? listingOwnerData.firstName : null}</ChangeBookingRequestSentHeaderHostProfileTitle>
                    <ChangeBookingRequestSentHeaderHostProfileSubtitle>Verified host</ChangeBookingRequestSentHeaderHostProfileSubtitle>
                </div>
            </ChangeBookingRequestSentHeaderWrapper>
            <ChangeBookingRequestSentText>
                <strong>You made a change request!</strong> You can send your host a message to introduce yourself. Let them know why you're staying and any special requests.
            </ChangeBookingRequestSentText>
            <ChangeBookingRequestSentInput value={requestSentMessage} onChange={(e) => setRequestSentMessage(e.target.value)} placeholder="Type your message" />
            <ChangeBookingButtonWrapper>
                <CycleBtn
                    style={{ marginRight: window.innerWidth > 768 ? "32px" : "", marginBottom: window.innerWidth < 768 ? "16px" : "" }}
                    background={"red"}
                    isLoading={isContinueBtnLoading}
                    disabled={isContinueBtnLoading}
                    onClick={async () => {
                        if (requestSentMessage !== "") {
                            setIsContinueBtnLoading(true);
                            await submitChangeBookingRequestMessage();
                        } else {
                            setPageIndex(2);
                        }
                    }}
                />
            </ChangeBookingButtonWrapper>
        </Fragment>
    );
};
export default SendRequest;
