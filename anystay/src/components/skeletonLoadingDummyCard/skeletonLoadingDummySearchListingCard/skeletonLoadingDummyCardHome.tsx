import { CSSProperties } from "styled-components";
import {
    SearchListingResultCardHome,
    SearchListingResultCardImageWrapper,
    SearchListingResultTextWrapper,
    SearchListingResultCardSubtitle,
    SearchListingResultCardTitle,
    SearchListingResultCardAttributeWrapper,
    SearchListingResultCardPriceWrapper,
    SearchListingResultCardAttribute,
    DummyImg,
} from "./skeletonLoadingDummyCardStyling";

interface SkeletonLoadingDummyCardHomeProps {
    props: any;
    style: CSSProperties;
}

const SkeletonLoadingDummyCardHome: React.FC<SkeletonLoadingDummyCardHomeProps> = (props) => {
    return (
        <SearchListingResultCardHome style={props.style}>
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
        </SearchListingResultCardHome>
    );
};

export default SkeletonLoadingDummyCardHome;
