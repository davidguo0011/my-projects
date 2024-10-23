export interface ConversationModel {
    userhostmodelID: string;
    createdAt: string;
    id: string;
    listingmodelID: string;
    bookingrequestID: string;
    status: string;
    messageownerID: string;
    updatedAt: string;
    guestSeen: boolean;
    hostSeen: boolean;
    UserModel: {
        id: string;
        firstName: string;
        profilePicture: string;
        identityID: string;
    };
    UserHostModel: {
        UserModel: {
            id: string;
            firstName: string;
            profilePicture: string;
            identityID: string;
        };
    };
    BookingRequestModel: {
        id: string;
        arrivalDate: string;
        departureDate: string;
        completed: boolean;
        confirmed: boolean;
        cancelled: boolean;
        declined: boolean;
        expired: boolean;
        ListingModel: {
            id: string;
            propertyTitle: string;
            listingImages: string[];
            suburb: string;
        };
    };
    MessageModels: {
        items: Array<{
            author: string;
            body: string;
            hostNoteBody: string;
            guestNoteBody: string;
            conversationmodelID: string;
            createdAt: string;
            id: string;
            updatedAt: string;
        }>;
    };
}
