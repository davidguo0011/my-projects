import { Fragment, useEffect, useState, useRef } from "react";
import NavbarSearchbarPopDownReccomendedCities, { PlaceDataInterface } from "./PlacePicker/recommendedCities";
import { useLocation } from "react-router-dom";
import {
    NavbarDesktopSearchIcon,
    NavbarAutocompleteInput,
    NavbarSearchbarPopDown,
    NavbarSearchbarMobileSearchButton,
    NavbarSearchbarWrapperDesktop,
    NavbarSearchbarWrapperDesktopSearchButton,
    NavbarSearchbarWrapperDesktopSearchIcon,
    NavbarSearchbarWrapperDesktopSearchWrapper,
    NavbarSearchbarWrapperDesktopLabelInputWrapper,
    NavbarSearchbarWrapperDesktopSearchDivider,
    NavbarSearchbarWrapperDesktopSearchLabel,
    NavbarSearchbarWrapperDesktopDatesWrapper,
    NavbarSearchbarWrapperDesktopDatesText,
    NavbarSearchbarWrapperDesktopDatesLabelInputWrapper,
    NavbarSearchbarWrapperDesktopGuestsWrapper,
    NavbarSearchbarWrapperDesktopGuestsLabelInputWrapper,
    NavbarSearchbarWrapperDesktopGuestsText,
    SearchBarClearButton,
    NavbarSearchbarMobileSearchTitle,
    NavbarSearchbarMobileSearchSubTitle,
    NavbarSearchbarMobileSearchTitleArea,
    NavbarDesktopSearchIconArea,
    SearchListingResultsContainerFiltersSelected,
    SearchBarClearButtonIcon,
} from "../navbarStyling";
import { useNavigate } from "react-router-dom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import useClickOutside from "../../../../hook/useClickOutside";
import GuestsPicker from "./GuestsPicker/GuestsPicker";
import AddDatesPopup from "./DatePicker/datesPicker";
import { calculateNumberOfFilterSelected } from "../../../categoryBar/filterBtn/calculateNumberOfFilterSelected";

import { searchFiltersSelector, searchQuerySelector } from "../../../../state/selectors/searchQuery";
import useIsDesktopSize from "../../../../hook/useIsDesktopSize";
import { SearchFilters, SearchQueryState } from "../../../../interfaces/state/searchQuery";
import { motion } from "framer-motion";
import useIsTouchDevice from "../../../../hook/useIsTouchDevice";
import { isUserChangePriceSelector } from "../../../../state/selectors/isUserChangePrice";
interface NavbarSearchbarPopDownInputProps {
    active: boolean;
    setNavbarSearchMenuActivated: SetterOrUpdater<boolean>;
    setMobileSearchMenuActivated: SetterOrUpdater<boolean>;
}

function NavbarSearchbarPopDownInput({ active, setNavbarSearchMenuActivated, setMobileSearchMenuActivated }: NavbarSearchbarPopDownInputProps) {
    const [addDatesPopup, setAddDatesPopup] = useState(false);
    const [addGuestPopup, setAddGuestPopup] = useState(false);
    const [addAddressPopup, setAddAddressPopup] = useState(false);

    const [isSearchFilterPopup, setIsSearchFilterPopup] = useState(false);

    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const wrapperRef = useClickOutside<HTMLButtonElement | HTMLDivElement>(
        active,
        () => {
            setNavbarSearchMenuActivated(false);
        },
        true
    );

    const location = useLocation();

    const navigate = useNavigate();
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
    const [input, setInput] = useState(searchQuery.title ? searchQuery.title : "");
    const inputRef = useRef<HTMLInputElement>(null);

    const isDesktopSize = useIsDesktopSize();

    const isTouchDevice = useIsTouchDevice();

    const formatGuestsValue = () => {
        let guestsNum = searchFilters.adults + searchFilters.children;
        let guestsArray = [];
        if (guestsNum) {
            guestsArray.push(`${guestsNum} ${guestsNum > 1 ? "guests" : "guest"}`);
        }
        if (searchFilters.infants) {
            guestsArray.push(`${searchFilters.infants} ${searchFilters.infants > 1 ? "infants" : "infant"}`);
        }
        if (searchFilters.pets) {
            guestsArray.push(`${searchFilters.pets} ${searchFilters.pets > 1 ? "pets" : "pet"}`);
        }
        return guestsArray.join(", ");
    };

    useEffect(() => {
        if (document.getElementById("googleAutocompleteInput")) {
            const input = document.getElementById("googleAutocompleteInput");
            if (input) {
                input.setAttribute("autocomplete", "off");
            }
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    useEffect(() => {
        setAddAddressPopup(!input);
    }, [input]);

    const checkFiltersSelected = () => {
        if (searchFilters) {
            return searchFilters.typeOfPlace.length !== 0 ||
                searchFilters.priceRange.min !== 0 ||
                searchFilters.priceRange.max !== 1000 ||
                searchFilters.bedrooms !== 0 ||
                searchFilters.bathrooms !== 0 ||
                searchFilters.propertyType.length !== 0 ||
                searchFilters.houseRules.length !== 0 ||
                searchFilters.amenities.length !== 0 ||
                searchFilters.optionsForYourStay.length !== 0
                ? true
                : false;
        } else {
            return false;
        }
    };

    const animationProps = isDesktopSize
        ? {
              initial: { height: 0 },
              animate: { height: 96 },
              exit: { height: 0 },
              transition: { duration: 0.125, ease: "easeInOut" },
          }
        : {};
    return (
        <Fragment>
            {isDesktopSize && active && (
                <motion.div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        left: 0,
                        bottom: 0,
                        zIndex: 10,
                        background: "rgba(0, 0, 0, 0.06)",
                        backdropFilter: "blur(7.5px)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.125, ease: "easeInOut" }}
                />
            )}
            <NavbarSearchbarPopDown key="navbar" {...animationProps} location={location.pathname}>
                <NavbarSearchbarMobileSearchButton
                    type="button"
                    onTouchEnd={isTouchDevice ? () => setMobileSearchMenuActivated(true) : undefined}
                    onClick={!isTouchDevice ? () => setMobileSearchMenuActivated(true) : undefined}
                    ref={wrapperRef as React.RefObject<HTMLButtonElement>}
                >
                    <NavbarDesktopSearchIconArea>
                        <NavbarDesktopSearchIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Search.svg"} style={{ margin: 0 }} alt={"Search icon"} />
                    </NavbarDesktopSearchIconArea>
                    <NavbarSearchbarMobileSearchTitleArea>
                        <NavbarSearchbarMobileSearchTitle>{searchQuery.title ? searchQuery.title : "Australia"}</NavbarSearchbarMobileSearchTitle>
                        <NavbarSearchbarMobileSearchSubTitle>
                            {searchQuery.startDate && searchQuery.endDate
                                ? `${(searchQuery.startDate as Date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })} - ${(searchQuery.endDate as Date).toLocaleDateString("en-AU", {
                                      day: "numeric",
                                      month: "short",
                                  })}`
                                : "Anytime"}
                            {searchFilters.adults || searchFilters.children ? ` • ${formatGuestsValue().split(", ")[0]}` : " • Add guests"}
                        </NavbarSearchbarMobileSearchSubTitle>
                    </NavbarSearchbarMobileSearchTitleArea>
                </NavbarSearchbarMobileSearchButton>

                <NavbarSearchbarWrapperDesktop
                    ref={wrapperRef as React.RefObject<HTMLDivElement>}
                    initial={{ y: -50, opacity: 0, width: 468 }}
                    animate={{ y: 0, opacity: 1, width: "calc(100% - 64px)" }}
                    exit={{ y: -50, opacity: 0, width: 468 }}
                    transition={{ duration: 0.125, ease: "easeInOut" }}
                >
                    <NavbarSearchbarWrapperDesktopSearchWrapper
                        style={{ padding: 0 }}
                        initial={{ width: 80 }}
                        animate={{ width: 280 }}
                        exit={{ width: 80 }}
                        transition={{ duration: 0.125, ease: "easeInOut" }}
                    >
                        <NavbarSearchbarWrapperDesktopLabelInputWrapper>
                            <NavbarSearchbarWrapperDesktopSearchLabel style={{ paddingTop: "13px" }}>Where</NavbarSearchbarWrapperDesktopSearchLabel>
                            <NavbarAutocompleteInput
                                id={"googleAutocompleteInput"}
                                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                // @ts-expect-error
                                value={input}
                                ref={inputRef}
                                onClick={() => {
                                    if (!input) {
                                        setAddAddressPopup(true);
                                        setAddDatesPopup(false);
                                        setAddGuestPopup(false);
                                    }
                                }}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setInput(e.target.value);
                                }}
                                onPlaceSelected={(place: google.maps.places.PlaceResult) => {
                                    if (!place.address_components) {
                                        return;
                                    } else {
                                        const input = (place.address_components as google.maps.GeocoderAddressComponent[])[0].types.includes("postal_code")
                                            ? (place.address_components as google.maps.GeocoderAddressComponent[])[1].long_name
                                            : (place.address_components as google.maps.GeocoderAddressComponent[])[0].long_name;
                                        setInput(input);
                                        setSearchQuery((prevState) => {
                                            return {
                                                ...prevState,
                                                placeId: place.place_id,
                                                title: input,
                                                lat: (place.geometry as google.maps.places.PlaceGeometry).location?.lat(),
                                                lng: (place.geometry as google.maps.places.PlaceGeometry).location?.lng(),
                                            } as SearchQueryState;
                                        });
                                        setAddDatesPopup(true);
                                    }
                                }}
                                placeholder={"Search anywhere"}
                                options={{
                                    types: ["(regions)"],
                                    componentRestrictions: { country: ["au", "nz"] },
                                }}
                            />
                        </NavbarSearchbarWrapperDesktopLabelInputWrapper>

                        <SearchBarClearButton
                            style={{ visibility: input ? "visible" : "hidden" }}
                            type="button"
                            onClick={() => {
                                setAddDatesPopup(false);
                                setAddGuestPopup(false);
                                setInput("");
                                setSearchQuery({ ...searchQuery, title: null, placeId: "ChIJ38WHZwf9KysRUhNblaFnglM", lat: null, lng: null });
                            }}
                        >
                            <SearchBarClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear address" />
                        </SearchBarClearButton>
                    </NavbarSearchbarWrapperDesktopSearchWrapper>
                    <NavbarSearchbarWrapperDesktopSearchDivider />
                    <NavbarSearchbarWrapperDesktopDatesWrapper>
                        <NavbarSearchbarWrapperDesktopDatesLabelInputWrapper
                            onClick={() => {
                                setAddDatesPopup(true);
                                setAddGuestPopup(false);
                                setAddAddressPopup(false);
                            }}
                        >
                            <NavbarSearchbarWrapperDesktopSearchLabel>When</NavbarSearchbarWrapperDesktopSearchLabel>
                            <NavbarSearchbarWrapperDesktopDatesText selected={!!(searchQuery.startDate && searchQuery.endDate)}>
                                {searchQuery.startDate && searchQuery.endDate
                                    ? `${(searchQuery.startDate as Date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })} - ${(searchQuery.endDate as Date).toLocaleDateString(
                                          "en-AU",
                                          {
                                              day: "numeric",
                                              month: "short",
                                          }
                                      )}`
                                    : "Add dates"}
                            </NavbarSearchbarWrapperDesktopDatesText>
                        </NavbarSearchbarWrapperDesktopDatesLabelInputWrapper>
                        <SearchBarClearButton
                            style={{ visibility: searchQuery.startDate || searchQuery.endDate ? "visible" : "hidden" }}
                            type="button"
                            onClick={() => {
                                setAddDatesPopup(false);
                                setAddGuestPopup(false);
                                setAddAddressPopup(false);
                                setSearchQuery({ ...searchQuery, startDate: null, endDate: null });
                            }}
                        >
                            <SearchBarClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear dates" />
                        </SearchBarClearButton>
                    </NavbarSearchbarWrapperDesktopDatesWrapper>
                    <NavbarSearchbarWrapperDesktopSearchDivider />
                    <NavbarSearchbarWrapperDesktopGuestsWrapper fullWidth={searchFilters.pets > 0 && searchFilters.infants > 0}>
                        <NavbarSearchbarWrapperDesktopGuestsLabelInputWrapper>
                            <NavbarSearchbarWrapperDesktopSearchLabel>Who</NavbarSearchbarWrapperDesktopSearchLabel>
                            <NavbarSearchbarWrapperDesktopGuestsText
                                onClick={() => {
                                    setAddGuestPopup(true);
                                    setAddAddressPopup(false);
                                    setAddDatesPopup(false);
                                }}
                                selected={!!(searchFilters.adults || searchFilters.children)}
                            >
                                {searchFilters.adults || searchFilters.children ? `${formatGuestsValue()}` : "Add guests"}
                            </NavbarSearchbarWrapperDesktopGuestsText>
                        </NavbarSearchbarWrapperDesktopGuestsLabelInputWrapper>
                        <SearchBarClearButton
                            style={{ marginRight: "15px", visibility: searchFilters.adults > 0 || searchFilters.children > 0 ? "visible" : "hidden" }}
                            type="button"
                            onClick={() => {
                                setAddDatesPopup(false);
                                setAddGuestPopup(false);
                                setAddAddressPopup(false);
                                setSearchFilters({ ...searchFilters, guests: 0, adults: 0, children: 0, infants: 0, pets: 0 });
                            }}
                        >
                            <SearchBarClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear guests" />
                        </SearchBarClearButton>
                    </NavbarSearchbarWrapperDesktopGuestsWrapper>
                    <NavbarSearchbarWrapperDesktopSearchButton
                        type="button"
                        onClick={async () => {
                            setAddAddressPopup(false);
                            setAddDatesPopup(false);
                            setAddGuestPopup(false);
                            let placeTitle = searchQuery.title ? searchQuery.title : "Australia";
                            let arrivalDate = searchQuery.startDate
                                ? `${String((searchQuery.startDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.startDate as Date).getFullYear()}`
                                : null;
                            let departureDate = searchQuery.endDate
                                ? `${String((searchQuery.endDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.endDate as Date).getFullYear()}`
                                : null;
                            const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                            searchFiltersCopy.category = "all";
                            setSearchFilters(searchFiltersCopy);

                            const locationString = placeTitle !== "Australia" ? `location=${placeTitle}` : "";
                            const locationIdString = searchQuery.placeId !== "ChIJ38WHZwf9KysRUhNblaFnglM" ? `locationId=${searchQuery.placeId}` : "";
                            const arrivalDateString = arrivalDate ? `arrivalDate=${arrivalDate}` : "";
                            const departureDateString = departureDate ? `departureDate=${departureDate}` : "";
                            const lat = searchQuery.lat ? `lat=${searchQuery.lat}` : "";
                            const lng = searchQuery.lng ? `lng=${searchQuery.lng}` : "";

                            const searchFiltersString =
                                calculateNumberOfFilterSelected(searchQuery.searchFilters, isUserChangePrice) > 0 ||
                                searchQuery.searchFilters.adults ||
                                searchQuery.searchFilters.children ||
                                searchQuery.searchFilters.infants ||
                                searchQuery.searchFilters.pets
                                    ? `searchFilters=${JSON.stringify(searchQuery.searchFilters)}`
                                    : "";

                            const searchParamsStrings = [locationString, locationIdString, arrivalDateString, departureDateString, lat, lng, searchFiltersString]
                                .filter((param) => param !== "")
                                .join("&");

                            navigate(`/search${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);

                            setNavbarSearchMenuActivated(false);
                        }}
                        initial={{ width: 100 }}
                        animate={{ width: 112 }}
                        exit={{ width: 100 }}
                    >
                        <NavbarSearchbarWrapperDesktopSearchIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/search-white.svg"} alt="Search icon" />
                        Search
                    </NavbarSearchbarWrapperDesktopSearchButton>

                    {addAddressPopup && isDesktopSize && (
                        <NavbarSearchbarPopDownReccomendedCities
                            input={input}
                            setAddAddressPopup={setAddAddressPopup}
                            setPlace={async (place: PlaceDataInterface) => {
                                setInput(place.address_components[0].long_name);
                                setSearchQuery({ ...searchQuery, title: place.address_components[0].long_name, placeId: place.place_id, lat: place.geometry.lat, lng: place.geometry.lng });
                                setAddDatesPopup(true);
                            }}
                        />
                    )}
                    {addDatesPopup && <AddDatesPopup activated={addDatesPopup} setAddDatesPopup={setAddDatesPopup} setAddGuestPopup={setAddGuestPopup} />}
                    {addGuestPopup && <GuestsPicker activated={addGuestPopup} setAddGuestPopup={setAddGuestPopup} />}
                </NavbarSearchbarWrapperDesktop>
            </NavbarSearchbarPopDown>
        </Fragment>
    );
}

export default NavbarSearchbarPopDownInput;
