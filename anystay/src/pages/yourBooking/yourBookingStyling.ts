import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/react";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const YourBookingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        grid-column: 1/2;
    }
`;

export const YourBookingDesktopMap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    grid-column: 2/3;
    grid-row: 1/2;
    width: calc(100% - 600px);
    height: 100vh;
    @media (max-width: 1280px) {
        width: calc(100% - 600px);
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourBookingDesktopWrapper = styled.div`
    @media (min-width: 768px) {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 600px 1fr;
    }
`;

export const YourBookingCheckInGuide = styled.button`
    width: calc(100% - 48px);
    height: 72px;
    margin: ${SpacingTheme.spacing_400.margin};
    border: 1px solid ${ColorTheme.Grey5.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background-color: ${ColorTheme.White.color};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    cursor: pointer;
`;

export const YourBookingTitleWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column; /* Stack items vertically */
    z-index: 2;
    top: 0;
    left: 0;
    margin: 0 24px;
    align-items: flex-start; /* Align items to the left */
    position: absolute;
    top: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const YourBookingTitleBackButton = styled.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const YourBookingTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    color: ${ColorTheme.White.color};
    margin: 0;
    margin-top: 24px;
    margin-right: auto;

    @media (min-width: 768px) {
        margin: 0;
        margin-left: 24px;
        display: flex;
        align-items: start;
        justify-content: center;
    }
`;

export const YourBookingSubtitle = styled.p`
    position: relative;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Yellow.color};
    margin: 0;
`;

export const YourBookingTitleIcon = styled.img`
    width: 9px;
    height: 16px;
    margin-top: 3px;
    object-fit: cover;
`;

export const YourBookingHeaderDetailsSeeListingButton = styled.button`
    height: 44px;
    width: fit-content;
    z-index: 2;
    align-self: flex-end;
    border: none;
    justify-self: center;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    cursor: pointer;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    padding: 0 20px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Black.color};
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%);
`;

export const YourBookingHeaderDetailsWrapper = styled.div`
    position: relative;
`;

interface YourBookingHeaderDetailsSectionProps {
    index: number;
}
export const YourBookingHeaderDetailsSection = styled(Swiper)<YourBookingHeaderDetailsSectionProps>`
    width: 100%;
    // height: 393px;
    aspect-ratio: 1/1;
    .swiper-pagination {
        display: none;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 13px;
        font-weight: 1000;
    }

    .swiper-button-prev,
    .swiper-button-next {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background: ${ColorTheme.White.color};
        color: ${ColorTheme.Black.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }

    .swiper-button-prev {
        display: ${(props) => (props.index === 1 ? "none" : "flex")};
        margin-left: 16px;
    }

    .swiper-button-next {
        margin-right: 16px;
    }

    .swiper-pagination {
        display: none;
    }

    ::selection {
        display: none;
    }

    @media (min-width: 768px) {
        aspect-ratio: 16/10;
    }

    @media (max-width: 767px) {
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }
`;

export const YourBookingHeaderDetailsImageBG = styled.img`
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.29) 13%, rgba(0, 0, 0, 0) 33%);
    cursor: pointer;
    user-select: none;
`;

export const YourBookingHeaderDetailsImage = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 100%;
    width: 100%;
    object-fit: cover;
    user-select: none;
`;

export const YourBookingHeaderDetailsTitle = styled.h1`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    grid-column: 2/3;
    grid-row: 1/2;
    align-self: flex-start;
    margin: 0;
`;

export const YourBookingHeaderDetailsSubtitle = styled(Link)`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    align-self: flex-end;
    cursor: pointer;
`;

export const YourBookingStayPendingSection = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        order: -1;
        padding-top: 0;
        border-bottom: none;
    }
`;

export const YourBookingStayDesktopHeader = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    order: -1;
    margin-top: 44px;
    padding-bottom: 32px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourBookingStayDesktopHeaderImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
`;

interface YourBookingStayDesktopHeaderTitleProps {
    selected: boolean;
}
export const YourBookingStayDesktopHeaderTitle = styled.p<YourBookingStayDesktopHeaderTitleProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Green.color : ColorTheme.Yellow.color)};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const YourBookingStayDesktopHeaderSubtitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};

    line-height: ${TextTheme.sans_800_bold.lineHeight};
    margin: 0;
`;

export const YourBookingHeaderDetailsDatesTextSection = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const YourBookingHeaderDetailsDatesTextSectionButton = styled.button`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const YourBookingGetSupportTextSection = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 32px;
`;

export const YourBookingGetSupportTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
`;

export const YourBookingGetSupportSubtitle = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    margin: 0;
    margin-bottom: 32px;
`;

export const YourBookingTextLinkImage = styled.img`
    height: 12px;
    width: 12px;
    transform: rotate(180deg);
`;

export const YourBookingStayPending = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        padding: 10px 16px;
        height: 80px;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 52px 1fr;
    }
`;

export const YourBookingStayPendingIcon = styled.img`
    height: 32px;
    width: 32px;
    grid-column: 1/2;
    grid-row: 1/3;
    align-self: center;
    justify-self: flex-start;
    object-fit: cover;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourBookingStayPendingTitle = styled.p`
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${ColorTheme.Yellow.color};
    margin: 0;
    @media (min-width: 768px) {
        align-self: flex-end;
        margin-bottom: 4px;
    }
`;

export const YourBookingStayPendingSubtitle = styled.p`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};

    margin: 0;

    @media (min-width: 768px) {
        align-self: flex-start;
        margin-top: 4px;
    }
`;

export const YourBookingHeaderDetailsDatesSection = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
    }
`;

export const YourBookingHeaderDetailsDatesWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const YourBookingHeaderDetailsDatesTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
`;

export const YourBookingHeaderDetailsDatesSubtitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin-top: 8px;
    margin-bottom: 8px;
`;

export const YourBookingHeaderDetailsAddressSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 0px;
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const YourBookingHeaderDetailsTimes = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const YourBookingHeaderDetailsDatesDivider = styled.div`
    width: 1px;
    height: 32px;
    background: ${ColorTheme.Grey2.color};
    align-self: center;
`;

export const YourBookingHeaderDetailsDatesDividerDesktop = styled.div`
    width: 1px;
    height: 32px;
    background: ${ColorTheme.Grey2.color};
    align-self: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourBookingTextLink = styled(Link)`
    text-decoration: none;
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
`;

export const YourBookingTextButton = styled.div`
    text-decoration: none;
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${TextTheme.sans_400.lineHeight};

    font-weight: ${TextTheme.sans_400.fontWeight};
    cursor: pointer;
`;

export const YourBookingTextLinkPhone = styled.a`
    text-decoration: none;
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${TextTheme.sans_400.lineHeight};

    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const YourBookingText = styled.p`
    text-decoration: none;
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${TextTheme.sans_400.lineHeight};

    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const YourBookingHeaderDetailsChangeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const YourBookingHeaderDetailsChangeButtonActive = styled(Link)`
    height: 32px;
    padding: 0 16px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${GradientTheme.Red.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    text-decoration: none;
    color: ${ColorTheme.White.color};
    border: none;
    cursor: pointer;
`;

export const YourBookingHeaderDetailsChangeButton = styled.button`
    height: 32px;
    width: 82.5px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${ColorTheme.Grey1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
    text-decoration: none;
    color: ${ColorTheme.White.color};
    border: none;
    cursor: pointer;
`;

export const YourBookingHeaderDetailsChangeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const YourBookingHeaderDetailsTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
    margin-bottom: 8px;
`;

export const YourBookingHeaderDetailsTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const YourBookingManagePaymentsButton = styled.p`
    min-width: 100%;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    cursor: pointer;

    text-decoration: none;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

interface YourBookingReportBookingWrapperProps {
    showSpinner?: boolean;
    noContinueBtn?: boolean;
}
export const YourBookingReportBookingWrapper = styled.div<YourBookingReportBookingWrapperProps>`
    width: 100%;
    background: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    display: flex;
    flex-direction: column;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    ${(props) => props.showSpinner && "justify-content:center; align-items:center;"}
    ${(props) => props.showSpinner && "height: 548px;"}
    padding-top: 48px;
    border-radius: ${(props) => (props.noContinueBtn ? "14px" : "14px 14px 0 0")};
    @media (min-width: 768px) {
        width: 560px;
        padding: ${SpacingTheme.spacing_400.padding};
        padding-top: 48px;
        margin: auto;
    }
`;

export const YourBookingReportBookingTitleWrapper = styled.div`
    width: 100%;
    padding-top: 48;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const YourBookingReportBookingSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    width: 320px;
    text-align: left;
    margin-bottom: 24px;
`;

export const YourBookingReportBookingTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin: ${SpacingTheme.spacing_250.margin} 0;
    text-align: center;
`;

export const YourBookingReportBookingMenuItem = styled.button`
    height: 90px;
    width: 100%;
    border: none;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    padding: 0;
    cursor: pointer;
    text-align: left;

    @media (min-width: 768px) {
        margin: 0 auto;
    }
`;

export const YourBookingReportBookingMenuTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const CancellationPolicyRowWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_500.gap};
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    align-items: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    &:last-child {
        border-bottom: none;
    }

    @media (min-width: 768px) {
        margin: 0 auto;
    }
`;

export const CancellationPolicyRowTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    width: fit-content;
`;

export const CancellationPolicyDate = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
`;

export const CancellationPolicyDateTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    width: 128px;
`;

export const CancellationPolicyDateSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};

    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const CancellationPolicyDoneButton = styled.button`
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Red.color};
    color: ${ColorTheme.White.color};
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 32px;
`;

export const YourBookingReportBookingMenuText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;

    span {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        font-weight: ${TextTheme.sans_300.fontWeight};
        color: ${ColorTheme.Grey.color};
    }
`;

export const YourBookingReportBookingMenuIcon = styled.img`
    position: relative;
    width: 8px;
    height: 12px;
    margin: 0;
    padding: 0;
    transform: rotate(180deg);
`;

export const YourBookingReceiptContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const YourBookingReceiptIcon = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-top: 149px;
    margin-bottom: 48px;
`;

export const YourBookingReceiptText = styled.p`
    text-align: center;
    max-width: 320px;
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    margin: 0;
`;

export const YourBookingReceiptSubText = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    text-align: center;
    line-height: ${TextTheme.sans_400.lineHeight};
    margin-top: 12px;
    margin-bottom: 162px;
    @media (min-width: 768px) {
        margin-bottom: 148px;
    }
`;

export const YourBookingReceiptPopupDivider = styled.div`
    width: calc(100% - 48px);
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: 0 auto;
    margin-top: auto;
`;

export const YourBookingReceiptDoneButton = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    margin: 0 auto;
    border: none;
    margin-top: auto;
    cursor: pointer;
`;

export const ReportBookingRequestInput = styled.textarea`
    width: 100%;
    min-height: 240px;
    border-radius: 9px;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    padding: ${SpacingTheme.spacing_300.padding};
    border: 1px solid ${ColorTheme.Grey1.color};
    resize: none;
    margin-bottom: 96px;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }

    &:focus {
        outline: none;
    }
`;

export const YourBookingReportSubmittedTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};

    line-height: ${TextTheme.sans_600_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
`;

export const YourBookingReportSubmittedSubtitle = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    margin: 0;
    margin-bottom: 32px;
`;

export const YourBookingReportSubmittedDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin-bottom: 32px;
`;

export const YourBookingCancelBookingRefundTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};

    margin: ${SpacingTheme.spacing_200.margin} 0 ${SpacingTheme.spacing_250.margin} 0;
    text-align: center;
`;

export const YourBookingCancelBookingRefundSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0 auto;
    text-align: center;
    margin-bottom: 32px;
    max-width: 327px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const YourBookingCancelBookingRefundContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 48px);
    margin: 0 24px;
`;

export const YourBookingCancelBookingRefundDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin: 0 auto;
`;

export const YourBookingCancelBookingRefundDividerDesktop = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin: 0 auto;

    @media (min-width: 768px) {
        opacity: 0;
    }
`;

export const YourBookingCancelBookingRefundSubtotalWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const YourBookingCancelBookingRefundSubtotalText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    text-decoration: underline;
    margin: 0;
    line-height: ${TextTheme.sans_300.lineHeight};
`;

export const YourBookingCancelBookingRefundSubtotalPrice = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;
    line-height: ${TextTheme.sans_300.lineHeight};
`;

export const YourBookingCancelBookingRefundTotalText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: ${SpacingTheme.spacing_500.margin} 0;
`;

export const YourBookingCancelBookingRefundTotalPrice = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: ${SpacingTheme.spacing_500.margin} 0;
`;

export const YourBookingPriceDetailsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 24px;
    margin-top: 8px;
`;

export const YourBookingPriceDetailsPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const YourBookingPriceDetailsPrice = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};

    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const YourBookingPriceDetailsDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const YourBookingPriceDetailsPriceBold = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const YourBookingReservationGuestsSplitter = styled.div`
    width: 100%;
    height: 8px;
    margin: 0;
    background: ${ColorTheme.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const YourBookingGuestSupportWrapper = styled(motion.div)`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 11;
    left: 0;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    max-height: 600px;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 550px;
        min-height: unset;
        height: 600px;
        border-radius: 14px;
        z-index: 3;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const YourBookingNoticeWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
    align-items: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_350.padding};
    }
`;

export const YourBookingNoticeTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${(props) => props.color};
    margin: 0;
`;

export const YourBookingNoticeSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;
