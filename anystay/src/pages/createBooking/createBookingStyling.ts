import styled from "styled-components";
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { TextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface PageIndexProp {
    pageIndex: number;
}
export const CreateBookingDesktopWrapper = styled.div<PageIndexProp>`
    position: "relative";
    display: flex;
    justify-content: center;

    @media (min-width: 1280px) {
        gap: ${(props) => props.pageIndex === 0 && `80px`};
        max-width: ${(props) => props.pageIndex === 0 && `1360px`};
        padding: ${(props) => props.pageIndex === 0 && `0 80px`};
        margin: ${(props) => props.pageIndex === 0 && `0 auto`};
    }
`;

// left layout
export const CreateBookingWrapper = styled.div<PageIndexProp>`
    overflow: scroll;
    height: fit-content;
    padding: 0 24px;
    justify-content: center;
    @media (min-width: 768px) {
        height: 100vh;
        display: flex;
        overflow: unset;
        margin-top: 80px;
        height: ${(props) => (props.pageIndex === 2 ? "calc(100vh - 80px)" : "unset")};
        min-height: ${(props) => (props.pageIndex === 0 ? "100vh" : "unset")};
        padding: 0;
    }
    @media (min-width: 1281px) {
        justify-content: ${(props) => props.pageIndex === 0 && "right"};
    }
`;

export const CreateBookingContentWrapper = styled.div<PageIndexProp>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: ${(props) => (props.pageIndex === 1 ? "640px" : "560px")};
    }
`;

export const CreateBookingDesktopSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    text-transform: capitalize;
`;
export const CreateBookingTitleContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const CreateBookingReviews = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    span {
        color: ${ColorTheme.Grey.color};
        font-size: ${TextTheme.sans_200.fontSize};
        font-weight: ${TextTheme.sans_200.fontWeight};
        line-height: ${TextTheme.sans_200.lineHeight};
    }
`;
export const CreateBookingNoReviews = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
`;

export const CreateBookingDesktopTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 4px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

// right layout
export const CreateBookingDesktopContentWrapper = styled.div`
    margin-top: 80px;
    position: relative;
    padding-top: 116px;

    @media (max-width: 1280px) {
        display: none;
    }
`;
export const CreateBookingDesktopContent = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
    padding: 16px;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
`;

interface CreateBookingTitleWrapperProps {
    border?: boolean;
}
export const CreateBookingTitleWrapper = styled.div<CreateBookingTitleWrapperProps>`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${(props) => (props.border ? `1px solid ${ColorTheme.Grey2.color}` : "none")};
    padding: 48px 0 32px;
    position: relative;

    @media (min-width: 768px) {
        border-top: none;
        border: none;
    }
`;

interface CreateBookingTitleProps {
    checkoutPage?: boolean;
}
export const CreateBookingTitle = styled.h2<CreateBookingTitleProps>`
    font-size: ${(props) => (props.checkoutPage ? TextTheme.sans_400_semi.fontSize : TextTheme.sans_900_semi.fontSize)};
    line-height: ${(props) => (props.checkoutPage ? TextTheme.sans_400_semi.lineHeight : TextTheme.sans_900_semi.lineHeight)};
    font-weight: ${(props) => (props.checkoutPage ? TextTheme.sans_400_semi.fontWeight : TextTheme.sans_900_semi.fontWeight)};
    justify-self: left;
    margin: 0 auto;

    @media (min-width: 768px) {
        justify-self: flex-start;
        margin: 0;
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        color: ${ColorTheme.Black.color};
        margin-left: 24px;
    }
`;

export const CreateBookingSendMsgTitle = styled.div`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    justify-self: left;
    margin: 0;
    @media (min-width: 768px) {
        justify-self: flex-start;
        margin: 0;
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    }
`;

export const CreateBookingTitleBackButton = styled.button`
    height: 16px;
    border: none;
    background: none;
    padding: 0;
    margin-right: 24px;
    cursor: pointer;
`;
export const CreateBookingTitleIcon = styled.img`
    position: relative;
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
    object-fit: contain;
`;

export const CreateBookingListingDetailsWrapper = styled.div`
    height: 116px;
    margin: ${SpacingTheme.spacing_300.margin} 0;
    margin-bottom: 0;
    padding-bottom: 16px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const CreateBookingListingDetailImage = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const CreateBookingListingDetailsText = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;

export const CreateBookingListingDetailTitle = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    text-transform: capitalize;
`;

export const CreateBookingListingDetailSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const CreateBookingFeaturedImageDesktop = styled.img`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin: 0;
    object-fit: cover;
    margin-bottom: 16px;
    cursor: pointer;
    aspect-ratio: 1/1;
`;

export const CreateBookingSection = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        padding: 40px 0;
        border-top: 1px solid ${ColorTheme.Grey2.color};
        border-bottom: 1px solid ${ColorTheme.Grey2.color};
    }
`;

export const CheckoutSectionDivider = styled.div`
    background: ${ColorTheme.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
    margin-left: -24px;
    width: calc(100% + 48px);
    min-height: 8px;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const CheckoutFormBtn = styled.button`
    height: 50px;
    border-radius: 10px;
    background: ${(props) => (props.disabled ? ColorTheme.Grey1.color : GradientTheme.Red.background)};
    border: none;
    font-size: ${TextTheme.sans_300_bold.fontSize};
    line-height: ${TextTheme.sans_300_bold.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    width: 100%;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    }
`;

export const CreateBookingPriceSection = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0px;

    @media (min-width: 768px) {
        padding: 40px 0px;
    }
`;

export const CreateBookingSectionTitle = styled.div`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin: 0;
    margin-bottom: 24px;
`;

export const CreateBookingSectionDatesChangeWrapper = styled.div`
    width: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
`;

export const CreateBookingSectionDatesChangeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const CreateBookingSectionDatesChangeTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const CreateBookingSectionDatesChangeTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
`;

export const CreateBookingSectionDatesButton = styled.button`
    height: 32px;
    margin: 0;
    padding: 0 20px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${GradientTheme.Red.background};
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    justify-self: flex-end;
    margin-left: auto;
    position: relative;
    color: ${ColorTheme.White.color};
    cursor: pointer;
`;

export const CreateBookingPricingTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
`;
export const CreateBookingPricingTextRowWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

interface CreateBookingPricingTextProps {
    showBreakdown?: boolean;
}
export const CreateBookingPricingText = styled.p<CreateBookingPricingTextProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
    cursor: ${(props) => (props.showBreakdown ? "pointer" : "default")};
    text-decoration: ${(props) => (props.showBreakdown ? "underline" : "none")};

    span {
        text-decoration: none;
    }
`;

export const CreateBookingReservationGuestsClearButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    margin: 0;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_300.fontSize};
        line-height: ${ButtonTheme.sans_button_300.lineHeight};
    }
`;

export const CreateBookingCancellationSubtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const CreateBookingBookNowNoticeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_100.gap};
    height: 105px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_500.padding} 0;

    @media (min-width: 768px) {
        display: grid;
        height: 74px;
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        background: ${ColorTheme.White.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        padding: ${SpacingTheme.spacing_300.padding};
        text-align: left;
        grid-template-columns: 32px 1fr;
        grid-template-rows: 100%;
        border: none;
        gap: 0;
    }
`;

export const CreateBookingBookNowNoticeIcon = styled.img`
    height: 24px;
    width: 24px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const CreateBookingBookNowNoticeTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    @media (min-width: 768px) {
        align-self: flex-start;
        grid-column: 2/3;
        padding-left: 16px;
    }
`;

export const CreateBookingBookNowNoticeSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    @media (min-width: 768px) {
        align-self: flex-end;
        grid-column: 2/3;
        padding-left: 16px;
    }
`;

export const CreateBookingRequestedWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    flex: 1;
`;

export const CreateBookingButtonWrapper = styled.div`
    height: 80px;
    position: fixed;
    right: 24px;
    bottom: 24px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (min-width: 768px) {
        right: 32px;
        bottom: 32px;
    }
`;

export const CreateBookingRequestedHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0;
    margin-bottom: 32px;
    position: relative;

    @media (min-width: 768px) {
        width: 640px;
        margin-bottom: 48px;
    }
`;

export const CreateBookingSendMsgHeaderImg = styled.img`
    width: 100%;
    object-fit: cover;
    aspect-ratio: 20/19;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};

    @media (min-width: 768px) {
        width: 640px;
        aspect-ratio: 3/2;
    }
`;

export const CreateBookingRequestedHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const CreateBookingRequestedHeaderImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${ColorTheme.White.color};
`;

export const CreateBookingRequestedHeaderImageWrapper = styled.div`
    width: 64px;
    position: absolute;
    height: 64px;
    bottom: 20px;
    right: 20px;

    @media (min-width: 768px) {
        width: 80px;
        height: 80px;
        bottom: 24px;
        right: 24px;
    }
`;

export const CreateBookingRequestedHeaderImageVerified = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 16px;
    width: 16px;
    object-fit: cover;
    align-self: flex-end;
    justify-self: flex-end;
`;

export const CreateBookingRequesteText = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
    }
`;

export const CreateBookingRequestedInput = styled.textarea`
    min-height: 128px;
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding};
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    border-radius: 9px;
    border: none;
    margin-bottom: 160px;
    resize: none;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
    @media (min-width: 768px) {
        margin: 0;
        width: 640px;
        min-height: 130px;
        margin-bottom: 80px;
    }
`;

export const CreateBookingSignUpSignInButton = styled.button`
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    height: 52px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${GradientTheme.Red.background};
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 160px;
    }
`;

export const CreateBookingRequestOnlyWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 1280px) {
        gap: ${SpacingTheme.spacing_350.gap};
    }
`;

export const CreateBookingRequestOnlyIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;

    @media (min-width: 1280px) {
        width: 32px;
        height: 32px;
    }
`;

export const CreateBookingRequestOnlyText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    padding-right: 20px;
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
    }

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
`;

export const CouponCodeInput = styled.input`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    padding: ${SpacingTheme.spacing_300.padding};
    padding-right: 48px;
    background: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0 auto;
    outline: none;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const CouponCodeWrapper = styled.div`
    margin-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const CouponCodeInvalid = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Red.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;
export const CouponCodeTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    align-items: baseline;
`;
export const CouponInputWrapper = styled.div`
    position: relative;
`;
export const CouponCodeSuccessIcon = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 18px;
    right: 16px;
`;

export const CouponCodeTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    color: ${ColorTheme.Black.color};
`;

export const DamageDepositLink = styled.a`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    text-decoration: underline;
`;

export const IndividualEmailShareButton = styled(EmailShareButton)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualFacebookShareButton = styled(FacebookShareButton)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualTwitterShareButton = styled(TwitterShareButton)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualWhatsappShareButton = styled(WhatsappShareButton)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualShareButton = styled.div`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px;
    cursor: pointer;
`;

export const IndividualShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`;

export const IndividualShareButtonText = styled.p`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: 0;
`;

export const ShareListingCopyLinkButtonWrapper = styled.div`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    justify-content: space-between;
    background: none;
    margin: 0 auto;
    margin-bottom: 16px;
    grid-column: 1/3;
    grid-row: 1/2;
`;

export const ShareListingCopyLinkButton = styled.button`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: none;
    text-decoration: underline;
    margin-right: 8px;
    cursor: pointer;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const ShareListingCopyLink = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-left: 20px;
`;

export const ShareListingOptionsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto auto auto auto 1fr;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const CreateBookingHeaderWrapper = styled.div<PageIndexProp>`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: ${(props) => (props.pageIndex === 0 ? `0 24px` : `0 32px`)};
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const NavbarLogoHomeButton = styled.div`
    z-index: 10;
    margin: ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_200.margin} 0;
`;

export const NavbarFullLogoHomeButton = styled.div`
    z-index: 10;
    display: flex;
    align-items: center;
`;

export const NavbarLogoImage = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
`;

export const NavbarFullLogoImage = styled.img`
    width: 140px;
    height: 38px;
    object-fit: cover;
`;

export const CreateBookingHeaderSupport = styled.a`
    height: 40px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    border: 1px solid ${ColorTheme.Grey1.color};
    padding: 9px 24px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    margin: ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_200.margin} 0;
    cursor: pointer;
    text-decoration: none;
`;

export const ConfirmBtnPolicy = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 26px 0;

    a {
        font-size: ${TextTheme.sans_300_semi.fontSize};
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
        line-height: ${TextTheme.sans_300_semi.lineHeight};
        text-decoration: underline;
    }
`;
