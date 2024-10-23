import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, GradientTheme, TallTextTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface MessageWrapperProps {
    isSameAuthor?: boolean;
}

interface ConversationBookingRequestHeaderSubtitleProps {
    confirmed?: boolean;
}

interface RecentConversationBubbleProps {
    selected?: boolean;
}

export const ConversationWrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px auto 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 289px 1fr;
        grid-template-rows: auto auto 1fr;
        margin-top: 80px;
        max-height: calc(100vh - 80px);
        height: calc(100vh - 80px);
    }

    @media (min-width: 1280px) {
        grid-template-columns: 368px 1fr 368px;
    }
`;
export const FetchMoreMessagesLoadingWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;
export const FetchMoreConversationLoadingWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

export const ConversationTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    height: 60px;
    margin: 0 24px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ConversationTitleBackButton = styled.button`
    height: 16px;
    padding: 0;
    background: none;
    border: none;
`;

export const ConversationBookingRequestDesktopWrapper = styled.div`
    display: none;
    overflow: hidden;
    //disable scroll bar
    ::-webkit-scrollbar {
        display: none;
    }
    position: relative;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (min-width: 1280px) {
        grid-row: 1/4;
        grid-column: 3/4;
        height: 100%;
        width: 100%;
        border-left: 1px solid ${ColorTheme.Grey2.color};
        padding: 0px 24px;
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
`;

export const ConversationTitle = styled.p`
    margin-left: 16px;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
`;

export const ConversationTitleIcon = styled.img`
    width: 16px;
    height: 16px;
    padding: 0;
`;

export const ConversationCreatedBubble = styled.p`
    width: 100%;
    margin: 0;
    margin-top: 8px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${TextTheme.sans_200_semi.fontSize};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    color: ${ColorTheme.Grey.color};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300_semi.fontSize};
    }
`;

export const ConversationCreatedDate = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    color: ${ColorTheme.Grey.color};
    text-align: center;
    margin: ${SpacingTheme.spacing_400.margin} auto ${SpacingTheme.spacing_200.margin};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300_semi.fontSize};
        line-height: ${TextTheme.sans_300_semi.lineHeight};
    }
`;

export const ConversationMessagesContainer = styled.div`
    grid-row: 3/4;
    grid-column: 1/2;
    width: 100%;
    max-height: calc(100% - 142px);
    overflow-y: scroll !important;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 768px) {
        grid-column: 2/3;
        margin: 0 auto;
    }

    @media (min-width: 1280px) {
        max-height: calc(100% - 110px);
        max-width: 704px;
    }
    //disable scroll bar for both window and mac
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const ReceivedMessageWrapper = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    padding: 14px 16px;
    border-radius: ${BorderRadiusTheme.radius_24.borderRadius};
    background: ${ColorTheme.Grey4.color};
    margin: 0;
    margin-top: 4px;
    overflow-wrap: anywhere;
    max-width: calc(100% - 44px);
    width: fit-content;

    @media (min-width: 768px) {
        border-radius: 25px;
        padding: 14px 20px;
    }
`;

export const MessageWrapper = styled.p<MessageWrapperProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    padding: 14px 16px;
    border-radius: ${BorderRadiusTheme.radius_24.borderRadius};
    background: ${ColorTheme.Grey5.color};
    margin: 0;
    margin-top: ${(props) => (props.isSameAuthor ? "4px" : "24px")};
    overflow-wrap: anywhere;
    max-width: calc(100% - 44px);
    width: fit-content;

    @media (min-width: 768px) {
        border-radius: 25px;
        padding: 14px 20px;
    }
`;

export const ConversationMessageInputWrapper = styled.div`
    width: 100%;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 16px;
`;

export const ConversationMessageInputContentWrapper = styled.div`
    grid-row: 3/4;
    grid-column: 1/2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    padding: 0 24px;
    padding-bottom: 16px;
    position: fixed;
    bottom: 0;
    background-color: white;

    @media (min-width: 768px) {
        position: unset;
        margin: 0 auto;
        grid-column: 2/3;
        padding-bottom: 8px;
        max-width: 704px;
    }
`;

export const ConversationMessagesInputSendButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
    margin-left: 12px;
`;

export const SendButtonImg = styled.img`
    width: 28px;
    height: 28px;
`;

export const ConversationMessagesInput = styled.input`
    background: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey.color};
    outline: none;
    width: 100%;
    height: 40px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    border: 1px solid ${ColorTheme.Grey1.color};
    padding: 0 16px;
`;

export const ConversationBookingRequestWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    grid-row: 2/3;
    grid-column: 1/2;
    margin: 0 24px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const ConversationBookingRequestImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    object-fit: cover;
    margin: ${SpacingTheme.spacing_300.margin} 0;
`;

export const ConversationBookingRequestTextWrapper = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${SpacingTheme.spacing_300.margin} 0;
`;

export const ConversationBookingRequestSubtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
`;

export const ConversationBookingRequestHeaderWrapper = styled.button`
    height: 66px;
    display: flex;
    background: none;
    text-align: left;
    padding: ${SpacingTheme.spacing_250.padding};
    width: calc(100% - 48px);
    margin: 0 auto 24px;
    gap: ${SpacingTheme.spacing_250.gap};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 1px solid ${ColorTheme.Grey5.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ConversationBookingRequestHeaderImage = styled.img`
    width: 42px;
    height: 42px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    object-fit: cover;
`;

export const ConversationBookingRequestHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ConversationBookingRequestHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
`;

export const ConversationBookingRequestHeaderSubtitle = styled.p<ConversationBookingRequestHeaderSubtitleProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${(props) => (props.confirmed ? ColorTheme.Black.color : ColorTheme.Yellow.color)};
    margin: 0;
`;

export const ConversationBookingRequestHeaderPrice = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const ConversationBookingRequestDesktopHeaderWrapper = styled.div`
    padding: ${SpacingTheme.spacing_400.padding};
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    grid-column: 2/3;
    grid-row: 1/2;
    align-items: center;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const ConversationBookingRequestDesktopHeaderHostPhoneBtn = styled.a`
    width: 32px;
    height: 32px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const ConversationBookingRequestMobileHeaderHostPhoneBtn = styled.a`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`;

export const ConversationCallIcon = styled.img``;

export const ConversationBookingRequestDesktopHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
`;

export const BookingRequestStateWrapper = styled.div`
    height: 32px;
    padding: 0 12px;
    background-color: ${ColorTheme.White.color};
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const ConversationBookingRequestDesktopHeaderSubtitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
`;

export const RecentConversationsWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/4;
    border-right: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_250.padding};
    overflow: scroll;

    //hide scroll bar for window
    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (max-width: 767px) {
        display: none;
    }
`;

export const RecentConversationsTitle = styled.p`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin-bottom: 16px;
    margin-left: 12px;
`;

export const RecentConversationBubble = styled(Link)<RecentConversationBubbleProps>`
    width: 100%;
    border-radius: 9px;
    background: ${(props) => (props.selected ? `${ColorTheme.Grey4.color} !important` : "none")};
    // order: ${(props) => (props.selected ? "-1" : "unset")};
    display: flex;
    text-decoration: none;
    justify-content: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_250.padding};

    &:hover {
        background: ${ColorTheme.Grey5.color};
    }
`;

export const RecentConversationBubblesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ConversationProfilePhotoWrapper = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 24px;
`;

export const RecentConversationBubblesListingImage = styled.img`
    height: 56px;
    width: 56px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const RecentConversationBubblesGuestImage = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
`;

export const RecentConversationBubbleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`;

export const RecentConversationBubblesTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const RecentConversationBubblesSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const BookingRequestButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 1280px) {
        display: none;
    }
`;

export const BookingRequestCallButton = styled.a`
    height: 48px;
    border-radius: 9px;
    width: calc(50% - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.Red.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    border: none;
`;

export const BookingRequestCompleteOrDetailsButtonWrapper = styled.div`
    padding-bottom: 24px;
`;

export const BookingRequestDetailsButton = styled(Link)`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${GradientTheme.Red.background};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    border: none;
`;

export const BookingRequestDetailsButtonComplete = styled(Link)`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${GradientTheme.Red.background};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    border: none;
`;

export const BookingRequestDetailsBtnComplete = styled.button`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.Red.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    text-decoration: none;
    border: none;
`;

export const BookingRequestImage = styled.img`
    width: calc(100% + 48px);
    aspect-ratio: 4/3;
    object-fit: cover;
    margin-top: -24px;
    margin-left: -24px;
`;

export const BookingRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-bottom: 24px;
`;

export const BookingRequestTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin: 0;
    margin-top: 16px;
    margin-bottom: 8px;
    max-width: 100%;
    word-wrap: break-word;
`;

export const BookingRequestDatesWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding} 0;
`;

export const BookingRequestDatesTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
`;
export const BookingRequestDatesSubtitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    margin-top: 8px;
`;

export const BookingRequestDatesSubtitleTime = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-top: 8px;
`;

export const BookingRequestDatesDivider = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-end;
    align-self: center;
    width: 1px;
    height: 32px;
    background: ${ColorTheme.Grey2.color};
`;

export const BookingRequestDetailWrapper = styled.div`
    padding: ${SpacingTheme.spacing_400.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InboxSectionDivider = styled.div`
    background: ${ColorTheme.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
    margin-left: -24px;
    width: calc(100% + 48px);
    min-height: 8px;
`;

export const BookingRequestDetailLink = styled(Link)`
    height: 32px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    /* background: ${GradientTheme.Red.background}; */
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${ColorTheme.Black.color};
    text-decoration: underline;
`;

export const BookingRequestDetailLinkDisabled = styled.div`
    height: 32px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    /* background: ${ColorTheme.Grey1.color}; */
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${ColorTheme.Grey.color};
    text-decoration: underline;
`;

export const BookingRequestDetailButton = styled.button`
    height: 32px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${ColorTheme.Black.color};
    text-decoration: underline;
    border: none;
`;

export const HostBookingRefButton = styled.button`
    border: none;
    background: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
`;

export const BookingRequestCommunicationNoticeTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    width: 100%;
    margin: 0;
    margin-top: 32px;
`;

export const BookingRequestCommunicationNotice = styled.div`
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    width: 100%;
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const BookingRequestReportHost = styled.a`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-top: 20px;
    padding-bottom: 48px;
    text-decoration: underline;
    width: fit-content;
    cursor: pointer;
`;

export const PriceDetailsSubtotalPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 100%;
`;
export const PriceDetailsSubtotalPrice = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const PriceDetailsSubtotalPriceDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin-top: 9px;
    margin-bottom: 21px;
`;

export const HostConversationGuestProfileWrapper = styled.div`
    display: flex;
    padding-bottom: 32px;
`;

export const HostConversationGuestProfilePictureWrapper = styled.div`
    height: 100px;
    width: 80px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`;

export const HostConversationGuestProfilePicture = styled.img`
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
`;

export const HostConversationGuestProfileReview = styled.div`
    position: relative;
    height: 33px;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-end;
    border-radius: 9px;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
`;

export const HostConversationGuestProfileTextWrapper = styled.div`
    padding-left: 16px;
    display: flex;
    flex-direction: column;
`;

export const HostConversationGuestProfileTextTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    margin-bottom: 4px;
`;

export const HostConversationGuestProfileName = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    margin-bottom: 4px;
`;

export const HostConversationGuestProfileTextSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Black.color};
    text-decoration: underline;
    margin: 0;
    margin-top: 4px;
    word-break: break-all;
`;

export const HostConversationBookingRequestGuests = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const HostConversationBookingRequestGuestsText = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const ConversationChatBubbleProfilePicture = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    top: 12px;
`;

export const HostConversationBookingRequestGuestLink = styled(Link)`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    text-decoration: underline;
`;

export const ConversationProfilePhoto = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
`;

export const BookingRequestDetailsWrapperButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
`;

export const ConversationNoMessagesYetTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    color: ${ColorTheme.Grey1.color};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0 auto;
    margin-top: 192px;
    margin-bottom: 12px;
    text-align: center;
`;

export const ConversationNoMessagesYetSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    color: ${ColorTheme.Grey1.color};
    font-weight: ${TextTheme.sans_500.fontWeight};
    margin: 0 auto;
    max-width: 199px;
    text-align: center;
`;

export const PotentialPayoutDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin-bottom: 32px;
    margin-top: 32px;
`;
