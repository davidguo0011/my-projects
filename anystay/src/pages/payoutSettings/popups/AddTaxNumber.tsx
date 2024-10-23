import { useState } from "react";
import { callApi } from "../../../utils/api/api";
import {
    AddPayoutAddressAutocompleteTitle,
    AddPayoutAddressWrapper,
    AddPayoutAddressInput,
    AddPayoutAddressLabel,
    AddPayoutAddressInputWrapper,
    AddPayoutAddressSubtitle,
} from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { stripeAccountSelector } from "../../../state/selectors/stripeAccount";
import { useRecoilState } from "recoil";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import { Stripe } from "stripe";
import { UpdateTaxNumberApiResponse } from "../../../interfaces/api/responses/updateUserTaxnumber";
import { UpdateTaxNumberApiParams } from "../../../interfaces/api/params/updateUserTaxnumber";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";
interface AddTaxNumberProps {
    taxNumberMenu: any;
    toggleTaxNumber: () => void;
    accessToken: string;
}

const AddTaxNumber: React.FC<AddTaxNumberProps> = ({ taxNumberMenu, toggleTaxNumber, accessToken }) => {
    const [taxNumber, setTaxNumber] = useState<string>("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [userHostModel, setUserHostModel] = useRecoilState<UserHostModel | null>(userHostModelSelector);
    const [stripeAccount, setStripeAccount] = useRecoilState<Stripe.Account | null>(stripeAccountSelector);
    const addTaxNumberRef = useClickOutside(taxNumberMenu, toggleTaxNumber);

    const updateTaxNumber = async (): Promise<void> => {
        const updateTaxNumberParams: UpdateTaxNumberApiParams = {
            headers: {
                Authorization: accessToken,
            },
            body: {
                stripeAccountID: userHostModel?.stripeAccountID as string,
                taxnumber: taxNumber,
            },
        };
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/taxnumber", updateTaxNumberParams)
            .then((res: UpdateTaxNumberApiResponse) => {
                if (res.success) {
                    const copyStripeHostAccount = JSON.parse(JSON.stringify(stripeAccount));
                    copyStripeHostAccount.company.tax_id_provided = true;
                    setStripeAccount(copyStripeHostAccount);
                }
            })
            .catch((err) => console.log(err));
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateTaxNumber();
        setIsContinueBtnLoading(false);
        toggleTaxNumber();
    };

    return (
        <GlobalPopupContainerCenter
            ref={addTaxNumberRef}
            backBtnType={"Arrow"}
            closePopup={toggleTaxNumber}
            handleSave={handleSave}
            btnText="Continue"
            disable={!taxNumber || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <AddPayoutAddressWrapper>
                <AddPayoutAddressAutocompleteTitle>Taxes</AddPayoutAddressAutocompleteTitle>
                <AddPayoutAddressSubtitle>Add or change your organisation's current ABN or ACN</AddPayoutAddressSubtitle>
                <AddPayoutAddressInputWrapper>
                    <AddPayoutAddressInput
                        value={taxNumber}
                        placeholder={"i.e. ABN / ACN"}
                        onChange={(e) => {
                            setTaxNumber(e.target.value);
                        }}
                    />
                    <AddPayoutAddressLabel>Add ABN or ACN number</AddPayoutAddressLabel>
                </AddPayoutAddressInputWrapper>
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default AddTaxNumber;
