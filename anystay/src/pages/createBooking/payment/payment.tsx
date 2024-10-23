import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";
import { ListingModel } from "../../../interfaces/models/listingModel";

interface PaymentProps {
    createBookingRequest: (paymentIntent: any) => Promise<void>;
    clientSecret: string | null;
    listing: ListingModel;
    startDate: Date | null;
    endDate: Date | null;
    cancellationPolicy: string | null;
}

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

export default function Payment({ clientSecret, createBookingRequest, startDate, endDate, listing, cancellationPolicy }: PaymentProps) {
    return (
        <div className="App">
            {clientSecret && (
                <Elements
                    options={{
                        clientSecret: clientSecret,
                        appearance: {},
                    }}
                    stripe={stripePromise}
                >
                    <CheckoutForm listing={listing} createBookingRequest={createBookingRequest} startDate={startDate} endDate={endDate} cancellationPolicy={cancellationPolicy} />
                </Elements>
            )}
        </div>
    );
}
