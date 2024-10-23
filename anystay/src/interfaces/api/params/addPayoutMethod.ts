export interface AddPayoutMethodApiParams {
    headers: {
        Authorization: string,
    },
    body: {
        accountID: string;
        bankAccountData: {
            accountName: string;
            bsb: string;
            accountNumber: string;
        },
    },
}