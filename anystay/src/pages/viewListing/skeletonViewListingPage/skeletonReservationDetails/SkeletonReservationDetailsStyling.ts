import styled from "styled-components";
import { ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
export const ViewListingDesktopMenuWrapper = styled.div`
    display: none;

    @media (min-width: 768px) {
        width: 376px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const ViewListingDesktopMenu = styled.div`
    width: calc(100% - 32px);
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin-top: 40px;
    margin-bottom: 44px;
    margin-right: 32px;
    padding: ${SpacingTheme.spacing_350.padding} ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_250.padding};
    position: relative;
    top: 0;

    @media (max-width: 767px) {
        display: none;
    }
    @media (min-width: 768px) {
        width: 375px;
    }
    @media (min-width: 1024px) {
        width: 384px;
    }
    @media (min-width: 1280px) {
        margin-right: 0;
    }
`;
export const ViewListingDesktopMenuPrice = styled.div`
    width: 162px;
    height: 25px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
`;
export const ViewListingDesktopMenuDatesWrapper = styled.div`
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 128px;
    margin-top: 20px;
`;
export const ViewListingDesktopMenuDatesItem = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
    display: flex;
    padding: 11px 16px;
    flex-direction: column;
`;
export const ViewListingDesktopMenuDatesItemTitle = styled.div`
    width: 34px;
    height: 15px;
    border-radius: 5px;
    background-color: ${ColorTheme.Grey2.color};
    margin-bottom: 5px;
`;
export const ViewListingDesktopMenuDatesItemSubtitle = styled.div`
    width: 79px;
    height: 20px;
    border-radius: 5px;
    background-color: ${ColorTheme.Grey2.color};
`;
export const ViewListingFooterButton = styled.div`
    width: 100%;
    height: 48px;
    grid-row: 1/2;
    grid-column: 2/3;
    border-radius: 9px;
    background-color: ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        height: 54px;
        margin-top: 16px;
    }
`;
export const ViewListingDesktopMenuDatesSelectSubtitle = styled.div`
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 12px;
    width: 100px;
    height: 20px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
`;
