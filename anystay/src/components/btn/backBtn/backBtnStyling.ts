import styled from "styled-components";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface BackBtnWrapperProps {
    hasBackground?: boolean;
    hasBorder?: boolean;
    desktopTop?: number | string;
    desktopLeft?: number | string;
    mobileTop?: number | string;
    mobileLeft?: number | string;
    disabled?: boolean;
    noneHover?: boolean;
}
interface BackBtnIconProps {
    iconType: "Arrow" | "Close" | "WhiteArrow";
}

export const BackBtnWrapper = styled.div<BackBtnWrapperProps>`
    position: ${(props) => (props.mobileLeft !== undefined || props.mobileTop !== undefined ? "absolute" : "unset")};
    ${(props) => props.mobileTop !== undefined && `top: ${typeof props.mobileTop === "number" ? `${props.mobileTop}px` : props.mobileTop};`}
    ${(props) => props.mobileLeft !== undefined && `left: ${typeof props.mobileLeft === "number" ? `${props.mobileLeft}px` : props.mobileLeft};`}
    display: flex;
    z-index: 1;
    @media (min-width: 768px) {
        position: ${(props) => (props.desktopTop !== undefined || props.desktopLeft !== undefined ? "absolute" : "unset")};
        ${(props) => props.desktopTop !== undefined && `top: ${typeof props.desktopTop === "number" ? `${props.desktopTop}px` : props.desktopTop};`}
        ${(props) => props.desktopLeft !== undefined && `left: ${typeof props.desktopLeft === "number" ? `${props.desktopLeft}px` : props.desktopLeft};`}
    }
`;

export const BtnWrapper = styled.button<BackBtnWrapperProps>`
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
    border-radius: 50%;
    background: transparent;
    position: relative;
    touch-action: manipulation;
    display: inline-block;
    ${(props) => props.disabled && `pointer-events: none;`}

    &::before {
        content: "";
        width: 36px;
        height: 36px;
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => (props.hasBackground ? `${ColorTheme.White.color}` : "none")};
        border: ${(props) => (props.hasBorder ? `1px solid ${ColorTheme.Grey1.color}` : "none")};
    }
    &:hover::before {
        background-color: ${(props) => (props.noneHover ? "none" : `${ColorTheme.Grey5.color}`)};
    }
`;

export const BackBtnIconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    position: relative;
`;
export const BackBtnIcon = styled.img<BackBtnIconProps>`
    height: ${(props) => (props.iconType === "Arrow" ? "16px" : "100%")};
    width: ${(props) => (props.iconType === "Arrow" ? "8px" : "100%")};
    object-fit: cover;
`;
