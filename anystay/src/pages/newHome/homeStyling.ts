import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
// Home component styling
export const HomeWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 146px;

    @media (min-width: 768px) {
        padding-top: 158px;
    }
`;
export const HomeFeedWrapper = styled.div`
    width: calc(100% - 48px);
    align-content: flex-start;
    margin: ${SpacingTheme.spacing_400.margin} auto;
    min-height: 100vh;
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    &::after {
        content: "";
        flex-grow: 999;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;
export const MobileHomeFeedWrapper = styled.div`
    width: calc(100% - 16px);
    margin: ${SpacingTheme.spacing_300.margin} auto ${SpacingTheme.spacing_400.margin};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const MobileTopSignUpWrapper = styled.div`
    width: 100%;
    height: 72px;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MobileTopSignUpTitleWrapper = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const MobileTopSignUpTitle = styled.div`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
`;

export const MobileTopSignUpSubtitle = styled.div`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const MobileTopSignUpBtn = styled.button`
    width: 81px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    background-color: ${ColorTheme.Black.color};
    color: ${ColorTheme.White.color};
    margin-left: auto;
    margin-right: 16px;
`;

export const MobileHomeFeedRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const MobileHomeFeedColumn = styled.div`
    max-width: calc(50% - 4px);
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
`;

// Home landing Styling
export const HomeLandingWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 233px;
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    padding: ${SpacingTheme.spacing_250.padding};
    background-color: ${ColorTheme.Yellow.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    gap: ${SpacingTheme.spacing_400.gap};
`;

export const HomeLandingImg = styled.img`
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    object-fit: cover;
`;
export const HomeLandingContent = styled.div``;

export const HomeLandingTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const HomeLandingTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    color: ${ColorTheme.White.color};
    text-align: left;
    margin-bottom: 32px;
    max-width: 220px;
    margin-right: auto;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1100_bold.fontSize};
        line-height: ${TextTheme.sans_1100_bold.lineHeight};
        font-weight: ${TextTheme.sans_1100_bold.fontWeight};
        max-width: 460px;
        margin-bottom: 0;
        // margin-left: 64px;
    }
`;

export const HomeLandingSubtitle = styled.h2`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    margin-top: 0;
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${ColorTheme.White.color};
    text-align: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const HomeInfoSectionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;

    @media (min-width: 1024px) {
        width: calc(100% - 160px);
        max-width: 1440px;
        display: grid;
        grid-template-rows: auto auto auto auto auto;
        grid-template-columns: 50% 50%;
        /* padding: 0 116px; */
        margin: 0 auto;
    }
`;

export const HomeInfoSectionTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
    margin-top: 64px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        margin-top: 128px;
    }
    @media (min-width: 1024px) {
        grid-column: 1/3;
        justify-self: center;
    }
`;

export const HomeInfoSectionSubtitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    text-align: center;
    margin: 0;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-bottom: 64px;
        align-self: center;
    }

    @media (min-width: 1024px) {
        grid-column: 1/3;
        justify-self: center;
    }
`;

export const HomeInfoSectionImageRight = styled.img`
    height: 255px;
    width: calc(100% - 48px);
    object-fit: cover;
    border-radius: 15px 0px 0px 15px;
    align-self: flex-end;
    margin-bottom: 80px;
    @media (min-width: 768px) {
        height: 255px;
        width: calc(100% - 116px);
        margin-bottom: 118px;
    }
    @media (min-width: 1024px) {
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        justify-self: flex-end;
        width: calc(100% - 16px);
    }
    @media (min-width: 1280px) {
        width: 630px;
    }
    @media (min-width: 1440px) {
        height: 242px;
        width: 740px;
        margin-bottom: 80px;
    }
    @media (min-width: 1920px) {
        width: 944px;
    }
`;

export const HomeInfoSectionImageLeft = styled.img`
    height: 255px;
    width: calc(100% - 48px);
    object-fit: cover;
    border-radius: 0px 15px 15px 0px;
    align-self: flex-start;
    margin-bottom: 80px;
    @media (min-width: 768px) {
        height: 255px;
        width: calc(100% - 116px);
        margin-bottom: 144px;
    }
    @media (min-width: 1024px) {
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        width: calc(100% - 16px);
    }
    @media (min-width: 1280px) {
        width: 630px;
    }
    @media (min-width: 1440px) {
        height: 242px;
        width: 740px;
    }
    @media (min-width: 1920px) {
        width: 944px;
    }
`;

export const HomeInfoSectionImageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
`;

interface HomeInfoSectionImageTitleProps {
    left: boolean;
}

export const HomeInfoSectionImageTitle = styled.p<HomeInfoSectionImageTitleProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 16px;
    margin-left: ${(props) => (props.left ? "48px" : "0px")};
    margin-right: ${(props) => (props.left ? "0px" : "48px")};
    align-self: ${(props) => (props.left ? "flex-start" : "flex-end")};
    text-align: ${(props) => (props.left ? "left" : "right")};
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        margin-left: ${(props) => (props.left ? "116px" : "0px")};
        margin-right: ${(props) => (props.left ? "0px" : "116px")};
    }
    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 16px;
    }
`;

interface HomeInfoSectionImageSubtitleProps {
    left: boolean;
}

export const HomeInfoSectionImageSubtitle = styled.p<HomeInfoSectionImageSubtitleProps>`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    margin: 0;
    margin-bottom: 16px;
    margin-left: ${(props) => (props.left ? "48px" : "0px")};
    margin-right: ${(props) => (props.left ? "0px" : "48px")};
    max-width: 230px;
    align-self: ${(props) => (props.left ? "flex-start" : "flex-end")};
    text-align: ${(props) => (props.left ? "left" : "right")};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1100_bold.fontSize};
        line-height: ${TextTheme.sans_1100_bold.lineHeight};
        max-width: 260px;
        margin-left: ${(props) => (props.left ? "116px" : "0px")};
        margin-right: ${(props) => (props.left ? "0px" : "116px")};
    }

    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 16px;
        max-width: 300px;
    }

    @media (min-width: 1440px) {
    }

    @media (min-width: 1920px) {
        max-width: 360px;
        font-size: ${TextTheme.sans_1100_bold.fontSize};
        line-height: ${TextTheme.sans_1100_bold.lineHeight};
    }
`;

interface HomeInfoSectionImageTextProps {
    left: boolean;
}
export const HomeInfoSectionImageText = styled.p<HomeInfoSectionImageTextProps>`
    font-size: ${TextTheme.sans_600.fontSize};
    font-weight: ${TextTheme.sans_600.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_600.lineHeight};
    margin: 0;
    margin-bottom: 80px;
    margin-left: ${(props) => (props.left ? "48px" : "0px")};
    margin-right: ${(props) => (props.left ? "0px" : "48px")};
    align-self: ${(props) => (props.left ? "flex-start" : "flex-end")};
    text-align: ${(props) => (props.left ? "left" : "right")};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_800.fontSize};
        line-height: ${TextTheme.sans_800.lineHeight};
        max-width: 270px;
        margin-left: ${(props) => (props.left ? "116px" : "0px")};
        margin-right: ${(props) => (props.left ? "0px" : "116px")};
        margin-bottom: 118px;
    }

    @media (min-width: 1024px) {
        margin: 0;
    }

    @media (min-width: 1440px) {
        margin-bottom: 80px;
    }
`;

// Home list your home Styling
export const ListYourHomeWrapper = styled(Link)`
    position: relative;
    text-decoration: none;
    width: calc(100% - 48px);
    height: 450px;
    margin: 64px auto;
    margin-top: 54px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: grey;
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    gap: 36px;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Bottom+Hero");
    background-size: cover;
    background-position: center;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 85px;
        width: calc(100% - 64px);
    }
    @media (min-width: 1643px) {
        max-width: 1579px;
        margin: 64px auto;
        margin-top: 54px;
    }
    @media (min-width: 1920px) {
        max-width: 1760px;
        margin: 64px auto;
        margin-top: 54px;
    }
`;
export const ListYourHomeTitle = styled.h4`
    width: 100%;
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    color: ${ColorTheme.White.color};
    text-align: left;
    margin: 0;
    margin-top: 40px;
    max-width: 360px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1100_bold.fontSize};
        line-height: ${TextTheme.sans_1100_bold.lineHeight};
        font-weight: ${TextTheme.sans_1100_bold.fontWeight};
        max-width: 275px;
        margin: 0;
    }
`;

// Search bar Styling
export const SearchBarWrapper = styled.div`
    margin-top: 8px;
    width: calc(100% - 16px);
    max-width: 575px;
    height: 55px;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);
`;

export const SearchBarPlaceholder = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    margin-left: 16px;
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const SearchBarButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    background: ${ColorTheme.Red.color};
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    width: 75px;
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
`;

export const SearchBarInputAndButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
`;

export const SearchBarClearButton = styled.button`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${ColorTheme.Grey3.color};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1/2;
    grid-column: 1/2;
    border: none;
    align-self: center;
    margin-left: auto;
    margin-right: 24px;
    cursor: pointer;
`;

export const DesktopDatepickerWrapper = styled(motion.div)`
    position: absolute;
    z-index: 4;
    margin: auto;
    left: 0;
    right: 0;
    margin-left: 50%;
    margin-right: auto;
    top: calc(50% - 240px);
    width: 400px;
    padding: 0 32px;
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    min-height: 400px;

    @media (min-width: 1280px) {
        width: 800px;
        margin-left: auto;
    }
`;

export const DesktopDatepickerTitleWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: ${SpacingTheme.spacing_500.gap};
`;

export const DesktopDatepickerTitleDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: ${SpacingTheme.spacing_200.gap};
`;

interface DesktopDatepickerTitleDateProps {
    selected: boolean;
}

export const DesktopDatepickerTitleDate = styled.p<DesktopDatepickerTitleDateProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${(props) => (props.selected ? "hsla(0, 0%, 15%, 1)" : "hsla(0, 0%, 41%, 1)")};
    margin: 0;
    transition: 0.3s;
`;

interface DesktopDatepickerTitleDashProps {
    selected: boolean;
}
export const DesktopDatepickerTitleDash = styled.div<DesktopDatepickerTitleDashProps>`
    background: hsla(0, 0%, 15%, 1);
    width: 20px;
    height: 3px;
    opacity: ${(props) => (props.selected ? 1 : 0)};
    transition: 0.3s;
`;

export const PrivacyPolicyPopupWrapper = styled(motion.div)`
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    position: fixed;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    z-index: 10;
    height: fit-content;

    @media (min-width: 768px) {
        box-shadow: ${ShadowTheme.shadow_300.boxShadow};
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 30vh;
        border-radius: 25px;
    }
`;

export const PrivacyPolicyContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding};
    }
`;

export const PrivacyPolicyPopupTitleWrapper = styled.div`
    width: 100%;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    display: flex;
`;

export const PrivacyPolicyPopupTitleIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    border-radius: 50%;
    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
    }
`;

export const PrivacyPolicyPopupTitleText = styled.p`
    font-size: ${TextTheme.sans_400_bold.fontSize};
    line-height: ${TextTheme.sans_400_bold.lineHeight};
    font-weight: ${TextTheme.sans_400_bold.fontWeight};
    color: hsla(0, 0%, 15%, 1);
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_bold.fontSize};
    }
`;

export const PrivacyPolicyPopupText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: hsla(0, 0%, 15%, 1);
    margin-bottom: 24px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        margin-bottom: 32px;
    }
`;

export const PrivacyPolicyPopupAgreeButton = styled.button`
    height: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    border: none;
    border-radius: 9px;
    background: ${ColorTheme.Red.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 32px;
        margin-bottom: 16px;
    }
`;

export const PrivacyPolicyPopupRejectButton = styled.button`
    height: 48px;
    width: 100%;
    border: 1px solid hsla(0, 0%, 15%, 1);
    border-radius: 9px;
    background: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: hsla(0, 0%, 15%, 1);
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const QRCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        min-width: 600px;
        margin-bottom: 144px;
    }
`;

export const QRCodeWrapper = styled(Link)`
    background: ${ColorTheme.White.color};
    border: none;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    margin: 0;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 192px;
        width: 192px;
    }
    @media (min-width: 1024px) {
        margin-right: 80px;
        margin-bottom: 0;
    }
`;

export const DesktopNavbarSearchMenuRecommendedCitiesWrapper = styled(motion.div)`
    display: grid;
    gap: 22px;

    position: absolute;
    top: calc(50% - 240px);
    right: 0;
    left: 0;
    z-index: 4;
    padding: ${SpacingTheme.spacing_500.padding};
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
`;
interface DesktopNavbarSearchMenuRecommendedCityProps {
    url: string;
}

export const DesktopNavbarSearchMenuRecommendedCity = styled.button<DesktopNavbarSearchMenuRecommendedCityProps>`
    background: blue;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    padding: ${SpacingTheme.spacing_600.padding} 0;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_400_bold.fontWeight};
    cursor: pointer;
`;

export const DesktopSearchTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    align-self: flex-start !important;
    margin-left: 24px;
    margin-top: 16vh;
    margin-right: auto;
    grid-row: 1/2;
    grid-column: 1/2;

    @media (min-width: 768px) {
        margin-left: 80px;
        margin-top: calc(50vh / 2);
    }
`;
export const HomeLandingContentHeader = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`;
export const HomeLandingContentMainTitle = styled.p`
    font-size: ${TextTheme.sans_1200_bold.fontSize};
    line-height: ${TextTheme.sans_1200_bold.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_1200_bold.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`;
export const HomeLandingContentSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.White.color};
    margin: 0;
    margin-bottom: 24px;
`;

export const DesktopSearchTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 20px;
`;

export const HomeLandingContentBtn = styled.button`
    width: 171px;
    height: 48px;
    color: ${ColorTheme.White.color};
    border: 2px solid ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
`;
