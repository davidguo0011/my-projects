import styled from "styled-components";
import { ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface cycleBtn {
    background: string;
    isLoading: boolean;
    size?: string;
}

export const Btn = styled.button<cycleBtn>`
    height: ${(props) => (props.size ? props.size : "80px")};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    width: ${(props) => (props.size ? props.size : "80px")};
    position: relative;
    background: ${(props) => {
        if (props.disabled) return ColorTheme.Grey1.color;
        if (props.background === "red") return ColorTheme.Red.color;
        if (props.background === "blue") return ColorTheme.Blue.color;
        if (props.background === "black") return ColorTheme.Black.color;
        if (props.background === "grey") return ColorTheme.Grey1.color;
        if (props.background === "white") return ColorTheme.White.color;
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${(props) => (props.isLoading ? "transparent" : ColorTheme.White.color)};
    margin-top: auto;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    &:hover {
        transform: ${(props) => (props.disabled ? "none" : "translateY(-5px)")};
        box-shadow: ${(props) => (props.disabled ? "1px 3px 12px 0px rgba(0, 0, 0, 0.1)" : "1px 3px 12px 0px rgba(0, 0, 0, 0.3)")};
    }

    &:active {
        transform: ${(props) => (props.disabled ? "none" : "translateY(0)")};
        box-shadow: ${(props) => (props.disabled ? "none" : "none")};
    }
`;
interface BtnArrowProps {
    iconSize?: string;
}
export const BtnArrow = styled.img<BtnArrowProps>`
    width: ${(props) => (props.iconSize ? props.iconSize : "40px")};
    display: flex;
    align-items: center;
    justify-content: center;
`;
