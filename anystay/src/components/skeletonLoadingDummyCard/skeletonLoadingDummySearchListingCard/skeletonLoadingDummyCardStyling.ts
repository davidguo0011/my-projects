import styled from "styled-components";
import { TextTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const SearchListingResultCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        min-width: calc(50% - 12px);
        flex: 1;
    }
    @media (min-width: 1400px) {
        min-width: calc((100% - 48px) / 3);
        flex: 1;
    }
`;

export const SearchListingResultCardHome = styled.div`
    width: 50%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
        width: 33%;
    }
    @media (min-width: 768px) {
        width: 25%;
    }
    @media (min-width: 1440px) {
        width: 14%;
    }
`;
export const SearchListingResultCardImageWrapper = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background-color: ${ColorTheme.Grey2.color};
    aspect-ratio: 20/19;

    @media (min-width: 768px) {
        width: unset;
    }
`;
export const SearchListingResultTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SearchListingResultCardSubtitle = styled.div`
    width: 40%;
    height: 19px;
    margin-top: 12px;
    margin-bottom: 2px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const SearchListingResultCardTitle = styled.div`
    width: 20%;
    height: 18px;
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
    margin: 10px 0;
`;

export const SearchListingResultCardPriceWrapper = styled.div`
    width: 40%;
    height: 19px;
    background-color: ${ColorTheme.Grey2.color};
`;
export const SearchListingResultCardAttribute = styled.li`
    border: none;
    height: 20px;
    text-decoration: none;
    width: 50px;
    padding: 0 8px;
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

export const SearchListingResultCardDate = styled.div`
    height: 20px;
    margin-top: 2px;
    margin-bottom: 8px;
    width: 106px;
    background-color: ${ColorTheme.Grey2.color};
`;
