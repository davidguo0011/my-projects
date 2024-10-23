import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface PayoutPaymentButtonProps {
    respondNeeded: boolean;
}

export const PayoutWrapper = styled.div`
    margin: ${SpacingTheme.spacing_500.margin} ${SpacingTheme.spacing_400.margin};

    @media (min-width: 768px) {
        max-width: 1024px;
        margin: 0 32px;
        padding-top: 80px;
    }

    @media (min-width: 1024px) {
        margin: 0 auto;
        padding: ${SpacingTheme.spacing_800.padding} 0;
    }
`;

export const PayoutTitleWrapper = styled.div`
    width: calc(100 - 48px);
    /* margin: ${SpacingTheme.spacing_500.margin} ${SpacingTheme.spacing_400.margin} 0px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 32px;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${SpacingTheme.spacing_600.margin} 0px 0px;
        padding: 0;
    }
`;

export const PayoutTitle = styled.h1`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;

export const PayoutTitleBackButton = styled(Link)`
    background: none;
    border: none;
    /* margin-right: 24px; */
    height: 16px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const PayoutTitleBackIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`;

export const PayoutSubtitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
`;

export const PayoutDetailsWrapper = styled.div`
    margin: ${SpacingTheme.spacing_400.margin} 0;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${SpacingTheme.spacing_500.margin} 0px ${SpacingTheme.spacing_600.margin};
        grid-template-rows: 100%;
        grid-template-columns: calc(50% - 11px) calc(50% - 11px);
        gap: ${SpacingTheme.spacing_300.gap};
        box-shadow: none;
    }
`;

export const PayoutMenuWrapper = styled.div`
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
`;

interface PayoutMenuItemProps {
    selected: boolean;
}
export const PayoutItemWrapper = styled.div`
    position: relative;
`;
export const PayoutMenuItem = styled.button<PayoutMenuItemProps>`
    padding: 0;
    width: fit-content;
    padding-bottom: 16px;
    background: none;
    border: none;
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : `2px solid ${ColorTheme.White.color}`)};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
`;

export const PayoutDetailsPart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_350.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        margin: 0;
        padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_350.padding};
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;

export const PayoutDetailsTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;
`;

export const PayoutDetailsPrice = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    margin: 0;
    margin-top: 12px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;

export const PayoutDetailsDivider = styled.div`
    height: 1px;
    width: calc(100% - 48px);
    background: ${ColorTheme.Grey2.color};
    justify-self: center;
    align-self: flex-end;
    grid-column: 1/2;
    grid-row: 1/2;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const PayoutListMenuWrapper = styled.div`
    margin: ${SpacingTheme.spacing_200.margin} ${SpacingTheme.spacing_400.margin};
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    gap: ${SpacingTheme.spacing_500.gap};
    height: 40px;
`;

interface PayoutListMenuItemProps {
    selected: boolean;
}

export const PayoutListMenuItem = styled.p<PayoutListMenuItemProps>`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    padding-bottom: 8px;
    margin: 0;
    cursor: pointer;
`;

interface PayoutListMenuItemSelectedProps {
    selected: boolean;
}
export const PayoutListMenuItemSelected = styled.div<PayoutListMenuItemSelectedProps>`
    width: 100%;
    height: 3px;
    background: ${ColorTheme.Black.color};
    align-self: flex-end;
    transition: 0.3s;
    grid-column: ${(props) => (props.selected ? "1/2" : "2/3")};
    grid-row: 1/2;
`;

export const PayoutNoPayoutsYetWrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    height: 100vh;
`;

export const PayoutNoPayoutsYetTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const PayoutNoPayoutsYetSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
    max-width: 245px;
`;

export const PayoutDivider = styled.div`
    width: calc(100% - 48px);
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${SpacingTheme.spacing_500.margin} 0px 0px;
    }
`;

export const PayoutPaymentItem = styled.button`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    background: none;
    width: 100%;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    text-align: left;
`;

export const PayoutPaymentBookingRequestImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 9px;
    object-fit: cover;
`;

export const PayoutPaymentTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const PayoutPaymentTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;
    text-align: left;
`;

export const PayoutPaymentTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const PayoutPaymentButton = styled.div<PayoutPaymentButtonProps>`
    height: 32px;
    padding: 0 20px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    color: ${ColorTheme.White.color};
    border: none;
    background: ${(props) => (props.respondNeeded ? `${ColorTheme.Yellow.color}` : `${ColorTheme.Black.color}`)};
    justify-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    max-width: 82px;
`;

export const PayoutsMenuItemButtonArrow = styled.button`
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    box-shadow: 0px 1.5px 9px 1px rgba(0, 0, 0, 0.09);
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
`;

export const PayoutsMenuItemButtonIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

interface PayoutsMenuItemButtonProps {
    selected: boolean;
}
export const PayoutsMenuItemButton = styled.button<PayoutsMenuItemButtonProps>`
    padding: 0;
    background: ${(props) => (props.selected ? ColorTheme.Black.color : "none")};
    text-decoration: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    height: 32px;
    width: 32px;
    border-radius: 50%;
    line-height: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${(props) => (props.selected ? TextTheme.sans_300_bold.fontWeight : ButtonTheme.sans_button_100.fontWeight)};
    color: ${(props) => (props.selected ? ColorTheme.White.color : ColorTheme.Black.color)};
`;

export const PayoutsMenuItemText = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};

    width: fit-content;
    margin: 0 auto;
    margin-bottom: 180px;
`;

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 122px;

    .MuiPaginationItem-page {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        font-weight: 600;
    }

    .MuiPaginationItem-page:hover {
        background-color: ${ColorTheme.Grey5.color};
    }

    .MuiPaginationItem-page.Mui-selected {
        background-color: ${ColorTheme.Blue.color} !important;
        color: ${ColorTheme.White.color};
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const PaginationTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-top: 24px;
`;

export const ManagePaymentsPaymentPayButton = styled.div`
    background: none;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    text-decoration: none;
    border: none;
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    padding: 0 24px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
    margin-left: auto;
`;

export const ManagePaymentHeaderLinkIcon = styled.img`
    position: absolute;
    margin-top: 48px;
    width: 8px;
    height: 14px;
    align-self: flex-end;
    justify-self: center;
    object-fit: cover;
    transform: rotate(180deg);
`;
