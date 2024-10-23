import { YourListingCardWrapper, YourListingCardImg, YourListingCardTitle, YourListingCardSubtitle } from "./skeletonLoadingDummyCardYourListingStyling";

interface SkeletonLoadingDummyCardYourListingProps {
    props: any;
}

const SkeletonLoadingDummyCardYourListing: React.FC<SkeletonLoadingDummyCardYourListingProps> = (props) => {
    return (
        <YourListingCardWrapper {...props}>
            <YourListingCardImg />
            <YourListingCardTitle />
            <YourListingCardSubtitle />
        </YourListingCardWrapper>
    );
};

export default SkeletonLoadingDummyCardYourListing;
