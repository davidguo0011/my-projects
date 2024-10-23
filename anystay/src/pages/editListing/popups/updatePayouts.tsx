// import { motion } from 'framer-motion'
// import {
//     EditListingUpdateCardWrapper, EditListingUpdateCardButtonWrapper, EditListingUpdateCardCancelButton,
//     EditListingNoticePopupTitleWrapper, EditListingNoticePopupTitle, EditListingNoticeIcon, EditListingNoticeTitle,
//     EditListingNoticeSubtitle, EditListingUpdateCardConnectButton,
// } from '../editListingStyling'
// import useClickOutside from '../../../hook/useClickOutside'

// export default function ViewListingConnectPayoutsPopup({ updateStripeSettingsCard, deactivateUpdateCards }) {
//     const wrapperRef = useClickOutside(updateStripeSettingsCard, deactivateUpdateCards)
//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <motion.div
//                 animate={{
//                     y: updateStripeSettingsCard ? 0 : window.innerHeight * 2,
//                     opacity: updateStripeSettingsCard ? 1 : 0
//                 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%", gridRow: "1/2", gridColumn: "1/2" }}
//                 initial={false}
//             >
//                 <EditListingUpdateCardWrapper ref={wrapperRef}> // Changed to GlobalPopupContainerRight
//                     <EditListingNoticePopupTitleWrapper>
//                         <EditListingNoticePopupTitle>Activate listing</EditListingNoticePopupTitle>
//                     </EditListingNoticePopupTitleWrapper>
//                     <EditListingNoticeIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="" />
//                     <EditListingNoticeTitle>Connect payouts</EditListingNoticeTitle>
//                     <EditListingNoticeSubtitle>You must connect a payout method to activate your listings.</EditListingNoticeSubtitle>
//                     <EditListingUpdateCardButtonWrapper>
//                         <EditListingUpdateCardCancelButton onClick={() => deactivateUpdateCards()}>Cancel</EditListingUpdateCardCancelButton>
//                         <EditListingUpdateCardConnectButton to={"/payout-settings"}>Connect</EditListingUpdateCardConnectButton>
//                     </EditListingUpdateCardButtonWrapper>
//                 </EditListingUpdateCardWrapper>
//             </motion.div>
//         </>
//     )
// }
export {};
