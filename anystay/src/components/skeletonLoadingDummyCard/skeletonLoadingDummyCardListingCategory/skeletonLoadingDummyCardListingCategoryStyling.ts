import styled from "styled-components";
import { TextTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const SearchListingResultCard = styled.div`
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SearchListingResultCardImageWrapper = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background-color: ${ColorTheme.Grey2.color};
    aspect-ratio: 1/1;
`;

export const SearchListingResultTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SearchListingResultCardSubtitle = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 16px;
    margin-bottom: 8px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const SearchListingResultCardTitle = styled.div`
    width: 100%;
    height: 20px;
    margin: 0;
    background-color: ${ColorTheme.Grey2.color};
`;

export const SearchListingResultCardAttributeWrapper = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    gap: ${SpacingTheme.spacing_200.gap};
    margin: ${SpacingTheme.spacing_250.margin} 0;
`;

export const SearchListingResultCardPriceWrapper = styled.div`
    width: 40%;
    height: 20px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const SearchListingResultCardAttribute = styled.li`
    border: none;
    height: 20px;
    text-decoration: none;
    width: 50px;
    padding: 0 12px;
    border-radius: 9px;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ColorTheme.Grey2.color};
`;

export const DummyImg = styled.div`
    width: 100%;
    height: 100%;
`;
