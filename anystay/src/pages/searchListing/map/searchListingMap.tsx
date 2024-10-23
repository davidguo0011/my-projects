import React, { useState, useEffect, useRef, useMemo } from "react";
import { mapStyles } from "./mapStyles";
import { GoogleMap, OverlayViewF } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { useRecoilState } from "recoil";
import SearchListingMapListingCard from "./components/searchListingMapListingCard";
import SearchListingMapMarkers from "./components/searchListingMapMarkers";
import { BoundingBoxInterface } from "../searchListing";
import { SearchListingModel } from "../../../interfaces/models/listingModel";
import { SearchFilters } from "../../../interfaces/state/searchQuery";
import { QueryParams } from "../searchListing";

interface SearchListingMapProps {
    listings: SearchListingModel[];
    setBoundingBox: React.Dispatch<React.SetStateAction<BoundingBoxInterface | null>>;
    fetchListings: (placeId: string | undefined, arrivalDate: string, departureDate: string, searchFilters: SearchFilters, page: number, boundingBox: any, isMapRequest: boolean) => void;
    isSearchResultsContainerClosed: boolean;
    clickedListingFromMap: any;
}

export default React.memo(function SearchListingMap({ listings, setBoundingBox, fetchListings, isSearchResultsContainerClosed, clickedListingFromMap }: SearchListingMapProps) {
    const [listing, setListing] = useState<SearchListingModel | null>(null);
    const location = useLocation();

    const queryParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = {};
        for (let [key, value] of searchParams.entries()) {
            params[key as keyof QueryParams] = value;
        }
        return params;
    }, [location.search]);

    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);

    // if the listing is not shown in the map, close the popup card
    if (listing && !listings.map((l) => l.id).includes(listing.id)) {
        setListing(null);
    }

    function wheelEvent(event: WheelEvent) {
        // Set the ctrlKey property to true to avoid having to press ctrl to zoom in/out.
        Object.defineProperty(event, "ctrlKey", { value: true });
    }
    useEffect(() => {
        document.addEventListener("wheel", wheelEvent, true);
        return () => {
            document.removeEventListener("wheel", wheelEvent, true);
        };
    }, []);

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [center, setCenter] = useState({ lat: -27.47, lng: 153.021 });
    const [isTouchingCard, setIsTouchingCard] = useState(false);

    const timer = useRef<NodeJS.Timeout | null>(null);
    const mapLoaded = useRef(false);
    const popupCardRef = useRef<HTMLElement>(null);
    const markersRef = useRef<{ el: HTMLElement; listingId: string }[]>([]);

    const debounce = (func: () => void, timeout: number) => {
        clearTimeout(timer.current as NodeJS.Timeout);
        timer.current = setTimeout(() => {
            func();
        }, timeout);
    };

    useEffect(() => {
        const placeId = queryParams.locationId ? queryParams.locationId : "ChIJ38WHZwf9KysRUhNblaFnglM";
        const lat = queryParams.lat ? Number(queryParams.lat) : -27.47;
        const lng = queryParams.lng ? Number(queryParams.lng) : 153.021;
        if (mapLoaded.current && map && placeId) {
            const bounds = new window.google.maps.LatLngBounds({ lat: lat, lng: lng });
            map.fitBounds(bounds);
            map.setZoom(placeId === "ChIJ38WHZwf9KysRUhNblaFnglM" ? 5 : 10);
        }
    }, [map, queryParams.locationId, queryParams.lat, queryParams.lng]);

    const fetchListingOnUserAction = React.useCallback(
        (mapInstance: google.maps.Map, timeout: number) => {
            const bounds = mapInstance.getBounds();
            if (!bounds) return;
            const northEast = { lat: bounds.getNorthEast().lat(), lon: bounds.getNorthEast().lng() };
            const southWest = { lat: bounds.getSouthWest().lat(), lon: bounds.getSouthWest().lng() };
            const boundingBox = { topRight: northEast, bottomLeft: southWest };

            debounce(() => {
                setBoundingBox(boundingBox);
                const placeId = queryParams.locationId ? queryParams.locationId : "ChIJ38WHZwf9KysRUhNblaFnglM";
                const arrivalDate = queryParams.arrivalDate ? queryParams.arrivalDate : "anyArrival";
                const departureDate = queryParams.departureDate ? queryParams.departureDate : "anyDeparture";
                fetchListings(placeId, arrivalDate, departureDate, searchFilters, 1, boundingBox, true);
            }, timeout);
        },
        [fetchListings, queryParams.arrivalDate, queryParams.departureDate, queryParams.locationId, searchFilters, setBoundingBox]
    );
    let searchResultsContainerClosed = window.innerWidth < 768 ? isSearchResultsContainerClosed : "false";
    useEffect(() => {
        if (!searchResultsContainerClosed) {
            setListing(null);
        }
        let dragListener: google.maps.MapsEventListener;
        let zoomListener: google.maps.MapsEventListener;
        let clickListener: google.maps.MapsEventListener;
        if (map) {
            dragListener = map.addListener("drag", function () {
                fetchListingOnUserAction(map, 1000);
            });
            zoomListener = map.addListener("zoom_changed", function () {
                fetchListingOnUserAction(map, 2000);
            });
            clickListener = map.addListener("click", function () {
                setListing(null);
            });
            return () => {
                window.google.maps.event.removeListener(dragListener);
                window.google.maps.event.removeListener(zoomListener);
                window.google.maps.event.removeListener(clickListener);
            };
        }
    }, [fetchListingOnUserAction, map, searchResultsContainerClosed]);

    const onLoad = React.useCallback(
        function callback(mapInstance: google.maps.Map) {
            setTimeout(async () => {
                const bounds = new window.google.maps.LatLngBounds(center);
                mapInstance.fitBounds(bounds);

                const placeId = queryParams.locationId ? queryParams.locationId : "ChIJ38WHZwf9KysRUhNblaFnglM";
                const lat = queryParams.lat ? Number(queryParams.lat) : -27.47;
                const lng = queryParams.lng ? Number(queryParams.lng) : 153.021;

                // if (typeof latFromUrl === "number" && !isNaN(latFromUrl) && typeof lngFromUrl === "number" && !isNaN(lngFromUrl)) {
                //     setCenter({ lat: latFromUrl, lng: lngFromUrl });
                // }
                setCenter({ lat: lat, lng: lng });

                mapInstance.setZoom(placeId === "ChIJ38WHZwf9KysRUhNblaFnglM" ? 5 : 10);
                setMap(mapInstance);

                mapLoaded.current = true;
            }, 1000);
        },

        [center, queryParams.lat, queryParams.lng, queryParams.locationId]
    );

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);

    let clickedMarkerRef = markersRef.current.find((marker) => marker.listingId === listing?.id)?.el;
    const getPixelPositionOffset = (width: number, height: number) => {
        if (clickedMarkerRef) {
            return {
                x: -width / 2 + clickedMarkerRef.offsetWidth / 2,
                y: -height - 12,
            };
        } else {
            return {
                x: -width / 2,
                y: -height - 12,
            };
        }
    };
    return (
        <>
            <GoogleMap
                mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                }}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                zoom={5}
                options={{
                    fullscreenControl: false,
                    disableDefaultUI: true,
                    minZoom: 2,
                    maxZoom: 18,
                    styles: mapStyles,
                    gestureHandling: isTouchingCard ? "none" : "greedy",
                    disableDoubleClickZoom: listing ? true : false,
                    zoomControl: window.innerWidth <= 768 ? false : true,
                    zoomControlOptions: {
                        position: window.google.maps.ControlPosition?.TOP_RIGHT,
                    },
                }}
            >
                <SearchListingMapMarkers setListing={setListing} selectedListing={listing} listings={listings} markersRef={markersRef} map={map} />
                {listing && (
                    <OverlayViewF
                        position={{ lat: (listing.location as { lat: number; lon: number }).lat, lng: (listing.location as { lat: number; lon: number }).lon }}
                        mapPaneName={"floatPane"}
                        getPixelPositionOffset={getPixelPositionOffset}
                    >
                        <SearchListingMapListingCard clickedListingFromMap={clickedListingFromMap} popupCardRef={popupCardRef} listing={listing} setIsTouchingCard={setIsTouchingCard} />
                    </OverlayViewF>
                )}
            </GoogleMap>
        </>
    );
});
