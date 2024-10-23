import { useState } from "react";
import {
    AddPayoutAddressTitle,
    AddPayoutAddressWrapper,
    PaymentSettingsServiceFeeWrapper,
    PaymentSettingsServiceFeeTitle,
    PaymentSettingsServiceFeeSubtitle,
    PaymentSettingsServiceFeeWarning,
} from "../payoutSettingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ServiceFeePopupProps {
    selected: any;
    standardServiceFee: boolean;
    toggleServiceFeePopup: () => void;
}

const ServiceFeePopup: React.FC<ServiceFeePopupProps> = ({ selected, standardServiceFee, toggleServiceFeePopup }) => {
    const [standardServiceFeeBoolean, setStandardServiceFeeBoolean] = useState<boolean>(standardServiceFee);
    const [menuIndex, setMenuIndex] = useState<number>(standardServiceFee ? 1 : 2);
    const serviceFeePopupRef = useClickOutside(selected, toggleServiceFeePopup);
    // const updateHostServiceFee = async (standardServiceFee) => {
    //     await API.post(`${process.env.REACT_APP_ENV}-anystay-user`, "user/fee/type", { body: { id: userHostModel.id, _version: userHostModel._version, standardServiceFee: standardServiceFee } })
    //         .then(res => {
    //             return true
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             return false
    //         })
    // }

    return (
        <GlobalPopupContainerCenter ref={serviceFeePopupRef} backBtnType={"Arrow"} closePopup={toggleServiceFeePopup} noContinueBtn={true}>
            <AddPayoutAddressWrapper>
                <AddPayoutAddressTitle>Service fee</AddPayoutAddressTitle>
                <PaymentSettingsServiceFeeWrapper
                    selected={menuIndex === 1}
                    onClick={() => {
                        setMenuIndex(1);
                        setStandardServiceFeeBoolean(true);
                    }}
                >
                    <PaymentSettingsServiceFeeTitle style={{ color: ColorTheme.Blue.color }}>{"Standard (7.5 - 13.5%)"}</PaymentSettingsServiceFeeTitle>
                    <PaymentSettingsServiceFeeSubtitle>
                        <strong>Your guests won't be charged a service fee.</strong> We deduct a single service fee of 7.5% to 13.5% from your booking's total.
                    </PaymentSettingsServiceFeeSubtitle>
                </PaymentSettingsServiceFeeWrapper>
                {/* <PaymentSettingsServiceFeeWrapper selected={menuIndex === 2} onClick={() => setState({ menuIndex: 2, standardServiceFee: false })}>
                        <PaymentSettingsServiceFeeTitle>
                            {"Guest pays (8.5 - 15%)"}
                        </PaymentSettingsServiceFeeTitle>
                        <PaymentSettingsServiceFeeSubtitle>
                            <strong>You won't be charge a service fee.</strong> We add a single service fee of 8% - 15% to your guest's total.
                        </PaymentSettingsServiceFeeSubtitle>
                    </PaymentSettingsServiceFeeWrapper> */}
                {menuIndex === 2 && <PaymentSettingsServiceFeeWarning>This may result in fewer bookings!</PaymentSettingsServiceFeeWarning>}
                {/* <AddPayoutAddressButtonWrapper>
                        <AddPayoutAddressBackButton type="button" onClick={() => toggleServiceFeePopup()}>Cancel</AddPayoutAddressBackButton>
                        <AddPayoutAddressDoneButton type="button" onClick={() => {
                            updateHostServiceFee(standardServiceFee)
                            toggleServiceFeePopup()
                        }}>Save</AddPayoutAddressDoneButton>
                    </AddPayoutAddressButtonWrapper> */}
            </AddPayoutAddressWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default ServiceFeePopup;
