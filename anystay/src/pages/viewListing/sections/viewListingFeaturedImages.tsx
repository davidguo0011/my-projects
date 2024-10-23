import { useMemo, useState } from "react";
import {
    ViewListingFeaturedImage,
    ViewListingFeaturedImageWrapper,
    ViewListingImageIcon,
    ViewListingImageBackIcon,
    ViewListingFeaturedImagesWrapper,
    ViewListingFeaturedImageTextWrapper,
    ViewListingFeaturedImageTitle,
} from "../viewListingStyling";
import Masonry from "../masonry/masonry";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import Lightbox from "react-18-image-lightbox";
import { Pagination, Navigation } from "swiper";

interface ViewListingFeaturedImagesProps {
    listingImages: string[];
    openedGalleryEvent: any;
}

export default function ViewListingFeaturedImages({ listingImages, openedGalleryEvent }: ViewListingFeaturedImagesProps) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [lightboxActive, setLightBoxActive] = useState(false);
    const [hover, setHover] = useState(false);

    const imageUrls = useMemo(() => {
        return listingImages
            .sort((a, b) => {
                let aPriority = JSON.parse(a)?.hasOwnProperty("priority") ? JSON.parse(a).priority : Infinity;
                let bPriority = JSON.parse(b)?.hasOwnProperty("priority") ? JSON.parse(b).priority : Infinity;

                return aPriority - bPriority;
            })
            .map((imgKey) => {
                return constructOptimisedImageUrl(JSON.parse(imgKey)?.key, 1500);
            });
    }, [listingImages]);

    return (
        <>
            {lightboxActive && (
                <Lightbox
                    mainSrc={imageUrls[carouselIndex]}
                    nextSrc={imageUrls[(carouselIndex + 1) % imageUrls.length]}
                    prevSrc={imageUrls[(carouselIndex + imageUrls.length - 1) % imageUrls.length]}
                    onCloseRequest={() => setLightBoxActive(false)}
                    onMovePrevRequest={() => {
                        setCarouselIndex((carouselIndex + imageUrls.length - 1) % imageUrls.length);
                    }}
                    onMoveNextRequest={() => {
                        setCarouselIndex((carouselIndex + 1) % imageUrls.length);
                    }}
                    enableZoom={false}
                    onAfterOpen={() => {
                        //remove the background style of the toolbar when lightbox is opened
                        (document.getElementsByClassName("ril__toolbar")[0] as HTMLElement).style.background = "transparent";
                    }}
                />
            )}
            <ViewListingFeaturedImageWrapper>
                <Masonry imageUrls={imageUrls} listingImages={listingImages} setLightBoxActive={setLightBoxActive} setCarouselIndex={setCarouselIndex} />
                <ViewListingFeaturedImagesWrapper
                    className="mySwiper"
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    onSlideChange={(e) => {}}
                    initialSlide={0}
                >
                    {imageUrls.map((imageUrl, index) => {
                        return (
                            <ViewListingFeaturedImageWrapper key={index} virtualIndex={index}>
                                <ViewListingFeaturedImage
                                    onClick={() => {
                                        setLightBoxActive(true);
                                        setCarouselIndex(index);
                                    }}
                                    id={`index-${index}`}
                                    src={imageUrl}
                                    imgLoaded={true}
                                    alt="Featured Listing Image"
                                />
                            </ViewListingFeaturedImageWrapper>
                        );
                    })}
                </ViewListingFeaturedImagesWrapper>

                <ViewListingImageBackIcon url={imageUrls[2]} index={hover} />
                <ViewListingImageIcon
                    url={imageUrls[1]}
                    onClick={() => {
                        setLightBoxActive(true);
                        setCarouselIndex(0);
                        openedGalleryEvent();
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <ViewListingFeaturedImageTextWrapper>
                        <ViewListingFeaturedImageTitle>{imageUrls.length}</ViewListingFeaturedImageTitle>
                    </ViewListingFeaturedImageTextWrapper>
                </ViewListingImageIcon>
            </ViewListingFeaturedImageWrapper>
        </>
    );
}
