import { useEffect, useState, useCallback } from "react";
import { callApi } from "../../../utils/api/api";
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
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

const checkInOptions = [
    { value: 900, label: "9:00 AM" },
    { value: 1000, label: "10:00 AM" },
    { value: 1100, label: "11:00 AM" },
    { value: 1200, label: "12:00 PM" },
    { value: 1300, label: "1:00 PM" },
    { value: 1400, label: "2:00 PM" },
    { value: 1500, label: "3:00 PM" },
];
const checkOutOptions = [
    { value: 1000, label: "10:00 AM" },
    { value: 1100, label: "11:00 AM" },
    { value: 1200, label: "12:00 PM" },
    { value: 1300, label: "1:00 PM" },
    { value: 1400, label: "2:00 PM" },
    { value: 1500, label: "3:00 PM" },
    { value: 1600, label: "4:00 PM" },
];

interface UpdateCheckInCheckOutProps extends PopupProps {
    updateCheckInCheckOutCard: boolean;
}

export default function UpdateCheckInCheckOut({ updateCheckInCheckOutCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateCheckInCheckOutProps) {
    const wrapperRef = useClickOutside(updateCheckInCheckOutCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [checkInTime, setCheckInTime] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [checkOutTime, setCheckOutTime] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const initInput = useCallback(async () => {
        for (let i = 0; i < checkInOptions.length; i++) {
            if (checkInOptions[i].value === listingData.checkInTime) {
                setCheckInTime(checkInOptions[i]);
            }
        }
        for (let j = 0; j < checkInOptions.length; j++) {
            if (checkOutOptions[j].value === listingData.checkOutTime) {
                setCheckOutTime(checkOutOptions[j]);
            }
        }
    }, [listingData.checkInTime, listingData.checkOutTime]);

    useEffect(() => {
        console.log(listingData);
        initInput();
    }, [initInput, listingData]);

    const updateCheckInCheckOutTime = async (checkInTime: number, checkOutTime: number) => {
        try {
            const updatedCheckInCheckOutTime = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/checkin-checkout-time`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    checkInTime: checkInTime,
                    checkOutTime: checkOutTime,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                checkInTime: updatedCheckInCheckOutTime.body.listing.checkInTime,
                checkOutTime: updatedCheckInCheckOutTime.body.listing.checkOutTime,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateCheckInCheckOutTime(checkInTime ? checkInTime.value : 900, checkOutTime ? checkOutTime.value : 1000);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Check-in and out</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Edit your check-in and check out times.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect placeholder="2PM" options={checkInOptions} onChange={(value) => setCheckInTime(value as { value: number; label: string })} initialValue={checkInTime}></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Check-in after</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardSelectWrapperContainer>
                <EditListingUpdateCardSelectWrapper>
                    <CustomSelect
                        placeholder="11AM"
                        options={checkOutOptions}
                        onChange={(value) => setCheckOutTime(value as { value: number; label: string })}
                        initialValue={checkOutTime}
                    ></CustomSelect>
                </EditListingUpdateCardSelectWrapper>
            </EditListingUpdateCardSelectWrapperContainer>
            <EditListingUpdateCardSelectSubtitleWithMargin>Check-out before</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
