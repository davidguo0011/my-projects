
export interface UpdateTaxNumberApiParams {
    headers: {
        Authorization: string;
    },
    body: {
        stripeAccountID: string;
        taxnumber: string;
    }
}
