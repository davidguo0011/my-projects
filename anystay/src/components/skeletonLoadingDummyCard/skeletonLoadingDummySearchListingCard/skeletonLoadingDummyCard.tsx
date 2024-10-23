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
    SearchListingResultCardDate,
    DummyImg,
} from "./skeletonLoadingDummyCardStyling";
import { CSSProperties } from "styled-components";

interface SkeletonLoadingDummyCardProps {
    props?: any;
    style?: CSSProperties;
}

const SkeletonLoadingDummyCard: React.FC<SkeletonLoadingDummyCardProps> = (props) => {
    return (
        <SearchListingResultCard style={props.style}>
            <SearchListingResultCardImageWrapper>
                <DummyImg></DummyImg>
            </SearchListingResultCardImageWrapper>
            <SearchListingResultTextWrapper>
                <SearchListingResultCardSubtitle></SearchListingResultCardSubtitle>
                <SearchListingResultCardTitle></SearchListingResultCardTitle>

                <SearchListingResultCardDate></SearchListingResultCardDate>

                {/* <SearchListingResultCardAttributeWrapper>
                        <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                        <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                        <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                        <SearchListingResultCardAttribute></SearchListingResultCardAttribute>
                    </SearchListingResultCardAttributeWrapper> */}

                <SearchListingResultCardPriceWrapper></SearchListingResultCardPriceWrapper>
            </SearchListingResultTextWrapper>
        </SearchListingResultCard>
    );
};

export default SkeletonLoadingDummyCard;
