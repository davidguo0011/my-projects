import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Autocomplete from "react-google-autocomplete";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, GradientTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const HostingToolsContainer = styled.div`
    width: 100%;
    background-color: ${ColorTheme.Khaki.color};
    padding-top: 48px;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        padding-top: 80px;
        padding-bottom: 0px;
    }
`;

export const HostingToolsTitle = styled.p`
    padding: 0 24px;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1200_semi.fontSize};
        font-weight: ${TextTheme.sans_1200_semi.fontWeight};
        line-height: ${TextTheme.sans_1200_semi.lineHeight};
    }
`;

export const HostingToolsListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding} 0 ${SpacingTheme.spacing_400.padding};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_700.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_400.padding};
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1120px;
    }
`;

export const HostingToolsListItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        width: calc(50% - 22.5px);
    }
    @media (min-width: 1280px) {
        width: calc(33.33% - 30px);
    }
`;

export const HostingToolsListIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-bottom: 24px;
    background: none;
`;

export const HostingToolsListTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
    }
`;

export const HostingToolsListSubtitle = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        font-size: ${TallTextTheme.sans_text_400.fontSize};
        line-height: ${TallTextTheme.sans_text_400.lineHeight};
        font-weight: ${TallTextTheme.sans_text_400.fontWeight};
    }
`;

export const HostingToolsSeeMoreButton = styled.button`
    height: 48px;
    width: calc(100% - 48px);
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Black.color};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    background: none;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`;
