import { useMemo, useRef, useState, memo } from "react";
import {
    ViewListingFeaturedImageDesktopWrapper,
    ViewListingFeaturedImage,
    ViewListingFeaturedImageSection,
    ViewListingFeaturedImageBottomPart,
    ViewListingImageMasonryItemWrapper,
} from "../viewListingStyling";

const getSections = (listingImages: string[]) => {
    const imgObjs = listingImages
        .sort((a, b) => {
            let aPriority = JSON.parse(a)?.hasOwnProperty("priority") ? JSON.parse(a).priority : Infinity;
            let bPriority = JSON.parse(b)?.hasOwnProperty("priority") ? JSON.parse(b).priority : Infinity;

            return aPriority - bPriority;
        })
        .map((item) => {
            return JSON.parse(item);
        });

    const imgObjsWithAspectRatio = imgObjs.map((item, index) => ({ ...item, aspectRatio: item?.width / item?.height, index: index }));

    const sections = [];
    //一个section最多4张图
    //第一张图如果是高的就放一个section
    //第一张图如果是宽的就放section里，看剩下的两张

    let i = 0;

    while (i < imgObjsWithAspectRatio.length) {
        let sectionContent = [imgObjsWithAspectRatio[i]];

        // if first item is tall, it fills the whole section
        if (imgObjsWithAspectRatio[i]?.aspectRatio < 1) {
            sections.push(sectionContent);
            i++;
            continue;
        }

        // if first item is wide, second item is super wide, second item fill the whole bottom section
        if (imgObjsWithAspectRatio[i + 1] && imgObjsWithAspectRatio[i + 1].aspectRatio >= 1.8) {
            sectionContent.push(imgObjsWithAspectRatio[i + 1]);
            sections.push(sectionContent);
            i += 2;
            continue;
        }

        // if first item is wide, second item is not super wide, fill two item into the bottom section
        if (imgObjsWithAspectRatio[i + 1]) {
            sectionContent.push(imgObjsWithAspectRatio[i + 1]);
            i++;
            if (imgObjsWithAspectRatio[i + 1]) {
                sectionContent.push(imgObjsWithAspectRatio[i + 1]);
                i++;
            }
        }

        sections.push(sectionContent);
        i++;
    }

    return sections;
};

interface ImageInterface {
    onClick: () => void;
    id: string;
    src: string;
    alt: string;
    style: React.CSSProperties;
    aspectRatio: number;
}

function Image({ onClick, id, src, alt, style, aspectRatio }: ImageInterface) {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <ViewListingImageMasonryItemWrapper style={style} aspectRatio={aspectRatio}>
            <ViewListingFeaturedImage
                // style={{ display: "none" }}
                imgLoaded={imgLoaded}
                onLoad={() => {
                    setImgLoaded(true);
                }}
                onClick={onClick}
                id={id}
                src={src}
                alt={alt}
            />
        </ViewListingImageMasonryItemWrapper>
    );
}

interface MasonryProps {
    imageUrls: string[];
    setLightBoxActive: React.Dispatch<React.SetStateAction<boolean>>;
    setCarouselIndex: React.Dispatch<React.SetStateAction<number>>;
    listingImages: string[];
}

function Masonry({ imageUrls, setLightBoxActive, setCarouselIndex, listingImages }: MasonryProps) {
    const sections = useMemo(() => {
        return getSections(listingImages);
    }, [listingImages]);
    const columnReverse = useRef(true);

    return (
        <ViewListingFeaturedImageDesktopWrapper>
            {sections.map((section, index) => {
                if (index > 2) return null;
                if (section.length === 1) {
                    return (
                        <ViewListingFeaturedImageSection key={section[0].key}>
                            <Image
                                style={{ height: "100%" }}
                                onClick={() => {
                                    setLightBoxActive(true);
                                    setCarouselIndex(section[0].index);
                                }}
                                id={`index-${section[0].index}`}
                                src={imageUrls[section[0].index]}
                                alt="Featured Listing Image"
                                aspectRatio={section[0].aspectRatio}
                            />
                        </ViewListingFeaturedImageSection>
                    );
                } else {
                    columnReverse.current = !columnReverse.current;
                    return (
                        <ViewListingFeaturedImageSection columnReverse={columnReverse.current} key={section[0].key}>
                            <Image
                                style={{ maxHeight: "65%", minHeight: "50%" }}
                                onClick={() => {
                                    setLightBoxActive(true);
                                    setCarouselIndex(section[0].index);
                                }}
                                id={`index-${section[0].index}`}
                                src={imageUrls[section[0].index]}
                                alt="Featured Listing Image"
                                aspectRatio={section[0].aspectRatio}
                            />
                            <ViewListingFeaturedImageBottomPart>
                                {section.map((item, index) => {
                                    if (index === 0) return null;
                                    let totalAspectRatio = null;
                                    let widthPercentage = null;
                                    if (section.length > 2) {
                                        totalAspectRatio = section[1].aspectRatio + section[2].aspectRatio;
                                        widthPercentage = (item.aspectRatio / totalAspectRatio) * 100;
                                    }
                                    return (
                                        <Image
                                            style={{ width: `calc(${widthPercentage ? widthPercentage : 100}% - 4px)` }}
                                            onClick={() => {
                                                setLightBoxActive(true);
                                                setCarouselIndex(item.index);
                                            }}
                                            id={`index-${item.index}`}
                                            src={imageUrls[item.index]}
                                            alt="Featured Listing Image"
                                            key={item.key}
                                            aspectRatio={item.aspectRatio}
                                        />
                                    );
                                })}
                            </ViewListingFeaturedImageBottomPart>
                        </ViewListingFeaturedImageSection>
                    );
                }
            })}
        </ViewListingFeaturedImageDesktopWrapper>
    );
}

export default memo(Masonry);
