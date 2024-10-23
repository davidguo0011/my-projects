import { selector } from "recoil";
import { stripeCustomerState } from "../atoms/stripeCustomer";
import { Stripe } from "stripe";

export const stripeCustomerSelector = selector<Stripe.Customer | null>({
    key: "stripeCustomerSelector",
    get: ({ get }) => get(stripeCustomerState),
    set: ({ set }, newValue) => set(stripeCustomerState, newValue),
});
