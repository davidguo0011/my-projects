import styled from "styled-components";
import { Link } from "react-router-dom";
// @ts-ignore
import Heart from "react-heart";
import { TextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const SavedListingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 48px);
    padding-top: 36px;
    margin: 0 24px;
    min-height: 100vh;

    @media (min-width: 768px) {
        margin-top: 80px;
        padding-top: 48px;
    }
    @media (min-width: 1280px) {
        width: calc(100% - 160px);
        margin-left: auto;
        margin-right: auto;
    }
`;

export const SavedListingsTitle = styled.h2`
    margin: 0;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`;

export const SavedListingsEmptyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SavedListingsEmptyImage = styled.img`
    height: 64px;
    width: 64px;
    margin: ${SpacingTheme.spacing_500.margin} 0;
`;

export const SavedListingsEmptyTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    text-align: left;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-top: 16px;
    }
`;

export const SavedListingsEmptySubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    max-width: 230px;
    margin: 0;
    align-self: flex-start;
    color: ${ColorTheme.Grey1.color};
`;

export const SavedListingsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 80px;
    gap: 40px;

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_500.gap} 24px;
    }
    &::after {
        content: "";
        flex-grow: 999;
    }
`;

export const SavedListingResultCard = styled(Link)`
    /* min-width: calc(50% - 16px); */
    min-width: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background: ${ColorTheme.White.color};
    overflow: hidden;
    cursor: pointer;
    padding: 0;
    text-align: left;
    position: relative;
    flex: 1;
    @media (min-width: 768px) {
        min-width: calc(50% - 16px);
    }
    @media (min-width: 1024px) {
        min-width: calc(33% - 18px);
    }
    @media (min-width: 1280px) {
        min-width: calc(20% - 19.2px);
    }
`;

export const SavedListingResultCardImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 20/19;
    overflow: hidden;
`;

export const SavedListingDeleteButton = styled.button`
    height: 25px;
    width: 25px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: none;
    border: none;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 20;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${SpacingTheme.spacing_300.margin};

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
        margin: ${SpacingTheme.spacing_350.margin};
    }
`;

export const SavedListingDeleteIcon = styled.img`
    height: 16px;
    width: 16px;
    @media (min-width: 768px) {
        height: 20px;
        width: 20px;
    }
`;

export const SavedListingResultCardTitle = styled.p`
    grid-row: 3/4;
    grid-column: 1/2;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SavedListingResultCardSubtitle = styled.p`
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin-top: 16px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SavedListingResultCardImage = styled.img`
    grid-row: 2/4;
    grid-column: 1/2;
    height: 47px;
    width: 47px;
    object-fit: cover;
    border-radius: 50%;
    align-self: center;
    justify-self: flex-end;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SavedListingsExploreButton = styled(Link)`
    width: calc(100% - 48px);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.fontSize};
    background: ${ColorTheme.Red.color};
    margin-top: auto;
    text-decoration: none;
    border: none;
    color: ${ColorTheme.White.color};
    position: absolute;
    bottom: 114px;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 0px;
        background: ${ColorTheme.Grey2.color};
        top: -24px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const SavedListingsExploreButtonDesktop = styled(Link)`
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.fontSize};
    background: ${ColorTheme.Red.color};
    border: none;
    text-decoration: none;
    color: ${ColorTheme.White.color};
    width: 190px;
    height: 47px;
    display: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const SavedListingsTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
export const ViewListingSaveButtonWrapper = styled.div`
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    border: none;
    z-index: 2;

    margin: ${SpacingTheme.spacing_300.margin};
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;
export const ViewListingSaveButton = styled(Heart)`
    height: 28px;
    width: 28px;
    stroke: ${ColorTheme.White.color} !important;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const SavedListingResultCardAttributeWrapper = styled.ul`
    width: calc(100% - 32px);
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    gap: ${SpacingTheme.spacing_200.gap};
    margin: ${SpacingTheme.spacing_250.margin} 0;
`;

export const SavedListingResultCardAttribute = styled.li`
    border: none;
    height: 20px;
    text-decoration: none;
    padding: 0 12px;
    border-radius: 9px;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};

    background: ${ColorTheme.Grey3.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SavedListingResultCardPrice = styled.p`
    width: fit-content;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;

    span {
        font-size: ${TextTheme.sans_300.fontSize};
        font-weight: ${TextTheme.sans_300.fontWeight};
    }

    strong {
        color: ${ColorTheme.Grey.color};
        text-decoration: line-through;
    }
`;

export const SavedListingResultCardPriceWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
`;
