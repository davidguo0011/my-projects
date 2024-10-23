import { YourStaysBookingsMapWrapper, YourStaysBookingsMobileImg, YourStaysBookingsMobileContent } from "./skeletonLoadingDummyCardYourStayStyling";

const SkeletonLoadingDummyCardYourStayMap: React.FC = () => {
    return (
        <YourStaysBookingsMapWrapper>
            <YourStaysBookingsMobileImg />
            <YourStaysBookingsMobileContent />
        </YourStaysBookingsMapWrapper>
    );
};

export default SkeletonLoadingDummyCardYourStayMap;
