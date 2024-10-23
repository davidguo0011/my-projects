import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
export const CalendarWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    @media (max-width: 767px) {
        display: none;
    }
`;

interface CalendarCalendarWrapperProps {
    popupActive: boolean;
    calendarMode: string;
}
interface CalendarListingListingItemWrapperProps {
    active: boolean;
}
export const CalendarCalendarWrapper = styled.div<CalendarCalendarWrapperProps>`
    flex: 1;
    .calendar-container {
        height: ${(props) => (props.calendarMode === "" ? "100%" : "100vh")};
        .calendar-month-table-container {
            height: 100% !important;
        }
    }
    .calendar-day-title-container {
        height: 54px;
        .ReactVirtualized__Grid {
            height: 54px !important;
            div[class="ReactVirtualized__Grid__innerScrollContainer"] {
                height: 54px !important;
                max-height: 54px !important;
            }
        }
    }
    .calendar-day-title-container .calendar-day-title-text-border {
        height: 54px !important;
        padding-top: 24px;
        padding-bottom: 8px;
    }
    .calendar-day-title-container .calendar-day-title-action-container {
        top: 17px;
        margin-right: 24px;
    }

    /* .calendar-day-date-container .calendar-day-date-operation-right-container {
        width: 24px;
        background-color: ${ColorTheme.White.color};
    }

    .calendar-day-date-container .calendar-day-date-operation-container {
        background-color: ${ColorTheme.White.color};
        z-index: 1;
    }

    .calendar-day-date-container .calendar-day-date-operation-container:first-child {
        position: absolute;
        width: 24px;
        height: 100%;
        left: 0;
        top: 0;
    }

    .calendar-day-date-container .calendar-day-date-operation-right-container::before {
        display: none;
    }

    .calendar-day-date-container .calendar-day-date-operation-container::before {
        display: none;
    }

    .calendar-day-date-container .calendar-day-date-operation-right-container img {
        width: 16px;
        height: 16px;
    }

    .calendar-day-date-container .calendar-day-date-operation-container img {
        width: 16px;
        height: 16px;
    } */

    /* .calendar-day-table-container {
        padding: 0;
    } */

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper .calendar-day-table-row-column-content-occupied-image-container img {
        height: 40px;
        width: 40px;
    }

    .calendar-day-table-row-column-content-occupied-image-container {
        height: 56px;
        width: 56px;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper {
        height: 56px;
        margin-top: 14px;
        margin-bottom: 16px;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper .calendar-day-table-row-column-content-occupied-image-container {
        padding: ${SpacingTheme.spacing_200.padding};
    }

    .calendar-day-date-container .ReactVirtualized__Grid {
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .calendar-day-date-value-container {
        overflow-y: hidden !important;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper {
        top: 0;
        max-width: 0;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper:hover {
        max-width: 320px;
        transition:
            max-width 125ms ease-in,
            z-index 0s;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container,
    .calendar-month-table-container .calendar-month-table-return-today-container {
        display: ${(props) => (props.popupActive ? "none" : "unset")};
        height: 48px;
        background-color: ${ColorTheme.Black.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        border: none;
        border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
        color: ${ColorTheme.White.color};
        cursor: pointer;
        position: fixed;
        top: unset !important;
        left: calc(400px + (100vw - 400px - 24px) / 2) !important;
        transform: translateX(-50%);
        bottom: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        padding: 0 24px !important;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container .calendar-day-table-return-today-btn,
    .calendar-month-table-container .calendar-month-table-return-today-container .calendar-month-table-return-today-btn {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        box-shadow: unset;
        background-color: ${ColorTheme.Black.color};
        padding: ${SpacingTheme.spacing_100.padding} 0;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container .calendar-day-table-return-today-btn span,
    .calendar-month-table-container .calendar-month-table-return-today-container .calendar-month-table-return-today-btn span {
        color: ${ColorTheme.White.color};
    }

    .calendar-day-title-container {
        background-color: ${ColorTheme.White.color};
    }
`;

export const CalendarListingWrapper = styled.div`
    min-height: calc(100vh - 80px);
    /* width: 400px; */
    width: 35%;
    padding: ${SpacingTheme.spacing_250.padding};
    border-right: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 1024px) {
        width: 368px;
    }
`;
export const CalendarListingTitleConainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${SpacingTheme.spacing_250.margin};
    margin-top: ${SpacingTheme.spacing_250.margin};
`;
export const CalendarListingTitleBackBtn = styled.button`
    width: 16px;
    height: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-right: 24px;
`;
export const CalendarListingTitleBackBtnImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
export const CalendarListingTitle = styled.p`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    color: ${ColorTheme.Black.color};
`;
export const CalendarListingSearchWrapper = styled.div`
    height: 32px;
    margin: 11px 0;
`;
export const CalendarListingContiner = styled.div`
    display: flex;
    flex-direction: column;
`;

//listingitem
export const CalendarListingListingItemWrapper = styled.div<CalendarListingListingItemWrapperProps>`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    padding: ${SpacingTheme.spacing_250.padding};
    height: 85px;
    width: 100%;
    background: ${(props) => (props.active ? `${ColorTheme.Grey4.color}` : `${ColorTheme.White.color}`)};
    cursor: pointer;
    border-radius: 12px;
`;
export const CalendarListingListingItemImg = styled.img`
    width: 61px;
    height: 61px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
`;
export const CalendarListingListingItemContent = styled.div`
    flex-grow: 1;
    overflow: hidden;
`;
export const CalendarListingListingItemTitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const CalendarListingListingItemAddress = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const CalendarListingListingItemStatus = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Green.color};
`;

//mobile calendar not available placeholder
export const FeatureNotAvilableWrapper = styled.div`
    width: 100%;
    height: 476px;
    margin: 0 auto;
    background: #fdfaf9;
    border-radius: 15px;
    padding: ${SpacingTheme.spacing_600.padding} 39px;
`;
export const FeatureNotAvailableText = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    color: #ccc;
    text-align: center;
    width: 249px;
    margin: 0 auto;
`;
export const MobileCalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_400.padding};
    @media (min-width: 768px) {
        display: none;
    }
`;
export const MobileCalendarTitle = styled.h1`
    font-size: 26px;
    font-style: normal;
    font-weight: 625;
    color: #262626;
    margin: 0;
    margin-bottom: 24px;
`;
