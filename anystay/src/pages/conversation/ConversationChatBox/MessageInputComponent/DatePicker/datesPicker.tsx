// import { useCallback, useEffect, useState } from "react";
// import {
//     DatePickerSectionWrapper,
//     DatePickerSectionTitle,
//     DatePickerWrapper,
//     DatePickerSectionTitleWrapper,
//     DatePickerSectionCalendarButtonWrapper,
//     DatePickerSectionCalendarBackButton,
// } from "../../../../../components/datepicker/DatepickerBookingStyling.js";

// import moment from "moment-timezone";
// import { Datepicker, momentTimezone } from "@mobiscroll/react";
// import ContinueBtn from "../../../../../components/btn/continueBtn/continueBtn";
// import useClickOutside from "../../../../../hook/useClickOutside";
// import AnimationWrapperForPopupPortal from "../../../../../components/animationWrapper/AnimationWrapperForPopup";

// momentTimezone.moment = moment;

// export default function DatepickerBooking({ handleClickOutside, startDate, endDate, listing, saveFunc, cancelFunc, unavailableDates }) {
//     const [dateRange, setDateRange] = useState([null, null]);
//     const [maxDate, setMaxDate] = useState(null);
//     const [minDate, setMinDate] = useState(null);
//     const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
//     const wrapperRef = useClickOutside(true, () => {
//         if (!isContinueBtnLoading) {
//             handleClickOutside();
//         }
//     });

//     const setMaxDateFunc = useCallback((listing) => {
//         let maxDateIncrementMonths = 0;
//         if (listing.availabilityRange === "3-months") {
//             maxDateIncrementMonths = 3;
//         } else if (listing.availabilityRange === "6-months") {
//             maxDateIncrementMonths = 6;
//         } else if (listing.availabilityRange === "12-months") {
//             maxDateIncrementMonths = 12;
//         } else if (listing.availabilityRange === "18-months") {
//             maxDateIncrementMonths = 18;
//         } else if (listing.availabilityRange === "24-months" || listing.availabilityRange === "all-future-dates") {
//             maxDateIncrementMonths = 24;
//         }
//         let maxDate = null;
//         const currentDate = new Date();
//         if (listing.availabilityRange) {
//             maxDate = new Date(currentDate);
//             maxDate.setMonth(maxDate.getMonth() + maxDateIncrementMonths);
//         }
//         setMaxDate(maxDate);
//     }, []);

//     const setMinDateFunc = useCallback((listing) => {
//         let minDate = new Date();
//         const time = getTimeInInt(new Date());
//         if (listing.advanceNotice > 0) {
//             minDate.setDate(minDate.getDate() + listing.advanceNotice);
//         } else {
//             if (time > listing.advanceNoticeTime) {
//                 minDate.setDate(minDate.getDate() + 1);
//             }
//         }
//         setMinDate(minDate);
//     }, []);

//     useEffect(() => {
//         setMaxDateFunc(listing);
//         setMinDateFunc(listing);
//         if (startDate !== "anyArrival" && endDate !== "anyDeparture") {
//             let startDateObj = new Date(startDate);
//             let endDateObj = new Date(endDate);
//             setDateRange([startDateObj, endDateObj]);
//         }
//     }, [endDate, listing, setMaxDateFunc, setMinDateFunc, startDate]);

//     const formatMonth = (month) => {
//         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         return monthNames[month];
//     };
//     const getTimeInInt = (date) => {
//         const objDate = new Date(date);
//         return objDate.getHours() * 100 + objDate.getMinutes();
//     };

//     return (
//         <AnimationWrapperForPopupPortal>
//             <DatePickerSectionWrapper ref={wrapperRef}>
//                 <DatePickerSectionTitleWrapper>
//                     <DatePickerSectionTitle selected={true}>
//                         {dateRange[0] && dateRange[0] !== "anyArrival" ? `${String(new Date(dateRange[0]).getDate()).padStart(2, "0")} ${formatMonth(new Date(dateRange[0]).getMonth())}` : "Arrive"}
//                     </DatePickerSectionTitle>
//                     <DatePickerSectionTitle selected={false}>
//                         {dateRange[1] && dateRange[1] !== "anyArrival" ? `${String(new Date(dateRange[1]).getDate()).padStart(2, "0")} ${formatMonth(new Date(dateRange[1]).getMonth())}` : "Depart"}
//                     </DatePickerSectionTitle>
//                 </DatePickerSectionTitleWrapper>
//                 <DatePickerWrapper>
//                     <Datepicker
//                         select="range"
//                         returnFormat="jsdate"
//                         value={dateRange}
//                         min={minDate}
//                         max={maxDate}
//                         timezonePlugin={momentTimezone}
//                         dataTimezone={"Australia/Brisbane"}
//                         displayTimezone={"Australia/Brisbane"}
//                         //if the minStay is 1 that means 1 night, which means the user need to be able to select two days
//                         minRange={listing.minimumStay ? listing.minimumStay + 1 : 2}
//                         maxRange={listing.maximumStay ? listing.maximumStay + 1 : 366}
//                         exclusiveEndDates={false}
//                         pages={"auto"}
//                         animate={false}
//                         theme={"material"}
//                         themeVariant={"light"}
//                         showRangeLabels={false}
//                         showOuterDays={false}
//                         display={"inline"}
//                         invalid={unavailableDates}
//                         rangeEndInvalid={true}
//                         inRangeInvalid={false}
//                         onChange={(dateRange) => {
//                             setDateRange(dateRange.value);
//                         }}
//                     />
//                 </DatePickerWrapper>
//                 <DatePickerSectionCalendarButtonWrapper>
//                     <DatePickerSectionCalendarBackButton onClick={cancelFunc} type="button">
//                         Cancel
//                     </DatePickerSectionCalendarBackButton>
//                     <ContinueBtn
//                         disabled={!dateRange[0] || !dateRange[1] || isContinueBtnLoading}
//                         onClick={async () => {
//                             setIsContinueBtnLoading(true);
//                             await saveFunc(dateRange);
//                             cancelFunc();
//                         }}
//                         type="button"
//                         background={"red"}
//                         style={{
//                             width: "unset",
//                         }}
//                         isLoading={isContinueBtnLoading}
//                     >
//                         Save
//                     </ContinueBtn>
//                 </DatePickerSectionCalendarButtonWrapper>
//             </DatePickerSectionWrapper>
//         </AnimationWrapperForPopupPortal>
//     );
// }
export {};
