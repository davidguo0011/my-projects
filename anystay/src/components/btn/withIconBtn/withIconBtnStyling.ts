import styled from "styled-components";
import { ColorTheme, TextTheme, ShadowTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface WithIconBtnWrapperProps {
    backgroundColor?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    position?: string;
    center?: boolean;
}

export const WithIconBtnWrapper = styled.button<WithIconBtnWrapperProps>`
    position: ${(props) => (props.position ? props.position : "relative")};
    left: ${(props) => (props.left ? props.left : "auto")};
    right: ${(props) => (props.right ? props.right : "auto")};
    top: ${(props) => (props.top ? props.top : "auto")};
    bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : ColorTheme.Black.color)};
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_200.gap};
    padding: ${SpacingTheme.spacing_250.padding} ${SpacingTheme.spacing_350.padding};
    border-radius: 50px;
    border: none;
    z-index: 10;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    ${(props) => props.center && "transform: translate(-50%);"};
    transition: bottom 0.3s ease-in-out;
`;

export const IconWrapper = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ColorTheme.White.color};
`;
export const Icon = styled.img<{ svgColorInvert?: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props) => props.svgColorInvert && "filter: invert(1);"};
`;
export const BtnText = styled.p`
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
`;
