import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

//
interface authBarProps {
    pageName?: string;
    invalid?: boolean;
    resendReady?: boolean;
    mfaInvalid?: boolean;
}

export const LoginAndSecurityContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export const LoginAndSecurityTitleLink = styled.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;

export const LoginAndSecurityWrapper = styled.div`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    padding-bottom: 128px;

    @media (min-width: 768px) {
        padding: 80px 0 32px;
        width: calc(100% - 64px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const LoginAndSecurityTitleWrapper = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    margin-top: 64px;
    @media (min-width: 768px) {
        position: relative;
        margin-top: 48px;
        padding-bottom: 4px;
        align-items: center;
    }
`;

export const LoginAndSecurityTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    line-height: ${TextTheme.sans_900_semi.lineHeight};
    justify-self: center;
    text-align: center;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        justify-self: flex-start;
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        padding-left: 24px;
    }
`;

export const LoginAndSecuritySubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_500.lineHeight};
    margin: 0;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const LoginAndSecurityContentWrapper = styled.div`
    display: flex;
`;

export const LoginAndSecurityTitleIcon = styled.img`
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    transform: rotate(0deg);

    @media (min-width: 768px) {
        display: none;
    }
`;

export const LoginAndSecuritySectionTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin-top: 48px;
    &:first-of-type {
        margin-bottom: 36px;
    }
`;
export const LoginAndSecurityConnectedService = styled.div`
    width: calc((100% - 16px) / 2);
    aspect-ratio: 1/1;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    padding: ${SpacingTheme.spacing_300.padding};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
        width: calc((100% - 72px) / 3);
    }
    @media (min-width: 1024px) {
        width: calc((100% - 24px) / 2);
    }
`;
export const LoginAndSecurityConnectedServiceImg = styled.img`
    max-width: 150px;
    width: 85%;
    aspect-ratio: 3/2;
    object-fit: contain;
`;
export const LoginAndSecurityConnectedServiceTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    position: absolute;
    bottom: 16px;
    left: 16px;
`;

export const LoginAndSecurityNoConnectedServiceWrapper = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
`;

export const LoginAndSecurityNoConnectedServiceTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin-top: 48px;
`;

export const LoginAndSecurityNoConnectedServiceSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey1.color};
`;

export const LoginAndSecurityConnectedServicesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${SpacingTheme.spacing_400.gap};
`;

export const LoginAndSecuritySectionInputHoverWrapper = styled.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${SpacingTheme.spacing_250.padding};
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const LoginAndSecuritySectionInputWrapper = styled.div`
    height: fit-content;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const LoginAndSecuritySectionInputTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LoginAndSecuritySectionInputTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const LoginAndSecurityDesktopMenu = styled.div`
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

export const LoginAndSecuritySectionInputValue = styled.p`
    margin: ${SpacingTheme.spacing_300.margin} 0 ${SpacingTheme.spacing_250.margin};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const LoginAndSecuritySectionInputLink = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    text-decoration: underline;

    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`;

export const ChangePasswordForgotPasswordTabWrapper = styled.div`
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        padding: ${SpacingTheme.spacing_400.padding};
    }
`;

export const DeactivateAccountTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
    cursor: pointer;
`;

export const ChangePasswordForgotPasswordTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 8px;
`;

export const DeactivateAccountTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ChangePasswordForgotPasswordSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    text-align: center;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 32px;
`;

export const ChangePasswordForgotPasswordInputTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin-top: 12px;
    margin-bottom: 24px;
`;

export interface ChangePasswordForgotPasswordInputProps {
    passwordInvalid: boolean;
}

export const ChangePasswordForgotPasswordInput = styled.input<ChangePasswordForgotPasswordInputProps>`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    background: none;
    border: 1px solid ${(props) => (props.passwordInvalid ? ColorTheme.Red1.color : ColorTheme.Grey1.color)};
    outline: none;
    padding-left: 16px;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const ChangePasswordForgotPasswordInputLabel = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Red1.color};
    margin-top: 12px;
    margin-bottom: 24px;
`;

export const ChangePasswordForgotPasswordResetPasswordButton = styled.button`
    background: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    text-decoration: underline;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};

    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    align-self: flex-start;
    margin-left: 24px;
    margin-top: 12px;
    cursor: pointer;

    @media (min-width: 768px) {
    }
`;

export const ChangePasswordForgotPasswordSaveButton = styled.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    background: ${ColorTheme.Black.color};
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 104px;
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const DesktopMenuItemIcon = styled.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`;

export const DesktopMenuItemText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`;

export const DeactivateAccountIcon = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 32px;

    @media (min-width: 1280px) {
        height: 80px;
        width: 80px;
    }
`;

export const DeactivateAccountTextTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};

    margin: 0 auto;
    margin-bottom: 12px;
    text-align: center;
    max-width: 369px;
`;

export const DeactivateAccountTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    text-align: center;
    margin: 0 auto 96px;
    max-width: 245px;
`;

export const ProfileEditProfileButton = styled(Link)`
    background: none;
    padding: 0;
    border: none;
    height: 34px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ProfileEditProfileButtonIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export const ProfileSocialMediaInputPopupWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    z-index: 102;

    @media (min-width: 768px) {
        width: 560px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 14px;
        bottom: unset;
    }
`;

export const ProfileSocialMediaInputPopupBackButton = styled.button`
    background: none;
    padding: 0;
    margin: ${SpacingTheme.spacing_400.margin};
    border: none;
    align-self: flex-start;
    margin-bottom: 0;
    cursor: pointer;
`;

export const ProfileSocialMediaInputPopupBackIcon = styled.img`
    height: 16px;
    object-fit: cover;
`;

export const ProfileSocialMediaInputPopupIcon = styled.img`
    margin-top: 24px;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

export const ProfileSocialMediaInputPopupTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};

    margin: 0;
    margin-top: 48px;
`;

export const ProfileSocialMediaInputPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    text-align: center;
    margin: 0;
    margin-top: 12px;
    max-width: 200px;
`;

export const ProfileSocialMediaInput = styled.input`
    height: 54px;
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: 32px;
    padding-left: 16px;
    border-radius: 9px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    border: 1px solid ${ColorTheme.Grey1.color};

    ::placeholder {
        color: ${ColorTheme.Grey1.color} !important;
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        font-weight: ${TextTheme.sans_300.fontWeight};
    }
`;

export const ProfileSocialMediaPopupFooter = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: auto;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_400.padding} 0;
    }
`;

export const ProfileSocialMediaPopupCancelButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    margin: 0;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_300.fontSize};
        line-height: ${ButtonTheme.sans_button_300.lineHeight};
    }
`;

export const ProfileSocialMediaPopupSaveButton = styled.button`
    background: ${ColorTheme.Black.color};
    border: none;
    padding: 0 32px;
    color: ${ColorTheme.White.color};
    border-radius: 9px;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    cursor: pointer;
`;

export const ReactCodeInputWrapper = styled.div<authBarProps>`
    & .verification-container {
        ${(props) => (props.mfaInvalid ? `border: 1px solid ${ColorTheme.Red1.color};` : null)}
    }
`;
export const EditLoginMFASubtitle = styled.p<authBarProps>`
    text-align: left;
    width: 100%;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${(props) => (props.mfaInvalid ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    font-weight: ${TextTheme.sans_200.fontWeight};
    margin-top: 12px;
    margin-bottom: 24px;
    span {
        color: ${ColorTheme.Black.color} !important;
    }
`;

//handleconnectedservicepopup
export const AddChannelManagerKeyForm = styled.div`
    border-radius: 10px;
    border: 1px solid ${ColorTheme.Grey2.color};
    margin-bottom: 12px;
    width: 100%;
`;
export const AddChannelManagerKeyItem = styled.div`
    padding: ${SpacingTheme.spacing_300.padding};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`;
export const AddChannelManagerKeyInput = styled.input`
    border: none;
    outline: none;
    font-size: ${TextTheme.sans_400_med.fontSize};
    font-weight: ${TextTheme.sans_400_med.fontWeight};
    line-height: ${TextTheme.sans_400_med.lineHeight};

    width: 100%;
    &::placeholder {
        color: ${ColorTheme.Grey.color};
    }
`;
export const HandleConnectedServicePopupImg = styled.img`
    width: 147px;
    margin-top: 38px;
    margin-bottom: 46px;
    object-fit: contain;
`;

export const HandleConnectedServicePopupTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    margin-bottom: 32px;
`;

export interface AddChannelManagerKeyErrMsgProps {
    invalidKey: boolean;
}

export const AddChannelManagerKeyErrMsg = styled.p<AddChannelManagerKeyErrMsgProps>`
    color: ${ColorTheme.Red.color};
    opacity: ${(props) => (props.invalidKey ? "1" : "0")};
    margin-right: auto;
    margin-bottom: 66px;
`;
