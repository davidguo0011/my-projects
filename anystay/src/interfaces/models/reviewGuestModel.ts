import { UserHostModel } from "./userHostModel";

export interface ReviewGuestModel {
    id: string;
    bookingRequestID: string;
    usermodelID: string;
    userhostmodelID: string;
    overall: number;
    communication: number;
    cleanliness: number;
    body: string;
    completed: boolean;
    hidden: boolean;
    UserHostModel: UserHostModel;
    createdAt: string;
}