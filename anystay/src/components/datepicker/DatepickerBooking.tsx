import { useCallback, useEffect, useState } from "react";
import {
    DatePickerSectionWrapper,
    DatePickerSectionTitle,
    DatePickerWrapper,
    DatePickerSectionTitleWrapper,
    DatePickerTitleIconButton,
    DatePickerTitleIcon,
    DatePickerSectionCalendarButtonWrapper,
    DatePickerSectionCalendarBackButton,
} from "./DatepickerBookingStyling";

import moment from "moment-timezone";
import { Datepicker, MbscDatepickerValue, momentTimezone } from "@mobiscroll/react";
import ContinueBtn from "../btn/continueBtn/continueBtn";
import useClickOutside from "../../hook/useClickOutside";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
import useIsDesktopSize from "../../hook/useIsDesktopSize";
import { ListingModel } from "../../interfaces/models/listingModel";

momentTimezone.moment = moment;
interface DatepickerListingInterface extends ListingModel {
    advanceNotice: number;
    advanceNoticeTime: number;
}

interface DatepickerBookingProps {
    handleClickOutside: () => void;
    startDate: string | Date | null;
    endDate: string | Date | null;
    listing: DatepickerListingInterface;
    saveFunc: (arg: Date[]) => Promise<void>;
    cancelFunc: () => void;
    unavailableDates: { date: string; checkOutPossible: boolean }[];
}

export default function DatepickerBooking({ handleClickOutside, startDate, endDate, listing, saveFunc, cancelFunc, unavailableDates }: DatepickerBookingProps) {
    const [dateRange, setDateRange] = useState<MbscDatepickerValue | string[]>([startDate !== "anyArrival" ? startDate : null, endDate !== "anyDeparture" ? endDate : null]);
    const [maxDate, setMaxDate] = useState<Date | null>(null);
    const [minDate, setMinDate] = useState<Date | null>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const isDesktopSize = useIsDesktopSize();
    const wrapperRef = useClickOutside(true, () => {
        if (!isContinueBtnLoading) {
            handleClickOutside();
        }
    });
    const setMaxDateFunc = useCallback((listing: DatepickerListingInterface) => {
        let maxDateIncrementMonths = 0;
        if (listing.availabilityRange === "3-months") {
            maxDateIncrementMonths = 3;
        } else if (listing.availabilityRange === "6-months") {
            maxDateIncrementMonths = 6;
        } else if (listing.availabilityRange === "12-months") {
            maxDateIncrementMonths = 12;
        } else if (listing.availabilityRange === "18-months") {
            maxDateIncrementMonths = 18;
        } else if (listing.availabilityRange === "24-months" || listing.availabilityRange === "all-future-dates") {
            maxDateIncrementMonths = 24;
        }
        let maxDate = null;
        const currentDate = new Date();
        if (listing.availabilityRange) {
            maxDate = new Date(currentDate);
            maxDate.setMonth(maxDate.getMonth() + maxDateIncrementMonths);
        }
        setMaxDate(maxDate);
    }, []);

    const setMinDateFunc = useCallback((listing: DatepickerListingInterface) => {
        let minDate = new Date();
        const time = getTimeInInt(new Date());
        if (listing.advanceNotice > 0) {
            minDate.setDate(minDate.getDate() + listing.advanceNotice);
        } else {
            if (time > listing.advanceNoticeTime) {
                minDate.setDate(minDate.getDate() + 1);
            }
        }
        setMinDate(minDate);
    }, []);

    useEffect(() => {
        setMaxDateFunc(listing);
        setMinDateFunc(listing);
        if (startDate && endDate && startDate !== "anyArrival" && endDate !== "anyDeparture") {
            let startDateObj = new Date(startDate);
            let endDateObj = new Date(endDate);
            setDateRange([startDateObj, endDateObj]);
        }
    }, [endDate, listing, setMaxDateFunc, setMinDateFunc, startDate]);

    const formatMonth = (month: number) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[month];
    };
    const getTimeInInt = (date: Date) => {
        const objDate = new Date(date);
        return objDate.getHours() * 100 + objDate.getMinutes();
    };
    return (
        <AnimationWrapperForPopup>
            <DatePickerSectionWrapper ref={wrapperRef}>
                <DatePickerSectionTitleWrapper>
                    <DatePickerSectionTitle selected={(dateRange as Array<Date | null | string>)[0] && !(dateRange as Array<Date | null | string>)[1] ? false : true}>
                        {dateRange && (dateRange as Array<Date | null | string>)[0] && ((dateRange as Array<Date | null | string>)[0] as string) !== "anyArrival"
                            ? `${String(new Date((dateRange as Array<Date | null | string>)[0] as Date).getDate()).padStart(2, "0")} ${formatMonth(new Date((dateRange as Array<Date | null | string>)[0] as Date).getMonth())}`
                            : "Arrive"}
                    </DatePickerSectionTitle>
                    <DatePickerSectionTitle selected={(dateRange as Array<Date | null | string>)[0] ? true : false}>
                        {dateRange && (dateRange as Array<Date | null | string>)[1] && ((dateRange as Array<Date | null | string>)[1] as string) !== "anyArrival"
                            ? `${String(new Date((dateRange as Array<Date | null | string>)[1] as Date).getDate()).padStart(2, "0")} ${formatMonth(new Date((dateRange as Array<Date | null | string>)[1] as Date).getMonth())}`
                            : "Depart"}
                    </DatePickerSectionTitle>
                </DatePickerSectionTitleWrapper>
                <DatePickerWrapper>
                    <Datepicker
                        select="range"
                        returnFormat="jsdate"
                        value={dateRange}
                        min={minDate ? minDate : undefined}
                        max={maxDate ? maxDate : undefined}
                        timezonePlugin={momentTimezone}
                        dataTimezone={"Australia/Brisbane"}
                        displayTimezone={"Australia/Brisbane"}
                        //if the minStay is 1 that means 1 night, which means the user need to be able to select two days
                        minRange={listing.minimumStay ? listing.minimumStay + 1 : 2}
                        maxRange={listing.maximumStay ? listing.maximumStay + 1 : 366}
                        exclusiveEndDates={false}
                        pages={"auto"}
                        touchUi={!isDesktopSize}
                        animate={false}
                        theme={"material"}
                        themeVariant={"light"}
                        showRangeLabels={false}
                        showOuterDays={false}
                        display={"inline"}
                        invalid={unavailableDates ? unavailableDates : []}
                        rangeEndInvalid={true}
                        inRangeInvalid={false}
                        onChange={(dateRange) => {
                            setDateRange(dateRange.value);
                        }}
                    />
                </DatePickerWrapper>
                <DatePickerSectionCalendarButtonWrapper>
                    <DatePickerSectionCalendarBackButton onClick={cancelFunc} type="button">
                        Cancel
                    </DatePickerSectionCalendarBackButton>
                    <ContinueBtn
                        disabled={!(dateRange as Array<Date | null | string>)[0] || !(dateRange as Array<Date | null | string>)[1] || isContinueBtnLoading}
                        onClick={async () => {
                            setIsContinueBtnLoading(true);
                            await saveFunc(dateRange as Date[]);
                            cancelFunc();
                        }}
                        continueType="button"
                        background={"black"}
                        style={{
                            width: "unset",
                        }}
                        isLoading={isContinueBtnLoading}
                    >
                        Save
                    </ContinueBtn>
                </DatePickerSectionCalendarButtonWrapper>
            </DatePickerSectionWrapper>
        </AnimationWrapperForPopup>
    );
}
