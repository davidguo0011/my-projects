import styled from "styled-components";
import { ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ViewListingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding-left: 32px;
        padding-right: 32px;
        max-width: 1184px;
        padding-bottom: 80px;
    }
`;

export const ViewListingTopContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: ${SpacingTheme.spacing_800.gap};
`;
export const ViewListingTopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 30%;
        flex: 1;
    }
`;

export const ViewListingFeaturedImage = styled.div`
    width: 100%;
    aspect-ratio: 4/3;
    background-color: ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        height: unset;
        aspect-ratio: 2.5/1;
        max-height: 720px;
    }
`;

export const ViewListingTitleWrapper = styled.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        justify-content: center;
        margin-bottom: 32px;
    }
`;
export const ViewListingTitleTitle = styled.div`
    width: 230px;
    height: 40px;
    margin-top: 24px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
    max-width: 80%;
    @media (min-width: 768px) {
        width: 420px;
        margin-top: 0;
    }
`;
export const ViewListingTitleSubtitle = styled.div`
    width: 180px;
    height: 20px;
    margin-top: 12px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
    @media (min-width: 768px) {
        width: 356px;
    }
`;

export const ViewListingAmenitiesContainer = styled.div`
    @media (min-width: 768px) {
    }
`;
export const ViewListingSubtitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    width: 100%;
`;
export const ViewListingSubtitleTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ViewListingSubtitlePlaceType = styled.div`
    width: 100%;
    height: 25px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
    margin-bottom: 5px;
    max-width: 60%;
`;
export const ViewListingSubtitleHostedBy = styled.div`
    width: 100%;
    height: 25px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
    max-width: 40%;
`;
export const ViewListingHeaderProfileImageWrapper = styled.div`
    display: grid;
    grid-row: 1/2;
    grid-column: 1/2;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    height: fit-content;
    width: fit-content;
    padding: 0;
    background: none;
    border: none;
`;
export const ViewListingSubtitleImage = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        width: 56px;
        height: 56px;
    }
`;
export const ViewListingAmenitiesWrapper = styled.div`
    width: 100%;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-wrap: wrap;
    height: 202px;
    align-content: space-evenly;

    @media (min-width: 768px) {
        height: 150px;
    }
`;
export const ViewListingAmenitie = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 768px) {
        width: 25%;
    }
`;
export const ViewListingAmenitieIcon = styled.div`
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    background-color: ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;
export const ViewListingAmenitieText = styled.div`
    margin-top: 12px;
    width: 50%;
    max-width: 90px;
    height: 17px;
    border-radius: 5px;
    background-color: ${ColorTheme.Grey2.color};
`;
export const ViewListingDescriptionWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: ${SpacingTheme.spacing_400.padding} 0 ${SpacingTheme.spacing_500.padding};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_600.padding} 0;
        border: 0;
    }
`;
export const ViewListingDescriptionText = styled.div`
    width: 250px;
    height: 25px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
`;

export const ViewListingAboutLocationWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};
`;
export const ViewListingAboutLocationTitle = styled.div`
    width: 240px;
    height: 33px;
    background-color: ${ColorTheme.Grey2.color};
    border-radius: 5px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        width: 541px;
    }
`;
export const ViewListingMapWrapper = styled.div`
    width: 100%;
    height: 400px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background-color: ${ColorTheme.Grey2.color};
`;
