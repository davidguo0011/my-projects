import {
    ViewListingContainer,
    ViewListingFeaturedImage,
    ViewListingTitleWrapper,
    ViewListingTitleTitle,
    ViewListingAmenitiesContainer,
    ViewListingSubtitleWrapper,
    ViewListingSubtitlePlaceType,
    ViewListingSubtitleHostedBy,
    ViewListingSubtitleTextWrapper,
    ViewListingHeaderProfileImageWrapper,
    ViewListingSubtitleImage,
    ViewListingAmenitiesWrapper,
    ViewListingAmenitie,
    ViewListingAmenitieIcon,
    ViewListingAmenitieText,
    ViewListingDescriptionWrapper,
    ViewListingDescriptionText,
    ViewListingAboutLocationWrapper,
    ViewListingAboutLocationTitle,
    ViewListingMapWrapper,
    ViewListingTopContainerWrapper,
    ViewListingTopContainer,
} from "./skeletonViewListingPageStyling";
import SkeletonReservationDetails from "./skeletonReservationDetails/SkeletonReservationDetails";

export default function SkeletonViewListingPage() {
    return (
        <>
            <ViewListingFeaturedImage />
            <ViewListingContainer>
                <ViewListingTopContainerWrapper>
                    <ViewListingTopContainer>
                        <ViewListingTitleWrapper>
                            <ViewListingTitleTitle />
                        </ViewListingTitleWrapper>
                        <ViewListingAmenitiesContainer>
                            <ViewListingSubtitleWrapper>
                                <ViewListingSubtitleTextWrapper>
                                    <ViewListingSubtitlePlaceType />
                                    <ViewListingSubtitleHostedBy />
                                </ViewListingSubtitleTextWrapper>
                                <ViewListingHeaderProfileImageWrapper>
                                    <ViewListingSubtitleImage />
                                </ViewListingHeaderProfileImageWrapper>
                            </ViewListingSubtitleWrapper>
                            <ViewListingAmenitiesWrapper>
                                <ViewListingAmenitie>
                                    <ViewListingAmenitieIcon />
                                    <ViewListingAmenitieText />
                                </ViewListingAmenitie>
                                <ViewListingAmenitie>
                                    <ViewListingAmenitieIcon />
                                    <ViewListingAmenitieText />
                                </ViewListingAmenitie>
                                <ViewListingAmenitie>
                                    <ViewListingAmenitieIcon />
                                    <ViewListingAmenitieText />
                                </ViewListingAmenitie>
                                <ViewListingAmenitie>
                                    <ViewListingAmenitieIcon />
                                    <ViewListingAmenitieText />
                                </ViewListingAmenitie>
                            </ViewListingAmenitiesWrapper>
                        </ViewListingAmenitiesContainer>
                        <ViewListingDescriptionWrapper>
                            <ViewListingDescriptionText />
                        </ViewListingDescriptionWrapper>
                    </ViewListingTopContainer>
                    <SkeletonReservationDetails />
                </ViewListingTopContainerWrapper>

                <ViewListingAboutLocationWrapper>
                    <ViewListingAboutLocationTitle />
                    <ViewListingMapWrapper />
                </ViewListingAboutLocationWrapper>
            </ViewListingContainer>
        </>
    );
}
