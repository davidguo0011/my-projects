import { useMemo, useEffect, useState, useCallback } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardSelectWrapper } from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateGuestsProps extends PopupProps {
    updateGuestsCard: boolean;
}

export default function UpdateGuests({ updateGuestsCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateGuestsProps) {
    const wrapperRef = useClickOutside(updateGuestsCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [guests, setGuests] = useState<{ value: number; label: string } | null>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const options = useMemo(() => {
        let allOptions = [];
        for (let i = 1; i <= 100; i++) {
            allOptions.push({ value: i, label: `${i} ${i > 1 ? "guests" : "guest"}` });
        }
        return allOptions;
    }, []);
    const initGuests = useCallback(() => {
        if (listingData.guests > 0) {
            setGuests({ value: listingData.guests, label: `${listingData.guests} ${listingData.guests > 1 ? "guests" : "guest"}` });
        }
    }, [listingData.guests]);

    useEffect(() => {
        initGuests();
    }, [initGuests]);

    const updateGuests = async (guests: number) => {
        try {
            const updatedGuests = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/guests`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    guests: guests,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, guests: updatedGuests.body.listing.guests }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateGuests(guests ? guests.value : 1);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Guests</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Select the maximum number of guests you can accommodate</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper style={{ marginBottom: "96px" }}>
                <CustomSelect
                    options={options}
                    onChange={(value) => {
                        setGuests(value as { value: number; label: string });
                    }}
                    placeholder={listingData.guests}
                    initialValue={guests}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
        </GlobalPopupContainerRight>
    );
}
