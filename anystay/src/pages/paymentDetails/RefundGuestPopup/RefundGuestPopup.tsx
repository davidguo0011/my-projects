import { KeyboardEvent, useState } from "react";
import { callApi } from "../../../utils/api/api";
import {
    DeclineRequestWrapper,
    DeclineRequestTitle,
    DeclineRequestSubtitle,
    DeclineRequestOptionsWrapper,
    DeclineRequestOption,
    DeclineRequestOptionTextWrapper,
    DeclineRequestOptionTitle,
    DeclineRequestOptionSubtitle,
    DeclineRequestButtonsWrapper,
    DeclineRequestCancelButton,
    EditListingUpdateCardContentInputPrice,
    RefundSuccessfulIcon,
    RefundSuccessfulTitle,
    RefundSuccessfulSubtitle,
    RefundSuccessfulWrapper,
    PaymentDetailsRefundInputWarning,
    EditListingUpdateCardContentInputPriceWrapper,
} from "../paymentDetailsStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { UserModel } from "../../../interfaces/models/userModel";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { RefundRequestModel } from "../../../interfaces/models/refundRequestModel";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ExtendedBookingRequestModel extends BookingRequestModel {
    paymentAmount: number;
    bookingAmount: number;
    refundedAmount: number;
}
interface ExtendedRefundRequestModel extends RefundRequestModel {
    refundAmount: number;
}
interface RefundGuestPopupProps {
    bookingRequest: ExtendedBookingRequestModel;
    updateBookingRequest: (arg1: ExtendedBookingRequestModel) => void;
    togglePopup: () => void;
    guestUserModel: UserModel;
}

export default function RefundGuestPopup({ bookingRequest, updateBookingRequest, togglePopup, guestUserModel }: RefundGuestPopupProps) {
    const [menuIndex, setMenuIndex] = useState(0);
    const [reportReason, setReportReason] = useState("");
    const [value, setValue] = useState("");
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [refund, setRefund] = useState<ExtendedRefundRequestModel | null>(null);
    const [maxRefundExceeded, setMaxRefundExceeded] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const wrapperRef = useClickOutside(true, togglePopup);

    const createRefund = async () => {
        const maxRefundAmount = bookingRequest.paymentAmount;
        if (Number(value) * 100 <= maxRefundAmount) {
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/host/refund", {
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingRequest.id,
                },
                body: {
                    bookingRequestId: bookingRequest.id,
                    refundReason: reportReason,
                    refundMessage: "test",
                    refundAmount: Number(value) * 100,
                },
            })
                .then((res) => {
                    console.log(res);
                    setRefund(res.body.refundRequest);
                    setValue("");
                    updateBookingRequest(res.body.bookingRequest);
                    setMenuIndex(2);
                })
                .catch((err) => console.log(err));
        } else {
            setMaxRefundExceeded(true);
            setValue("");
        }
    };

    const keyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;

        if ((key === "." && value.includes(".")) || (value === "" && key === ".") || (value === "" && key === ",")) {
            return;
        }
        setValue((prevState) => {
            let newValue = prevState;
            if (key === "Backspace") {
                newValue = newValue.substring(0, newValue.length - 1);
            } else if (!Number.isNaN(parseInt(key)) || key === "," || key === ".") {
                const parts = value.split(".");
                if (value.includes(".") && parts.length === 2 && parts[1].length >= 2 && key !== "Backspace") {
                    return prevState;
                }
                newValue += key;
            }
            return newValue;
        });
        setMaxRefundExceeded(false);
    };
    if (!bookingRequest) return null;

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await createRefund();
        setIsContinueBtnLoading(false);
    };

    return (
        <>
            {menuIndex === 0 && (
                <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={togglePopup} noContinueBtn={true}>
                    <DeclineRequestWrapper>
                        <DeclineRequestTitle>Offer a refund</DeclineRequestTitle>
                        <DeclineRequestSubtitle>Please select a reason for your refund, it won't be shared with your guest.</DeclineRequestSubtitle>
                        <DeclineRequestOptionsWrapper>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReportReason("Refund for booking related issues");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Booking related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Refund for booking related issues</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReportReason("Refund for property related issues");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Property related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Refund for property related issues</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReportReason("Refund for service related issues");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Service related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Refund for service related issues</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReportReason("Please describe reason for refund");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Other reasons</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Please describe reason for refund</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                        </DeclineRequestOptionsWrapper>
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )}

            {menuIndex === 1 && (
                <GlobalPopupContainerCenter
                    ref={wrapperRef}
                    backBtnType={"Arrow"}
                    closePopup={togglePopup}
                    handleSave={handleSave}
                    btnColor="blue"
                    btnText="Refund"
                    disable={isContinueBtnLoading}
                    isContinueBtnLoading={isContinueBtnLoading}
                >
                    <DeclineRequestWrapper>
                        <DeclineRequestTitle>Refund amount</DeclineRequestTitle>
                        <DeclineRequestSubtitle>
                            You can refund your guest <br />
                            up to <strong>${Number(bookingRequest.paymentAmount / 100).toFixed(2)} AUD</strong>
                        </DeclineRequestSubtitle>
                        <EditListingUpdateCardContentInputPriceWrapper>
                            <EditListingUpdateCardContentInputPrice onKeyDown={keyPressHandler} value={value !== "" ? `$${value}` : ""} onChange={(e) => {}} placeholder={"$0.00"} />
                            {maxRefundExceeded && (
                                <PaymentDetailsRefundInputWarning>
                                    You cannot refund more than <strong>${Number(bookingRequest.paymentAmount / 100).toFixed(2)} AUD</strong>
                                </PaymentDetailsRefundInputWarning>
                            )}
                        </EditListingUpdateCardContentInputPriceWrapper>
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
            {menuIndex === 2 && (
                <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Close"} closePopup={togglePopup} cancelBtnText="Details" btnText="Done">
                    <DeclineRequestWrapper>
                        <RefundSuccessfulWrapper>
                            <RefundSuccessfulIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt="Success tick" />
                            <RefundSuccessfulTitle>${refund ? Number(refund.refundAmount / 100).toFixed(2) : ""} AUD</RefundSuccessfulTitle>
                            <RefundSuccessfulSubtitle>Refunded to {guestUserModel.firstName}</RefundSuccessfulSubtitle>
                        </RefundSuccessfulWrapper>
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
        </>
    );
}
