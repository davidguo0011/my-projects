// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { searchFiltersSelector, searchQuerySelector } from "../../../state/selectors/searchQuery";

// // Import styling
// import {
//     SearchListingCalendarPopupWrapper,
//     SearchListingCalendarPopupTitleWrapper,
//     SearchListingCalendarPopupTitle,
//     SearchListingCalendarPopupFooter,
//     SearchListingCalendarPopupClearButton,
//     SearchListingCalendarPopupSaveButton,
// } from "../searchListingStyling";

// // Setup timezone
// import { Datepicker, momentTimezone } from "@mobiscroll/react";

// import moment from "moment-timezone";

// momentTimezone.moment = moment;

// export default function SearchListingCalendarPopup({ selected, toggleSelected, dateRange, updateSearchDates }) {
//     const [dateRangeData, setDateRangeData] = useState(dateRange);
//     const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
//     const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);

//     return (
//         <motion.div
//             initial={false}
//             animate={{
//                 y: selected ? 0 : "100vh",
//                 visibility: selected ? "visible" : "hidden",
//                 display: selected ? "block" : "none",
//             }}
//             style={{
//                 position: "absolute",
//                 zIndex: 4,
//                 width: "100%",
//                 height: "100%",
//             }}
//         >
//             <div
//                 style={{
//                     height: "100%",
//                     width: "100%",
//                     position: "fixed",
//                     left: 0,
//                     bottom: 0,
//                     zIndex: 10,
//                     background: "rgba(0, 0, 0, 0.25)",
//                     backdropFilter: "blur(0px)",
//                 }}
//             ></div>
//             <SearchListingCalendarPopupWrapper>
//                 <SearchListingCalendarPopupTitleWrapper>
//                     <SearchListingCalendarPopupTitle selected={true}>Arrive</SearchListingCalendarPopupTitle>
//                     <SearchListingCalendarPopupTitle selected={false}>Depart</SearchListingCalendarPopupTitle>
//                 </SearchListingCalendarPopupTitleWrapper>
//                 <Datepicker
//                     select="range"
//                     returnFormat="jsdate"
//                     value={dateRange}
//                     timezonePlugin={momentTimezone}
//                     dataTimezone={"utc"}
//                     displayTimezone={"Australia/Brisbane"}
//                     exclusiveEndDates={false}
//                     minRange={2}
//                     pages={"auto"}
//                     animate={false}
//                     theme={"material"}
//                     themeVariant={"light"}
//                     showRangeLabels={false}
//                     showOuterDays={false}
//                     display={"inline"}
//                     onChange={(dateRange) => {
//                         if (dateRange.value[0] && dateRange.value[1]) {
//                             updateSearchDates(dateRange.value[0], dateRange.value[1]);
//                             setDateRangeData(dateRange.value)
//                         } else {
//                             setDateRangeData(dateRange.value)
//                         }
//                     }}
//                 />
//                 <SearchListingCalendarPopupFooter>
//                     <SearchListingCalendarPopupClearButton
//                         type="button"
//                         onClick={() => {
//                             toggleSelected();
//                         }}
//                     >
//                         Clear
//                     </SearchListingCalendarPopupClearButton>
//                     <SearchListingCalendarPopupSaveButton type="button" onClick={toggleSelected}>
//                         Save
//                     </SearchListingCalendarPopupSaveButton>
//                 </SearchListingCalendarPopupFooter>
//             </SearchListingCalendarPopupWrapper>
//         </motion.div>
//     )
// }
