import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const HomeFeedListingWrapper = styled.div`
    @media (min-width: 768px) {
        flex: 1 1 auto;
    }
`;
export const HomeFeedListingLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    position: relative;
`;

interface HomeFeedProps {
    aspectRatio: number;
}

export const HomeFeedListingResultCardImageWrapper = styled.div<HomeFeedProps>`
    min-width: 100%;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    margin-bottom: 8px;
    background-color: ${ColorTheme.Grey2.color};
    aspect-ratio: 4/5;
    overflow: hidden;
    @media (min-width: 768px) {
        aspect-ratio: ${(props) => (props.aspectRatio > 1.33 ? 1.33 : `${props.aspectRatio}`)};
        height: 180px;
        /* max-width: 484px; //max aspect ratio 2/1 */
        min-width: 180px; // min aspect ratio 1/1
        margin-bottom: 12px;
    }
`;

export const HomeFeedListingImage = styled.img`
    height: 100%;
    width: 100%;
    vertical-align: middle;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    background-color: ${ColorTheme.Grey2.color};
    object-fit: cover;

    @media (min-width: 768px) {
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    }
`;
export const HomeFeedListingResultTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    @media (min-width: 768px) {
        min-width: 180px;
        max-width: 320px;
        overflow: hidden;
    }
`;
export const HomeFeedListingResultCardTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin-left: 2px;
    margin-bottom: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 2px;
    }
`;

export const HomeFeedListingResultCardDate = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-left: 2px;
    padding-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
        margin-left: 0;
        padding-bottom: 8px;
    }
`;

export const HomeFeedListingResultCardPriceWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
`;

export const HomeFeedListingResultCardPrice = styled.p`
    width: fit-content;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    margin-left: 2px;

    text-decoration: underline;

    span {
        font-size: ${TextTheme.sans_300.fontSize};
        font-weight: ${TextTheme.sans_300.fontWeight};
    }

    strong {
        color: ${ColorTheme.Grey.color};
        text-decoration: line-through;
    }

    @media (min-width: 768px) {
        margin-left: 0;
    }
`;
export const HomeFeedListingResultCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-left: 2px;
    padding-bottom: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 2px;
    }
`;

interface HomeFeedListingSaveButtonWrapperProps {
    hover: boolean;
}
export const HomeFeedListingSaveButtonWrapper = styled.button<HomeFeedListingSaveButtonWrapperProps>`
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    border: none;
    z-index: 2;
    background: transparent;
    margin: ${SpacingTheme.spacing_250.margin};
    position: absolute;
    top: 0;
    right: 0;
    height: 28px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_300.margin};
        opacity: ${(props) => (props.hover ? "1" : "0")};
        transition: opacity 0.2s;
    }
`;

export const HeartIcon = styled.svg`
    height: 24px;
    width: 24px;
    stroke: ${ColorTheme.White.color} !important;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    path {
        stroke-width: 1.8;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }

    @media (min-width: 768px) {
        height: 28px;
        width: 28px;
    }
`;
