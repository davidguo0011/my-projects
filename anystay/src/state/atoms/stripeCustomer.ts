import { atom } from "recoil";
import { Stripe } from "stripe";


export const stripeCustomerState = atom<Stripe.Customer | null>({
    key: "stripeCustomerState",
    default: null,
});
