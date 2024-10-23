import styled from "styled-components";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Heart from "react-heart";
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { TextTheme, ButtonTheme, ColorTheme, TallTextTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
// Styling for view listing page

export const ViewListingCouponHeader = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ViewListingCouponHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const ViewListingCouponHeaderBtn = styled.button`
    width: 83px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    background-color: ${ColorTheme.Black.color};
    color: ${ColorTheme.White.color};
    margin-left: 12px;
    cursor: pointer;
`;

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
    }

    @media (min-width: 1280px) {
        padding-left: unset;
        padding-right: unset;
        max-width: 1120px;
    }
`;
export const ViewListingTopContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;

    @media (min-width: 1280px) {
        gap: ${SpacingTheme.spacing_800.gap};
    }
`;
export const ViewListingTopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 58%;
        flex: 1;
    }

    @media (min-width: 1280px) {
        max-width: 688px;
        flex: 1;
    }
`;

// Featured images Styling
export const ViewListingFeaturedImagesWrapper = styled(Swiper)`
    width: 100%;
    height: 100%;
    background: ${ColorTheme.White.color};

    ::selection {
        display: none;
    }
    .swiper-pagination {
        display: none;
    }

    @media (min-width: 768px) {
        display: none;
    }

    .swiper-button-prev,
    .swiper-button-next {
        display: none;
    }
`;

export const ViewListingFeaturedImageWrapper = styled(SwiperSlide)`
    aspect-ratio: 4/3;
    @media (min-width: 768px) {
        height: unset;
        aspect-ratio: 2.5/1;
        max-height: 720px;
    }
`;

export const ViewListingFeaturedImageDesktopWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_200.gap};
    overflow: hidden;

    @media (max-width: 767px) {
        display: none;
    }
`;

interface ViewListingFeaturedImageSectionProps {
    columnReverse?: boolean;
}
export const ViewListingFeaturedImageSection = styled.div<ViewListingFeaturedImageSectionProps>`
    display: flex;
    flex-direction: ${(props) => (props.columnReverse ? "column-reverse" : "column")};
    overflow: hidden;
    gap: ${SpacingTheme.spacing_200.gap};
    max-height: 100%;
    max-width: 45%;
    flex: 1;
`;
export const ViewListingFeaturedImageBottomPart = styled.div`
    display: flex;
    flex: 1;
    gap: ${SpacingTheme.spacing_200.gap};
    max-height: 50%;
    min-height: 35%;
`;

interface ViewListingImageMasonryItemWrapperProps {
    aspectRatio: number;
}
export const ViewListingImageMasonryItemWrapper = styled.div<ViewListingImageMasonryItemWrapperProps>`
    aspect-ratio: ${(props) => `${props.aspectRatio}`};
    background: ${ColorTheme.Grey2.color};
`;

interface ViewListingFeaturedImageProps {
    imgLoaded: boolean;
}
export const ViewListingFeaturedImage = styled.img<ViewListingFeaturedImageProps>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    display: ${(props) => (props.imgLoaded ? "block" : "none")};
`;

interface ViewListingImageBackIconProps {
    url: string;
    index: boolean;
}
export const ViewListingImageBackIcon = styled.div<ViewListingImageBackIconProps>`
    position: absolute;
    height: 96px;
    width: 96px;
    background: ${ColorTheme.White.color};
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    cursor: pointer;
    aspect-ratio: 1/1;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 4px solid ${ColorTheme.White.color};
    right: 32px;
    bottom: 24px;
    z-index: ${(props) => (props.index ? "100" : "200")};
    transform: ${(props) => (props.index ? "rotate(15deg)" : "rotate(12.5deg)")};
    transform-origin: right;
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s;

    @media (max-width: 767px) {
        display: none;
    }
`;

interface ViewListingImageHeartIconProps {
    url: string;
}
export const ViewListingImageIcon = styled.div<ViewListingImageHeartIconProps>`
    position: absolute;
    height: 96px;
    width: 96px;
    background: ${ColorTheme.White.color};
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    cursor: pointer;
    aspect-ratio: 1/1;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 4px solid ${ColorTheme.White.color};
    right: 40px;
    bottom: 24px;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ViewListingFeaturedImageTitle = styled.p`
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    margin-bottom: 2px;
`;

export const ViewListingFeaturedImageTextWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${ColorTheme.Black.opacityColor};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;

// View listing title
export const ViewListingTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding} 0;

    @media (min-width: 768px) {
        justify-content: center;
        padding: ${SpacingTheme.spacing_500.padding} 0;
    }
`;

export const ViewListingSubtitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const ViewListingCouponArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 48px;
    background-color: ${ColorTheme.Grey5.color};
    border: 1px solid ${ColorTheme.Grey3.color};
    border-radius: 9px;
    margin-top: 24px;
    position: relative;
    justify-content: center;

    /* Hidden by Bill */
    display: none;

    @media (min-width: 768px) {
        margin-top: 32px;
    }
`;

export const ViewListingCouponAreaContent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ViewListingCouponAreaText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
`;

export const ViewListingSubtitle = styled.p`
    padding-right: 44px;
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};

    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
    }
`;

export const ViewListingTitleSubtitle = styled.h2`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    padding: 0;
    margin: 0;
    margin-top: 24px;

    span {
        text-transform: capitalize;
    }

    @media (max-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        margin-top: 16px;
    }
`;

export const ViewListingTitleAmenities = styled.div`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-top: 4px;

    @media (max-width: 768px) {
        font-size: ${TextTheme.sans_300_semi.fontSize};
        line-height: ${TextTheme.sans_300_semi.lineHeight};
    }
`;

export const ViewListingTitleReview = styled.div`
    display: flex;
    gap: 4px;
    margin-top: ${SpacingTheme.spacing_200.margin};
`;

export const ViewListingTitleReviewStar = styled.div`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

export const ViewListingTitleReviewText = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};

    strong {
        text-decoration: underline;
    }
`;

export const ViewListingDesktopMenuWrapper = styled.div`
    display: none;

    @media (min-width: 1024px) {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1280px) {
        width: 376px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
`;

export const ViewListingDesktopMenu = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin: 40px 0 48px 0;
    padding: ${SpacingTheme.spacing_400.padding} 28px 0;
    position: sticky;
    top: 80px;

    @media (max-width: 1023px) {
        display: none;
    }
    @media (min-width: 1280px) {
        margin-right: 0;
    }
`;

export const ViewListingDesktopMenuPrice = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    span {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
    }
`;

export const ViewListingDesktopMenuDatesWrapper = styled.div`
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    display: grid;
    height: 120px;
    margin-top: ${SpacingTheme.spacing_400.margin};
`;

export const ViewListingDesktopMenuDatesItem = styled.button`
    width: 100%;
    height: 100%;
    background: none;
    padding: 0;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    padding: ${SpacingTheme.spacing_250.padding};
    flex-direction: column;
`;

export const ViewListingDesktopMenuDatesItemTitle = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};

    line-height: ${TextTheme.sans_200_semi.lineHeight};
    margin: 0 0 2px;
`;

export const ViewListingDesktopMenuDatesItemSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const ViewListingDesktopMenuDatesSelectSubtitle = styled.p`
    margin: 0 auto;
    margin-top: ${SpacingTheme.spacing_300.margin};
    margin-bottom: ${SpacingTheme.spacing_400.margin};
    text-align: center;
    max-width: 250px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

interface ViewListingDesktopMenuDatesSubtotalProps {
    showBreakdown?: boolean;
}
export const ViewListingDesktopMenuDatesSubtotal = styled.p<ViewListingDesktopMenuDatesSubtotalProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};

    margin: 0;
    cursor: ${(props) => (props.showBreakdown ? "pointer" : "default")};
    text-decoration: ${(props) => (props.showBreakdown ? "underline" : "none")};
`;

export const ViewListingDesktopMenuDatesTotal = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
`;

export const ViewListingDesktopMenuDatesDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_400.margin} 0;
`;

export const ViewListingTitleTitle = styled.h1`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    padding: 0;
    overflow-wrap: break-word;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;

// Verify Listing styling
export const ViewListingVerifyListingWrapper = styled.div`
    width: 100%;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${SpacingTheme.spacing_500.margin};
`;
export const ViewListingVerifyListingTitleWrapper = styled.div`
    margin: ${SpacingTheme.spacing_300.margin};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;
export const ViewListingVerifyListingTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;
export const ViewListingVerifyListingSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;
export const ViewListingVerifyListingBtn = styled.a`
    background: none;
    border: none;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin-left: auto;
    margin-right: ${SpacingTheme.spacing_300.margin};
    text-decoration: underline;
    cursor: pointer;
`;

// ViewListing No Service Fee
export const ViewListingNoServiceFeeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    padding-bottom: ${SpacingTheme.spacing_500.padding};
`;
export const ViewListingNoServiceFeeIconWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ViewListingNoServiceFeeIcon = styled.img`
    width: 32px;
    height: 32px;
`;
export const ViewListingNoServiceFeeTitleWrapper = styled.div`
    margin-left: ${SpacingTheme.spacing_400.margin};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;
export const ViewListingNoServiceFeeTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;
export const ViewListingNoServiceFeeSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

// Amenities styling
export const ViewListingAmenitiesContainer = styled.div`
    @media (min-width: 768px) {
    }
`;

export const ViewListingAmenitiesWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-wrap: wrap;
    height: 202px;
    align-content: space-evenly;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin-right: 32px;
        margin-left: 32px;
        height: 150px;
    }
    @media (min-width: 1280px) {
        margin: 0;
        width: 100%;
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

export const ViewListingAmenitieIcon = styled.img`
    width: 24px;
    margin: 0;
    padding: 0;
    object-fit: cover;
    @media (min-width: 768px) {
        width: 32px;
    }
`;

export const ViewListingAmenitieText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    margin: 0;
    margin-top: 12px;
    line-height: ${TextTheme.sans_300.lineHeight};

    font-weight: ${TextTheme.sans_300.fontWeight};
`;

// View listing first review section
export const ViewListingReviewWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding} 0;
    margin: 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    overflow: hidden;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding} 0;
    }
`;

export const ViewListingReviewBox = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: 10px;
    justify-content: center;
`;

interface ViewListingReviewTitleProps {
    reviews: object[];
}
export const ViewListingReviewTitle = styled.p<ViewListingReviewTitleProps>`
    font-size: ${(props) => (props.reviews.length !== 0 ? TextTheme.sans_800_semi.fontSize : TextTheme.sans_500_semi.fontSize)};
    line-height: ${(props) => (props.reviews.length !== 0 ? TextTheme.sans_800_semi.lineHeight : TextTheme.sans_500_semi.lineHeight)};
    font-weight: ${(props) => (props.reviews.length !== 0 ? TextTheme.sans_800_semi.fontWeight : TextTheme.sans_500_semi.fontWeight)};
`;

export const ViewListingReviewContentHeader = styled.div`
    gap: ${SpacingTheme.spacing_100.gap};
    margin-left: 20px;
    width: calc(100% - 82px);
`;

export const ViewListingReviewContentTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin-bottom: 4px;
`;

export const ViewListingReviewContentSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: 20px;
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    max-width: 480px;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// View listing description
export const ViewListingDescriptionWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_600.padding} 0;
        border: 0;
    }
`;

export const ViewListingDescriptionText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    margin: 0;
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};

    max-width: 100%;
    word-wrap: break-word;
`;

// Available room styling
export const ViewLisitingAvailableRoomWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        border-top: 1px solid ${ColorTheme.Grey2.color};
        padding: ${SpacingTheme.spacing_600.padding} 0;
    }
`;

export const ViewLisitingAvailableRoomTitle = styled.h4`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
        position: absolute;
        padding: 0;
    }
`;

export const ViewLisitingAvailableRooms = styled(Swiper)`
    width: calc(100% + 48px);
    display: flex;
    padding-top: 24px;
    position: relative;
    padding-left: 24px;
    margin-left: -24px;

    &:last-child {
        padding-right: 24px;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: calc(100% + 16px);
        padding-left: 16px;
        margin-left: -16px;
        height: 100%;
        padding-top: 50px;
        &:last-child {
            padding-right: 24px;
        }
    }

    @media (min-width: 1024px) {
        &:last-child {
            padding-right: 10px;
        }
    }
    .swiper-button-next,
    .swiper-button-prev {
        top: 48%;
        transform: translateY(-50%);
        height: 36px;
        width: 36px;
        right: 0;
        margin-right: 16px;
        border-radius: 50%;
        background: ${ColorTheme.White.color};
        color: ${ColorTheme.Black.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        display: none;
    }
    .swiper-button-prev {
        left: 0;
        margin-right: 0;
        margin-left: 16px;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 14px !important;
    }
    .swiper-button-disabled {
        display: none;
    }
`;

interface ViewLisitingSwiperButtonProps {
    selected: boolean;
}
export const ViewLisitingSwiperButton = styled.button<ViewLisitingSwiperButtonProps>`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid;
    border-color: ${(props) => (props.selected ? `${ColorTheme.Grey2.color}` : `${ColorTheme.Grey1.color}`)};
`;

export const ViewLisitingSwiperButtonWrapper = styled.div`
    min-width: 88px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -50px;
    right: 78px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SwiperSlideWrapper = styled(SwiperSlide)`
    width: 200px;

    @media (min-width: 768px) {
        width: 220px;
    }
`;

export const ViewLisitingAvailableRoom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    overflow: hidden;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    /* border: 1px solid ${ColorTheme.Grey2.color}; */
    aspect-ratio: 1/1;
`;

export const ViewLisitingAvailableRoomIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const ViewLisitingAvailableRoomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ViewLisitingAvailableRoomText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    margin: 0;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ViewLisitingAvailableRoomSubtext = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-top: 2px;
`;

export const ViewLisitingAvailableRoomSubtextListItem = styled.li`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

//
export const ViewListingAmenitiesListWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    margin: 0;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_600.padding} 0;
        width: 100%;
    }
    @media (min-width: 1280px) {
        margin: 0;
        width: 688px;
    }
`;

export const ViewListingAmenitiesListTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
`;

export const ViewListingAmenitiesListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${SpacingTheme.spacing_300.gap} 0;
`;

export const ViewListingAmenitiesListItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const ViewListingAmenitiesListItemIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
`;

export const ViewListingAmenitiesListItemText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    margin: 0;
    padding: 0;
`;

export const ViewListingAmenitiesMoreButton = styled.button`
    border: none;
    background: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};

    margin: 0;
    margin-top: 32px;
    cursor: pointer;
    height: 40px;
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    background: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    cursor: pointer;

    @media (min-width: 768px) {
        width: fit-content;
        padding: 0 24px;
        margin-top: 48px;
    }
`;

export const ViewListingReadMoreButton = styled.button`
    display: inline;
    border: none;
    background: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    margin: 0;
    padding: 0;
    cursor: pointer;
    background: none;
`;
//
export const ViewListingAboutLocationWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_600.padding} 0;
    }
`;

export const ViewListingReviewsWrapper = styled.div`
    width: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    margin-bottom: 32px;
    padding-top: 32px;

    @media (min-width: 768px) {
        margin-bottom: 48px;
        padding-top: 48px;
    }
`;

export const ViewListingReviewsItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_500.gap};

    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-content: baseline;
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;

export const ViewListingReviewsHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ViewListingReviewsHeaderRating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ViewListingReviewsHeaderDivider = styled.div`
    width: 1px;
    height: 24px;
    margin: 0 24px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const ViewListingReviewsHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    justify-content: flex-end;
`;

export const ViewListingReviewsHeaderRatingTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-style: normal;
    margin-bottom: 4px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;

interface ViewListingReviewsCommentSwiperWrapperProps {
    isShow: boolean;
}
export const ViewListingReviewsCommentSwiperWrapper = styled.div<ViewListingReviewsCommentSwiperWrapperProps>`
    width: 100%;
    height: fit-content;
    position: relative;
    display: ${(props) => (props.isShow ? `block` : `hidden`)};
`;

export const ViewListingNoReviewsCommentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export const ViewListingNoReviewsCommentTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    color: ${ColorTheme.Grey1.color};
    margin-bottom: 12px;
`;

export const ViewListingNoReviewsCommentSubtitle = styled.div`
    font-size: ${TextTheme.sans_500.fontSize};
    font-weight: ${TextTheme.sans_500.fontWeight};
    line-height: ${TextTheme.sans_500.lineHeight};
    color: ${ColorTheme.Grey1.color};
    margin-bottom: 128px;
`;

export const ViewListingReviewsSeeAllReviewBtn = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 32px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    border: 1px solid ${ColorTheme.Grey1.color};
    height: 40px;
    background-color: ${ColorTheme.White.color};

    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    cursor: pointer;

    @media (min-width: 768px) {
        width: fit-content;
        border: 1px solid ${ColorTheme.Grey1.color};
        border-radius: 9px;
        padding: 0 32px;
        height: 48px;
        margin-top: 48px;
        background-color: ${ColorTheme.White.color};

        font-size: ${TextTheme.sans_400_semi.fontSize};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ViewListingReviewsCommentSwiper = styled.div`
    width: 100%;
    height: 100%;
`;

export const ViewListingAboutLocationTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: 0;
    padding: 0;
    margin-bottom: 24px;
`;

export const ViewListingAboutLocationSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0;
    padding: 0;
    margin-top: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }

    display: none;
`;

export const ViewListingMapWrapper = styled.div`
    width: 100%;
    height: 440px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} !important;
    position: relative;
    overflow: hidden;
`;

// View Listing Expandable section
export const ViewListingExpandableSectionContainer = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        border-top: none;
        margin: 0;
        width: 33%;
        padding: ${SpacingTheme.spacing_600.padding} 0 0;
        padding-right: 48px;
    }
`;

export const ViewListingExpandableSectionContainerCancel = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    border-top: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        width: 33%;
        border: none;
        padding: ${SpacingTheme.spacing_600.padding} 0 0;
    }
`;
export const ViewListingExpandableSectionWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`;

export const ViewListingExpandableSectionTitle = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    margin: 0;
    padding: 0;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin-bottom: 8px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ViewListingExpandableSectionSubtitle = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    margin: 0;
    padding: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 40px;
`;

// SHare button styling
export const ViewListingShareButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border: none;
    cursor: pointer;

    p {
        font-size: ${ButtonTheme.sans_button_100.fontSize};
        font-weight: ${TextTheme.sans_300.fontWeight};

        line-height: ${ButtonTheme.sans_button_100.lineHeight};
    }
`;

export const ViewListingHeaderShareButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey1.color};
    cursor: pointer;

    p {
        font-size: ${ButtonTheme.sans_button_100.fontSize};
        font-weight: ${TextTheme.sans_300.fontWeight};

        line-height: ${ButtonTheme.sans_button_100.lineHeight};
    }
`;

export const ViewListingSaveAndShareButtonWrapper = styled.div`
    display: flex;
`;

export const ViewListingShareButtonIcon = styled.img`
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
`;

export const ViewListingSaveButtonWrapper = styled.div`
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    border-radius: 50%;
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};

    line-height: ${TextTheme.sans_300.lineHeight};
    gap: ${SpacingTheme.spacing_250.gap};
    margin-right: 16px;
    user-select: none;
    cursor: pointer;
`;

export const ViewListingHeaderSaveButtonWrapper = styled.div`
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    border-radius: 50%;
    background: ${ColorTheme.White.color};

    line-height: ${TextTheme.sans_300.lineHeight};
    gap: ${SpacingTheme.spacing_250.gap};
    margin-right: 16px;
    user-select: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    cursor: pointer;
`;

interface ViewListingIconWrapparProps {
    isSticky?: boolean;
    loggedIn?: boolean;
}
export const ViewListingIconWrappar = styled.div<ViewListingIconWrapparProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) =>
        props.isSticky
            ? `position: fixed; top:0; left:0; right:0; z-index: 10; background-color: ${ColorTheme.White.color}; box-shadow: ${ShadowTheme.shadow_50.boxShadow};`
            : props.loggedIn
              ? "position: absolute; top: 0;"
              : "position: absolute; top: 56px;"}
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_300.padding} 26px;
    z-index: 100;
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_500.padding} 0 ${SpacingTheme.spacing_500.padding};
        background-color: transparent;
        box-shadow: none;
        position: absolute;
        /* top: ${(props) => (props.loggedIn ? "0" : "56px")}; */
        top: 0;
    }
`;

export const ViewListingSaveButton = styled(Heart)`
    height: 18px;
    width: 18px;
    user-select: none;
`;

export const ViewListingExapndableDesktopWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        border-top: 1px solid ${ColorTheme.Grey2.color};
        padding-bottom: 48px;
    }
`;

export const ViewListingOwnerSectionWrapper = styled.div`
    width: 100%;
    border: none;
    background: none;
    text-align: left;
    /* border-top: 1px solid ${ColorTheme.Grey2.color}; */
    display: flex;
    padding-bottom: 32px;
    flex-direction: column;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: fit-content(50%) fit-content(50%);
        overflow: hidden;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        padding-bottom: 48px;
    }
`;

export const ViewListingOwnerSectionPartWrapper = styled.div`
    width: 100%;

    @media (min-width: 1024px) {
        padding-right: 48px;
        width: 33%;
    }
`;

export const ViewListingOwnerSectionButton = styled.button`
    cursor: pointer;
    background: none;
    padding: 0;
    border: none;
    display: flex;
    text-align: left;
    width: 100%;

    @media (min-width: 768px) {
        overflow: hidden;
    }
`;

export const ViewListingOwnerSectionImage = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 72px;
    width: 72px;
    object-fit: cover;
    border-radius: 50%;
`;

export const ViewListingOwnerSectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ViewListingOwnerSectionTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    margin: 0;
    margin-bottom: 4px;
`;

export const ViewListingOwnerSectionText = styled.p`
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};

    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    margin: 0;
    margin-top: 24px;
    span {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 768px) {
        grid-column: 2;
        grid-row: 1;
        margin-top: 0;
        overflow: hidden;
    }

    @media (min-width: 1024px) {
        max-width: 100%;
        word-wrap: break-word;
    }
`;

export const ViewListingOwnerSectionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const ViewListingOwnerSectionQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        grid-column: 2;
        grid-row: 2;
    }

    @media (min-width: 1024px) {
        width: 33%;
        align-items: end;
    }
`;

export const ViewListingOwnerSectionQuestionButton = styled.button`
    width: 100%;
    border: none;
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    border: 1px solid ${ColorTheme.Grey1.color};
    margin: 0;
    margin-top: 24px;
    padding: 0;
    cursor: pointer;
    /* margin-bottom: 15px; */
    background: none;

    @media (min-width: 768px) {
        margin-top: 0;
        padding: 0 32px;
        width: fit-content;
        height: 52px;
        background: none;
    }
`;

export const ViewListingOwnerSectionQuestionNotice = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    width: fit-content;
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.fontSize};
    color: hsla(0, 0%, 15%, 1);
    margin: 0 auto;
    display: flex;
    gap: ${SpacingTheme.spacing_250.gap};
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
    }
    @media (min-width: 1024px) {
        align-self: flex-start;
    }
`;

export const ViewListingOwnerSectionQuestionNoticeIcon = styled.img`
    height: 12px;
    width: 12px;

    @media (min-width: 768px) {
        height: 16px;
        width: 16px;
    }
`;

export const ViewListingFooterWrapper = styled.div`
    position: fixed;
    left: 0;
    z-index: 100;
    bottom: 0;
    display: grid;
    grid-template-columns: auto 124px;
    grid-template-rows: 100%;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    background: ${ColorTheme.White.color};
    width: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

interface ViewListingFooterButtonProps {
    inactive?: boolean;
}
export const ViewListingFooterButton = styled.button<ViewListingFooterButtonProps>`
    width: 100%;
    height: 48px;
    grid-row: 1/2;
    grid-column: 2/3;
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    background: ${(props) => (props.inactive ? ColorTheme.Grey1.color : GradientTheme.Red.background)};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        height: 52px;
        margin-top: 16px;
    }

    /* &:hover {
        transition: 0.2s ease-in-out;
        background: ${(props) => (props.inactive ? ColorTheme.Grey5.color : GradientTheme.Red.background)};
    } */
`;

export const ViewListingFooterTextWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-items: center;
`;

export const ViewListingFooterTitleText = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    margin: 0;
    font-weight: ${TextTheme.sans_500.fontWeight};

    line-height: ${TextTheme.sans_500.lineHeight};

    span {
        font-weight: ${TextTheme.sans_500_semi.fontWeight};
    }
`;

interface ViewListingFooterSubtitleTextProps {
    underlineActive: boolean;
}
export const ViewListingFooterSubtitleText = styled.p<ViewListingFooterSubtitleTextProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    margin: 0;
    font-weight: ${(props) => (props.underlineActive ? TextTheme.sans_300_semi.fontWeight : TextTheme.sans_300.fontWeight)};
    margin-top: 4px;

    line-height: ${TextTheme.sans_300.lineHeight};
    text-decoration: ${(props) => (props.underlineActive ? "underline" : "none")};
`;

export const ViewListingReservationDatepickerLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
    position: relative;
`;

export const ViewListingReservationDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_500.margin} 0;

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_600.margin} 0;
    }
`;

export const ShareListingPopupWrapper = styled.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${ColorTheme.White.color};
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;

    @media (min-width: 768px) {
        width: 555px;
        height: 516px;
        border-radius: 14px;
        min-height: unset;
    }
`;

export const ShareListingPopupTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: 100%;
    height: 64px;
`;

export const ShareListingPopupTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0 auto;
    padding-right: 16px;
    justify-self: center;
    line-height: ${TextTheme.sans_300_semi.lineHeight};
`;

export const ShareListingPopupHeaderWrapper = styled.div`
    display: grid;
    width: 100%;
    overflow: hidden;
    grid-template-columns: 132px 1fr;
    grid-template-rows: 1fr;
    min-height: 132px;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const ShareListingPopupHeaderImage = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    object-fit: cover;
    border-radius: 5px;
    width: 116px;
    height: 100%;
`;

export const ShareListingPopupHeaderPlaceType = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
`;

export const ShareListingPopupHeaderText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};

    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: auto;
`;

export const ShareListingPopupHeaderTextPrice = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};

    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;

    span {
        font-size: ${TextTheme.sans_300_semi.fontSize};
        line-height: ${TextTheme.sans_300_semi.lineHeight};
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
`;

export const ShareListingDoneButton = styled.button`
    height: 48px;
    width: 100%;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    background: ${ColorTheme.Red.color};
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ShareListingDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_400.margin} 0;
    margin-top: auto;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const IndividualEmailShareButton = styled(EmailShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualFacebookShareButton = styled(FacebookShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualTwitterShareButton = styled(TwitterShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualWhatsappShareButton = styled(WhatsappShareButton)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualShareButton = styled.div`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    padding-left: 16px;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
`;

export const CouponCopyButton = styled.div`
    height: 100%;
    width: 16px;
    background: ${ColorTheme.Grey3.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-left: 12px;
    cursor: pointer;
`;

export const IndividualShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: ${BorderRadiusTheme.radius_4.borderRadius};
    object-fit: cover;
`;

export const CouponCopyButtonIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`;

export const IndividualShareButtonText = styled.p`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};

    margin: 0;
`;

export const ViewListingSendMessageRequestWrapper = styled(motion.div)`
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        height: fit-content;
        max-width: 560px;
    }
`;

export const ViewListingSendMessageRequestTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    margin: 0 auto;
    margin-top: 8px;
    margin-bottom: 12px;
    text-align: center;
`;

export const ViewListingSendMessageRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    margin: 0 auto;
    margin-bottom: 32px;
    text-align: center;
    max-width: 220px;
`;

export const ViewListingSendMessageRequestTextInput = styled.textarea`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 240px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_300.padding};
    outline: none;
    resize: none;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    &placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const ViewListingSendMessageRequestSentTitleWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${SpacingTheme.spacing_350.padding} 0;
`;

export const ViewListingSendMessageRequestSentTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
`;

export const ViewListingSendMessageRequestSentHeader = styled.div`
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    width: calc(100% - 48px);
    margin: 0 auto;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const ViewListingSendMessageRequestSentImage = styled.img`
    height: 100px;
    aspect-ratio: 4/3;
    border-radius: 9px;
    object-fit: cover;
`;

export const ViewListingSendMessageRequestSentHeaderTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
`;

export const ViewListingSendMessageRequestSentHeaderSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};

    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ViewListingSendMessageRequestSentHeaderPrice = styled.p`
    justify-self: flex-end;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    span {
        font-size: ${TextTheme.sans_400.fontSize};
        font-weight: ${TextTheme.sans_400.fontWeight};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ViewListingSendMessageRequestSentHeaderTotalWrapper = styled.div`
    width: calc(100% - 48px);
    padding: ${SpacingTheme.spacing_400.padding} 0 ${SpacingTheme.spacing_600.padding} 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const ViewListingSendMessageRequestSentHeaderSubtotal = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ViewListingSendMessageRequestSentHeaderTotal = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const ViewListingHouseRulesTitleWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    align-items: center;
    grid-column: 1/2;
    grid-row: 1/2;
    margin-top: 32px;
    text-align: justify;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ViewListingHouseRulesIconWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    align-items: center;
    margin-bottom: 12px;
`;

export const ViewListingHouseRulesIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`;

export const ViewListingHouseRulesText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ViewListingHouseRulesIconsWrapper = styled.div`
    margin-top: 16px;
`;

export const ViewListingDamageDepositText = styled.span`
    margin: 0;
    margin-top: 4px;
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    max-width: 300px;

    &strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const ViewListingDamageDepositLink = styled.a`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    text-decoration: underline;
    cursor: pointer;
`;

interface ViewListingDesktopHeaderWrapperProps {
    desktopHeaderActive?: boolean;
}
export const ViewListingDesktopHeaderWrapper = styled(motion.div)<ViewListingDesktopHeaderWrapperProps>`
    min-width: 480px;
    height: 80px;
    background: ${ColorTheme.White.color};
    position: fixed;
    z-index: 10;
    top: 24px;
    left: calc((100% - 480px) / 2);
    /* border-top: 1px solid ${ColorTheme.Grey2.color}; */
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    transition: 125ms;
    box-shadow: ${(props) => (props.desktopHeaderActive ? ShadowTheme.shadow_100.boxShadow : "none")};

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ViewListingDesktopHeaderContentWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 0 24px;
    align-items: center;
    max-width: 1184px;
    margin: 0 auto;
`;

export const ViewListingDesktopHeaderPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
    /* margin-left: auto; */
    margin-top: 19px;
    margin-bottom: 19px;
`;

export const ViewListingDesktopHeaderPrice = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    text-align: left;

    margin: 0;

    strong {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
    }
`;

export const ViewListingDesktopHeaderMinimum = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};

    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
`;

export const ViewListingDesktopHeaderReserveButton = styled.button`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 9px;
    border: none;
    background: ${GradientTheme.Red.background};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    color: ${ColorTheme.White.color};
    margin-left: auto;
    padding: 0 32px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};

    &:hover {
        transition: 0.2s ease-in-out;
        background: ${GradientTheme.Red.background};
    }
`;

export const ViewListingReviewsSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const ViewListingReviewsTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
`;

export const ViewListingNoReviewsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    margin: 0;
`;

export const ViewListingReviewsAverageAttributesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    gap: ${SpacingTheme.spacing_400.gap};
    margin-top: 32px;

    @media (min-width: 768px) {
        grid-template-columns: calc((100% - 96px) / 3) calc((100% - 96px) / 3) calc((100% - 96px) / 3);
        gap: ${SpacingTheme.spacing_400.gap} 48px;
    }
`;

export const ViewListingReviewsAverageAttribute = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ViewListingReviewsAverageAttributeTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};

    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin-top: 0;
    margin-bottom: 8px;
`;

export const ViewListingReviewsAverageAttributeRating = styled.div`
    width: 100%;
    height: 4px;
    background: ${ColorTheme.Grey3.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;

interface ViewListingReviewsAverageAttributeRatingInnerProps {
    value: number;
}
export const ViewListingReviewsAverageAttributeRatingInner = styled.div<ViewListingReviewsAverageAttributeRatingInnerProps>`
    height: 4px;
    width: ${(props) => `${props.value * 2 * 10}%`};
    background: ${ColorTheme.Black.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;
export const ViewListingReviewsReviewWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    &:nth-child(n + 4) {
        display: none;
    }
    position: relative;
    @media (min-width: 900px) {
        width: calc((100% - 96px) / 3);

        &:nth-child(n + 4) {
            display: flex;
        }

        &:nth-child(n + 7) {
            display: none;
        }
    }
`;

export const ViewListingReviewsExternalPopup = styled.div`
    width: 100%;
    z-index: 1;
    flex-direction: column;
    height: 80px;
    position: absolute;
    top: 64px;
    left: 0;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    align-items: center;
    padding: ${SpacingTheme.spacing_300.padding};
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};

    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background-color: ${ColorTheme.White.color};
    @media (min-width: 768px) {
        width: 360px;
    }
`;

export const ViewListingReviewsReviewImage = styled.img`
    height: 48px;
    width: 48px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    object-fit: cover;
    margin-right: 16px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
`;

export const ViewListingReviewsReviewName = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin-bottom: 2px;
`;

export const ViewListingReviewsReviewDate = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    font-weight: ${TextTheme.sans_200.fontWeight};
`;

export const ViewListingReviewsReviewText = styled.p`
    max-width: 100%;
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};

    margin: 0;
    word-wrap: break-word;
    margin-top: 16px;
`;

export const ReadMoreButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
`;

export const ViewListingHeaderProfileImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 72px;
    width: 72px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 16px;
    position: relative;
`;

export const ViewListingHeaderProfileImageVerified = styled.img`
    height: 24px;
    width: 24px;
    background: none;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const HeartIcon = styled.svg`
    height: 18px;
    width: 18px;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    path {
        stroke-width: 1.8;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;

export const ViewListingReviewPop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${ColorTheme.White.color};
    z-index: 200;
    overflow: scroll;
    overflow-x: hidden;
`;

export const ViewListingReviewPopCloseBtnWrapper = styled.button`
    width: 16px;
    height: 16px;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    background: none;
    cursor: pointer;
    margin: ${SpacingTheme.spacing_400.margin};

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_500.margin};
    }
`;

export const ViewListingReviewPopCloseBtnIcon = styled.img`
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export const ViewListingReviewPopWrapper = styled.div`
    margin: 0 24px;
    margin-bottom: 32px;
    padding-top: 32px;

    @media (min-width: 768px) {
        max-width: 1184px;
        margin: 0 auto;
        margin-bottom: 48px;
        padding: 0 32px;
        padding-top: 48px;
    }
`;

export const ViewListingReviewPopTitle = styled.p`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        font-style: normal;
        font-weight: ${TextTheme.sans_1000_bold.fontWeight};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
    }
`;

export const ViewListingReviewPopSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        font-style: normal;
        font-weight: ${TextTheme.sans_500.fontWeight};
        line-height: ${TextTheme.sans_500.lineHeight};
    }
`;

export const ViewListingReviewPopRateWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    gap: ${SpacingTheme.spacing_400.gap};
    margin-top: 24px;

    @media (min-width: 768px) {
        grid-template-columns: calc((100% - 96px) / 3) calc((100% - 96px) / 3) calc((100% - 96px) / 3);
        gap: ${SpacingTheme.spacing_400.gap} 48px;
        margin-top: 48px;
    }
`;

export const ViewListingReviewPopSwiperWrapper = styled.div`
    width: 100%;
    height: fit-content;
`;

export const ViewListingReviewPopItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_500.gap};

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;

export const ViewListingReviewPopReviewWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

// view listing similar stays styles
export const ViewListingSimilarStaysWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_500.gap};
    border-top: 1px solid ${ColorTheme.Grey2.color};

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_600.padding} 0;
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;

export const ViewListingSimilarStaysTitle = styled.h1`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    width: 90%;
    text-align: center;

    @media (min-width: 768px) {
        width: unset;
        text-align: unset;
        font-size: ${TextTheme.sans_900_semi.fontSize};
        font-weight: ${TextTheme.sans_900_semi.fontWeight};
        line-height: ${TextTheme.sans_900_semi.lineHeight};
    }
`;

export const ViewListingSimilarStaysCarouselWrapper = styled(Swiper)`
    width: 100%;

    @media (min-width: 768px) {
        overflow: visible;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    /* .swiper-wrapper {
        transition-timing-function: linear !important;
    } */
    .swiper-button-next,
    .swiper-button-prev {
        height: 36px;
        width: 36px;
        top: 108px;
        margin: 0;
        border-radius: 50%;
        background: ${ColorTheme.White.color};
        color: ${ColorTheme.Black.color};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }

    .swiper-button-next {
        right: calc(0px - ((100vw - 1120px) / 2 - 24px));
    }
    .swiper-button-prev {
        left: calc(0px - ((100vw - 1120px) / 2 - 24px));
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 14px !important;
    }
    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        background: ${ColorTheme.Grey5.color};
    }
`;

export const ViewListingSimilarStaysCarouselItem = styled(SwiperSlide)`
    width: 262px;
`;
