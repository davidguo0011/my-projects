// import { motion } from 'framer-motion'
// import {
//     EditListingUpdateCardWrapper, EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitle, EditListingUpdateCardTitleIcon, EditListingUpdateCardContentTitle,
//     EditListingUpdateCardContentSubtitle, EditListingUpdateCardButtonWrapper, EditListingUpdateCardCancelButton, EditListingUpdateCardSubmitButton,
// } from '../editListingStyling'
// import useClickOutside from '../../../hook/useClickOutside'
// export default function UpdateDateBlocking({ updateDateBlockingCard, deactivateUpdateCards }) {
//     //update function missing
//     const wrapperRef = useClickOutside(updateDateBlockingCard, deactivateUpdateCards);

//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: updateDateBlockingCard ? 0 : window.innerHeight * 2,
//                     opacity: updateDateBlockingCard ? 1 : 0
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%", gridRow: "1/2", gridColumn: "1/2" }}
//                 initial={false}
//             >
//                 <EditListingUpdateCardWrapper ref={wrapperRef}> // Changed to GlobalPopupContainerRight
//                     <EditListingUpdateCardTitleWrapper>
//                         <EditListingUpdateCardTitleIcon onClick={() => deactivateUpdateCards()} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Back button" />
//                         <EditListingUpdateCardTitle>Date blocking</EditListingUpdateCardTitle>
//                     </EditListingUpdateCardTitleWrapper>
//                     <EditListingUpdateCardContentTitle>Edit date blocking</EditListingUpdateCardContentTitle>
//                     <EditListingUpdateCardContentSubtitle>Block or unblock dates that are booked already</EditListingUpdateCardContentSubtitle>
//                     <EditListingUpdateCardButtonWrapper>
//                         <EditListingUpdateCardCancelButton onClick={() => deactivateUpdateCards()}>Cancel</EditListingUpdateCardCancelButton>
//                         <EditListingUpdateCardSubmitButton>Save</EditListingUpdateCardSubmitButton>
//                     </EditListingUpdateCardButtonWrapper>
//                 </EditListingUpdateCardWrapper>
//             </motion.div>
//         </>
//     )
// }
export {};
