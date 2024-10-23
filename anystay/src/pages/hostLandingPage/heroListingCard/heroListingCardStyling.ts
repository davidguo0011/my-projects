import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Autocomplete from "react-google-autocomplete";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const HeroListingCardContainer = styled.div`
    position: relative;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    margin-top: 40px;
    margin-left: auto;
    height: fit-content;
    @media (max-width: 1023px) {
        display: none;
    }
    @media (min-width: 1024px) {
        width: 400px;
        max-height: 566px;
    }

    @media (min-width: 1280px) {
        width: 480px;
        /* min-width: 400px;
        max-width: 480px; */
        max-height: 566px;
    }
`;

export const HeroListingCardImage = styled.img`
    width: calc(100% - 32px);
    margin: ${SpacingTheme.spacing_300.margin};
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    aspect-ratio: 20/19;
`;

export const HeroListingCardTitle = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    margin: 0;
    padding-left: 16px;
    margin-bottom: 2px;
`;

export const HeroListingCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    padding-left: 16px;
    margin-bottom: 2px;
`;

export const HeroListingCardPrice = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    margin: 0;
    padding-left: 16px;
    margin-top: 4px;
    text-decoration: underline;
    margin-bottom: 16px;
`;
