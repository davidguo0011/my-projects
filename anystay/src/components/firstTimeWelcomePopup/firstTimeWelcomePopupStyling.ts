import styled from "styled-components";
import { ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";
import { Link } from "react-router-dom";

interface FirstTimeWelcomePopupProps {
    imgLoading: boolean;
}

// Home welcome popup styling
export const FirstTimeWelcomePopupWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FirstTimeWelcomePopupContentWrapper = styled.div`
    width: 640px;
    height: 480px;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 767px) {
        width: 400px;
    }
`;

export const FirstTimeWelcomePopupCloseButton = styled.div`
    position: absolute;
    height: 36px;
    width: 36px;
    top: 14px;
    left: 14px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    border: none;
    margin: 0;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const FirstTimeWelcomePopupImageWrapper = styled.div`
    aspect-ratio: 5 / 2;
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} 12px 0 0;
    background-color: ${ColorTheme.Grey2.color};
    max-height: 260px;
`;

export const FirstTimeWelcomePopupImage = styled.img<FirstTimeWelcomePopupProps>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${(props) => (props.imgLoading ? "none" : "unset")};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} 12px 0 0;
`;

export const FirstTimeWelcomePopupTextWrapper = styled.div`
    height: 224px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: ${SpacingTheme.spacing_500.gap};
    padding: ${SpacingTheme.spacing_500.padding};
`;

export const FirstTimeWelcomePopupTitle = styled.h1`
    width: 100%;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 34px;
    }
`;

export const FirstTimeWelcomePopupButton = styled(Link)`
    width: 100%;
    min-height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Black.color};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    font-size: 16px;
    font-weight: 575;
    line-height: 20px;
    text-align: center;
    padding-top: 14px;
    &:hover {
        background: ${ColorTheme.Black.color};
    }
`;

export const FirstTimeWelcomePopupButtonIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;
