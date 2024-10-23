import { signUpLoginUser } from './../auth/signUpLoginUser';
import { initUserSubscription } from "./initUserSubscription";
import { initUserHostSubscription } from "./initUserHostSubscription";
import { initUserBookingsSubscription } from "./initUserBookingsSubscription";

interface UserModel {
    id: string;
}

interface UserHostModel {
    id: string;
}

export const initSubscriptions = async (userModel: UserModel, userHostModel: UserHostModel) => {
    initUserSubscription(userModel)
    initUserHostSubscription(userHostModel)
    initUserBookingsSubscription(userModel)
}