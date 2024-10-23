import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { ReviewStayModel } from "../../../interfaces/models/reviewStayModel";

export interface ExtendedBookingRequestModel extends BookingRequestModel {
    bookingAmountIncludingServiceFee: number;
    conversationmodelID: string;
    _version: string;
}

interface ReviewStayModelsContainer {
    items: ReviewStayModel[];
}
export interface ExtendedListingModel extends ListingModel {
    overallAverage: number;
    ReviewStayModels: ReviewStayModelsContainer;
    advanceNotice: number;
    advanceNoticeTime: number;
}
