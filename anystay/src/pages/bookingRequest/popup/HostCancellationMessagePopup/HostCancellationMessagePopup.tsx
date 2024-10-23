import { useState } from "react";
import { HostCancellationPopupWrapper, HostCancellationPopupTitle, HostCancellationPopupSubtitle, HostCancellationMessageInput } from "../../bookingRequestStyling";
import { callApi } from "../../../../utils/api/api";
import { ExtendedBookingRequestModel } from "../../interface/interface";
import { UserModel } from "../../../../interfaces/models/userModel";
import useClickOutside from "../../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

interface HostCancellationMessagePopupProps {
    toggleCancelBookingMessagePopup: (arg: boolean) => void;
    guestData: UserModel | null;
    bookingRequest: ExtendedBookingRequestModel | null;
    reasonCancelled: string;
    accessToken: string;
    toggleCancelBookingCancelledPopup: (arg: boolean) => void;
    fetchBooking: () => Promise<{ bookingRequest: any } | void>;
}

const HostCancellationMessagePopup: React.FC<HostCancellationMessagePopupProps> = ({
    toggleCancelBookingMessagePopup,
    guestData,
    bookingRequest,
    reasonCancelled,
    accessToken,
    toggleCancelBookingCancelledPopup,
    fetchBooking,
}) => {
    const wrapperRef = useClickOutside(true, () => {
        if (!isContinueBtnLoading) {
            toggleCancelBookingMessagePopup(false);
        }
    });
    const [message, setMessage] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const submitHostCancellation = async () => {
        if (bookingRequest) {
            setIsContinueBtnLoading(true);
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/host/cancel", {
                body: {
                    bookingRequestID: bookingRequest.id,
                    message: message,
                    reasonCancelled: reasonCancelled,
                },
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingRequest.id,
                },
            })
                .then(async (res) => {
                    toggleCancelBookingMessagePopup(false);
                    toggleCancelBookingCancelledPopup(true);
                    await fetchBooking();
                    setIsContinueBtnLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsContinueBtnLoading(false);
                });
        }
    };
    if (!guestData) return null;

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleCancelBookingMessagePopup(false)}
            handleSave={submitHostCancellation}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            cancelBtnText="Don't cancel"
            btnText="Cancel booking"
        >
            <HostCancellationPopupWrapper>
                <HostCancellationPopupTitle>Cancel {guestData.firstName}'s request?</HostCancellationPopupTitle>
                <HostCancellationPopupSubtitle>Send {guestData.firstName} a message to let them know why you had to cancel their booking.</HostCancellationPopupSubtitle>
                <HostCancellationMessageInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" maxLength={4096} />
                {/* <HostCancellationPayoutDetailsPopupDivider /> */}
            </HostCancellationPopupWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default HostCancellationMessagePopup;
