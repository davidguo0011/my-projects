import { API, graphqlOperation } from "aws-amplify";
import * as customSubscriptions from "../../graphql/customSubscriptions";
import * as subscriptions from "../../graphql/subscriptions";
import Observable from 'zen-observable-ts';

interface UserModel {
    id: String;
}


export const initUserBookingsSubscription = async (userModel: UserModel) => {
    const subscription = await API.graphql(
        graphqlOperation(subscriptions.onBookingByUserModelID, {
            usermodelID: userModel.id,
        }),
    ) as Observable<any>;
    
    subscription.subscribe({
        next: ({ provider, value }) => {
            console.log("TRIGGER REFRESH USER")
            // this.refreshUser();
        },
        error: (error) => console.warn(error),
    });
}