import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import { Swiper, SwiperSlide } from "swiper/react";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
// Styling for search listing page
import Heart from "react-heart";

export const SearchListingLink = styled(Link)`
    display: block;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    z-index: 10;
    touch-action: manipulation;
`;

export const SearchListingContainer = styled.div`
    width: 100%;
    height: 100dvh;
    background: ${ColorTheme.White.color};
    overflow: scroll;
    overscroll-behavior: none;
    @media (min-width: 768px) {
        display: flex;
        height: calc(100vh - 160px);
        overflow: scroll;
        margin-top: 158px;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

// Styling for search listing results
export const SearchListingResultsSpacerMobile = styled.div`
    width: 100%;
    height: 55dvh;
    display: block;
    background: transparent;
    appearance: none;
    z-index: -2;
    margin: 0;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const SearchListingResultsContainer = styled.div`
    width: 100%;
    margin-top: 0;
    min-height: 60dvh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 24px 24px 0 0;
    background: ${ColorTheme.White.color};
    position: relative;
    z-index: 3;
    padding: 0;
    box-shadow: 1.3px 3px 16px 0px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        margin-top: 0px;
        border-radius: 0;
        padding: 0 24px;
        padding-top: 24px;
        flex: 1;
        min-height: 100vh;
        z-index: 2;
        box-shadow: none;
    }
`;

export const SearchListingResultsContainerTitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${SpacingTheme.spacing_400.padding};

    @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 0 24px 0;
    }
`;

export const SearchListingResultsContainerFilterButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_250.gap};
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const SearchListingResultsContainerFiltersSelected = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${ColorTheme.Red.color};
`;
export const SearchListingResultsContainerFilterIcon = styled.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
`;

export const SearchListingResultsContainerMobileTitleLoading = styled.div`
    width: 180px;
    height: 25px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
`;

export const SearchListingResultsContainerMobileTitleTab = styled.p`
    height: 4px;
    width: 40px;
    border-radius: 100px;
    margin: 6px auto 0;
    background: ${ColorTheme.Grey2.color};
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const SearchListingResultsContainerMobileTitle = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};

    margin: 0;
`;

export const SearchListingResultsContainerDesktopTitleIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;

    /* Full Screen Map Disabled */
    display: none;
`;

interface SearchListingResultCardsWrapperProps {
    noResults: boolean;
}
export const SearchListingResultCardsWrapper = styled.div<SearchListingResultCardsWrapperProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 24px 80px;
    gap: 40px 24px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 0 16px 0;
        gap: 40px 24px;
        justify-content: space-between;
        ${(props) => (props.noResults ? "display:flex; justify-content:center; align-items:center;" : "")};
    }
    &::after {
        content: "";
        flex-grow: 999;
    }
`;

// Search results Styling
export const SearchListingResultCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (min-width: 768px) {
        min-width: calc(50% - 12px);
        flex: 1;
    }
    @media (min-width: 1400px) {
        min-width: calc((100% - 48px) / 3);
        flex: 1;
    }
`;

export const SearchListingVerifiedButton = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin: ${SpacingTheme.spacing_300.margin};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${ColorTheme.White.color};
    display: flex;
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};

    line-height: ${TextTheme.sans_200_semi.lineHeight};
    height: 25px;
    width: 82px;
    z-index: 2;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_350.margin};
        height: 32px;
        width: 110px;
        font-size: ${TextTheme.sans_300_semi.fontSize};
    }
`;

export const SearchListingResultCardImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    overflow: hidden;
    background-color: ${ColorTheme.Grey2.color};
    aspect-ratio: 20/19;

    @media (min-width: 768px) {
        width: unset;
        height: unset;
    }
`;

export const SearchListingResultTextWrapper = styled.div`
    @media (min-width: 768px) {
        grid-column: 2/3;
        grid-row: 1/2;
        display: flex;
        flex-direction: column;
    }
`;

export const SearchListingResultCardSubtitle = styled.p`
    width: calc(100% - 32px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding-top: 12px;
    padding-bottom: 2px;
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
`;

export const SearchListingResultCardTitle = styled.p`
    width: calc(100% - 32px);
    margin: 0;
    font-size: ${TextTheme.sans_350.fontSize};
    line-height: ${TextTheme.sans_350.lineHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: ${TextTheme.sans_350.fontWeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        max-width: 400px;
    }
`;

export const SearchListingResultCardDate = styled.p`
    width: calc(100% - 32px);
    margin: 2px 0 8px;
    font-size: ${TextTheme.sans_350.fontSize};
    line-height: ${TextTheme.sans_350.lineHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: ${TextTheme.sans_350.fontWeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        max-width: 400px;
    }
`;

export const SearchListingResultCardAttributeWrapper = styled.ul`
    width: calc(100% - 32px);
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    gap: ${SpacingTheme.spacing_200.gap};
    margin: 10px 0;
`;

export const SearchListingResultCardAttribute = styled.li`
    height: 20px;
    text-decoration: none;
    padding: 0 8px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    background: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchListingResultCardPrice = styled.p`
    width: fit-content;
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    margin: 0;

    border-bottom: 1px solid ${ColorTheme.Black.color};

    span {
        font-size: ${TextTheme.sans_300.fontSize};
        font-weight: ${TextTheme.sans_300.fontWeight};
    }

    strong {
        color: ${ColorTheme.Grey.color};
        text-decoration: line-through;
    }
`;
export const SearchListingResultReview = styled.div`
    display: flex;
    gap: 10px;
`;
export const SearchListingResultOverallReviewAvg = styled.p`
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
export const SearchListingResultNoReviewText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
`;

export const SearchListingResultCardPropertyDetails = styled.p`
    @media (max-width: 767px) {
        display: none;
    }
    @media (min-width: 768px) {
        margin: 0;
        width: fit-content;
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        text-align: left;

        font-weight: ${TextTheme.sans_300.fontWeight};
        margin-bottom: 20px;
        min-width: 180px;
        // padding: ${SpacingTheme.spacing_350.padding};
    }
`;

export const SearchListingResultCardPriceWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0;
`;

// Search listing map Styling
export const SearchListingMapWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 146px);
    margin-top: 146px;
    z-index: 1;
    pointer-events: auto;

    @media (min-width: 1024px) {
        height: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        position: unset;
        width: 36%;
        position: sticky;
        top: 0;
        margin-top: 0;
    }

    @media (min-width: 1920px) {
        width: 50%;
    }
`;

export const SearchListingMapExitButton = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0px 0px 0px 24px;
    margin-top: 110px;
    height: 43px;
    width: 43px;
    border-radius: 9px;
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    text-align: center;
    cursor: pointer;
    z-index: 4;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

// Mobile filters button

export const GetYourCodeBtn = styled.button`
    width: 192px;
    height: 48px;
    background-color: ${ColorTheme.Black.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    color: ${ColorTheme.White.color};
    cursor: pointer;
    position: fixed;
    bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_200.gap};
    z-index: 1;
`;

export const GetYourCodeBtnIcon = styled.svg`
    width: 16px;
    height: 16px;
`;

export const GetYourCodeBtnText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const SearchListingFiltersWrapper = styled.div`
    width: 100%;
    height: calc(100dvh - 144px);
    max-width: 100vw;
    background: ${ColorTheme.White.color};
    display: flex;
    flex-direction: column;
    margin-top: 52px;
    @media (min-width: 768px) {
        width: 720px;
        height: calc(100vh - 212px);
    }
`;

export const SearchListingFiltersSection = styled.div`
    width: calc(100% - 48px);
    padding: ${SpacingTheme.spacing_500.padding} 0px;
    margin: 0px 24px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

interface SearchFiltersTypeOfPlaceButtonWrapperProps {
    selected: boolean;
}
export const SearchFiltersTypeOfPlaceButtonWrapper = styled.button<SearchFiltersTypeOfPlaceButtonWrapperProps>`
    outline: none;
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : ``)};
    background: ${(props) => (props.selected ? `${ColorTheme.Grey5.color}` : `transparent`)};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_300.padding};
    margin: 2px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    align-items: flex-start;
    justify-content: center;
    gap: ${SpacingTheme.spacing_500.gap};
    min-width: 128px;
    flex: 1;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: 0;
    }
`;

export const SearchListingTypeOfPlaceSection = styled.div`
    display: flex;
    width: calc(100% + 48px);
    padding: 0 24px;
    margin-left: -24px;
    gap: ${SpacingTheme.spacing_250.gap};
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100%;
        margin: -2px;
        padding: 0;
    }
`;

export const SearchFiltersTypeOfPlaceTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

export const SearchFiltersOptionsForYourStayTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

export const SearchFiltersTypeOfPlaceTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const SearchFiltersOptionsForYourStayTitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};

    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 4px;
`;

export const SearchFiltersOptionsForYourStaySubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const SearchFiltersOptionsForYourStayWrapper = styled.div`
    display: flex;
    padding: ${SpacingTheme.spacing_250.padding} 0px;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const SearchListingFiltersSectionDesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    /* Chrome,Safari,Opera */
    &::-webkit-scrollbar {
        display: none;
    }
    /* Firefox*/
    scrollbar-width: none;
    /* IE,Edge */
    -ms-overflow-style: none;
`;

export const SearchListingFiltersSectionDesktop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    padding-bottom: 16px;
`;

export const SearchListingFiltersSectionTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: 0;
    margin-bottom: 12px;
`;

export const SearchListingFiltersSectionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-bottom: 24px;
`;

export const SearchListingFiltersSectionTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchListingFiltersSectionTitleButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const SearchListingFiltersSectionTypeOfPlaceWrapper = styled.div`
    width: 100%;
    height: 46px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr 20px;
    grid-template-rows: 22px auto;

    @media (min-width: 768px) {
        grid-template-columns: 46px 1fr;
    }
`;

export const SearchListingFiltersSectionTypeOfPlaceTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;
    margin: 0;
    @media (min-width: 768px) {
        margin-left: 20px;
        grid-column: 2/3;
    }
`;

export const SearchListingFiltersSectionTypeOfPlaceSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: flex-end;
    margin: 0;
    padding-top: 4px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        grid-column: 2/3;
        margin-left: 20px;
    }
`;

export const SearchListingFiltersSectionPriceRangeInputWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const PriceRangeSliderWrapper = styled.div`
    width: 97%;
    margin-bottom: 32px;
    align-self: center;
`;

export const PriceRangeContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const PriceRangeWrapper = styled.div`
    width: 97%;
    height: 100px;
    align-self: center;
    top: 0;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    column-gap: 1px;
    overflow: clip;
    outline: none;
    isolation: isolate;
    margin-bottom: -32px;
    @media (min-width: 768px) {
        margin-bottom: -24px;
        column-gap: 2px;
    }
`;

interface PriceRangeItemProps {
    height: number;
    selected: boolean;
}
const growAnimation = (height: number) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${height}px;
  }
`;
export const PriceRangeItem = styled.div<PriceRangeItemProps>`
    width: 5px;
    height: ${(props) => `${props.height}px`};
    max-height: 100px;
    background: ${(props) => (props.selected ? `${ColorTheme.Grey1.color}` : `${ColorTheme.Black.color}`)};
    margin-top: auto;
    animation: ${(props) => growAnimation(props.height)} 0.5s ease-out 0.2s forwards;
    @media (min-width: 768px) {
        width: 8px;
    }
`;

export const SearchListingGuestInputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: ${SpacingTheme.spacing_250.margin} 0;
    justify-content: space-between;
`;

export const SearchListingGuestInputText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};

    margin: 0;
    text-align: center;
`;

export const SearchListingGuestInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
`;

export const SearchListingGuestButton = styled.button`
    height: 34px;
    width: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    cursor: pointer;
`;

interface SearchListingAmenitiesWrapperProps {
    moreAmenities: boolean;
}
export const SearchListingAmenitiesWrapper = styled.div<SearchListingAmenitiesWrapperProps>`
    width: 100%;
    display: flex;
    max-height: ${(props) => (props.moreAmenities ? "fit-content" : "144px")};
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const SearchListingFiltersSectionSeeMoreButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;

    margin-top: 20px;
    width: fit-content;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    padding: 0;
    cursor: pointer;
`;

export const SearchListingHouseRulesWrapper = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
`;
interface SearchListingPropertyTypeWrapperProps {
    morePropertyType: boolean;
}
export const SearchListingPropertyTypeWrapper = styled.div<SearchListingPropertyTypeWrapperProps>`
    width: 100%;
    display: flex;
    max-height: ${(props) => (props.morePropertyType ? "fit-content" : "144px")};
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const SearchListingMoreAmenitiesButton = styled.button`
    border: none;
    background: none;

    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    text-decoration: underline;
    margin-right: auto;
    position: relative;
    padding-left: 0;
    cursor: pointer;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-right: auto;
        margin-bottom: 32px;
    }
`;

export const SearchListingAmenitieWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding: ${SpacingTheme.spacing_250.padding} 0;
    width: 50%;

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_300.gap};
    }
    &:last-of-type,
    &:nth-last-of-type(2) {
        height: fit-content;
        padding-top: 12px;
    }
`;

export const SearchListingAmenitieText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    margin: 0;
`;

export const SearchListingFiltersContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SearchListingTypeOfPlaceWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 236px;
    margin-bottom: auto;
    width: 326px;
    height: 367px;
    z-index: 3;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_350.padding};

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SearchListingBedroomWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    bottom: 0;
    margin-left: 280px;
    margin-right: auto;
    margin-top: 236px;
    margin-bottom: auto;
    width: 355px;
    height: 214px;
    z-index: 3;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_350.padding};

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SearchListingGuestWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    bottom: 0;
    margin-left: 280px;
    margin-right: auto;
    margin-top: 236px;
    margin-bottom: auto;
    width: 355px;
    height: 412px;
    z-index: 3;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_350.padding} ${SpacingTheme.spacing_500.padding};
    padding-top: 32px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SearchListingPriceRangeWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 236px;
    margin-bottom: auto;
    width: 400px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_350.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background: ${ColorTheme.White.color};
    z-index: 3;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SearchListingMoreFiltersWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 640px;
    max-height: 90vh;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    border-radius: 14px;
    background: ${ColorTheme.White.color};

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    @media (max-width: 767px) {
        width: 90%; // For smaller screens
        max-height: 90%;
        overflow-y: auto;
    }
`;

export const SearchListingMoreFiltersTitleIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`;

export const SearchListingMoreFiltersTitleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 10;
    align-self: flex-start;
    justify-self: flex-start;
`;

export const SearchListingMoreFiltersTitleWrapper = styled.div`
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    display: grid;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const SearchListingMoreFiltersTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    width: 100%;
    text-align: center;

    margin: 0 auto;
    grid-column: 1/2;
    grid-row: 1/2;
    margin-bottom: 22px;
`;

export const SearchListingMoreFiltersSectionTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
        line-height: ${TextTheme.sans_600_semi.lineHeight};
    }
`;

export const SearchListingMoreFiltersSectionTitleWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const SearchListingPriceRangeTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 16px;
`;

export const SearchListingPopupButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
    margin-top: auto;
`;

interface SearchListingPopupSaveButtonProps {
    moreFilterActivated: boolean;
}
export const SearchListingPopupSaveButton = styled.button<SearchListingPopupSaveButtonProps>`
    height: ${(props) => (props.moreFilterActivated ? "48px" : "36px")};
    width: ${(props) => (props.moreFilterActivated ? "104px" : "75px")};
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    background: ${(props) => (props.disabled ? ColorTheme.Grey1.color : ColorTheme.Red.color)};
    border: none;
    border-radius: 9px;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${(props) => (props.moreFilterActivated ? ButtonTheme.sans_button_200.fontSize : ButtonTheme.sans_button_100.fontSize)};
        line-height: ${(props) => (props.moreFilterActivated ? ButtonTheme.sans_button_200.lineHeight : ButtonTheme.sans_button_100.lineHeight)};
        border-radius: ${(props) => (props.moreFilterActivated ? "10px" : "8px")};
    }
`;

export const SearchListingPopupCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    padding: 0;
    background: none;
    border: none;
    text-decoration: underline;
    margin: 0;
    cursor: pointer;
`;

export const SearchListingCalendarPopupWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 616px;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 11;
`;

export const SearchListingCalendarPopupTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_500.gap};
    justify-content: center;
    padding: ${SpacingTheme.spacing_500.padding} 0;
`;

interface SearchListingCalendarPopupTitleProps {
    selected: boolean;
}
export const SearchListingCalendarPopupTitle = styled.p<SearchListingCalendarPopupTitleProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    color: ${(props) => (props.selected ? "hsla(0, 0%, 15%, 1)" : "hsla(0, 0%, 41%, 1)")};
    margin: 0;
    padding-bottom: 4px;
    border-bottom: ${(props) => (props.selected ? "1px solid hsla(0, 0%, 15%, 1)" : "none")};
`;

export const SearchListingCalendarPopupFooter = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchListingCalendarPopupClearButton = styled.button`
    padding: 0;
    background: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};

    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    text-decoration: underline;
    cursor: pointer;
`;

export const SearchListingCalendarPopupSaveButton = styled.button`
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    width: 156px;
    background: ${ColorTheme.Red.color};
    border: none;
    color: ${ColorTheme.White.color};
    cursor: pointer;
`;

export const MobileNavbarAutocompleteInputWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    width: calc(100% - 48px);
    margin: 0 24px;
    height: fit-content;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 100%;
    margin-bottom: 32px;
`;

export const MobileNavbarAutocompleteInput = styled(Autocomplete)`
    grid-row: 1/2;
    grid-column: 1/4;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey1.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    padding-left: 16px;
    width: calc(100% - 4px);
    padding: 0;
    border: none;
    outline: none;
`;

export const MobileNavbarSearchMenuSearchIcon = styled.img`
    grid-column: 2/3;
    grid-row: 1/2;
    height: 20px;
    width: 20px;
    position: relative;
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
    margin-bottom: 80px;

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
        background-color: ${ColorTheme.Grey3.color} !important;
        box-shadow: 0px 1.5px 6px 0px rgba(0, 0, 0, 0.06) inset;
        color: ${ColorTheme.Black.color};
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }

    @media (min-width: 768px) {
        .MuiPaginationItem-page {
            height: 43px;
            width: 43px;
            border-radius: 50%;
            font-weight: 600;
        }
    }
`;

export const PaginationTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-top: 24px;
`;

interface SearchMapMarkerProps {
    selected: boolean;
}
export const SearchMapMarker = styled.div<SearchMapMarkerProps>`
    position: relative;
    width: fit-content;
    height: 32px;
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    background: ${(props) => (props.selected ? `${ColorTheme.Black.color}` : "#ffffff")};
    color: ${(props) => (props.selected ? `${ColorTheme.White.color}` : "#1d1d1f")};
    z-index: ${(props) => (props.selected ? "1003" : "1")};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0px 2.5px 10px 0px rgba(0, 0, 0, 0.06);

    &:hover {
        transition: transform 0.1s;
        transform: scale(1.05); /* (110% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        cursor: pointer;
    }
`;

export const SearchMapListingCardContainer = styled.div`
    width: 240px;
    background: ${ColorTheme.White.color};
    grid-template-columns: auto 1fr;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    @media (min-width: 768px) {
        width: 320px;
    }
`;

export const SearchMapListingCardWrapper = styled(Link)`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-decoration: none;
    color: unset;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

interface SearchMapListingCardImagesWrapperProps {
    imgLoading?: boolean;
}
export const SearchMapListingCardImageWrapper = styled(SwiperSlide)<SearchMapListingCardImagesWrapperProps>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${(props) => (props.imgLoading ? "none" : "unset")};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} 12px 0 0;
`;
export const SearchMapListingCardImagesWrapper = styled(Swiper)<SearchMapListingCardImagesWrapperProps>`
    aspect-ratio: 5/4;
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} 12px 0 0;
    background-color: ${(props) => (props.imgLoading ? ColorTheme.Grey2.color : "none")};

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 12px;
        font-weight: bolder;
    }

    .swiper-button-prev,
    .swiper-button-next {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        background: ${ColorTheme.White.color};
        color: ${ColorTheme.Black.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        border: 1px solid ${ColorTheme.Grey2.color};
        transition: all 0.2s ease;
        opacity: 0;
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        transform: scale(1.1);
    }

    .swiper-button-disabled {
        pointer-events: auto;
        color: ${ColorTheme.Grey2.color};
        background: ${ColorTheme.Grey5.color};
    }
    .swiper-button-disabled:hover {
        transform: scale(1);
    }
    &:hover {
        .swiper-button-prev,
        .swiper-button-next {
            opacity: 1;
            border: 1px solid ${ColorTheme.Grey1.color};
        }
    }
    .swiper-container,
    .swiper-wrapper,
    .swiper-slide {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .swiper-slide {
        will-change: transform;
    }
`;

export const SearchMapListingCardImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const SearchMapListingCardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_250.padding};
    height: 100%;
    flex: 1;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_250.padding};
    }
`;

export const SearchMapListingCardTitle = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};

    font-weight: ${TextTheme.sans_100_semi.fontWeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 18px;
    @media (min-width: 768px) {
        height: 20px;
    }
`;

export const SearchMapListingCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;
    height: 18px;
    margin-top: 2px;
`;

export const SearchMapListingCardReview = styled.div`
    margin-top: 4px;
    @media (min-width: 768px) {
        margin-top: 8px;
    }
`;

export const TypeOfPlaceCheckBoxWrapper = styled.div`
    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + label {
        border: 2px solid ${ColorTheme.Black.color};
    }

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    height: 46px;
    width: 46px;
`;

export const TypeOfPlaceCheckBoxLabel = styled.label`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    display: inline-block;
    grid-column: 1/2;
    grid-row: 1/2;
    cursor: pointer;
`;

export const TypeOfPlaceCheckBoxIcon = styled.img`
    height: 16px;
    width: 16px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`;

export const SearchFiltersTypeOfPlaceIcon = styled.img`
    height: 24px;
    width: 24px;
`;

export const NoResultWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const NoResultTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 10vh 0 12px;
`;

export const NoResultSubTitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    width: 200px;
    height: 40px;
    color: ${ColorTheme.Grey1.color};
    margin: 0;
    text-align: center;
`;

export const SearchListingFiltersSectionPriceRangeInput = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding: 10px 12px;
    flex: 1;
`;

export const SearchListingFiltersSectionPriceRangeTitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const SearchListingFiltersSectionPriceRangeAmountWrapper = styled.div`
    display: flex;
`;

export const SearchListingFiltersSectionPriceRangeAmountLabel = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
`;

export const SearchLisingFiltersSectionPriceRangeAmountInput = styled.input`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin-left: 4px;
    height: 20px;
    width: 100%;
    border: none;
    outline: none;
    &:focus {
        border: none;
        outline: none;
    }
`;

export const SearchListingSaveButtonWrapper = styled.button`
    border: none;
    z-index: 2;
    background: transparent;
    margin: ${SpacingTheme.spacing_300.margin};
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_300.margin};
    }
`;

export const SearchListingSaveButton = styled(Heart)`
    height: 28px;
    width: 28px;
    stroke: ${ColorTheme.White.color} !important;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const HeartIcon = styled.svg`
    height: 28px;
    width: 28px;
    stroke: ${ColorTheme.White.color} !important;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    path {
        stroke-width: 1.8;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;
