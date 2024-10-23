// import { useState, useEffect, useCallback } from "react";
// import {
//     CreateBookingRequestedWrapper,
//     CreateBookingRequestedTitleWrapper,
//     CreateBookingRequestedTitle,
//     CreateBookingRequestedHeaderWrapper,
//     CreateBookingRequestedHeaderImage,
//     CreateBookingRequestedHeaderTextWrapper,
//     CreateBookingRequestedHeaderText,
//     CreateBookingMessageHostTitle,
//     CreateBookingMessageHostSubtitle,
//     CreateBookingMessageInput,
//     CreateBookingButton,
//     CreateBookingDivider,
//     CreateBookingRequestedProfilePicture,
//     CreateBookingRequestedProfileHeaderWrapper,
//     CreateBookingSendMessageDivider,
//     CreateBookingSendMessageText,
//     CreateBookingRequestedDesktopListingWrapper,
//     CreateBookingRequestedDesktopContentWrapper,
//     CreateBookingRequestedDesktopListingDateTextInfo,
// } from "./createBookingRequestedStyling";
// import { Storage, API } from "aws-amplify";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useStripe } from "@stripe/react-stripe-js";
// import { useHistory, useParams } from "react-router-dom";
// import { userModelSelector } from "../../state/selectors/userModel";
// import { useRecoilState } from "recoil";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// export default function CreateBookingRequested() {
//     const [bookingRequest, setBookingRequest] = useState(null);
//     const [bookingListing, setBookingListing] = useState(null);
//     const [firstName, setFirstName] = useState(null);
//     const [profilePicture, setProfilePicture] = useState(null);
//     const [propertyImage, setPropertyImage] = useState(null);
//     const [message, setMessage] = useState("");
//     const history = useHistory();
//     const { id } = useParams();
//     const [userModel, setUserModel] = useRecoilState(userModelSelector);

//     const initBookingData = useCallback(async () => {
//         let bookingData = await API.post("core", "/core/api/bookingrequest/get", { body: { id: id } });
//         bookingData = bookingData.body;
//         const profilePicture = await Storage.get(bookingData.bookingRequestHost.profilePicture);
//         setBookingRequest(bookingData.bookingRequest);
//         setBookingListing(bookingData.bookingRequestListing);
//         setFirstName(bookingData.bookingRequestHostFirstName);
//         setProfilePicture(profilePicture);
//         const propertyImage = await Storage.get(bookingData.bookingRequestListing.listingImages[0]);
//         setPropertyImage(propertyImage);
//     }, [id]);

//     useEffect(() => {
//         initBookingData();
//     }, [initBookingData]);

//     const getTimeUntilArrival = () => {
//         let currentTime = new Date();
//         let expireTime = new Date(bookingRequest.arrivalDate);
//         let hours = Math.round((expireTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60));
//         if (hours > 24) {
//             return `${Math.floor(hours / 24)} days`;
//         } else {
//             return `${Math.floor(hours)} hours`;
//         }
//     };

//     const getPropertyType = (typeOfPlace) => {
//         switch (typeOfPlace) {
//             case "entire-place":
//                 return "Entire home";
//             case "private-room":
//                 return "Private room";
//             case "shared-room":
//                 return "shared-room";
//             default:
//                 return "Home";
//         }
//     };

//     const sendMessage = async () => {
//         await API.post("core", "/core/user/guest/message/create", {
//             body: { author: userModel.id, body: message, conversationmodelID: bookingRequest.conversationmodelID, userhostmodelID: bookingRequest.userhostmodelID },
//         }).then(() => {
//             history.push(`/conversation/${bookingRequest.conversationmodelID}`);
//         });
//     };

//     if (!bookingRequest) return null;

//     return (
//         <CreateBookingRequestedWrapper>
//             <CreateBookingRequestedDesktopContentWrapper>
//                 <CreateBookingRequestedTitleWrapper>
//                     <CreateBookingRequestedTitle>Stay confirmed</CreateBookingRequestedTitle>
//                 </CreateBookingRequestedTitleWrapper>
//                 <CreateBookingRequestedProfileHeaderWrapper>
//                     <CreateBookingRequestedProfilePicture src={profilePicture} alt="profile picture" />
//                     <CreateBookingMessageHostTitle>{firstName}</CreateBookingMessageHostTitle>
//                 </CreateBookingRequestedProfileHeaderWrapper>
//                 <CreateBookingMessageHostSubtitle>
//                     <strong>You're arriving in {getTimeUntilArrival()}!</strong> You can send your host a message to introduce yourself. Let them know why you’re staying and any special requests.
//                 </CreateBookingMessageHostSubtitle>
//                 <CreateBookingSendMessageDivider />
//                 <CreateBookingSendMessageText>Send a message</CreateBookingSendMessageText>
//                 <CreateBookingMessageInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
//                 <Elements stripe={stripePromise}>
//                     <PaymentStatus bookingRequest={bookingRequest} />
//                 </Elements>
//                 <CreateBookingDivider />
//                 <CreateBookingButton type="button" onClick={sendMessage()}>
//                     Continue
//                 </CreateBookingButton>
//             </CreateBookingRequestedDesktopContentWrapper>
//             <CreateBookingRequestedDesktopListingWrapper>
//                 <CreateBookingRequestedHeaderWrapper>
//                     <CreateBookingRequestedHeaderImage src={propertyImage} alt="Featured image of booking" />
//                     <CreateBookingRequestedHeaderTextWrapper>
//                         <CreateBookingRequestedHeaderText style={{ marginBottom: "12px" }}>{getPropertyType(bookingListing.typeOfPlace)}</CreateBookingRequestedHeaderText>
//                         <CreateBookingRequestedHeaderText>
//                             <span>{bookingListing.propertyTitle}</span>
//                         </CreateBookingRequestedHeaderText>
//                     </CreateBookingRequestedHeaderTextWrapper>
//                     <CreateBookingRequestedDesktopListingDateTextInfo>{`${new Date(bookingRequest.startDate).toLocaleDateString("au", {
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric",
//                     })} - ${new Date(bookingRequest.endDate).toLocaleDateString("au", { month: "short", day: "numeric", year: "numeric" })}`}</CreateBookingRequestedDesktopListingDateTextInfo>
//                     <CreateBookingRequestedDesktopListingDateTextInfo>{bookingRequest.guests[0]} adults</CreateBookingRequestedDesktopListingDateTextInfo>
//                 </CreateBookingRequestedHeaderWrapper>
//             </CreateBookingRequestedDesktopListingWrapper>
//         </CreateBookingRequestedWrapper>
//     );
// }

// const PaymentStatus = ({ bookingRequest }) => {
//     const stripe = useStripe();
//     const [message, setMessage] = useState(null);

//     useEffect(() => {
//         if (!stripe) {
//             return;
//         }

//         // Retrieve the "payment_intent_client_secret" query parameter appended to
//         // your return_url by Stripe.js
//         const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

//         // Retrieve the PaymentIntent
//         stripe.retrievePaymentIntent(clientSecret).then(async ({ paymentIntent }) => {
//             await API.post("core", "/core/api/payment/model/create", {
//                 body: {
//                     bookingRequestID: bookingRequest.id,
//                     paymentIntentID: paymentIntent.id,
//                     paymentMethodID: paymentIntent.payment_method,
//                     paymentStatus: paymentIntent.status,
//                     paymentAmount: bookingRequest.bookingAmount * 100,
//                     paymentAmountIncludingServiceFee: bookingRequest.bookingAmountIncludingServiceFee * 100,
//                     paymentCreatedAt: paymentIntent.created,
//                     guestusermodelID: bookingRequest.usermodelID,
//                     hostusermodelID: bookingRequest.userhostmodelID,
//                 },
//             }).then((res) => console.log(res));
//             switch (paymentIntent.status) {
//                 case "succeeded":
//                     setMessage("Success! Payment received.");
//                     break;
//                 case "processing":
//                     setMessage("Payment processing. We'll update you when payment is received.");
//                     break;
//                 case "requires_capture":
//                     setMessage("Payment on hold. We'll capture it once your booking is accepted.");
//                     break;
//                 case "requires_payment_method":
//                     setMessage("Payment failed. Please try another payment method.");
//                     break;
//                 default:
//                     setMessage("Something went wrong.");
//                     break;
//             }
//         });
//     }, [stripe, bookingRequest]);

//     return <p>{message}</p>;
// };

export {};
