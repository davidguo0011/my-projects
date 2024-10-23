import { useState } from "react";
import { ManagePaymentsPayPopupWrapper, ManagePaymentsRefundTitleWrapper, ManagePaymentsRefundTitle, ManagePaymentsRefundSubtitle, ManagePaymentsRefundInput } from "../managePaymentsStyling";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../hook/useClickOutside";

interface ManagePaymentsRefundDetailsPopupProps {
    togglePopup: () => void;
    updateRefundMessage: (arg1: string) => void;
    createRefundRequest: () => Promise<void>;
    toggleNext: () => void;
    refundMessage: string;
}

export default function ManagePaymentsRefundDetailsPopup({ togglePopup, updateRefundMessage, createRefundRequest, toggleNext, refundMessage }: ManagePaymentsRefundDetailsPopupProps) {
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const wrapperRef = useClickOutside(true, togglePopup);
    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await createRefundRequest();
        setIsContinueBtnLoading(false);
        toggleNext();
        togglePopup();
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={togglePopup}
            handleSave={handleSave}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnColor="red"
            btnText="Request"
        >
            <ManagePaymentsPayPopupWrapper>
                <ManagePaymentsRefundTitleWrapper>
                    <ManagePaymentsRefundTitle>Refund details</ManagePaymentsRefundTitle>
                    <ManagePaymentsRefundSubtitle>Share the reason for your refund and your ideal refund amount.</ManagePaymentsRefundSubtitle>
                </ManagePaymentsRefundTitleWrapper>
                <ManagePaymentsRefundInput value={refundMessage} onChange={(e) => updateRefundMessage(e.target.value)} placeholder="Start writing here" />
            </ManagePaymentsPayPopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
