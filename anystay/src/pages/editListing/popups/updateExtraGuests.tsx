import { useCallback, useEffect, useMemo, useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardContentInputText,
    EditListingUpdateCardSelectWrapper,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
} from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateExtraGuestsProps extends PopupProps {
    updateExtraGuestCard: boolean;
}

export default function UpdateExtraGuests({ updateExtraGuestCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateExtraGuestsProps) {
    const wrapperRef = useClickOutside(updateExtraGuestCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [extraGuestFee, setExtraGuestFee] = useState(listingData.extraGuestFee ? listingData.extraGuestFee / 100 : 0);
    const [extraGuestOption, setExtraGuestOption] = useState({ value: 0, label: `None selected` });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [available, setAvailable] = useState(false);
    const [errMessage, setErrMessage] = useState("");

    const extraGuestOptions = useMemo(() => {
        let extraGuestOptionsCopy = [];
        for (let i = 0; i < listingData.guests; i++) {
            if (i === 0) {
                extraGuestOptionsCopy.push({ value: 0, label: `None selected` });
            } else {
                extraGuestOptionsCopy.push({ value: i, label: `${i} guest${i > 1 ? "s" : ""}` });
            }
        }
        return extraGuestOptionsCopy;
    }, [listingData.guests]);

    const initExtraGuestValue = useCallback(() => {
        if (listingData.extraMaxGuests) {
            setExtraGuestOption({ value: listingData.extraMaxGuests, label: `${listingData.extraMaxGuests} guest${listingData.extraMaxGuests > 1 ? "s" : ""}` });
        }
    }, [listingData.extraMaxGuests]);

    useEffect(() => {
        initExtraGuestValue();
    }, [initExtraGuestValue]);

    const updateExtraGuests = async (extraGuestFee: number, extraMaxGuests: number) => {
        try {
            const updatedExtraGuests = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/extra-guests`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    extraGuestFee: extraGuestFee * 100,
                    extraMaxGuests: extraMaxGuests,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                extraGuestFee: updatedExtraGuests.body.listing.extraGuestFee,
                extraMaxGuests: updatedExtraGuests.body.listing.extraMaxGuests,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    useEffect(() => {
        if (extraGuestFee > listingData.minimumPrice / 100) {
            setErrMessage(`Price cannot exceed $${listingData.minimumPrice / 100}`);
            setAvailable(true);
        } else {
            setAvailable(false);
        }
    }, [extraGuestFee, listingData.minimumPrice]);

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateExtraGuests(extraGuestFee, extraGuestOption.value);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading || available} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Extra guest fee</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>You can select your extra guest threshold and price.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    placeholder="None selected"
                    options={extraGuestOptions}
                    onChange={(value) => {
                        setExtraGuestOption(value as { value: number; label: string });
                    }}
                    initialValue={extraGuestOption}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Apply when guests is over</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardContentInputText
                placeholder="$0.00"
                style={{ marginTop: "32px" }}
                type="text"
                value={`$${extraGuestFee}`}
                onChange={(e) => {
                    let price = e.target.value.replace(/\D/g, "");
                    setExtraGuestFee(Number(price.replace("$", "")));
                }}
            />
            {available ? (
                <EditListingUpdateCardSelectSubtitleWithMargin style={{ color: "red" }}>{errMessage}</EditListingUpdateCardSelectSubtitleWithMargin>
            ) : (
                <EditListingUpdateCardSelectSubtitleWithMargin>Per night, per extra guest</EditListingUpdateCardSelectSubtitleWithMargin>
            )}
        </GlobalPopupContainerRight>
    );
}
