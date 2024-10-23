import { useState, useEffect, useRef, useCallback } from "react";
import {
    SearchListingFiltersWrapper,
    SearchListingFiltersSection,
    SearchListingFiltersSectionTitle,
    SearchListingFiltersSectionPriceRangeInputWrapper,
    PriceRangeSliderWrapper,
    SearchListingGuestInputWrapper,
    SearchListingGuestInputText,
    SearchListingGuestInput,
    SearchListingGuestButton,
    SearchListingAmenitiesWrapper,
    SearchListingAmenitieWrapper,
    SearchListingAmenitieText,
    SearchListingFiltersContent,
    SearchListingFiltersSectionTitleWrapper,
    SearchListingHouseRulesWrapper,
    SearchListingPropertyTypeWrapper,
    SearchFiltersTypeOfPlaceButtonWrapper,
    SearchFiltersTypeOfPlaceTitleWrapper,
    SearchFiltersTypeOfPlaceTitle,
    SearchFiltersTypeOfPlaceIcon,
    SearchFiltersOptionsForYourStayWrapper,
    SearchFiltersOptionsForYourStayTitleWrapper,
    SearchFiltersOptionsForYourStayTitle,
    SearchFiltersOptionsForYourStaySubtitle,
    SearchListingFiltersSectionPriceRangeInput,
    SearchListingFiltersSectionPriceRangeTitle,
    SearchListingFiltersSectionPriceRangeAmountWrapper,
    SearchListingFiltersSectionPriceRangeAmountLabel,
    SearchLisingFiltersSectionPriceRangeAmountInput,
    SearchListingTypeOfPlaceSection,
    SearchListingFiltersSectionSeeMoreButton,
    SearchListingFiltersSectionSubtitle,
    PriceRangeWrapper,
    PriceRangeContentWrapper,
    PriceRangeItem,
} from "../searchListingStyling";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import useClickOutside from "../../../hook/useClickOutside";
import { searchFiltersSelector, searchQuerySelector } from "../../../state/selectors/searchQuery";
import { useRecoilState } from "recoil";
// import { useHistory } from "react-router-dom";
import Switch from "@mui/material/Switch";
// import { withStyles ,makeStyles} from '@mui/styles';
import { styled, SvgIcon } from "@mui/material";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { SearchFilters } from "../../../interfaces/state/searchQuery";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import { Helmet } from "react-helmet";
import { PriceDistributionData } from "../searchListing";
import useIsTouchDevice from "../../../hook/useIsTouchDevice";
import { isUserChangePriceSelector } from "../../../state/selectors/isUserChangePrice";

const typeOfPlaceData = [
    {
        inlineId: "entire-place",
        title: "Home",
        src: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Entire+place.svg",
        alt: "Entire places",
    },
    {
        inlineId: "private-room",
        title: "Room",
        src: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Private+room.svg",
        alt: "Private room",
    },
    {
        inlineId: "serviced-room",
        title: "Hotel",
        src: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Hotel.svg",
        alt: "Hotel room",
    },
    {
        inlineId: "shared-room",
        title: "Shared",
        src: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Shared+room.svg",
        alt: "Shared room",
    },
    {
        inlineId: "camping",
        title: "Camping",
        src: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Camping.svg",
        alt: "Camping",
    },
];
const allAmenitiesTypes = [
    "Wifi",
    "Aircon",
    "Pool",
    "Parking",
    "TV",
    "Kitchen",
    "Toiletries",
    "Towels",
    "Bedding",
    "Washer",
    "Dryer",
    "Desk",
    "Office",
    "Cutlery",
    "Pots & pans",
    "Dishwasher",
    "Heating",
    "Iron",
    "Hair dryer",
    "Spa",
    "Safe",
    "BBQ",
    "Gym",
    "Lift",
    "Kettle",
    "Microwave",
    "Tea and coffee",
    "Bathtub",
    "Fridge",
    "Vacuum",
    "High chair",
    "Crib",
    "Alarm",
];
const allPropertyTypes = [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "townhouse", label: "Townhouse" },
    { value: "cabin", label: "Cabin" },
    { value: "guest", label: "Guest house" },
    { value: "studio", label: "Studio" },
    { value: "chalet", label: "Chalet" },
    { value: "hotel", label: "Hotel" },
    { value: "serviced-apartment", label: "Serviced apartment" },
    { value: "resort", label: "Resort" },
    { value: "bed-and-breakfast", label: "Bed & Breakfast" },
    { value: "farm-stay", label: "Farm stay" },
    { value: "hostel", label: "Hostel" },
    { value: "motel", label: "Motel" },
    { value: "beach-house", label: "Beach house" },
    { value: "tree-house", label: "Tree house" },
    { value: "condo", label: "Condo" },
    { value: "cottage", label: "Cottage" },
    { value: "villa", label: "Villa" },
    { value: "lodge", label: "Lodge" },
    { value: "estate", label: "Estate" },
    { value: "tiny-home", label: "Tiny home" },
    { value: "yurt", label: "Yurt" },
    { value: "glamping", label: "Glamping" },
    { value: "guest-suite", label: "Guest suite" },
    { value: "penthouse", label: "Penthouse" },
    { value: "campsite", label: "Campsite" },
    { value: "station", label: "Station" },
    { value: "dome", label: "Dome" },
    { value: "boutique-hotel", label: "Boutique hotel" },
    { value: "barn", label: "Barn" },
    { value: "shed", label: "Shed" },
    { value: "shack", label: "Shack" },
    { value: "caravan", label: "Caravan" },
    { value: "wagon", label: "Wagon" },
    { value: "boat", label: "Boat" },
    { value: "yacht", label: "Yacht" },
    { value: "castle", label: "Castle" },
    { value: "island", label: "Island" },
    { value: "lake-house", label: "Lake house" },
    { value: "tower", label: "Tower" },
    { value: "aparthotel", label: "Aparthotel" },
    { value: "nature-lodge", label: "Nature lodge" },
    { value: "houseboat", label: "Houseboat" },
    { value: "lighthouse", label: "Lighthouse" },
    { value: "bungalow", label: "Bungalow" },
    { value: "hut", label: "Hut" },
    { value: "loft", label: "Loft" },
    { value: "train", label: "Train" },
    { value: "teepee", label: "Teepee" },
    { value: "bus", label: "Bus" },
    { value: "suite", label: "Suite" },
    { value: "cave", label: "Cave" },
    { value: "chatea", label: "Chateau" },
    { value: "riad", label: "Riad" },
    { value: "rv", label: "RV" },
    { value: "windmill", label: "Windmill" },
    { value: "sheperds-hut", label: "Shepherds hut" },
    { value: "tram", label: "Tram" },
    { value: "igloo", label: "Igloo" },
    { value: "church", label: "Church" },
    { value: "eco-house", label: "Eco house" },
    { value: "bunker", label: "Bunker" },
];
const allHouseRulesTypes = ["Smoking", "Event friendly"];

const optionsForYourStayData = [
    {
        inlineId: "instant-book",
        title: "Instant book",
        description: "Book a place instantly",
    },
    {
        inlineId: "free-cancellation",
        title: "Free cancellation",
        description: "Make a free cancellation",
    },
    {
        inlineId: "pets-allowed",
        title: "Pets allowed",
        description: "Book a pet friendly place",
    },
];

interface SearchListingFiltersProps {
    togglePopup: () => void;
    updateSearchBySearchFilters: (searchFilters: SearchFilters) => void;
    distribution: { [key: string]: number };
    setPage?: React.Dispatch<React.SetStateAction<number>>;
}

const SearchListingFilters: React.FC<SearchListingFiltersProps> = ({ togglePopup, updateSearchBySearchFilters, distribution, setPage }) => {
    const wrapperRef = useClickOutside(true, togglePopup);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const [typeOfPlace, setTypeOfPlace] = useState(searchFilters.typeOfPlace);
    const [propertyType, setPropertyType] = useState(searchFilters.propertyType);
    const [amenities, setAmenities] = useState(searchFilters.amenities);
    const [houseRules, setHouseRules] = useState(searchFilters.houseRules);
    const [priceRange, setPriceRange] = useState([
        distribution && !isUserChangePrice ? distribution.min : searchFilters.priceRange.min,
        distribution && !isUserChangePrice ? distribution.max : searchFilters.priceRange.max,
    ]);
    const [bedrooms, setBedrooms] = useState(searchFilters.bedrooms);
    const [beds, setBeds] = useState(searchFilters.beds);
    const [bathrooms, setBathrooms] = useState(searchFilters.bathrooms);
    const [optionsForYourStay, setOptionsForYourStay] = useState(searchFilters.optionsForYourStay);

    const [moreAmenities, setMoreAmenities] = useState(false);
    const [morePropertyType, setMorePropertyType] = useState(false);
    const [boolArray, setBoolArray] = useState<boolean[]>(Array(60).fill(false));

    const priceDistribution = Object.fromEntries(Object.entries(distribution).filter(([key, value]) => !isNaN(Number(key))));
    const min = distribution ? distribution.min : 0;
    const max = distribution ? distribution.max : 1000;
    const total = distribution ? distribution.total : 0;

    const isTouchDevice = useIsTouchDevice();

    const clearFilter = () => {
        const searchFiltersCopy = { ...searchFilters };
        searchFiltersCopy.amenities = [];
        searchFiltersCopy.propertyType = [];
        searchFiltersCopy.houseRules = [];
        searchFiltersCopy.typeOfPlace = [];
        searchFiltersCopy.bedrooms = 0;
        searchFiltersCopy.beds = 0;
        searchFiltersCopy.bathrooms = 0;
        searchFiltersCopy.priceRange = { min: min, max: max };
        searchFiltersCopy.optionsForYourStay = [];
        setSearchFilters(searchFiltersCopy);
        setTypeOfPlace(searchFiltersCopy.typeOfPlace);
        setPropertyType(searchFiltersCopy.propertyType);
        setAmenities(searchFiltersCopy.amenities);
        setHouseRules(searchFiltersCopy.houseRules);
        setPriceRange([searchFiltersCopy.priceRange.min, searchFiltersCopy.priceRange.max]);
        setBedrooms(searchFiltersCopy.bedrooms);
        setBathrooms(searchFiltersCopy.bathrooms);
        setBeds(searchFiltersCopy.beds);
        setOptionsForYourStay(searchFiltersCopy.optionsForYourStay);
        setMoreAmenities(false);
        setMorePropertyType(false);
        setIsUserChangePrice(false);

        const minValue = searchFiltersCopy.priceRange.min;
        const maxValue = searchFiltersCopy.priceRange.max;

        const minIndex = checkCurrentValue(minValue);
        const maxIndex = checkCurrentValue(maxValue);

        setBoolArray((prev) => {
            return prev.map((item, index) => {
                return index < minIndex || index > maxIndex ? true : false;
            });
        });
    };

    const saveFilter = () => {
        const searchFiltersCopy = { ...searchFilters };
        searchFiltersCopy.amenities = amenities;
        searchFiltersCopy.propertyType = propertyType;
        searchFiltersCopy.houseRules = houseRules;
        searchFiltersCopy.typeOfPlace = typeOfPlace;
        searchFiltersCopy.bedrooms = bedrooms;
        searchFiltersCopy.beds = beds;
        searchFiltersCopy.bathrooms = bathrooms;
        searchFiltersCopy.priceRange = { min: priceRange[0], max: priceRange[1] };
        searchFiltersCopy.optionsForYourStay = optionsForYourStay;
        setSearchFilters(searchFiltersCopy);
        togglePopup();
        updateSearchBySearchFilters(searchFiltersCopy);
        if (setPage) setPage(1);
    };

    const classes = {
        border: `1px solid ${ColorTheme.Grey1.color}`,
        borderRadius: "4px",
        padding: "0",
        width: "24px",
        height: "24px",
        "& .MuiSvgIcon-root": {
            width: "24px",
            height: "24px",
            "& path": {
                fill: "none",
            },
        },
        "&.Mui-checked": {
            border: "unset",
            "& .MuiSvgIcon-root": {
                width: "32px",
                height: "32px",
                "& path": {
                    // transform: "translate(3px, 3px)",
                    fill: "red",
                    // stroke: "red",
                    // strokeWidth: "6px",
                },
            },
        },
    };

    // const displayValue = (value: number) => {
    //     if (value <= 1000) {
    //         return Math.round((value / 1000) * 50);
    //     } else {
    //         return Math.round(50 + ((value - 1000) / 9000) * 50);
    //     }
    // };

    // const reverseDisplayValue = (displayedValue: number) => {
    //     if (displayedValue <= 50) {
    //         return Math.round((displayedValue / 50) * 1000);
    //     } else {
    //         return Math.round(1000 + ((displayedValue - 50) / 50) * 9000);
    //     }A
    // };

    const checkCurrentValue = useCallback(
        (price: number) => {
            const pricegap = (max - min) / 60;
            const index = Math.floor((price - min) / pricegap);
            return index;
        },
        [max, min]
    );

    const handleChange = useCallback(
        (event: Event, newValue: number | number[]) => {
            setPriceRange([(newValue as number[])[0], (newValue as number[])[1]]);
            const minValue = (newValue as number[])[0];
            const maxValue = (newValue as number[])[1];

            const minIndex = checkCurrentValue(minValue);
            const maxIndex = checkCurrentValue(maxValue);
            setBoolArray((prev) => {
                return prev.map((item, index) => {
                    return index < minIndex || index > maxIndex ? true : false;
                });
            });
        },
        [checkCurrentValue]
    );

    useEffect(() => {
        const simulatedEvent = new Event("change");
        handleChange(simulatedEvent, priceRange);
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        const originalColor = themeColorMeta?.getAttribute("content");
        themeColorMeta?.setAttribute("content", ColorTheme.White.color);
        return () => themeColorMeta?.setAttribute("content", originalColor as string);
    }, []);

    const generatePriceSteps = () => {
        const ranges = [];
        for (let price = min; price <= max && ranges.length <= 60; price += (max - min) / 60) {
            ranges.push(price);
        }
        return ranges;
    };

    const priceSteps = generatePriceSteps();
    const isDesktopSize = useIsDesktopSize();
    const priceDistributionValues = Object.values(priceDistribution || {});
    const maxHeight = Math.max(...priceDistributionValues);
    const scalingFactor = maxHeight ? 50 / maxHeight : 1;
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={togglePopup}
            onTouchEnd={isTouchDevice ? togglePopup : undefined}
            handleSave={saveFilter}
            cancelPopup={clearFilter}
            btnText="Save"
            cancelBtnText="Clear"
            desktopWidth="720px"
            height="calc(100% - 12px)"
            desktopHeight="calc(100% - 80px)"
            noBackdrop={isDesktopSize ? false : true}
        >
            <SearchListingFiltersWrapper>
                <SearchListingFiltersContent>
                    <SearchListingFiltersSection style={{ paddingTop: "12px" }}>
                        <SearchListingFiltersSectionTitle style={{ marginBottom: "24px" }}>Type of place</SearchListingFiltersSectionTitle>
                        <SearchListingTypeOfPlaceSection>
                            {typeOfPlaceData.map((item) => {
                                return (
                                    <SearchFiltersTypeOfPlaceButtonWrapper
                                        key={item.inlineId}
                                        selected={typeOfPlace.includes(item.inlineId)}
                                        onClick={
                                            !isTouchDevice
                                                ? () => {
                                                      if (typeOfPlace.includes(item.inlineId)) {
                                                          setTypeOfPlace(typeOfPlace.filter((e) => e !== item.inlineId));
                                                      } else {
                                                          setTypeOfPlace([...typeOfPlace, item.inlineId]);
                                                      }
                                                  }
                                                : undefined
                                        }
                                        onTouchEnd={
                                            isTouchDevice
                                                ? () => {
                                                      if (typeOfPlace.includes(item.inlineId)) {
                                                          setTypeOfPlace(typeOfPlace.filter((e) => e !== item.inlineId));
                                                      } else {
                                                          setTypeOfPlace([...typeOfPlace, item.inlineId]);
                                                      }
                                                  }
                                                : undefined
                                        }
                                    >
                                        <SearchFiltersTypeOfPlaceIcon src={item.src} alt={item.alt} />

                                        <SearchFiltersTypeOfPlaceTitleWrapper>
                                            <SearchFiltersTypeOfPlaceTitle>{item.title}</SearchFiltersTypeOfPlaceTitle>
                                        </SearchFiltersTypeOfPlaceTitleWrapper>
                                    </SearchFiltersTypeOfPlaceButtonWrapper>
                                );
                            })}
                        </SearchListingTypeOfPlaceSection>
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection>
                        <SearchListingFiltersSectionTitle style={{ marginBottom: "8px" }}>Price range</SearchListingFiltersSectionTitle>
                        <SearchListingFiltersSectionSubtitle>Nightly price shown in AUD</SearchListingFiltersSectionSubtitle>
                        <PriceRangeContentWrapper>
                            <PriceRangeWrapper>
                                {priceSteps.map((price, index) => {
                                    const height = distribution ? distribution[index] || 0 : 0;

                                    const selected = boolArray[index];
                                    if (!total) return null;
                                    const adjustedHeight = ((height * scalingFactor) / total) * 100;

                                    return <PriceRangeItem key={index} height={adjustedHeight} selected={selected} />;
                                })}
                            </PriceRangeWrapper>
                            <PriceRangeSliderWrapper className={"price-range"}>
                                <Slider
                                    sx={{
                                        "& .MuiSlider-track": { color: "#262626", background: "#262626" },
                                        "& .MuiSlider-rail": { color: "#737373", background: "#737373" },
                                        "& .MuiSlider-rail, & .MuiSlider-track": { marginTop: "10px", height: "2px" },
                                        "& .MuiSlider-thumb": {
                                            width: "32px",
                                            height: "32px",
                                            marginTop: "10px",
                                            background: "white",
                                            boxShadow: "0px 0.5px 4px 0px rgba(0, 0, 0, 0.12), 0px 6px 13px 0px rgba(0, 0, 0, 0.12)",
                                        },
                                    }}
                                    id="priceRangeSlider"
                                    min={min}
                                    max={max}
                                    value={priceRange}
                                    onChange={handleChange}
                                    onChangeCommitted={() => setIsUserChangePrice(true)}
                                    valueLabelDisplay="off"
                                />
                            </PriceRangeSliderWrapper>
                        </PriceRangeContentWrapper>

                        <SearchListingFiltersSectionPriceRangeInputWrapper>
                            <SearchListingFiltersSectionPriceRangeInput>
                                <SearchListingFiltersSectionPriceRangeTitle>Min</SearchListingFiltersSectionPriceRangeTitle>
                                <SearchListingFiltersSectionPriceRangeAmountWrapper>
                                    <SearchListingFiltersSectionPriceRangeAmountLabel>$</SearchListingFiltersSectionPriceRangeAmountLabel>
                                    <SearchLisingFiltersSectionPriceRangeAmountInput
                                        id={"minPriceInput"}
                                        value={priceRange[0]}
                                        type="number"
                                        onChange={(e) => {
                                            if (e.target.value === "") {
                                                setPriceRange([0, priceRange[1]]);
                                            }
                                            if (e.target.value.startsWith("0")) {
                                                e.target.value = e.target.value.replace("0", "");
                                                setPriceRange([Number(e.target.value), priceRange[1]]);
                                            } else {
                                                setPriceRange([Number(e.target.value), priceRange[1]]);
                                            }
                                        }}
                                    />
                                </SearchListingFiltersSectionPriceRangeAmountWrapper>
                            </SearchListingFiltersSectionPriceRangeInput>
                            <SearchListingFiltersSectionPriceRangeInput>
                                <SearchListingFiltersSectionPriceRangeTitle>Max</SearchListingFiltersSectionPriceRangeTitle>
                                <SearchListingFiltersSectionPriceRangeAmountWrapper>
                                    <SearchListingFiltersSectionPriceRangeAmountLabel>$</SearchListingFiltersSectionPriceRangeAmountLabel>
                                    <SearchLisingFiltersSectionPriceRangeAmountInput
                                        id={"maxPriceInput"}
                                        value={priceRange[1]}
                                        type="number"
                                        onChange={(e) => {
                                            if (e.target.value === "") {
                                                setPriceRange([priceRange[0], 0]);
                                            }
                                            if (e.target.value.startsWith("0")) {
                                                e.target.value = e.target.value.replace("0", "");
                                                setPriceRange([priceRange[0], Number(e.target.value)]);
                                            } else {
                                                setPriceRange([priceRange[0], Number(e.target.value)]);
                                            }
                                        }}
                                    />
                                </SearchListingFiltersSectionPriceRangeAmountWrapper>
                            </SearchListingFiltersSectionPriceRangeInput>
                        </SearchListingFiltersSectionPriceRangeInputWrapper>
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection>
                        <SearchListingFiltersSectionTitle>Rooms and spaces</SearchListingFiltersSectionTitle>
                        <SearchListingGuestInputWrapper>
                            <SearchListingGuestInputText>Bedrooms</SearchListingGuestInputText>
                            <SearchListingGuestInput>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (bedrooms > 0) {
                                                      setBedrooms((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (bedrooms > 0) {
                                                      setBedrooms((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    -
                                </SearchListingGuestButton>
                                <SearchListingGuestInputText>{bedrooms}</SearchListingGuestInputText>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (bedrooms < 10) {
                                                      setBedrooms((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (bedrooms < 10) {
                                                      setBedrooms((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    +
                                </SearchListingGuestButton>
                            </SearchListingGuestInput>
                        </SearchListingGuestInputWrapper>
                        <SearchListingGuestInputWrapper>
                            <SearchListingGuestInputText>Beds</SearchListingGuestInputText>
                            <SearchListingGuestInput>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (beds > 0) {
                                                      setBeds((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (beds > 0) {
                                                      setBeds((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    -
                                </SearchListingGuestButton>
                                <SearchListingGuestInputText>{beds}</SearchListingGuestInputText>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (beds < 10) {
                                                      setBeds((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (beds < 10) {
                                                      setBeds((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    +
                                </SearchListingGuestButton>
                            </SearchListingGuestInput>
                        </SearchListingGuestInputWrapper>
                        <SearchListingGuestInputWrapper style={{ marginBottom: "0px" }}>
                            <SearchListingGuestInputText>Bathrooms</SearchListingGuestInputText>
                            <SearchListingGuestInput>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (bathrooms > 0) {
                                                      setBathrooms((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (bathrooms > 0) {
                                                      setBathrooms((prevState) => prevState - 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    -
                                </SearchListingGuestButton>
                                <SearchListingGuestInputText>{bathrooms}</SearchListingGuestInputText>
                                <SearchListingGuestButton
                                    type="button"
                                    onClick={
                                        !isTouchDevice
                                            ? () => {
                                                  if (bathrooms < 10) {
                                                      setBathrooms((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                    onTouchEnd={
                                        isTouchDevice
                                            ? () => {
                                                  if (bathrooms < 10) {
                                                      setBathrooms((prevState) => prevState + 1);
                                                  }
                                              }
                                            : undefined
                                    }
                                >
                                    +
                                </SearchListingGuestButton>
                            </SearchListingGuestInput>
                        </SearchListingGuestInputWrapper>
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection>
                        <SearchListingFiltersSectionTitle>Options for your stay</SearchListingFiltersSectionTitle>
                        {optionsForYourStayData.map((item, index) => {
                            return (
                                <SearchFiltersOptionsForYourStayWrapper key={item.inlineId}>
                                    <SearchFiltersOptionsForYourStayTitleWrapper>
                                        <SearchFiltersOptionsForYourStayTitle>{item.title}</SearchFiltersOptionsForYourStayTitle>
                                        <SearchFiltersOptionsForYourStaySubtitle>{item.description}</SearchFiltersOptionsForYourStaySubtitle>
                                    </SearchFiltersOptionsForYourStayTitleWrapper>
                                    <AntSwitch
                                        id={`antSwitch${index}`}
                                        checked={optionsForYourStay.includes(item.inlineId)}
                                        onChange={() => {
                                            if (optionsForYourStay.includes(item.inlineId)) {
                                                setOptionsForYourStay(optionsForYourStay.filter((e) => e !== item.inlineId));
                                            } else {
                                                setOptionsForYourStay([...optionsForYourStay, item.inlineId]);
                                            }
                                        }}
                                    />
                                </SearchFiltersOptionsForYourStayWrapper>
                            );
                        })}
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection>
                        <SearchListingFiltersSectionTitleWrapper>
                            <SearchListingFiltersSectionTitle>Amenities</SearchListingFiltersSectionTitle>
                        </SearchListingFiltersSectionTitleWrapper>
                        <SearchListingAmenitiesWrapper moreAmenities={moreAmenities}>
                            {allAmenitiesTypes.map((item) => {
                                return (
                                    <SearchListingAmenitieWrapper key={item}>
                                        <Checkbox
                                            sx={classes}
                                            id={item}
                                            checked={amenities.includes(item)}
                                            onChange={() => {
                                                if (amenities.includes(item)) {
                                                    setAmenities(amenities.filter((e) => e !== item));
                                                } else {
                                                    setAmenities([...amenities, item]);
                                                }
                                            }}
                                        />
                                        <SearchListingAmenitieText>{item}</SearchListingAmenitieText>
                                    </SearchListingAmenitieWrapper>
                                );
                            })}
                        </SearchListingAmenitiesWrapper>
                        <SearchListingFiltersSectionSeeMoreButton onClick={() => setMoreAmenities(!moreAmenities)}>
                            {moreAmenities ? "Hide amenities" : `See ${allAmenitiesTypes.length} amenities`}
                        </SearchListingFiltersSectionSeeMoreButton>
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection>
                        <SearchListingFiltersSectionTitleWrapper>
                            <SearchListingFiltersSectionTitle>Property type</SearchListingFiltersSectionTitle>
                        </SearchListingFiltersSectionTitleWrapper>
                        <SearchListingPropertyTypeWrapper morePropertyType={morePropertyType}>
                            {allPropertyTypes.map((item) => {
                                return (
                                    <SearchListingAmenitieWrapper key={item.value}>
                                        <Checkbox
                                            sx={classes}
                                            id={item.value}
                                            checked={propertyType.includes(item.value)}
                                            onChange={(e) => {
                                                if (propertyType.includes(item.value)) {
                                                    setPropertyType(propertyType.filter((e) => e !== item.value));
                                                } else {
                                                    setPropertyType([...propertyType, item.value]);
                                                }
                                            }}
                                        />
                                        <SearchListingAmenitieText>{item.label}</SearchListingAmenitieText>
                                    </SearchListingAmenitieWrapper>
                                );
                            })}
                        </SearchListingPropertyTypeWrapper>
                        <SearchListingFiltersSectionSeeMoreButton onClick={() => setMorePropertyType(!morePropertyType)}>
                            {morePropertyType ? "Hide property types" : `See ${allPropertyTypes.length} property types`}
                        </SearchListingFiltersSectionSeeMoreButton>
                    </SearchListingFiltersSection>

                    <SearchListingFiltersSection style={{ borderBottom: "0" }}>
                        <SearchListingFiltersSectionTitleWrapper>
                            <SearchListingFiltersSectionTitle>Special requests</SearchListingFiltersSectionTitle>
                        </SearchListingFiltersSectionTitleWrapper>
                        <SearchListingHouseRulesWrapper>
                            {allHouseRulesTypes.map((item) => {
                                return (
                                    <SearchListingAmenitieWrapper key={item}>
                                        <Checkbox
                                            sx={classes}
                                            id={item}
                                            checked={houseRules.includes(item)}
                                            onChange={() => {
                                                if (houseRules.includes(item)) {
                                                    setHouseRules(houseRules.filter((e) => e !== item));
                                                } else {
                                                    setHouseRules([...houseRules, item]);
                                                }
                                            }}
                                        />
                                        <SearchListingAmenitieText>{item}</SearchListingAmenitieText>
                                    </SearchListingAmenitieWrapper>
                                );
                            })}
                        </SearchListingHouseRulesWrapper>
                    </SearchListingFiltersSection>
                </SearchListingFiltersContent>
            </SearchListingFiltersWrapper>
        </GlobalPopupContainerCenter>
    );
};
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 32,
    padding: 0,
    display: "flex",
    marginLeft: "auto",
    "& .MuiSwitch-switchBase": {
        padding: 4,
        color: theme.palette.common.white,
        "&.Mui-checked": {
            color: theme.palette.common.white,
            transform: "translateX(20px)",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: ColorTheme.Red.color,
                borderColor: ColorTheme.Red.color,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        width: 24,
        height: 24,
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.15), 0px 3px 1px 0px rgba(0, 0, 0, 0.06)",
        color: ColorTheme.White.color,
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: ColorTheme.Grey3.color,
        borderColor: ColorTheme.Grey3.color,
        borderRadius: 32,
    },
}));

export default SearchListingFilters;
