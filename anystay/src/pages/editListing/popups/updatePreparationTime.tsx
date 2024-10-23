import { useCallback, useEffect, useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardSelectWrapper,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
    EditListingUpdateCardSelectWrapperContainer,
} from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";
const timeBeforeCheckInOptions = [
    { value: 0, label: "None" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
];
const timeAfterCheckOutOptions = [
    { value: 0, label: "None" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
];

interface UpdatePreparationTimeProps extends PopupProps {
    updatePreparationTimeCard: boolean;
}

export default function UpdatePreparationTime({ listingData, updatePreparationTimeCard, deactivateUpdateCards, accessToken, setListingData }: UpdatePreparationTimeProps) {
    const wrapperRef = useClickOutside(updatePreparationTimeCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [timeBeforeCheckIn, setTimeBeforeCheckIn] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [timeAfterCheckOut, setTimeAfterCheckOut] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const initTimeBeforeCheckIn = useCallback(() => {
        if (listingData.timeBeforeCheckIn === null) {
            setTimeBeforeCheckIn(timeBeforeCheckInOptions[0]);
            return;
        }
        for (let i = 0; i < timeBeforeCheckInOptions.length; i++) {
            if (timeBeforeCheckInOptions[i].value === listingData.timeBeforeCheckIn) {
                setTimeBeforeCheckIn(timeBeforeCheckInOptions[i]);
            }
        }
    }, [listingData.timeBeforeCheckIn]);
    const initTimeAfterCheckOut = useCallback(() => {
        if (listingData.timeAfterCheckOut === null) {
            setTimeAfterCheckOut(timeAfterCheckOutOptions[0]);
            return;
        }
        for (let i = 0; i < timeAfterCheckOutOptions.length; i++) {
            if (timeAfterCheckOutOptions[i].value === listingData.timeAfterCheckOut) {
                setTimeAfterCheckOut(timeAfterCheckOutOptions[i]);
            }
        }
    }, [listingData.timeAfterCheckOut]);

    useEffect(() => {
        initTimeBeforeCheckIn();
        initTimeAfterCheckOut();
    }, [initTimeAfterCheckOut, initTimeBeforeCheckIn]);

    const updatePreparationTime = async (timeBeforeCheckIn: number, timeAfterCheckOut: number) => {
        try {
            const updatedPrice = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/preparation-time`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    timeBeforeCheckIn: timeBeforeCheckIn,
                    timeAfterCheckOut: timeAfterCheckOut,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                timeBeforeCheckIn: updatedPrice.body.listing.timeBeforeCheckIn,
                timeAfterCheckOut: updatedPrice.body.listing.timeAfterCheckOut,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updatePreparationTime(timeBeforeCheckIn ? timeBeforeCheckIn.value : 0, timeAfterCheckOut ? timeAfterCheckOut.value : 0);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Preparation time</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Block days before or after your guest's stay.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    placeholder="None"
                    options={timeBeforeCheckInOptions}
                    onChange={(value) => setTimeBeforeCheckIn(value as { value: number; label: string })}
                    initialValue={timeBeforeCheckIn}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Before check-in</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardSelectWrapperContainer>
                <EditListingUpdateCardSelectWrapper>
                    <CustomSelect
                        placeholder="None"
                        options={timeAfterCheckOutOptions}
                        onChange={(value) => setTimeAfterCheckOut(value as { value: number; label: string })}
                        initialValue={timeAfterCheckOut}
                    ></CustomSelect>
                </EditListingUpdateCardSelectWrapper>
            </EditListingUpdateCardSelectWrapperContainer>
            <EditListingUpdateCardSelectSubtitleWithMargin>After check out</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
