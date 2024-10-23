import { DefaultValue, selector } from "recoil";
import { searchQueryState } from "../atoms/searchQuery";
import { SearchQueryState, SearchFilters } from "../../interfaces/state/searchQuery";
import { PriceRange } from "../../interfaces/state/searchQuery";
import { callApi } from "../../utils/api/api";

export const searchQuerySelector = selector<SearchQueryState>({
    key: "searchQuerySelector",
    get: ({ get }) => get(searchQueryState),
    set: ({ set }, newValue) => {
        set(searchQueryState, (prevState) => {
            return newValue;
        });
    },
});

export const searchFiltersSelector = selector<SearchFilters>({
    key: "searchFiltersSelector",
    get: ({ get }): SearchFilters => get(searchQueryState).searchFilters,
    set: ({ set }, newValue: SearchFilters | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: newValue,
                };
            });
        }
    },
});

export const adultsSelector = selector<number>({
    key: "adultsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.adults,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        adults: newValue,
                        guests: newValue + prevState.searchFilters.children,
                    },
                };
            });
        }
    },
});

export const childrenSelector = selector<number>({
    key: "childrenSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.children,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        children: newValue,
                        guests: newValue + prevState.searchFilters.adults,
                    },
                };
            });
        }
    },
});

export const infantsSelector = selector<number>({
    key: "infantsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.infants,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        infants: newValue,
                    },
                };
            });
        }
    },
});

export const petsSelector = selector<number>({
    key: "petsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.pets,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        pets: newValue,
                    },
                };
            });
        }
    },
});

export const guestsSelector = selector<number>({
    key: "guestsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.guests,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        guests: newValue,
                    },
                };
            });
        }
    },
});

export const startDateSelector = selector<string | Date | null>({
    key: "startDateSelector",
    get: ({ get }) => get(searchQueryState).startDate,
    set: ({ set }, newValue: string | null | DefaultValue | Date) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    startDate: newValue instanceof Date ? newValue.toISOString() : newValue,
                };
            });
        }
    },
});

export const endDateSelector = selector<string | Date | null>({
    key: "endDateSelector",
    get: ({ get }) => get(searchQueryState).endDate,
    set: ({ set }, newValue: string | null | DefaultValue | Date) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    endDate: newValue instanceof Date ? newValue.toISOString() : newValue,
                };
            });
        }
    },
});

export const startDateFormattedSelector = selector<string>({
    key: "startDateFormattedSelector",
    get: ({ get }) => {
        const startDate = get(searchQueryState).startDate;

        return startDate ? new Date(startDate).toLocaleDateString("au", { month: "short", day: "numeric" }) : "";
    },
});

export const endDateFormattedSelector = selector<string>({
    key: "endDateFormattedSelector",
    get: ({ get }) => {
        const endDate = get(searchQueryState).endDate;

        return endDate ? new Date(endDate).toLocaleDateString("au", { month: "short", day: "numeric" }) : "";
    },
});

export const titleSelector = selector<string | null>({
    key: "titleSelector",
    get: ({ get }) => get(searchQueryState).title,
    set: ({ set }, newValue: string | null | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    title: newValue,
                };
            });
        }
    },
});

export const latSelector = selector<number | null>({
    key: "latSelector",
    get: ({ get }) => get(searchQueryState).lat,
    set: ({ set }, newValue: number | null | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    lat: newValue,
                };
            });
        }
    },
});

export const lngSelector = selector<number | null>({
    key: "lngSelector",
    get: ({ get }) => get(searchQueryState).lng,
    set: ({ set }, newValue: number | null | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    lng: newValue,
                };
            });
        }
    },
});

export const placeIdSelector = selector<string>({
    key: "placeIdSelector",
    get: ({ get }) => get(searchQueryState).placeId,
    set: ({ set }, newValue: string | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    placeId: newValue,
                };
            });
        }
    },
});

export const bedroomsSelector = selector<number>({
    key: "bedroomsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.bedrooms,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        bedrooms: newValue,
                    },
                };
            });
        }
    },
});

export const bathroomsSelector = selector<number>({
    key: "bathroomsSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.bathrooms,
    set: ({ set }, newValue: number | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        bathrooms: newValue,
                    },
                };
            });
        }
    },
});

export const amenitiesSelector = selector<string[]>({
    key: "amenitiesSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.amenities,
    set: ({ set }, newValue: string[] | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        amenities: newValue,
                    },
                };
            });
        }
    },
});

export const propertyTypeSelector = selector<string[]>({
    key: "propertyTypeSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.propertyType,
    set: ({ set }, newValue: string[] | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        propertyType: newValue,
                    },
                };
            });
        }
    },
});

export const houseRulesSelector = selector<string[]>({
    key: "houseRulesSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.houseRules,
    set: ({ set }, newValue: string[] | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        houseRules: newValue,
                    },
                };
            });
        }
    },
});

export const priceRangeSelector = selector<PriceRange>({
    key: "priceRangeSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.priceRange,
    set: ({ set }, newValue: PriceRange | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        priceRange: newValue,
                    },
                };
            });
        }
    },
});

export const typeOfPlaceSelector = selector<string[]>({
    key: "typeOfPlaceSelector",
    get: ({ get }) => get(searchQueryState).searchFilters.typeOfPlace,
    set: ({ set }, newValue: string[] | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(searchQueryState, (prevState: SearchQueryState) => {
                return {
                    ...prevState,
                    searchFilters: {
                        ...prevState.searchFilters,
                        typeOfPlace: newValue,
                    },
                };
            });
        }
    },
});
