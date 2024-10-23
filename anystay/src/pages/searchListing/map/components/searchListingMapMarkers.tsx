import { OverlayViewF } from "@react-google-maps/api";
import { useEffect } from "react";
import { SearchMapMarker } from "../../searchListingStyling";
import adjustMapListingCardPosition from "../util/adjustMapListingCardPosition";
import { SearchListingModel } from "../../../../interfaces/models/listingModel";

interface SearchListingMapMarkersProps {
    listings: SearchListingModel[];
    selectedListing: SearchListingModel | null;
    setListing: React.Dispatch<React.SetStateAction<SearchListingModel | null>>;
    markersRef: React.MutableRefObject<
        {
            el: HTMLElement;
            listingId: string;
        }[]
    >;
    map: google.maps.Map | null;
}

export default function SearchListingMapMarkers({ listings, selectedListing, setListing, markersRef, map }: SearchListingMapMarkersProps) {
    useEffect(() => {
        if (markersRef.current) {
            for (let marker of markersRef.current) {
                if (marker.el) {
                    window.google.maps.OverlayView.preventMapHitsFrom(marker.el);
                }
            }
        }
    }, [listings]);

    if (!listings || listings.length === 0) {
        return null;
    }

    return (
        <>
            {listings.map((listing, index) => {
                return (
                    <OverlayViewF
                        key={listing.id}
                        position={{ lat: (listing.location as { lat: number; lon: number }).lat, lng: (listing.location as { lat: number; lon: number }).lon }}
                        mapPaneName={"overlayMouseTarget"}
                    >
                        <SearchMapMarker
                            onClick={() => {
                                if (map && (!selectedListing || selectedListing.id !== listing.id)) {
                                    map.panTo(
                                        adjustMapListingCardPosition(
                                            { lat: (listing.location as { lat: number; lon: number }).lat, lng: (listing.location as { lat: number; lon: number }).lon },
                                            map,
                                            markersRef.current[index].el.offsetWidth
                                        ) as google.maps.LatLng
                                    );
                                    setListing(listing);
                                } else {
                                    setListing(null);
                                }
                            }}
                            selected={selectedListing?.id === listing.id}
                            ref={(el) => (markersRef.current[index] = { el: el as HTMLElement, listingId: listing.id })}
                        >
                            {`$${Number(listing.totalPrice / 100).toFixed(0)} AUD`}
                        </SearchMapMarker>
                    </OverlayViewF>
                );
            })}
        </>
    );
}
