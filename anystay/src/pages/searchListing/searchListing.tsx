import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { callApi } from "../../utils/api/api";

// Import styling
import {
    SearchListingContainer,
    SearchListingResultsContainer,
    SearchListingResultCardsWrapper,
    SearchListingResultsContainerTitleWrapper,
    SearchListingMapWrapper,
    PaginationWrapper,
    PaginationTitle,
    SearchListingResultsContainerDesktopTitleIcon,
    SearchListingMapExitButton,
    NoResultWrapper,
    NoResultTitle,
    NoResultSubTitle,
    SearchListingResultsContainerMobileTitleLoading,
    SearchListingResultsContainerMobileTitle,
    SearchListingResultsContainerMobileTitleTab,
    SearchListingResultsSpacerMobile,
} from "./searchListingStyling";
import HelmetTags from "../../components/Helmet/HelmetTags";

// Import components
import Pagination from "@mui/material/Pagination";

// Import custom components
import SearchListingMap from "./map/searchListingMap";
import SkeletonLoadingDummyCard from "../../components/skeletonLoadingDummyCard/skeletonLoadingDummySearchListingCard/skeletonLoadingDummyCard";
import SearchListingResult from "./SearchListingResult/SearchListingResult";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import CategoryBar from "../../components/categoryBar/categoryBar";
import useScrollDirection from "../../hook/useScrollDirection";
import { searchFiltersSelector } from "../../state/selectors/searchQuery";
import { useRecoilState } from "recoil";
import useHandleMobileSearchResults from "../../hook/useHandleMobileSearchResults";
import { SearchFilters } from "../../interfaces/state/searchQuery";
import { defaultSearchFilter } from "../../utils/defaultSearchQuery/defaultSearchQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { searchQuerySelector } from "../../state/selectors/searchQuery";
import { calculateNumberOfFilterSelected } from "../../components/categoryBar/filterBtn/calculateNumberOfFilterSelected";
import { identityIdSelector } from "../../state/selectors/identityId";
import { userModelSelector } from "../../state/selectors/userModel";
import { loggedInSelector } from "../../state/selectors/loggedIn";
import { SearchListingModel } from "../../interfaces/models/listingModel";
import SearchFilterPopup from "./filterPopups/searchFilters";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";
import WithIconBtn from "../../components/btn/withIconBtn/withIconBtn";
import useIsTouchDevice from "../../hook/useIsTouchDevice";
import { isUserChangePriceSelector } from "../../state/selectors/isUserChangePrice";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});
export interface BoundingBoxInterface {
    bottomLeft: {
        lat: number;
        lon: number;
    };
    topRight: {
        lat: number;
        lon: number;
    };
}

export interface QueryParams {
    location?: string;
    locationId?: string;
    searchFilters?: any;
    arrivalDate?: string;
    departureDate?: string;
    title?: string;
    lat?: string;
    lng?: string;
}
export interface PriceDistributionData {
    priceDistribution: { [key: string]: number };
    min: number | null;
    max: number | null;
    total: number | null;
}

function SearchListing() {
    const [listings, setListings] = useState<{ [key: number]: SearchListingModel[] }>({});

    //get search params
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = {};
        for (let [key, value] of searchParams.entries()) {
            params[key as keyof QueryParams] = value;
        }
        return params;
    }, [location.search]);

    const [searchFiltersRecoil, setSearchFiltersRecoil] = useRecoilState(searchFiltersSelector);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
    const [identityId, setIdentityId] = useRecoilState(identityIdSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);
    const [distribution, setDistribution] = useState<{ [key: string]: number }>({});

    const currentCategory = useRef("");

    useEffect(() => {
        if (queryParams.searchFilters) {
            const searchFilters = JSON.parse(queryParams.searchFilters);
            setSearchFiltersRecoil(searchFilters);
        }
    }, [queryParams.searchFilters, setSearchFiltersRecoil]);

    const [boundingBox, setBoundingBox] = useState<BoundingBoxInterface | null>(null);

    const [mapFullscreen, setMapFullscreen] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [isSearchFilterPopup, setIsSearchFilterPopup] = useState(false);

    //mobile scroll effect state and ref
    const {
        handleContainerTitleTouchStart,
        handleContainerTitleTouchMove,
        handleContainerTitleTouchEnd,
        handleContainerOpenOnClick,
        isSearchResultsContainerClosed,
        searchListingContainerRef,
        searchListingResultsSpacerMobileRef,
        handleContainerTouchStart,
        handleContainerTouchMove,
        handleContainerTouchEnd,
        handleMapClickCloseContainer,
    } = useHandleMobileSearchResults(totalResults);
    const [scrollDirection, isHitBottom] = useScrollDirection(searchListingContainerRef);

    const isTouchDevice = useIsTouchDevice();

    const convertDateFromUrlToDateObj = (dateString: string) => {
        // new Date("2024-05-14T00:00:00.000").toString()
        const parts = dateString.split("-"); // Split the string into parts using the "-" delimiter
        const convertedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000`).toString();
        if (convertedDate === "Invalid Date") {
            return null;
        }
        return convertedDate;
    };

    const fetchListings = useCallback(
        async (
            place_id: string | undefined,
            startDate: string,
            endDate: string,
            searchFilters: SearchFilters,
            page = 1,
            boundingBox: BoundingBoxInterface | null = null,
            isMapRequest: boolean = false
        ) => {
            setLoading(true);
            if (!boundingBox) {
                //if no bounding box given, mean search by location, remove the bounding box
                setBoundingBox(null);
            }
            callApi("post", `${process.env.REACT_APP_ENV}-anystay-search`, "search", {
                body: {
                    placeId: place_id,
                    startDate: startDate ? convertDateFromUrlToDateObj(startDate as string) : "anyArrival",
                    endDate: endDate ? convertDateFromUrlToDateObj(endDate as string) : "anyDeparture",
                    currentDate: new Date().toString(),
                    searchFilters: searchFilters,
                    page: page,
                    size: 30,
                    boundingBox: boundingBox,
                    isMapRequest: isMapRequest,
                    identifier: loggedIn ? userModel?.username : identityId,
                },
            })
                .then((res) => {
                    setTotalResults(res.total);
                    if (page === 1) {
                        //if page === 1, that means search filter has changed, init listing
                        setListings({ [page]: res.listings });
                    } else {
                        //if page !== 1, that means page has changed, cache previously visited page data
                        setListings((prevState) => {
                            return { ...prevState, [page]: res.listings };
                        });
                    }
                    setPageCount(Math.ceil(res.total / 30));
                    setLoading(false);
                    if (res.distribution) {
                        setDistribution(res.distribution);
                    }
                })
                .catch((err) => console.log(err));
        },
        []
    );

    //init and when searchfilter changes
    useEffect(() => {
        //first time fetch use seachfilter from url, others all use recoilstate
        const arrivalDate = queryParams.arrivalDate ? queryParams.arrivalDate : "anyArrival";
        const departureDate = queryParams.departureDate ? queryParams.departureDate : "anyDeparture";
        const placeId = queryParams.locationId ? queryParams.locationId : "ChIJ38WHZwf9KysRUhNblaFnglM";
        const defaultSearchFilterCopy = JSON.parse(JSON.stringify(defaultSearchFilter));
        defaultSearchFilterCopy.priceRange = { min: 0, max: 0 };
        fetchListings(placeId, arrivalDate, departureDate, queryParams.searchFilters ? JSON.parse(queryParams.searchFilters) : defaultSearchFilterCopy);
        currentCategory.current = searchFiltersRecoil.category;
    }, [fetchListings, queryParams.arrivalDate, queryParams.departureDate, queryParams.locationId, queryParams.searchFilters]);

    const hideNavbar = () => {
        if (isSearchResultsContainerClosed) {
            return true;
        } else if (scrollDirection === "down" && !isHitBottom) {
            return true;
        }
    };

    const clickedListingFromSearch = (listingId: string) => {
        analytics.track("ClickedListingFromSearch", {
            userId: loggedIn ? userModel?.id : identityId,
            listingId: listingId,
        });
    };

    const clickedListingFromMap = (listingId: string) => {
        analytics.track("ClickedListingFromMap", {
            userId: loggedIn ? userModel?.id : identityId,
            listingId: listingId,
        });
    };

    const clickedNextPageFromSearch = (pageNum: number) => {
        analytics.track("ClickedListingFromMap", {
            userId: loggedIn ? userModel?.id : identityId,
            pageNum: pageNum,
            searchQuery: searchQuery,
        });
    };

    const updateSearchBySearchFilters = (searchFilters: SearchFilters) => {
        const placeTitle = searchQuery.title ? searchQuery.title : "Australia";
        const arrivalDate = searchQuery.startDate
            ? `${String((searchQuery.startDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.startDate as Date).getFullYear()}`
            : null;
        const departureDate = searchQuery.endDate
            ? `${String((searchQuery.endDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.endDate as Date).getFullYear()}`
            : null;
        const locationString = placeTitle !== "Australia" ? `location=${placeTitle}` : "";
        const locationIdString = searchQuery.placeId !== "ChIJ38WHZwf9KysRUhNblaFnglM" ? `locationId=${searchQuery.placeId}` : "";
        const arrivalDateString = arrivalDate ? `arrivalDate=${arrivalDate}` : "";
        const departureDateString = departureDate ? `departureDate=${departureDate}` : "";
        const lat = searchQuery.lat ? `lat=${searchQuery.lat}` : "";
        const lng = searchQuery.lng ? `lng=${searchQuery.lng}` : "";
        //if filter is not the default
        const searchFiltersString =
            calculateNumberOfFilterSelected(searchFilters, isUserChangePrice) > 0 ||
            searchQuery.searchFilters.adults ||
            searchQuery.searchFilters.children ||
            searchQuery.searchFilters.infants ||
            searchQuery.searchFilters.pets
                ? `searchFilters=${JSON.stringify(searchFilters)}`
                : "";
        const searchParamsStrings = [locationString, locationIdString, arrivalDateString, departureDateString, lat, lng, searchFiltersString].filter((param) => param !== "").join("&");
        navigate(`/search${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
    };
    const filterBtnPosition = () => {
        if (isSearchResultsContainerClosed) {
            return `${24 + 76}px`;
        } else {
            return isHitBottom ? `${24 + 146}px` : hideNavbar() ? "24px" : `${24 + 65}px`;
        }
    };
    const updateSearchQuery = () => {
        const params = new URLSearchParams(window.location.search);
        const updatedSearchQuery = { ...searchQuery };
        const parseLocationString = (location: string) => {
            const newLocations = location.split("-");
            return newLocations.map((newLocation) => newLocation.charAt(0).toUpperCase() + newLocation.slice(1).toLowerCase()).join(" ");
        };
        const parseDateString = (dateString: string): Date => {
            const [day, month, year] = dateString.split("-").map(Number);
            return new Date(year, month - 1, day);
        };

        if (!updatedSearchQuery.lat && params.has("lat")) {
            updatedSearchQuery.lat = parseFloat(params.get("lat")!);
        }
        if (!updatedSearchQuery.lng && params.has("lng")) {
            updatedSearchQuery.lng = parseFloat(params.get("lng")!);
        }
        if (!updatedSearchQuery.title && params.has("location")) {
            updatedSearchQuery.title = parseLocationString(params.get("location")!);
        }
        if (!updatedSearchQuery.startDate && params.has("arrivalDate")) {
            updatedSearchQuery.startDate = parseDateString(params.get("arrivalDate")!);
        }
        if (!updatedSearchQuery.endDate && params.has("departureDate")) {
            updatedSearchQuery.endDate = parseDateString(params.get("departureDate")!);
        }
        if (!updatedSearchQuery.placeId && params.has("placeId")) {
            updatedSearchQuery.placeId = params.get("placeId")!;
        }
        if (params.has("searchFilters")) {
            try {
                const filters = JSON.parse(params.get("searchFilters")!);

                const validFilters: SearchFilters = {
                    category: filters.category || "",
                    typeOfPlace: filters.typeOfPlace || [],
                    propertyType: filters.propertyType || [],
                    optionsForYourStay: filters.optionsForYourStay || [],
                    priceRange: filters.priceRange || { min: 0, max: 10000 },
                    guests: filters.guests || 0,
                    adults: filters.adults || 0,
                    children: filters.children || 0,
                    infants: filters.infants || 0,
                    pets: filters.pets || 0,
                    bedrooms: filters.bedrooms || 0,
                    beds: filters.beds || 0,
                    bathrooms: filters.bathrooms || 0,
                    amenities: filters.amenities || [],
                    services: filters.services || [],
                    houseRules: filters.houseRules || [],
                };
                updatedSearchQuery.searchFilters = validFilters;
            } catch (error) {
                console.error("Failed to parse searchFilters:", error);
            }
        }

        return updatedSearchQuery;
    };

    useEffect(() => {
        setSearchQuery(updateSearchQuery());
    }, []);

    const maxPrice = useCallback(() => {
        if (listings && listings[1] && listings[1].length > 0) {
            const priceListing = listings[1].map((listing: SearchListingModel) => listing.minimumPrice / 100);
            return Math.max(...priceListing);
        } else {
            return 1000;
        }
    }, [listings]);

    useEffect(() => {
        maxPrice();
    }, [maxPrice]);

    const handleInteraction = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>): void => {
        event.stopPropagation();
        setIsSearchFilterPopup(true);
    };

    return (
        <>
            <HelmetTags title={`Anystay | Stays in ${queryParams.location ? queryParams.location : "Australia"}`} />
            <CategoryBar
                updateFilter={(filter) => {
                    const placeTitle = searchQuery.title ? searchQuery.title : "Australia";
                    const arrivalDate = searchQuery.startDate
                        ? `${String((searchQuery.startDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.startDate as Date).getFullYear()}`
                        : null;
                    const departureDate = searchQuery.endDate
                        ? `${String((searchQuery.endDate as Date).getDate()).padStart(2, "0")}-${String((searchQuery.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(searchQuery.endDate as Date).getFullYear()}`
                        : null;
                    const locationString = placeTitle !== "Australia" ? `location=${placeTitle}` : "";
                    const locationIdString = searchQuery.placeId !== "ChIJ38WHZwf9KysRUhNblaFnglM" ? `locationId=${searchQuery.placeId}` : "";
                    const arrivalDateString = arrivalDate ? `arrivalDate=${arrivalDate}` : "";
                    const departureDateString = departureDate ? `departureDate=${departureDate}` : "";
                    const lat = searchQuery.lat ? `lat=${searchQuery.lat}` : "";
                    const lng = searchQuery.lng ? `lng=${searchQuery.lng}` : "";
                    //if filter is not the default
                    const filterCopy = JSON.parse(JSON.stringify(filter));
                    if (currentCategory.current !== filter.category) {
                        filterCopy.priceRange = { min: 0, max: 0 };
                        currentCategory.current = filterCopy.category;
                    }

                    const searchFiltersString =
                        calculateNumberOfFilterSelected(filterCopy, isUserChangePrice) > 0 ||
                        filterCopy.adults ||
                        filterCopy.children ||
                        filterCopy.infants ||
                        filterCopy.pets ||
                        filterCopy.category !== searchFiltersRecoil.category
                            ? `searchFilters=${JSON.stringify(filterCopy)}`
                            : "";
                    const searchParamsStrings = [locationString, locationIdString, arrivalDateString, departureDateString, lat, lng, searchFiltersString].filter((param) => param !== "").join("&");
                    setSearchFiltersRecoil(filter);
                    navigate(`/search${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
                }}
                distribution={distribution}
                isTouchDevice={isTouchDevice}
                searchListingContainerRef={searchListingContainerRef}
                setPage={setPage}
            />
            <MobileNavbar hide={hideNavbar()} isTouchDevice={isTouchDevice} />
            {location.pathname.includes("/search") && window.innerWidth < 768 && !isSearchFilterPopup && (
                <WithIconBtn
                    isTouchDevice={isTouchDevice}
                    onClick={handleInteraction}
                    onTouchEnd={handleInteraction}
                    position="fixed"
                    bottom={filterBtnPosition()}
                    left="50%"
                    center
                    iconSrc="https://d292awxalydr86.cloudfront.net/Universal+icons/filter.svg"
                    svgColorInvert
                >
                    Filters
                </WithIconBtn>
            )}
            {/* searchFilter for mobile */}
            {isSearchFilterPopup && (
                <SearchFilterPopup
                    togglePopup={() => setIsSearchFilterPopup((prev) => !prev)}
                    updateSearchBySearchFilters={updateSearchBySearchFilters}
                    distribution={distribution}
                    setPage={setPage}
                />
            )}

            <SearchListingContainer
                ref={searchListingContainerRef}
                onTouchStart={(e) => handleContainerTouchStart(e)}
                onTouchMove={(e) => {
                    if (searchListingResultsSpacerMobileRef.current && searchListingResultsSpacerMobileRef.current?.getBoundingClientRect().y === 0 && !isSearchResultsContainerClosed) {
                        handleContainerTouchMove(e);
                    }
                }}
                onTouchEnd={(e) => handleContainerTouchEnd(e)}
                onTouchCancel={(e) => handleContainerTouchEnd(e)}
            >
                <SearchListingResultsSpacerMobile ref={searchListingResultsSpacerMobileRef} />
                <SearchListingResultsContainer id="SearchListingResultsContainer">
                    <SearchListingResultsContainerMobileTitleTab />
                    {
                        <SearchListingResultsContainerTitleWrapper
                            onTouchStart={(e) => handleContainerTitleTouchStart(e)}
                            onTouchMove={(e) => handleContainerTitleTouchMove(e)}
                            onTouchEnd={(e) => handleContainerTitleTouchEnd(e)}
                            onTouchCancel={(e) => handleContainerTitleTouchEnd(e)}
                            onClick={(e) => handleContainerOpenOnClick(e)}
                        >
                            {loading || totalResults === null ? (
                                <SearchListingResultsContainerMobileTitleLoading />
                            ) : (
                                <SearchListingResultsContainerMobileTitle>
                                    {totalResults > 1000 ? "1000+" : totalResults} stays in {queryParams.location ? queryParams.location : "Australia"}
                                </SearchListingResultsContainerMobileTitle>
                            )}
                        </SearchListingResultsContainerTitleWrapper>
                    }
                    <SearchListingResultCardsWrapper noResults={!loading && listings[page] && listings[page].length === 0}>
                        {RenderSearchListingResultCards(listings[page], loading, clickedListingFromSearch)}
                    </SearchListingResultCardsWrapper>

                    {pageCount > 1 && (
                        <PaginationWrapper>
                            <Pagination
                                page={page}
                                onChange={(event, value) => {
                                    if (!listings[value]) {
                                        const arrivalDate = queryParams.arrivalDate ? queryParams.arrivalDate : "anyArrival";
                                        const departureDate = queryParams.departureDate ? queryParams.departureDate : "anyDeparture";
                                        const placeId = queryParams.locationId ? queryParams.locationId : "ChIJ38WHZwf9KysRUhNblaFnglM";
                                        fetchListings(placeId, arrivalDate, departureDate, searchFiltersRecoil, value, boundingBox);
                                    }
                                    searchListingContainerRef.current?.scrollTo(0, 0);
                                    setPage(value);
                                    clickedNextPageFromSearch(value);
                                }}
                                count={pageCount}
                                size="small"
                            />
                            <PaginationTitle>
                                Showing {page} of {pageCount} pages
                            </PaginationTitle>
                        </PaginationWrapper>
                    )}
                </SearchListingResultsContainer>
                <SearchListingMapWrapper {...(window.innerWidth < 768 ? { onClick: () => handleMapClickCloseContainer() } : {})}>
                    {mapFullscreen && (
                        <SearchListingMapExitButton type="button" onClick={() => setMapFullscreen(!mapFullscreen)}>
                            <SearchListingResultsContainerDesktopTitleIcon
                                style={{ transform: "rotate(180deg)" }}
                                src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                alt="Arrow icon"
                            />
                        </SearchListingMapExitButton>
                    )}
                    <SearchListingMap
                        clickedListingFromMap={clickedListingFromMap}
                        listings={listings[page]}
                        setBoundingBox={setBoundingBox}
                        fetchListings={fetchListings}
                        isSearchResultsContainerClosed={isSearchResultsContainerClosed}
                    />
                </SearchListingMapWrapper>
            </SearchListingContainer>
        </>
    );
}

function RenderNoResultPlaceHolder() {
    return (
        <NoResultWrapper>
            <NoResultTitle>No results</NoResultTitle>
            <NoResultSubTitle>Try changing your dates or search nearby areas</NoResultSubTitle>
        </NoResultWrapper>
    );
}

function RenderSearchListingResultCards(listings: SearchListingModel[], loading: boolean, clickedListingFromSearch: any) {
    let skeletons = [...Array(30).keys()].map((x) => x + 1);
    if (loading) {
        return skeletons.map((skeleton) => {
            return <SkeletonLoadingDummyCard key={skeleton} />;
        });
    }
    return (
        <>
            {listings && listings.length > 0 ? (
                listings.slice(0).map((listing, index) => {
                    return <SearchListingResult clickedListingFromSearch={clickedListingFromSearch} listing={listing} key={listing.id} delay={index * 0.12} />;
                })
            ) : (
                <RenderNoResultPlaceHolder />
            )}
        </>
    );
}

export default SearchListing;
