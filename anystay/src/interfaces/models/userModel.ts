import { BookingRequestModel } from "./bookingRequestModel";
import { ConversationModel } from "./conversationModel";

export interface UserModel {
    id: string;
    owner: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    profileDescription: string;
    profilePicture: string;
    savedListings: string[];
    emailConfirmed: boolean;
    phoneConfirmed: boolean;
    userIDConfirmed: boolean;
    stripeCustomerID: string;
    username: string;
    identityID: string;
    guestMode: boolean | null | undefined;
    createdAt: string;
    identityDocuments: string[];
    updatedAt: string;
    privacyPolicyAccepted: boolean;
    facebookURL: string;
    twitterURL: string;
    instagramURL: string;
    tiktokURL: string;
    externalSignOn: boolean;
    externalSignOnCompleted: boolean;
    BookingRequestModels: {
        items: BookingRequestModel[];
        nextToken: string | null;
    };
    ConversationModels: {
        items: ConversationModel[];
        nextToken: string | null;
    };
}
