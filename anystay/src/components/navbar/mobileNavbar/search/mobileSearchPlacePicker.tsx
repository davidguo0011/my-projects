import {
    MobileNavbarSearchMenuRecommendedCitiesWrapper,
    MobileNavbarSearchMenuRecommendedCity,
    MobileNavbarSearchMenuRecommendedCitiesImg,
    MobileNavbarSearchMenuRecommendedCitiesTextWrapper,
    MobileNavbarSearchMenuRecommendedCitiesTitle,
    MobileNavbarSearchMenuRecommendedCitiesSubtitle,
} from "../mobileNavbarStyling";
const allPlaceData = [
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

interface MobileSearchPlacePickerProps {
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string | null>>;
    setLat: React.Dispatch<React.SetStateAction<number | null>>;
    setLng: React.Dispatch<React.SetStateAction<number | null>>;
    setPlaceId: React.Dispatch<React.SetStateAction<string>>;
    setSearchMenuIndex: React.Dispatch<React.SetStateAction<number>>;
    // setIsClickIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileSearchPlacePicker({ setInput, setTitle, setLat, setLng, setPlaceId, setSearchMenuIndex }: MobileSearchPlacePickerProps) {
    return (
        <MobileNavbarSearchMenuRecommendedCitiesWrapper>
            {allPlaceData.map((item) => {
                return (
                    <MobileNavbarSearchMenuRecommendedCity
                        key={item.name}
                        onClick={() => {
                            setPlaceId(item.data.place_id);
                            setTitle(item.name);
                            setLat(item.data.geometry.lat);
                            setLng(item.data.geometry.lng);
                            setInput(item.name);
                            setSearchMenuIndex(1);
                            // setIsClickIcon(true);
                        }}
                    >
                        <MobileNavbarSearchMenuRecommendedCitiesImg src={item.url} alt="City image" />
                        <MobileNavbarSearchMenuRecommendedCitiesTextWrapper>
                            <MobileNavbarSearchMenuRecommendedCitiesTitle>{item.name}</MobileNavbarSearchMenuRecommendedCitiesTitle>
                            <MobileNavbarSearchMenuRecommendedCitiesSubtitle>{item.data.address_components[1].short_name}</MobileNavbarSearchMenuRecommendedCitiesSubtitle>
                        </MobileNavbarSearchMenuRecommendedCitiesTextWrapper>
                    </MobileNavbarSearchMenuRecommendedCity>
                );
            })}
        </MobileNavbarSearchMenuRecommendedCitiesWrapper>
    );
}
