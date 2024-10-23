import { useState } from "react";
import {
    ViewListingAmenitiesListWrapper,
    ViewListingAmenitiesListTitle,
    ViewListingAmenitiesListContainer,
    ViewListingAmenitiesListItem,
    ViewListingAmenitiesListItemIcon,
    ViewListingAmenitiesListItemText,
    ViewListingAmenitiesMoreButton,
} from "../viewListingStyling";

const amenitiesSrc = {
    Bed: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg",
    Desk: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Desk.svg",
    Washer: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Washer.svg",
    Aircon: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Aircon.svg",
    Heating: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Heating.svg",
    "Pots and pans": "https://d292awxalydr86.cloudfront.net/Amenities+icons/pots+and+pans.svg",
    Wifi: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wifi.svg",
    "Dining table": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dining+table.svg",
    Pool: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool.svg",
    Kitchen: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Kitchen.svg",
    Bedding: "https://d292awxalydr86.cloudfront.net/Amenities+icons/hotel+bed.png",
    Iron: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Iron.svg",
    Safe: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Safe.svg",
    Lift: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Lift.svg",
    Dryer: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dryer.svg",
    Gym: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Gym.svg",
    BBQ: "https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ.svg",
    "Hair Dryer": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hair+dryer.svg",
    Spa: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Spa.svg",
    Office: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Office.svg",
    Towels: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Towels.svg",
    Toiletries: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toiletries.svg",
    Parking: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg",
    Dishwasher: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dishwasher.svg",
    Cutlery: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cutlery.svg",
    TV: "https://d292awxalydr86.cloudfront.net/Amenities+icons/TV.svg",
    "Alarm system": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm+system.svg",
    Alarm: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm.svg",
    "Apple TV": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Apple+TV.svg",
    Arcade: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Arcade.svg",
    "Baby bath": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+bath.svg",
    "Baby monitor": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+monitor.svg",
    Babysitting: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Babysitting.svg",
    Backyard: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Backyard.svg",
    Balcony: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Balcony.svg",
    Bar: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bar.svg",
    Bathtub: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bathtub.svg",
    "BBQ utensils": "https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ+utensils.svg",
    "Beach essentials": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Beach+essentials.svg",
    Bicycle: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bicycle.svg",
    Bidet: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bidet.svg",
    Boat: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Boat.svg",
    Books: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Books.svg",
    "Bread maker": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Bread+maker.svg",
    "Carbon monoxide detector": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Carbon+monoxide+detector.svg",
    "Ceiling hoist": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ceiling+hoist.svg",
    "Chef's kitchen": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Chef's+kitchen.svg",
    "Child friendly utensils": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Child+friendly+utensils.svg",
    "Children's books": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Children's+books.svg",
    Cinema: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cinema.svg",
    "Cleaning products": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cleaning+products.svg",
    Conditioner: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Conditioner.svg",
    "Cooking basics": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Cooking+basics.svg",
    Deadbolt: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Deadbolt.svg",
    "Disney plus": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Disney+plus.svg",
    "Dry cleaning": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Dry+cleaning.svg",
    "EV charger": "https://d292awxalydr86.cloudfront.net/Amenities+icons/EV+charger.svg",
    "Fire extinguisher": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+extinguisher.svg",
    "Fire pit": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+pit.svg",
    Fireplace: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fireplace.svg",
    "First aid kit": "https://d292awxalydr86.cloudfront.net/Amenities+icons/First+aid+kit.svg",
    Foxtel: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Foxtel.svg",
    Fridge: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Fridge.svg",
    Golf: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Golf.svg",
    "Hair dryer": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hair+dryer.svg",
    Hangers: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hangers.svg",
    HBO: "https://d292awxalydr86.cloudfront.net/Amenities+icons/HBO.svg",
    "High chair": "https://d292awxalydr86.cloudfront.net/Amenities+icons/High+chair.svg",
    "High speed internet": "https://d292awxalydr86.cloudfront.net/Amenities+icons/High+speed+internet.svg",
    "Hot tub": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Hot+tub.svg",
    "Hotel bed": "https://d292awxalydr86.cloudfront.net/Amenities+icons/hotel+bed.svg",
    "Ice maker": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ice+maker.svg",
    Kettle: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Kettle.svg",
    "Keycard access": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Keycard+access.svg",
    "Luggage storage": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Luggage+storage.svg",
    Microwave: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Microwave.svg",
    "Mini fridge": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Mini+fridge.svg",
    "Mosquito net": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Mosquito+net.svg",
    Netflix: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Netflix.svg",
    "Nintendo switch": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Nintendo+switch.svg",
    "Outdoor shower": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Outdoor+shower.svg",
    "Outlet covers": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Outlet+covers.svg",
    Oven: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Oven.svg",
    Piano: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Piano.svg",
    "Ping pong": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Ping+pong.svg",
    "Pizza oven": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pizza+oven.svg",
    Playstation: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Playstation.svg",
    "Pool table": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool+table.svg",
    Prime: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Prime.svg",
    Printer: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Printer.svg",
    "Rain shower": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Rain+shower.svg",
    "Reception desk": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Reception+desk.svg",
    "Record player": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Record+player.svg",
    "Rice maker": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Rice+maker.svg",
    "Room service": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Room+service.svg",
    "Safety gate": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Safety+gate.svg",
    Shampoo: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Shampoo.svg",
    "Smoke detector": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Smoke+detector.svg",
    Soap: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Soap.svg",
    Speakers: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Speakers.svg",
    Spices: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Spices.svg",
    Stove: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Stove.svg",
    "Tea and coffee": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Tea+and+coffee.svg",
    "Tennis court": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Tennis+court.svg",
    Thermomix: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Thermomix.svg",
    Toaster: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toaster.svg",
    Toys: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Toys.svg",
    "Trash compactor": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Trash+compactor.svg",
    Vacuum: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Vacuum.svg",
    "Video games": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Video+games.svg",
    Wardrobe: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wardrobe.svg",
    "Wheelchair access": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wheelchair+access.svg",
    "Wide doorways": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wide+doorways.svg",
    "Wood stove": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wood+stove.svg",
    Xbox: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Xbox.svg",
    "Free parking": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg",
    Linen: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Linen.svg",
    "Paid parking": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg",
    "Street parking": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg",
    "Valet parking": "https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg",
    default: "",
};

function getAmenitieSrc(amenitie: string) {
    return amenitiesSrc[amenitie as keyof typeof amenitiesSrc] || amenitiesSrc["default"];
}

export default function ViewListingAmenitiesList({ amenities, title, cardQty }: { amenities: string[]; title: string; cardQty: number }) {
    let [getAllCards, setGetAllCards] = useState(false);
    if (amenities.length === 0) return null;
    const validAmenities = amenities.filter((amenitie) => amenitiesSrc[amenitie as keyof typeof amenitiesSrc]);

    return (
        <ViewListingAmenitiesListWrapper>
            <ViewListingAmenitiesListTitle>{title}</ViewListingAmenitiesListTitle>
            <ViewListingAmenitiesListContainer>
                {getAllCards && validAmenities
                    ? validAmenities.map((amenitie) => {
                          const imgSrc = getAmenitieSrc(amenitie);
                          return imgSrc !== amenitiesSrc.default ? <ViewListingAmenitiesListItemCard key={amenitie} img={imgSrc} title={amenitie} /> : null;
                      })
                    : validAmenities.slice(0, cardQty).map((amenitie) => {
                          const imgSrc = getAmenitieSrc(amenitie);
                          return imgSrc !== amenitiesSrc.default ? <ViewListingAmenitiesListItemCard key={amenitie} img={imgSrc} title={amenitie} /> : null;
                      })}
            </ViewListingAmenitiesListContainer>
            {validAmenities.length > 10 ? (
                <ViewListingAmenitiesMoreButton type="button" onClick={() => setGetAllCards(!getAllCards)}>
                    {getAllCards ? `Hide amenities` : `See ${validAmenities.length} amenities`}
                </ViewListingAmenitiesMoreButton>
            ) : null}
        </ViewListingAmenitiesListWrapper>
    );
}

function ViewListingAmenitiesListItemCard({ img, title }: { img: string; title: string }) {
    return (
        <ViewListingAmenitiesListItem>
            <ViewListingAmenitiesListItemIcon src={img} alt={"Amenities Icon"} />
            <ViewListingAmenitiesListItemText>{title}</ViewListingAmenitiesListItemText>
        </ViewListingAmenitiesListItem>
    );
}
