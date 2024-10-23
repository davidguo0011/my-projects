import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import LoadingFullPageSmallModalPortal from "../../../components/loadingFullPageSmallModalWithLogo/loadingFullPageSmallModal";
import PaymentFailedModal from "../../../components/paymentFailedModal/paymentFailedModal";
import PaymentFailedNotAvailableBookingModal from "../../../components/paymentFailedModal/paymentFailedNotAvailableBookingModal";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import CouponInput from "./CouponInput/CouponInput";
import GuestPolicy from "./GuestPolicy/GuestPolicy";
import { ConfirmBtnPolicy, CheckoutSectionDivider } from "../createBookingStyling";
import { ListingModel } from "../../../interfaces/models/listingModel";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";

interface CheckoutFormProps {
    createBookingRequest: (paymentIntent: any) => Promise<void>;
    listing: ListingModel;
    startDate: Date | null;
    endDate: Date | null;
    cancellationPolicy: string | null;
}

export default function CheckoutForm({ listing, createBookingRequest, startDate, endDate, cancellationPolicy }: CheckoutFormProps) {
    const stripe = useStripe();
    const elements = useElements();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    const [showLoadingType, setShowLoadingType] = useState("");

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

        if (!clientSecret) {
            return;
        }

        // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        //     console.log(paymentIntent.status);
        //     switch (paymentIntent.status) {
        //         case "succeeded":
        //             setMessage("success");
        //             break;
        //         case "processing":
        //             setMessage("processing");
        //             break;
        //         case "requires_payment_method":
        //             setMessage("not successful");
        //             break;
        //         default:
        //             setMessage("Something went wrong.");
        //             break;
        //     }
        // });
    }, [stripe]);

    const handleSubmit = async (e?: FormEvent) => {
        e?.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setShowLoadingType("processing");

        //check booking request, if true proceed payment, if not show paymentfail error
        const formattedStartDate = startDate!.toString();
        const formattedEndDate = endDate!.toString();

        try {
            let bookingAvailable = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `checkbookingavailability`, {
                body: {
                    id: listing.id,
                    beginDate: formattedStartDate,
                    endDate: formattedEndDate,
                },
            });
            if (!bookingAvailable.body.available) {
                setShowLoadingType("notAvailable");
                return;
            }
        } catch (err) {
            console.log(err);
            setShowLoadingType("failed");
            return;
        }

        await stripe
            .confirmPayment({
                elements,
                confirmParams: {
                    // Make sure to change this to your payment completion page
                    return_url: `http://localhost:3000`,
                    receipt_email: userModel!.email,
                },
                redirect: "if_required",
            })
            .then(async (res) => {
                if (res.error) {
                    throw new Error();
                }
                if (res.paymentIntent) {
                    if (res.paymentIntent.status === "succeeded" || res.paymentIntent.status === "requires_capture") {
                        await createBookingRequest(res);
                    } else if (res.paymentIntent.status === "processing") {
                        setShowLoadingType("processing");
                    } else {
                        throw new Error();
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                setShowLoadingType("failed");
            });
    };

    return (
        <form id="payment-form">
            <PaymentElement id="payment-element" />
            <CheckoutSectionDivider style={{ marginTop: "32px" }} />
            <GuestPolicy listing={listing} startDate={startDate} cancellationPolicy={cancellationPolicy} />
            <ConfirmBtnPolicy>
                By pressing the button below you are agreeing to our <Link to="/terms-and-conditions">Terms of Service</Link>, our <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
                <Link to="/payment-policy">Payment Policy</Link>.
            </ConfirmBtnPolicy>

            {/* <CheckoutFormBtn disabled={showLoadingType === "processing" || !stripe || !elements} id="submit" onClick={handleSubmit}>
                    <span id="button-text">Confirm and book</span>
                </CheckoutFormBtn> */}
            <ContinueBtn
                disabled={showLoadingType === "processing" || !stripe || !elements}
                onClick={handleSubmit}
                isLoading={showLoadingType === "processing" || !stripe || !elements}
                background="red"
            >
                Confirm and book
            </ContinueBtn>
            {/* Show any error or success messages */}
            {showLoadingType === "processing" && (
                <LoadingFullPageSmallModalPortal spinnerWidth="64" spinnerHeight="64" title={"Preparing your stay..."} subtitle="" waiting={false} timeout={null} guestMode={true} />
            )}
            {showLoadingType === "failed" && (
                <PaymentFailedModal
                    tryAgainFunc={handleSubmit}
                    closeModal={() => {
                        setShowLoadingType("");
                    }}
                />
            )}
            {showLoadingType === "notAvailable" && (
                <PaymentFailedNotAvailableBookingModal
                    closeModal={() => {
                        setShowLoadingType("");
                    }}
                />
            )}
        </form>
    );
}
