import {
    NewListingAddServicesQuestionWrapper,
    // CreateListingNewListingDesktopTitle,
    CreateListingAddAreaSubtitle,
    CreateListingAddAreaInputText,
    CreateListingAddAreaInputWrapper,
    CreateListingAddAddressTitle,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";
import AreaUnit from "../../../components/areaUnit/areaUnit";
import { useRef, ChangeEvent, FocusEvent } from "react";

interface AddAreaProps {
    updateAreaValue: (value: number) => void;
    updateAreaUnit: (value: "Ha" | "m²" | "") => void;
    areaValue: number;
    areaUnit: "Ha" | "m²" | "";
}

export default function AddArea({ updateAreaValue, updateAreaUnit, areaValue, areaUnit }: AddAreaProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value ? e.target.value : e.target.value + `${areaUnit}`;
        if (newValue.length <= 8) {
            // Calculate the max cursor position to keep the cursor before "m²"
            const maxCursorPos = newValue.length > 2 ? newValue.length - 2 : newValue.length;
            let areaInput = Number(newValue.replace(/\D/g, ""));
            updateAreaValue(areaInput);

            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.setSelectionRange(maxCursorPos, maxCursorPos);
                }
            }, 0);
        } else {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.setSelectionRange(newValue.length - 3, newValue.length - 3);
                }
            }, 0);
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        const maxCursorPos = input.value.length > 2 ? input.value.length - 2 : input.value.length;
        input.setSelectionRange(maxCursorPos, maxCursorPos);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        const maxCursorPos = input.value.length > 2 ? input.value.length - 2 : input.value.length;
        input.setSelectionRange(maxCursorPos, maxCursorPos);
    };

    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Area for guests</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Area for guests</CreateListingAddAddressTitle>

            <CreateListingAddAreaSubtitle>What is the total area your guests can access?</CreateListingAddAreaSubtitle>
            <CreateListingAddAreaInputWrapper>
                <CreateListingAddAreaInputText
                    ref={inputRef}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                            e.preventDefault();
                        }
                    }}
                    value={areaValue > 0 ? areaValue + `${areaUnit}` : ""}
                    placeholder={`0${areaUnit}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </CreateListingAddAreaInputWrapper>
            <AreaUnit setAreaUnit={updateAreaUnit} areaUnit={areaUnit} />
        </CreateListingNewListingQuestionWrapper>
    );
}
