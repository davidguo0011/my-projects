import styled from "styled-components";
import { ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const YourStayCardWrapper = styled.div`
    width: 100%;
    border-radius: 14px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100vw - 48px) auto auto auto;
    padding: 0;
    @media (min-width: 444px) {
        grid-template-rows: 318px auto auto auto;
    }
`;

export const YourStaysBookingsMapWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    background: ${ColorTheme.Grey2.color};
`;
export const YourStaysBookingsMobileImg = styled.div`
    width: 100%;
    aspect-ratio: 16/10;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const YourStaysBookingsMobileContent = styled.div`
    height: 130px;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const YourStayCardStatus = styled.p`
    height: 32px;
    width: 90px;
    background: ${ColorTheme.White.color};
    margin: ${SpacingTheme.spacing_300.margin};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    z-index: 1;
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-start;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const YourStayCardFeaturedImage = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    background: ${ColorTheme.Grey2.color};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

export const YourStayCardSubtitle = styled.p`
    margin: ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin} 0;
    width: 50%;
    height: 24px;
    background: ${ColorTheme.Grey2.color};
`;

export const YourStayCardTitle = styled.p`
    margin: ${SpacingTheme.spacing_100.margin} ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin};
    width: 20%;
    height: 18px;
    background: ${ColorTheme.Grey2.color};
`;

export const YourStaysCardFooterWrapper = styled.div`
    width: 100%;
    padding: 0 ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_300.margin};
    display: flex;
    justify-content: space-between;
`;

export const YourStaysCardFooterDates = styled.div`
    display: flex;
    align-self: flex-end;
`;

export const YourStaysCardFooterDate = styled.p`
    width: 60px;
    height: 22px;
    background: ${ColorTheme.Grey2.color};
    margin: 0;
`;

export const YourStaysCardFooterDivider = styled.div`
    width: 1px;
    height: 12px;
    align-self: center;
    background: ${ColorTheme.Grey1.color};
    margin: 0px 16px;
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

    @media (max-width: 767px) {
        display: none;
    }

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

export const YourStayPastCardFeaturedImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border: 4px solid ${ColorTheme.White.color};
    background: ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    overflow: hidden;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const YourStayPastCardSubtitle = styled.p`
    margin-top: 12px;
    width: 50%;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: ${ColorTheme.Grey1.color};
`;

export const YourStaysPastCardFooterWrapper = styled.div`
    width: 100%;
    height: 20px;
    width: 50%;
    margin-top: 2px;
    margin-bottom: 8px;
    color: ${ColorTheme.Grey.color};
    background: ${ColorTheme.Grey1.color};
`;

export const YourStaysBookingRequestReviewPastStayTitle = styled.p`
    color: ${ColorTheme.Grey.color};
    margin: 0;
    background: ${ColorTheme.Grey1.color};
    height: 18px;
    width: 30%;
`;
