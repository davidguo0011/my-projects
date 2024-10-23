import { atom } from "recoil";
import { SearchQueryState } from "../../interfaces/state/searchQuery";

export const searchQueryState = atom<SearchQueryState>({
    key: "searchQueryState",
    default: {
        lat: null,
        lng: null,
        title: null,
        startDate: null,
        endDate: null,
        searchFilters: {
            category: "all",
            typeOfPlace: [],
            propertyType: [],
            optionsForYourStay: [],
            priceRange: {
                min: 0,
                max: 1000,
            },
            guests: 0,
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
            bedrooms: 0,
            beds: 0,
            bathrooms: 0,
            amenities: [],
            services: [],
            houseRules: [],
        },
        placeId: "ChIJ38WHZwf9KysRUhNblaFnglM",
        // placeId: null
    },
});