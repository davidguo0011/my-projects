import React, { Fragment, useEffect, useState, useCallback, useRef } from "react";
import {
    PaymentSettingsWrapper,
    PaymentSettingsTitleWrapper,
    PaymentSettingsTitle,
    PaymentSettingsMenuWrapper,
    PaymentSettingsMenuItem,
    RecentTransactionsWrapper,
    RecentTransactionsTitle,
    PaymentSettingsDesktopWrapper,
    PaymentSettingsDesktopMenu,
    RecentTransactionsContent,
    RecentTransactionEmptyTitle,
    RecentTransactionEmptySubtitle,
    PaymentSettingsDesktopMenuIcon,
    PaymentSettingsDesktopMenuText,
    RecentTransactionsContentWrapper,
    InfinitScrollLoadingSpinner,
    PaymentSettingsContentWrapper,
} from "./paymentSettingsStyling";
import { callApi } from "../../utils/api/api";
import PaymentItem from "./PaymentItem/PaymentItem";
// import { loadStripe } from "@stripe/stripe-js";
// import InlineTextLoading from '../../components/spinner/inlineTextLoading/InlineTextLoading';
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import CircalLoadingSpinner from "../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { userModelSelector } from "../../state/selectors/userModel";
import { stripeCustomerSelector } from "../../state/selectors/stripeCustomer";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ListingModel } from "../../interfaces/models/listingModel";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { UserModel } from "../../interfaces/models/userModel";
import BackBtn from "../../components/btn/backBtn/backBtn";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

interface BookingRequestSummaryInterface {
    ListingModel: ListingModel;
    UserHostModel: UserHostModel;
    UserModel: UserModel;
    arrivalDate: string;
    bookingAmount: number;
    bookingAmountIncludingServiceFee: number;
    cancelled: null | boolean;
    completed: boolean;
    confirmationCode: string;
    confirmed: boolean;
    conversationmodelID: string;
    createdAt: string;
    departureDate: string;
    id: string;
    listingmodelID: string;
    paymentAmount: number;
    refundedAmount: number;
    standardServiceFee: boolean;
    updatedAt: string;
    userhostmodelID: string;
    usermodelID: string;
}

export interface TransactionInterface {
    bookingRequestSummary: BookingRequestSummaryInterface;
    charge: {
        amount: number;
        amount_captured: number;
        amount_refunded: number;
        balance_transaction: string;
        calculated_statement_descriptor: string;
        captured: boolean;
        created: number;
        currency: string;
        customer: string;
        id: string;
        paid: true;
        payment_intent: string;
        payment_method: string;
    };
    paymentIntent: {
        amount: number;
        amount_capturable: number;
        amount_received: number;
        created: number;
        metadata: { bookingID: string };
    };
}

export default function PaymentSettings() {
    // const [addCard, setAddCard] = useState(false);
    // const [cards, setCards] = useState([]);
    // const [backAccounts, setBankAccounts] = useState([]);
    // const [cardClientSecret, setCardClientSecret] = useState(null);
    const [recentTransactions, setRecentTransactions] = useState<TransactionInterface[]>([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [isTextInlineLoading, setIsTextInlineLoading] = useState({ loading: false, paymentMethodID: null })
    const [isBottom, setIsBottom] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [stripeCustomer, setStripeCustomer] = useRecoilState(stripeCustomerSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const navigate = useNavigate();
    const startingAfter = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const isBottom = scrollY + windowHeight >= totalHeight - 50;
        setIsBottom(isBottom);
    };

    const fetchPayments = useCallback(async () => {
        let paymentsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/payments", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                startingAfter: null,
            },
        });
        // setCards(paymentsData.body.paymentMethods)
        setRecentTransactions(paymentsData.body.payments);
        startingAfter.current = paymentsData.body.payments[paymentsData.body.payments.length - 1]?.id;
    }, [accessToken]);

    const fetchMorePayments = useCallback(async () => {
        let paymentsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/payments`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                startingAfter: startingAfter.current,
            },
        });
        console.log("paymentsData", paymentsData);
        setRecentTransactions((prevState) => {
            return [...prevState, ...paymentsData.body.payments];
        });
        startingAfter.current = paymentsData.body.payments[paymentsData.body.payments.length - 1].id;
    }, [accessToken]);

    // setupPaymentMethodIntent = async () => {
    //     let setupIntent = await API.put(`${process.env.REACT_APP_ENV}-anystay-user`, "user/payment/method", {
    //         headers: {
    //             Authorization: accessToken
    //         }
    //     })
    //     let cardClientSecret = setupIntent.body.setupIntent.client_secret

    //     await setState({
    //         cardClientSecret: cardClientSecret
    //     })

    // }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        fetchPayments();
    }, [fetchPayments]);

    useEffect(() => {
        if (isBottom && startingAfter.current) {
            fetchMorePayments();
        }
    }, [fetchMorePayments, isBottom]);

    // const deleteCard = async (paymentMethodID) => {
    //     setIsTextInlineLoading({ loading: true, paymentMethodID: paymentMethodID })
    //     await API.del(`${process.env.REACT_APP_ENV}-anystay-user`, "user/payment/method", {
    //         headers: {
    //             Authorization: accessToken
    //         },
    //         body: {
    //             paymentMethodID: paymentMethodID
    //         }
    //     }).then().catch((err) => console.log(err))
    //     await fetchPayments();
    //     setIsTextInlineLoading({ loading: false, paymentMethodID: null })
    // }

    // const defaultCard = async (paymentMethodID) => {
    //     setIsTextInlineLoading({ loading: true, paymentMethodID: paymentMethodID })
    //     await API.post(`${process.env.REACT_APP_ENV}-anystay-user`, "user/payment/method/default", {
    //         headers: {
    //             Authorization: accessToken
    //         },
    //         body: {
    //             paymentMethodID: paymentMethodID
    //         }
    //     }).then().catch((err) => { console.log(err) })
    //     await refreshUser();
    //     setIsTextInlineLoading({ loading: false, paymentMethodID: null })
    // }

    if (!userModel || !stripeCustomer) {
        return <LoadingFullPageModal guestMode={true} />;
    }
    return (
        <Fragment>
            <HelmetTags title="Profile | Anystay" />
            <PaymentSettingsWrapper>
                <PaymentSettingsTitleWrapper>
                    <BackBtn onClick={() => navigate("/settings")} type="Arrow" mobileLeft={24} mobileTop={24} />
                    <PaymentSettingsTitle>Payments & payouts</PaymentSettingsTitle>
                </PaymentSettingsTitleWrapper>
                <PaymentSettingsContentWrapper>
                    <PaymentSettingsDesktopWrapper>
                        <PaymentSettingsMenuWrapper>
                            <PaymentSettingsMenuItem selected={true}>Payment</PaymentSettingsMenuItem>
                            <PaymentSettingsMenuItem onClick={() => navigate("/payout-settings/")} selected={false}>
                                Payout
                            </PaymentSettingsMenuItem>
                        </PaymentSettingsMenuWrapper>
                        {/* <PaymentMethodsWrapper>
                            <PaymentMethodsTitle>
                                Payment method
                            </PaymentMethodsTitle>
                            <AddCardElementSubtitle style={{ marginBottom: "24px" }}>
                                Add payment methods using our secure payment system.
                            </AddCardElementSubtitle>

                            {cards.length > 0 ?
                                cards.map((card, index) => {
                                    console.log(card);
                                    return (
                                        <PaymentMethod key={index}>
                                            <PaymentMethodText style={{ textTransform: "uppercase" }}>
                                                {card.card.brand} {card.card.last4} {stripeCustomer.invoice_settings.default_payment_method === card.id && "(Default)"}
                                            </PaymentMethodText>
                                            <PaymentMethodButtonWrapper>
                                                {isTextInlineLoading.loading && isTextInlineLoading.paymentMethodID === card.id ? <InlineTextLoading /> : <>{stripeCustomer.invoice_settings.default_payment_method !== card.id && (

                                                    <>
                                                        <PaymentMethodButton disabled={isTextInlineLoading.loading} selected={true} onClick={() => defaultCard(card.id)}>
                                                            Default
                                                        </PaymentMethodButton>
                                                        <PaymentMethodButton disabled={isTextInlineLoading.loading} onClick={() => deleteCard(card.id)} style={{ marginLeft: "16px" }} selected={true}>
                                                            Remove
                                                        </PaymentMethodButton>
                                                    </>

                                                )}</>}

                                            </PaymentMethodButtonWrapper>
                                        </PaymentMethod>
                                    )
                                })
                                :
                                <PaymentMethod>
                                    <PaymentMethodText>
                                        No payment method
                                    </PaymentMethodText>
                                </PaymentMethod>
                            }
                            {bankAccounts &&
                                bankAccounts.map((bankAccount, index) => {
                                    return (
                                        <PaymentMethod>
                                            <PaymentMethodText>
                                                Direct Debit {bankAccount.au_becs_debit.last4}
                                            </PaymentMethodText>
                                            <PaymentMethodButtonWrapper>
                                                {isTextInlineLoading.loading}
                                                <PaymentMethodButton selected={true}>
                                                    Default
                                                </PaymentMethodButton>
                                                <PaymentMethodButton onClick={() => console.log("Should remove bank account")} style={{ marginLeft: "16px" }} selected={true}>
                                                    Remove
                                                </PaymentMethodButton>
                                            </PaymentMethodButtonWrapper>

                                        </PaymentMethod>
                                    )
                                })
                            }
                            <AddPaymentMethodButtonDesktop type="button" onClick={() => setState({ addCard: !addCard })}>Add payment method</AddPaymentMethodButtonDesktop>
                            <Elements stripe={stripePromise} options={cardOptions}>

                                <AddCardElement cardClientSecret={cardClientSecret} addCard={addCard} toggleAddCard={() => setState({ addCard: !addCard })} fetchPayments={fetchPayments} />
                            </Elements>

                        </PaymentMethodsWrapper> */}
                        <RecentTransactionsWrapper>
                            <RecentTransactionsTitle>Recent payments</RecentTransactionsTitle>
                        </RecentTransactionsWrapper>
                        {recentTransactions.length === 0 ? (
                            <RecentTransactionsContent>
                                <RecentTransactionEmptyTitle>No payments yet</RecentTransactionEmptyTitle>
                                <RecentTransactionEmptySubtitle>Your recent payments will appear here</RecentTransactionEmptySubtitle>
                            </RecentTransactionsContent>
                        ) : (
                            <Fragment>
                                <RecentTransactionsContentWrapper>
                                    {recentTransactions.map((paymentModel, index) => {
                                        return <PaymentItem paymentModel={paymentModel} key={index} />;
                                    })}
                                    <InfinitScrollLoadingSpinner style={{ opacity: isBottom ? "1" : "0" }}>
                                        <CircalLoadingSpinner />
                                    </InfinitScrollLoadingSpinner>
                                </RecentTransactionsContentWrapper>

                                {/* {pages > 1 &&
                                    <div style={{ display: "flex", margin: "0 auto", marginTop: "64px", marginBottom: "16px", width: "fit-content" }}>
                                        <PaymentsMenuItemButtonArrow style={{ marginRight: "24px" }} onClick={() => { if (currentPage > 1) { setState({ currentPage: currentPage - 1 }) } }}>
                                            <PaymentsMenuItemButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="" />
                                        </PaymentsMenuItemButtonArrow>
                                        <PaymentsMenuItemButton type="button" selected={currentPage < pages}>{currentPage < pages ? currentPage : pages - 1}</PaymentsMenuItemButton>
                                        <PaymentsMenuItemButton type="button" selected={false}>...</PaymentsMenuItemButton>
                                        <PaymentsMenuItemButton type="button" selected={currentPage === pages} onClick={() => setState({ currentPage: pages })}>{pages}</PaymentsMenuItemButton>
                                        <PaymentsMenuItemButtonArrow style={{ marginLeft: "24px" }} onClick={() => { if (currentPage < pages) { setState({ currentPage: currentPage + 1 }) } }}>
                                            <PaymentsMenuItemButtonIcon style={{ transform: "rotate(180deg)" }} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="" />
                                        </PaymentsMenuItemButtonArrow>
                                    </div>
                                } */}
                            </Fragment>
                        )}
                        {/* <AddPaymentMethodButtonWrapper>
                            <AddPaymentMethodButton type="button" onClick={() => setState({ addCard: !addCard })}>Add payment method</AddPaymentMethodButton>
                        </AddPaymentMethodButtonWrapper> */}
                    </PaymentSettingsDesktopWrapper>
                    <PaymentSettingsDesktopMenu>
                        <PaymentSettingsDesktopMenuIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Payment+safety.svg"} alt="Payments icon" />
                        <PaymentSettingsDesktopMenuText>To protect your payments and personal information, never share your payment method with others.</PaymentSettingsDesktopMenuText>
                    </PaymentSettingsDesktopMenu>
                </PaymentSettingsContentWrapper>
            </PaymentSettingsWrapper>
        </Fragment>
    );
}
