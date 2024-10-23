import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface PaymentDetailsButtonProps {
    available: boolean;
}
interface PaymentDetailsPaymentsMenuItemProps {
    selected: boolean;
}
interface PaymentDetailsPaymentTextWrapperProps {
    secondRow?: boolean;
}

export const PaymentDetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin-top: 80px;
    }
`;

export const PaymentDetailsTitleWrapper = styled.div`
    padding-top: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 64px;
    padding-bottom: 32px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: calc(100% - 64px);
        max-width: 704px;
    }
`;

export const PaymentDetailsTitleIcon = styled.img`
    display: flex;
    align-items: center;
    height: 16px;
    object-fit: cover;
    margin-right: 24px;
`;

export const PaymentDetailsTitleBackButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

export const PaymentDetailsTitle = styled.p`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        margin-left: 24px;
    }
`;

export const PaymentDetailsSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};

    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-left: auto;
`;

export const PaymentDetailsHeaderWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        gap: ${SpacingTheme.spacing_300.gap};
        padding: ${SpacingTheme.spacing_500.padding} 0;
        max-width: 704px;
    }
`;

export const PaymentDetailsHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const PaymentDetailsHeaderProfileImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;

export const PaymentDetailsHeaderStatus = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
`;

export const PaymentDetailsHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin: 0;
`;

export const PaymentDetailsHeaderSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    text-decoration: underline;
`;

export const PaymentDetailsHeaderText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
`;

export const PaymentDetailsButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        position: relative;
        max-width: 704px;
        padding: ${SpacingTheme.spacing_500.padding} 0;
        margin: 0 auto;
        flex-direction: row;
    }
`;

export const PaymentDetailsRespondButton = styled.button`
    width: 100%;
    height: 48px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    border: none;
    background: ${ColorTheme.Yellow.color};
    cursor: pointer;
`;

export const PaymentDetailsButton = styled.button<PaymentDetailsButtonProps>`
    width: 100%;
    height: 48px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    border: none;
    background: ${(props) => (props.available ? ColorTheme.Black.color : ColorTheme.Grey1.color)};
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(50% - 8px);
    }
`;

export const PaymentDetailsReceiptButton = styled.a`
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    border: 1px solid ${ColorTheme.Grey1.color};
    background: none;
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(50% - 8px);
    }
`;

export const PaymentDetailsRefundInputWarning = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    margin: 0;
    margin-top: 12px;
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Red1.color};
    font-weight: ${TextTheme.sans_200.fontWeight};
`;

export const PaymentDetailsPaymentsMenuWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        max-width: 704px;
        margin: 0 auto;
    }
`;

export const PaymentDetailsPaymentsMenuItem = styled.button<PaymentDetailsPaymentsMenuItemProps>`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    border: none;
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: none;
    padding: 0;
    cursor: pointer;
    padding-bottom: ${(props) => (props.selected ? "8px" : "11px")};
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : "none")};

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_300.fontSize};
        line-height: ${ButtonTheme.sans_button_300.lineHeight};
    }
`;

export const PaymentDetailsPaymentWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 704px;
    }
`;

export const PaymentDetailsPaymentTextWrapper = styled.div<PaymentDetailsPaymentTextWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    margin-left: ${(props) => (props.secondRow ? "24px" : "0px")};
`;

export const PaymentDetailsPaymentTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    margin: 0;
`;

export const PaymentDetailsPaymentDivider = styled.div`
    width: 1px;
    height: 24px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: flex-end;
    background: ${ColorTheme.Grey2.color};
`;

export const PaymentDetailsPaymentPrice = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    margin: 0;
`;

export const PaymentDetailsSupportButton = styled.a`
    background: none;

    margin: 0 auto;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    text-decoration: underline;

    @media (min-width: 768px) {
        order: 10;
    }
`;

export const PaymentDetailsPaymentSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const PaymentDetailsPaymentIcon = styled.img`
    height: 16px;
    z-index: 1;
    object-fit: cover;
    align-self: center;
    transform: rotate(180deg);
`;

export const PaymentDetailsPopupWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: 632px;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};

    @media (min-width: 768px) {
        // bottom: 0;
        left: 0;
        // top: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 32px;
        width: 550px;
        border-radius: 25px;
    }
`;

export const PaymentDetailsPopupIcon = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-top: 160px;
`;

export const PaymentDetailsPopupTitle = styled.p`
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};

    text-align: center;
`;

export const PaymentDetailsPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    max-width: 250px;
    margin: 0;
    text-align: center;
`;

export const PaymentDetailsPopupDivider = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: auto;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
`;

export const PaymentDetailsPopupDoneButton = styled.button`
    width: calc(100% - 48px);
    margin: ${SpacingTheme.spacing_400.margin};
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    cursor: pointer;
    border: none;
    background: ${ColorTheme.Blue.color};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
`;

export const BookingRequestDeclineButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Grey1.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    width: 100%;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 35px;
    }
`;

export const DeclineRequestWrapper = styled.div`
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    background: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_400.padding};
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`;

export const DeclineRequestTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;
    margin-bottom: 16px;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
    }
`;

export const DeclineRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    max-width: 220px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        max-width: 260px;
    }
    align-self: center;

    margin: 0;
    margin-bottom: 32px;
    text-align: center;
`;

export const DeclineRequestOptionsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    border-top: 1px solid ${ColorTheme.Grey2.color};
`;

export const DeclineRequestOption = styled.button`
    display: flex;
    padding-bottom: 24px;
    border: none;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    background: none;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 24px;
    cursor: pointer;
`;

export const DeclineRequestOptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const DeclineRequestOptionTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};

    margin: 0;
`;

export const DeclineRequestOptionSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const DeclineRequestMessageInput = styled.textarea`
    padding: ${SpacingTheme.spacing_300.padding};
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    height: 150px;
    border: 1px solid ${ColorTheme.Grey1.color};
    margin: 0;
    margin-bottom: 96px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const DeclineRequestButtonsWrapper = styled.div`
    width: 100%;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DeclineRequestCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    padding: 0;
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
`;

export const DeclineRequestDeclineButton = styled.button`
    width: 156px;
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Red1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border: none;
    color: ${ColorTheme.White.color};
    cursor: pointer;
`;

export const RequestDeclinedSuccessfulTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;
    margin-bottom: 16px;
`;

export const RequestDeclinedSuccessfulSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;
`;

export const RequestDeclinedSuccessfulDoneButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Blue.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    border: none;
    cursor: pointer;
`;

export const EditListingUpdateCardContentInputText = styled.input`
    min-height: 50px;
    width: 100%;
    margin: 0;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    margin-bottom: 128px;

    // @media(min-width: 768px) {
    //     width: calc(100% - 88px);
    //     margin: 0 44px;
    //     font-size: 16px;
    //     line-height: 22px;
    // }
`;

export const EditListingUpdateCardContentInputPrice = styled.input`
    min-height: 50px;
    width: 100%;
    margin: 0;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${TextTheme.sans_1000.fontSize};
    font-weight: ${TextTheme.sans_1000.fontWeight};
    line-height: ${TextTheme.sans_1000.lineHeight};

    strong {
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    }

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }

    // @media(min-width: 768px) {
    //     width: calc(100% - 88px);
    //     margin: 0 44px;
    //     font-size: 16px;
    //     line-height: 22px;
    // }
`;

export const EditListingUpdateCardContentInputPriceWrapper = styled.div`
    margin-bottom: 128px;
`;
export const PaymentDetailsHeaderLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const PaymentDetailsHeaderLinkIcon = styled.img`
    height: 16px;
    object-fit: cover;
    align-self: center;
    justify-self: flex-end;
    margin-left: auto;
    grid-column: 2/3;
    grid-row: 1/2;
    transform: rotate(180deg);
`;

export const RefundSuccessfulWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RefundSuccessfulIcon = styled.img`
    height: 64px;
    width: 64px;
    margin: 0 auto;
    margin-top: 160px;
    margin-bottom: 48px;
`;

export const RefundSuccessfulTitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    line-height: ${TextTheme.sans_800_bold.lineHeight};

    margin: 0;
    margin-bottom: 16px;
    text-align: center;
`;

export const RefundSuccessfulSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};

    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0 auto;
    text-align: center;
    margin-bottom: 200px;
`;

export const TransfersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 704px;
    width: 100%;
    margin: 0 auto;
`;
export const PaymentDetailsPageWrapper = styled.div`
    height: calc(100vh - 80px);
`;
