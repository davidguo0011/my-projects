import { AddPayoutAddressWrapper, BankAccountAddedIcon, BankAccountAddedTitle, BankAccountAddedSubtitle, BankAccountAddedWrapper, BankAccountAddedDoneButton } from "../payoutSettingsStyling";
import React from "react";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface BankAccountAddedProps {
    toggleBankAccountAdded: () => void;
}

const BankAccountAdded: React.FC<BankAccountAddedProps> = ({ toggleBankAccountAdded }) => {
    return (
        <GlobalPopupContainerCenter ref={toggleBankAccountAdded} backBtnType={"Arrow"} closePopup={toggleBankAccountAdded} noContinueBtn={true}>
            <AddPayoutAddressWrapper style={{ paddingBottom: "24px" }}>
                <BankAccountAddedWrapper>
                    <BankAccountAddedIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt="Connected icon" />
                    <BankAccountAddedTitle>Payout connected</BankAccountAddedTitle>
                    <BankAccountAddedSubtitle>You can start receiving payouts to your bank account.</BankAccountAddedSubtitle>
                    <BankAccountAddedDoneButton type="button" onClick={toggleBankAccountAdded}>
                        Done
                    </BankAccountAddedDoneButton>
                </BankAccountAddedWrapper>
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default BankAccountAdded;
