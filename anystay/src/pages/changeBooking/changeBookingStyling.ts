import styled from "styled-components";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { TextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface ChangeBookingPriceDetailProps {
    showBreakdown?: boolean;
}
interface CreateBookingChangeDatesPopupArriveDepartTitleProps {
    selected: boolean;
}

export const ChangeBookingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        gap: ${SpacingTheme.spacing_800.gap};
        max-width: 1200px;
        justify-content: center;
        padding: 0px 80px;
        margin: 0px auto;
        margin-top: 80px;
    }
`;
export const ChangeBookingContentImageWrapper = styled.div``;

export const ChangeBookingOtherContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        height: fit-content;
        margin-top: 80px;
    }
`;

export const ChangeBookingContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-right: 24px;
    padding-left: 24px;

    @media (min-width: 768px) {
        padding-bottom: 100px;
        width: 560px;
    }
`;

export const ChangeBookingOtherContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    padding-left: 24px;

    @media (min-width: 768px) {
        padding-bottom: 100px;
    }
    @media (min-width: 1024px) {
        margin: 0 auto;
        max-width: 567px;
        padding-right: unset;
        padding-left: unset;
    }
    @media (min-width: 1280px) {
        margin: 0 auto;
    }
`;

export const ChangeBookingTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 64px;
    padding-bottom: 24px;
    position: relative;

    @media (min-width: 768px) {
        padding-top: 48px;
        padding-bottom: 32px;
    }
`;
export const ChangeBookingTitle = styled.h2`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    margin: 0;

    @media (min-width: 768px) {
        border-top: none;
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-left: 24px;
    }
`;

export const ChangeBookingTitleBackButton = styled.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
`;

export const ChangeBookingTitleIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`;

export const ChangeBookingListingHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: ${SpacingTheme.spacing_300.padding} 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ChangeBookingListingHeaderImage = styled.img`
    height: 100px;
    width: 116px;
    border-radius: 9px;
    object-fit: cover;
`;

export const ChangeBookingListingHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    padding-right: 12px;
    height: 100px;
    overflow: hidden;
`;

export const ChangeBookingListingHeaderTextTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const ChangeBookingListingHeaderText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-top: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ChangeBookingBookingRequestStatus = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    justify-self: flex-end;
    margin-top: auto;
`;

export const ChangeBookingChangeDatesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
`;

export const ChangeBookingButtonWrapper = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    bottom: 126px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        position: unset;
        left: unset;
        margin-top: auto;
        margin-bottom: 33px;
    }
`;

export const ChangeBookingChangeGuestsWrapper = styled.div`
    min-height: 260px;
    width: 100%;
    padding-top: 24px;
    position: fixed;
    bottom: -10vh;
    left: 0;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    z-index: 102;
    display: flex;
    flex-direction: column;
    height: fit-content;

    @media (min-width: 768px) {
        position: absolute;
        width: 410px;
        height: 541px;
        border-radius: 14px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: ${SpacingTheme.spacing_500.padding};
    }
`;

export const ChangeBookingChangeGuestsTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    width: 100%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 16px;
`;

export const ChangeBookingChangeGuestsSubtitle = styled.p`
    position: relative;
    margin: 0 auto;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    width: 210px;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ChangeBookingChangeDatesTitle = styled.p`
    margin: 0;
    padding-top: 32px;
    padding-bottom: 16px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        padding-top: 44px;
        padding-bottom: 20px;
    }
`;

export const ChangeBookingChangeDatesDateWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 108px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        height: 140px;
    }
`;

export const ChangeBookingChangeDatesDate = styled.div`
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
`;

export const ChangeBookingChangeDatesDateDivider = styled.div`
    height: 100%;
    width: 1px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    background: ${ColorTheme.Grey2.color};
`;

export const ChangeBookingChangeDatesDateTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
`;

export const ChangeBookingChangeDatesDateSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const ChangeBookingChangeDatesDateEdit = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    height: 32px;
    color: ${ColorTheme.White.color};
    background: ${GradientTheme.Red.background};
    border: none;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    padding: 0 20px;
    margin: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ChangeBookingListingDetailsWrapper = styled.div`
    position: relative;
    padding-top: 116px;
    flex: 1;

    @media (max-width: 1280px) {
        display: none;
    }
`;

export const ChangeBookingDesktopListingImage = styled.img`
    width: 100%;
    border-radius: 9px;
    margin: 0px 0px 16px;
    object-fit: cover;
    cursor: pointer;
    aspect-ratio: 1 / 1;
`;

export const ChangeBookingDesktopListingTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    max-width: 384px;
`;

export const ChangeBookingTitleContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ChangeBookingReviews = styled.p`
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
export const ChangeBookingNoReviews = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
`;

export const ChangeBookingDesktopListingSubtitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    max-width: 384px;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const ChangeBookingDesktopListingDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin-top: 9px;
    margin-bottom: 21px;
    max-width: 384px;
`;

export const ChangeBookingDesktopListingButton = styled.button`
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 216px;
    color: ${ColorTheme.White.color};
    max-width: 313px;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    background: ${ColorTheme.Red.color};
    border: none;
    cursor: pointer;
`;

export const ChangeBookingReviewNoticeWrapper = styled.div`
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    margin-top: 32px;
`;

export const ChangeBookingReviewNoticeIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

export const ChangeBookingReviewNoticeText = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
    }
`;

export const ChangeBookingPriceDetailTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 24px;
`;

export const ChangeBookingPriceDetailPrice = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
`;

export const ChangeBookingPriceDetailWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const ChangeBookingListingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
`;

export const ChangeBookingPriceDetail = styled.p<ChangeBookingPriceDetailProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 12px;
    cursor: ${(props) => (props.showBreakdown ? "pointer" : "default")};
    text-decoration: ${(props) => (props.showBreakdown ? "underline" : "none")};
`;

export const ChangeBookingPriceDetailDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_200.margin} auto;
    margin-bottom: 20px;
`;

export const ChangeBookingPriceDetailBold = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
`;

export const ChangeBookingPriceDetailGuestsButton = styled.button`
    height: 55px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey2.color};
    background: none;
    text-decoration: none;
    cursor: pointer;
`;

export const ChangeBookingPriceDetailGuestsButtonText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
`;

export const ChangeBookingPriceDetailGuestsButtonIcon = styled.img`
    width: 12px;
    object-fit: cover;
    transform: rotate(270deg);
`;

export const CreateBookingChangeDatesPopupTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin-top: 8px;
    display: grid;
    align-items: center;
    grid-template-columns: 16px 1fr;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
    }
`;

export const CreateBookingChangeDatesPopupTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    justify-self: center;
    padding-right: 16px;
    margin: 0;
`;

export const CreateBookingChangeDatesPopupTitleIcon = styled.img`
    height: 16px;
    object-fit: cover;
    align-self: flex-start;
`;

export const CreateBookingChangeDatesPopupSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0 auto;
    margin-top: 20px;
    max-width: 210px;
    text-align: center;
`;

export const CreateBookingChangeDatesPopupArriveDepartWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_500.gap};
    padding-right: 16px;
    margin: 0 auto;
    margin-bottom: 8px;
`;

export const CreateBookingChangeDatesPopupArriveDepartTitle = styled.p<CreateBookingChangeDatesPopupArriveDepartTitleProps>`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    margin: 0;
    margin-bottom: ${(props) => (props.selected ? "12px" : "15px")};
`;

export const ChangeBookingChangeDatesButtonsWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    margin-top: 24px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
    }
`;

export const ChangeBookingChangeDatesButtonWrapper = styled.div`
    height: 100px;
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ChangeBookingChangeDatesButtonTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const ChangeBookingChangeDatesButtonTextTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_300_semi.lineHeight};
`;

export const ChangeBookingChangeDatesButtonTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    line-height: ${TextTheme.sans_200.lineHeight};
`;

export const ChangeBookingChangeDatesButtonValueWrapper = styled.div`
    width: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ChangeBookingChangeDatesButtonValueButton = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    background: ${ColorTheme.White.color};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
`;

export const ChangeBookingChangeDatesButtonValueButtonIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

export const ChangeBookingChangeDatesButtonValue = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const ChangeBookingRequestSentHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-top: 32px;

    @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 32px;
        width: 100%;
    }
`;

export const ChangeBookingRequestSentHeaderHostProfileImage = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ChangeBookingRequestSentHeaderHostProfileTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const ChangeBookingRequestSentHeaderHostProfileSubtitle = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    margin: 0;
`;

export const ChangeBookingRequestSentText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin-top: 24px;
    margin-bottom: 32px;
    width: 100%;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_400.margin} 0 ${SpacingTheme.spacing_500.margin} 0;
        width: 100%;
    }
`;

export const ChangeBookingRequestSentInput = styled.textarea`
    height: 250px;
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    padding: ${SpacingTheme.spacing_300.padding};
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-bottom: 90px;
    border: 1px solid ${ColorTheme.Grey1.color};
    outline: none;
    resize: none;

    @media (min-width: 768px) {
        height: 300px;
        padding: 21px;
        margin: 0 0 24px 0;
        width: 100%;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ChangeBookingChangeDatesEditButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 32px;
`;

export const ChangeBookingChangeDatesEditButtonTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const ChangeBookingChangeDatesSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
`;

export const ChangeBookingInfoSectionWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    padding: ${SpacingTheme.spacing_400.padding} 0px;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding} 0;
    }
`;

export const ChangeBookingInfoSectionText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    padding-right: 32px;
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;

export const ChangeBookingInfoSectionIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
    }
`;

export const ChangeBookingDivider = styled.div`
    width: calc(100% + 48px);
    margin-left: -24px;
    height: 8px;
    background: ${ColorTheme.White.color};
    box-shadow: inset 0px 1.5px 8px rgba(0, 0, 0, 0.115);

    @media (min-width: 768px) {
        width: 100%;
        margin: 0 auto;
        background: ${ColorTheme.Grey2.color};
        box-shadow: none;
        height: 1px;
    }
`;

export const ChangeBookingTermsAndConditionsText = styled.p`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: 24px;
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    padding-right: 16px;

    a {
        text-decoration: underline;
        padding: 0;
        background: none;
    }

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        margin-top: 32px;
    }
`;

export const ChangeBookingPriceDifferenceWrapper = styled.div`
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ChangeBookingPaymentTerms = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
    margin-top: 24px;
`;

export const ChangeBookingPaymentWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const ChangeBookingPaymentButton = styled.button`
    height: 50px;
    width: 100%;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Red.color};
    border: none;
    cursor: pointer;
    margin-top: 24px;

    @media (min-width: 768px) {
    }
`;

export const ShareYourStaySocialsWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: 32px;
    margin-bottom: auto;
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto auto auto auto;
    gap: ${SpacingTheme.spacing_300.gap};

    @media (min-width: 768px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        margin-bottom: 90px;
    }
`;

export const ShareYourStaySocialsIcon = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`;

export const ChangeBookingMobilePaymentDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

export const ShareListingCopyLinkButtonWrapper = styled.div`
    height: 55px;
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

export const ShareListingCopyLink = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-left: 20px;
`;

export const ShareListingCopyLinkButton = styled.button`
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    text-decoration: underline;
    margin-right: 8px;
    cursor: pointer;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const IndividualShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`;

export const IndividualFacebookShareButton = styled(FacebookShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualEmailShareButton = styled(EmailShareButton)`
    height: 55px;
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
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualShareButtonText = styled.p`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: 0;
`;

export const ChangeBookingReservationRowTextNotAllowed = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
`;

export const ChangeBookingReservationGuestsButtonWrapper = styled.div`
    width: calc(100% - 48px);
    margin: ${SpacingTheme.spacing_400.margin};
    margin-bottom: calc(24px + 10vh);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 100%;
        margin: 44px 0 0 0;
    }
`;

export const ChangeBookingReservationGuestsClearButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    margin: 0;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
`;

export const ChangeBookingReservationGuestsDoneButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: 0;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Red.color};
    height: 50px;
    width: 160px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
`;

export const CheckoutFormBtn = styled.button`
    height: 50px;
    border-radius: 10px;
    background: ${(props) => (props.disabled ? ColorTheme.Grey1.color : ColorTheme.Red.color)};
    border: none;
    font-size: ${TextTheme.sans_300_bold.fontSize};
    line-height: ${TextTheme.sans_300_bold.lineHeight};
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    width: 100%;
    margin-top: 16px;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    }
`;
