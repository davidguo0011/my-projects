import styled from "styled-components";
import { BorderRadiusTheme, ColorTheme, ShadowTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface ImgComponentWrapperProps {
    hasImage: boolean;
    width: string;
    desktopWidth?: string;
    height?: string;
    borderRadius?: string;
    hasBackground?: boolean;
    cursorStyle?: string;
    noShadow?: boolean;
}
export const ImgComponentWrapper = styled.div<ImgComponentWrapperProps>`
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : BorderRadiusTheme.radius_12.borderRadius)};
    width: ${(props) => props.width};
    aspect-ratio: 1/1;
    ${(props) => (props.height ? `height: ${props.height};` : null)}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    ${(props) => (!props.noShadow ? `box-shadow: ${ShadowTheme.shadow_100.boxShadow};` : null)}
    cursor: ${(props) => (props.cursorStyle ? props.cursorStyle : "pointer")};
    ${(props) => (props.hasBackground ? `background: ${ColorTheme.Grey5.color};` : null)}
    @media (min-width: 768px) {
        width: ${(props) => (props.desktopWidth ? props.desktopWidth : props.width)};
    }
`;
interface ImgProps {
    hasImage: boolean;
    iconSize?: string;
    borderRadius?: string;
}
export const Img = styled.img<ImgProps>`
    width: ${(props) => (props.hasImage ? "100%" : props.iconSize ? props.iconSize : "24px")};
    aspect-ratio: 1/1;
    height: ${(props) => (props.hasImage ? "100%" : props.iconSize ? props.iconSize : "24px")};
    border-radius: ${(props) => (!props.hasImage ? "none" : props.borderRadius ? props.borderRadius : "12px")};
    object-fit: cover;
`;
