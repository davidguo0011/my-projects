import styled from "styled-components";
import { TextTheme, TallTextTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const OurPartnersComingSoon = styled.div`
    height: 24px;
    width: fit-content;
    padding: 0 12px;
    background: ${ColorTheme.White};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    color: ${ColorTheme.Grey.color};
    font-size: ${TextTheme.sans_300.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    @media (max-width: 767px) {
        display: none;
    }
`;

export const OurPartnersLogo = styled.img`
    height: 48px;
    width: 100%;
    margin-bottom: 16px;
    object-fit: contain;
`;

export const OurPartnersContent = styled.div`
    width: 100%;
    background-color: ${ColorTheme.White};
`;

export const OurPartnersContentDivider = styled.div`
    width: calc(100% - 48px);
    height: 1px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding: 0 24px;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 1072px;
    }
`;

export const OurPartnersContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding};
    background-color: ${ColorTheme.White};
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        gap: 0;
        padding: ${SpacingTheme.spacing_800.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_800.padding} ${SpacingTheme.spacing_400.padding};
    }
`;

export const OurPartnersTextHeader = styled.h2`
    margin: 0;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
    }
`;

export const OurPartnersText = styled.p`
    margin: 0;
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        font-size: ${TallTextTheme.sans_text_400.fontSize};
        line-height: ${TallTextTheme.sans_text_400.lineHeight};
        font-weight: ${TallTextTheme.sans_text_400.fontWeight};
        max-width: 487px;
    }
`;

export const OurPartnersItemWrapper = styled.div`
    display: flex;
    justify-content: start;
`;

export const OurPartnersItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${SpacingTheme.spacing_600.gap};

    @media (min-width: 768px) {
        padding-top: 16px;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const OurPartnersLogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const OurPartnersTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin-bottom: 48px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1200_semi.fontSize};
        font-weight: ${TextTheme.sans_1200_semi.fontWeight};
        line-height: ${TextTheme.sans_1200_semi.lineHeight};
    }
`;
