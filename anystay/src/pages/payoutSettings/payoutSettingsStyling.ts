import styled from "styled-components";
import Autocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
import { ReactGoogleAutocompleteProps } from "react-google-autocomplete";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface ExtendedAutocompleteProps extends ReactGoogleAutocompleteProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    placeholder?: string;
}

export const PaymentSettingsContentWrapper = styled.div`
    display: flex;
`;

export const PaymentSettingsDesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const PaymentSettingsDesktopMenu = styled.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    border: 1px solid ${ColorTheme.Grey2.color};

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const PayoutSettingsTitleLink = styled(Link)`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;

export const PaymentSettingsDesktopMenuText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`;

export const PaymentSettingsTitleIcon = styled.img`
    /* position: relative; */
    width: 9px;
    height: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
    display: flex;
    align-items: center;
    object-fit: cover;
`;

export const PaymentSettingsMenuWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    gap: ${SpacingTheme.spacing_400.gap};
    height: 40px;
`;

interface PaymentSettingsMenuItemProps {
    selected: boolean;
}

export const PaymentSettingsMenuItem = styled.button<PaymentSettingsMenuItemProps>`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    border: none;
    border-bottom: ${(props) => (props.selected ? "2px solid black" : "2px solid transparent")};
    padding-bottom: 16px !important;
    margin: 0;
    background: none;
    padding: 0;
    cursor: pointer;
`;

export const PaymentSettingsMenuItemSelected = styled.div<PaymentSettingsMenuItemProps>`
    width: 100%;
    height: 3px;
    background: ${ColorTheme.Black.color};
    align-self: flex-end;
    transition: 0.3s;
    grid-column: ${(props) => (props.selected ? "1/2" : "2/3")};
    grid-row: 1/2;
`;

export const PaymentMethodsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
`;

export const PaymentMethodsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;

    margin-bottom: 8px;
`;

export const PaymentMethodsSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    color: ${ColorTheme.Grey.color};
    margin-bottom: 32px;

    span {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
    }

    @media (min-width: 768px) {
        margin-bottom: 32px;
        br {
            display: none;
        }
    }
`;

export const PaymentMethodsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const PaymentMethod = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_400.padding} 0px ${SpacingTheme.spacing_250.padding};
    justify-content: space-between;
    align-items: center;
`;

export const PaymentMethodText = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const PaymentMethodButtonWrapper = styled.div`
    width: 128px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const PaymentMethodButton = styled.button<PaymentSettingsMenuItemProps>`
    text-decoration: underline;
    background: none;
    padding: 0;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    margin: 0;
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey1.color)};
    border: none;
    cursor: pointer;
`;

export const AddPaymentMethodButtonDesktop = styled.button`
    width: 195px;
    height: 48px;
    border-radius: 9px;
    margin-top: 24px;
    margin-bottom: 16px;
    background: ${ColorTheme.Black.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    padding: 0;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const AddPaymentMethodButtonWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: ${ColorTheme.White.color};
    position: fixed;
    z-index: 9;
    flex-direction: column;
    bottom: 0;
    left: 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const AddPaymentMethodButton = styled.button`
    width: calc(100% - 48px);
    height: 48px;
    border-radius: 9px;
    margin-top: 16px;
    background: ${ColorTheme.Black.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const PaymentSettingsDesktopMenuIcon = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`;

export const RecentTransactionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const RecentTransactionsTitle = styled.div`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_600_bold.lineHeight};

    margin-bottom: 32px;
`;

interface AddCardElementWrapperProps {
    addCard: boolean;
}

export const AddCardElementWrapper = styled.div<AddCardElementWrapperProps>`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 5;
    min-height: 50vh;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    transform: translateY(${(props) => (props.addCard ? "0" : "100vh")});
    transition: 0.3s;
`;

export const AddCardElementTitleWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    margin: ${SpacingTheme.spacing_400.margin};
    padding-bottom: 24px;
    // flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    text-align: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const AddCardElementTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 4px;
`;

export const AddCardElementSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;

    a {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;

export const AddCardElementCardWrapper = styled.form`
    height: calc(70vh - 120px);
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AddCardElementCardMenuButton = styled.button<PaymentSettingsMenuItemProps>`
    height: 100px;
    width: calc(50% - 8px);
    border-radius: 9px;
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Blue.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Blue.color}` : null)};
    padding: ${SpacingTheme.spacing_250.padding} ${SpacingTheme.spacing_300.padding};
    display: flex;
    flex-direction: column;
    background: none;
    text-align: left;
    cursor: pointer;
`;

export const AddCardElementCardMenuTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};

    margin: 0;
`;

export const AddCardElementCardMenuSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};

    margin: 0;
    margin-top: 8px;
`;

export const PayoutSettingsDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const PayoutSettingsHoverWrapper = styled.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${SpacingTheme.spacing_250.padding};
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const PayoutSettingsInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding-bottom: 12px;
    cursor: pointer;
`;

export const PayoutSettingsInputTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PayoutSettingsInputTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const PayoutSettingsInputButton = styled.button`
    background: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};

    padding: 0;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
`;

export const PayoutSettingsInputText = styled.p`
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    font-size: ${TextTheme.sans_300.fontSize};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-top: 16px;
`;

export const AddPayoutAddressAutocompleteTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};

    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 12px;
    text-align: center;
`;

interface AddPayoutAddressAutocompleteSubtitleProps {
    invalid: boolean;
}

export const AddPayoutAddressAutocompleteSubtitle = styled.p<AddPayoutAddressAutocompleteSubtitleProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0 auto;
    color: ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-bottom: 32px;
    max-width: 230px;
    text-align: center;
`;

export const AddPayoutAddressAutocompleteSkip = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: none;
    border: none;
    text-decoration: underline;

    text-align: left;
    align-self: flex-start;
    cursor: pointer;
`;

export const AddPayoutAddressWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    min-height: 395px;

    @media (min-width: 768px) {
        width: 560px;
        display: flex;
        flex-direction: column;
    }
`;

export const AddPayoutAddressManualWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    height: fit-content;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    padding-bottom: 100px;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 560px;
        padding: ${SpacingTheme.spacing_400.padding};
        display: flex;
        flex-direction: column;
    }
`;

export const AddPayoutAddressTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_250.margin};
`;

export const AddPayoutAddressSubtitle = styled.p`
    margin: 0;

    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    max-width: 250px;
    text-align: center;
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-bottom: 32px;
`;

export const AddPayoutAddressInputWrapper = styled.div`
    padding-bottom: 24px;
    width: 100%;
`;

export const AddPayoutAddressInputWrapperWide = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const AddPayoutAddressInput = styled.input`
    height: 54px;
    width: 100%;
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 9px;
    padding-left: 16px;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 8px;
    outline: none;
`;

export const AddPayoutAddressLabel = styled.label`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const AddPayoutAddressDoneButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Blue.color};
    cursor: pointer;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 48px;
    width: 156px;
    ${(props) => props.disabled && "opacity: 0.5; cursor: not-allowed;"};

    @media (min-width: 768px) {
        width: 120px;
    }
`;

export const AddCardElementLabel = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};

    line-height: ${TextTheme.sans_200.lineHeight};
    margin-bottom: 24px;

    & .StripeElement {
        height: 50px !important;
    }
`;

export const AddCardElementTextInput = styled.input`
    height: 54px;
    border-radius: 9px;
    background: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;
    outline: none;
`;

export const AddBankAccountInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    width: 100%;
`;

export const AddBankAccountInput = styled.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;

    &::placeholder {
        font-size: ${TextTheme.sans_400.fontSize};
        font-weight: ${TextTheme.sans_400.fontWeight};
        color: ${ColorTheme.Grey1.color};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const AddBankAccountLabel = styled.label`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;
    margin-bottom: 24px;
`;

export const AddBankAccountDoubleInputWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const AddIdentityDocumentWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 499px;
    background: ${ColorTheme.White.color};
    /* bottom: 0;
    left: 0;
    position: fixed;
    z-index: 102; */
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        min-height: unset !important;
        height: 600px !important;
        /* border-radius: 14px; */
        width: 560px;
        padding: ${SpacingTheme.spacing_400.padding};
        /* left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); */
        display: flex;
        flex-direction: column;
    }
`;

export const AddPayoutAddAdressAutocompleteInputWrapper = styled.div`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    outline: none;
    display: flex;
    position: relative;
    margin-bottom: 456px;
    @media (min-width: 768px) {
        margin-bottom: 96px;
    }
`;

export const AddPayoutAddAdressAutocompleteInput = styled(Autocomplete)<ExtendedAutocompleteProps>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey1.color};
    line-height: ${TextTheme.sans_400.lineHeight};
    border-radius: 9px;
    border: none;
    outline: none;
    padding: 0;
    padding-left: 16px;
    padding-right: 50px;
`;

export const AutocompleteClearButton = styled.button`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${ColorTheme.Grey3.color};
    margin-right: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
`;

export const AutocompleteClearButtonIcon = styled.img`
    height: 10px;
    width: 10px;
`;

export const AddIdentityDocumentTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};

    margin: 0;
    margin-top: 32px;
    margin-bottom: 12px;
`;

interface AddIdentityDocumentSubtitleProps {
    invalid: boolean;
}

export const AddIdentityDocumentSubtitle = styled.p<AddIdentityDocumentSubtitleProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    margin: 0;
    margin-bottom: 32px;
    max-width: 248px;
    text-align: center;
`;

interface AddIdentityDocumentButtonProps {
    uploaded: boolean;
}

export const AddIdentityDocumentButton = styled.button<AddIdentityDocumentButtonProps>`
    width: 100%;
    min-height: ${(props) => (props.uploaded ? "64px" : "100px")};
    border-radius: 9px;
    color: ${ColorTheme.Grey.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    background: none;
    border: 1px dashed ${ColorTheme.Grey1.color};
    position: relative;

    @media (min-width: 768px) {
        width: 100%;
        height: 128px;
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        margin-bottom: 32px;
    }
`;

export const AddIdentityDocumentImageContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const AddIdentityDocumentImageWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`;

export const AddIdentityDocumentImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
    grid-column: 1/2;
    grid-row: 1/2;
`;

export const AddIdentityDocumentImageDeleteButton = styled.button`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 32px;
    width: 32px;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border: none;
    margin: auto;
    margin-top: 16px;
    margin-right: 16px;
`;

export const AddIdentityDocumentImageDeleteButtonIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`;

export const BankAccountAddedWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BankAccountAddedIcon = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    margin-top: 120px;
`;

export const BankAccountAddedTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};

    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
    text-align: center;
`;

export const BankAccountAddedSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0 auto;
    max-width: 270px;
    text-align: center;
    margin-bottom: 148px;
`;

export const BankAccountAddedDoneButton = styled.button`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Black.color};
    padding: 0;
    margin-top: 24px;
`;

export const PaymentSettingsServiceFeeWrapper = styled.div<PaymentSettingsMenuItemProps>`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Blue.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    margin-bottom: 16px;
`;

export const PaymentSettingsServiceFeeTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    margin: 0;
`;

export const PaymentSettingsServiceFeeSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;

export const PaymentSettingsServiceFeeWarning = styled.p`
    height: 50px;
    width: 100%;
    background: ${ColorTheme.Grey3.color};
    border-radius: 9px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const AddPayoutFailedIcon = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 48px;
    margin-top: 124px;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;
export const AddPayoutFailedTitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};

    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-right: auto;
    }
`;

export const AddPayoutFailedSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    text-align: center;
    margin: 0 auto;
    max-width: 260px;
    margin-bottom: 145px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;
