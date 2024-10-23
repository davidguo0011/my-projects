// import React, { Fragment, useState } from 'react';
// import {
//     AddCardElementButtonWrapper, AddCardElementCancelButton, AddCardElementSaveButton,
// } from '../paymentSettingsStyling'

// import {
//     useStripe,
//     useElements,
//     CardElement
// } from "@stripe/react-stripe-js";
// import ContinueBtn from '../../../components/btn/continueBtn/continueBtn';
// export default function CardForm(props) {
//     const elements = useElements()
//     const stripe = useStripe()
//     const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
//     const [submitting, setSubmitting] = useState(false);

//     let onSubmit = async (event) => {
//         event.preventDefault()
//         if (submitting) return;
//         setIsContinueBtnLoading(true)
//         setSubmitting(true)
//         await stripe.confirmCardSetup(
//             props.cardClientSecret,
//             {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                 }
//             }
//         )
//             .then(async (res) => {
//                 await props.fetchPayments();
//                 setSubmitting(false);
//                 setIsContinueBtnLoading(false);
//                 props.toggleAddCard();
//                 console.log(res);

//             })
//             .catch((err) => {
//                 console.log(err)
//                 setSubmitting(false)
//                 setIsContinueBtnLoading(false)
//             })
//     }
//     return (
//         <Fragment>
//             <div style={{ height: "50px", borderRadius: "10px", paddingTop: "14px", paddingLeft: "8px", border: "1px solid ${ColorTheme.Grey1.color}" }}>
//                 <CardElement options={{ hidePostalCode: true, style: { base: { fontSize: '14px', fontWeight: '400' } } }} />
//             </div>
//             <AddCardElementButtonWrapper style={{ width: "100%" }}>
//                 <AddCardElementCancelButton type="button" onClick={() => props.toggleAddCard()}>Back</AddCardElementCancelButton>
//                 <ContinueBtn type="button" style={{ width: "156px" }} onClick={(e) => onSubmit(e)} background={"red"} isLoading={isContinueBtnLoading} disabled={!stripe}>Done</ContinueBtn>
//             </AddCardElementButtonWrapper>
//         </Fragment>
//     )

// }
