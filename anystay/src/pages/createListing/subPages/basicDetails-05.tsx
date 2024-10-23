import { useMemo, useState } from "react";
import CustomSelect from "../../../components/select/customSelect";
import { NewListingPropertyTypeQuestionTitle, CreateListingAddAddressTitle, CreatelistingInstructionText, CreateListingNewListingQuestionWrapper } from "../createListingStyling";

interface NewListingBasicDetailsQuestionProps {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    updateGuests: (guests: number) => void;
    updateBedrooms: (bedrooms: number) => void;
    updateBeds: (beds: number) => void;
    updateBathrooms: (bathrooms: number) => void;
}

export default function NewListingBasicDetailsQuestion({ guests, updateGuests, bedrooms, updateBedrooms, bathrooms, beds, updateBeds, updateBathrooms }: NewListingBasicDetailsQuestionProps) {
    const { options, bathroomOptions, guestOptions } = useMemo(() => {
        const options = [];
        const bathroomOptions = [];
        const guestOptions = [];
        for (let i = 0; i <= 200; i++) {
            //value is integer, but label is half of the value
            bathroomOptions.push({ value: i.toString(), label: (i / 2).toString() });
            if (i < 101) {
                options.push({ value: i.toString(), label: i.toString() });
                if (i >= 1) {
                    guestOptions.push({ value: i.toString(), label: i.toString() });
                }
            }
        }
        return { options, bathroomOptions, guestOptions };
    }, []);
    const [guestsData, setGuestsData] = useState(options.filter((option) => Number(option.value) === guests)[0]);
    const [bedroomsData, setBedroomsData] = useState(options.filter((option) => Number(option.value) === bedrooms)[0]);
    const [bathroomsData, setBathroomsData] = useState(bathroomOptions.filter((option) => Number(option.value) === bathrooms)[0]);
    const [bedsData, setBedsData] = useState(options.filter((option) => Number(option.value) === beds)[0]);

    return (
        <CreateListingNewListingQuestionWrapper>
            <CreateListingAddAddressTitle>Add some basic details</CreateListingAddAddressTitle>
            {/* <CreateListingNewListingDesktopTitle>Add basic details</CreateListingNewListingDesktopTitle> */}
            {window.innerWidth > 768 && <CreatelistingInstructionText>Tell us some basic details about your place.</CreatelistingInstructionText>}
            <NewListingPropertyTypeQuestionTitle>Guests</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="0"
                options={guestOptions}
                onChange={async (value) => {
                    setGuestsData(value as { value: string; label: string });
                    updateGuests(Number(value.value));
                }}
                initialValue={guestsData}
            ></CustomSelect>
            <NewListingPropertyTypeQuestionTitle>Beds</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="0"
                options={options}
                onChange={async (value) => {
                    setBedsData(value as { value: string; label: string });
                    updateBeds(Number(value.value));
                }}
                initialValue={bedsData}
            ></CustomSelect>
            <NewListingPropertyTypeQuestionTitle>Bedrooms</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="0"
                options={options}
                onChange={async (value) => {
                    setBedroomsData(value as { value: string; label: string });
                    updateBedrooms(Number(value.value));
                }}
                initialValue={bedroomsData}
            ></CustomSelect>
            <NewListingPropertyTypeQuestionTitle>Bathrooms</NewListingPropertyTypeQuestionTitle>
            <CustomSelect
                placeholder="0"
                options={bathroomOptions}
                onChange={async (value) => {
                    setBathroomsData(value as { value: string; label: string });
                    updateBathrooms(Number(value.value));
                }}
                initialValue={bathroomsData}
                styles={{ maxHeight: "180px" }}
            ></CustomSelect>
        </CreateListingNewListingQuestionWrapper>
    );
}
