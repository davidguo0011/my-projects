import { Fragment, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import {
    PaymentSettingsTitleIcon,
    PaymentSettingsMenuWrapper,
    PaymentSettingsMenuItem,
    PaymentMethodsWrapper,
    PaymentMethodsTitle,
    AddPaymentMethodButton,
    PaymentMethod,
    PaymentMethodText,
    PaymentMethodButton,
    PayoutSettingsDetails,
    PayoutSettingsInputWrapper,
    PayoutSettingsInputTitleWrapper,
    PayoutSettingsInputTitle,
    PayoutSettingsInputButton,
    PayoutSettingsInputText,
    PaymentSettingsDesktopWrapper,
    PaymentSettingsDesktopMenu,
    PaymentMethodsSubtitle,
    PaymentMethodsTitleWrapper,
    AddPaymentMethodButtonDesktop,
    PaymentSettingsDesktopMenuIcon,
    PaymentSettingsDesktopMenuText,
    AddPaymentMethodButtonWrapper,
    PayoutSettingsTitleLink,
    PaymentMethodButtonWrapper,
    PaymentSettingsContentWrapper,
    PayoutSettingsHoverWrapper,
} from "./payoutSettingsStyling";
import ServiceFeePopup from "./popups/ServiceFeePopup";
import IdVerification from "./popups/IdVerification";
import AddBankAccountFailed from "./popups/AddBankAccountFailed";
import AddBankAccount from "./popups/AddBankAccount";
import AddTaxNumber from "./popups/AddTaxNumber";
import AddPayoutAddressManual from "./popups/AddPayoutAddressManual";
import AddPayoutAddress from "./popups/AddPayoutAddress";
import BankAccountAdded from "./popups/BankAccountAdded";
import InlineTextLoading from "../../components/spinner/inlineTextLoading/InlineTextLoading";
import { stripeAccountSelector } from "../../state/selectors/stripeAccount";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { Stripe } from "stripe";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { GetPayoutMethodsApiResponse } from "../../interfaces/api/responses/getPayoutMethods";
import { DeletePayoutMethodApiResponse } from "../../interfaces/api/responses/deletePayoutMethods";
import { UpdateDefaultPayoutMethodResponse } from "../../interfaces/api/responses/updateDefaultPayoutMethod";
import { UpdateDefaultPayoutMethodParams } from "../../interfaces/api/params/updateDefaultPayoutMethod";
import { DeletePayoutMethodApiParams } from "../../interfaces/api/params/deletePayoutMethods";
import { GetPayoutMethodsApiParams } from "../../interfaces/api/params/getPayoutMethods";
import BackBtn from "../../components/btn/backBtn/backBtn";
import { PaymentSettingsTitle, PaymentSettingsTitleWrapper, PaymentSettingsWrapper } from "../paymentSettings/paymentSettingsStyling";
interface isInlineTextLoadingState {
    loading: boolean;
    bankAccountID: string | null;
}

const PayoutSettings: React.FC = () => {
    const [stripeAccount, setStripeAccount] = useRecoilState<Stripe.Account | null>(stripeAccountSelector);
    const [userHostModel, setUserHostModel] = useRecoilState<UserHostModel | null>(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenSelector);
    const navigate = useNavigate();

    const [updateAddressMenu, setUpdateAddressMenu] = useState<boolean>(false);
    const [updateTaxNumberMenu, setUpdateTaxNumberMenu] = useState<boolean>(false);
    const [bankAccountMenu, setBankAccountMenu] = useState<boolean>(false);
    const [bankAccountMenuFailed, setBankAccountMenuFailed] = useState<boolean>(false);
    const [bankAccountAdded, setBankAccountAdded] = useState<boolean>(false);
    const [serviceFeePopup, setServiceFeePopup] = useState<boolean>(false);
    const [idVerificationPopup, setIdVerificationPopup] = useState<boolean>(false);
    const [updateAddressMenuManual, setUpdateAddressMenuManual] = useState<boolean>(false);
    const [addressVerified, setAddressVerified] = useState<boolean>(false);
    const [idVerified, setIdVerified] = useState<boolean>(false);
    const [idVerifyFlag, setIdVerifyFlag] = useState<boolean>(false);
    const [previousPageFlag, setPreviousPageFlag] = useState<number>(0);
    const [bankAccounts, setBankAccounts] = useState<Array<Stripe.BankAccount>>([]);
    const [isInlineTextLoading, setIsInlineTextLoading] = useState<isInlineTextLoadingState>({ loading: false, bankAccountID: null });

    const updateVerifyStatus = useCallback((): void => {
        if (stripeAccount) {
            if (stripeAccount.individual) {
                setAddressVerified(
                    Boolean(
                        stripeAccount?.individual?.address?.city &&
                            stripeAccount?.individual?.address?.country &&
                            stripeAccount?.individual?.address?.state &&
                            stripeAccount?.individual?.address?.postal_code &&
                            stripeAccount?.individual?.address?.line1
                    )
                );
                setIdVerified(Boolean(stripeAccount?.individual?.verification?.status === "verified" || stripeAccount?.individual?.verification?.status === "pending"));
            }
        }
    }, [stripeAccount]);

    const fetchStripeAccount = useCallback(async (): Promise<void> => {
        const getPayoutMethodsParams: GetPayoutMethodsApiParams = {
            headers: {
                Authorization: accessToken,
            },
        };
        await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, `user/payout/methods`, getPayoutMethodsParams).then(async (res: GetPayoutMethodsApiResponse) => {
            console.log(res);
            if (res && res.body.bankAccounts) {
                setBankAccounts(res.body.bankAccounts.data);
            }
        });
    }, [accessToken]);

    useEffect((): void => {
        fetchStripeAccount();
    }, [fetchStripeAccount]);

    useEffect((): void => {
        updateVerifyStatus();
    }, [updateVerifyStatus]);

    const toggleIdVerifyFlag = (): void => {
        setIdVerifyFlag(!idVerifyFlag);
    };

    const togglePreviousPageFlag = (pageIdx: number): void => {
        setPreviousPageFlag(0 <= pageIdx && pageIdx <= 2 ? pageIdx : 0);
    };

    const toggleAdressMenu = (): void => {
        setUpdateAddressMenu(!updateAddressMenu);
    };

    const toggleAdressMenuManual = (): void => {
        setUpdateAddressMenuManual(!updateAddressMenuManual);
    };

    const toggleTaxNumber = (): void => {
        setUpdateTaxNumberMenu(!updateTaxNumberMenu);
    };

    const toggleBankAccountMenu = (): void => {
        setBankAccountMenu(!bankAccountMenu);
    };

    const toggleBankAccountMenuFailed = (): void => {
        setBankAccountMenuFailed(!bankAccountMenuFailed);
    };

    const toggleIDVerification = (): void => {
        setIdVerificationPopup(!idVerificationPopup);
    };

    const toggleBankAccountAdded = (): void => {
        setBankAccountAdded(!bankAccountAdded);
    };

    const toggleServiceFeePopup = (): void => {
        setServiceFeePopup(!serviceFeePopup);
    };

    const defaultBankAccount = async (bankAccountID: string) => {
        setIsInlineTextLoading({ loading: true, bankAccountID: bankAccountID });
        const updateDefaultPayoutMethodParams: UpdateDefaultPayoutMethodParams = {
            headers: {
                Authorization: accessToken,
            },
            body: {
                accountID: userHostModel?.stripeAccountID as string,
                bankAccountID: bankAccountID,
            },
        };

        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/payout/method/default", updateDefaultPayoutMethodParams)
            .then(async (res: UpdateDefaultPayoutMethodResponse): Promise<void> => {
                await fetchStripeAccount();
                setIsInlineTextLoading({ loading: false, bankAccountID: null });
            })
            .catch((err: any) => {
                setIsInlineTextLoading({ loading: false, bankAccountID: null });
                console.log(err);
            });
    };

    const deleteBankAccount = async (bankAccountID: string) => {
        setIsInlineTextLoading({ loading: true, bankAccountID: bankAccountID });

        const deletePayoutMethodParams: DeletePayoutMethodApiParams = {
            headers: {
                Authorization: accessToken,
            },
            body: {
                accountID: userHostModel?.stripeAccountID as string,
                bankAccountID: bankAccountID,
            },
        };
        await callApi("del", `${process.env.REACT_APP_ENV}-anystay-user`, "user/payout/method", deletePayoutMethodParams)
            .then(async (res: DeletePayoutMethodApiResponse): Promise<void> => {
                await fetchStripeAccount();
                setIsInlineTextLoading({ loading: false, bankAccountID: null });
            })
            .catch((err: any) => {
                setIsInlineTextLoading({ loading: false, bankAccountID: null });
                console.log(err);
            });
    };

    return (
        <Fragment>
            <HelmetTags title="Profile | Anystay" />
            <PaymentSettingsWrapper>
                <PaymentSettingsTitleWrapper>
                    <BackBtn onClick={() => navigate("/settings")} type="Arrow" mobileLeft={24} mobileTop={24} />
                    <PaymentSettingsTitle>Payments & payouts</PaymentSettingsTitle>
                </PaymentSettingsTitleWrapper>
                <PaymentSettingsContentWrapper>
                    <PaymentSettingsDesktopWrapper>
                        <PaymentSettingsMenuWrapper>
                            {/* <PaymentSettingsMenuItem style={{gridRow: "1/2", gridColumn: "1/2"}} selected={false}>
                                Paymentimport { AddIdentityDocumentButton } from './payoutSettingsStyling';
                            </PaymentSettingsMenuItem> */}
                            <PaymentSettingsMenuItem selected={false} onClick={() => navigate("/payment-settings/")}>
                                Payment
                            </PaymentSettingsMenuItem>
                            <PaymentSettingsMenuItem selected={true}>Payout</PaymentSettingsMenuItem>
                        </PaymentSettingsMenuWrapper>
                        <PaymentMethodsWrapper>
                            <PaymentMethodsTitle>Payout method</PaymentMethodsTitle>
                            <PaymentMethodsSubtitle style={{ marginBottom: "24px", color: "#222222", fontSize: "16px", lineHeight: "24px", marginTop: "4px" }}>
                                Payments received for bookings are paid via our secure payout system.&nbsp;
                                <span>Currently, we only accept Australian bank accounts.</span>
                            </PaymentMethodsSubtitle>
                            {bankAccounts.length !== 0 ? (
                                bankAccounts.map((bankAccount, index) => {
                                    return (
                                        <PaymentMethod key={index}>
                                            <PaymentMethodText>
                                                {bankAccount.bank_name} {bankAccount.last4} {bankAccount.default_for_currency && "(Default)"}
                                            </PaymentMethodText>
                                            <PaymentMethodButtonWrapper>
                                                {isInlineTextLoading.loading && isInlineTextLoading.bankAccountID === bankAccount.id ? (
                                                    <InlineTextLoading />
                                                ) : (
                                                    <>
                                                        {!bankAccount.default_for_currency && (
                                                            <>
                                                                <PaymentMethodButton
                                                                    disabled={isInlineTextLoading.loading}
                                                                    onClick={async () => defaultBankAccount(bankAccount.id)}
                                                                    selected={!bankAccount.default_for_currency}
                                                                >
                                                                    Default
                                                                </PaymentMethodButton>
                                                                <PaymentMethodButton
                                                                    disabled={isInlineTextLoading.loading}
                                                                    onClick={async () => deleteBankAccount(bankAccount.id)}
                                                                    style={{ marginLeft: "16px" }}
                                                                    selected={!bankAccount.default_for_currency}
                                                                >
                                                                    Remove
                                                                </PaymentMethodButton>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </PaymentMethodButtonWrapper>
                                        </PaymentMethod>
                                    );
                                })
                            ) : (
                                <PaymentMethod
                                    onClick={toggleBankAccountMenu}
                                    style={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <PaymentMethodText>Not connected</PaymentMethodText>
                                    <PaymentMethodButton selected={true} onClick={toggleBankAccountMenu}>
                                        Add
                                    </PaymentMethodButton>
                                </PaymentMethod>
                            )}
                            <AddPaymentMethodButtonDesktop type="button" onClick={toggleBankAccountMenu}>
                                Add payout method
                            </AddPaymentMethodButtonDesktop>
                        </PaymentMethodsWrapper>
                        <PaymentMethodsWrapper style={{ marginTop: "48px" }}>
                            <PaymentMethodsTitleWrapper>
                                <PaymentMethodsTitle>Payout details</PaymentMethodsTitle>
                            </PaymentMethodsTitleWrapper>
                            <PaymentMethodsSubtitle style={{ maxWidth: "400px" }}>Provide and update your details.</PaymentMethodsSubtitle>
                        </PaymentMethodsWrapper>
                        <PayoutSettingsDetails>
                            <PayoutSettingsHoverWrapper>
                                <PayoutSettingsInputWrapper onClick={toggleAdressMenu}>
                                    <PayoutSettingsInputTitleWrapper>
                                        <PayoutSettingsInputTitle>Address</PayoutSettingsInputTitle>
                                        <PayoutSettingsInputButton type="button" onClick={toggleAdressMenu}>
                                            Edit
                                        </PayoutSettingsInputButton>
                                    </PayoutSettingsInputTitleWrapper>
                                    <PayoutSettingsInputText>
                                        {stripeAccount
                                            ? stripeAccount?.individual
                                                ? stripeAccount?.individual?.address?.city &&
                                                  stripeAccount.individual.address.country &&
                                                  stripeAccount.individual.address.state &&
                                                  stripeAccount.individual.address.line1
                                                    ? `${stripeAccount.individual.address.line1}, ${stripeAccount.individual.address.city}, ${stripeAccount.individual.address.state}, ${stripeAccount.individual.address.country}`
                                                    : "Add payout address"
                                                : "Add payout address"
                                            : "Add payout address"}
                                    </PayoutSettingsInputText>
                                </PayoutSettingsInputWrapper>
                            </PayoutSettingsHoverWrapper>

                            {stripeAccount && bankAccounts.length > 0 && (
                                <PayoutSettingsHoverWrapper>
                                    <PayoutSettingsInputWrapper onClick={toggleIDVerification}>
                                        <PayoutSettingsInputTitleWrapper>
                                            <PayoutSettingsInputTitle>Government ID</PayoutSettingsInputTitle>
                                            <PayoutSettingsInputButton
                                                type="button"
                                                onClick={toggleIDVerification}
                                                style={{ display: stripeAccount?.individual?.verification?.status === "verified" ? "none" : "block" }}
                                            >
                                                Edit
                                            </PayoutSettingsInputButton>
                                        </PayoutSettingsInputTitleWrapper>
                                        <PayoutSettingsInputText>
                                            {stripeAccount.individual &&
                                                // stripeAccount.individual.verification.status
                                                (stripeAccount?.individual?.verification?.status === "verified"
                                                    ? "Verified"
                                                    : stripeAccount?.individual?.verification?.status === "pending"
                                                      ? "Pending"
                                                      : stripeAccount?.individual?.verification?.details_code && stripeAccount.individual.verification.details_code.includes("failed")
                                                        ? "Verification failed"
                                                        : stripeAccount?.individual?.verification?.status === "unverified"
                                                          ? "Not verified"
                                                          : "")}
                                        </PayoutSettingsInputText>
                                    </PayoutSettingsInputWrapper>
                                </PayoutSettingsHoverWrapper>
                            )}
                            {stripeAccount && (
                                <PayoutSettingsHoverWrapper>
                                    <PayoutSettingsInputWrapper onClick={toggleTaxNumber}>
                                        <PayoutSettingsInputTitleWrapper>
                                            <PayoutSettingsInputTitle>Taxes</PayoutSettingsInputTitle>
                                            <PayoutSettingsInputButton type="button" onClick={toggleTaxNumber}>
                                                Edit
                                            </PayoutSettingsInputButton>
                                        </PayoutSettingsInputTitleWrapper>
                                        <PayoutSettingsInputText>{stripeAccount.company ? (stripeAccount.company.tax_id_provided ? "Provided" : "None") : ""}</PayoutSettingsInputText>
                                    </PayoutSettingsInputWrapper>
                                </PayoutSettingsHoverWrapper>
                            )}
                            {/* <PayoutSettingsInputWrapper>
                                <PayoutSettingsInputTitleWrapper>
                                    <PayoutSettingsInputTitle>Service fee</PayoutSettingsInputTitle>
                                    <PayoutSettingsInputButton type="button" onClick={() => toggleServiceFeePopup()}>View</PayoutSettingsInputButton>
                                </PayoutSettingsInputTitleWrapper>
                                <PayoutSettingsInputText style={{ marginBottom: "16px" }}>{userHostModel ? userHostModel.standardServiceFee && "Standard (7.5% - 13.5%)" : ""}</PayoutSettingsInputText>
                            </PayoutSettingsInputWrapper> */}
                        </PayoutSettingsDetails>

                        <AddPaymentMethodButtonWrapper>
                            <AddPaymentMethodButton type="button" onClick={toggleBankAccountMenu}>
                                Add payout method
                            </AddPaymentMethodButton>
                        </AddPaymentMethodButtonWrapper>
                    </PaymentSettingsDesktopWrapper>
                    <PaymentSettingsDesktopMenu>
                        <PaymentSettingsDesktopMenuIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Payment+safety.svg"} alt="Payments icon" />
                        <PaymentSettingsDesktopMenuText>Payouts are sent 24 hours after check-in and may take up to 5 business days to arrive.</PaymentSettingsDesktopMenuText>
                    </PaymentSettingsDesktopMenu>
                </PaymentSettingsContentWrapper>
            </PaymentSettingsWrapper>
            {bankAccountMenu && (
                <AddBankAccount
                    addressVerified={addressVerified}
                    idVerified={idVerified}
                    toggleIDVerification={toggleIDVerification}
                    toggleAdressMenu={toggleAdressMenu}
                    toggleIdVerifyFlag={toggleIdVerifyFlag}
                    togglePreviousPageFlag={togglePreviousPageFlag}
                    fetchStripeAccount={fetchStripeAccount}
                    bankAccountMenu={bankAccountMenu}
                    toggleBankAccountMenu={toggleBankAccountMenu}
                    toggleBankAccountMenuFailed={toggleBankAccountMenuFailed}
                    toggleBankAccountAdded={toggleBankAccountAdded}
                    accessToken={accessToken}
                />
            )}
            {updateAddressMenu && (
                <AddPayoutAddress
                    toggleAdressMenu={toggleAdressMenu}
                    toggleAdressMenuManual={toggleAdressMenuManual}
                    updateAddressMenu={updateAddressMenu}
                    toggleIDVerification={toggleIDVerification}
                    IdVerifyFlag={idVerifyFlag}
                    previousPageFlag={previousPageFlag}
                    togglePreviousPageFlag={togglePreviousPageFlag}
                    toggleBankAccountMenu={toggleBankAccountMenu}
                    accessToken={accessToken}
                />
            )}

            {updateAddressMenuManual && (
                <AddPayoutAddressManual
                    toggleAdressMenuManual={toggleAdressMenuManual}
                    updateAddressMenuManual={updateAddressMenuManual}
                    IdVerifyFlag={idVerifyFlag}
                    togglePreviousPageFlag={togglePreviousPageFlag}
                    accessToken={accessToken}
                    toggleIDVerification={toggleIDVerification}
                    toggleIdVerifyFlag={toggleIdVerifyFlag}
                />
            )}

            {updateTaxNumberMenu && <AddTaxNumber toggleTaxNumber={toggleTaxNumber} taxNumberMenu={updateTaxNumberMenu} accessToken={accessToken} />}

            {bankAccountMenuFailed && (
                <AddBankAccountFailed
                    bankAccountMenuFailed={bankAccountMenuFailed}
                    toggleBankAccountMenu={toggleBankAccountMenu}
                    toggleBankAccountMenuFailed={toggleBankAccountMenuFailed}
                    toggleIdVerifyFlag={toggleIdVerifyFlag}
                    IdVerifyFlag={idVerifyFlag}
                    togglePreviousPageFlag={togglePreviousPageFlag}
                />
            )}
            {idVerificationPopup && (
                <IdVerification
                    toggleIDVerification={toggleIDVerification}
                    selected={idVerificationPopup}
                    toggleIdVerifyFlag={toggleIdVerifyFlag}
                    toggleBankAccountAdded={toggleBankAccountAdded}
                    previousPageFlag={previousPageFlag}
                    togglePreviousPageFlag={togglePreviousPageFlag}
                    toggleBankAccountMenu={toggleBankAccountMenu}
                    toggleAdressMenu={toggleAdressMenu}
                    toggleAdressMenuManual={toggleAdressMenuManual}
                    IdVerifyFlag={idVerifyFlag}
                    accessToken={accessToken}
                />
            )}
            {bankAccountAdded && <BankAccountAdded toggleBankAccountAdded={toggleBankAccountAdded} />}
            {serviceFeePopup && <ServiceFeePopup selected={serviceFeePopup} standardServiceFee={userHostModel?.standardServiceFee as boolean} toggleServiceFeePopup={toggleServiceFeePopup} />}
        </Fragment>
    );
};

export default PayoutSettings;
