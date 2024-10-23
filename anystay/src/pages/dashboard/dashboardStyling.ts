import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const DashboardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 64px);
    margin-top: 60px;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        margin-top: 80px;
        min-height: calc(100vh - 80px);
    }
`;

export const DashboardHeaderContainer = styled.div`
    width: 100%;
`;

export const DashboardHeaderWrapper = styled.div`
    width: 100%;
    /* padding: ${SpacingTheme.spacing_500.padding} 0; */

    @media (min-width: 768px) {
        margin: 0 auto;
        padding: 0 32px;
        max-width: calc(1280px + 64px);
    }
`;
export const DashboardHeaderTitleWrapper = styled.div`
    margin: ${SpacingTheme.spacing_600.margin} ${SpacingTheme.spacing_400.margin} ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_400.margin};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_600.margin} 0 ${SpacingTheme.spacing_300.margin} 0;
    }
`;
export const DashboardHeaderTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    text-align: left;
`;

export const DashboardHeaderInfoWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    display: flex;
    overflow-x: scroll;
    margin: 0;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-bottom: 32px;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: calc(100% + 32px);
        margin-left: -16px;
        padding: ${SpacingTheme.spacing_300.padding};
        padding-bottom: 16px;
    }
`;

export const DashboardHeaderInfoCard = styled.div`
    min-width: 216px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    padding: ${SpacingTheme.spacing_350.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
        padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_350.padding};
    }
`;

export const DashboardHeaderInfoCardTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`;

export const DashboardHeaderInfoCardValue = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }

    @media (max-width: 1024px) {
        span {
            display: none;
        }
    }
`;

export const DashboardContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_600.padding} 0px;

    @media (min-width: 768px) {
        ::-webkit-scrollbar {
            display: none;
        }
    }

    @media (min-width: 1280px) {
        padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_500.padding};
        max-width: calc(1280px + 64px);
        margin: 0 auto 128px;
    }
`;

export const DashboardContentTitleWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: 0 32px;
    }
    @media (min-width: 1280px) {
        padding: 0;
    }
`;

export const DashboardTitleWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;

    @media (min-width: 768px) {
        padding: 0 32px;
    }

    @media (min-width: 1280px) {
        max-width: calc(1280px + 64px);
        margin: 0 auto;
        margin-top: 32px;
    }
`;

export const DashboardContentTitle = styled.h2`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    margin: 0;
`;

export const DashboardContentSeeAllButton = styled.button`
    background: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    text-decoration: underline;
    align-self: flex-end;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    margin: 0;
    cursor: pointer;
    padding: 0;
`;

export const DashboardNoRequestsWrapper = styled.div`
    display: flex;
    max-width: 230px;
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    text-align: center;

    @media (min-width: 768px) {
        margin-top: 80px;
    }
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
    margin-bottom: 96px;
    width: 240px;
`;

export const BookingRequestWrapper = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 16px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 0px;
    }
`;

interface BookingRequestTitleProps {
    past?: boolean;
}

export const BookingRequestTitle = styled.p<BookingRequestTitleProps>`
    display: flex;
    justify-content: space-between;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${(props) => (props.past ? `${ColorTheme.Black.color} !important` : ColorTheme.Yellow.color)};
    margin: 0;
    padding: 0 16px;
`;

export const BookingRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: auto;
    margin-top: 4px;
    margin-bottom: 24px;
    width: calc(100% - 32px);
    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
`;

export const BookingRequestRespondButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    border: none;
    background: ${ColorTheme.Yellow.color};
    border-radius: 0px 0px 12px 12px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    text-decoration: none;
    margin-top: 16px;
    width: 100%;
    cursor: pointer;
`;

export const BookingRequestContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    justify-content: space-between;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const BookingRequestContentTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const BookingRequestContentText = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
`;

export const BookingRequestsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 24px;

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_400.gap};
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 32px;
    }

    @media (min-width: 1280px) {
        padding: 0;
        position: relative;
    }
`;

export const BookingRequestGuestProfilePictureWrapper = styled.div`
    height: 52px;
    width: 52px;
    border-radius: 50%;
    background-color: ${ColorTheme.Grey2.color};
    margin-right: 16px;
`;
export const BookingRequestContainerWrapper = styled.div`
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
        width: calc(50% - 12px);
    }
    @media (min-width: 1024px) {
        width: calc((100% - 48px) / 3);
    }
    /* @media (min-width: 1440px) {
        width: calc((100% - 72px) / 4);
    } */
`;

interface BookingRequestGuestProfilePictureProps {
    imgLoading?: boolean;
}
export const BookingRequestGuestProfilePicture = styled.img<BookingRequestGuestProfilePictureProps>`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: ${(props) => (props.imgLoading ? "none" : "block")};
`;

export const BookingRequestsPageMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 340px;
    gap: ${SpacingTheme.spacing_250.gap};
    justify-content: space-between;
    @media (min-width: 1280px) {
        max-width: 556px;
        gap: ${SpacingTheme.spacing_350.gap};
    }
`;

export const BookingRequestsPageMenuContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 550px;
    flex-direction: column;
`;

export const BookingRequestsPageMenuTitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
`;

export const BookingRequestsMenuButton = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    border: none;
    background: ${ColorTheme.White.color};
    justify-content: center;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const BookingRequestPageMenuIcon = styled.img`
    width: 12px;
    object-fit: cover;
`;

interface BookingRequestsPageMenuButtonProps {
    selected: boolean;
}
export const BookingRequestsPageMenuButton = styled.p<BookingRequestsPageMenuButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    height: 32px;
    width: 32px;
    color: ${(props) => (props.selected ? ColorTheme.White.color : ColorTheme.Black.color)};
    background: ${(props) => (props.selected ? ColorTheme.Blue.color : "none")};
    @media (min-width: 1280px) {
        height: 44px;
        width: 44px;
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const PayoutSettingsCardWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
    margin: 0 auto;
    display: grid;
    gap: ${SpacingTheme.spacing_300.gap};
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        overflow: unset;
        padding: 0 32px;
    }

    @media (min-width: 1280px) {
        max-width: calc(1280px + 64px);
    }
`;

export const PayoutSettingIncompleteLink = styled(Link)`
    width: 100%;
    min-width: 216px;
    padding: ${SpacingTheme.spacing_300.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    text-decoration: none;
`;

export const PayoutSettingIncompleteExternalLink = styled.button`
    width: 100%;
    min-width: 216px;
    padding: ${SpacingTheme.spacing_400.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    text-decoration: none;
    text-align: left;

    @media (min-width: 768px) {
        height: 126px;
        padding: ${SpacingTheme.spacing_500.padding};
        margin-top: 40px;
    }
`;

export const PayoutSettingsIncompleteIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
    transform: rotate(180deg);
`;

export const PayoutSettingsIncompleteCategory = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    max-width: 180px;
`;

export const PayoutSettingsIncompleteTitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const PayoutSettingsIncompleteSubtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    max-width: 180px;
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
