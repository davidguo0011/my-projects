import styled from "styled-components";
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ReviewStayContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        min-height: 100vh;
    }
`;

export const ReviewStayWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        max-width: 567px;
    }
    /* @media(min-width: 1280px) {
        margin-right: 90px;
    }
    @media(min-width: 1440px) {
        margin-right: 190px;
    } */
`;

interface ReviewStayTitleWrapperProps {
    pageIndex: number;
}
export const ReviewStayTitleWrapper = styled.div<ReviewStayTitleWrapperProps>`
    padding-top: 120px;
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    margin-bottom: ${(props) => (props.pageIndex === 0 ? "48px" : "24px")};

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 144px;
        margin-bottom: 12px !important;
    }
`;

export const ReviewStayTitle = styled.p`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};

    margin: 0;
    font-weight: ${TextTheme.sans_900_bold.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
    }
`;

export const ReviewMobileExitButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 100;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ReviewStayTitleIconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ReviewStayTitleIcon = styled.img`
    height: 18px;
    object-fit: cover;
`;

export const ReviewStaySubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    font-weight: ${TextTheme.sans_500.fontWeight};
    margin-bottom: 48px;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const ReviewStayQualityAttributeTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
    margin-bottom: 24px;
`;

export const ReviewStayQualityAttributeWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;

export const ReviewStayQualityAttributesWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 32px;
`;

export const ReviewStayQualityAttributeButton = styled.button`
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
`;

export const ReviewStayBodyInput = styled.textarea`
    width: 100%;
    height: 314px;
    margin-bottom: 12px;
    padding: ${SpacingTheme.spacing_300.padding};
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    resize: none;

    ::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
    @media (min-width: 768px) {
        height: 450px;
        width: 100%;
        margin-bottom: 16px;
    }
`;

export const ReviewStayInputCountWrapper = styled.div`
    display: flex;
`;

export const ReviewStayBodyInputSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const ReviewStayContentInputCount = styled.p`
    margin-left: auto;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
`;

export const IndividualEmailShareButton = styled(EmailShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualFacebookShareButton = styled(FacebookShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualTwitterShareButton = styled(TwitterShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualWhatsappShareButton = styled(WhatsappShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualShareButton = styled.div`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px;
`;

export const IndividualShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`;

export const IndividualShareButtonText = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};

    margin: 0;
`;

export const ReviewStayContentWrapper = styled.div`
    @media (max-width: 1200px) {
        padding: 0 24px;
    }
`;

export const ReviewStayBtnWrapper = styled.div`
    height: 80px;
    position: fixed;
    right: 32px;
    bottom: 32px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        left: unset;
        z-index: 100;
        margin-top: auto;
        right: 24px;
        bottom: 24px;
    }
`;
