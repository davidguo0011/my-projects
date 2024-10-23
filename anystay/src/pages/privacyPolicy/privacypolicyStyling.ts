import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const Footer = styled.footer`
    width: calc(100% - 96px);
    height: 354px;
    display: flex;
    margin: 0 24px;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_700.padding} ${SpacingTheme.spacing_400.padding};
    justify-content: space-between;
    padding-bottom: 32px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/Upload+Listing+Cover+2.jpg");
    background-size: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    // margin-bottom: 40px;
    @media (min-width: 700px) {
        margin: 0;
        height: 294px;
        // margin-bottom: 40px;
        padding: 85px;
        width: calc(100% - 170px);
    }
`;

export const FooterTitle = styled.p`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    color: ${ColorTheme.White.color};
    padding-right: 32px;
    margin: 0;
    max-width: 250px;
    text-align: left;
    @media (min-width: 700px) {
        font-size: ${TextTheme.sans_1200_bold.fontSize};
        line-height: ${TextTheme.sans_1200_bold.lineHeight};
        max-width: 460px;
    }
`;

export const FooterLink = styled.a`
    width: 100%;
    height: 55px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${TextTheme.sans_300_semi.fontSize};

    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    text-decoration: none;
    @media (min-width: 700px) {
        width: 300px;
        font-size: ${TextTheme.sans_400_semi.fontSize};
        align-self: flex-end;
    }
`;

export const ContactFormWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    text-align: left;
    @media (min-width: 700px) {
        margin: 0;
        width: calc(100% - 40px);
    }
    // @media(min-width: 1200px) {
    //     width: calc(50% - 64px);
    //     max-width: 470px;
    //     position: absolute;
    //     left: 45%;
    //     background: ${ColorTheme.White.color};
    //     border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    //     padding: ${SpacingTheme.spacing_500.padding} 40px;
    //     top: 0;
    //     margin-top: 160px;
    //     box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    // }
    @media (min-width: 700px) {
        margin-top: 0;
    }
`;

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    @media (min-width: 700px) {
        max-width: 100%;
        width: calc(100% - 40px);
        margin: 0 auto;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        padding: ${SpacingTheme.spacing_500.padding} 40px;
        margin: ${SpacingTheme.spacing_600.margin} auto;
    }
    @media (min-width: 1200px) {
        width: calc(50% - 64px);
        max-width: 470px;
        position: absolute;
        right: calc(50vw - 760px);
        margin-right: 171px;
        background: ${ColorTheme.White.color};
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        padding: ${SpacingTheme.spacing_500.padding} 40px;
        top: 0;
        margin-top: 190px;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;

export const ContactFormTitle = styled.h3`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    line-height: ${TextTheme.sans_600_bold.lineHeight};

    margin: 0;
    margin-bottom: 16px;
    @media (min-width: 700px) {
        font-size: ${TextTheme.sans_800_bold.fontSize};
        line-height: ${TextTheme.sans_800_bold.lineHeight};
        margin-bottom: 32px;
    }
`;

export const ContactFormSuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactFormSuccessImage = styled.img`
    width: 96px;
    height: 96px;
    object-fit: cover;
    margin-bottom: 48px;
    @media (min-width: 1200px) {
        width: 128px;
        height: 128px;
        margin-bottom: 96px;
    }
`;

export const ContactFormSuccessTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    margin: 0 auto;
    margin-bottom: 16px;
    text-align: center;
`;

export const ContactFormSuccessSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0 auto;
    margin-bottom: 16px;
    text-align: center;
    padding: 0 24px;
`;

export const ContactFormInputWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
`;

export const ContactFormLabel = styled.label`
    grid-row: 2/3;
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};

    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    @media (min-width: 700px) {
        margin-bottom: 32px;
    }
`;

export const SubFooter = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: ${SpacingTheme.spacing_400.gap};
    @media (min-width: 700px) {
        justify-content: flex-end;
        flex-direction: row;
        height: 80px;
    }
    @media (min-width: 1200px) {
        padding: 0;
    }
`;

export const FooterCopyright = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin-right: auto;
    @media (max-width: 700px) {
        display: none;
    }
`;

export const SubFooterLink = styled(Link)`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    margin: 0;
    @media (min-width: 700px) {
        margin-left: 32px;
        // display: none;
    }
`;

export const PrivacyPolicyHeroCard = styled.div`
    height: 200px;
    width: calc(100% - 48px);
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    margin: 0 24px;
    align-items: flex-end;
    height: 150px;
    @media (min-width: 768px) {
        width: calc(100% - 64px);
        height: 200px;
        margin: 0 80px;
    }
    @media (min-width: 1643px) {
        max-width: 1579px;
        /* margin: 0 auto; */
    }
`;

export const PrivacyPolicyHeroTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    padding-bottom: 25px;
    margin: 0;
    @media (min-width: 768px) {
        padding-bottom: 25px;
    }
`;

export const PrivacyPolicyContentWrapper = styled.div`
    padding: 0 24px;
    width: 100%;
    @media (min-width: 768px) {
        padding: 0;
        padding: 0 80px;
    }
`;

export const PrivacyPolicyContent = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};

    font-weight: ${TextTheme.sans_300.fontWeight};
    &strong {
        font-weight: ${TextTheme.sans_300_bold.fontWeight};
    }
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
        strong {
            // font-size: 24px !important;
            // line-height: 32px !important;
        }
    }
`;

export const PrivacyPolicyFooter = styled.div`
    margin: 64px 24px;
    width: calc(100% - 48px);
    height: 450px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/Upload+Listing+Cover+2.jpg");
    background-size: cover;
    margin-bottom: 90px;
    @media (min-width: 768px) {
        width: 100%;
        width: calc(100% - 64px);
        margin: 64px 32px;
        margin-bottom: 120px;
    }
    @media (min-width: 1643px) {
        max-width: 1579px;
        margin: 64px auto;
        margin-bottom: 120px;
    }
`;

export const PrivacyPolicyFooterTitle = styled.p`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    color: ${ColorTheme.White.color};
    margin: 0;
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 48px;
    @media (min-width: 768px) {
        padding: 85px;
        font-size: ${TextTheme.sans_1200_bold.fontSize};
        line-height: ${TextTheme.sans_1200_bold.lineHeight};
        max-width: 650px;
    }
`;
