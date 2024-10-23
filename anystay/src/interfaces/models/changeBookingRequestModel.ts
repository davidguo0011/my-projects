export interface ChangeBookingRequestModel {
    id: string;
    bookingRequestID: string;
    confirmed: boolean;
    declined: boolean;
    completed: boolean;
    newArrivalDate: string;
    newDepartureDate: string;
}
