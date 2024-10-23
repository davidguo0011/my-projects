import { Stripe } from "stripe"

export interface AddPayoutMethodApiResponse {
    success: boolean;
    message: string;
    body: {
        stripeToken: string,
        bankAccount: Stripe.BankAccount,
    }
}