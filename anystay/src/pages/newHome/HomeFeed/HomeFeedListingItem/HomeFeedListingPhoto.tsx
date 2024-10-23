import { HomeFeedListingImage, HomeFeedListingResultCardImageWrapper } from "./HomeFeedListingItemStyling";
import { useState } from "react";

interface HomeFeedListingPhotoProps {
    url: string;
    aspectRatio: number;
}

const HomeFeedListingPhoto: React.FC<HomeFeedListingPhotoProps> = ({ url, aspectRatio }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <HomeFeedListingResultCardImageWrapper aspectRatio={aspectRatio}>
            <HomeFeedListingImage
                src={url}
                onLoad={() => {
                    setImgLoaded(true);
                }}
                alt="Featured Listing"
                style={{ display: imgLoaded ? "block" : "none" }}
            />
        </HomeFeedListingResultCardImageWrapper>
    );
};

export default HomeFeedListingPhoto;
