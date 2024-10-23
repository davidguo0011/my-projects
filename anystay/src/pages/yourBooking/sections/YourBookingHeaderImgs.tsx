import {
    YourBookingHeaderDetailsWrapper,
    YourBookingHeaderDetailsSection,
    YourBookingHeaderDetailsImage,
    YourBookingHeaderDetailsSeeListingButton,
    YourBookingTitleWrapper,
    YourBookingTitleBackButton,
    YourBookingTitleIcon,
    YourBookingTitle,
} from "../yourBookingStyling";

import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Lightbox from "react-18-image-lightbox";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { defaultSearchFilter } from "../../../utils/defaultSearchQuery/defaultSearchQuery";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { YourBookingRequestBookingRequest, YourBookingRequestListingData } from "../yourBooking";
import BackBtn from "../../../components/btn/backBtn/backBtn";
import tr from "@mobiscroll/react/dist/src/i18n/tr";

interface YourBookingHeaderImgsProps {
    listingData: YourBookingRequestListingData;
    bookingRequest: YourBookingRequestBookingRequest;
}

const YourBookingHeaderImgs: React.FC<YourBookingHeaderImgsProps> = ({ listingData, bookingRequest }) => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [lightboxActive, setLightboxActive] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const navigate = useNavigate();

    const listingImages = useMemo(() => {
        return listingData.listingImages.map((imageKey) => {
            return constructOptimisedImageUrl(JSON.parse(imageKey as string).key, 800);
        });
    }, [listingData]);

    return (
        <>
            <YourBookingHeaderDetailsWrapper>
                <YourBookingHeaderDetailsSection
                    index={carouselIndex}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={() => {}}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {listingImages.map((imageURL, index) => {
                        return (
                            <SwiperSlide
                                onClick={() => {
                                    setLightboxActive(!lightboxActive);
                                    setCarouselIndex(index);
                                }}
                                key={index}
                            >
                                <YourBookingHeaderDetailsImage src={imageURL} alt="Featured listing image" />
                            </SwiperSlide>
                        );
                    })}
                </YourBookingHeaderDetailsSection>
                <YourBookingHeaderDetailsSeeListingButton type="button" onClick={() => navigate(`/listing/${listingData.id}`)}>
                    See listing
                </YourBookingHeaderDetailsSeeListingButton>
                <YourBookingTitleWrapper>
                    <BackBtn
                        type={"WhiteArrow"}
                        onClick={() => {
                            userModel && navigate(-1);
                        }}
                        hasBackground={false}
                        noneHover={true}
                    />
                    {bookingRequest && (
                        <YourBookingTitle>
                            {bookingRequest.declined ? "Declined" : bookingRequest.cancelled ? "Cancelled" : bookingRequest.confirmed ? "Stay confirmed" : "Stay requested"}
                        </YourBookingTitle>
                    )}
                </YourBookingTitleWrapper>
            </YourBookingHeaderDetailsWrapper>
            {lightboxActive && (
                <Lightbox
                    mainSrc={listingImages[carouselIndex]}
                    nextSrc={listingImages[(carouselIndex + 1) % listingImages.length]}
                    prevSrc={listingImages[(carouselIndex + listingImages.length - 1) % listingImages.length]}
                    onCloseRequest={() => setLightboxActive(false)}
                    onMovePrevRequest={() => {
                        setCarouselIndex((carouselIndex + listingImages.length - 1) % listingImages.length);
                    }}
                    onMoveNextRequest={() => {
                        setCarouselIndex((carouselIndex + 1) % listingImages.length);
                    }}
                    enableZoom={false}
                />
            )}
        </>
    );
};

export default YourBookingHeaderImgs;
