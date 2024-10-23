import { BookingRequestModel } from "./bookingRequestModel";
import { ConversationModel } from "./conversationModel";
import { ListingModel } from "./listingModel";
import { UserModel } from "./userModel";

// Main UserHostModel interface
export interface UserHostModel {
    usermodelID: string;
    updatedAt: string;
    id: string;
    createdAt: string;
    stripeAccountID: string;
    stripeAccountVerified: boolean;
    standardServiceFee: boolean;
    owner: string;
    UserModel: UserModel;
    BookingRequestModels: {
        items: BookingRequestModel[];
        nextToken: string | null;
    };
    ConversationModels: {
        items: ConversationModel[];
        nextToken: string | null;
    };
    ListingModels: {
        items: ListingModel[];
        nextToken: string | null;
    };
    HostNotifications: any;
}
