import React from "react";
import { AddPayoutAddressWrapper, AddPayoutFailedIcon, AddPayoutFailedTitle, AddPayoutFailedSubtitle } from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface AddBankAccountFailedProps {
    bankAccountMenuFailed: boolean;
    IdVerifyFlag: boolean;
    toggleIdVerifyFlag: () => void;
    togglePreviousPageFlag: (value: number) => void;
    toggleBankAccountMenu: () => void;
    toggleBankAccountMenuFailed: () => void;
}

const AddBankAccountFailed: React.FC<AddBankAccountFailedProps> = ({
    bankAccountMenuFailed,
    IdVerifyFlag,
    toggleIdVerifyFlag,
    togglePreviousPageFlag,
    toggleBankAccountMenu,
    toggleBankAccountMenuFailed,
}) => {
    const handleClickOutside = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
            togglePreviousPageFlag(0);
        }
        toggleBankAccountMenu();
    };
    const addBankAccountFailedRef = useClickOutside(bankAccountMenuFailed, handleClickOutside);

    const handleClose = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
        }
        toggleBankAccountMenu();
        toggleBankAccountMenuFailed();
    };

    const handleCancel = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
        }
        toggleBankAccountMenuFailed();
    };

    return (
        <GlobalPopupContainerCenter ref={addBankAccountFailedRef} backBtnType={"Arrow"} closePopup={handleClose} handleSave={handleClose} cancelPopup={handleCancel} btnText="Continue">
            <AddPayoutAddressWrapper ref={addBankAccountFailedRef} style={{ alignItems: "flex-start" }}>
                <AddPayoutFailedIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Failed icon" />
                <AddPayoutFailedTitle>{IdVerifyFlag ? "ID verification failed" : "Invalid bank account"}</AddPayoutFailedTitle>
                <AddPayoutFailedSubtitle>{"Unfortunately, we could not validate your " + (IdVerifyFlag ? "government ID." : "bank account.")}</AddPayoutFailedSubtitle>
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default AddBankAccountFailed;
