import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../../globaStyledComponents/globalStyledComponentsStyling";

export const GuestsPopupWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 840px;
    display: flex;
    flex-direction: column;
`;

export const GuestsPopupWrapperBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    width: 352px;
    height: 304px;
    padding: ${SpacingTheme.spacing_500.padding};
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const GuestItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextHeader = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const TextDescription = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-top: 4px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
`;

export const GuestNumBtn = styled.button`
    height: 34px;
    width: 34px;
    border: 1px solid ${ColorTheme.Grey1.color};
    background: none;
    border-radius: 50%;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
`;

export const GuestNumValue = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;
