import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";
// Styling for search Auth

interface authBarProps {
    pageName?: string;
    invalid?: boolean;
    resendReady?: boolean;
    mfaInvalid?: boolean;
    isGoogleAccountExist?: boolean;
}

export const AuthContainer = styled.div`
    width: 100%;
`;

export const AuthSignInWrapper = styled.div<authBarProps>`
    position: fixed;
    z-index: 102;
    left: 0;
    bottom: 0;
    height: ${(props) => (props.pageName === "PhonePopup" || props.pageName === "PasswordPopup" || props.pageName === "NewPasswordPopup" ? "fit-content" : "calc(100% - 12px)")};
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    overflow: scroll;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 560px;
        max-height: calc(100vh - 120px);
        border-radius: 14px;
        padding: 24px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: ${(props) => (props.pageName === "WelcomePopup" || props.pageName === "AddProfilePhotoPopup" ? "600px" : "fit-content")};
    }
`;

export const AuthSignUpWrapper = styled.div`
    position: fixed;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: calc(100vh - 120px);
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    overflow: scroll;
    height: fit-content;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 560px;
        border-radius: 14px;
        padding: ${SpacingTheme.spacing_400.padding};
        margin: auto;
        left: 0;
        right: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`;

export const AuthTitle = styled.p`
    position: absolute;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    justify-self: center;
    margin: 0;
`;

export const AuthTitleCrossIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const AuthTitleArrowIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
`;

export const AuthTitleIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
    margin: ${SpacingTheme.spacing_250.margin};
`;

export const AuthContentWrapper = styled.div`
    width: 100%;
    flex: 1;
    margin: 0;
`;
export const AuthContentTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: ${SpacingTheme.spacing_400.margin} auto ${SpacingTheme.spacing_500.margin};
`;

export const AuthContentTitleIcon = styled.img`
    width: 34px;
    height: 34px;
    margin: 0;

    @media (min-width: 768px) {
        width: 45px;
        height: 45px;
    }
`;

export const AuthContentTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
`;
export const AuthContentSubTitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Red1.color};
    margin-top: 16px;
`;

export const AuthSignInSubPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const AuthSignInInput = styled.input<authBarProps>`
    min-height: 54px;
    width: calc(100% - 16px);
    margin: ${SpacingTheme.spacing_400.margin} 0;
    padding: 0 16px;
    border: 1px solid ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Grey1.color)};
    border-radius: 9px;
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};

    &:focus {
    }

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`;

export const AuthTermsAndConditionsText = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: ${SpacingTheme.spacing_250.margin} 0 ${SpacingTheme.spacing_300.margin};

    a {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
        text-decoration: underline;
        border: none;
        background: none;
    }

    @media (min-width: 768px) {
        width: 400px;
        height: 32px;
    }
`;

export const AuthSignUpInput = styled.input<authBarProps>`
    min-height: 50px;
    width: 100%;
    margin: ${SpacingTheme.spacing_250.margin} 0 ${SpacingTheme.spacing_400.margin};
    padding: 0;
    padding-left: 16px;
    border: ${(props) => (props.invalid ? `1px solid ${ColorTheme.Red1.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    border-radius: 9px;
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    &:focus {
    }

    @media (min-width: 768px) {
        height: 54px;
        margin-top: 12px;
    }
`;

export const AuthSignUpInputDOB = styled.input<authBarProps>`
    min-height: 50px;
    width: 100%;
    margin: ${SpacingTheme.spacing_250.margin} 0 ${SpacingTheme.spacing_400.margin};
    padding: 0;
    padding-left: 16px;
    border: ${(props) => (props.invalid ? `1px solid ${ColorTheme.Red1.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    border-radius: 9px;
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    &:focus {
        /* box-shadow: 0 0 3px ${ColorTheme.Red.color}; */
    }

    @media (min-width: 768px) {
        height: 54px;
        margin-top: 12px;
    }
`;

export const AuthSignInLabel = styled.label<authBarProps>`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    width: 100%;
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        font-weight: ${TextTheme.sans_300.fontWeight};
        color: ${ColorTheme.Red1.color};
        display: ${(props) => (props.invalid ? "block" : "none")};
    }
`;

export const AuthSignInTitle = styled.label`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    width: 100%;
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    display: flex;
    justify-content: center;
    margin: 0;
    margin-bottom: ${SpacingTheme.spacing_500.margin};
`;

export const NewPasswordSubtitle = styled.p`
    width: 196px;
    height: 40px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 32px;
`;

export const NewPasswordTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    width: 272px;
    text-align: center;
    margin: 0;
`;

export const AuthSignInButton = styled.button`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    background: ${ColorTheme.Red.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    margin-top: auto;
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const ResendCodeBtn = styled.p<authBarProps>`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    margin-bottom: 20px;
    font-weight: ${TextTheme.sans_300.fontWeight};
    text-decoration: ${(props) => (props.resendReady ? "underline" : "none")};
    cursor: pointer;
`;

export const AuthForgotPasswordButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: none;
    border: none;
    margin-bottom: 96px;
    padding: 0;
    align-self: flex-start;
    text-decoration: underline;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const AuthSignInMotionWrapper = styled.div`
    width: 100%;
`;

export const AuthSignUpForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;

    .verification-code-input input {
        font-size: ${TextTheme.sans_400.fontSize} !important;
    }
`;

export const AuthCancelBtn = styled.div`
    text-decoration: underline;
    color: ${ColorTheme.Black.color};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    cursor: pointer;
`;

export const AuthSignUpButton = styled.button`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    background: ${ColorTheme.Red.color};
    position: relative;
    display: flex;
    justify-content: center;
    justify-self: flex-end;
    align-items: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin-bottom: 48px;
    margin-top: auto;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const AuthSignUpPhotoButton = styled.button`
    background: none;
    position: relative;
    display: flex;
    text-decoration: underline;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    margin: ${SpacingTheme.spacing_300.margin} auto 0;
`;

export const AuthSignUpInitialSubPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AuthSignUpCreateAccountSubPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const AuthSignUpConfirmAccountSubPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const AuthSignUpNameInputWrapper = styled.div`
    width: calc(100% - 16px);
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${SpacingTheme.spacing_300.gap};
    align-self: flex-start;
`;

export const AuthSignUpDOBInputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-start;
    gap: ${SpacingTheme.spacing_250.gap};
`;

interface AuthSignUpConfirmPhoneSubPageProps {
    pageName?: string;
}
export const AuthSignUpConfirmPhoneSubPage = styled.div<AuthSignUpConfirmPhoneSubPageProps>`
    width: 100%;
    height: calc(100% - 16px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthSignUpConfirmPhoneTitle = styled.p`
    width: 100%;
    text-align: center;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-top: 48px;
    margin-bottom: 24px;
`;

export const AuthSignUpUploadYourPlaceLink = styled.button`
    height: 48px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const AuthSignUpReadytoGoTitle = styled.p`
    width: 100%;
    text-align: center;
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    margin-top: 0px;
    margin-bottom: 12px;
    max-width: 320px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
    }
`;

export const AuthSignUpConfirmPhoneSubtitle = styled.p`
    position: relative;
    max-width: 270px;
    width: 100%;
    text-align: center;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0 auto;
    margin-bottom: 84px;
`;

export const AuthSignUpAmplifyImageWrapper = styled.div`
    width: 128px;
    height: 128px;
    margin-top: 96px;
    margin-bottom: 32px;
`;

export const AuthSignUpUploadPhotoWrapper = styled.div`
    width: 100%;
    margin-top: auto;
`;

export const AuthSignUpUploadPhotoButton = styled.button`
    width: 100%;
    background: none;
    border-radius: 9px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Black.color};
    cursor: pointer;
    /* margin-top: 24px; */
`;

export const PhoneInputWrapper = styled.div`
    input {
        outline: none;
        border: none;
    }
`;

export const ProfileAuthSignInImage = styled.img`
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 50%;
`;

export const AuthMFASubtitle = styled.p`
    text-align: center;
    width: 100%;
    margin-bottom: 42px;
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin-top: 32px;

    span {
        cursor: pointer;
        color: ${ColorTheme.Black.color} !important;
    }
`;
export const AuthMFAInvalid = styled.p<authBarProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: auto;
    margin-bottom: 16px;
    color: ${ColorTheme.Red1.color};
    opacity: ${(props) => (props.mfaInvalid ? 1 : 0)};
`;

export const AuthSignInInputSubtitle = styled.p<authBarProps>`
    margin-top: 12px;
    margin-bottom: 0px;
    font-size: ${TextTheme.sans_200.fontSize};
    text-align: left;
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    line-height: ${TextTheme.sans_200.lineHeight};
    max-width: 360px;
`;

export const AuthSignInSocialButton = styled.button`
    height: 48px;
    width: 236px;
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    cursor: pointer;
    margin: ${SpacingTheme.spacing_500.margin} auto ${SpacingTheme.spacing_200.margin};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

// export const AuthSignInSocialIconWrapper = styled.div`
//     height: 24px;
//     width: 24px;
//     background: ${ColorTheme.Grey2.color};
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

export const AuthSignInSocialIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    margin-left: auto;
`;

export const AuthSignInSocialTitle = styled.p`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    justify-self: center;
    text-align: center;
    margin-left: 12px;
    margin-right: auto;
`;

export const AuthSignInInputInvalid = styled.p<authBarProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Red1.color};
    margin: 0;
    display: ${(props) => (props.invalid ? "block" : "none")};
`;

export const AuthSignUpProcessingTitle = styled.p`
    margin-top: 32px;
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    margin-bottom: 24px;
`;

export const AuthSignUpProcessingSubtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    max-width: 270px;
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const ReactCodeInputWrapper = styled.div<authBarProps>`
    margin-top: 44px;
    margin-left: auto;
    margin-right: auto;
    & .verification-container {
        ${(props) => (props.mfaInvalid ? `border: 1px solid ${ColorTheme.Red1.color};` : null)}
    }
`;

export const AuthSignUpCompleteUploadPlaceButton = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    margin: 0 auto;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${ColorTheme.Grey1.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    text-decoration: none;
    background: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        margin-top: auto;
        margin-bottom: 20px;
    }
`;

export const AuthSignUpCompleteExploreButton = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    margin: 0 auto;
    margin-top: auto;
    display: flex;
    align-items: center;
    background: ${ColorTheme.Black.color};
    justify-content: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    cursor: pointer;
`;

export const DOBDatepickerWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    .mbsc-textfield-wrapper {
        display: none;
    }
`;

export const GetSupportButton = styled.a`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    text-decoration: underline;
`;

export const AuthLoginProcessingTitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    margin-top: 32px;
    margin-bottom: 24px;
`;
export const AuthLoginProcessingSubtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    max-width: 270px;
    font-weight: ${TextTheme.sans_300.fontWeight};
`;
