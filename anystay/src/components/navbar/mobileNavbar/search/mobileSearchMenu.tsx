import { useState } from "react";
import {
    MobileNavbarSearchMenuContent,
    MobileNavbarAutocompleteInput,
    MobileNavbarAutocompleteInputWrapper,
    MobileNavbarDateContinueButtonWrapper,
    MobileNavbarDateContinueButton,
    MobileNavbarCalendarWrapper,
    MobileNavbarDateSearchButtonIcon,
    MobileNavbarGuestsWrapper,
    MobileNavbarDateBackButton,
    SearchBarClearButton,
    MobileNavbarDateSearchTitleText,
    MobileNavbarGuestCancelButton,
    MobileNavbarLocationSearchTitleText,
    MobileNavbarDateSearchButtonText,
    MobileNavbarSearchMenuWrapper,
    MobileNavbarSearchMenuWhenWhereWrapper,
    MobileNavbarSearchMenuWhenWhereContent,
    MobileNavbarSearchMenuWhenWhereTitle,
    MobileNavbarSearchMenuWhenWhereSubtitle,
    MobileNavbarSearchMenuWhenWhereDivider,
    SearchBarClearButtonIcon,
} from "../mobileNavbarStyling";
import MobileNavbarSearchMenuCalendar from "./mobileSearchMenuDatePicker";
import MobileNavbarGuestsInput from "./mobileSearchMenuGuestPicker";
import MobileSearchPlacePicker from "./mobileSearchPlacePicker";
import { searchQuerySelector, searchFiltersSelector } from "../../../../state/selectors/searchQuery";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../globaStyledComponents/globalStyledComponentsStyling";
import { calculateNumberOfFilterSelected } from "../../../categoryBar/filterBtn/calculateNumberOfFilterSelected";
import BackBtn from "../../../btn/backBtn/backBtn";
import ContinueBtn from "../../../btn/continueBtn/continueBtn";
import { isUserChangePriceSelector } from "../../../../state/selectors/isUserChangePrice";

interface MobileNavbarSearchMenuProps {
    setMobileSearchMenuActivated: SetterOrUpdater<boolean>;
    isTouchDevice?: boolean;
}

function MobileNavbarSearchMenu({ setMobileSearchMenuActivated, isTouchDevice }: MobileNavbarSearchMenuProps) {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
    let [input, setInput] = useState(searchQuery.title ? searchQuery.title : "");
    let navigate = useNavigate();
    const [searchMenuIndex, setSearchMenuIndex] = useState(0);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);
    const [startDate, setStartDate] = useState(searchQuery.startDate);
    const [endDate, setEndDate] = useState(searchQuery.endDate);
    const [date, setDate] = useState([startDate, endDate]);
    const [guests, setGuests] = useState({
        adults: searchQuery.searchFilters.adults,
        children: searchQuery.searchFilters.children,
        pets: searchQuery.searchFilters.pets,
        infants: searchQuery.searchFilters.infants,
    });
    const [title, setTitle] = useState(searchQuery.title);
    const [placeId, setPlaceId] = useState(searchQuery.placeId);
    const [lng, setLng] = useState(searchQuery.lng);
    const [lat, setLat] = useState(searchQuery.lat);

    const [inputFocused, setInputFocused] = useState(false);

    let submitSearch = async () => {
        let searchQueryCopy = JSON.parse(JSON.stringify(searchQuery));
        searchQueryCopy.lat = lat;
        searchQueryCopy.lng = lng;
        searchQueryCopy.startDate = startDate;
        searchQueryCopy.endDate = endDate;
        searchQueryCopy.title = title ? title : "Australia";
        searchQueryCopy.placeId = placeId;
        searchQueryCopy.searchFilters.guests = guests.adults + guests.children;
        searchQueryCopy.searchFilters.adults = guests.adults;
        searchQueryCopy.searchFilters.children = guests.children;
        searchQueryCopy.searchFilters.pets = guests.pets;
        searchQueryCopy.searchFilters.infants = guests.infants;
        setSearchQuery(searchQueryCopy);
        setMobileSearchMenuActivated(false);
        const searchFiltersCopy = JSON.parse(JSON.stringify(searchQueryCopy.searchFilters));
        searchFiltersCopy.category = "all";
        setSearchFilters(searchFiltersCopy);

        const placeTitle = searchQueryCopy.title ? searchQueryCopy.title : "Australia";
        const arrivalDate = searchQueryCopy.startDate
            ? `${String((searchQueryCopy.startDate as Date).getDate()).padStart(2, "0")}-${String((searchQueryCopy.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQueryCopy.startDate as Date).getFullYear()}`
            : null;
        const departureDate = searchQueryCopy.endDate
            ? `${String((searchQueryCopy.endDate as Date).getDate()).padStart(2, "0")}-${String((searchQueryCopy.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQueryCopy.endDate as Date).getFullYear()}`
            : null;
        const locationString = placeTitle !== "Australia" ? `location=${placeTitle}` : "";
        const locationIdString = searchQueryCopy.placeId !== "ChIJ38WHZwf9KysRUhNblaFnglM" ? `locationId=${searchQueryCopy.placeId}` : "";
        const arrivalDateString = arrivalDate ? `arrivalDate=${arrivalDate}` : "";
        const departureDateString = departureDate ? `departureDate=${departureDate}` : "";
        const latString = searchQueryCopy.lat ? `lat=${searchQueryCopy.lat}` : "";
        const lngString = searchQueryCopy.lng ? `lng=${searchQueryCopy.lng}` : "";

        const searchFiltersString =
            calculateNumberOfFilterSelected(searchQueryCopy.searchFilters, isUserChangePrice) > 0 ||
            searchQueryCopy.searchFilters.adults ||
            searchQueryCopy.searchFilters.children ||
            searchQueryCopy.searchFilters.infants ||
            searchQueryCopy.searchFilters.pets
                ? `searchFilters=${JSON.stringify(searchQueryCopy.searchFilters)}`
                : "";

        const searchParamsStrings = [locationString, locationIdString, arrivalDateString, departureDateString, latString, lngString, searchFiltersString].filter((param) => param !== "").join("&");

        navigate(`/search${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
    };

    function formatShortDate(dateString: Date | string) {
        const date = new Date(dateString);
        const monthAbbreviation = date.toLocaleString("default", { month: "short" });
        return `${date.getDate()} ${monthAbbreviation}`;
    }
    if (searchMenuIndex === 0) {
        return (
            <MobileNavbarSearchMenuWrapper>
                <MobileNavbarSearchMenuContent>
                    <BackBtn
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      setMobileSearchMenuActivated(false);
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      setMobileSearchMenuActivated(false);
                                  }
                                : undefined
                        }
                        type="Close"
                        mobileLeft={24}
                        mobileTop={24}
                    />
                    <MobileNavbarLocationSearchTitleText>Where to?</MobileNavbarLocationSearchTitleText>
                    <MobileNavbarAutocompleteInputWrapper>
                        <MobileNavbarAutocompleteInput
                            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setInput(e.target.value);
                                setInputFocused(true);
                                if (e.target.value === "") {
                                    setInputFocused(false);
                                }
                            }}
                            onBlur={() => {
                                setInputFocused(false);
                            }}
                            // @ts-expect-error
                            value={input}
                            style={{ color: input ? ColorTheme.Black.color : ColorTheme.Grey1.color, marginLeft: "16px" }}
                            onPlaceSelected={(place: google.maps.places.PlaceResult) => {
                                if (place && place.address_components && place.address_components[0]) {
                                    const input = (place.address_components as google.maps.GeocoderAddressComponent[])[0].types.includes("postal_code")
                                        ? (place.address_components as google.maps.GeocoderAddressComponent[])[1].long_name
                                        : (place.address_components as google.maps.GeocoderAddressComponent[])[0].long_name;
                                    setInput(input);
                                    setTitle(input);
                                }
                                setPlaceId(place.place_id as string);
                                if (place.geometry && place.geometry.location) {
                                    setLat(place.geometry.location.lat());
                                    setLng(place.geometry.location.lng());
                                }
                                setInputFocused(false);
                            }}
                            placeholder={"Search anywhere"}
                            options={{
                                types: ["(regions)"],
                                componentRestrictions: { country: ["au", "nz"] },
                            }}
                        />
                        {input && (
                            <SearchBarClearButton
                                type="button"
                                onTouchEnd={
                                    isTouchDevice
                                        ? () => {
                                              setInput("");
                                              setTitle(null);
                                              setLng(null);
                                              setLat(null);
                                              setPlaceId("ChIJ38WHZwf9KysRUhNblaFnglM");
                                          }
                                        : undefined
                                }
                                onClick={
                                    !isTouchDevice
                                        ? () => {
                                              setInput("");
                                              setTitle(null);
                                              setLng(null);
                                              setLat(null);
                                              setPlaceId("ChIJ38WHZwf9KysRUhNblaFnglM");
                                          }
                                        : undefined
                                }
                            >
                                <SearchBarClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear address" />
                            </SearchBarClearButton>
                        )}
                    </MobileNavbarAutocompleteInputWrapper>

                    {!inputFocused && (
                        <>
                            <MobileSearchPlacePicker setInput={setInput} setSearchMenuIndex={setSearchMenuIndex} setTitle={setTitle} setLat={setLat} setLng={setLng} setPlaceId={setPlaceId} />
                            <MobileNavbarSearchMenuWhenWhereWrapper>
                                <MobileNavbarSearchMenuWhenWhereContent
                                    onTouchEnd={isTouchDevice ? () => setSearchMenuIndex(1) : undefined}
                                    onClick={!isTouchDevice ? () => setSearchMenuIndex(1) : undefined}
                                >
                                    <MobileNavbarSearchMenuWhenWhereTitle>When</MobileNavbarSearchMenuWhenWhereTitle>
                                    <MobileNavbarSearchMenuWhenWhereSubtitle>
                                        {startDate && endDate ? `${formatShortDate(startDate)} - ${formatShortDate(endDate)}` : "Add dates"}
                                    </MobileNavbarSearchMenuWhenWhereSubtitle>
                                </MobileNavbarSearchMenuWhenWhereContent>
                                <MobileNavbarSearchMenuWhenWhereDivider></MobileNavbarSearchMenuWhenWhereDivider>
                                <MobileNavbarSearchMenuWhenWhereContent
                                    onTouchEnd={isTouchDevice ? () => setSearchMenuIndex(2) : undefined}
                                    onClick={!isTouchDevice ? () => setSearchMenuIndex(2) : undefined}
                                >
                                    <MobileNavbarSearchMenuWhenWhereTitle>Who</MobileNavbarSearchMenuWhenWhereTitle>
                                    <MobileNavbarSearchMenuWhenWhereSubtitle>
                                        {guests.adults === 0 && guests.children === 0 ? "Add guests" : `${guests.adults + guests.children} guests`}
                                    </MobileNavbarSearchMenuWhenWhereSubtitle>
                                </MobileNavbarSearchMenuWhenWhereContent>
                            </MobileNavbarSearchMenuWhenWhereWrapper>
                        </>
                    )}

                    <MobileNavbarDateContinueButtonWrapper>
                        <MobileNavbarGuestCancelButton
                            onTouchEnd={
                                isTouchDevice
                                    ? () => {
                                          setMobileSearchMenuActivated(false);
                                      }
                                    : undefined
                            }
                            onClick={
                                !isTouchDevice
                                    ? () => {
                                          setMobileSearchMenuActivated(false);
                                      }
                                    : undefined
                            }
                            type="button"
                        >
                            Cancel
                        </MobileNavbarGuestCancelButton>
                        {/* <MobileNavbarDateSearchButton buttonActive={true} onClick={submitSearch} type="button">
                            <MobileNavbarDateSearchButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/search-white.svg"} alt="Search icon" />
                            <MobileNavbarDateSearchButtonText>Search</MobileNavbarDateSearchButtonText>
                        </MobileNavbarDateSearchButton> */}
                        <ContinueBtn
                            onTouchEnd={isTouchDevice ? submitSearch : undefined}
                            onClick={!isTouchDevice ? submitSearch : undefined}
                            continueType="button"
                            isLoading={false}
                            disabled={false}
                            background="red"
                            style={{ width: "unset", gap: "10px", padding: "0 28px" }}
                        >
                            <MobileNavbarDateSearchButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/search-white.svg"} alt="Search icon" />
                            <MobileNavbarDateSearchButtonText>Search</MobileNavbarDateSearchButtonText>
                        </ContinueBtn>
                    </MobileNavbarDateContinueButtonWrapper>
                </MobileNavbarSearchMenuContent>
            </MobileNavbarSearchMenuWrapper>
        );
    } else if (searchMenuIndex === 1) {
        return (
            <MobileNavbarSearchMenuWrapper>
                <MobileNavbarSearchMenuContent>
                    <BackBtn
                        type="Arrow"
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      setSearchMenuIndex(0);
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      setSearchMenuIndex(0);
                                  }
                                : undefined
                        }
                        mobileLeft={24}
                        mobileTop={24}
                    />
                    <MobileNavbarDateSearchTitleText>Add your dates</MobileNavbarDateSearchTitleText>
                    <MobileNavbarCalendarWrapper>
                        <MobileNavbarSearchMenuCalendar date={date} setStartDate={setStartDate} setEndDate={setEndDate} setDate={setDate} />
                    </MobileNavbarCalendarWrapper>
                    <MobileNavbarDateContinueButtonWrapper>
                        <MobileNavbarDateBackButton
                            onTouchEnd={
                                isTouchDevice
                                    ? () => {
                                          setDate([null]);
                                          setStartDate(null);
                                          setEndDate(null);
                                      }
                                    : undefined
                            }
                            onClick={
                                !isTouchDevice
                                    ? () => {
                                          setDate([null]);
                                          setStartDate(null);
                                          setEndDate(null);
                                      }
                                    : undefined
                            }
                            type="button"
                        >
                            Clear
                        </MobileNavbarDateBackButton>
                        <MobileNavbarDateContinueButton
                            onTouchEnd={
                                isTouchDevice
                                    ? () => {
                                          setSearchMenuIndex(2);
                                      }
                                    : undefined
                            }
                            onClick={
                                !isTouchDevice
                                    ? () => {
                                          setSearchMenuIndex(2);
                                      }
                                    : undefined
                            }
                            type="button"
                        >
                            Continue
                        </MobileNavbarDateContinueButton>
                    </MobileNavbarDateContinueButtonWrapper>
                </MobileNavbarSearchMenuContent>
            </MobileNavbarSearchMenuWrapper>
        );
    } else if (searchMenuIndex === 2) {
        return (
            <MobileNavbarSearchMenuWrapper>
                <MobileNavbarSearchMenuContent>
                    <BackBtn
                        type="Arrow"
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      setSearchMenuIndex(0);
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      setSearchMenuIndex(0);
                                  }
                                : undefined
                        }
                        mobileLeft={24}
                        mobileTop={24}
                    />
                    <MobileNavbarDateSearchTitleText style={{ marginBottom: "0" }}>Add guests</MobileNavbarDateSearchTitleText>
                    <MobileNavbarGuestsWrapper>
                        <MobileNavbarGuestsInput guests={guests} setGuests={setGuests} />
                    </MobileNavbarGuestsWrapper>
                    <MobileNavbarDateContinueButtonWrapper>
                        <MobileNavbarGuestCancelButton
                            onTouchEnd={
                                isTouchDevice
                                    ? () => {
                                          setGuests({
                                              adults: 0,
                                              children: 0,
                                              pets: 0,
                                              infants: 0,
                                          });
                                      }
                                    : undefined
                            }
                            onClick={
                                !isTouchDevice
                                    ? () => {
                                          setGuests({
                                              adults: 0,
                                              children: 0,
                                              pets: 0,
                                              infants: 0,
                                          });
                                      }
                                    : undefined
                            }
                            type="button"
                        >
                            Clear
                        </MobileNavbarGuestCancelButton>
                        <MobileNavbarDateContinueButton
                            onTouchEnd={
                                isTouchDevice
                                    ? () => {
                                          setSearchMenuIndex(0);
                                      }
                                    : undefined
                            }
                            onClick={
                                !isTouchDevice
                                    ? () => {
                                          setSearchMenuIndex(0);
                                      }
                                    : undefined
                            }
                            type="button"
                        >
                            <MobileNavbarDateSearchButtonText>Continue</MobileNavbarDateSearchButtonText>
                        </MobileNavbarDateContinueButton>
                    </MobileNavbarDateContinueButtonWrapper>
                </MobileNavbarSearchMenuContent>
            </MobileNavbarSearchMenuWrapper>
        );
    } else {
        return <></>;
    }
}

export default MobileNavbarSearchMenu;
