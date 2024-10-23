
export interface DeletePayoutMethodApiParams {
    headers: {
        Authorization: string;
    },
    body: {
        accountID: string;
        bankAccountID: string;
    },
}