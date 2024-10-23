import { useState, useRef } from "react";
import { EditListingAddAreaInputWrapper, EditListingAddAreaInputText, EditListingAddAreaTitle, EditListingAddAreaSubtitle } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import AreaUnit from "../../../components/areaUnit/areaUnit";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateAreaProps extends PopupProps {
    updateListingAreaCard: boolean;
}

export default function UpdateArea({ updateListingAreaCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateAreaProps) {
    const wrapperRef = useClickOutside(updateListingAreaCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [areaValue, setAreaValue] = useState(listingData.areaValue ? listingData.areaValue : "");
    const [areaUnit, setAreaUnit] = useState(listingData.areaUnit ? listingData.areaUnit : "m²");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value ? e.target.value : e.target.value + `${areaUnit}`;
        if (newValue.length <= 8) {
            // Calculate the max cursor position to keep the cursor before "m²"
            const maxCursorPos = newValue.length > 2 ? newValue.length - 2 : newValue.length;
            let areaInput = Number(newValue.replace(/\D/g, ""));
            setAreaValue(areaInput);

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

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        const maxCursorPos = input.value.length > 2 ? input.value.length - 2 : input.value.length;
        input.setSelectionRange(maxCursorPos, maxCursorPos);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        const maxCursorPos = input.value.length > 2 ? input.value.length - 2 : input.value.length;
        input.setSelectionRange(maxCursorPos, maxCursorPos);
    };

    const updateArea = async (areaValue: string | number, areaUnit: string) => {
        try {
            const updatedArea = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/area`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    areaValue: Number(areaValue),
                    areaUnit: areaUnit,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, areaUnit: updatedArea.body.listing.areaUnit, areaValue: updatedArea.body.listing.areaValue }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateArea(areaValue, areaUnit);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading || !areaValue} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingAddAreaInputWrapper>
                <EditListingAddAreaInputText
                    ref={inputRef}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                            e.preventDefault();
                        }
                    }}
                    value={(areaValue as number) > 0 ? areaValue + `${areaUnit !== "" ? areaUnit : "m²"}` : ""}
                    placeholder={`0${areaUnit !== "" ? areaUnit : "m²"}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </EditListingAddAreaInputWrapper>

            <EditListingAddAreaTitle>Area</EditListingAddAreaTitle>
            <EditListingAddAreaSubtitle>Add the total area your guests can access.</EditListingAddAreaSubtitle>
            <AreaUnit setAreaUnit={setAreaUnit} areaUnit={areaUnit as "Ha" | "m²" | ""} style={{ marginTop: "32px" }} />
        </GlobalPopupContainerRight>
    );
}
