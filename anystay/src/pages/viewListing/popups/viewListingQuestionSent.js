// import {
//     ViewListingQuestionCardWrapper,
//     ViewListingQuestionCardTitleWrapper,
//     ViewListingQuestionCardTitle,
//     ViewListingQuestionCardTitleIcon,
//     ViewListingQuestionTitle,
//     ViewListingQuestionButtonDivider,
//     ViewListingReservationGuestsButtonWrapper,
//     ViewListingReservationGuestsClearButton,
//     ViewListingReservationGuestsDoneButton,
//     ViewListingQuestionSentListingHeader,
//     ViewListingQuestionSentListingImage,
//     ViewListingQuestionSentListingTextWrapper,
//     ViewListingQuestionSentListingTitle,
//     ViewListingQuestionSentListingSubtitle,
//     ViewListingQuestionSentListingPrice,
// } from "../viewListingStyling";
// import { motion } from "framer-motion";

// export default function ViewListingQuestionSent({ questionSentCard, toggleQuestionSentCard, imageURL, listing }) {
//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 10, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: questionSentCard ? 0 : window.innerHeight * 3,
//                     opacity: questionSentCard ? 1 : 0,
//                     visibility: questionSentCard ? "visible" : "hidden",
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%" }}
//                 initial={false}
//             >
//                 <ViewListingQuestionCardWrapper>
//                     <ViewListingQuestionCardTitleWrapper>
//                         <ViewListingQuestionCardTitleIcon
//                             onClick={toggleQuestionSentCard}
//                             src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
//                             alt={"Back arrow"}
//                         />
//                         <ViewListingQuestionCardTitle>Question sent!</ViewListingQuestionCardTitle>
//                     </ViewListingQuestionCardTitleWrapper>
//                     <ViewListingQuestionSentListingHeader>
//                         {imageURL ? <ViewListingQuestionSentListingImage src={imageURL} alt="Listing featured image" /> : null}
//                         <ViewListingQuestionSentListingTextWrapper>
//                             <ViewListingQuestionSentListingTitle>
//                                 {listing.typeOfPlace === "entire-place"
//                                     ? `Entire ${listing.propertyType}`
//                                     : listing.typeOfPlace === "private-room"
//                                         ? `Entire room in ${listing.propertyType}`
//                                         : `Shared room in ${listing.propertyType}`}
//                             </ViewListingQuestionSentListingTitle>
//                             <ViewListingQuestionSentListingSubtitle>{listing.propertyTitle}</ViewListingQuestionSentListingSubtitle>
//                             <ViewListingQuestionSentListingPrice>
//                                 {`$${Number(listing.minimumPrice / 100).toFixed(2)} AUD`}
//                                 <span> / night</span>
//                             </ViewListingQuestionSentListingPrice>
//                         </ViewListingQuestionSentListingTextWrapper>
//                     </ViewListingQuestionSentListingHeader>
//                     <ViewListingQuestionTitle>Select dates</ViewListingQuestionTitle>
//                     <ViewListingQuestionButtonDivider />
//                     <ViewListingReservationGuestsButtonWrapper>
//                         <ViewListingReservationGuestsClearButton type="button" onClick={() => { }}>
//                             Clear
//                         </ViewListingReservationGuestsClearButton>
//                         <ViewListingReservationGuestsDoneButton type="button" onClick={() => { }}>
//                             Reserve
//                         </ViewListingReservationGuestsDoneButton>
//                     </ViewListingReservationGuestsButtonWrapper>
//                 </ViewListingQuestionCardWrapper>
//             </motion.div>
//         </>

//     );
// }
