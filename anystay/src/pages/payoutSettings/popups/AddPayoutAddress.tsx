import { useState, useEffect } from "react";
import {
    AddPayoutAddressWrapper,
    AddPayoutAddAdressAutocompleteInput,
    AddPayoutAddressAutocompleteTitle,
    AddPayoutAddressAutocompleteSubtitle,
    AddPayoutAddAdressAutocompleteInputWrapper,
    AutocompleteClearButton,
    AutocompleteClearButtonIcon,
} from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { stripeAccountSelector } from "../../../state/selectors/stripeAccount";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { callApi } from "../../../utils/api/api";
import { Stripe } from "stripe";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import { AddressComponent } from "../../../interfaces/state/addressComponent";
import { UpdateUserAddressApiResponse } from "../../../interfaces/api/responses/updateUserAddress";
import { UpdateUserAddressApiParams } from "../../../interfaces/api/params/updateUserAddress";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

const countryMapping: { [key: string]: string } = {
    Australia: "AU",
    "New Zealand": "NZ",
    default: "AU",
};
interface AddPayoutAddressProps {
    updateAddressMenu: boolean;
    toggleAdressMenu: () => void;
    previousPageFlag: number;
    togglePreviousPageFlag: (value: number) => void;
    toggleBankAccountMenu: () => void;
    toggleAdressMenuManual: () => void;
    accessToken: string;
    IdVerifyFlag: boolean;
    toggleIDVerification: () => void;
}

const AddPayoutAddress: React.FC<AddPayoutAddressProps> = ({
    updateAddressMenu,
    toggleAdressMenu,
    previousPageFlag,
    togglePreviousPageFlag,
    toggleBankAccountMenu,
    toggleAdressMenuManual,
    accessToken,
    IdVerifyFlag,
    toggleIDVerification,
}) => {
    const addPayoutAddressRef = useClickOutside(updateAddressMenu, toggleAdressMenu, true);
    // const addPayoutAddressRef = useRef(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [place, setPlace] = useState<any | null>(null);
    const [address, setAddress] = useState<string>("");
    const [addressComponent, setAddressComponent] = useState<AddressComponent>({
        city: null,
        unitNumber: null,
        streetAddress: null,
        state: null,
        postcode: null,
        country: null,
    });
    const [stripeHostAccount, setStripeHostAccount] = useRecoilState<Stripe.Account | null>(stripeAccountSelector);
    const [userHostModel, setUserHostModel] = useRecoilState<UserHostModel | null>(userHostModelSelector);
    const [didNotSelectFromDropdown, setDidNotSelectFromDropdown] = useState<boolean>(false);
    const wrapperRef = useClickOutside(true, () => goback);

    useEffect(() => {
        if (stripeHostAccount) {
            if (stripeHostAccount.individual) {
                if (
                    stripeHostAccount?.individual?.address?.line1 &&
                    stripeHostAccount.individual.address.city &&
                    stripeHostAccount.individual.address.state &&
                    stripeHostAccount.individual.address.country
                ) {
                    setAddress(
                        `${stripeHostAccount.individual.address.line2 ? `${stripeHostAccount.individual.address.line2}/` : ""}${stripeHostAccount.individual.address.line1}, ${
                            stripeHostAccount.individual.address.city
                        }, ${stripeHostAccount.individual.address.state}, ${stripeHostAccount.individual.address.country}`
                    );
                }
            }
        }
    }, [stripeHostAccount]);

    const formatStripeHostAccount = async () => {
        const stripeHostAccountCopy = JSON.parse(JSON.stringify(stripeHostAccount));
        stripeHostAccountCopy.individual.address.line1 = `${addressComponent.unitNumber ? `${addressComponent.unitNumber}/` : ""}${addressComponent.streetAddress}`;
        stripeHostAccountCopy.individual.address.city = `${addressComponent.city}`;
        stripeHostAccountCopy.individual.address.state = `${addressComponent.state}`;
        stripeHostAccountCopy.individual.address.country = `${addressComponent.country}`;
        setStripeHostAccount(stripeHostAccountCopy);
    };

    const updateStripeAccount = async () => {
        const updateUserAddressParams: UpdateUserAddressApiParams = {
            headers: {
                Authorization: accessToken,
            },
            body: {
                stripeAccountID: userHostModel?.stripeAccountID as string,
                city: addressComponent.city as string,
                unitNumber: addressComponent.unitNumber,
                street: addressComponent.streetAddress as string,
                state: addressComponent.state as string,
                country: addressComponent.country ? countryMapping[addressComponent.country] : countryMapping["default"],
                postal_code: addressComponent.postcode as string,
            },
        };
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/address", updateUserAddressParams)
            .then(async (res: UpdateUserAddressApiResponse) => {
                formatStripeHostAccount();
            })
            .catch((err) => console.log(err));
    };

    const goback = () => {
        if (previousPageFlag === 1) {
            togglePreviousPageFlag(0);
            toggleBankAccountMenu();
            toggleAdressMenu();
        } else {
            toggleAdressMenu();
        }
    };

    const handleSave = async () => {
        if (!place) {
            setDidNotSelectFromDropdown(true);
            return;
        }
        setIsContinueBtnLoading(true);
        await updateStripeAccount();
        if (IdVerifyFlag) {
            togglePreviousPageFlag(2);
            toggleIDVerification();
        }
        setIsContinueBtnLoading(false);
        toggleAdressMenu();
    };

    const handleCancel = () => {
        toggleAdressMenu();
        toggleAdressMenuManual();
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={goback}
            handleSave={handleSave}
            cancelPopup={handleCancel}
            cancelBtnText="Do manually"
            btnText={IdVerifyFlag ? "Continue" : "Save"}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <AddPayoutAddressWrapper style={{ minHeight: "395px" }} ref={addPayoutAddressRef}>
                <AddPayoutAddressAutocompleteTitle>Add payout address</AddPayoutAddressAutocompleteTitle>
                <AddPayoutAddressAutocompleteSubtitle invalid={didNotSelectFromDropdown}>
                    {didNotSelectFromDropdown ? "Please select an address from the dropdown." : "Enter the address linked to your bank account."}
                </AddPayoutAddressAutocompleteSubtitle>
                <AddPayoutAddAdressAutocompleteInputWrapper>
                    <AddPayoutAddAdressAutocompleteInput
                        value={address}
                        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                        onPlaceSelected={(place) => {
                            setDidNotSelectFromDropdown(false);
                            let subpremise = place.address_components?.filter((obj) => {
                                return obj.types[0] === "subpremise";
                            });
                            let streetNumber = place.address_components?.filter((obj) => {
                                return obj.types[0] === "street_number";
                            });
                            let street = place.address_components?.filter((obj) => {
                                return obj.types[0] === "route";
                            });
                            let suburb = place.address_components?.filter((obj) => {
                                return obj.types[0] === "locality";
                            });
                            let state = place.address_components?.filter((obj) => {
                                return obj.types[0] === "administrative_area_level_1";
                            });
                            let country = place.address_components?.filter((obj) => {
                                return obj.types[0] === "country";
                            });
                            let city = place.address_components?.filter((obj) => {
                                return obj.types[0] === "administrative_area_level_2";
                            });
                            let postcode = place.address_components?.filter((obj) => {
                                return obj.types[0] === "postal_code";
                            });

                            let unitNumberFormatted = subpremise && subpremise.length > 0 ? subpremise[0].long_name : null;
                            let streetNumberFormatted = streetNumber && streetNumber[0]?.long_name;
                            let streetFormatted = street && street[0]?.long_name;
                            let suburbFormatted = suburb && suburb[0]?.long_name;
                            let stateFormatted = state && state[0]?.short_name;
                            let countryFormatted = country && country[0]?.long_name;
                            let cityFormatted = city && city[0]?.long_name;
                            let postcodeFormatted = postcode && postcode[0]?.long_name;

                            setPlace(place);
                            setAddress(
                                `${unitNumberFormatted ? `${unitNumberFormatted}/` : ""}${streetNumberFormatted}, ${streetFormatted}, ${suburbFormatted}, ${stateFormatted}, ${countryFormatted}`
                            );
                            setAddressComponent({
                                streetAddress: `${streetNumberFormatted} ${streetFormatted}`,
                                unitNumber: unitNumberFormatted,
                                city: cityFormatted,
                                state: stateFormatted,
                                postcode: postcodeFormatted,
                                country: countryFormatted,
                            });
                        }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setAddress(e.target.value);
                            setPlace(null);
                        }}
                        options={{
                            types: ["address"],
                            componentRestrictions: { country: ["au", "nz"] },
                        }}
                        style={{ width: "100%", borderRadius: "10px", color: ColorTheme.Black.color }}
                        placeholder="Enter your payout address"
                    />
                    {address !== "" && (
                        <AutocompleteClearButton
                            type="button"
                            onMouseDown={() => {
                                setAddress("");
                                setPlace(null);
                            }}
                        >
                            <AutocompleteClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear address" />
                        </AutocompleteClearButton>
                    )}
                </AddPayoutAddAdressAutocompleteInputWrapper>
                {/* <AddPayoutAddressAutocompleteSkip
                        type="button"
                        onClick={() => {
                            toggleAdressMenu()
                            toggleAdressMenuManual()
                        }}
                    >
                        DoManually
                    </AddPayoutAddressAutocompleteSkip> */}
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default AddPayoutAddress;
