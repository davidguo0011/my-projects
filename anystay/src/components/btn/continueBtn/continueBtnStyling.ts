import styled from "styled-components";
import { ButtonTheme, ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface continueBtn {
    background: string;
    isLoading: boolean;
}

export const Btn = styled.button<continueBtn>`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    position: relative;
    padding: 0 32px;
    background: ${(props) => {
        if (props.background === "red") return ColorTheme.Red.color;
        if (props.background === "blue") return ColorTheme.Blue.color;
        if (props.background === "black") return ColorTheme.Black.color;
        if (props.background === "grey") return ColorTheme.Grey1.color;
    }};
    background: ${(props) => props.disabled && ColorTheme.Grey1.color};
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
`;
