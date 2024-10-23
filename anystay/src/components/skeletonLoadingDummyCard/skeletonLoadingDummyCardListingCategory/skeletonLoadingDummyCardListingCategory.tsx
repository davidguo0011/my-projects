import React from "react";
import {
    SearchListingResultCard,
    SearchListingResultCardImageWrapper,
    SearchListingResultTextWrapper,
    SearchListingResultCardSubtitle,
    SearchListingResultCardTitle,
    SearchListingResultCardAttributeWrapper,
    SearchListingResultCardPriceWrapper,
    SearchListingResultCardAttribute,
    DummyImg,
} from "./skeletonLoadingDummyCardListingCategoryStyling";
const SkeletonLoadingDummyCardListingCategory: React.FC = () => {
    return (
        <SearchListingResultCard>
            <SearchListingResultCardImageWrapper>
                <DummyImg></DummyImg>
            </SearchListingResultCardImageWrapper>
            <SearchListingResultTextWrapper>
                <SearchListingResultCardSubtitle></SearchListingResultCardSubtitle>
                <SearchListingResultCardTitle></SearchListingResultCardTitle>
                <SearchListingResultCardAttributeWrapper>
                    <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                    <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                    <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                    <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                </SearchListingResultCardAttributeWrapper>
                <SearchListingResultCardPriceWrapper></SearchListingResultCardPriceWrapper>
            </SearchListingResultTextWrapper>
        </SearchListingResultCard>
    );
};

export default SkeletonLoadingDummyCardListingCategory;
