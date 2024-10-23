import { useState } from "react";
import {
    AddPayoutAddressTitle,
    AddPayoutAddressInput,
    AddPayoutAddressLabel,
    AddPayoutAddressInputWrapper,
    AddPayoutAddressInputWrapperWide,
    AddPayoutAddressManualWrapper,
} from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { stripeAccountSelector } from "../../../state/selectors/stripeAccount";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import { Stripe } from "stripe";
import { AddressComponent } from "../../../interfaces/state/addressComponent";
import { UpdateUserAddressApiResponse } from "../../../interfaces/api/responses/updateUserAddress";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

const countryMapping: { [key: string]: string } = {
    Australia: "AU",
    "New Zealand": "NZ",
    default: "AU",
};

interface AddPayoutAddressManualProps {
    updateAddressMenuManual: any;
    IdVerifyFlag: boolean;
    toggleIdVerifyFlag: () => void;
    togglePreviousPageFlag: (page: number) => void;
    toggleAdressMenuManual: () => void;
    accessToken: string;
    toggleIDVerification: () => void;
}

const AddPayoutAddressManual: React.FC<AddPayoutAddressManualProps> = ({
    updateAddressMenuManual,
    IdVerifyFlag,
    toggleIdVerifyFlag,
    togglePreviousPageFlag,
    toggleAdressMenuManual,
    accessToken,
    toggleIDVerification,
}) => {
    const handleClickOutside = () => {
        if (IdVerifyFlag) {
            toggleIdVerifyFlag();
            togglePreviousPageFlag(0);
        }
        toggleAdressMenuManual();
    };
    const addPayoutAddressManualRef = useClickOutside(updateAddressMenuManual, handleClickOutside);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [addressComponent, setAddressComponent] = useState<AddressComponent>({
        city: "",
        unitNumber: "",
        streetAddress: "",
        state: "",
        postcode: "",
        country: "",
    });
    const [userHostModel, setUserHostModel] = useRecoilState<UserHostModel | null>(userHostModelSelector);
    const [stripeHostAccount, setStripeHostAccount] = useRecoilState<Stripe.Account | null>(stripeAccountSelector);

    const formatStripeHostAccount = async (): Promise<void> => {
        const stripeHostAccountCopy = JSON.parse(JSON.stringify(stripeHostAccount));
        stripeHostAccountCopy.individual.address.line1 = `${addressComponent.unitNumber ? `${addressComponent.unitNumber}/` : ""}${addressComponent.streetAddress}`;
        stripeHostAccountCopy.individual.address.city = `${addressComponent.city}`;
        stripeHostAccountCopy.individual.address.state = `${addressComponent.state}`;
        stripeHostAccountCopy.individual.address.country = `${addressComponent.country}`;
        setStripeHostAccount(stripeHostAccountCopy);
    };
    const updateStripeAccount = async (): Promise<void> => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/address", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                stripeAccountID: userHostModel?.stripeAccountID,
                city: addressComponent.city,
                unitNumber: addressComponent.unitNumber,
                street: addressComponent.streetAddress,
                state: addressComponent.state,
                country: addressComponent.country ? countryMapping[addressComponent.country] : countryMapping["default"],
                postal_code: addressComponent.postcode,
            },
        })
            .then(async (res: UpdateUserAddressApiResponse) => {
                formatStripeHostAccount();
            })
            .catch((err) => console.log(err));
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateStripeAccount();
        if (IdVerifyFlag) {
            togglePreviousPageFlag(3);
            toggleIDVerification();
        }
        setIsContinueBtnLoading(false);
        toggleAdressMenuManual();
    };

    return (
        <GlobalPopupContainerCenter
            ref={addPayoutAddressManualRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleAdressMenuManual()}
            handleSave={handleSave}
            btnColor="blue"
            btnText={IdVerifyFlag ? "Continue" : "Save"}
            disable={!(addressComponent.streetAddress && addressComponent.city && addressComponent.state && addressComponent.postcode) || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <AddPayoutAddressManualWrapper>
                <AddPayoutAddressTitle>Payout address</AddPayoutAddressTitle>
                <AddPayoutAddressInputWrapper>
                    <AddPayoutAddressInput
                        value={addressComponent.streetAddress as string}
                        placeholder={"i.e. 60 Sherwood road, Toowong"}
                        onChange={(e) => {
                            const { value } = e.target;
                            setAddressComponent((prevState) => {
                                return {
                                    ...prevState,
                                    streetAddress: value,
                                };
                            });
                        }}
                    />
                    <AddPayoutAddressLabel>Street address</AddPayoutAddressLabel>
                </AddPayoutAddressInputWrapper>
                <AddPayoutAddressInputWrapper>
                    <AddPayoutAddressInput
                        value={addressComponent.unitNumber as string}
                        placeholder={"i.e. 3"}
                        onChange={(e) => {
                            const { value } = e.target;
                            setAddressComponent((prevState) => {
                                return {
                                    ...prevState,
                                    unitNumber: value,
                                };
                            });
                        }}
                    />
                    <AddPayoutAddressLabel>Unit number</AddPayoutAddressLabel>
                </AddPayoutAddressInputWrapper>
                <AddPayoutAddressInputWrapperWide>
                    <AddPayoutAddressInputWrapper style={{ width: "calc(100% - 16px)" }}>
                        <AddPayoutAddressInput
                            value={addressComponent.city as string}
                            placeholder={"i.e. Brisbane"}
                            onChange={(e) => {
                                const { value } = e.target;
                                setAddressComponent((prevState) => {
                                    return {
                                        ...prevState,
                                        city: value,
                                    };
                                });
                            }}
                        />
                        <AddPayoutAddressLabel>City</AddPayoutAddressLabel>
                    </AddPayoutAddressInputWrapper>
                    <AddPayoutAddressInputWrapper>
                        <AddPayoutAddressInput
                            value={addressComponent.state as string}
                            placeholder={"i.e. QLD"}
                            onChange={(e) => {
                                const { value } = e.target;
                                setAddressComponent((prevState) => {
                                    return {
                                        ...prevState,
                                        state: value,
                                    };
                                });
                            }}
                        />
                        <AddPayoutAddressLabel>State / Province</AddPayoutAddressLabel>
                    </AddPayoutAddressInputWrapper>
                </AddPayoutAddressInputWrapperWide>
                <AddPayoutAddressInputWrapper>
                    <AddPayoutAddressInput
                        value={addressComponent.postcode as string}
                        placeholder={"i.e. 4066"}
                        onChange={(e) => {
                            const { value } = e.target;
                            setAddressComponent((prevState) => {
                                return {
                                    ...prevState,
                                    postcode: value,
                                };
                            });
                        }}
                    />
                    <AddPayoutAddressLabel>Postcode</AddPayoutAddressLabel>
                </AddPayoutAddressInputWrapper>
            </AddPayoutAddressManualWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default AddPayoutAddressManual;
