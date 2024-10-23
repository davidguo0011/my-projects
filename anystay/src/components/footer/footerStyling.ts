import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ColorTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";
// Footer component styling

interface FooterProps {
    location: string;
}

export const Footer = styled.footer<FooterProps>`
    width: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    background: ${ColorTheme.White.color};
    padding-bottom: 88px;
    @media (min-width: 768px) {
        padding-bottom: 0;
        margin-bottom: ${(props) => (props.location.includes("/listing") ? "80px" : 0)};
        height: 366px;
        ${(props) => props.location === "/settings" && "padding-right: 32px;"};
        ${(props) => props.location === "/settings" && "padding-left: 32px;"};
        ${(props) => props.location === "/referral-page" && "padding: 0 max(80px, calc(100% - 1280px) / 2);"};
    }
    @media (min-width: 1024px) {
        ${(props) => props.location === "/settings" && "padding-right: max(32px, calc(100% - 1024px) / 2);"};
        ${(props) => props.location === "/settings" && "padding-left: max(32px, calc(100% - 1024px) / 2);"};
    }
    @media (max-width: 767px) {
        ${(props) => (props.location === "/settings" ? "background: none !important" : null)};
        ${(props) => (props.location.includes("/change-your-booking") ? "padding-bottom: 32px" : null)}
    }
`;

export const FooterWrapper = styled.div<FooterProps>`
    position: relative;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    .hidden {
        ${(props) => (props.location.includes("/change-your-booking") ? "display: none !important" : null)};
    }

    @media (max-width: 767px) {
        ${(props) => (props.location === "/settings" ? "flex-direction: column-reverse !important" : null)};
        ${(props) => (props.location === "/settings" ? "align-items: center !important" : null)};
        .hidden {
            ${(props) => (props.location === "/settings" || props.location.includes("/change-your-booking") ? "display: none !important" : null)};
        }
        .reverse {
            ${(props) => (props.location === "/settings" ? "flex-direction: column-reverse !important;display: flex;align-items: center;gap: ${SpacingTheme.spacing_300.gap};margin-top: 24px" : null)};
        }
        .reverse div {
            ${(props) => (props.location === "/settings" ? "margin-bottom: 0 !important" : null)};
        }
    }
    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 auto;
        ${(props) => (props.location === "/settings" || props.location === "/referral-page") && "margin: 0;"};
        padding: 0 32px;
        ${(props) => (props.location === "/settings" || props.location === "/referral-page" ? "padding: 0 !important" : null)};
    }
    @media (min-width: 1024px) {
        ${(props) => (props.location === "/settings" || props.location === "/referral-page" ? "max-width: 1280px !important" : null)};
        ${(props) => (props.location.includes("/list-your-place") ? "max-width: 1152px !important" : null)};
    }
    @media (min-width: 1280px) {
        padding: 0 80px;
        ${(props) => (props.location === "/dashboard" ? "max-width: 1280px !important; padding:0;" : null)};
        ${(props) => (props.location === "/edit-profile" ? "max-width: 1152px !important; padding:0;" : null)};
        ${(props) => (props.location.includes("/listing") ? "max-width: 1120px !important; padding:0;" : null)};
        ${(props) => (props.location.includes("/create-booking") || props.location.includes("/complete-booking") ? "max-width: 1056px !important; padding:0;" : null)};
        ${(props) => (props.location.includes("/host/profile") ? "max-width: 1152px !important; padding:0;" : null)};
        ${(props) => (props.location.includes("/list-your-place") ? "max-width: 1152px !important; padding:0;" : null)};
    }
    @media (min-width: 1440px) {
        ${(props) => (props.location.includes("/create-booking") || props.location.includes("/complete-booking") ? "max-width: 1240px !important; padding:0;" : null)};
    }
    @media (min-width: 1920px) {
        ${(props) => (props.location.includes("/create-booking") || props.location.includes("/complete-booking") ? "max-width: 1152px !important; padding:0;" : null)};
    }
`;

export const FooterHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    margin-top: 32px;
`;

export const FooterHeaderIcon = styled.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
    opacity: 50%;
`;

export const FooterHeaderText = styled.p`
    font-size: ${TextTheme.sans_200_bold.fontSize};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_200_bold.lineHeight};
    padding-right: 24px;
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300_bold.fontSize};
        line-height: ${TextTheme.sans_300_bold.lineHeight};
    }
`;

export const FooterLinkSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FooterDesktopMediaSection = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

export const FooterMobileMediaSection = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`;

export const FooterLinkLabel = styled.p`
    text-decoration: none;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;
export const FooterLinkMainLabel = styled.p`
    text-decoration: none;
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        width: 167px;
        margin-top: 48px;
        margin-bottom: 0;
    }
`;
export const FooterLinkWrapper = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const FooterLinkA = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const FooterLink = styled.p`
    text-decoration: none;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-top: 0px;
    margin-bottom: 16px;
`;

export const FooterDivider = styled.div`
    width: 100%;
    height: 0px;
    background: ${ColorTheme.Grey1.color};
    margin-top: 24px;
    @media (max-width: 767px) {
        margin-top: 16px;
        border-bottom: 1px solid ${ColorTheme.Grey2.color};
    }
`;

export const FooterCopyrightWrapper = styled.div`
    margin: 0;
    margin-top: 16px;
    /* margin-bottom: 8px; */
    @media (min-width: 768px) {
        width: 240px;
        margin-top: 16px;
    }
`;

export const FooterCopyrightText = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_200.fontSize};
        line-height: ${TextTheme.sans_200.lineHeight};
    }
`;

export const FooterTermsWrapper = styled.div`
    margin-bottom: 16px;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    @media (min-width: 768px) {
        margin-bottom: 4px;
    }
`;

export const FooterSocialTermsLinkWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: ${SpacingTheme.spacing_500.gap};
        height: 32px;
        margin-top: 200px;
        margin-bottom: 16px;
    }
    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        gap: ${SpacingTheme.spacing_500.gap};
        /* margin-left: auto; */
        margin-top: 24px;
        margin-bottom: 16px;
    }
`;

export const FooterTermsLink = styled(Link)`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    gap: ${SpacingTheme.spacing_300.gap};
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
`;

export const FooterSocialMediaWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 0px;
    height: 32px;
`;

export const FooterSocialMediaIcon = styled.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`;
