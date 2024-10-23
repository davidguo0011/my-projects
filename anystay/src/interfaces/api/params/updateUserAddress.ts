
export interface UpdateUserAddressApiParams {
    headers: {
        Authorization: string;
    },
    body: {
        stripeAccountID: string;
        city: string;
        unitNumber: string | null | undefined;
        street: string
        state: string;
        country: string;
        postal_code: string;
    }
}