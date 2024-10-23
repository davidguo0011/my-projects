import { useState, useRef } from "react";

import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingAutocompleteInput,
    EditListingAutocompleteInputWrapper,
    AutocompleteClearButton,
    AutocompleteClearButtonIcon,
    EditListingUpdateAddressForm,
    EditListingUpdateAddressItem,
    EditListingUpdateAddressItemTitle,
    EditListingUpdateAddressItemInput,
    EditListingUpdateAddressMsg,
} from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateAddressProps extends PopupProps {
    updateAddressCard: boolean;
}

export default function UpdateAddress({ listingData, updateAddressCard, deactivateUpdateCards, setListingData, accessToken }: UpdateAddressProps) {
    const wrapperRef = useClickOutside(
        updateAddressCard,
        () => {
            if (!isContinueBtnLoading) {
                deactivateUpdateCards();
            }
        },
        true
    );

    const [placeId, setPlaceId] = useState("");
    const [placeInput, setPlaceInput] = useState(listingData.streetNumber && listingData.street ? `${listingData.streetNumber} ${listingData.street}` : "");
    const [unitNumberInput, setUnitNumberInput] = useState(listingData.unitNumber);
    const [suburbInput, setSuburbInput] = useState(listingData.suburb ?? "");
    const [stateInput, setStateInput] = useState(listingData.state);
    const [postCodeInput, setPostCodeInput] = useState(listingData.postcode);

    const streetNumberMissing = useRef(false);

    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState<boolean | null>(null);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateAddress = async (placeID: string) => {
        try {
            const updatedAddress = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/address`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    listingID: listingData.id,
                    placeID: placeID,
                    unitNumber: unitNumberInput,
                    updateStatus:
                        listingData && listingData.hostawayListingId && !listingData.street && !listingData.streetNumber && !listingData.suburb && listingData.status === "inactive" ? true : false,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                unitNumber: updatedAddress.body.updateListing.unitNumber,
                streetNumber: updatedAddress.body.updateListing.streetNumber,
                street: updatedAddress.body.updateListing.street,
                suburb: updatedAddress.body.updateListing.suburb,
                state: updatedAddress.body.updateListing.state,
                postcode: updatedAddress.body.updateListing.postcode,
                stateShort: updatedAddress.body.updateListing.stateShort,
                status: updatedAddress.body.updateListing.status,
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handlePostCodeInput = (input: string) => {
        const value = input.replace(/\D/g, "");
        if (value.length > 4) return;
        if (value) {
            setPostCodeInput(value);
        } else {
            setPostCodeInput("");
        }
    };

    const handlePlace = (place: google.maps.places.PlaceResult) => {
        function getAddressComponent(place: google.maps.places.PlaceResult, type: string) {
            return place.address_components?.find((obj) => obj.types.includes(type))?.long_name || null;
        }
        let subpremise = getAddressComponent(place, "subpremise");
        let streetNumber = getAddressComponent(place, "street_number");
        let street = getAddressComponent(place, "route");
        let suburb = getAddressComponent(place, "locality");
        let state = getAddressComponent(place, "administrative_area_level_1");
        let postCode = getAddressComponent(place, "postal_code");

        if (subpremise) {
            setUnitNumberInput(subpremise);
        }
        setPlaceId(place.place_id ?? "");
        if (streetNumber) {
            streetNumberMissing.current = false;
            setPlaceInput(`${streetNumber} ${street}`);
        } else {
            streetNumberMissing.current = true;
            setPlaceInput(street || "");
        }
        setSuburbInput(suburb || "");
        setStateInput(state || "");
        setPostCodeInput(postCode || "");
    };

    const getPlacePredictions = (input: string) => {
        return new Promise((resolve, reject) => {
            const service = new window.google.maps.places.AutocompleteService();
            service.getPlacePredictions({ input, componentRestrictions: { country: ["au", "nz"] } }, (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions !== null && predictions.length > 0) {
                    resolve(predictions[0].place_id);
                } else {
                    reject(status);
                }
            });
        });
    };
    const getPlaceDetails = (placeId: string) => {
        return new Promise((resolve, reject) => {
            const service = new window.google.maps.places.PlacesService(document.createElement("div"));
            service.getDetails({ placeId }, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    resolve(place);
                } else {
                    reject(status);
                }
            });
        });
    };

    const backToDefaultState = () => {
        //any changes will reset placeid in order for google map to check
        setPlaceId("");
        setMsg("");
        setSuccess(null);
    };

    const onSubmit = async () => {
        setIsContinueBtnLoading(true);
        if (!placeId) {
            //auto complete predict
            try {
                if (!placeInput) {
                    throw new Error();
                }
                const placePredictionId = await getPlacePredictions(placeInput);
                const place = (await getPlaceDetails(placePredictionId as string)) as google.maps.places.PlaceResult;
                handlePlace(place);
                if (streetNumberMissing.current) {
                    setMsg("Your address must include a street number");
                    setSuccess(false);
                    setIsContinueBtnLoading(false);
                    return;
                }
                if (place.place_id) {
                    await updateAddress(place.place_id);
                }
                setSuccess(true);
                setIsContinueBtnLoading(false);
                deactivateUpdateCards();
            } catch (err) {
                //google cannot find the address
                setMsg("Your address is invalid");
                setSuccess(false);
                setIsContinueBtnLoading(false);
                return;
            }
        } else {
            if (streetNumberMissing.current) {
                setMsg("Your address must include a street number");
                setSuccess(false);
                setIsContinueBtnLoading(false);
                return;
            }
            await updateAddress(placeId);
            setSuccess(true);
            setIsContinueBtnLoading(false);
            deactivateUpdateCards();
        }
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={onSubmit} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Listing address</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Changes to your address are subject to review by us.</EditListingUpdateCardContentSubtitle>

            <EditListingUpdateAddressForm>
                <EditListingUpdateAddressItem>
                    <EditListingUpdateAddressItemInput
                        value={unitNumberInput ? unitNumberInput : ""}
                        placeholder={"Unit, level, etc... (if applicable)"}
                        onChange={(e) => {
                            setUnitNumberInput(e.target.value);
                        }}
                    />
                </EditListingUpdateAddressItem>
                <EditListingUpdateAddressItem>
                    <EditListingUpdateAddressItemTitle>Street address</EditListingUpdateAddressItemTitle>
                    <EditListingAutocompleteInputWrapper>
                        <EditListingAutocompleteInput
                            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onPlaceSelected={handlePlace}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                backToDefaultState();
                                setPlaceInput(e.target.value);
                            }}
                            // @ts-expect-error
                            value={placeInput ? placeInput : ""}
                            placeholder={"Enter a city, suburb or street"}
                            language={"en-AU"}
                            options={{
                                types: ["address"],
                                componentRestrictions: { country: ["au", "nz"] },
                            }}
                        />
                        {placeInput !== "" && (
                            <AutocompleteClearButton
                                type="button"
                                onMouseDown={() => {
                                    console.log("clear address");
                                    backToDefaultState();
                                    setPlaceInput("");
                                }}
                            >
                                <AutocompleteClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear address" />
                            </AutocompleteClearButton>
                        )}
                    </EditListingAutocompleteInputWrapper>
                </EditListingUpdateAddressItem>
                <EditListingUpdateAddressItem>
                    <EditListingUpdateAddressItemTitle>Suburb</EditListingUpdateAddressItemTitle>
                    <EditListingUpdateAddressItemInput
                        value={suburbInput ? suburbInput : ""}
                        onChange={(e) => {
                            backToDefaultState();
                            setSuburbInput(e.target.value);
                        }}
                    />
                </EditListingUpdateAddressItem>
                <EditListingUpdateAddressItem>
                    <EditListingUpdateAddressItemTitle>State</EditListingUpdateAddressItemTitle>
                    <EditListingUpdateAddressItemInput
                        value={stateInput ? stateInput : ""}
                        onChange={(e) => {
                            backToDefaultState();
                            setStateInput(e.target.value);
                        }}
                    />
                </EditListingUpdateAddressItem>
                <EditListingUpdateAddressItem>
                    <EditListingUpdateAddressItemTitle>Postcode</EditListingUpdateAddressItemTitle>
                    <EditListingUpdateAddressItemInput
                        value={postCodeInput ? postCodeInput : ""}
                        onChange={(e) => {
                            backToDefaultState();
                            handlePostCodeInput(e.target.value);
                        }}
                    />
                </EditListingUpdateAddressItem>
            </EditListingUpdateAddressForm>

            <EditListingUpdateAddressMsg success={success}>{msg}</EditListingUpdateAddressMsg>
        </GlobalPopupContainerRight>
    );
}
