import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface HostSupportContinueButtonProps {
    selected: boolean;
}

export const BookingRequestWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;

    @media (min-width: 768px) {
        max-width: 752px;
        margin: 0 auto;
        margin-top: 80px;
    }
`;

export const BookingRequestTitleWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    padding-bottom: 24px;
    padding-top: 64px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    margin: 0 24px;
    align-items: center;
    position: relative;

    @media (min-width: 768px) {
        border-top: none;
        padding-top: 48px;
        padding-bottom: 32px;
    }
`;

export const BookingRequestTitle = styled.p`
    position: relative;
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        min-width: 300px;
        margin-left: 24px;
    }
`;

export const BookingRequestTitleBackButton = styled.button`
    background: none;
    padding: 0;
    border: 0;
    cursor: pointer;
`;

export const BookingRequestTitleIcon = styled.img`
    display: flex;
    align-items: center;
    height: 16px;
    object-fit: cover;
    margin-right: 24px;
`;

export const BookingRequestSection = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    flex-direction: column;
`;

export const BookingRequestSupportSectionRowWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BookingRequestSectionRowWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BookingRequestCallButton = styled.a`
    width: 100%;
    height: 40px;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    border: none;
    padding: 0;
    text-decoration: none;
    border-radius: 9px;
    background: ${ColorTheme.Black.color};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 48px;
        font-size: ${TextTheme.sans_400_semi.fontSize};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const BookingRequestChangeDatesWrapper = styled.div`
    width: calc(100% - 48px);
    padding: ${SpacingTheme.spacing_500.padding} 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const BookingRequestChangeDatesTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
`;

export const BookingRequestChangeDate = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    width: 100%;
`;

export const BookingRequestChangeDateText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const BookingRequestChangeDateTextStrikethrough = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    text-decoration: line-through;
`;

export const BookingRequestSectionRowText = styled.button`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    text-align: left;
    border: none;
    padding: 0px;
    background: none;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const BookingRequestSectionCheckInText = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    text-align: left;
`;

export const BookingRequestSectionRowTextButton = styled.div`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Black.color} !important;
    text-decoration: underline;
    cursor: pointer;
`;

export const BookingRequestHeaderContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        grid-template-columns: 85px 1fr;
    }
`;

export const BookingRequestHeaderTextWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
`;

export const BookingRequestHeaderProfilePicture = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 64px;
    width: 64px;
    object-fit: cover;
    align-self: flex-start;
    border-radius: 50%;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;

export const BookingRequestHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 4px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
    }
`;

export const BookingRequestHeaderSubtitle = styled.p`
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${ColorTheme.Yellow.color};
    margin-top: 0;
    margin-bottom: 4px;
`;

export const BookingRequestHeaderLink = styled(Link)`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 0px;
    margin-bottom: 4px;
    word-break: break-all;
    max-width: calc(100% - 68px);
`;

export const BookingRequestHeaderDateText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 68px);
    overflow: hidden;
`;

export const BookingRequestHeaderPriceText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 68px);
    overflow: hidden;
`;

export const BookingRequestDateWrapper = styled.div`
    display: flex;
    align-items: center;
    // gap: ${SpacingTheme.spacing_200.gap};
    // flex-direction: column;
    width: 100%;
    margin: 0 auto;
    /* border-bottom: 1px solid ${ColorTheme.Grey2.color}; */
`;

export const BookingRequestDateTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    margin-right: auto;
`;

export const BookingRequestDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    width: 100%;
`;

export const BookingRequestDateText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const BookingRequestSubHeaderButton = styled(Link)`
    width: 100%;
    height: 40px;
    background: none;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        height: 48px;
        font-size: ${TextTheme.sans_400_semi.fontSize};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const BookingRequestPaymentSectionTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`;

export const BookingRequestPaymentSectionSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin-top: 8px;
`;

export const BookingRequestPaymentSectionTitlePayout = styled.button`
    height: 32px;
    border: none;
    background: ${ColorTheme.Blue.color};
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const BookingRequestAcceptButtonWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_400.padding};
    gap: ${SpacingTheme.spacing_300.gap};

    @media (min-width: 768px) {
        position: unset;
        left: unset;
        bottom: unset;
        align-items: unset;
        justify-content: flex-end;
        padding: 0;
        margin-left: auto;
    }
`;

export const BookingRequestAcceptButtonDesktopWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${SpacingTheme.spacing_300.gap};
    align-items: center;
    justify-content: space-between;
    margin: ${SpacingTheme.spacing_400.margin};
    width: 280px;
    gap: ${SpacingTheme.spacing_200.gap};
    height: 35px;
    margin-top: 0;
    margin-left: auto;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const BookingRequestAcceptButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Blue.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    width: calc(100% - 8px);
    cursor: pointer;

    @media (min-width: 768px) {
        width: 128px;
    }
`;

export const BookingRequestDeclineButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Grey1.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    width: 100%;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 128px;
        margin-left: auto;
    }
`;

export const BookingRequestReviewButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Yellow.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    width: 100%;
    padding: 0 32px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 168px;
        margin-left: auto;
    }
`;

export const DeclineRequestWrapper = styled.div`
    width: 100%;
    background: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    align-items: flex-start;

    @media (min-width: 768px) {
        width: 555px;
    }
    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`;

export const DeclineRequestBackButton = styled.button`
    border: none;
    background: none;
    text-decoration: none;
    padding: none;
    align-self: flex-start;
    cursor: pointer;
`;

export const DeclineRequestBackButtonIcon = styled.img`
    width: 8px;
    height: 16px;
    object-fit: cover;
`;

export const DeclineRequestTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: ${SpacingTheme.spacing_250.margin} 0;
`;

export const DeclineRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    max-width: 220px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        max-width: 260px;
    }
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
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
`;

export const DeclineRequestOptionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const DeclineRequestMessageInput = styled.textarea`
    padding: ${SpacingTheme.spacing_300.padding};
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    height: 240px;
    border: 1px solid ${ColorTheme.Grey1.color};
    margin: 0;
    margin-bottom: 96px;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Black.color};
    resize: none;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const DeclineRequestButtonsWrapper = styled.div`
    width: 100%;
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
    cursor: pointer;
    text-decoration: underline;
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
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border: none;
    color: ${ColorTheme.White.color};
`;

export const RequestDeclinedSuccessfulTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    color: ${ColorTheme.Black.color};
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: auto;
`;

export const BookingRequestGuestPolicyText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    margin: 0;
    margin-top: 24px;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const BookingRequestGuestPolicyLink = styled.a`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    text-decoration: underline;
`;

export const BookingRquestYourPayoutPriceLabel = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const BookingRquestYourPayoutPrice = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const BookingRequestSectionRowWrapperPayouts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

export const BookingRequestYourPayoutDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: ${SpacingTheme.spacing_300.margin} 0;
    background: ${ColorTheme.Grey2.color};
`;

export const BookingRequestYourPayoutPriceBold = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 8px;
`;

export const BookingRequestReservationGuestsSplitter = styled.div`
    width: 100%;
    height: 8px;
    margin-top: 0;
    background: ${ColorTheme.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);

    @media (min-width: 768px) {
        display: none;
    }
`;

export const HostCancellationPopupWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    margin-top: 16px;
    align-items: flex-start;

    @media (min-width: 768px) {
        max-width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`;

export const HostCancellationPopupTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 24px;
    text-align: center;
`;

export const HostCancellationPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    max-width: 336px;
    text-align: left;
`;

export const HostCancellationPopupOptionWrapper = styled.div`
    width: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_400.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const HostCancellationPopupOptionButton = styled.div`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
`;

export const HostCancellationPopupOptionButtonIcon = styled.img`
    height: 14px;
    object-fit: cover;
    transform: rotate(180deg);
`;

export const HostCancellationPopupOptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const HostCancellationPopupOptionTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const HostCancellationPopupOptionTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const HostCancellationPayoutDetailsPopupTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: auto;
`;

export const HostCancellationPayoutDetailsPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    padding-right: 8px;
`;

export const HostCancellationPayoutDetailsPopupDivider = styled.div`
    min-width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
`;

export const HostCancellationPayoutDetailsPrice = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const HostSupportContinueButton = styled.button<HostSupportContinueButtonProps>`
    height: 48px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.selected ? ColorTheme.Blue.color : ColorTheme.Grey1.color)};
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    cursor: pointer;
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    width: 156px;
`;

export const HostCancellationMessageInput = styled.textarea`
    width: 100%;
    height: 240px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    padding: ${SpacingTheme.spacing_300.padding};
    margin-bottom: 48px;
    resize: none;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
    &:focus {
        outline: none;
    }
`;

export const HostCancellationCancelledDoneButton = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    background: ${ColorTheme.Blue.color};
`;

export const HostRefundPopupTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 8px;
    text-align: center;
`;

export const HostRefundPopupAmount = styled.p`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 0px;
    text-align: center;
`;

export const HostRefundPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    max-width: 300px;
    text-align: center;

    strong {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
    }
`;

export const HostRefundPopupBody = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0 auto;
    text-align: left;
    padding: ${SpacingTheme.spacing_300.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    height: 250px;
    border: 1px solid ${ColorTheme.Grey1.color};
    margin-bottom: 64px;
    word-break: break-all;
    white-space: normal;
    overflow-wrap: break-word;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    strong {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;
