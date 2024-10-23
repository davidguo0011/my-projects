import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Autocomplete from "react-google-autocomplete";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const HostLandingPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    @media (min-width: 768px) {
        margin-top: 80px;
    }
`;

export const HostLandingPageTitleWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 554px;
    /* margin-bottom: 24px; */
    margin-top: 64px;
    background: url("https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/HERO.png");
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
        height: 80vh;
        padding: 0;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const HostlandingPageContentWrapper = styled.div`
    padding: 0 24px;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        max-width: 1120px;
        margin: 0 auto;
    }
`;

export const HostLandingPageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 128px;
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`;

export const HostLandingPageTitle = styled.h1`
    font-size: ${TextTheme.sans_1100_semi.fontSize};
    line-height: ${TextTheme.sans_1100_semi.lineHeight};
    font-weight: ${TextTheme.sans_1100_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    text-align: center;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 60px;
        line-height: 68px;
    }
    @media (min-width: 1024px) {
        text-align: left;
    }
`;

export const HostLandingPageSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-top: 12px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700.fontSize};
        line-height: ${TextTheme.sans_700.lineHeight};
    }
`;

export const HostLandingPageButtonWrapper = styled.p`
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
`;

export const HostLandingPageContactTeamBtn = styled.button`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    text-decoration: underline;
    border: 0;
    background: transparent;
    cursor: pointer;
`;

export const HostLandingAutocompleteInputWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    max-width: 600px;
    background: ${ColorTheme.White.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        height: 60px;
        border: none;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;

export const HostLandingAutocompleteSearchIcon = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 16px;
    height: 16px;
    align-self: center;
    margin-left: 16px;
    object-fit: cover;

    @media (min-width: 768px) {
        margin-left: 20px;
    }
`;

export const HostLandingPageCTAButton = styled.button`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.Blue.color};
    border-radius: 9px;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    max-width: 600px;
    margin-top: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 60px;
        margin: 0 auto;
        margin-top: 24px;
    }
`;

export const HostLandingPageEarningsTitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-top: 48px;
    }
`;

export const HostLandingPageEarningsSubtitle = styled.p`
    font-size: ${TextTheme.sans_1100_bold.fontSize};
    line-height: ${TextTheme.sans_1100_bold.lineHeight};
    font-weight: ${TextTheme.sans_1100_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1300_bold.fontSize};
        line-height: ${TextTheme.sans_1300_bold.lineHeight};
    }
`;

export const HostLandingPageEarningsText = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0 auto;
    margin-bottom: 32px;
    text-align: center;

    span {
        font-weight: ${TextTheme.sans_300_bold.fontWeight};
        text-decoration: underline;
    }
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const HostLandingPageSliderContentWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const HostLandingPageEarningsSlider = styled(Slider)`
    margin-bottom: 48px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        max-width: 600px;
        margin-bottom: 64px;
    }

    @media (min-width: 1280px) {
    }

    .MuiSlider-rail {
        height: 8px;
        border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
        background: ${ColorTheme.Grey1.color};
    }
    .MuiSlider-track {
        height: 8px;
        border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
        background: ${GradientTheme.Red.background};
        border: none;
    }
    .MuiSlider-thumb {
        width: 32px;
        height: 32px;
        background: ${ColorTheme.White.color};
        box-shadow: 0px 1.3px 13px rgba(0, 0, 0, 0.1) !important;
    }
`;

export const HostLandingContentWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 24px;
    // padding-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 1120px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const HostLandingContentTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        padding: 0;
    }
`;

export const HostLandingContentTitleCTA = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    color: ${ColorTheme.White.color};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    padding: 0 24px;
    margin: 0;
    margin-top: 48px;
    grid-row: 1/2;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
        padding: 0;
        margin: 0 auto;
        margin-bottom: 24px;
        margin-top: 80px;
        width: fit-content;
        justify-self: center;
    }
`;

export const HostLandingContentSubtitle = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 48px;

    @media (min-width: 768px) {
        padding: 0;
        font-size: ${TallTextTheme.sans_text_400.fontSize};
        line-height: ${TallTextTheme.sans_text_400.lineHeight};
        font-weight: ${TallTextTheme.sans_text_400.fontWeight};       
    }

    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`;

export const HostLandingContentSubtitleCTA = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.White.color};
    padding: 0 24px;
    text-align: center;
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 24px;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        padding: 0;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
        margin: 0 auto;
        max-width: 1182px;
        margin-bottom: 85px;
    }
`;

export const HostLandingPageScrollContentTitle = styled.p`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1100_bold.fontSize};
        line-height: ${TextTheme.sans_1100_bold.lineHeight};
        margin-bottom: 64px;
    }
`;

export const HostLandingPageFAQContentTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    text-align: start;
    margin: 0 auto;
    padding-left: 24px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        padding: 0;
        margin-bottom: 32px;
        font-size: ${TextTheme.sans_1100_semi.fontSize};
        line-height: ${TextTheme.sans_1100_semi.lineHeight};
        font-weight: ${TextTheme.sans_1100_semi.fontWeight};
        display: flex;
        text-align: start;
        width: 600px;
        margin: 0 auto;
        margin-bottom: 64px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`;

export const FAQQuestionContainer = styled.div`
    padding: ${SpacingTheme.spacing_600.padding} 0 0;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding: ${SpacingTheme.spacing_800.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding};
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1120px;
    }
`;

export const HostLandingPageScrollContentWrapper = styled.div`
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 768px) {
        width: 100%;
        justify-content: space-between;
        gap: unset;
        max-width: 1120px;
        overflow-x: unset;
        margin: 0 auto;
        margin-bottom: 48px;
    }
    @media (min-width: 1280px) {
        padding: 0;
    }
    //hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const HostLandingPageScrollContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96px;
`;

export const HostLandingPageScrollContentCardImg = styled.img`
    background: none;
    height: 96px;
    width: 96px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    object-fit: cover;

    @media (min-width: 768px) {
        height: 64px;
        width: 64px;
    }

    @media (min-width: 1024px) {
        height: 96px;
        width: 96px;
    }
`;

export const HostLandingPageScrollContentCardTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    margin-top: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const HostLandingPageScrollWrapper = styled.div`
    padding: ${SpacingTheme.spacing_600.padding} 0px;
    background-color: ${ColorTheme.Accent.color};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_700.padding} 0px;
    }
`;
export const HostLandingPageScrollContentLearnMoreBtn = styled.a`
    margin: 64px auto 0 auto;
    height: 48px;
    border: 1px solid ${ColorTheme.Black.color};
    border-radius: 9px;
    text-decoration: none;
    display: block;
    width: fit-content;
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    @media (max-width: 767px) {
        display: none;
    }
`;

export const HostLandingPageFAQWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
`;

export const FAQQuestionDivider = styled.div`
    height: 1px;
    width: 90px;
    margin-bottom: 90px;
    background: ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        width: 120px;
        margin-bottom: 120px;
    }
`;

interface HostLandingPageFAQWrapperProps {
    index: number;
}
export const HostLandingPageFAQButton = styled.button<HostLandingPageFAQWrapperProps>`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        padding: ${(props) => (props.index === 0 ? "0 0 32px 0" : "32px 0")};
    }
`;

export const HostLandingPageFAQAnswer = styled.p`
    font-size: ${TallTextTheme.sans_text_400.fontSize};
    font-weight: ${TallTextTheme.sans_text_400.fontWeight};
    line-height: ${TallTextTheme.sans_text_400.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    padding-bottom: 32px;
    margin-top: -8px;
    max-width: 767px;
`;

interface HostLandingPageFAQButtonIconProps {
    rotated: boolean;
}
export const HostLandingPageFAQButtonIcon = styled.img<HostLandingPageFAQButtonIconProps>`
    width: 8px;
    height: 12px;
    transform: rotate(${(props) => (props.rotated ? "90deg" : "-90deg")});
    transition: 0.1s;
    object-fit: cover;
`;

export const FAQQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 24px;
    @media (min-width: 768px) {
        padding: 0;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
        margin: 0;
    }
`;

export const HostLandingComparisonTableWrapper = styled.div`
    width: 100%;
    background: ${ColorTheme.White.color};
`;

export const HostLandingComparisonTable = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: auto auto auto auto;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 1120px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const HostLandingComparisonTableDivider = styled.div`
    grid-column: 1/4;
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    align-self: flex-end;
`;

export const HostLandingComparisonTableText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    padding: ${SpacingTheme.spacing_500.padding} 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
    }
`;

export const HostLandingComparisonTableTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
        justify-self: flex-start;
        margin-top: -8px;
    }
`;

export const HostLandingContentImage = styled.img`
    width: calc(100% - 48px);
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: ${ColorTheme.Grey2.color};
    height: 380px;
    margin: 0 24px;
    justify-self: center;
    margin-bottom: 48px;
    max-width: 1182px;
`;

export const HostLandingContentCTAButton = styled.button`
    height: 55px;
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-bottom: 60px;
    background: none;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    border: 1px solid ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    max-width: 360px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-bottom: 100px;
    }
`;

export const HostLandingContentGrid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 1120px;
        gap: 0 48px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const HostLandingContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    justify-content: center;

    @media (min-width: 768px) {
        width: 352px;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }
`;

export const HostLandingCreateListingButton = styled.button`
    height: 48px;
    padding: 0 32px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    margin: 0 auto;
    margin-bottom: 64px;
    border: none;
    background: ${ColorTheme.Blue.color};
    border-radius: 9px;
    cursor: pointer;
`;

export const HostLandingComparisonTableLogo = styled.img`
    height: 18px;
    object-fit: cover;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        height: 32px;
        margin-top: -8px;
    }
`;

interface HostLandingPageMobileBtnWrapperProps {
    hide: boolean;
}
export const HostLandingPageMobileBtnWrapper = styled.div<HostLandingPageMobileBtnWrapperProps>`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    width: 100%;
    background: ${ColorTheme.White.color};
    z-index: 100;
    transform: ${(props) => (props.hide ? "none" : "translateY(100%)")};
    transition: transform 0.3s ease-in-out;
`;

export const HostLandingQuestionLink = styled.a`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
`;

export const HostLandingPlaceHolder = styled.img`
    text-align: center;
    justify-content: center;
    width: 100%;
    object-fit: cover;
    background: ${ColorTheme.Grey4.color};
    margin: 64px 0 0;
    height: 140px;

    @media (min-width: 768px) {
        height: 360px;
    }

    @media (min-width: 1200px) {
        max-width: 1120px;
        margin: ${SpacingTheme.spacing_900.margin} auto 0;
    }
`;

export const HostLandingComparisonTableSubtitle = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
    padding-top: 24px;
    justify-self: start;
    margin: 0 auto;
    width: 100%;
    overflow: wrap;

    @media (min-width: 768px) {
        max-width: 1120px;
    }
`;

interface continueBtn {
    background: string;
    isLoading: boolean;
}

export const CreateListingBtn = styled.button<continueBtn>`
    height: 48px;
    border-radius: 90px;
    width: 100%;
    min-width: 180px;
    position: relative;
    padding: 0 32px;
    background: ${(props) => {
        if (props.background === "red") return ColorTheme.Red.color;
        if (props.background === "blue") return ColorTheme.Blue.color;
        if (props.background === "black") return ColorTheme.Black.color;
        if (props.background === "grey") return ColorTheme.Grey1.color;
    }};
    background: ${(props) => props.disabled && ColorTheme.Grey1.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${(props) => (props.isLoading ? "transparent" : ColorTheme.White.color)};
    margin-top: auto;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
`;

export const HostLandingCreateListingIcon = styled.svg`
    width: 16px;
    height: 16x;
    margin: ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_250.margin} ${SpacingTheme.spacing_300.margin} 0;
`;
