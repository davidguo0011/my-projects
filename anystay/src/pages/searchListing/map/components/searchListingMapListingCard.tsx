import { MouseEventHandler, TouchEventHandler, useEffect, useState, useMemo, useRef } from "react";
import {
    HeartIcon,
    SearchListingResultNoReviewText,
    SearchListingResultOverallReviewAvg,
    SearchListingResultReview,
    SearchListingSaveButtonWrapper,
    SearchMapListingCardContainer,
    SearchMapListingCardImage,
    SearchMapListingCardImageWrapper,
    SearchMapListingCardImagesWrapper,
    SearchMapListingCardReview,
    SearchMapListingCardSubtitle,
    SearchMapListingCardTextWrapper,
    SearchMapListingCardTitle,
    SearchMapListingCardWrapper,
} from "../../searchListingStyling";
import { Navigation, Pagination } from "swiper";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { toggleSaved } from "../../../../utils/savedListings/toggleSaved";
import { useRecoilState } from "recoil";
import { userModelSelector } from "../../../../state/selectors/userModel";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { signInMenuActivatedSelector } from "../../../../state/selectors/navbarToggle";
import { SearchListingModel } from "../../../../interfaces/models/listingModel";
import { ListingImageObject } from "../../../../interfaces/models/listingModel";
import { QueryParams } from "../../searchListing";
import { useLocation } from "react-router-dom";
import useIsTouchDevice from "../../../../hook/useIsTouchDevice";
interface SearchListingMapListingCardProps {
    popupCardRef: React.RefObject<HTMLElement>;
    listing: SearchListingModel;
    setIsTouchingCard: React.Dispatch<React.SetStateAction<boolean>>;
    clickedListingFromMap: any;
}

const SearchListingMapListingCard = ({ popupCardRef, listing, setIsTouchingCard, clickedListingFromMap }: SearchListingMapListingCardProps) => {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [isSaved, setIsSaved] = useState(false);
    const isSavedLoading = useRef(false);
    const init = useRef(false);
    const location = useLocation();
    const isTouchDevice = useIsTouchDevice();

    const queryParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = {};
        for (let [key, value] of searchParams.entries()) {
            params[key as keyof QueryParams] = value;
        }
        return params;
    }, [location.search]);

    useEffect(() => {
        if (popupCardRef.current) {
            window.google.maps.OverlayView.preventMapHitsFrom(popupCardRef.current);
        }
    }, [listing, popupCardRef]);

    useEffect(() => {
        //run only once if usermodel is true for init
        if (init.current) return;
        if (userModel && userModel.savedListings.includes(listing.id)) {
            setIsSaved(true);
            init.current = true;
        }
    }, [listing.id, userModel]);

    type CustomEvent = React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>;

    const handleButtonClick = async (event: CustomEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (userModel) {
            if (isSavedLoading.current) return;
            try {
                setIsSaved((prev) => !prev);
                isSavedLoading.current = true;
                await toggleSaved(listing.id, userModel, accessToken);
            } catch (err: any) {
                console.log(err);
                setIsSaved((prev) => !prev);
            } finally {
                isSavedLoading.current = false;
            }
        } else {
            setSignInMenuActivated(true);
        }
    };

    const getURL = () => {
        const arrivalDateString = queryParams.arrivalDate ? `arrivalDate=${queryParams.arrivalDate}` : "";
        const departureDateString = queryParams.departureDate ? `departureDate=${queryParams.departureDate}` : "";
        const searchFiltersFromQueryParams = queryParams.searchFilters ? JSON.parse(queryParams.searchFilters) : null;
        const adultsString = searchFiltersFromQueryParams && searchFiltersFromQueryParams.adults ? `adults=${searchFiltersFromQueryParams.adults}` : "";
        const childrenString = searchFiltersFromQueryParams && searchFiltersFromQueryParams.children ? `children=${searchFiltersFromQueryParams.children}` : "";
        const petsString = searchFiltersFromQueryParams && searchFiltersFromQueryParams.pets ? `pets=${searchFiltersFromQueryParams.pets}` : "";
        const infantsString = searchFiltersFromQueryParams && searchFiltersFromQueryParams.infants ? `infants=${searchFiltersFromQueryParams.infants}` : "";
        const searchParamsStrings = [arrivalDateString, departureDateString, adultsString, childrenString, petsString, infantsString].filter((param) => param !== "").join("&");

        return `/listing/${listing.id}${searchParamsStrings ? `?${searchParamsStrings}` : ""}`;
    };
    return (
        <SearchMapListingCardContainer
            ref={popupCardRef as React.RefObject<HTMLDivElement>}
            onTouchStart={() => {
                setIsTouchingCard(true);
            }}
            onTouchEnd={() => {
                setIsTouchingCard(false);
            }}
            onMouseEnter={() => {
                setIsTouchingCard(true);
            }}
            onMouseLeave={() => {
                setIsTouchingCard(false);
            }}
        >
            <SearchListingSaveButtonWrapper onClick={!isTouchDevice ? handleButtonClick : undefined} onTouchEnd={isTouchDevice ? handleButtonClick : undefined}>
                <HeartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                    <path
                        d="M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z"
                        fill={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.Black.opacityColor}`}
                        transform="translate(1, 1)"
                    />
                </HeartIcon>
            </SearchListingSaveButtonWrapper>

            <SearchMapListingCardWrapper
                onClick={!isTouchDevice ? () => clickedListingFromMap(listing.id) : undefined}
                onTouchEnd={isTouchDevice ? () => clickedListingFromMap(listing.id) : undefined}
                to={getURL()}
                target={window.innerWidth > 768 ? "_blank" : ""}
                rel="noopener noreferrer"
            >
                <SearchMapListingCardImagesWrapper
                    modules={[Navigation, Pagination]}
                    navigation={window.innerWidth < 768 ? false : true}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    loop={window.innerWidth < 768 ? true : false}
                    onSlideChange={(e) => {}}
                    initialSlide={0}
                    spaceBetween={0}
                    slidesPerView={1}
                    watchSlidesProgress={true}
                    // cssMode={true}
                >
                    {listing.listingImages.map((image, index) => {
                        return (
                            <SearchMapListingCardImageWrapper key={index} virtualIndex={index}>
                                <SearchMapListingCardImage src={constructOptimisedImageUrl((image as ListingImageObject).key, 500)} alt="Preview image of the listing" id={`index-${index}`} />
                            </SearchMapListingCardImageWrapper>
                        );
                    })}
                </SearchMapListingCardImagesWrapper>

                <SearchMapListingCardTextWrapper>
                    <SearchMapListingCardTitle>
                        {listing.propertyType.charAt(0).toUpperCase() + listing.propertyType.slice(1)} in {listing.suburb}
                    </SearchMapListingCardTitle>
                    <SearchMapListingCardSubtitle>{listing.propertyTitle}</SearchMapListingCardSubtitle>

                    <SearchMapListingCardReview>
                        <SearchListingResultReview>
                            {listing.overallAverage && listing.totalReviews && listing.overallAverage > 0 ? (
                                <SearchListingResultOverallReviewAvg>
                                    {(listing.overallAverage / 10).toFixed(1)} <span>({listing.totalReviews})</span>
                                </SearchListingResultOverallReviewAvg>
                            ) : (
                                <SearchListingResultNoReviewText>New</SearchListingResultNoReviewText>
                            )}
                        </SearchListingResultReview>
                    </SearchMapListingCardReview>
                </SearchMapListingCardTextWrapper>
            </SearchMapListingCardWrapper>
        </SearchMapListingCardContainer>
    );
};
export default SearchListingMapListingCard;
