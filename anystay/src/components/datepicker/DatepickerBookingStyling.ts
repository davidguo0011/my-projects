import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const DatePickerSectionWrapper = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    bottom: 0;
    margin: 0;
    max-height: calc(600px + 10vh);
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    z-index: 102;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    flex-direction: column;

    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        padding: ${SpacingTheme.spacing_400.padding};
        margin: auto;
        border-radius: 14px;
    }
    @media (min-width: 1280px) {
        width: 800px;
    }
`;

export const DatePickerSectionTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_500.gap};
    justify-content: center;
`;

export const DatePickerTitleIconButton = styled.button`
    padding: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: flex-start;
    align-self: flex-start;
    background: none;
    border: none;
    cursor: pointer;
`;

export const DatePickerTitleIcon = styled.img`
    width: 16px;
    height: 16px;
`;

export const DatePickerWrapper = styled.div`
    padding-top: 24px;
    position: relative;
    width: 100%;
`;

interface DatePickerSectionTitleProps {
    selected: boolean;
}
export const DatePickerSectionTitle = styled.p<DatePickerSectionTitleProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${(props) => (props.selected ? "hsla(0, 0%, 15%, 1)" : "hsla(0, 0%, 41%, 1)")};
    margin: 0;
    padding-bottom: 4px;
`;

export const DatePickerSectionCalendarButtonWrapper = styled.div`
    position: relative;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        align-self: flex-end;
    }
`;

export const DatePickerSectionCalendarBackButton = styled.button`
    margin: 0;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: hsla(0, 0%, 15%, 1);
    padding-bottom: 4px;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
`;
