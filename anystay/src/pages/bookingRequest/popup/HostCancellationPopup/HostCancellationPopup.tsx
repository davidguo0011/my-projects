// import {
//     HostCancellationPopupWrapper,
//     HostCancellationPopupTitle,
//     HostCancellationPopupSubtitle,
//     HostCancellationPopupOptionWrapper,
//     HostCancellationPopupOptionTextWrapper,
//     HostCancellationPopupOptionTextTitle,
//     HostCancellationPopupOptionTextSubtitle,
//     HostCancellationPopupOptionButton,
//     HostCancellationPopupOptionButtonIcon,
// } from "../../bookingRequestStyling";
// import useClickOutside from "../../../../hook/useClickOutside";
// import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

// interface HostCancellationPopupProps {
//     toggleCancelBookingPopup: (arg: boolean) => void;
//     updateReasonCancelled: (arg: string) => void;
//     togglePayoutDetailsPopup: (arg: boolean) => void;
// }

// const HostCancellationPopup: React.FC<HostCancellationPopupProps> = ({ toggleCancelBookingPopup, updateReasonCancelled, togglePayoutDetailsPopup }) => {
//     const wrapperRef = useClickOutside(true, () => {
//         toggleCancelBookingPopup(false);
//     });
//     return (
//         <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={() => toggleCancelBookingPopup(false)} noContinueBtn={true}>
//             <HostCancellationPopupWrapper>
//                 <HostCancellationPopupTitle>Cancel booking</HostCancellationPopupTitle>
//                 <HostCancellationPopupSubtitle>Please select a reason for cancelling, it won't be shared.</HostCancellationPopupSubtitle>
//                 <HostCancellationPopupOptionWrapper
//                     onClick={() => {
//                         updateReasonCancelled("Guest is having problems paying");
//                         toggleCancelBookingPopup(false);
//                         togglePayoutDetailsPopup(true);
//                     }}
//                 >
//                     <HostCancellationPopupOptionTextWrapper>
//                         <HostCancellationPopupOptionTextTitle>Payment related</HostCancellationPopupOptionTextTitle>
//                         <HostCancellationPopupOptionTextSubtitle>Guest is having problems paying</HostCancellationPopupOptionTextSubtitle>
//                     </HostCancellationPopupOptionTextWrapper>
//                     <HostCancellationPopupOptionButton>
//                         <HostCancellationPopupOptionButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="arrow icon" />
//                     </HostCancellationPopupOptionButton>
//                 </HostCancellationPopupOptionWrapper>
//                 <HostCancellationPopupOptionWrapper
//                     onClick={() => {
//                         updateReasonCancelled("Guest is violating house rules");
//                         toggleCancelBookingPopup(false);
//                         togglePayoutDetailsPopup(true);
//                     }}
//                 >
//                     <HostCancellationPopupOptionTextWrapper>
//                         <HostCancellationPopupOptionTextTitle>Policy related</HostCancellationPopupOptionTextTitle>
//                         <HostCancellationPopupOptionTextSubtitle>Guest is violating house rules</HostCancellationPopupOptionTextSubtitle>
//                     </HostCancellationPopupOptionTextWrapper>
//                     <HostCancellationPopupOptionButton>
//                         <HostCancellationPopupOptionButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="arrow icon" />
//                     </HostCancellationPopupOptionButton>
//                 </HostCancellationPopupOptionWrapper>
//                 <HostCancellationPopupOptionWrapper
//                     onClick={() => {
//                         updateReasonCancelled("An emergency is affecting your booking");
//                         toggleCancelBookingPopup(false);
//                         togglePayoutDetailsPopup(true);
//                     }}
//                 >
//                     <HostCancellationPopupOptionTextWrapper>
//                         <HostCancellationPopupOptionTextTitle>Exceptional circumstance</HostCancellationPopupOptionTextTitle>
//                         <HostCancellationPopupOptionTextSubtitle>An emergency is affecting your booking</HostCancellationPopupOptionTextSubtitle>
//                     </HostCancellationPopupOptionTextWrapper>
//                     <HostCancellationPopupOptionButton>
//                         <HostCancellationPopupOptionButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="arrow icon" />
//                     </HostCancellationPopupOptionButton>
//                 </HostCancellationPopupOptionWrapper>
//                 <HostCancellationPopupOptionWrapper
//                     onClick={() => {
//                         updateReasonCancelled("Please describe your problem");
//                         toggleCancelBookingPopup(false);
//                         togglePayoutDetailsPopup(true);
//                     }}
//                 >
//                     <HostCancellationPopupOptionTextWrapper>
//                         <HostCancellationPopupOptionTextTitle>Other reasons</HostCancellationPopupOptionTextTitle>
//                         <HostCancellationPopupOptionTextSubtitle>Please describe your problem</HostCancellationPopupOptionTextSubtitle>
//                     </HostCancellationPopupOptionTextWrapper>
//                     <HostCancellationPopupOptionButton>
//                         <HostCancellationPopupOptionButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="arrow icon" />
//                     </HostCancellationPopupOptionButton>
//                 </HostCancellationPopupOptionWrapper>
//             </HostCancellationPopupWrapper>
//         </GlobalPopupContainerCenter>
//     );
// };
// export default HostCancellationPopup;
export {};
