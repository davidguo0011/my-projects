import {
    CreateListingAddAddressQuestionWrapper,
    CreateListingAddSubpremisesTitle,
    CreateListingAddAddressQuestionSubtitle,
    CreateListingAddSubpremisesForm,
    CreateListingAddSubpremisesItem,
    CreateListingAddSubpremisesItemTitle,
    CreateListingAddSubpremisesItemContent,
    CreateListingAddSubpremisesInput,
} from "../createListingStyling";

interface AddressData {
    unitNumber: string;
    streetNumber: string;
    street: string;
    suburb: string;
    stateShort: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
    latitude: number | null;
    longitude: number | null;
}

interface AddSubpremisesProps {
    addressData: AddressData;
    setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
}

export default function AddSubpremises({ addressData, setAddressData }: AddSubpremisesProps) {
    return (
        <CreateListingAddAddressQuestionWrapper>
            <CreateListingAddSubpremisesTitle>Is your location correct?</CreateListingAddSubpremisesTitle>
            <CreateListingAddAddressQuestionSubtitle>Make sure your address is accurate, including the unit number.</CreateListingAddAddressQuestionSubtitle>
            <CreateListingAddSubpremisesForm>
                <CreateListingAddSubpremisesItem style={{ cursor: "default" }}>
                    <CreateListingAddSubpremisesInput
                        value={addressData.unitNumber}
                        onChange={(e) => setAddressData({ ...addressData, unitNumber: e.target.value })}
                        placeholder={"Unit, level, etc..."}
                    />
                </CreateListingAddSubpremisesItem>

                <CreateListingAddSubpremisesItem>
                    <CreateListingAddSubpremisesItemTitle>Street address</CreateListingAddSubpremisesItemTitle>
                    <CreateListingAddSubpremisesItemContent>
                        {addressData.streetNumber} {addressData.street}
                    </CreateListingAddSubpremisesItemContent>
                </CreateListingAddSubpremisesItem>

                <CreateListingAddSubpremisesItem>
                    <CreateListingAddSubpremisesItemTitle>Suburb</CreateListingAddSubpremisesItemTitle>
                    <CreateListingAddSubpremisesItemContent>{addressData.suburb}</CreateListingAddSubpremisesItemContent>
                </CreateListingAddSubpremisesItem>

                <CreateListingAddSubpremisesItem>
                    <CreateListingAddSubpremisesItemTitle>State</CreateListingAddSubpremisesItemTitle>
                    <CreateListingAddSubpremisesItemContent>{addressData.state}</CreateListingAddSubpremisesItemContent>
                </CreateListingAddSubpremisesItem>

                <CreateListingAddSubpremisesItem>
                    <CreateListingAddSubpremisesItemTitle>Postcode</CreateListingAddSubpremisesItemTitle>
                    <CreateListingAddSubpremisesItemContent>{addressData.postcode}</CreateListingAddSubpremisesItemContent>
                </CreateListingAddSubpremisesItem>
            </CreateListingAddSubpremisesForm>
        </CreateListingAddAddressQuestionWrapper>
    );
}
