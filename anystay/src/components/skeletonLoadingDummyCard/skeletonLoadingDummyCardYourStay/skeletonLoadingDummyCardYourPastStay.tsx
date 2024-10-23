import {
    YourStayPastCardWrapper,
    YourStayPastCardFeaturedImageWrapper,
    YourStayPastCardSubtitle,
    YourStaysPastCardFooterWrapper,
    YourStaysBookingRequestReviewPastStayTitle,
} from "./skeletonLoadingDummyCardYourStayStyling";

const skeletonLoadingDummyCardYourPastStay: React.FC = () => {
    return (
        <YourStayPastCardWrapper>
            <YourStayPastCardFeaturedImageWrapper></YourStayPastCardFeaturedImageWrapper>
            <YourStayPastCardSubtitle></YourStayPastCardSubtitle>
            <YourStaysPastCardFooterWrapper></YourStaysPastCardFooterWrapper>
            <YourStaysBookingRequestReviewPastStayTitle></YourStaysBookingRequestReviewPastStayTitle>
        </YourStayPastCardWrapper>
    );
};

export default skeletonLoadingDummyCardYourPastStay;
