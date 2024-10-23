import {
    CreateListingCheckboxInput,
    CreateListingCheckboxInputLabel,
    CreateListingCheckboxInputImage,
    CreateListingCheckboxInputTitle,
    NewListingAddAmenitiesCheckboxQuestionWrapper,
    NewListingAddServicesQuestionWrapper,
    CreateListingAddAddressTitle,
    CreatelistingInstructionText,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

interface AddHouseRulesProps {
    houseRules: string[];
    addService: (houseRule: string) => Promise<void>;
    removeService: (houseRule: string) => Promise<void>;
}

export default function AddHouseRules({ addService, removeService, houseRules }: AddHouseRulesProps) {
    const options = [
        { name: "No smoking", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+smoking.svg" },
        { name: "No events", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+events.svg" },
        { name: "No children", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+children.svg" },
        { name: "No infants", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+infants.svg" },
        { name: "No pets", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+pets.svg" },
        { name: "Commercial use", icon: "https://d292awxalydr86.cloudfront.net/House+rules+icons/Commercial+use.svg" },
    ];

    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Set your house rules</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Set your house rules</CreateListingAddAddressTitle>
            {window.innerWidth > 768 && <CreatelistingInstructionText>Guests must agree to rules you set before booking.</CreatelistingInstructionText>}
            <div style={{ marginBottom: "16px" }}></div>
            <NewListingAddAmenitiesCheckboxQuestionWrapper style={{ overflow: "visible" }}>
                {options.map((option) => {
                    return (
                        <CreateListingCheckboxInputLabel
                            style={
                                houseRules.includes(option.name)
                                    ? { border: `1px solid ${ColorTheme.Blue.color}`, outline: `1px solid ${ColorTheme.Blue.color}` }
                                    : { border: `1px solid ${ColorTheme.Grey1.color}` }
                            }
                            key={option.name}
                        >
                            <CreateListingCheckboxInput
                                type="checkbox"
                                checked={houseRules.includes(option.name)}
                                onChange={(e) => {
                                    if (!houseRules.includes(option.name)) {
                                        addService(option.name);
                                    } else {
                                        removeService(option.name);
                                    }
                                }}
                            />
                            <CreateListingCheckboxInputImage src={option.icon} />
                            <CreateListingCheckboxInputTitle>{option.name}</CreateListingCheckboxInputTitle>
                        </CreateListingCheckboxInputLabel>
                    );
                })}
            </NewListingAddAmenitiesCheckboxQuestionWrapper>
        </CreateListingNewListingQuestionWrapper>
    );
}
