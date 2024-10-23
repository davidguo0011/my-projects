//looks like this component is deprecated

// import React, { Component } from 'react'
// import { motion } from 'framer-motion'
// import {
//     EditListingUpdateCardWrapper, EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitleIcon, EditListingUpdateCardContentTitle,
//     EditListingUpdateCardContentSubtitle, EditListingUpdateCardButtonWrapper, EditListingUpdateCardCancelButton, EditListingUpdateCardSubmitButton,
//     EditListingUpdateCardSelectWrapper,
// } from '../editListingStyling'
// import { Datepicker } from '@mobiscroll/react'
// import useClickOutside from '../../../hook/useClickOutside'

// export default function UpdateUnavailableDates({ updateUnavailableDatesCard, deactivateUpdateCards }) {
//     const wrapperRef = useClickOutside(updateUnavailableDatesCard, deactivateUpdateCards)
//     const [selectedDays, setSelectedDays] = useState([])

//     const saveUnavailableDates = async () => {
//         let formattedUnavailableDates = []

//         this.state.selectedDays.forEach((date) => {
//             formattedUnavailableDates.push(date)
//         })
//         this.props.updateUnavailableDates(formattedUnavailableDates.sort((a, b) => new Date(a) - new Date(b)))
//     }

//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: updateUnavailableDatesCard ? 0 : window.innerHeight * 2,
//                     opacity: updateUnavailableDatesCard ? 1 : 0
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%", gridRow: "1/2", gridColumn: "1/2" }}
//                 initial={false}
//             >
//                 <EditListingUpdateCardWrapper style={{ minHeight: "620px" }} ref={wrapperRef}> // Changed to GlobalPopupContainerRight
//                     <EditListingUpdateCardTitleWrapper>
//                         <EditListingUpdateCardTitleIcon onClick={() => deactivateUpdateCards()} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Back button" />
//                     </EditListingUpdateCardTitleWrapper>
//                     <EditListingUpdateCardContentTitle>Unavailable dates</EditListingUpdateCardContentTitle>
//                     <EditListingUpdateCardContentSubtitle style={{ margin: 0 }}>Select dates that should not be available for guests to book.</EditListingUpdateCardContentSubtitle>
//                     <EditListingUpdateCardSelectWrapper>
//                         <Datepicker
//                             select="date"
//                             returnFormat="jsdate"
//                             value={selectedDays}
//                             multiple={true}
//                             selectMultiple={true}
//                             animate={false}
//                             min={new Date()}
//                             theme={'material'}
//                             display={'inline'}
//                             onChange={(dateRange) => {
//                                 setSelectedDays(dateRange.value)
//                             }}
//                         />
//                     </EditListingUpdateCardSelectWrapper>
//                     <EditListingUpdateCardButtonWrapper>
//                         <EditListingUpdateCardCancelButton onClick={() => deactivateUpdateCards()}>Cancel</EditListingUpdateCardCancelButton>
//                         <EditListingUpdateCardSubmitButton onClick={() => {
//                             saveUnavailableDates()
//                         }}>Save</EditListingUpdateCardSubmitButton>
//                     </EditListingUpdateCardButtonWrapper>
//                 </EditListingUpdateCardWrapper>
//             </motion.div>
//         </>
//     )
// }
export {};
