import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const GuestPickerGuestsWrapper = styled.div`
    min-height: 260px;
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
`;

export const GuestPickerGuestsTitleWrapper = styled.div`
    width: calc(100% - 48px);
    display: grid;
    margin: 0 24px;
    align-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        width: calc(100% - 48px);
        margin: 0 auto;
    }
`;

export const GuestPickerGuestsTitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
`;

export const GuestPickerGuestsTitle = styled.p`
    position: relative;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    text-align: center;
    margin: 0 auto;
`;

export const GuestPickerGuestsSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    max-width: 180px;
    text-align: center;
    margin: 0;
    margin-top: 12px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        margin-bottom: 16px;
    }

    strong {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;

export const GuestPickerRow = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_400.padding} 0 ${SpacingTheme.spacing_400.padding};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        border: none !important;
        padding: ${SpacingTheme.spacing_300.padding} 0 ${SpacingTheme.spacing_300.padding};
    }
`;

export const GuestPickerRowTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const GuestPickerRowTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const GuestPickerRowTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const GuestPickerButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 110px;
    justify-content: space-between;
`;

interface GuestPickerButtonProps {
    valid: boolean;
}
export const GuestPickerButton = styled.button<GuestPickerButtonProps>`
    height: 35px;
    width: 35px;
    border: 1px solid;
    border-color: ${(props) => (props.valid ? ColorTheme.Grey1.color : ColorTheme.Grey2.color)};
    background: none;
    border-radius: 50%;
    font-size: ${ButtonTheme.sans_button_300.fontSize};
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${(props) => (props.valid ? ColorTheme.Black.color : ColorTheme.Grey2.color)};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
`;

export const GuestPickerRowTextNotAllowed = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;
