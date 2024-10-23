import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface BtnProps {
    buttonType: string;
}

export const Title = styled.p`
    margin-top: 40px;
    font-size: ${TextTheme.sans_800_bold.fontSize};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${TextTheme.sans_400.fontWeight};
    text-align: center;
`;
export const BackArrowWrapper = styled.div`
    width: 100%;
`;
export const BackArrow = styled.img`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    width: 90%;
    height: calc(100vh - 120px);
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        border-radius: 14px 14px 0 0;
        padding: ${SpacingTheme.spacing_400.padding};
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`;

export const Btn = styled.button<BtnProps>`
    cursor: pointer;
    height: 48px;
    background-color: ${(props) => (props.buttonType === "back" ? "transparent" : ColorTheme.Red.color)};
    border-radius: 9px;
    text-decoration: ${(props) => (props.buttonType === "back" ? "underline" : "none")};
    color: ${(props) => (props.buttonType === "back" ? "black" : "white")};
    border: none;
    width: ${(props) => (props.buttonType === "back" ? "" : "142px")};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    padding: 0 !important;

    @media (min-width: 768px) {
        width: ${(props) => (props.buttonType === "back" ? "50px" : "120px")};
        font-size: ${ButtonTheme.sans_button_200.fontSize};
    }
`;

export const AlertIcon = styled.img`
    width: 80px;
    height: 80px;
`;
