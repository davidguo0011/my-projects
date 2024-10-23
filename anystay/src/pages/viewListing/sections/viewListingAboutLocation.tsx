import { ViewListingAboutLocationWrapper, ViewListingAboutLocationTitle, ViewListingAboutLocationSubtitle, ViewListingMapWrapper } from "../viewListingStyling";
import Map from "../../../components/map/map";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import { ListingInterface } from "../viewListing";

export default function ViewListingAboutLocation({ hasReviews, listing, lat, lng }: { hasReviews: boolean; listing: ListingInterface; lat: number; lng: number }) {
    const isDesktopSize = useIsDesktopSize();
    return (
        <ViewListingAboutLocationWrapper>
            <ViewListingAboutLocationTitle>
                {listing.suburb}, {listing.state}
            </ViewListingAboutLocationTitle>
            <ViewListingMapWrapper>
                <Map
                    containerStyle={{
                        width: "100%",
                        height: "105%",
                        position: "absolute",
                        bottom: -25,
                        borderRadius: "12px",
                    }}
                    lat={lat}
                    lng={lng}
                    zoom={16}
                    minZoom={13}
                    zoomControl={isDesktopSize ? true : false}
                    scrollWheelZoom={false}
                />
            </ViewListingMapWrapper>
            <ViewListingAboutLocationSubtitle>
                {listing.suburb}, {listing.state}, Australia
            </ViewListingAboutLocationSubtitle>
        </ViewListingAboutLocationWrapper>
    );
}
