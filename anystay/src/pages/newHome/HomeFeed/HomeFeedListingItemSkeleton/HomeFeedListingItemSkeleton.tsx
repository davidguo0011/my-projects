import {
    HomeFeedListingItemSkeletonWrapper,
    HomeFeedListingItemSkeletonImage,
    HomeFeedListingItemSkeletonTitle,
    HomeFeedListingItemSkeletonSubtitle,
    HomeFeedListingItemSkeletonDate,
    HomeFeedListingItemSkeletonPrice,
} from "./HomeFeedListingItemSkeletonStyling";

interface HomeFeedListingItemSkeletonProps {
    aspectRatio: number;
}

const HomeFeedListingItemSkeleton: React.FC<HomeFeedListingItemSkeletonProps> = ({ aspectRatio }) => {
    return (
        <HomeFeedListingItemSkeletonWrapper>
            <HomeFeedListingItemSkeletonImage aspectRatio={aspectRatio} />
            <HomeFeedListingItemSkeletonTitle />
            <HomeFeedListingItemSkeletonSubtitle />
            <HomeFeedListingItemSkeletonDate />
            <HomeFeedListingItemSkeletonPrice />
        </HomeFeedListingItemSkeletonWrapper>
    );
};

export default HomeFeedListingItemSkeleton;
