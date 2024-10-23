import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ChangeBookingRequestModel } from "../../../interfaces/models/changeBookingRequestModel";
import { RefundRequestModel } from "../../../interfaces/models/refundRequestModel";

export interface ExtendedBookingRequestModel extends BookingRequestModel {
    cancellationPolicy: string;
    refundRequested: boolean;
    changeRequested: boolean;
    checkInTime: number;
    checkOutTime: number;
    conversationmodelID: string;
    bookingAmount: number;
    refundedAmount: number;
    expiryTime: number;
}
export interface HostPriceBreakdownItemTypes {
    label: string;
    amount: number;
    amountFormatted: string;
}
export interface HostPriceBreakdownTypes {
    priceItems: HostPriceBreakdownItemTypes[];
    priceDiffItems?: HostPriceBreakdownItemTypes[];
    subTotalItems: HostPriceBreakdownItemTypes[];
}
export interface ExtendedChangeBookingRequestModel extends ChangeBookingRequestModel {
    newAdults: number;
    newChildren: number;
    newInfants: number;
    newPets: number;
    newGuests: number;
}
export interface ExtendedRefundRequestModel extends RefundRequestModel {
    refundAmount: number;
    refundMessage: string;
}
