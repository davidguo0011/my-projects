import { useState } from "react";
import { HostCancellationPopupWrapper, HostRefundPopupTitle, HostRefundPopupSubtitle, HostRefundPopupBody, HostRefundPopupAmount } from "../../bookingRequestStyling";
import { UserModel } from "../../../../interfaces/models/userModel";
import { ExtendedRefundRequestModel } from "../../interface/interface";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../../hook/useClickOutside";

interface ReviewGuestRefundPopupProps {
    guestData: UserModel | null;
    refund: ExtendedRefundRequestModel | null;
    confirmRefund: () => Promise<void>;
    declineRefund: () => Promise<void>;
    toggleRefundRequestedPopup: (arg: boolean) => void;
}

const ReviewGuestRefundPopup: React.FC<ReviewGuestRefundPopupProps> = ({ guestData, refund, confirmRefund, declineRefund, toggleRefundRequestedPopup }) => {
    const wrapperRef = useClickOutside(true, () => {
        toggleRefundRequestedPopup(false);
    });
    const [isDeclineBtnLoading, setIsDeclineBtnLoading] = useState(false);
    const [isAcceptBtnLoading, setIsAcceptBtnLoading] = useState(false);

    const handleSave = async () => {
        setIsAcceptBtnLoading(true);
        await confirmRefund();
        setIsAcceptBtnLoading(false);
    };

    const handleCancel = async () => {
        setIsDeclineBtnLoading(true);
        await declineRefund();
        setIsDeclineBtnLoading(true);
    };

    if (!refund) return null;
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleRefundRequestedPopup(false)}
            handleSave={handleSave}
            disable={isAcceptBtnLoading || isDeclineBtnLoading}
            isContinueBtnLoading={isAcceptBtnLoading}
            btnColor="blue"
            cancelPopup={handleCancel}
            btnText="Accept"
            cancelBtnText="Decline"
        >
            <HostCancellationPopupWrapper>
                <HostRefundPopupTitle>Refund request</HostRefundPopupTitle>
                <HostRefundPopupAmount>${Number(refund.refundAmount / 100).toFixed(2)} AUD</HostRefundPopupAmount>
                <HostRefundPopupSubtitle>
                    You can offer your guest a refund of ${Number(refund.refundAmount / 100).toFixed(2)} AUD or decline. <strong>Your booking won't be affected.</strong>
                </HostRefundPopupSubtitle>
                <HostRefundPopupBody>
                    <strong>{guestData ? guestData.firstName : "Guest"}: </strong>
                    {refund.refundMessage ? refund.refundMessage : "No message provided"}
                </HostRefundPopupBody>
            </HostCancellationPopupWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default ReviewGuestRefundPopup;
