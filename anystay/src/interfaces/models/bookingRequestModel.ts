import { ChangeBookingRequestModel } from "./changeBookingRequestModel";
import { RefundRequestModel } from "./refundRequestModel";

export interface BookingRequestModel {
    arrivalDate: string;
    confirmationCode: string;
    confirmed: boolean;
    completed: boolean;
    cancelled: boolean | null;
    createdAt: string;
    deposit: number;
    departureDate: string;
    declined: boolean;
    guests: number;
    adults: number;
    children: number;
    infants: number;
    guestReviewed: boolean;
    stayReviewed: boolean;
    pets: number;
    id: string;
    listingmodelID: string;
    updatedAt: string;
    userhostmodelID: string;
    usermodelID: string;
    cancellationPolicy: string;
    paymentModels: any; // You might want to define a more specific type for this
    RefundRequestModel: {
        items: RefundRequestModel[];
    };
    ChangeBookingRequestModel: {
        items: ChangeBookingRequestModel[];
    };
    overallReviewScore?: number;
}
