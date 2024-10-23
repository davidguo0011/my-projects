
export interface UpdateDefaultPayoutMethodParams {
    headers: {
        Authorization: string;
    },
    body: {
        accountID: string;
        bankAccountID: string;
    }
}
