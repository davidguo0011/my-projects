import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface AllBookingsMenuItemProps {
    selected: boolean;
}
interface AllBookingsRequestsWrapperProps {
    numberOfItems: number;
}

export const AllBookingsContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1592px;
    margin: 0 auto;
`;

export const AllBookingsTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 64px;
    display: flex;
    align-items: center;
    position: relative;

    @media (min-width: 768px) {
        margin-top: 48px;
        padding-top: 80px;
    }
`;

export const AllBookingsTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        margin-left: 24px;
    }
`;

export const AllBookingsTitleIcon = styled.img`
    position: relative;
    width: 9px;
    height: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    object-fit: cover;
`;

export const AllBookingsMenuWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 48px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    margin-bottom: 48px;
`;

export const AllBookingsMenuItem = styled.button<AllBookingsMenuItemProps>`
    padding: 0;
    width: fit-content;
    padding-bottom: ${(props) => (props.selected ? "13px" : "16px")};
    background: none;
    border: none;
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : "none")};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
`;

export const AllBookingsRequestsWrapper = styled.div<AllBookingsRequestsWrapperProps>`
    width: calc(100% - 28px);
    margin: 0 auto;
    padding-bottom: 90px;
    overflow: hidden;
    position: relative;
    //calculate height base on the number of items, because child uses position absolute, so height must be calculated
    height: ${(props) => (props.numberOfItems ? `calc(${props.numberOfItems} * 242px + 150px)` : "100px")};
    @media (min-width: 768px) {
        height: ${(props) => (props.numberOfItems ? `calc(${Math.ceil(props.numberOfItems / 2)} * 312px + 150px)` : "100px")};
    }
    @media (min-width: 1024px) {
        height: ${(props) => (props.numberOfItems ? `calc(${Math.ceil(props.numberOfItems / 3)} * 312px + 150px)` : "100px")};
    }
`;
export const AllBookingsAnimationWrapper = styled.div`
    width: 200%;
    display: flex;
`;

export const AllBookingsRequestsMenuContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AllBookingsRequestsMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_350.gap};
    padding: ${SpacingTheme.spacing_300.padding} 0;
`;

export const AllBookingsRequestsMenuIconButton = styled.button`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background: ${ColorTheme.White.color};
    box-shadow: 0px 2.5px 8px 1px rgba(0, 0, 0, 0, 0.1);
`;

export const AllBookingsRequestsMenuIcon = styled.img`
    width: 12px;
    object-fit: cover;
`;

export const AllBookingsRequestsMenuSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
`;

export const BookingRequestsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding};

    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        gap: ${SpacingTheme.spacing_400.gap};
    }
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
        background-color: ${ColorTheme.Blue.color} !important;
        color: ${ColorTheme.White.color};
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.fontSize};
        font-weight: ${TextTheme.sans_400_semi.fontSize};
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

export const DashboardNoRequestsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const DashboardNoRequestsSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const DashboardNoRequestsWrapper = styled.div`
    display: flex;
    max-width: 230px;
    margin-left: 10px;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    text-align: left;
`;

export const BookingRequestContainerWrapper = styled.div`
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
        width: calc(50% - 12px);
        gap: ${SpacingTheme.spacing_400.gap};
    }
    @media (min-width: 1024px) {
        width: calc((100% - 48px) / 3);
    }
    @media (min-width: 1440px) {
        width: calc((100% - 72px) / 4);
    }
`;
