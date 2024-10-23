import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface EditButtonProps {
    draft: boolean;
    status: string;
}

interface YourListingActiveStatusProps {
    status: string;
}

interface YourListingResultsMenuButtonProps {
    selected: boolean;
}

export const YourListingsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    padding-top: 36px;
    margin-bottom: 80px;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding-top: 0;
        margin-top: 80px;
    }
    @media (min-width: 1280px) {
        padding: ${SpacingTheme.spacing_800.padding};
        padding-top: 0;
    }
`;

export const YourListingsTitle = styled.h1`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        margin-top: 48px;
        margin-bottom: 32px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0 auto;
        margin-top: 48px;
        margin-bottom: 32px;
    }
`;

export const YourListingResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: ${SpacingTheme.spacing_300.gap};

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_500.gap} 24px;
    }
`;

export const YourListingResultWrapper = styled.div`
    width: calc(50% - 8px);
    overflow: hidden;
    position: relative;
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (min-width: 768px) {
        width: calc(33% - 16px);
    }

    @media (min-width: 1024px) {
        width: calc(25% - 18px);
    }

    @media (min-width: 1280px) {
        width: calc(20% - 19.2px);
    }
`;

export const YourListingResultImageWrapper = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    overflow: hidden;
    aspect-ratio: 1/1;
    background-color: ${ColorTheme.Grey3.color};

    @media (min-width: 768px) {
        aspect-ratio: 20/19;
    }
`;

export const YourListingResultImage = styled.img`
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    height: 100%;
`;

export const YourListingResultTitle = styled.p`
    margin: ${SpacingTheme.spacing_250.margin} 0 0 0;
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const YourListingResultSubtitle = styled.p`
    margin-top: 2px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const YourListingEditBarWrapper = styled.div`
    width: calc(100% - 32px);
    align-items: center;

    @media (min-width: 768px) {
        grid-column: 1/2;
        grid-row: 1/2;
        align-self: flex-start;
        justify-self: flex-start;
        width: fit-content;
    }
`;

export const YourListingEditButton = styled.p<EditButtonProps>`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    margin-top: 2px;
    text-transform: capitalize;
    color: ${(props) => (props.draft ? ColorTheme.Yellow.color : props.status === "active" ? ColorTheme.Green.color : ColorTheme.Red1.color)};
`;

export const YourListingAddListingWrapper = styled.div`
    position: fixed;
    bottom: 89px;
    left: 0;
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    z-index: 4;
    justify-content: center;
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const YourListingAddListingLink = styled(Link)`
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`;
export const YourListingAddListingIcon = styled.img`
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

export const YourListingLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const YourListingActiveStatus = styled.div<YourListingActiveStatusProps>`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin: ${SpacingTheme.spacing_300.margin};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    height: 25px;
    width: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.status === "active" ? ColorTheme.Green.color : ColorTheme.Red1.color)};
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    z-index: 2;
    text-transform: capitalize;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_350.margin};
        margin-left: 32px;
        font-size: ${TextTheme.sans_300_semi.fontSize};
        line-height: ${TextTheme.sans_300_semi.lineHeight};
        height: 33px;
        box-shadow: none;
        height: unset;
        width: unset;
        padding: 0;
        align-self: flex-end;
    }
`;

export const YourListingCardIconButton = styled.button`
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
    z-index: 3;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
`;

export const YourListingCardIconButtonIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
    @media (min-width: 768px) {
        height: 20px;
        width: 20px;
    }
`;

export const YourListingsNoListingsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
    margin-top: 16px;

    @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 32px;
    }
`;

export const YourListingsNoListingsTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const YourListingsNoListingsSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const YourListingResultsMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 48px;
`;

export const YourListingResultsMenuWrapper = styled.div`
    display: flex;
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    gap: ${SpacingTheme.spacing_350.gap};
`;

export const YourListingResultsMenuIconButton = styled.button`
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

export const YourListingResultsMenuIcon = styled.img`
    width: 12px;
    object-fit: cover;
`;

export const YourListingResultsMenuButton = styled.button<YourListingResultsMenuButtonProps>`
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

export const YourListingResultsMenuTitle = styled.p`
    margin: 0 auto;
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};

    line-height: ${TextTheme.sans_200.lineHeight};
    @media (min-width: 1280px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
`;

export const YourListingsConnectPayoutLink = styled(Link)`
    height: 80px;
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    text-decoration: none;
    margin: 0 auto;
    margin-bottom: 24px;
    padding: 18px 24px;
    max-width: 1024px;
    cursor: pointer;
`;

export const YourListingsConnectPayoutLinkTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    margin: 0;
`;

export const YourListingsConnectPayoutLinkSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};

    margin: 0;
`;

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
