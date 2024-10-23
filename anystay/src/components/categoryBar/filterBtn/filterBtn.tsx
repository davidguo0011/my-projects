import { FilterBtnWrapper, FilterBtnIcon, FilterBtnText, FilterSelectedNumberBubble } from "./filterBtnStyling";
import SearchListingFilters from "../../../pages/searchListing/filterPopups/searchFilters";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { SearchFilters } from "../../../interfaces/state/searchQuery";
import { calculateNumberOfFilterSelected } from "./calculateNumberOfFilterSelected";
import { isUserChangePriceSelector } from "../../../state/selectors/isUserChangePrice";

interface FilterBtnProps {
    updateFilter: (searchFilter: SearchFilters) => void;
    distribution: { [key: string]: number };
    isTouchDevice?: boolean;
}

const FilterBtn: React.FC<FilterBtnProps> = ({ updateFilter, distribution, isTouchDevice }) => {
    const [filterActive, setFilterActive] = useState(false);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const [filterSelectedNumber, setFilterSelectedNumber] = useState(0);

    useEffect(() => {
        //calculate number of filter selected
        if (distribution) {
            setFilterSelectedNumber(calculateNumberOfFilterSelected(searchFilters, isUserChangePrice));
        }
    }, [distribution, searchFilters]);

    return (
        <>
            <FilterBtnWrapper
                onClick={() => {
                    setFilterActive(true);
                }}
            >
                <FilterBtnIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/filter.svg"} alt={"filter icon"} />
                <FilterBtnText>Filters</FilterBtnText>
                {filterSelectedNumber > 0 && <FilterSelectedNumberBubble>{filterSelectedNumber}</FilterSelectedNumberBubble>}
            </FilterBtnWrapper>
            {filterActive && (
                <SearchListingFilters
                    togglePopup={() => {
                        if (!isTouchDevice) {
                            setFilterActive(false);
                        }
                    }}
                    updateSearchBySearchFilters={updateFilter}
                    distribution={distribution}
                />
            )}
        </>
    );
};

export default FilterBtn;
