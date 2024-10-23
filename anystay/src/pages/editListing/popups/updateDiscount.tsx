import { useCallback, useEffect, useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardSelectWrapper,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
} from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

const weeklyDiscountOptions = [
    { value: 0, label: "0%" },
    { value: 5, label: "5%" },
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
    { value: 35, label: "35%" },
    { value: 50, label: "50%" },
    { value: 65, label: "65%" },
];
const monthlyDiscountOptions = [
    { value: 0, label: "0%" },
    { value: 5, label: "5%" },
    { value: 10, label: "10%" },
    { value: 20, label: "20%" },
    { value: 30, label: "30%" },
    { value: 40, label: "40%" },
    { value: 50, label: "50%" },
    { value: 60, label: "60%" },
    { value: 70, label: "70%" },
];

interface UpdateDiscountProps extends PopupProps {
    updateDiscountCard: boolean;
}

export default function UpdateDiscount({ updateDiscountCard, deactivateUpdateCards, accessToken, listingData, setListingData }: UpdateDiscountProps) {
    const wrapperRef = useClickOutside(updateDiscountCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [weeklyDiscount, setWeeklyDiscount] = useState<{ value: number; label: string } | null>(null);
    const [monthlyDiscount, setMonthlyDiscount] = useState<{ value: number; label: string } | null>(null);

    const initInput = useCallback(async () => {
        for (let i = 0; i < weeklyDiscountOptions.length; i++) {
            if (weeklyDiscountOptions[i].value === listingData.weeklyDiscount) {
                setWeeklyDiscount(weeklyDiscountOptions[i]);
            }
        }
        for (let i = 0; i < monthlyDiscountOptions.length; i++) {
            if (monthlyDiscountOptions[i].value === listingData.monthlyDiscount) {
                setMonthlyDiscount(monthlyDiscountOptions[i]);
            }
        }
    }, [listingData.monthlyDiscount, listingData.weeklyDiscount]);
    useEffect(() => {
        initInput();
    }, [initInput]);

    const updateDiscount = async (weeklyDiscount: number, monthlyDiscount: number) => {
        try {
            const updatedDiscount = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/base-discounts`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    weeklyDiscount: weeklyDiscount,
                    monthlyDiscount: monthlyDiscount,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                weeklyDiscount: updatedDiscount.body.listing.weeklyDiscount,
                monthlyDiscount: updatedDiscount.body.listing.monthlyDiscount,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateDiscount(weeklyDiscount ? weeklyDiscount.value : 0, monthlyDiscount ? monthlyDiscount.value : 0);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Long stay discounts</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Edit your weekly and monthly discounts.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    placeholder={`No weekly discount`}
                    options={weeklyDiscountOptions}
                    onChange={(value) => setWeeklyDiscount(value as { value: number; label: string })}
                    initialValue={weeklyDiscount}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitle>Weekly discount</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardSelectWrapper style={{ marginTop: "24px" }}>
                <CustomSelect
                    placeholder={`No monthly discount`}
                    options={monthlyDiscountOptions}
                    onChange={(value) => setMonthlyDiscount(value as { value: number; label: string })}
                    initialValue={monthlyDiscount}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingUpdateCardSelectSubtitleWithMargin style={{ marginBottom: "96px" }}>Monthly discount</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
