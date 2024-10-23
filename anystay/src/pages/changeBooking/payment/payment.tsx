import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

interface PaymentProps {
    clientSecret: string;
    listingID: string;
    submitChangeBookingRequest: (arg: string) => Promise<void>;
    startDate: Date | null;
    endDate: Date | null;
    originalBeginDate: string;
    originalEndDate: string;
}

const Payment: React.FC<PaymentProps> = ({ clientSecret, listingID, startDate, endDate, submitChangeBookingRequest, originalBeginDate, originalEndDate }) => {
    return (
        <div className="App">
            {clientSecret && (
                <Elements
                    options={{
                        clientSecret: clientSecret,
                    }}
                    stripe={stripePromise}
                >
                    <CheckoutForm
                        listingID={listingID}
                        startDate={startDate}
                        endDate={endDate}
                        submitChangeBookingRequest={submitChangeBookingRequest}
                        originalBeginDate={originalBeginDate}
                        originalEndDate={originalEndDate}
                    />
                </Elements>
            )}
        </div>
    );
};
export default Payment;
