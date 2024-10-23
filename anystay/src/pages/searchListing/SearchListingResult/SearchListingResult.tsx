import { motion } from "framer-motion";
import {
    SearchListingResultCard,
    SearchListingResultCardImageWrapper,
    SearchListingResultCardSubtitle,
    SearchListingResultCardTitle,
    SearchListingResultCardAttributeWrapper,
    SearchListingResultCardAttribute,
    SearchListingResultCardPrice,
    SearchListingLink,
    SearchListingResultTextWrapper,
    SearchListingResultCardPriceWrapper,
    SearchListingResultReview,
    SearchListingResultOverallReviewAvg,
    SearchListingResultNoReviewText,
    SearchListingSaveButtonWrapper,
    HeartIcon,
    SearchListingResultCardDate,
} from "../searchListingStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import SkeletonLoadingDummyCard from "../../../components/skeletonLoadingDummyCard/skeletonLoadingDummySearchListingCard/skeletonLoadingDummyCard";
import SearchListingPhoto from "../SearchListingPhoto/SearchListingPhoto";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useRef, useState, useEffect, TouchEventHandler, MouseEventHandler } from "react";
import { userModelSelector } from "../../../state/selectors/userModel";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { toggleSaved } from "../../../utils/savedListings/toggleSaved";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { SearchListingModel } from "../../../interfaces/models/listingModel";
import { QueryParams } from "../searchListing";
import ListingCardHostPfp from "../../../components/listingCardHostPfp/listingCardHostPfp";

type TouchClickEventHandler = (event: React.TouchEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;

export default function SearchListingResult({ listing, delay, clickedListingFromSearch }: { listing: SearchListingModel; delay: number; clickedListingFromSearch: any }) {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [isSaved, setIsSaved] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const isSavedLoading = useRef(false);
    const init = useRef(false);

    const location = useLocation();
    const queryParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = {};
        for (let [key, value] of searchParams.entries()) {
            params[key as keyof QueryParams] = value;
        }
        return params;
    }, [location.search]);
    const navigate = useNavigate();

    useEffect(() => {
        //run only once if usermodel is true for init
        if (init.current) return;
        if (userModel && userModel.savedListings.includes(listing.id)) {
            setIsSaved(true);
            init.current = true;
        }
    }, [listing.id, userModel]);

    const imageUrls = useMemo(() => {
        if (listing?.listingImages?.length > 0) {
            return listing.listingImages.map((imgKey) => {
                return constructOptimisedImageUrl(imgKey?.key, 800);
            });
        }
    }, [listing.listingImages]);

    const getPlaceType = () => {
        let placeType = "";
        if (listing && listing.suburb !== null) {
            const place = listing.suburb.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
            switch (listing.typeOfPlace) {
                case "entire-place":
                    placeType = listing.propertyType + " in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "hotel-room":
                    placeType = "Hotel in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "private-room":
                    placeType = "Private room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "shared-room":
                    placeType = "Shared room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                default:
                    break;
            }
        }
        return placeType;
    };

    function convertDateRange(startDate: string, endDate: string): string {
        // Parse the input date strings
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Format the dates
        const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" }; // Using 'short' for month abbreviation (e.g., "May")
        const startStr = start.toLocaleDateString("en-GB", options).replace(/ /g, " ");
        const endStr = end.toLocaleDateString("en-GB", options).replace(/ /g, " ");

        // Check if the start and end dates are in the same month
        if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
            // If in the same month, only show the day
            const dayOptions: Intl.DateTimeFormatOptions = { day: "2-digit" };
            const startDayStr = start.toLocaleDateString("en-GB", dayOptions).replace(/ /g, " ");
            const endDayStr = end.toLocaleDateString("en-GB", dayOptions).replace(/ /g, " ");
            return `${startDayStr} - ${endDayStr} ${start.toLocaleDateString("en-GB", { month: "short" })}`;
        }

        return `${startStr} - ${endStr}`;
    }

    const handleSaveButton: TouchClickEventHandler = async (event) => {
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
    let touchStartY: number;

    const handleTouchStart: TouchEventHandler<HTMLElement> = (e) => {
        touchStartY = e.touches[0].clientY;
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

    const handleTouchEnd: TouchEventHandler<HTMLElement> = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = Math.abs(touchStartY - touchEndY);
        if (diff < 4) {
            // Adjust threshold as needed
            e.preventDefault();
            navigate(getURL());
        }
    };
    return (
        <SearchListingResultCard>
            <motion.div style={{ zIndex: 10, width: "100%" }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.5, delay: delay }}>
                <div style={{ position: "absolute", top: "0", left: "0", width: "100%" }}>
                    <SkeletonLoadingDummyCard style={{ minWidth: "unset", width: "100%" }} />
                </div>
            </motion.div>
            <motion.div style={{ zIndex: 11 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: delay }}>
                <SearchListingLink
                    to={getURL()}
                    target={window.innerWidth > 768 ? "_blank" : ""}
                    rel="noopener noreferrer"
                    {...(location.pathname.includes("search")
                        ? { onTouchStart: handleTouchStart as TouchEventHandler<HTMLElement>, onTouchEnd: handleTouchEnd as TouchEventHandler<HTMLElement> }
                        : {})}
                    onClick={(e) => {
                        clickedListingFromSearch(listing.id);
                        e.stopPropagation();
                    }}
                >
                    <SearchListingSaveButtonWrapper onTouchEnd={handleSaveButton} onClick={handleSaveButton}>
                        <HeartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                            <path
                                d="M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z"
                                fill={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.Black.opacityColor}`}
                                transform="translate(1, 1)"
                            />
                        </HeartIcon>
                    </SearchListingSaveButtonWrapper>
                    {/* <ListingCardHostPfp src={} /> */}
                    <SearchListingResultCardImageWrapper>{imageUrls && <SearchListingPhoto imgKey={imageUrls[0]} />}</SearchListingResultCardImageWrapper>
                    <SearchListingResultTextWrapper>
                        <SearchListingResultCardSubtitle>{getPlaceType()}</SearchListingResultCardSubtitle>
                        <SearchListingResultCardTitle>{listing.propertyTitle}</SearchListingResultCardTitle>
                        {queryParams.arrivalDate && queryParams.departureDate ? (
                            <SearchListingResultCardAttributeWrapper>
                                <SearchListingResultCardAttribute>
                                    {listing.beds} {listing.beds > 1 ? "beds" : "bed"}
                                </SearchListingResultCardAttribute>
                                {/* <SearchListingResultCardAttribute>
                                    {listing.guests} {listing.guests > 1 ? "guests" : "guest"}
                                </SearchListingResultCardAttribute> */}
                            </SearchListingResultCardAttributeWrapper>
                        ) : (
                            <SearchListingResultCardDate>{convertDateRange(listing.startDate, listing.endDate)} </SearchListingResultCardDate>
                        )}

                        <SearchListingResultCardPriceWrapper>
                            <SearchListingResultCardPrice>${Number(listing.totalPrice / 100).toFixed(0)} AUD</SearchListingResultCardPrice>
                            <SearchListingResultReview>
                                {listing.overallAverage && listing.overallAverage > 0 ? (
                                    <SearchListingResultOverallReviewAvg>
                                        {(listing.overallAverage / 10).toFixed(1)} <span>({listing.totalReviews})</span>
                                    </SearchListingResultOverallReviewAvg>
                                ) : (
                                    <SearchListingResultNoReviewText>New</SearchListingResultNoReviewText>
                                )}
                            </SearchListingResultReview>
                        </SearchListingResultCardPriceWrapper>
                    </SearchListingResultTextWrapper>
                </SearchListingLink>
            </motion.div>
        </SearchListingResultCard>
    );
}
