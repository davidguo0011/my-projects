import CustomSelect from "../../../components/select/customSelect";
import { NewListingPropertyTypeQuestionTitle, CreateListingAddAddressTitle, CreatelistingInstructionText, CreateListingNewListingQuestionWrapper } from "../createListingStyling";

interface NewListingPropertyTypeQuestionProps {
    propertyType: string | null;
    updatePropertyType: (propertyType: string) => void;
    typeOfPlace: string | null;
    updateTypeOfPlace: (placeType: string) => void;
}

export default function NewListingPropertyTypeQuestion({ propertyType, typeOfPlace, updateTypeOfPlace, updatePropertyType }: NewListingPropertyTypeQuestionProps) {
    const propertyTypeOptions = [
        { value: "house", label: "House" },
        { value: "apartment", label: "Apartment" },
        { value: "townhouse", label: "Townhouse" },
        { value: "cabin", label: "Cabin" },
        { value: "guest", label: "Guest house" },
        { value: "studio", label: "Studio" },
        { value: "chalet", label: "Chalet" },
        { value: "hotel", label: "Hotel" },
        { value: "serviced-apartment", label: "Serviced apartment" },
        { value: "resort", label: "Resort" },
        { value: "bed-and-breakfast", label: "Bed & Breakfast" },
        { value: "farm-stay", label: "Farm stay" },
        { value: "hostel", label: "Hostel" },
        { value: "motel", label: "Motel" },
        { value: "beach-house", label: "Beach house" },
        { value: "tree-house", label: "Tree house" },
        { value: "condo", label: "Condo" },
        { value: "cottage", label: "Cottage" },
        { value: "villa", label: "Villa" },
        { value: "lodge", label: "Lodge" },
        { value: "estate", label: "Estate" },
        { value: "tiny-home", label: "Tiny home" },
        { value: "yurt", label: "Yurt" },
        { value: "glamping", label: "Glamping" },
        { value: "guest-suite", label: "Guest suite" },
        { value: "penthouse", label: "Penthouse" },
        { value: "campsite", label: "Campsite" },
        { value: "station", label: "Station" },
        { value: "dome", label: "Dome" },
        { value: "boutique-hotel", label: "Boutique hotel" },
        { value: "barn", label: "Barn" },
        { value: "shed", label: "Shed" },
        { value: "shack", label: "Shack" },
        { value: "caravan", label: "Caravan" },
        { value: "wagon", label: "Wagon" },
        { value: "boat", label: "Boat" },
        { value: "yacht", label: "Yacht" },
        { value: "castle", label: "Castle" },
        { value: "island", label: "Island" },
        { value: "lake-house", label: "Lake house" },
        { value: "tower", label: "Tower" },
        { value: "aparthotel", label: "Aparthotel" },
        { value: "nature-lodge", label: "Nature lodge" },
        { value: "houseboat", label: "Houseboat" },
        { value: "lighthouse", label: "Lighthouse" },
        { value: "bungalow", label: "Bungalow" },
        { value: "hut", label: "Hut" },
        { value: "loft", label: "Loft" },
        { value: "train", label: "Train" },
        { value: "teepee", label: "Teepee" },
        { value: "bus", label: "Bus" },
        { value: "suite", label: "Suite" },
        { value: "cave", label: "Cave" },
        { value: "chatea", label: "Chateau" },
        { value: "riad", label: "Riad" },
        { value: "rv", label: "RV" },
        { value: "windmill", label: "Windmill" },
        { value: "sheperds-hut", label: "Shepherds hut" },
        { value: "tram", label: "Tram" },
        { value: "igloo", label: "Igloo" },
        { value: "church", label: "Church" },
        { value: "eco-house", label: "Eco house" },
        { value: "bunker", label: "Bunker" },
    ];
    const typeOfPlaceOptions = [
        { value: "entire-place", label: "Entire place" },
        { value: "private-room", label: "Private room" },
        { value: "hotel-room", label: "Hotel room" },
        { value: "shared-room", label: "Shared room" },
    ];
    const typeOfPlaceData = typeOfPlaceOptions.filter((option) => option.value === typeOfPlace)[0];
    const propertyTypeData = propertyTypeOptions.filter((option) => option.value === propertyType)[0];

    return (
        <CreateListingNewListingQuestionWrapper>
            <CreateListingAddAddressTitle>What are you listing?</CreateListingAddAddressTitle>
            {window.innerWidth > 768 && <CreatelistingInstructionText>Select the options best describing your place.</CreatelistingInstructionText>}
            <NewListingPropertyTypeQuestionTitle>Type of place</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="Choose type of place"
                options={typeOfPlaceOptions}
                onChange={(value) => {
                    updateTypeOfPlace(value.value as string);
                }}
                initialValue={typeOfPlaceData}
            ></CustomSelect>
            <NewListingPropertyTypeQuestionTitle>Property type</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="Choose property type"
                options={propertyTypeOptions}
                onChange={(value) => {
                    updatePropertyType(value.value as string);
                }}
                initialValue={propertyTypeData}
            ></CustomSelect>
        </CreateListingNewListingQuestionWrapper>
    );
}
