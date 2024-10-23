import { DesktopNavbarSearchMenuRecommendedCitiesWrapper, DesktopNavbarSearchMenuRecommendedCitiesTitle, DesktopNavbarSearchMenuRecommendedCity } from "../../navbarStyling";
import useClickOutside from "../../../../../hook/useClickOutside";

const allPlaceData = [
    {
        name: "Sydney",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Sydney.jpg",
        data: {
            address_components: [
                {
                    long_name: "Sydney",
                    short_name: "Sydney",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "New South Wales",
                    short_name: "NSW",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -33.8688, lng: 151.2093 },
            formatted_address: "Sydney NSW, Australia",
            place_id: "ChIJP3Sa8ziYEmsRUKgyFmh9AQM",
        },
    },
    {
        name: "Gold Coast",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Gold+Coast.jpg",
        data: {
            address_components: [
                {
                    long_name: "Gold Coast",
                    short_name: "Gold Coast",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "Queensland",
                    short_name: "QLD",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -28.0167, lng: 153.4 },
            formatted_address: "Gold Coast QLD, Australia",
            place_id: "ChIJt2BdK0cakWsRcK_e81qjAgM",
        },
    },
    {
        name: "Brisbane",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Brisbane.jpg",
        data: {
            address_components: [
                {
                    long_name: "Brisbane",
                    short_name: "Brisbane",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "Queensland",
                    short_name: "QLD",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -27.4698, lng: 153.0251 },
            formatted_address: "Brisbane QLD, Australia",
            place_id: "ChIJM9KTrJpXkWsRQK_e81qjAgQ",
        },
    },
    {
        name: "Melbourne",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Melbourne.jpg",
        data: {
            address_components: [
                {
                    long_name: "Melbourne",
                    short_name: "Melbourne",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "Victoria",
                    short_name: "VIC",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -37.8136, lng: 144.9631 },
            formatted_address: "Melbourne VIC, Australia",
            place_id: "ChIJ90260rVG1moRkM2MIXVWBAQ",
        },
    },
    {
        name: "Noosa",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Noosa.jpg",
        data: {
            address_components: [
                {
                    long_name: "Noosa",
                    short_name: "Noosa",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "Queensland",
                    short_name: "QLD",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -26.398, lng: 153.092 },
            formatted_address: "Noosa QLD, Australia",
            place_id: "ChIJuVx5FXBpk2sRkKze81qjAgU",
        },
    },
    {
        name: "Byron Bay",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/ByronBay.jpg",
        data: {
            address_components: [
                {
                    long_name: "Byron Bay",
                    short_name: "Byron Bay",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "New South Wales",
                    short_name: "NSW",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -28.6474, lng: 153.602 },
            formatted_address: "Byron Bay NSW, Australia",
            place_id: "ChIJK3Y-LYVikGsR0PJDkLQJBgQ",
        },
    },
    {
        name: "Adelaide",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Adelaide.jpg",
        data: {
            address_components: [
                {
                    long_name: "Adelaide",
                    short_name: "Adelaide",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "South Australia",
                    short_name: "SA",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -34.9285, lng: 138.6007 },
            formatted_address: "Adelaide VIC, Australia",
            place_id: "ChIJP7Mmxcc1t2oRQMaOYlQ2AwQ",
        },
    },
    {
        name: "Perth",
        url: "https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Perth.jpg",
        data: {
            address_components: [
                {
                    long_name: "Perth",
                    short_name: "Perth",
                    types: ["colloquial_area", "locality", "political"],
                },
                {
                    long_name: "Western Australia",
                    short_name: "WA",
                    types: ["administrative_area_level_1", "political"],
                },
                {
                    long_name: "Australia",
                    short_name: "AU",
                    types: ["country", "political"],
                },
            ],
            geometry: { lat: -31.9505, lng: 115.8605 },
            formatted_address: "Perth WA, Australia",
            place_id: "ChIJPXNH22yWMioR0FXfNbXwBAM",
        },
    },
];

export interface PlaceDataInterface {
    address_components: {
        long_name: string;
        short_name: string;
        types: string[];
    }[];
    geometry: {
        lat: number;
        lng: number;
    };
    formatted_address: string;
    place_id: string;
}

interface NavbarSearchbarPopDownReccomendedCitiesProps {
    input: string;
    setPlace: (place: PlaceDataInterface) => void;
    setAddAddressPopup: (value: boolean) => void;
}

function NavbarSearchbarPopDownReccomendedCities({ input, setPlace, setAddAddressPopup }: NavbarSearchbarPopDownReccomendedCitiesProps) {
    const wrapperRef = useClickOutside(
        true,
        () => {
            setAddAddressPopup(false);
        },
        true
    );
    return (
        <DesktopNavbarSearchMenuRecommendedCitiesWrapper
            key="recommend city"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            ref={wrapperRef}
        >
            <DesktopNavbarSearchMenuRecommendedCitiesTitle>Suggested places</DesktopNavbarSearchMenuRecommendedCitiesTitle>
            {allPlaceData.map((item) => {
                return (
                    <DesktopNavbarSearchMenuRecommendedCity
                        type="button"
                        url={item.url}
                        onClick={() => {
                            setPlace(item.data);
                        }}
                        key={item.name}
                    >
                        {item.name}
                    </DesktopNavbarSearchMenuRecommendedCity>
                );
            })}
        </DesktopNavbarSearchMenuRecommendedCitiesWrapper>
    );
}

export default NavbarSearchbarPopDownReccomendedCities;
