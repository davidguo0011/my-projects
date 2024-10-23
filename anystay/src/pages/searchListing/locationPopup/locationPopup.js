// import { Component, useState } from "react"
// import { motion } from "framer-motion";

// // Import styling
// import {
//     SearchListingCalendarPopupWrapper,
//     MobileNavbarAutocompleteInputWrapper,
//     MobileNavbarAutocompleteInput,
//     MobileNavbarSearchMenuSearchIcon,
// } from "../searchListingStyling";
// import { useRecoilState } from "recoil";
// import { placeIdSelector } from "../../../state/selectors/searchQuery";

// export default function SearchListingLocationPopup(props) {
//     const [input, setInput] = useState(null);
//     const [placeId, setPlaceId] = useRecoilState(placeIdSelector)
//     return (
//         <motion.div
//             initial={false}
//             animate={{
//                 y: props.selected ? 0 : "100vh",
//                 visibility: props.selected ? "visible" : "hidden",
//                 display: props.selected ? "block" : "none",
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
//                 <MobileNavbarAutocompleteInputWrapper>
//                     <MobileNavbarAutocompleteInput
//                         apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//                         onChange={(e) => setInput(e.target.value)}
//                         onPlaceSelected={(place) => {
//                             props.updateSearchLocation(place);
//                         }}
//                         placeholder={"Enter a city, suburb or street"}
//                         options={{
//                             types: ["(regions)"],
//                             componentRestrictions: { country: "au" },
//                         }}
//                     />
//                     <MobileNavbarSearchMenuSearchIcon
//                         onClick={() => props.toggleLocationPopup()}
//                         src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"}
//                         alt={"Search menu back button"}
//                     />
//                 </MobileNavbarAutocompleteInputWrapper>
//             </SearchListingCalendarPopupWrapper>
//         </motion.div>
//     )
// }
