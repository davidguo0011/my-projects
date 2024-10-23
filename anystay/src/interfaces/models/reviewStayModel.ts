import { UserModel } from "./userModel";

export interface ReviewStayModel {
    UserModel: UserModel;
    amenities: number;
    body: string;
    bookingRequestID: string;
    cleaning: number;
    communication: number;
    completed: boolean;
    createdAt: string;
    hidden: boolean;
    id: string;
    listingmodelID: string;
    location: number;
    overall: number;
    owner: string | null;
    service: number;
    updatedAt: string;
    usermodelID: string;
    value: number;
    externalUserFirstName: string;
    externalUserLastName: string;
}
