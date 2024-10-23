
export interface GetPayoutMethodsApiResponse {
    success: boolean;
    message: string;
    body: {
        bankAccounts: any;
    }
}