import { selector } from "recoil";
import { stripeAccountState } from "../atoms/stripeAccount";
import { Stripe } from "stripe";

export const stripeAccountSelector = selector<Stripe.Account | null>({
    key: "stripeAccountSelector",
    get: ({ get }) => get(stripeAccountState),
    set: ({ set }, newValue) => set(stripeAccountState, newValue),
});
