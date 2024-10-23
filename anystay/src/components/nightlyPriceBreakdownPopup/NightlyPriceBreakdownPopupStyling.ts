import styled from "styled-components";
import { ButtonTheme, ColorTheme, TextTheme, ShadowTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";
export const Wrapper = styled.div`
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 100%;
    height: fit-content;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    padding: ${SpacingTheme.spacing_400.padding};
    gap: ${SpacingTheme.spacing_250.gap};

    @media (min-width: 768px) {
        width: 317px;
        left: unset;
        top: 0;
        margin-top: 28px;
        border-radius: 14px;
    }
`;
export const Text = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;
export const BreakdownContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Divider = styled.div`
    width: 100%;
    height: 20px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const SubText = styled.div`
    width: 100%;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-top: 20px;
    margin-bottom: 118px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const CloseWrapper = styled.div`
    width: 100%;
    height: 16px;
    padding-left: 24px;
    position: relative;
    margin-bottom: 24px;
    margin-top: -10px;
`;

export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    left: -7px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &:before {
        content: " ";
        position: absolute;
        left: 15px;
        height: 18px;
        width: 2.5px;
        background-color: black;
        transform: rotate(45deg);
    }
    &:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 18px;
        width: 2.5px;
        background-color: black;
        transform: rotate(-45deg);
    }
`;

export const CloseButton = styled.button`
    width: 100%;
    height: 48px;
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    align-items: center;
    justify-content: center;
    background-color: ${ColorTheme.Red.color};
    color: ${ColorTheme.White.color};
    border: none;
    border-radius: 9px;
`;
