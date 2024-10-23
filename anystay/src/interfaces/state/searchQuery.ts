export interface SearchQueryState {
    lat: number | null;
    lng: number | null;
    title: string | null;
    startDate: Date | string | null;
    endDate: Date | string | null;
    searchFilters: SearchFilters;
    placeId: string;
}

export interface SearchFilters {
    category: string;
    typeOfPlace: string[];
    propertyType: string[];
    optionsForYourStay: string[];
    priceRange: PriceRange;
    guests: number;
    adults: number;
    children: number;
    infants: number;
    pets: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    amenities: string[];
    services: string[];
    houseRules: string[];
}

export interface PriceRange {
    min: number;
    max: number;
}
