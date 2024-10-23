import styled from "styled-components";
import { ColorTheme, BorderRadiusTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const YourListingCardWrapper = styled.div`
    width: calc(50% - 12px);
    overflow: hidden;
    position: relative;
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    @media (min-width: 768px) {
        width: calc(33% - 16px);
    }

    @media (min-width: 1024px) {
        width: calc(25% - 18px);
    }

    @media (min-width: 1280px) {
        width: calc(20% - 19.2px);
    }
`;

export const YourListingCardImg = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    aspect-ratio: 1/1;
    background-color: ${ColorTheme.Grey3.color};
`;

export const YourListingCardTitle = styled.div`
    height: 20px;
    background-color: ${ColorTheme.Grey3.color};
    width: 50%;
    margin-top: 12px;
    margin-bottom: 4px;
`;

export const YourListingCardSubtitle = styled.div`
    width: 25%;
    height: 15px;
    background-color: ${ColorTheme.Grey3.color};
`;
