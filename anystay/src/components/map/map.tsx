import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

interface MyComponentProps {
    lat: number;
    lng: number;
    containerStyle: React.CSSProperties;
    zoom: number;
    minZoom: number;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
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

    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    const location = useLocation();

    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isStayPageTabletSize = useMemo(() => {
        return location.pathname.includes("/your-stays") && isTablet;
    }, [location, isTablet]);

    const newMapStyles = [
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#696969",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#696969",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative.neighborhood",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#919191",
                },
            ],
        },
        {
            featureType: "administrative.province",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#696969",
                },
            ],
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#fbf4ed",
                },
            ],
        },
        {
            featureType: "landscape.man_made",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
                {
                    lightness: 10,
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [
                {
                    lightness: 25,
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.attraction",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.attraction",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#c3e7a3",
                },
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#c3e7a3",
                },
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.sports_complex",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#c3e7a3",
                },
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "poi.sports_complex",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#999999",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#d1d1d1",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#737373",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            stylers: [
                {
                    visibility: "on",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "labels.icon",
            stylers: [
                {
                    lightness: 15,
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#737373",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
                {
                    lightness: 35,
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#999999",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [
                {
                    lightness: 30,
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#dbdbdb",
                },
            ],
        },
        {
            featureType: "transit.station.airport",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#f2f2f2",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#a5e0f3",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#6aacc8",
                },
            ],
        },
    ];

    const onLoad = React.useCallback(
        function callback(mapInstance: google.maps.Map) {
            setTimeout(() => {
                const bounds = new window.google.maps.LatLngBounds({ lat: props.lat, lng: props.lng });
                mapInstance.fitBounds(bounds);
                setMap(mapInstance);
            }, 300);
        },
        [props.lat, props.lng]
    );

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);

    return (
        <GoogleMap
            mapContainerStyle={props.containerStyle}
            center={{ lat: isStayPageTabletSize ? props.lat + 0.006 : props.lat, lng: props.lng }}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                fullscreenControl: false,
                disableDefaultUI: true,
                minZoom: props.minZoom,
                zoom: props.zoom,
                styles: newMapStyles,
                gestureHandling: "greedy",
                zoomControl: props.zoomControl ? true : false,
                zoomControlOptions: {
                    position: map && window.google && window.google.maps && google.maps.ControlPosition.RIGHT_TOP,
                },
                scrollwheel: props.scrollWheelZoom,
            }}
        >
            <MarkerF position={{ lat: props.lat, lng: props.lng }} icon={"https://d292awxalydr86.cloudfront.net/Universal+icons/Map_marker.svg"} />
        </GoogleMap>
    );
};

export default React.memo(MyComponent);
