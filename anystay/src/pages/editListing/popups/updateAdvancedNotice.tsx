import { useEffect, useState, useCallback } from "react";
import { callApi } from "../../../utils/api/api";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardSelectWrapper,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
} from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

const advancedNoticeTimeOptions = [
    { value: 1200, label: "12:00pm" },
    { value: 1300, label: "1:00pm" },
    { value: 1400, label: "2:00pm" },
    { value: 1500, label: "3:00pm" },
    { value: 1600, label: "4:00pm" },
    { value: 1700, label: "5:00pm" },
    { value: 1800, label: "6:00pm" },
    { value: 1900, label: "7:00pm" },
    { value: 2000, label: "8:00pm" },
    { value: 2100, label: "9:00pm" },
    { value: 2200, label: "10:00pm" },
    { value: 2300, label: "11:00pm" },
    { value: 2400, label: "12:00am" },
];
const noticeOptions = [
    { value: 0, label: "Allow same day bookings" },
    { value: 1, label: "One day notice" },
    { value: 2, label: "Two day notice" },
    { value: 3, label: "Three day notice" },
];

interface UpdateAdvancedNoticeProps extends PopupProps {
    updateAdvancedNoticeCard: boolean;
}

export default function UpdateAdvancedNotice({ updateAdvancedNoticeCard, deactivateUpdateCards, accessToken, setListingData, listingData }: UpdateAdvancedNoticeProps) {
    const wrapperRef = useClickOutside(updateAdvancedNoticeCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [advancedNotice, setAdvancedNotice] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [advancedNoticeTime, setAdvancedNoticeTime] = useState<{
        value: number;
        label: string;
    } | null>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const initInput = useCallback(async () => {
        let notice = null;
        let noticeTime = null;
        for (let i = 0; i < noticeOptions.length; i++) {
            if (noticeOptions[i].value === listingData.advanceNotice) {
                notice = noticeOptions[i];
                break;
            }
        }
        for (let i = 0; i < advancedNoticeTimeOptions.length; i++) {
            if (advancedNoticeTimeOptions[i].value === listingData.advanceNoticeTime) {
                noticeTime = advancedNoticeTimeOptions[i];
                break;
            }
        }
        setAdvancedNotice(notice);
        setAdvancedNoticeTime(noticeTime);
    }, [listingData.advanceNotice, listingData.advanceNoticeTime]);

    useEffect(() => {
        initInput();
    }, [initInput]);

    const submitAdvanceNotice = async () => {
        try {
            const updatedAdvanceNotice = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/advance-notice`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    advanceNotice: advancedNotice ? advancedNotice.value : 0,
                    advanceNoticeTime: advancedNoticeTime ? advancedNoticeTime.value : 1200,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                advanceNotice: updatedAdvanceNotice.body.listing.advanceNotice,
                advanceNoticeTime: updatedAdvanceNotice.body.listing.advanceNoticeTime,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await submitAdvanceNotice();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Advance notice</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Edit your same day booking rules and cut-off times</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    placeholder="Allow same day bookings"
                    options={noticeOptions}
                    onChange={(value) => setAdvancedNotice(value as { value: number; label: string })}
                    initialValue={advancedNotice}
                />
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Advance notice</EditListingUpdateCardSelectSubtitle>

            <EditListingUpdateCardSelectWrapper style={{ marginTop: "24px" }}>
                <CustomSelect
                    placeholder="Allow same day bookings"
                    options={advancedNoticeTimeOptions}
                    onChange={(value) => setAdvancedNoticeTime(value as { value: number; label: string })}
                    initialValue={advancedNoticeTime}
                />
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitleWithMargin>Same day booking cut-off</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
