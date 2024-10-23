import { useCallback, useEffect, useState } from "react";
import { callApi } from "../../../utils/api/api";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardSelectWrapper } from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

const noticeOptions = [
    { value: "24-months", label: "24 months in advance" },
    { value: "18-months", label: "18 months in advance" },
    { value: "12-months", label: "12 months in advance" },
    { value: "6-months", label: "6 months in advance" },
    { value: "3-months", label: "3 months in advance" },
];

interface UpdateAvailableDatesProps extends PopupProps {
    updateAvailableDatesCard: boolean;
}

export default function UpdateAvailableDates({ updateAvailableDatesCard, deactivateUpdateCards, accessToken, listingData, setListingData }: UpdateAvailableDatesProps) {
    const wrapperRef = useClickOutside(updateAvailableDatesCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [noticeOption, setNoticeOption] = useState({ value: "24-months", label: "24 months in advance" });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const initNoticeOption = useCallback(() => {
        for (let option of noticeOptions) {
            if (option.value === listingData.availabilityRange) {
                setNoticeOption(option);
                return;
            }
        }
    }, [listingData.availabilityRange]);

    useEffect(() => {
        initNoticeOption();
    }, [initNoticeOption]);

    const updateAvailabilityRange = async () => {
        try {
            const updatedAvailabilityRange = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/availability-range`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    availabilityRange: noticeOption.value,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, availabilityRange: updatedAvailabilityRange.body.listing.availabilityRange }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateAvailabilityRange();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Availability window</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Guest can book in advance for your availability window</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper style={{ marginBottom: "96px" }}>
                <CustomSelect
                    // placeholder={"All future dates"}
                    options={noticeOptions}
                    onChange={(value) => {
                        setNoticeOption(value as { value: string; label: string });
                    }}
                    initialValue={noticeOption}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
        </GlobalPopupContainerRight>
    );
}
