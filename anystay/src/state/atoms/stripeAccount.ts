import { atom } from "recoil";
import { Stripe } from "stripe"

export const stripeAccountState = atom<Stripe.Account | null>({
    key: "stripeAccountState",
    default: null,
});
