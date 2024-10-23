import styled from "styled-components";
import { ColorTheme, TextTheme, BorderRadiusTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const AmenitiesWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const AmenitiesTitle = styled.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        font-weight: ${TextTheme.sans_1000_bold.fontWeight};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-top: 0;
        display: flex;
        align-items: center;
    }
`;

export const AmenitiesSubtitle = styled.p`
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 32px;
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
    }
`;

export const AmenityCategoryWrapper = styled.div`
    padding: 0 1px;
    width: fit-content;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap} 12px;
    flex-wrap: wrap;
    overflow: visible;
    padding-bottom: 10px;
    margin-top: 12px;
    @media (min-width: 768px) {
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const AmenitiesCheckboxInputLabel = styled.label`
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    border: 1px solid ${ColorTheme.Grey1.color};
    display: flex;
    flex-direction: row;
    gap: ${SpacingTheme.spacing_200.gap};
    align-items: center;
    cursor: pointer;
    padding: 10px 16px;
`;

export const AmenitiesCheckboxInput = styled.input`
    display: none;
`;

export const AmenitiesCheckboxInputImage = styled.img`
    height: 16px;
    width: 16px;
`;

export const AmenitiesCheckboxInputTitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    text-align: center;
`;
