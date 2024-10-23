// import { useState } from "react";
// import { callApi } from "../../../../utils/api/api";
// import {
//     YourBookingReportBookingWrapper,
//     YourBookingReportBookingTitleWrapper,
//     YourBookingReportBookingTitle,
//     YourBookingReportBookingMenuItem,
//     YourBookingReportBookingMenuIcon,
//     YourBookingReportBookingMenuText,
//     YourBookingReportBookingMenuTextWrapper,
//     YourBookingReportBookingSubtitle,
// } from "../../yourBookingStyling";
// import LoadingSpinner from "../../../../components/spinner/loadingSpinner/loadingSpinner";
// import useClickOutside from "../../../../hook/useClickOutside";
// import { YourBookingRequestBookingRequest } from "../../yourBooking";
// import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

// const reasons = [
//     { title: "Property not as described", description: "Your place differs from description" },
//     { title: "Travel interruption", description: "You are unable to make this booking" },
//     { title: "Exceptional circumstance", description: "An emergency is preventing your stay" },
//     { title: "Other reason", description: "Please describe your problem" },
// ];

// interface ReasonForCancelPopupProps {
//     accessToken: string;
//     setRefundAmount: (refundAmount: number) => void;
//     bookingRequest: YourBookingRequestBookingRequest;
//     activateCard: (name: string) => void;
//     deactivatePopupCards: () => void;
// }

// const ReasonForCancelPopup: React.FC<ReasonForCancelPopupProps> = ({ accessToken, bookingRequest, activateCard, deactivatePopupCards, setRefundAmount }) => {
//     const [showSpinner, setShowSpinner] = useState(false);
//     const wrapperRef = useClickOutside(true, deactivatePopupCards);

//     const onClickRefundBtn = (res: number) => {
//         activateCard("cancelStayMenuRefundSummary");
//         setRefundAmount(res);
//     };

//     const reasonOnClick = async () => {
//         setShowSpinner(true);
//         await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/cancel/check", {
//             headers: {
//                 Authorization: accessToken,
//                 bookingId: bookingRequest.id,
//             },
//             body: {
//                 bookingRequestID: bookingRequest.id,
//             },
//         })
//             .then(async (res) => {
//                 console.log(res);
//                 onClickRefundBtn(res.refund);
//                 setShowSpinner(false);
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <GlobalPopupContainerCenter ref={wrapperRef} closePopup={deactivatePopupCards} backBtnType={"Arrow"} noContinueBtn={true}>
//             <YourBookingReportBookingWrapper showSpinner={showSpinner} ref={wrapperRef} noContinueBtn={true}>
//                 {showSpinner && <LoadingSpinner />}
//                 {!showSpinner && (
//                     <>
//                         <YourBookingReportBookingTitleWrapper>
//                             <YourBookingReportBookingTitle>Cancel your stay</YourBookingReportBookingTitle>
//                             <YourBookingReportBookingSubtitle>Please select a reason for cancelling, it won’t be shared.</YourBookingReportBookingSubtitle>
//                         </YourBookingReportBookingTitleWrapper>
//                         {reasons.map((reason) => {
//                             return (
//                                 <YourBookingReportBookingMenuItem type="button" onClick={reasonOnClick} key={reason.title}>
//                                     <YourBookingReportBookingMenuTextWrapper>
//                                         <YourBookingReportBookingMenuText>{reason.title}</YourBookingReportBookingMenuText>
//                                         <YourBookingReportBookingMenuText>
//                                             <span>{reason.description}</span>
//                                         </YourBookingReportBookingMenuText>
//                                     </YourBookingReportBookingMenuTextWrapper>
//                                     <YourBookingReportBookingMenuIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Menu item icon" />
//                                 </YourBookingReportBookingMenuItem>
//                             );
//                         })}
//                     </>
//                 )}
//             </YourBookingReportBookingWrapper>
//         </GlobalPopupContainerCenter>
//     );
// };

// export default ReasonForCancelPopup;
export {};
