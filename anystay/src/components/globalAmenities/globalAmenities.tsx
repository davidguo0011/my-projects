import {
    AmenitiesCheckboxInput,
    AmenitiesCheckboxInputImage,
    AmenitiesCheckboxInputLabel,
    AmenitiesCheckboxInputTitle,
    AmenitiesSubtitle,
    AmenitiesTitle,
    AmenitiesWrapper,
    AmenityCategoryWrapper,
} from "./globalAmenitiesStyling";
import { ColorTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface AddAmenitiesProps {
    amenities: string[];
    addAmenitie: (option: string) => void;
    removeAmenitie: (option: string) => void;
    amenitiesTitle?: string;
}

/* 
Note: Certain amenities are currently commented out due to the absence of corresponding icons in the S3 bucket.
Should icons be created or sourced in the future, they can be uploaded to S3, and the 'src' URLs
should be updated accordingly to reflect the newly available resources.
*/

const categoriesData = {
    suggestedAmenities: [
        { name: "Wifi", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wifi.svg" },
        { name: "Aircon", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Aircon.svg" },
        { name: "Pool", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool.svg" },
        { name: "TV", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Television.svg" },
        { name: "Kitchen", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Kitchen.svg" },
        { name: "Toiletries", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toiletries.svg" },
        { name: "Towels", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Towels.svg" },
        { name: "Bedding", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bedding.svg" },
    ],
    /* 
    Note: Currently, all types of parking (Free parking, Paid parking, Street parking, Valet parking)
    are using the same icon (Parking.svg). This may be subject to change in the future, where distinct 
    icons can be assigned to each type to provide clearer differentiation.
    */
    parking: [
        { name: "Free parking", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg" },
        { name: "Paid parking", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg" },
        { name: "Street parking", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg" },
        { name: "Valet parking", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg" },
    ],
    indoors: [
        { name: "Washer", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Washer.svg" },
        { name: "Dryer", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dryer.svg" },
        { name: "Desk", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Desk.svg" },
        // { name: "Workspace", src: "" },
        { name: "Cutlery", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cutlery.svg" },
        { name: "Pots and pans", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/pots+and+pans.svg" },
        { name: "Dishwasher", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dishwasher.svg" },
        { name: "Heating", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Heating.svg" },
        { name: "Iron", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Iron.svg" },
        { name: "Hair dryer", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hair+dryer.svg" },
        { name: "Spa", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Spa.svg" },
        { name: "Safe", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Safe.svg" },
        { name: "BBQ", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ.svg" },
        { name: "Gym", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Gym.svg" },
        { name: "Lift", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Lift.svg" },
        { name: "Kettle", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Kettle.svg" },
        { name: "Microwave", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Microwave.svg" },
        { name: "Tea and coffee", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Tea+and+coffee.svg" },
        { name: "Bathtub", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bathtub.svg" },
        { name: "Fridge", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fridge.svg" },
        { name: "Vacuum", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Vacuum.svg" },
        { name: "High chair", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/High+chair.svg" },
        // { name: "Crib", src: "" },
        { name: "Alarm", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm.svg" },
        { name: "Oven", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Oven.svg" },
        { name: "Ice maker", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ice+maker.svg" },
        // { name: "Blender", src: "" },
        { name: "EV charger", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/EV+charger.svg" },
        { name: "Fireplace", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fireplace.svg" },
        // { name: "Phone", src: "" },
        { name: "Video games", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Video+games.svg" },
        { name: "Books", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Books.svg" },
        { name: "Pool table", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool+table.svg" },
        // { name: "Board games", src: "" },
        { name: "Printer", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Printer.svg" },
        { name: "Hot tub", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hot+tub.svg" },
        // { name: "Sauna", src: "" },
        { name: "Pizza oven", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pizza+oven.svg" },
        { name: "Chef's kitchen", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Chef's+kitchen.svg" },
        { name: "Cinema", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cinema.svg" },
        // { name: "Fan", src: "" },
        { name: "Speakers", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Speakers.svg" },
        // { name: "Breakfast", src: "" },
        // { name: "Essentials", src: "" },
        { name: "Cleaning products", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cleaning+products.svg" },
        // { name: "Shower", src: "" },
        { name: "Outdoor shower", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Outdoor+shower.svg" },
        { name: "Hangers", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hangers.svg" },
        { name: "Toys", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toys.svg" },
        { name: "Stove", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Stove.svg" },
        { name: "Bicycle", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bicycle.svg" },
        { name: "Soap", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Soap.svg" },
        { name: "Shampoo", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Shampoo.svg" },
        { name: "Conditioner", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Conditioner.svg" },
        { name: "Piano", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Piano.svg" },
        { name: "High speed internet", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/High+speed+internet.svg" },
        { name: "Room service", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Room+service.svg" },
        { name: "Reception desk", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Reception+desk.svg" },
        { name: "Toaster", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toaster.svg" },
        { name: "Luggage storage", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Luggage+storage.svg" },
        { name: "Bar", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bar.svg" },
        // { name: "Restaurant", src: "" },
        { name: "Beach essentials", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Beach+essentials.svg" },
        { name: "Balcony", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Balcony.svg" },
        // { name: "Closet", src: "" },
        { name: "Cooking basics", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cooking+basics.svg" },
        // { name: "Doorman", src: "" },
        // { name: "Drying rack", src: "" },
        // { name: "Extra pillows", src: "" },
        // { name: "Garage", src: "" },
        // { name: "Garden", src: "" },
        { name: "Backyard", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Backyard.svg" },
        // { name: "Hot water", src: "" },
        // { name: "Laundromat", src: "" },
        { name: "Linen", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Linen.svg" },
        { name: "Mosquito net", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Mosquito+net.svg" },
        // { name: "Private entrance", src: "" },
        // { name: "Electric bed", src: "" },
        // { name: "Curtains", src: "" },
        // { name: "TV options", src: "" },
        { name: "Wood stove", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wood+stove.svg" },
        // { name: "Jacuzzi", src: "" },
        // { name: "Car", src: "" },
        { name: "Dry cleaning", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dry+cleaning.svg" },
    ],

    kitchenDining: [
        { name: "BBQ utensils", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ+utensils.svg" },
        { name: "Bread maker", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bread+maker.svg" },
        // { name: "Freezer", src: "" },
        { name: "Mini fridge", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Mini+fridge.svg" },
        // { name: "Outdoor kitchen", src: "" },
        { name: "Rice maker", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Rice+maker.svg" },
        { name: "Spices", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Spices.svg" },
        { name: "Trash compactor", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Trash+compactor.svg" },
        { name: "Thermomix", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Thermomix.svg" },
    ],
    bathroom: [
        { name: "Bidet", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bidet.svg" },
        // { name: "Body wash", src: "" },
        { name: "Rain shower", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Rain+shower.svg" },
    ],
    family: [
        { name: "Baby bath", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+bath.svg" },
        { name: "Baby monitor", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+monitor.svg" },
        { name: "Babysitting", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Babysitting.svg" },
        { name: "Children's books", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Children's+books.svg" },
        // { name: "Changing table", src: "" },
        // { name: "Playground", src: "" },
        { name: "Child friendly utensils", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Child+friendly+utensils.svg" },
    ],
    entertainment: [
        { name: "Ping pong", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ping+pong.svg" },
        { name: "Record player", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Record+player.svg" },
        { name: "Netflix", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Netflix.svg" },
        { name: "Foxtel", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Foxtel.svg" },
        // { name: "Stan", src: "" },
        { name: "Playstation", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Playstation.svg" },
        { name: "Xbox", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Xbox.svg" },
        { name: "Prime", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Prime.svg" },
        { name: "Disney plus", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Disney+plus.svg" },
        { name: "HBO", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/HBO.svg" },
        { name: "Apple TV", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Apple+TV.svg" },
        { name: "Nintendo switch", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Nintendo+switch.svg" },
        { name: "Arcade", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Arcade.svg" },
    ],
    outdoors: [
        { name: "Boat", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Boat.svg" },
        { name: "Tennis court", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Tennis+court.svg" },
        { name: "Fire pit", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+pit.svg" },
        { name: "Golf", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Golf.svg" },
    ],
    safety: [
        { name: "Safety gate", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Safety+gate.svg" },
        { name: "Carbon monoxide detector", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Carbon+monoxide+detector.svg" },
        { name: "Deadbolt", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Deadbolt.svg" },
        { name: "Keycard access", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Keycard+access.svg" },
        { name: "Fire extinguisher", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+extinguisher.svg" },
        { name: "First aid kit", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/First+aid+kit.svg" },
        { name: "Outlet covers", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Outlet+covers.svg" },
        { name: "Alarm system", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm+system.svg" },
        { name: "Smoke detector", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Smoke+detector.svg" },
    ],
    accessibility: [
        // { name: "Accessible bed", src: "" },
        // { name: "Accessible toilet", src: "" },
        // { name: "Accessible bathroom", src: "" },
        // { name: "Accessible bedroom", src: "" },
        { name: "Ceiling hoist", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ceiling+hoist.svg" },
        { name: "Wide doorways", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wide+doorways.svg" },
        // { name: "Disabled parking", src: "" },
        // { name: "Grab rails in bathroom", src: "" },
        // { name: "Step free access", src: "" },
        // { name: "Mobile hoist", src: "" },
        // { name: "Shower chair", src: "" },
        { name: "Wheelchair access", src: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wheelchair+access.svg" },
    ],
};

const categoryTitles: { [key: string]: string } = {
    suggestedAmenities: "Suggested amenities",
    parking: "Parking",
    indoors: "Indoors",
    kitchenDining: "Kitchen & dining",
    bathroom: "Bathroom",
    entertainment: "Entertainment",
    safety: "Safety",
    family: "Family",
    outdoors: "Outdoors",
    accessibility: "Accessibility",
};

export default function GlobalAmenities({ amenities, addAmenitie, removeAmenitie, amenitiesTitle }: AddAmenitiesProps) {
    return (
        <AmenitiesWrapper>
            <AmenitiesTitle>{amenitiesTitle ? amenitiesTitle : "Amenities"}</AmenitiesTitle>

            {Object.entries(categoriesData).map(([categoryKey, categoryOptions]) => (
                <div key={categoryKey}>
                    <AmenitiesSubtitle>{categoryTitles[categoryKey]}</AmenitiesSubtitle>
                    <AmenityCategoryWrapper>
                        {categoryOptions.map((option) => (
                            <AmenitiesCheckboxInputLabel
                                key={option.name}
                                style={
                                    amenities.includes(option.name)
                                        ? { border: `1px solid ${ColorTheme.Blue.color}`, outline: `1px solid ${ColorTheme.Blue.color}` }
                                        : { border: `1px solid ${ColorTheme.Grey1.color}` }
                                }
                            >
                                <AmenitiesCheckboxInput
                                    type="checkbox"
                                    checked={amenities.includes(option.name)}
                                    onChange={() => {
                                        if (!amenities.includes(option.name)) {
                                            addAmenitie(option.name);
                                        } else {
                                            removeAmenitie(option.name);
                                        }
                                    }}
                                />
                                <AmenitiesCheckboxInputImage src={option.src} />
                                <AmenitiesCheckboxInputTitle>{option.name}</AmenitiesCheckboxInputTitle>
                            </AmenitiesCheckboxInputLabel>
                        ))}
                    </AmenityCategoryWrapper>
                </div>
            ))}
        </AmenitiesWrapper>
    );
}
