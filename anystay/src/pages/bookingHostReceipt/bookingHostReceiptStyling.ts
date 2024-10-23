import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const BookingHostReceiptContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${ColorTheme.White.color};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
`;

export const BookingHostReceiptWrapper = styled.div`
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0;
        max-width: 722px;
    }
`;

export const BookingHostReceiptTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
`;

export const BookingHostReceiptTitle = styled.p`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    margin: 0;
`;

export const BookingHostReceiptPrintButton = styled.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    border: 1px solid ${ColorTheme.Black.color};
    cursor: pointer;
`;

export const BookingHostReceiptSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-bottom: 32px;
`;

export const BookingHostNameLine = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`;

export const BookingHostAddressLine = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 32px;
`;

export const BookingHostReceiptPricingWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_500.padding} 0;
    height: 144px;
`;

export const BookingHostReceiptPricingTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    align-self: flex-start;
    grid-row: 1/2;
`;

export const BookingHostReceiptPricingPrice = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    align-self: center;
    grid-row: 1/2;
`;

export const BookingHostReceiptPricingSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    line-height: ${TextTheme.sans_300.lineHeight};
    align-self: flex-end;
    grid-row: 1/2;
`;
