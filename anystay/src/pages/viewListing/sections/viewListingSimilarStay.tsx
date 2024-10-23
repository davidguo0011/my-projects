import { useCallback, useEffect, useRef, useState } from "react";
import { ViewListingSimilarStaysCarouselItem, ViewListingSimilarStaysCarouselWrapper, ViewListingSimilarStaysTitle, ViewListingSimilarStaysWrapper } from "../viewListingStyling";
import { callApi } from "../../../utils/api/api";
import SearchListingResult from "../../searchListing/SearchListingResult/SearchListingResult";
import { Autoplay, FreeMode, Navigation } from "swiper";
import { SearchListingModel } from "../../../interfaces/models/listingModel";

//australia wide need to change!!!!
const placeId = "ChIJ38WHZwf9KysRUhNblaFnglM";
const arrivalDate = null;
const departureDate = null;
const searchFiltersObj =
    '{"category":"all","typeOfPlace":[],"propertyType":[],"optionsForYourStay":[],"priceRange":{"min":0,"max":1000},"guests":0,"adults":0,"children":0,"infants":0,"pets":0,"bedrooms":0,"bathrooms":0,"amenities":[],"services":[],"houseRules":[]}';

export default function ViewListingSimilarStaySection(clickedListingFromRecommendation: any) {
    const [listings, setListings] = useState<SearchListingModel[]>([]);
    const swiperRef = useRef(null);
    const fetchListings = useCallback(async (place_id: string, startDate: null, endDate: null, searchFilters: string) => {
        callApi("post", `${process.env.REACT_APP_ENV}-anystay-search`, "search", {
            body: {
                placeId: place_id,
                startDate: startDate,
                endDate: endDate,
                currentDate: new Date().toString(),
                searchFilters: searchFilters,
            },
        })
            .then((res) => {
                console.log("response!!!!!!!!", res);
                const listings = res.listings.slice(0, 10);
                setListings(listings);
            })
            .catch((err) => console.log("errrrrrrr", err));
    }, []);
    useEffect(() => {
        fetchListings(placeId, arrivalDate, departureDate, searchFiltersObj);
    }, []);

    return (
        <ViewListingSimilarStaysWrapper>
            <ViewListingSimilarStaysTitle>Explore similar stays in Surfers Paradise</ViewListingSimilarStaysTitle>
            <ViewListingSimilarStaysCarouselWrapper
                slidesPerView={window.innerWidth < 768 ? "auto" : 4}
                spaceBetween={24}
                modules={[Autoplay, FreeMode, Navigation]}
                freeMode={true}
                pagination={false}
                loop={false}
                navigation={window.innerWidth < 768 ? false : true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                observer={true}
                observeParents={true}
                // speed={2000}
                ref={swiperRef}
            >
                {listings &&
                    listings.length > 0 &&
                    listings
                        .slice(0)
                        .reverse()
                        .map((listing, index) => {
                            return (
                                <ViewListingSimilarStaysCarouselItem key={index}>
                                    <SearchListingResult clickedListingFromSearch={clickedListingFromRecommendation} listing={listing} key={listing.id} delay={index * 0.12} />
                                </ViewListingSimilarStaysCarouselItem>
                            );
                        })}
            </ViewListingSimilarStaysCarouselWrapper>
        </ViewListingSimilarStaysWrapper>
    );
}
