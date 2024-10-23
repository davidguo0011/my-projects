// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//     EditListingUpdateCardWrapper, EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitle, EditListingUpdateCardTitleIcon, EditListingUpdateCardContentTitle,
//     EditListingUpdateCardContentSubtitle, EditListingUpdateCardButtonWrapper, EditListingUpdateCardCancelButton, EditListingUpdateCardSubmitButton, EditListingUpdateCardContentInputCheckbox, EditListingUpdateCardContentInputLabel,
//     EditListingUpdateCardContentInputCheckboxWrapper,
// } from '../editListingStyling'
// import useClickOutside from '../../../hook/useClickOutside'

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// export default function UpdateRestrictedDays({ updateRestrictedDaysCard, deactivateUpdateCards }) {
//     const wrapperRef = useClickOutside(updateRestrictedDaysCard, deactivateUpdateCards);
//     const [restrictedDays, setRestrictedDays] = useState([]);

//     //missing update function

//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: updateRestrictedDaysCard ? 0 : window.innerHeight * 2,
//                     opacity: updateRestrictedDaysCard ? 1 : 0
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%", gridRow: "1/2", gridColumn: "1/2" }}
//                 initial={false}
//             >
//                 <EditListingUpdateCardWrapper ref={wrapperRef}> // Changed to GlobalPopupContainerRight
//                     <EditListingUpdateCardTitleWrapper>
//                         <EditListingUpdateCardTitleIcon onClick={() => deactivateUpdateCards()} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Back button" />
//                         <EditListingUpdateCardTitle>Restricted days</EditListingUpdateCardTitle>
//                     </EditListingUpdateCardTitleWrapper>
//                     <EditListingUpdateCardContentTitle>Edit your restricted days</EditListingUpdateCardContentTitle>
//                     <EditListingUpdateCardContentSubtitle style={{ maxWidth: "180px" }}>Guests cannot check in on selected days</EditListingUpdateCardContentSubtitle>
//                     <EditListingUpdateCardContentInputCheckboxWrapper>
//                         {days.map((day) => {
//                             return (
//                                 <EditListingUpdateCardContentInputLabel
//                                     control={<EditListingUpdateCardContentInputCheckbox value={restrictedDays.includes(day)} onChange={(e) => {
//                                         if (restrictedDays.includes(day)) {
//                                             setRestrictedDays(restrictedDays.filter((item) => item !== day))
//                                         } else {
//                                             setRestrictedDays(prevState => [...prevState, day])
//                                         }
//                                     }} label={day} />}
//                                     label={day}
//                                 />
//                             )
//                         })}
//                     </EditListingUpdateCardContentInputCheckboxWrapper>

//                     <EditListingUpdateCardButtonWrapper>
//                         <EditListingUpdateCardCancelButton onClick={() => deactivateUpdateCards()}>Cancel</EditListingUpdateCardCancelButton>
//                         <EditListingUpdateCardSubmitButton onClick={() => deactivateUpdateCards()}>Save</EditListingUpdateCardSubmitButton>
//                     </EditListingUpdateCardButtonWrapper>
//                 </EditListingUpdateCardWrapper>
//             </motion.div>
//         </>
//     )
// }
export {};
