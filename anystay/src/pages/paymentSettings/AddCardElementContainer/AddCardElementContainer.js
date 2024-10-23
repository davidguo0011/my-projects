// import React, { Component, Fragment } from 'react';
// import {
//     AddCardElementButtonWrapper, AddCardElementCancelButton, AddCardElementSaveButton, AddCardElementWrapperContainer, PaymentSettingsUnavailableIcon, PaymentSettingsUnavailableTitle, PaymentSettingsUnavailableSubtitle,
//     PaymentSettingsUnavailableBackButton, PaymentSettingsUnavailableBackIcon
// } from '../paymentSettingsStyling.js'
// import { API } from 'aws-amplify'

// export default class AddCardElementContainer extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             cardClientSecret: null,
//             // bankAccountClientSecret: null,
//             appearance: {
//                 theme: 'stripe',
//                 variables: {
//                     borderRadius: "10px",
//                 },
//             }
//         }

//         this.cardPopupRef = React.createRef()
//     }

//     componentWillMount = () => {
//         document.addEventListener("mousedown", this.handleClickOutside)
//     }

//     componentWillUnmount = () => {
//         document.removeEventListener("mousedown", this.handleClickOutside)
//     }

//     handleClickOutside = async (event) => {
//         if (this.props.addCard && this.cardPopupRef && !this.cardPopupRef.current.contains(event.target)) {
//             this.props.toggleAddCard()
//         }
//     }

//     componentDidMount = async () => {
//         let cardIntent = await API.put(`${process.env.REACT_APP_ENV}-anystay-user`, "user/payment/method", {
//             headers: {
//                 Authorization: this.props.accessToken
//             },
//             body: {
//                 stripeCustomerID: this.props.userModel.stripeCustomerID
//             }
//         })

//         await this.setState({
//             cardClientSecret: cardIntent.body.setupIntent.client_secret,
//         })
//     }

//     render() {
//         return (
//             <Fragment>
//                 {this.props.addCard && (
//                     <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//                 )}
//                 <AddCardElementWrapperContainer ref={this.cardPopupRef} selected={this.props.addCard}>
//                     <PaymentSettingsUnavailableBackButton type="button" onClick={() => this.props.toggleAddCard()}>
//                         <PaymentSettingsUnavailableBackIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="back button" />
//                     </PaymentSettingsUnavailableBackButton>
//                     <PaymentSettingsUnavailableIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Unavailable feature icon" />
//                     <PaymentSettingsUnavailableTitle>Feature unavailable</PaymentSettingsUnavailableTitle>
//                     <PaymentSettingsUnavailableSubtitle>
//                         Unfortunately we're currently working on this feature!
//                     </PaymentSettingsUnavailableSubtitle>
//                     <AddCardElementButtonWrapper>
//                         <AddCardElementCancelButton type="button" onClick={() => this.props.toggleAddCard()}>Back</AddCardElementCancelButton>
//                         <AddCardElementSaveButton onClick={() => this.props.toggleAddCard()}>Done</AddCardElementSaveButton>
//                     </AddCardElementButtonWrapper>

//                 </AddCardElementWrapperContainer>
//             </Fragment>

//         )
//     }
// }
