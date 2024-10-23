import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface ReactCodeInputWrapperProps {
    mfaInvalid?: boolean;
    mfaExpired?: boolean;
}
interface EditProfileCodeSubtitleProps {
    mfaInvalid?: boolean;
    mfaExpired?: boolean;
}
interface EditProfileInputInfoSubtitleProps {
    invalid?: boolean;
}
interface EditProfileInputProps {
    invalid?: boolean;
}
interface AddIdentityDocumentButtonProps {
    uploaded: boolean;
}
interface EditProfileSocialInputProps {
    selected: boolean;
}

// Edit profile styling
export const EditProfileContainer = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    padding-bottom: 80px;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        max-width: 704px;
        margin: 0 auto;
        margin-top: 80px;
    }
    @media (min-width: 1280px) {
        max-width: 1024px;
    }
`;

export const ReactCodeInputWrapper = styled.div<ReactCodeInputWrapperProps>`
    & .verification-container {
        ${(props) => (props.mfaInvalid ? `border: 1px solid ${ColorTheme.Red1.color};` : null)}
    }
`;

export const GoToProfileButton = styled(Link)`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    padding: 0;
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    justify-self: flex-end;
    text-decoration: underline;
    align-self: center;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const EditProfileCodeSubtitle = styled.p<EditProfileCodeSubtitleProps>`
    text-align: left;
    width: 100%;
    margin: 0 auto;
    margin-top: 12px;
    margin-bottom: 96px;
    font-size: ${TextTheme.sans_300.fontSize};
    color: ${(props) => (props.mfaInvalid || props.mfaExpired ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    span {
        color: ${ColorTheme.Black.color} !important;
    }
`;

// Edit profile profile section
export const EditProfileProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_500.padding} 0;

    amplify-s3-image {
        min-height: 100% !important;
        img {
            min-height: 100% !important;
        }
    }
    @media (min-width: 1280px) {
        grid-column: 2/3;
    }
`;

export const EditProfileHeaderImageWrapper = styled.div`
    height: 96px;
    width: 96px;
    margin: ${SpacingTheme.spacing_400.margin} 0;
    padding: 0;
    border-radius: 50%;

    cursor: pointer;
    position: relative;

    @media (min-width: 768px) {
        justify-self: center;
        height: 128px;
        width: 128px;
        margin-bottom: 0;
        margin-top: 40px;
    }
`;
export const EditProfileUploadPhotoLoadingWrapper = styled.div`
    height: 100px;
    width: 100px;
    margin: ${SpacingTheme.spacing_400.margin} 0;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        height: 128px;
        width: 128px;
        margin-bottom: 0;
        margin-top: 40px;
    }
`;

export const EditProfilePhotoWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export const EditProfilePhotoText = styled.div`
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    position: absolute;
    top: 0;
`;

export const EditProfileProfileTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    margin: ${SpacingTheme.spacing_300.margin} 0;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const EditProfileHoverWrapper = styled.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${SpacingTheme.spacing_250.padding};
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const EditProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    cursor: pointer;
`;

export const EditProfileAboutTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EditProfileAboutTitle = styled.label`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    cursor: pointer;
`;

export const EditProfileAboutEditButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    background: none;
    border: none;
    text-decoration: underline;
    padding: 0;
    cursor: pointer;
`;

export const EditProfileAboutText = styled.p`
    width: 100%;
    margin: ${SpacingTheme.spacing_300.margin} 0 0px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        margin: 21px 0 0px;
    }
`;

// Edit profile details section
export const EditProfileDetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const EditProfileDetailsTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    margin: ${SpacingTheme.spacing_300.margin} 0;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const EditProfileDetailWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const EditProfileDetailTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EditProfileDetailTitle = styled.label`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    cursor: pointer;
`;

export const EditProfileDetailEditButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
`;

export const EditProfileDetailText = styled.p`
    width: 100%;
    margin: ${SpacingTheme.spacing_300.margin} 0 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

// Edit Profile Input styling
export const EditProfileInputWrapper = styled.div`
    /* position: fixed; */
    height: fit-content;
    /* bottom: 0;
    left: 0; */
    overflow: hidden;
    overflow-y: auto;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    /* z-index: 102; */
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        /* border-radius: 14px; */
        margin: 0 auto;
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        overflow-y: auto;
        padding: ${SpacingTheme.spacing_400.padding};
    }
`;

export const EditProfileInputAboutWrapper = styled.div`
    overflow: hidden;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${SpacingTheme.spacing_400.padding};

    @media (min-width: 768px) {
        bottom: unset;
        width: 560px;
        margin: 0 auto;
    }
`;

export const EditProfileInputInfoWrapper = styled.div`
    width: 100%;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
`;

export const EditProfileInputInfoTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`;

export const EditProfileInputInfoSubtitle = styled.p<EditProfileInputInfoSubtitleProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Black.color)};
    margin: 0 auto;
    margin-bottom: 32px;
    max-width: 200px;
    height: 36px;
`;

export const EditProfileInputTextarea = styled.textarea`
    width: 100%;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: 9px;
    height: 240px;
    outline: none;
    padding: ${SpacingTheme.spacing_300.padding};
    resize: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditProfileInputCount = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    margin-top: 12px;
    margin-left: auto;
`;

export const EditProfileInput = styled.input<EditProfileInputProps>`
    width: 100%;
    border-radius: 9px;
    height: 55px;
    outline: none;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    padding: ${SpacingTheme.spacing_100.padding};
    padding-left: 16px;
    border: ${(props) => (props.invalid ? `1px solid ${ColorTheme.Red1.color}` : `1px solid ${ColorTheme.Grey1.color}`)};

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditProfileInputLabel = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-top: -4px;
    text-align: left;
    margin-bottom: 96px;
`;

export const EditProfileInputDOB = styled.input`
    // width: calc(100% - 48px);
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 9px;
    height: 50px;
    outline: none;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    padding: ${SpacingTheme.spacing_100.padding};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditProfileNameWrapper = styled.div`
    width: calc(100% - 16px);
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 50% 50%;
    gap: ${SpacingTheme.spacing_300.gap};

    @media (min-width: 768px) {
    }
`;

export const EditProfileInputDOBWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    gap: ${SpacingTheme.spacing_200.gap};
    margin-bottom: 96px;
`;

export const EditProfileIDUploadedImage = styled.img`
    width: 100%;
    border-radius: 9px;
    height: 200px;
    object-fit: cover;
`;

export const PhoneInputWrapper = styled.div`
    width: 100%;
    margin: 0 auto 96px;

    input {
        outline: none;
        border: none;
    }
`;

export const AddIdentityDocumentWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    background: ${ColorTheme.White.color};
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 102;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    padding-top: 48px;

    @media (min-width: 768px) {
        height: 600px !important;
        border-radius: 14px;
        width: 560px;
        padding: ${SpacingTheme.spacing_400.padding};
        padding-top: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }
`;

export const AddIdentityDocumentTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-top: 0px;
    }
`;

export const AddIdentityDocumentSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    max-width: 234px;
    text-align: center;
    @media (min-width: 768px) {
        max-width: 282px;
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
`;

export const AddIdentityDocumentButton = styled.button<AddIdentityDocumentButtonProps>`
    width: 100%;
    height: ${(props) => (props.uploaded ? "64px" : "100px")};
    border-radius: 9px;
    color: ${ColorTheme.Grey.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px dashed ${ColorTheme.Grey1.color};
    cursor: pointer;
    padding: 0;

    @media (min-width: 768px) {
        height: ${(props) => (props.uploaded ? "64px" : "133px")};
        margin: 0 32px;
        width: 100%;
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        margin-bottom: 24px;
    }
`;
export const AddIdentityDocumentButtonInput = styled.input`
    grid-row: 1/2;
    grid-column: 1/2;
    opacity: 0;
    visibility: hidden;
    display: none;
    width: 100%;
    height: 100%;
    content: "";
    position: relative !important;
    cursor: pointer;
`;
export const AddIdentityDocumentButtonText = styled.p`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
`;

export const AddIdentityDocumentButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
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
    @media (min-width: 768px) {
        height: 122px;
    }
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
    height: 25px;
    width: 25px;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: auto;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
`;

export const AddIdentityDocumentImageDeleteButtonIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`;

export const AddCardElementCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_300.fontSize};
    font-weight: ${ButtonTheme.sans_button_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_300.lineHeight};
    padding: 0;
    background: none;
    border: none;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
`;

export const AddCardElementSaveButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    margin: 0;
    background: ${ColorTheme.Blue.color};
    height: 48px;
    width: 104px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 9px;
`;
export const DOBDatepickerWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    .mbsc-textfield-wrapper {
        display: none;
    }
`;

export const EditProfilePrompts = styled.div`
    margin-top: 20px;
    margin-bottom: 8px;
    width: calc(100vw - 14px);
    padding: ${SpacingTheme.spacing_250.padding};
    margin-left: -12px;
    overflow-x: auto;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-right: 24px;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        overflow-x: scroll;
        padding-right: 10px;
        width: 100%;
    }

    @media (min-width: 1280px) {
        margin: -10px;
    }
`;

export const EditProfileContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
        flex-direction: row;
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;

export const EditProfilePromptButton = styled.button`
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    background: none;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: none;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    text-align: left;
    cursor: pointer;
    min-width: 100%;

    @media (min-width: 768px) {
        margin-bottom: 20px;
        width: 342px;
        min-width: 342px;
    }
`;

export const EditProfilePhotoPromptButton = styled.button`
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    background: none;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 1px solid ${ColorTheme.Grey2.color};
    text-align: left;
    cursor: pointer;
    min-width: 223px;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding};
        width: 100%;
    }
`;

// Unidentified input?

export const EditProfilePhotoPromptInput = styled.input`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 0px;
    height: 0px;
    display: none;
`;

export const EditProfilePromptButtonTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const EditProfilePromptButtonSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    @media (min-width: 768px) {
        max-width: 240px;
    }
`;

//sharing has been hidden by Bill
export const EditProfileSocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    display: none;
`;

export const EditProfileSocialTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const EditProfileSocialSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-top: 8px;
`;

export const EditProfileSocialItemWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-top: 24px;
`;

export const EditProfileSocialIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 9px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 43px;
        width: 43px;
    }
`;

export const EditProfileSocialInput = styled.button<EditProfileSocialInputProps>`
    font-weight: ${TextTheme.sans_400.fontWeight};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.fontSize};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey1.color)};
    background: none;
    border: none;
    padding-bottom: 12px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: 100%;
    text-align: left;
    padding-left: 0;
    cursor: pointer;

    ::placeholder {
        font-weight: ${TextTheme.sans_300.fontWeight};
    }

    @media (min-width: 768px) {
        max-width: 250px;
    }
`;

// EditProfileSocialWrapper,
//     EditProfileSocialTitle,
//     EditProfileSocialSubtitle,
//     EditProfileSocialItemWrapper,
//     EditProfileSocialIcon,
//     EditProfileSocialInput,
