import {
    CreateBookingRequestedWrapper,
    CreateBookingRequestedHeaderWrapper,
    CreateBookingRequestedHeaderImageWrapper,
    CreateBookingRequestedHeaderImage,
    CreateBookingRequestedHeaderImageVerified,
    CreateBookingSendMsgHeaderImg,
    CreateBookingRequesteText,
    CreateBookingRequestedInput,
    CreateBookingWrapper,
    CreateBookingContentWrapper,
    CreateBookingTitleWrapper,
    CreateBookingSendMsgTitle,
    CreateBookingButtonWrapper,
} from "../createBookingStyling";
import CycleBtn from "../../../components/btn/cycleBtn/cycleBtn";
import { useState } from "react";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { useNavigate } from "react-router-dom";

interface SendMsgPageProps {
    listingOwnerProfilePictureURL: string;
    listingOwnerData: ExtendedUserHostModel | null;
    bookingRequest: ExtendedBookingRequestModel | null;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    listing: ExtendedListingModel;
    pageIndex: number;
    accessToken: string;
    imageKey: string;
}

interface ExtendedBookingRequestModel extends BookingRequestModel {
    conversationmodelID?: string;
}

interface ExtendedListingModel extends ListingModel {
    instantBookEnabled?: boolean;
    stateShort?: string;
}

interface ExtendedUserHostModel extends UserHostModel {
    userIDConfirmed?: boolean;
    firstName?: string;
}

export default function SendMsgPage({ listingOwnerProfilePictureURL, listingOwnerData, accessToken, bookingRequest, setPageIndex, listing, pageIndex, imageKey }: SendMsgPageProps) {
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [requestSentMessage, setRequestSentMessage] = useState("");
    const navigate = useNavigate();
    const sendMessage = async () => {
        if (requestSentMessage !== "" && requestSentMessage !== null) {
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "conversation/guest/message", {
                headers: {
                    Authorization: accessToken,
                    conversationId: bookingRequest!.conversationmodelID,
                },
                body: {
                    author: userModel!.id,
                    body: requestSentMessage,
                    conversationModelId: bookingRequest!.conversationmodelID,
                    userHostModelId: bookingRequest!.userhostmodelID,
                    message: requestSentMessage,
                },
            }).then(async (res) => {
                // setPageIndex(2);
                navigate(`/your-stays/${userModel!.id}`);
            });
        } else {
            // setPageIndex(2);
            navigate(`/your-stays/${userModel!.id}`);
        }
    };

    if (!bookingRequest) {
        return null;
    }
    return (
        <CreateBookingWrapper pageIndex={pageIndex}>
            <CreateBookingContentWrapper pageIndex={pageIndex}>
                <CreateBookingTitleWrapper>
                    <CreateBookingSendMsgTitle>
                        {listing.instantBookEnabled
                            ? `Your stay in ${listing.city}, ${listing.stateShort} has been confirmed!`
                            : `Your stay in ${listing.city}, ${listing.stateShort} has been requested!`}
                    </CreateBookingSendMsgTitle>
                </CreateBookingTitleWrapper>
                <CreateBookingRequestedWrapper>
                    <CreateBookingRequestedHeaderWrapper>
                        <CreateBookingSendMsgHeaderImg src={constructOptimisedImageUrl(imageKey, 800)} alt="Listing Cover Image" />
                        <CreateBookingRequestedHeaderImageWrapper>
                            <CreateBookingRequestedHeaderImage src={listingOwnerProfilePictureURL} alt="Photo of host" />
                            {listingOwnerData!.userIDConfirmed && (
                                <CreateBookingRequestedHeaderImageVerified src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Vector.png"} alt="Verified tick" />
                            )}
                        </CreateBookingRequestedHeaderImageWrapper>
                    </CreateBookingRequestedHeaderWrapper>
                    <CreateBookingRequesteText>Message your host, {listingOwnerData!.firstName}</CreateBookingRequesteText>
                    <CreateBookingRequestedInput
                        value={requestSentMessage}
                        onChange={(e) => {
                            setRequestSentMessage(e.target.value);
                        }}
                        placeholder="Type your message"
                    />
                    <CreateBookingButtonWrapper>
                        <CycleBtn
                            onClick={async () => {
                                setIsContinueBtnLoading(true);
                                await sendMessage();
                                setIsContinueBtnLoading(false);
                            }}
                            disabled={isContinueBtnLoading}
                            background={"red"}
                            isLoading={isContinueBtnLoading}
                        />
                    </CreateBookingButtonWrapper>
                </CreateBookingRequestedWrapper>
            </CreateBookingContentWrapper>
        </CreateBookingWrapper>
    );
}
