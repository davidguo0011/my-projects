import { useState } from "react";
import React from "react";
import {
    AddPayoutAddressTitle,
    AddPayoutAddressWrapper,
    AddCardElementSubtitle,
    AddBankAccountInputWrapper,
    AddBankAccountInput,
    AddBankAccountLabel,
    AddBankAccountDoubleInputWrapper,
} from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import { AddPayoutMethodApiResponse } from "../../../interfaces/api/responses/addPayoutMethod";
import { AddPayoutMethodApiParams } from "../../../interfaces/api/params/addPayoutMethod";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface AddBankAccountProps {
    bankAccountMenu: any;
    toggleBankAccountMenu: () => void;
    accessToken: string;
    addressVerified: boolean;
    idVerified: boolean;
    fetchStripeAccount: () => void;
    togglePreviousPageFlag: (value: number) => void;
    toggleIdVerifyFlag: () => void;
    toggleAdressMenu: () => void;
    toggleIDVerification: () => void;
    toggleBankAccountAdded: () => void;
    toggleBankAccountMenuFailed: () => void;
}

const AddBankAccount: React.FC<AddBankAccountProps> = ({
    bankAccountMenu,
    toggleBankAccountMenu,
    accessToken,
    addressVerified,
    idVerified,
    fetchStripeAccount,
    togglePreviousPageFlag,
    toggleIdVerifyFlag,
    toggleAdressMenu,
    toggleIDVerification,
    toggleBankAccountAdded,
    toggleBankAccountMenuFailed,
}: AddBankAccountProps) => {
    const addBankAccountRef = useClickOutside(bankAccountMenu, toggleBankAccountMenu);
    const [accountName, setAccountName] = useState<string>("");
    const [bsb, setBsb] = useState<string>("");
    const [accountNumber, setAccountNumber] = useState<string>("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [userHostModel, setUserHostModel] = useRecoilState<UserHostModel | null>(userHostModelSelector);

    const onSubmit = async (): Promise<void> => {
        setIsContinueBtnLoading(true);
        if (accountName && bsb && accountNumber) {
            const addPayoutMethodParams: AddPayoutMethodApiParams = {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    accountID: userHostModel?.stripeAccountID as string,
                    bankAccountData: {
                        accountName: accountName,
                        bsb: bsb,
                        accountNumber: accountNumber,
                    },
                },
            };
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-user`, "user/payout/method", addPayoutMethodParams)
                .then(async (res: AddPayoutMethodApiResponse) => {
                    if (res.success) {
                        await fetchStripeAccount();
                        toggleBankAccountMenu();
                        if (addressVerified && idVerified) {
                            toggleBankAccountAdded();
                        } else {
                            togglePreviousPageFlag(1);
                            if (!addressVerified && !idVerified) {
                                toggleIdVerifyFlag();
                                toggleAdressMenu();
                            } else if (!addressVerified) {
                                toggleAdressMenu();
                            } else {
                                toggleIDVerification();
                            }
                        }
                    } else {
                        toggleBankAccountMenu();
                        toggleBankAccountMenuFailed();
                    }
                    setIsContinueBtnLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toggleBankAccountMenu();
                    toggleBankAccountMenuFailed();
                    setIsContinueBtnLoading(false);
                });
        }
    };

    const changeAccountName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: string = e.target.value;
        const filteredValue: string = inputValue.replace(/[^a-zA-ZÀ-ž\s\-'.]/g, "");
        setAccountName(filteredValue);
    };

    const addBsb =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            if (e.target.value.length > 6) return;
            const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters

            if (value) {
                setter(value);
            } else {
                setter("");
            }
        };

    const addAc =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            if (e.target.value.length > 10) return;
            const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters

            if (value) {
                setter(value);
            } else {
                setter("");
            }
        };

    const handleClose = () => {
        toggleBankAccountMenu();
    };

    return (
        <GlobalPopupContainerCenter
            ref={addBankAccountRef}
            backBtnType={"Arrow"}
            closePopup={handleClose}
            handleSave={onSubmit}
            isContinueBtnLoading={isContinueBtnLoading}
            disable={!(accountName && bsb && accountNumber) || isContinueBtnLoading}
            btnText="Continue"
        >
            <AddPayoutAddressWrapper ref={addBankAccountRef} style={{ alignItems: "flex-start" }}>
                <AddPayoutAddressTitle>Add bank account</AddPayoutAddressTitle>
                <AddCardElementSubtitle style={{ marginBottom: "32px" }}>
                    By linking your payout method, you unconditionally agree to our <a href="https://www.anystay.com.au/terms-and-conditions">Terms of service</a> and the{" "}
                    <a href="https://stripe.com/au/legal/connect-account">Stripe Recipient Agreement.</a>
                </AddCardElementSubtitle>
                <AddBankAccountInputWrapper>
                    <AddBankAccountInput type="text" value={accountName} onChange={changeAccountName} />
                    <AddBankAccountLabel>Account name</AddBankAccountLabel>
                </AddBankAccountInputWrapper>
                <AddBankAccountDoubleInputWrapper>
                    <AddBankAccountInputWrapper style={{ width: "calc(100% - 12px)" }}>
                        <AddBankAccountInput type="text" value={bsb} onChange={addBsb(setBsb)} />
                        <AddBankAccountLabel>BSB</AddBankAccountLabel>
                    </AddBankAccountInputWrapper>
                    <AddBankAccountInputWrapper style={{ width: "calc(100% - 12px)" }}>
                        <AddBankAccountInput type="text" value={accountNumber} onChange={addAc(setAccountNumber)} />
                        <AddBankAccountLabel>Account number</AddBankAccountLabel>
                    </AddBankAccountInputWrapper>
                </AddBankAccountDoubleInputWrapper>
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default AddBankAccount;
