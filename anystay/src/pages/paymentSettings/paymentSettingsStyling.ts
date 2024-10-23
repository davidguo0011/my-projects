import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const PaymentSettingsWrapper = styled.div`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    /* overflow-y: auto; */
    padding-bottom: 128px;

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 80px;
        width: calc(100% - 64px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const PaymentSettingsDesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const PaymentSettingsDesktopMenu = styled.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    border: 1px solid ${ColorTheme.Grey2.color};

    @media (max-width: 1013px) {
        display: none;
    }
`;

export const PaymentSettingsTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    padding-top: 64px;

    @media (min-width: 768px) {
        position: relative;
        border: none;
        padding-top: 48px;
        justify-content: flex-start;
    }
`;

export const PaymentSettingsTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    line-height: ${TextTheme.sans_900_semi.lineHeight};
    justify-self: center;
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        justify-self: flex-start;
        padding-left: 24px;
    }
`;

export const PaymentSettingsContentWrapper = styled.div`
    display: flex;
`;

export const PaymentSettingsMenuWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    gap: ${SpacingTheme.spacing_400.gap};
    height: 40px;
`;

interface PaymentSettingsMenuItemProps {
    selected: boolean;
}
export const PaymentSettingsMenuItem = styled.button<PaymentSettingsMenuItemProps>`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    padding-bottom: 16px !important;
    margin: 0;
    background: none;
    border: none;
    border-bottom: ${(props) => (props.selected ? "2px solid black" : "2px solid transparent")};
    padding: 0;
    cursor: pointer;
`;

export const RecentTransactionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    margin-top: 48px;
    margin-bottom: 0px;

    //Temporarily hidden
    display: none;
`;

export const RecentTransactionsTitle = styled.div`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_600_bold.lineHeight};

    margin-bottom: 16px;
`;

export const InfinitScrollLoadingSpinner = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RecentTransactionsContent = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
`;
export const RecentTransactionsContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RecentTransactionEmptyTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
    margin-bottom: 12px;
`;

export const RecentTransactionEmptySubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
    margin-bottom: 90px;
    width: 180px;
`;

export const PaymentSettingsDesktopMenuIcon = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`;

export const PaymentSettingsDesktopMenuText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`;

export const PayoutPaymentLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const PaymentsMenuItemButtonIcon = styled.img`
    width: 8px;
    height: 12px;
    object-fit: cover;
`;

export const PaymentsIconButton = styled.div`
    padding: 0;
    border: none;
    background: none;
    margin-left: auto;
    cursor: pointer;
`;

export const PaymentSettingsUnavailableTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    line-height: ${TextTheme.sans_600_bold.lineHeight};

    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
`;

export const PaymentSettingsUnavailableSubtitle = styled.p`
    max-width: 210px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    margin: 0 auto;
    text-align: center;
`;

export const PaymentSettingsUnavailableIcon = styled.img`
    width: 64px;
    height: 64px;
    object-fit: cover;
    text-align: center;
    margin: 0 auto;
    margin-top: auto;
`;

export const PaymentSettingsUnavailableBackButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin: ${SpacingTheme.spacing_400.margin};
    margin-right: auto;
`;

export const PaymentSettingsUnavailableBackIcon = styled.img`
    height: 16px;
    object-fit: cover;
`;
