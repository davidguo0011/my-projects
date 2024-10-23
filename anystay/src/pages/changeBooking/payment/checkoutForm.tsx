import { useEffect, useState, FormEvent } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import LoadingFullPageSmallModalPortal from "../../../components/loadingFullPageSmallModalWithLogo/loadingFullPageSmallModal";
import PaymentFailedModal from "../../../components/paymentFailedModal/paymentFailedModal";
import PaymentFailedNotAvailableBookingModal from "../../../components/paymentFailedModal/paymentFailedNotAvailableBookingModal";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { CheckoutFormBtn } from "../changeBookingStyling";

interface CheckoutFormProps {
    submitChangeBookingRequest: (arg: string) => Promise<void>;
    startDate: Date | null;
    endDate: Date | null;
    originalBeginDate: string;
    originalEndDate: string;
    listingID: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ startDate, listingID, endDate, originalBeginDate, originalEndDate, submitChangeBookingRequest }) => {
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
    }, [stripe]);

    const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (!userModel) return;
        if (!startDate || !endDate) return;

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        await setShowLoadingType("processing");

        const formattedStartDate = startDate!.toString();
        const formattedEndDate = endDate!.toString();
        try {
            let bookingAvailable = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `checkbookingavailability`, {
                body: {
                    id: listingID,
                    beginDate: formattedStartDate,
                    endDate: formattedEndDate,
                    originalBeginDate: originalBeginDate,
                    originalEndDate: originalEndDate,
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
                    receipt_email: userModel.email,
                },
                redirect: "if_required",
            })
            .then(async (res) => {
                if (res.error) {
                    throw new Error();
                }
                if (res.paymentIntent?.status === "succeeded" || res.paymentIntent?.status === "requires_capture") {
                    await submitChangeBookingRequest(res.paymentIntent.id);
                } else if (res.paymentIntent?.status === "processing") {
                    setShowLoadingType("processing");
                } else {
                    throw new Error();
                }
            })
            .catch((error) => {
                console.log(error);
                setShowLoadingType("failed");
            });
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <CheckoutFormBtn disabled={showLoadingType === "processing" || !stripe || !elements} id="submit">
                Request change
            </CheckoutFormBtn>
            {/* Show any error or success messages */}
            {showLoadingType === "processing" && (
                <LoadingFullPageSmallModalPortal spinnerWidth="96" spinnerHeight="96" title={"Preparing your stay"} subtitle="" waiting={false} timeout={null} guestMode={true} />
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
};
export default CheckoutForm;
