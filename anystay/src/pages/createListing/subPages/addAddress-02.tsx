import { useRef, useState } from "react";
import {
    CreateListingAddAddressQuestionSubtitle,
    CreateListingAddAdressAutocompleteInput,
    NewListingMapWrapper,
    CreateListingAddAddressTitle,
    AutocompleteClearButton,
    AutocompleteClearButtonIcon,
    CreateListingAddAdressAutocompleteInputWrapper,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";
// import Map from '../map/map'
import Map from "../../../components/map/map";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

interface defaultAddressDataProps {
    unitNumber: string;
    streetNumber: string;
    street: string;
    suburb: string;
    stateShort: string;
    state: string;
    country: string;
    postcode: string;
    latitude: number | null;
    longitude: number | null;
    updateAddress: (place: google.maps.places.PlaceResult | null) => void;
}

export default function AddAddress({ latitude, longitude, unitNumber, streetNumber, street, suburb, country, state, postcode, updateAddress }: defaultAddressDataProps) {
    const [invalidAddress, setInvalidAddress] = useState(false);
    const initPlaceInput = () => {
        if (streetNumber && street && suburb && state && postcode && country) {
            return `${unitNumber ? unitNumber + "/" : ""} ${streetNumber} ${street}, ${suburb} ${state} ${postcode}, ${country}`;
        } else {
            return "";
        }
    };
    const [placeInput, setPlaceInput] = useState<string | undefined>(initPlaceInput());
    const autocompleteRef = useRef(null);

    return (
        <CreateListingNewListingQuestionWrapper>
            <CreateListingAddAddressTitle>Where is your place?</CreateListingAddAddressTitle>
            <CreateListingAddAddressQuestionSubtitle invalidAddress={invalidAddress}>Enter a full address including unit number - it won't be shared with guests until after they book.</CreateListingAddAddressQuestionSubtitle>
            <CreateListingAddAdressAutocompleteInputWrapper>
                <CreateListingAddAdressAutocompleteInput
                    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                    onPlaceSelected={(place) => {
                        // Some valid addresses have less than 7 address components, e.g 330 church street, parramatta, nsw, australia
                        // if (place.address_components.length >= 7) {
                        updateAddress(place);
                        setPlaceInput(place?.formatted_address);
                        setInvalidAddress(false);
                        // } else {
                        //     setInvalidAddress(true);
                        // }
                    }}
                    onChange={(e) => {
                        setPlaceInput((e.target as HTMLInputElement).value);
                        setInvalidAddress(false);
                    }}
                    // @ts-expect-error
                    value={placeInput}
                    options={{
                        types: ["address"],
                        componentRestrictions: { country: ["au", "nz"] },
                    }}
                    language={"en-AU"}
                    style={{ width: "100%", borderRadius: "10px", color: ColorTheme.Black.color }}
                    ref={autocompleteRef}
                />
                {placeInput !== "" && (
                    <AutocompleteClearButton
                        type="button"
                        onClick={() => {
                            setPlaceInput("");
                            updateAddress(null);
                        }}
                    >
                        <AutocompleteClearButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"} alt="Clear address" />
                    </AutocompleteClearButton>
                )}
            </CreateListingAddAdressAutocompleteInputWrapper>

            <NewListingMapWrapper>
                <Map
                    containerStyle={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "12px",
                    }}
                    lat={latitude ? latitude : -25.36}
                    lng={longitude ? longitude : 134}
                    zoom={latitude && longitude ? 14 : 4}
                    minZoom={1}
                />
            </NewListingMapWrapper>
        </CreateListingNewListingQuestionWrapper>
    );
}
