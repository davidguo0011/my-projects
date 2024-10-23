// import { motion } from 'framer-motion'
// import {
//     EditListingUpdateCardWrapper, EditListingUpdateCardButtonWrapper, EditListingUpdateCardCancelButton,
//     EditListingUpdateCardSubmitButton, EditListingNoticePopupTitleWrapper, EditListingNoticePopupTitle, EditListingNoticeIcon,
//     EditListingNoticeTitle, EditListingNoticeSubtitle,
// } from '../editListingStyling'
// import useClickOutside from '../../../hook/useClickOutside'

// export default function UpdateAddStraID({ updateListingAddStraIDCard, deactivateUpdateCards, activateCard }) {
//     const wrapperRef = useClickOutside(updateListingAddStraIDCard, deactivateUpdateCards);
//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: updateListingAddStraIDCard ? 0 : window.innerHeight * 2,
//                     opacity: updateListingAddStraIDCard ? 1 : 0
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%", gridRow: "1/2", gridColumn: "1/2" }}
//                 initial={false}
//             >
//                 <EditListingUpdateCardWrapper ref={wrapperRef}> // Changed to GlobalPopupContainerRight
//                     <EditListingNoticePopupTitleWrapper>
//                         <EditListingNoticePopupTitle>STRA ID</EditListingNoticePopupTitle>
//                     </EditListingNoticePopupTitleWrapper>
//                     <EditListingNoticeIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="" />
//                     <EditListingNoticeTitle>Add STRA ID</EditListingNoticeTitle>
//                     <EditListingNoticeSubtitle>You must add a STRA ID in order  to activate your listing.</EditListingNoticeSubtitle>
//                     <EditListingUpdateCardButtonWrapper>
//                         <EditListingUpdateCardCancelButton onClick={deactivateUpdateCards}>Cancel</EditListingUpdateCardCancelButton>
//                         <EditListingUpdateCardSubmitButton onClick={() => {
//                             activateCard("updateStraIDCard")
//                         }}>Add</EditListingUpdateCardSubmitButton>
//                     </EditListingUpdateCardButtonWrapper>
//                 </EditListingUpdateCardWrapper>
//             </motion.div>
//         </>
//     )
// }
export {};
