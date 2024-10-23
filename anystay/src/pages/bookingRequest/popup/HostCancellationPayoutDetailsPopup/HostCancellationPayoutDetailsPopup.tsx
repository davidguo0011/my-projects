import { useState, useEffect, useCallback } from "react";
import {
    HostCancellationPopupWrapper,
    HostCancellationPayoutDetailsPopupTitle,
    HostCancellationPayoutDetailsPopupSubtitle,
    HostCancellationPayoutDetailsPopupDivider,
    HostCancellationPayoutDetailsPrice,
} from "../../bookingRequestStyling";
import { callApi } from "../../../../utils/api/api";
import { ExtendedBookingRequestModel } from "../../interface/interface";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../../hook/useClickOutside";

interface HostCancellationPayoutDetailsPopupProps {
    bookingRequest: ExtendedBookingRequestModel | null;
    accessToken: string;
    togglePayoutDetailsPopup: (arg: boolean) => void;
    toggleCancelBookingMessagePopup: (arg: boolean) => void;
}

const HostCancellationPayoutDetailsPopup: React.FC<HostCancellationPayoutDetailsPopupProps> = ({ bookingRequest, accessToken, togglePayoutDetailsPopup, toggleCancelBookingMessagePopup }) => {
    const wrapperRef = useClickOutside(true, () => {
        toggleCancelBookingMessagePopup(false);
    });
    const [newAmountText, setNewAmountText] = useState("$0.00");
    const [originalAmountText, setOriginalAmountText] = useState("$0.00");
    const checkHostCancellation = useCallback(async () => {
        if (!bookingRequest) return;
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/host/cancel/check", {
            body: {
                bookingRequestID: bookingRequest.id,
            },
            headers: {
                Authorization: accessToken,
                bookingId: bookingRequest.id,
            },
        })
            .then((res) => {
                if (res.success) {
                    if (Number(res.bookingRequest.bookingAmount - res.bookingRequest.refunded - res.refund) > 0) {
                        setNewAmountText(`$${Number((res.bookingRequest.bookingAmount - res.bookingRequest.refunded - res.refund) / 100).toFixed(2)}`);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [bookingRequest, accessToken]);
    useEffect(() => {
        if (!bookingRequest) return;
        if (Number(bookingRequest.bookingAmount - bookingRequest.refundedAmount) > 0) {
            setOriginalAmountText(`$${Number((bookingRequest.bookingAmount - bookingRequest.refundedAmount) / 100).toFixed(2)}`);
        }
        checkHostCancellation();
    }, [bookingRequest, checkHostCancellation]);

    const handleClick = () => {
        togglePayoutDetailsPopup(false);
        toggleCancelBookingMessagePopup(true);
    };

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={() => togglePayoutDetailsPopup(false)} handleSave={handleClick} cancelBtnText="Don't cancel" btnText="Continue">
            <HostCancellationPopupWrapper>
                <HostCancellationPayoutDetailsPopupTitle>Your payout is {newAmountText}</HostCancellationPayoutDetailsPopupTitle>
                <HostCancellationPayoutDetailsPopupSubtitle>
                    You'll have to refund your guest for all unspent nights. If you have already been paid, it will be deducted from your payout method.
                </HostCancellationPayoutDetailsPopupSubtitle>
                <HostCancellationPayoutDetailsPopupDivider style={{ marginTop: "22px", marginBottom: "22px" }} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <HostCancellationPayoutDetailsPrice>
                        <strong>Original payout</strong>
                    </HostCancellationPayoutDetailsPrice>
                    <HostCancellationPayoutDetailsPrice>
                        <strong>{originalAmountText}</strong>
                    </HostCancellationPayoutDetailsPrice>
                </div>
                <HostCancellationPayoutDetailsPopupDivider style={{ marginTop: "22px", marginBottom: "22px" }} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <HostCancellationPayoutDetailsPrice>
                        <strong>New payout</strong>
                    </HostCancellationPayoutDetailsPrice>
                    <HostCancellationPayoutDetailsPrice>
                        <strong>{newAmountText}</strong>
                    </HostCancellationPayoutDetailsPrice>
                </div>
                {/* <HostCancellationPayoutDetailsPopupDivider style={{ marginTop: "32px" }} /> */}
            </HostCancellationPopupWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default HostCancellationPayoutDetailsPopup;
