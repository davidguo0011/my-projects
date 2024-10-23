import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { ColorTheme, BorderRadiusTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const CategoryBarWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 83px;
    background: ${ColorTheme.White.color};
    padding: 0px 18px;
    z-index: 4;

    @media (min-width: 768px) {
        border-bottom: 1px solid ${ColorTheme.Grey2.color};
        box-shadow: none;
        padding-right: 13px;
        z-index: 3;
        top: 80px;
    }
    @media (max-width: 767px) {
        padding: 0;
    }
`;
export const CategoryBarItemsWrapper = styled(Swiper)`
    width: 100%;
    display: flex;
    transition: 0.2s;
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 13px;
        font-weight: 1000;
        width: 26px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    }
    .swiper-button-next:hover:after,
    .swiper-button-prev:hover:after {
        transform: scale(1.1);
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: ${ColorTheme.Black.color};
        width: 20px;
        height: 100%;
        width: 35px;
        top: 26%;
        @media (max-width: 767px) {
            display: none !important;
        }
    }

    .swiper-button-prev {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0));
        display: flex;
        justify-content: flex-start;
        left: 0;
    }
    .swiper-button-prev.swiper-button-disabled {
        display: none !important;
    }
    .swiper-button-next.swiper-button-disabled {
        display: none !important;
    }

    .swiper-button-next {
        background: linear-gradient(to left, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0));
        display: flex;
        justify-content: flex-end;
        right: 0;
    }

    ::selection {
        display: none;
    }
`;

export const CategoryBarDivider = styled.div`
    height: 24px;
    width: 1px;
    background-color: ${ColorTheme.Grey2.color};
    margin: 0 13px 0 8px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const CategoryItemSwiperSlide = styled(SwiperSlide)`
    width: fit-content;
    height: 100%;
    padding-right: 32px;

    @media (max-width: 767px) {
        &:last-child {
            padding-right: 24px;
        }
        &:first-child {
            padding-left: 18px;
        }
    }
`;
