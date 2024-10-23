import {
    YourStayCardWrapper,
    YourStayCardStatus,
    YourStayCardFeaturedImage,
    YourStayCardSubtitle,
    YourStayCardTitle,
    YourStaysCardFooterWrapper,
    YourStaysCardFooterDates,
    YourStaysCardFooterDate,
    YourStaysCardFooterDivider,
} from "./skeletonLoadingDummyCardYourStayStyling";

const SkeletonLoadingDummyCardYourStay: React.FC = () => {
    return (
        <YourStayCardWrapper>
            <YourStayCardStatus></YourStayCardStatus>
            <YourStayCardFeaturedImage />
            <YourStayCardSubtitle></YourStayCardSubtitle>
            <YourStayCardTitle></YourStayCardTitle>
            <YourStaysCardFooterWrapper>
                <YourStaysCardFooterDates>
                    <YourStaysCardFooterDate></YourStaysCardFooterDate>
                    <YourStaysCardFooterDivider />
                    <YourStaysCardFooterDate></YourStaysCardFooterDate>
                </YourStaysCardFooterDates>
            </YourStaysCardFooterWrapper>
        </YourStayCardWrapper>
    );
};

export default SkeletonLoadingDummyCardYourStay;
