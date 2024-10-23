import { useEffect, useState, useCallback } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardSelectWrapper,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
} from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";
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
    { value: "shared-room", label: "Shared room" },
    { value: "hotel-room", label: "Hotel room" },
];

interface UpdatePropertyTypeProps extends PopupProps {
    updatePropertyTypeCard: boolean;
}

export default function UpdatePropertyType({ updatePropertyTypeCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdatePropertyTypeProps) {
    const wrapperRef = useClickOutside(updatePropertyTypeCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [propertyType, setPropertyType] = useState<{ value: string; label: string } | null>(null);
    const [typeOfPlace, setTypeOfPlace] = useState<{ value: string; label: string } | null>(null);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const init = useCallback(async () => {
        for (let i = 0; i < propertyTypeOptions.length; i++) {
            if (propertyTypeOptions[i].value === listingData.propertyType) {
                setPropertyType(propertyTypeOptions[i]);
            }
        }
        for (let k = 0; k < typeOfPlaceOptions.length; k++) {
            if (typeOfPlaceOptions[k].value === listingData.typeOfPlace) {
                setTypeOfPlace(typeOfPlaceOptions[k]);
            }
        }
    }, [listingData.propertyType, listingData.typeOfPlace]);

    useEffect(() => {
        init();
    }, [init]);

    const updatePropertyType = async (propertyType: string, typeOfPlace: string) => {
        try {
            const updatedPropertyType = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/property-type`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    propertyType: propertyType,
                    typeOfPlace: typeOfPlace,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                propertyType: updatedPropertyType.body.listing.propertyType,
                typeOfPlace: updatedPropertyType.body.listing.typeOfPlace,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updatePropertyType(propertyType ? propertyType.value : "", typeOfPlace ? typeOfPlace.value : "");
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Property type</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>You can edit your property type and type of place.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper style={{ textTransform: "capitalize" }}>
                <CustomSelect
                    placeholder={"i.e. House, Apartment, Hotel"}
                    options={propertyTypeOptions}
                    onChange={(value) => setPropertyType(value as { value: string; label: string })}
                    initialValue={propertyType}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Property type</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardSelectWrapper style={{ marginTop: "24px" }}>
                <CustomSelect
                    placeholder={"i.e. Entire place, Private room"}
                    options={typeOfPlaceOptions}
                    onChange={(value) => setTypeOfPlace(value as { value: string; label: string })}
                    initialValue={typeOfPlace}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitleWithMargin style={{ marginBottom: "96px" }}>Type of place</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
