import { SearchFilters } from "../../../interfaces/state/searchQuery";
export const calculateNumberOfFilterSelected = (searchFilters: SearchFilters, isUserChangePrice: boolean): number => {
    // if (minPrice === undefined && maxPrice === undefined) return 0;
    let number = 0;
    if (searchFilters.bedrooms > 0) {
        number++;
    }
    if (searchFilters.bathrooms > 0) {
        number++;
    }
    if (searchFilters.beds > 0) {
        number++;
    }

    if (isUserChangePrice) {
        number++;
    }
    number += searchFilters.typeOfPlace.length + searchFilters.propertyType.length + searchFilters.optionsForYourStay.length + searchFilters.amenities.length + searchFilters.houseRules.length;
    return number;
};
