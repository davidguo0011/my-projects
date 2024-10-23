import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface ManagePaymentsHeaderStatusProps {
    confirmed: boolean;
    declined: boolean;
}
interface ManagePaymentsContentMenuItemProps {
    selected: boolean;
}
interface ManagePaymentsActionButtonProps {
    selected: boolean;
}
interface ManagePaymentsRefundAmountInputSubtitleProps {
    invalid: boolean;
}

export const ManagePaymentsWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 600px 1fr;
        grid-template-rows: 84px 175px 140px auto;
    }
`;

export const ManagePaymentsTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding-top: 64px;
    padding-bottom: 24px;

    @media (min-width: 768px) {
        grid-column: 1/2;
        border-top: none;
        padding: 0;
        flex-direction: column-reverse;
        align-items: unset;
        justify-content: center;
    }
`;

export const ManagePaymentsTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`;

export const ManagePaymentsTitleBackButton = styled.button`
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
`;

export const ManagePaymentsSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
`;

export const ManagePaymentsTitleIcon = styled.img`
    position: relative;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
`;

export const ManagePaymentsHeaderWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    height: 132px;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    margin: 0 24px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        grid-column: 1/2;
        padding: ${SpacingTheme.spacing_350.padding} 0;
        height: 152px;
    }
`;

export const ManagePaymentsHeaderImage = styled.img`
    border-radius: 9px;
    height: 100px;
    width: 116px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 138px;
        height: 110px;
    }
`;

export const ManagePaymentsHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ManagePaymentsHeaderTypeOfPlace = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
`;

export const ManagePaymentsHeaderTitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 240px;
    width: calc(100% - 24px);
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

export const ManagePaymentsHeaderStatus = styled.p<ManagePaymentsHeaderStatusProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${(props) => (props.confirmed || props.declined ? ColorTheme.Black.color : ColorTheme.Yellow.color)};
    margin: 0;
    margin-top: auto;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ManagePaymentsContentWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;

    grid-column: 1/2;
    @media (min-width: 768px) {
        padding: 0 32px;
    }
`;

export const ManagePaymentsContentMenuWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const ManagePaymentsContentMenuItem = styled.button<ManagePaymentsContentMenuItemProps>`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    transition: 0.2s;
    padding-bottom: ${(props) => (props.selected ? "9px" : "12px")};
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Red.color}` : "none")};
    cursor: pointer;
`;

export const ManagePaymentsPaymentItemWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    border: none;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: 100%;
    background: none;
    box-shadow: none;
    cursor: pointer;
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
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    cursor: pointer;
`;

export const ManagePaymentsPaymentTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const ManagePaymentsPaymentTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    text-align: left;
`;

export const ManagePaymentsPaymentSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    width: fit-content;
`;

export const ManagePaymentsActionButtonWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    margin: 0 24px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        grid-column: 1/2;
        padding: 0;
    }
`;

export const ManagePaymentsActionButton = styled.button<ManagePaymentsActionButtonProps>`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    border: none;
    background: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey1.color)};
    border-radius: 9px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 48px;
    }
`;

export const ManagePaymentsMapWrapper = styled.div`
    min-height: calc(100vh - 80px);
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/5;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ManagePaymentsPayPopupWrapper = styled.div`
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        height: fit-content;
        width: 560px;
        border-radius: 14px;
        padding: ${SpacingTheme.spacing_400.padding};
    }
`;

export const ManagePaymentsPayPopupTitleWrapper = styled.div`
    height: 65px;
    width: calc(100% - 48px);
    margin: 0 auto;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: calc(100% - 88px);
        height: 75px;
    }
`;

export const ManagePaymentsPayPopupTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ManagePaymentsFooterWrapper = styled.div`
    width: 100%;
    margin-top: auto;

    @media (min-width: 768px) {
        border: none;
    }
`;

export const ManagePaymentsFooterButton = styled.button`
    width: 100%;
    height: 48px;
    background: ${ColorTheme.Red.color};
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    border: none;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    cursor: pointer;

    @media (min-width: 768px) {
        width: 105px;
        margin-left: auto;
    }
`;

export const ManagePaymentsPayPopupContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ManagePaymentsPayPopupContentIcon = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-bottom: 48px;
    margin-top: 96px;
    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
        margin-bottom: 64px;
    }
`;

export const ManagePaymentsPayPopupContentTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_800_bold.fontSize};
        line-height: ${TextTheme.sans_800_bold.lineHeight};
    }
`;

export const ManagePaymentsPayPopupContentSubtitle = styled.p`
    max-width: 260px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    text-align: center;
    margin: 0;
    margin-top: 24px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
        max-width: 290px;
        margin-top: 32px;
    }
`;

export const ManagePaymentsRefundBackButtonIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`;

export const ManagePaymentsRefundTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 246px;
    margin: ${SpacingTheme.spacing_300.margin} auto 0;
    text-align: center;
`;

export const ManagePaymentsRefundTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 8px;
`;

export const ManagePaymentsRefundSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 32px;
`;

export const ManagePaymentsRefundOptionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ManagePaymentsRefundOption = styled.button`
    padding: ${SpacingTheme.spacing_400.padding} 0px;
    display: flex;
    align-items: center;
    border: none;
    text-align: left;
    background: none;
    cursor: pointer;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding} 0px;
    }
`;

export const ManagePaymentsRefundOptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const ManagePaymentsRefundOptionTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const ManagePaymentsRefundOptionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const ManagePaymentsRefundInput = styled.textarea`
    height: 240px;
    border-radius: 10px;
    padding: ${SpacingTheme.spacing_300.padding};
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    border: 1px solid ${ColorTheme.Grey1.color};
    width: 100%;
    outline: none;
    resize: none;
    margin-bottom: 48px;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const ManagePaymentsRefundAmountInput = styled.input`
    height: 110px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    padding: ${SpacingTheme.spacing_300.padding};
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    border: 1px solid ${ColorTheme.Grey1.color};
    width: 100%;
    outline: none;
    display: flex;
    align-items: center;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const ManagePaymentsRefundAmountInputSubtitle = styled.p<ManagePaymentsRefundAmountInputSubtitleProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Red1.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-top: 12px;
    margin-bottom: 96px;
    opacity: ${(props) => (props.invalid ? 1 : 0)};
`;

export const ManagePaymentsFooterRequestButton = styled.button`
    padding: 0 32px;
    height: 48px;
    background: ${ColorTheme.Red.color};
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    border: none;
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    cursor: pointer;
`;

export const ManagePaymentsFooterCancelButton = styled.button`
    background: none;
    padding: 0;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
    border: none;
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_300.fontSize};
        line-height: ${ButtonTheme.sans_button_300.lineHeight};
    }
`;

export const ManagePaymentsRefundSentTitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin-top: 8px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
    }
`;

export const ManagePaymentsRefundSentSubtitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin-top: 0px;
    margin-bottom: 32px;
`;

export const ManagePaymentsDivider = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
`;

export const PaymentDetailsHeaderLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;
export const RefundUnavailablePopupWrapper = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    min-height: 632px;
    background: ${ColorTheme.White.color};
    border-radius: 25px 25px 0px 0px;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 102;
    @media (min-width: 768px) {
        height: 622px;
        width: 560px;
        border-radius: 14px;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        bottom: 0;
        top: 0;
    }
`;

export const RefundUnavailablePopupSupportButton = styled.a`
    padding: 0;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
`;

export const RefundUnavailablePopupButton = styled.a`
    padding: 0;
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    height: 50px;
    width: 156px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Red.color};
`;

export const RefundUnavailablePopupButtonWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RefundUnavailablePopupIcon = styled.img`
    width: 64px;
    height: 64px;
    margin-top: 148px;
    object-fit: cover;
    margin-bottom: 48px;
`;

export const RefundUnavailablePopupTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
`;

export const RefundUnavailablePopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0 auto;
    max-width: 170px;
    margin-top: 16px;
    text-align: center;
`;
