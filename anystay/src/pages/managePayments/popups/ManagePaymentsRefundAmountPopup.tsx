import { useState, KeyboardEvent } from "react";
import {
    ManagePaymentsPayPopupWrapper,
    ManagePaymentsRefundTitleWrapper,
    ManagePaymentsRefundTitle,
    ManagePaymentsRefundSubtitle,
    ManagePaymentsRefundAmountInput,
    ManagePaymentsRefundAmountInputSubtitle,
} from "../managePaymentsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ManagePaymentsRefundAmountPopupProps {
    togglePopup: () => void;
    updateRefundAmount: (arg1: number) => void;
    paymentAmount: number;
    toggleNext: () => void;
}

export default function ManagePaymentsRefundAmountPopup({ togglePopup, updateRefundAmount, paymentAmount, toggleNext }: ManagePaymentsRefundAmountPopupProps) {
    const [invalidAmount, setInvalidAmount] = useState(false);
    const [emptyAmount, setEmptyAmount] = useState(false);
    const [value, setValue] = useState("");
    const wrapperRef = useClickOutside(true, togglePopup);

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
        setInvalidAmount(false);
    };

    const handleSave = () => {
        if (value === "") {
            setEmptyAmount(true);
        } else if (Number((Number(value) * 100).toFixed()) > paymentAmount) {
            setInvalidAmount(true);
        } else {
            updateRefundAmount(Number((Number(value) * 100).toFixed()));
            toggleNext();
            togglePopup();
        }
    };

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={togglePopup} handleSave={handleSave} btnColor="red" btnText="Continue">
            <ManagePaymentsPayPopupWrapper>
                <ManagePaymentsRefundTitleWrapper>
                    <ManagePaymentsRefundTitle>Refund amount</ManagePaymentsRefundTitle>
                    <ManagePaymentsRefundSubtitle>Please select the amount you are requesting to be refunded.</ManagePaymentsRefundSubtitle>
                </ManagePaymentsRefundTitleWrapper>
                <ManagePaymentsRefundAmountInput onKeyDown={keyPressHandler} value={value !== "" ? `$${value}` : ""} onChange={(e) => {}} placeholder={"$0.00"} />
                <ManagePaymentsRefundAmountInputSubtitle invalid={invalidAmount || emptyAmount}>
                    {invalidAmount ? `You can request a maximum of ${Number(paymentAmount / 100).toFixed(2)}` : "Please enter a valid amount"}
                </ManagePaymentsRefundAmountInputSubtitle>
            </ManagePaymentsPayPopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
