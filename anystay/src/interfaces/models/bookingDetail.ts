import { ListingModel } from "./listingModel";

export interface DisplayItem {
    label: string;
    amount: number;
    amountFormatted: string;
}
export interface BookingDetail {
    bookingAmount: number;
    bookingAmountIncludingServiceFee: number;
    cleaningFee: number;
    couponCode: string;
    couponDiscountAmount: number;
    displayItems: { priceItems: DisplayItem[]; priceDiffItems: DisplayItem[]; subTotalItems: DisplayItem[] };
    displayItemsHost: { priceItems: DisplayItem[]; subTotalItems: DisplayItem[] };
    extraGuestFee: number;
    extraGuestFeePerNight: number;
    extraGuests: number;
    guests: number;
    listingModel: ListingModel;
    nightlyPrices: { totalPrice: number; averagePrice: number; everydayPrices: { date: string; price: number; extraGuestFee?: number; extraGuests?: number }[] };
    nights: number;
    paymentAmount: number;
    priceDiffFormatted: string;
    pricePerNight: number;
    refundedAmount: number;
    serviceFee: number;
    totalPaymentAmount: number;
}
