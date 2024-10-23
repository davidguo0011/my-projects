// import ContinueBtn from "../../../../components/btn/continueBtn/continueBtn";
// import {
//     CouponCodeWrapper,
//     CouponCodeBackButton,
//     CouponCodeBackIcon,
//     CouponCodeTitle,
//     CouponCodeSubtitle,
//     CouponCodeInput,
//     CouponCodeInvalid,
//     CouponCodeButtonWrapper,
//     CreateBookingReservationGuestsClearButton,
// } from "../../createBookingStyling";
// import { useState } from "react";
// import AnimationWrapperForPopup from "../../../../components/animationWrapper/AnimationWrapperForPopup";
// import useClickOutside from "../../../../hook/useClickOutside";

// export default function AddCouponPopup({ couponPopup, toggleCouponCodePopup, couponCodeInputSubmitted, updateCoupon }) {
//     const wrapperRef = useClickOutside(couponPopup, toggleCouponCodePopup);
//     const [couponCodeInput, setCouponCodeInput] = useState(couponCodeInputSubmitted);
//     const [couponCodeInvalid, setCouponCodeInvalid] = useState(false);
//     const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
//     const [errMsg, setErrMsg] = useState("");

//     return (
//         <AnimationWrapperForPopup>
//             <CouponCodeWrapper ref={wrapperRef}>
//                 <CouponCodeBackButton
//                     type="button"
//                     onClick={() => {
//                         toggleCouponCodePopup(false);
//                     }}
//                 >
//                     <CouponCodeBackIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="back button" />
//                 </CouponCodeBackButton>
//                 <CouponCodeTitle>{couponCodeInput ? "Edit a coupon" : "Add a coupon"}</CouponCodeTitle>
//                 <CouponCodeSubtitle>Coupon credits and discounts will be automatically applied</CouponCodeSubtitle>
//                 <CouponCodeInput
//                     type="text"
//                     placeholder="Enter coupon code"
//                     value={couponCodeInput}
//                     onChange={(e) => {
//                         const regex = /^[a-zA-Z0-9]+$/;
//                         if (regex.test(e.target.value)) {
//                             setCouponCodeInvalid(false);
//                             setCouponCodeInput(e.target.value.toUpperCase());
//                         } else if (e.target.value === "") {
//                             setCouponCodeInvalid(false);
//                             setCouponCodeInput("");
//                         }
//                     }}
//                     invalid={couponCodeInvalid}
//                 />
//                 {couponCodeInvalid && <CouponCodeInvalid>{errMsg}</CouponCodeInvalid>}
//                 <CouponCodeButtonWrapper>
//                     <CreateBookingReservationGuestsClearButton
//                         type="button"
//                         onClick={() => {
//                             toggleCouponCodePopup(false);
//                         }}
//                     >
//                         Cancel
//                     </CreateBookingReservationGuestsClearButton>
//                     <ContinueBtn
//                         type="button"
//                         disabled={isContinueBtnLoading}
//                         isLoading={isContinueBtnLoading}
//                         background={"red"}
//                         style={{ width: "unset" }}
//                         onClick={async () => {
//                             setIsContinueBtnLoading(true);
//                             let res = await updateCoupon(couponCodeInput);
//                             if (res.success) {
//                                 toggleCouponCodePopup(false);
//                                 return;
//                             } else {
//                                 if (res.errorCode === "SOMETHING_WENT_WRONG") {
//                                     setErrMsg("Something went wrong, please try again");
//                                 }
//                                 if (res.errorCode === "COUPON_INVALID") {
//                                     setErrMsg("Coupon is invalid");
//                                 }
//                                 if (res.errorCode === "COUPON_INVALID_LOGIN_NEEDED") {
//                                     setErrMsg("Login to apply coupon");
//                                 }
//                                 setCouponCodeInvalid(true);
//                             }
//                             setIsContinueBtnLoading(false);
//                         }}
//                     >
//                         Apply
//                     </ContinueBtn>
//                 </CouponCodeButtonWrapper>
//             </CouponCodeWrapper>
//         </AnimationWrapperForPopup>
//     );
// }

export {};
