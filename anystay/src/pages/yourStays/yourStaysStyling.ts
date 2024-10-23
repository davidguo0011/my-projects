import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export const YourStaysContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        position: absolute;
        width: calc(100% - 48px);
        margin: 0 24px;
        height: 1px;
        background: ${ColorTheme.Grey2.color};
    }

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: ${SpacingTheme.spacing_800.margin} ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_500.margin};
    }

    @media (min-width: 1280px) {
        width: calc(100% - 192px);
        margin: ${SpacingTheme.spacing_800.margin} ${SpacingTheme.spacing_900.margin} 0;
    }
    //gap at the bottom
    margin-bottom: 80px !important;
`;

export const YourStaysDivider = styled.div`
    width: calc(100% - 48px);
    height: 1px;
    background: ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const YourStaysTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};

    margin-left: 24px;
    width: calc(100% - 48px);

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-left: 0;
        width: calc(100% - 160px);
    }
`;

export const YourStaysTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 36px;
    justify-content: flex-start;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const YourStaysNoBookingsWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    align-items: center;
    justify-content: center;
    background-size: cover;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius} !important;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 32px; // 8 + 24 = 32
    aspect-ratio: 2/3;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.1) 100%),
        url("https://d292awxalydr86.cloudfront.net/Stays+page/95B31DDD-CC95-4525-B86B-4BF8251F8F0C.jpeg");

    @media (min-width: 768px) {
        width: 100%;
        aspect-ratio: unset;
        margin-top: 48px;
        padding: 0;
        height: 800px;
    }

    @media (min-width: 1024px) {
        height: 466px;
    }
`;

export const YourStaysBookingsMapWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding};
    height: auto;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius} !important;
    position: relative;
    overflow: hidden;
    margin-top: 8px; // 8 + 24 = 32

    @media (min-width: 768px) {
        aspect-ratio: unset;
        margin-top: 48px;
        padding: 0;
        height: 800px;
    }

    @media (min-width: 1024px) {
        height: 466px;
    }
`;

export const YourStaysMenuWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_400.gap};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        width: 100%;
        gap: ${SpacingTheme.spacing_500.gap};
    }
`;

interface YourStaysMenuItemProps {
    selected: boolean;
}
export const YourStaysMenuItem = styled.button<YourStaysMenuItemProps>`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    padding-bottom: ${(props) => (props.selected ? "13px" : "16px")};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : "none")};
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_300.fontSize};
        line-height: ${ButtonTheme.sans_button_300.lineHeight};
    }
`;

export const YourStaysNoStaysTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.White.color};
    margin: 0;
`;

export const YourStaysNoStaysSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.White.color};
    max-width: 230px;
    margin: 0;
    text-align: center;
`;

export const YourStaysNoStaysExploreButtonWrapper = styled.div`
    position: fixed;
    width: 100%;
    background: ${ColorTheme.White.color};
    z-index: 10;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 90px;
    left: 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourStaysNoStaysExploreButtonWrapperDesktop = styled.div`
    @media (max-width: 767px) {
        min-width: 190px;
    }
`;

export const YourStaysCurrentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    position: relative;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const YourStaysCurrentTitle = styled.p`
    display: flex;
    margin-bottom: 24px;
    margin-left: 24px;
    justify-content: flex-start;
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};

    @media (min-width: 768px) {
        margin-left: 0;
    }
`;

export const YourStaysPastWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    position: relative;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const YourStaysPastTitle = styled.p`
    display: flex;
    margin: 0 24px 24px;
    justify-content: flex-start;
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};

    @media (min-width: 768px) {
        margin-left: 0;
    }
`;

export const YourStayCardContainer = styled.div`
    width: 100%;
    border-radius: 14px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100vw - 48px) auto auto auto;
    overflow: hidden;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    padding: 0;

    @media (min-width: 444px) {
        grid-template-rows: 318px auto auto auto;
    }
`;

export const YourStayCardWrapper = styled.button`
    width: 100%;
    border-radius: 14px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100vw - 48px) auto auto auto;
    overflow: hidden;
    border: none;
    background: none;
    text-align: left;
    padding: 0;

    @media (min-width: 444px) {
        grid-template-rows: 318px auto auto auto;
    }
`;

export const YourStayPastCardWrapper = styled.button`
    width: 180px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    background: none;
    text-align: left;
    padding: 0;

    @media (min-width: 768px) {
        width: calc(33.33% - 16px);
    }

    @media (min-width: 1280px) {
        width: calc(20% - 19.2px);
    }

    /* @media (min-width: 1440px) {
        width: calc(16.66% - 20px);
    } */
`;

export const YourStayMapCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background-color: ${ColorTheme.White.color};
    display: flex;
    overflow: hidden;
    flex-direction: column;
    z-index: 1;
    border: none;
    text-align: left;
    padding: 0;
    cursor: pointer;
    position: relative;

    @media (min-width: 768px) {
        width: calc(100% - 48px);
        height: auto;
        position: absolute;
        top: 24px;
        left: 24px;
    }

    @media (min-width: 1024px) {
        height: 418px;
        width: 480px;
    }
`;

export const YourStayCardFeaturedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`;
export const YourStayCardFeaturedImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    background: ${ColorTheme.Grey2.color};
`;

export const YourStayCardMapFeaturedImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 20/19;
    object-fit: cover;
    overflow: hidden;

    @media (min-width: 768px) {
        aspect-ratio: 16/10;
    }
`;

export const YourStayPastCardFeaturedImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 20/19;
    /* border: 4px solid ${ColorTheme.White.color}; */
    /* box-shadow: 1.3px 3px 16px 0px rgba(0, 0, 0, 0.1); */
    background: ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    overflow: hidden;
`;
export const YourStayPastCardFeaturedImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 20/19;
    object-fit: cover;
    cursor: pointer;
`;

export const YourStayCardTitle = styled.p`
    margin: ${SpacingTheme.spacing_100.margin} ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    max-width: calc(100% - 32px);
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const YourStayCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin} 0;
    width: 100%;
    height: 26px;
    max-width: calc(100% - 32px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const YourStayPastCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin-top: 12px;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const YourStaysMapCardWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
`;

export const YourStayMapCardTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    padding-top: 16px;
    margin-bottom: 4px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const YourStayMapCardLocation = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 4px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourStayMapCardMobileLocation = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey.color};
    overflow: wrap;
    text-overflow: wrap;
    width: 100%;
    padding-bottom: 16px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourStayCardStatus = styled.p`
    height: 32px;
    position: relative;
    background: ${ColorTheme.White.color};
    margin: ${SpacingTheme.spacing_300.margin};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    z-index: 1;
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-start;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const YourStayMapCardStatus = styled.p`
    height: 32px;
    position: absolute;
    background: ${ColorTheme.White.color};
    top: 16px;
    left: 16px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    z-index: 1;
    justify-self: flex-start;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 12px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const YourStaysCardFooterWrapper = styled.div`
    width: 100%;
    padding: 0 16px 16px;
    display: flex;
    justify-content: space-between;
`;

export const YourStaysPastCardFooterWrapper = styled.div`
    width: 100%;
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const YourStaysMapCardFooterWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    display: flex;
`;

export const YourStaysCardFooterDates = styled.div`
    display: flex;
    align-self: flex-end;
`;

export const YourStaysMapCardFooterDates = styled.div`
    display: flex;
    align-self: flex-end;
`;

export const YourStaysMapCardMobileFooterDates = styled.div`
    display: flex;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourStaysCardFooterDate = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    margin: 0;
`;

export const YourStaysMapCardFooterDate = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    margin: 0;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourStaysMapCardCheckInGuideWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    border: none;
    background-color: ${ColorTheme.White.color};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
export const CheckInGuideIconWrapper = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;
export const CheckInGuideIcon = styled.img`
    width: 16px;
    height: 16px;
`;
export const CheckInGuideTitleWrapper = styled.div`
    width: calc(100% - 40px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 16px;
`;
export const CheckInGuideTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin-bottom: 4px;
`;
export const CheckInGuideSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const YourStaysCardFooterProfileImage = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourStaysCardFooterDivider = styled.div`
    width: 1px;
    height: 12px;
    align-self: center;
    background: ${ColorTheme.Grey1.color};
`;

export const YourStaysMapCardFooterDivider = styled.div`
    width: 1px;
    height: 12px;
    align-self: center;
    background: ${ColorTheme.Grey1.color};
`;

export const YourStaysResultsMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 48px;

    @media (min-width: 1280px) {
        grid-column: 1/3;
    }
`;

export const YourStaysResultsMenuWrapper = styled.div`
    display: flex;
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    gap: ${SpacingTheme.spacing_350.gap};
    padding-top: 48px;
`;

export const YourStaysResultsMenuIconButton = styled.button`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    cursor: pointer;
    @media (min-width: 1280px) {
        margin: 0 12px;
    }
`;

export const YourStaysResultsMenuIcon = styled.img`
    width: 12px;
    object-fit: cover;
`;

interface YourStaysResultsMenuButtonProps {
    selected: boolean;
}

export const YourStaysResultsMenuButton = styled.button<YourStaysResultsMenuButtonProps>`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    height: 32px;
    width: 32px;
    border: none;
    border-radius: 50%;
    color: ${(props) => (props.selected ? ColorTheme.White.color : ColorTheme.Black.color)};
    background: ${(props) => (props.selected ? ColorTheme.Blue.color : "none")};
    cursor: pointer;

    @media (min-width: 1280px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        height: 44px;
        width: 44px;
    }
`;

export const YourStaysResultsMenuTitle = styled.p`
    margin: 0 auto;
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};

    line-height: ${TextTheme.sans_200.lineHeight};
    @media (min-width: 1280px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
`;

export const YourStaysBookingRequestsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    margin: 0 auto;
    flex-wrap: wrap;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourStaysBookingRequestPastDesktopWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_500.gap} 24px;
    margin: 0 auto;
    flex-wrap: wrap;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const YourStaysBookingRequestPastMobileWrapper = styled(Swiper)`
    width: 100%;
    transition: 0.2s;

    .swiper-button-prev,
    .swiper-button-next {
        display: none !important;
    }

    ::selection {
        display: none;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourStaysBookingRequestPastMobileSwiperSlide = styled(SwiperSlide)`
    width: 180px;
    height: 100%;
    margin-left: 24px;

    @media (max-width: 767px) {
        &:last-child {
            margin-right: 24px;
        }
        &:first-child {
            margin-left: 24px;
        }
    }
`;

export const YourStaysBookingRequestReviewStayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const YourStaysStayMapCardReviewStayTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin-top: 24px;
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
`;

export const YourStaysBookingRequestReviewPastStayTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const YourStaysBookingRequestReviewStayStarsWrapper = styled.div`
    width: fit-content;
    display: flex;
    gap: 7px;
    margin: 0;
`;

export const YourStaysBookingRequestReviewStayStarButton = styled(Link)`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    cursor: pointer;
`;

export const YourStaysStayMapCardStarsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: ${SpacingTheme.spacing_250.gap};
    margin-bottom: 24px;
    width: 100%;
`;
export const YourStaysStayMapCardStarsButton = styled(Link)`
    height: 34px;
    width: 34px;
    border-radius: 50%;
    cursor: pointer;
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
        background-color: ${ColorTheme.Red.color} !important;
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
