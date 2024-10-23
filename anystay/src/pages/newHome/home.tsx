import { useEffect, useCallback, useState, useRef } from "react";
import { HomeWrapper } from "./homeStyling";
import { useRecoilState } from "recoil";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import Footer from "../../components/footer/footer";
import HomeFeed from "./HomeFeed/HomeFeed";
import MobileHomeFeed from "./HomeFeed/MobileHomeFeed";
// import HomeHeader from "./HomeHeader/HomeHeader";
import CategoryBar from "../../components/categoryBar/categoryBar";
import { callApi } from "../../utils/api/api";
import { searchFiltersSelector, searchQuerySelector } from "../../state/selectors/searchQuery";
import { defaultSearchQuery } from "../../utils/defaultSearchQuery/defaultSearchQuery";
import NoResultPlaceHolder from "./NoResultPlaceHolder/NoResultPlaceHolder";
import LoadingSpinnerPlaceHolder from "./LoadingSpinnerPlaceHolder/LoadingSpinnerPlaceHolder";
import HelmetTags from "../../components/Helmet/HelmetTags";
import useScrollDirection from "../../hook/useScrollDirection";
import SupportBtn from "../../components/btn/supportBtn/supportBtn";

import { SearchFilters } from "../../interfaces/state/searchQuery";
import { identityIdSelector } from "../../state/selectors/identityId";
import { userModelSelector } from "../../state/selectors/userModel";
import { loggedInSelector } from "../../state/selectors/loggedIn";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";
import ContinueBtn from "../../components/btn/continueBtn/continueBtn";
import { SearchListingModel } from "../../interfaces/models/listingModel";
import { jsonLd } from "./seo/jsonLd";
import { useLocation } from "react-router-dom";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});
interface ListingsObjType {
    [key: string]: SearchListingModel[];
}

const Home: React.FC = () => {
    const [listings, setListings] = useState<ListingsObjType | null>(null);
    const [loading, setLoading] = useState(false);
    const [scrollDirection, isHitBottom] = useScrollDirection(window);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [identityId, setIdentityId] = useRecoilState(identityIdSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInSelector);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
    const [cache, setCache] = useState(false);
    const numberOfPage = useRef<{ [key: string]: number }>({});
    const currentNumberOfPage = useRef<{ [key: string]: number }>({});
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const location = useLocation();
    const [distribution, setDistribution] = useState<{ [key: string]: number }>({});
    const [isClickHome, setIsClickHome] = useState(false);
    //back to default searchquery when home page mounts
    useEffect(() => {
        setSearchQuery(defaultSearchQuery);
    }, [setSearchQuery]);

    const fetchListings = useCallback(async (placeId: string, page: number, searchFilters: SearchFilters, categoryChange: boolean) => {
        setCache(false);
        if (categoryChange) {
            setSearchFilters({
                ...searchFilters,
                priceRange: { min: 0, max: 0 },
            });
        }
        const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-search`, "search", {
            body: {
                placeId: placeId,
                startDate: "anyArrival",
                endDate: "anyDeparture",
                currentDate: new Date().toString(),
                searchFilters: searchFilters,
                page: page,
                size: 30,
                isMapRequest: false,
                identifier: loggedIn ? userModel?.username : identityId,
            },
        });
        if (res && res.success) {
            setIsContinueBtnLoading(false);

            //record the number of page for each category
            if (categoryChange) {
                numberOfPage.current[searchFilters.category] = Math.ceil(res.total / 30);
                setListings((prev) => {
                    return {
                        ...prev,
                        [searchFilters.category]: res.listings,
                    };
                });
            } else if (page !== 1) {
                setListings((prev) => {
                    if (!prev) return { [searchFilters.category]: res.listings };
                    return {
                        ...prev,
                        [searchFilters.category]: [...prev[searchFilters.category], ...res.listings],
                    };
                });
            } else {
                //back to default
                numberOfPage.current = { all: Math.ceil(res.total / 30) };
                setListings({ ["all"]: res.listings });
            }
            setLoading(false);
            if (res.distribution) {
                setDistribution(res.distribution);
                return res.distribution;
            }
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        currentNumberOfPage.current["all"] = 1;
        const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
        searchFiltersCopy.priceRange = { min: 0, max: 0 };
        //init
        fetchListings("ChIJ38WHZwf9KysRUhNblaFnglM", 1, searchFiltersCopy, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchListings]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const clickedListingEvent = (listingId: string) => {
        analytics.track("ClickedListingFromHomepage", {
            userId: loggedIn ? userModel?.id : identityId,
            listingId: listingId,
        });
    };

    const renderContent = () => {
        if (loading) {
            return <LoadingSpinnerPlaceHolder />;
        }
        if (listings === null || (listings[searchFilters.category] && listings[searchFilters.category].length === 0)) return <NoResultPlaceHolder />;
        return (
            <>
                <MobileHomeFeed listings={listings[searchFilters.category]} cache={cache} clickedListingEvent={clickedListingEvent} loggedIn={loggedIn} />
                <HomeFeed listings={listings[searchFilters.category]} cache={cache} clickedListingEvent={clickedListingEvent} />
                {currentNumberOfPage.current[searchFilters.category] < numberOfPage.current[searchFilters.category] && (
                    <ContinueBtn
                        background={"black"}
                        style={{ width: "unset", margin: "48px auto" }}
                        disabled={false}
                        isLoading={isContinueBtnLoading}
                        onClick={async () => {
                            setIsContinueBtnLoading(true);
                            currentNumberOfPage.current[searchFilters.category] += 1;
                            await fetchListings("ChIJ38WHZwf9KysRUhNblaFnglM", currentNumberOfPage.current[searchFilters.category], searchFilters, false);
                        }}
                    >
                        Show more
                    </ContinueBtn>
                )}
            </>
        );
    };

    const hideNavbar = () => {
        if (scrollDirection === "down" && !isHitBottom) {
            return true;
        }
        return false;
    };

    const maxPrice = useCallback(() => {
        if (listings && listings.all && listings.all.length > 0) {
            const priceListing = listings.all.map((listing: SearchListingModel) => listing.minimumPrice / 100);
            return Math.max(...priceListing);
        } else {
            return 1000;
        }
    }, [listings]);

    useEffect(() => {
        maxPrice();
    }, [maxPrice]);

    useEffect(() => {
        const fetchAll = async () => {
            if (searchFilters.category === "all" && distribution) {
                const defaultSearchFilters = { ...defaultSearchQuery.searchFilters };
                defaultSearchFilters.category = searchFilters.category;
                const distribution = await fetchListings("ChIJ38WHZwf9KysRUhNblaFnglM", 1, defaultSearchFilters, false);
                if (distribution) {
                    defaultSearchFilters.priceRange = {
                        min: distribution.min,
                        max: distribution.max,
                    };
                    setSearchFilters(defaultSearchFilters);
                }
                setIsClickHome(true);
            } else {
                setIsClickHome(false);
            }
        };

        fetchAll();
    }, [searchFilters.category]);

    return (
        <>
            <HelmetTags jsonLd={jsonLd} />

            {/* <HelmetTags title="Anystay | Short & Long Stays, Holiday Homes, Rooms & More" /> */}
            <HomeWrapper>
                <CategoryBar
                    updateFilter={(searchFilter) => {
                        if (searchFilter.category !== searchFilters.category) {
                            //if category change
                            const defaultSearchFilters = { ...defaultSearchQuery.searchFilters };
                            defaultSearchFilters.category = searchFilter.category;
                            setSearchFilters(defaultSearchFilters);
                            if (listings && listings[searchFilter.category]) {
                                setCache(true);
                                return;
                            }
                            fetchListings("ChIJ38WHZwf9KysRUhNblaFnglM", 1, defaultSearchFilters, true);
                        } else {
                            //if searchfilter change reset all listings
                            fetchListings("ChIJ38WHZwf9KysRUhNblaFnglM", 1, searchFilter, false);
                        }
                    }}
                    distribution={distribution}
                />

                {renderContent()}
            </HomeWrapper>
            <MobileNavbar hide={hideNavbar()} />
            <SupportBtn handleScroll={hideNavbar()} path={location.pathname} />
            <Footer />
        </>
    );
};

export default Home;
