import styled from "styled-components";
import { EmailShareButton, FacebookMessengerShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton, PinterestShareButton } from "react-share";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ReferralPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    padding: 0 24px;

    @media (min-width: 768px) {
        padding: 0 80px;
        margin-top: 80px;
    }
`;

export const ShareButtonandViewImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 48px;
`;

export const ShareButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 400px;
    }
    @media (min-width: 1024px) {
        margin-right: 80px;
    }
`;

export const PageTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1200_bold.fontSize};
        line-height: ${TextTheme.sans_1200_bold.lineHeight};
        font-weight: ${TextTheme.sans_1200_bold.fontWeight};
    }
`;

export const LinkContainer = styled.div`
    width: 100%;
    height: 86px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    border: 1px solid ${ColorTheme.Grey3.color};
    border-radius: 9px;

    background-color: ${ColorTheme.Grey5.color};
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
        width: 400px;
        height: 54px;
        justify-content: flex-start;
        border: 1px solid ${ColorTheme.Grey1.color};
        background-color: ${ColorTheme.White.color};
    }
`;

export const LinkInput = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`;

export const CopyButton = styled.button`
    display: none;

    @media (min-width: 768px) {
        display: block;
        position: absolute;
        height: 36px;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        background-color: ${ColorTheme.White.color};
        border: none;
        border-radius: 7px;

        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        font-weight: ${ButtonTheme.sans_button_200.fontWeight};
        text-decoration: underline;
        text-align: center;
        cursor: pointer;
    }
`;

export const ShareButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 192px);
    grid-template-rows: repeat(3, 54px);
    grid-gap: ${SpacingTheme.spacing_300.gap};

    background-color: ${ColorTheme.White.color};
    justify-content: center;
`;

export const ShareMessengerButton = styled(FacebookMessengerShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const ShareEmailButton = styled(EmailShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const ShareTwitterButton = styled(TwitterShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const ShareWhatsappButton = styled(WhatsappShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const ShareFacebookButton = styled(FacebookShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const SharePinterestButton = styled(PinterestShareButton)`
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const MobileShareButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileShareButton = styled(EmailShareButton)`
    width: 100%;
    height: 48px;
    background-color: ${ColorTheme.Black.color} !important;
    color: ${ColorTheme.White.color} !important;
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow} !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const MobileShareText = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin-top: 24px;
    text-decoration: underline;
`;

export const ShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`;

export const ShareButtonText = styled.div`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};

    @media (min-width: 768px) {
        color: ${ColorTheme.Black.color};
    }
`;

export const ViewImageWrapper = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: block;
        max-width: 800px;
        width: 100%;
    }
`;

export const ViewImage = styled.img`
    width: 100%;
    height: 508px;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;

export const ReferralDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${SpacingTheme.spacing_900.margin} auto;
    max-width: 1280px;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_800.margin} auto ${SpacingTheme.spacing_1000.margin};
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const ReferralDescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 64px;
    justify-content: center;

    @media (min-width: 1024px) {
        flex: 1;
        margin-bottom: 0;
        margin-right: 48px;
        &:last-child {
            margin-right: 0;
        }
    }
`;

export const ReferralDescriptionNumber = styled.div`
    font-size: ${TextTheme.sans_1200_semi.fontSize};
    line-height: ${TextTheme.sans_1200_semi.lineHeight};
    font-weight: ${TextTheme.sans_1200_semi.fontWeight};

    margin-right: 16px;
`;

export const ReferralDescriptionTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 26px;
    }
`;

export const ReferralDescriptionTitle = styled.div`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    color: ${ColorTheme.Black.color};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
    }
`;

export const ReferralDescriptionSubTitle = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-top: 8px;

    @media (min-width: 1024px) {
        font-size: ${TallTextTheme.sans_text_400.fontSize};
        line-height: ${TallTextTheme.sans_text_400.lineHeight};
        font-weight: ${TallTextTheme.sans_text_400.fontWeight};
        margin-top: 12px;
    }
`;

export const GetYourCodeBtn = styled.button`
    height: 48px;
    padding: 0 24px;
    background-color: ${ColorTheme.Black.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    color: ${ColorTheme.White.color};
    cursor: pointer;
    position: fixed;
    bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_200.gap};
    z-index: 1;

    @media (min-width: 768px) {
        bottom: 32px;
    }
`;

export const GetYourCodeBtnIcon = styled.svg`
    width: 16px;
    height: 16px;
`;

export const GetYourCodeBtnText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.White.color};
`;

export const PopupWrapper = styled.div`
    border-radius: 14px 14px 0 0;
    width: 100%;
    height: calc(100% - 12px);
    background-color: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 396px;
        margin: auto;
        padding: ${SpacingTheme.spacing_400.padding};
    }
`;

export const PopupTitleWrapper = styled.div`
    width: 100%;
    margin: 56px auto 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media (min-width: 768px) {
        width: 360px;
        margin: ${SpacingTheme.spacing_400.margin} auto ${SpacingTheme.spacing_500.margin};
    }
`;

export const PopupTitle = styled.p`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
`;

export const EmailInputWrapper = styled.div`
    width: 100%;
`;

export const EmailInput = styled.input`
    min-height: 50px;
    width: 100%;
    padding: 0;
    padding-left: 16px;
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 9px;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    &:focus {
    }

    @media (min-width: 768px) {
        height: 54px;
    }
`;

export const EmailInputSubtitle = styled.p`
    margin-top: 12px;
    font-size: ${TextTheme.sans_300.fontSize};
    text-align: left;
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
`;
