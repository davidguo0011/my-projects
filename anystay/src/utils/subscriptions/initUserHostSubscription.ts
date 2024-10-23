import { API, graphqlOperation } from "aws-amplify";
import * as customSubscriptions from "../../graphql/customSubscriptions";
import * as subscriptions from "../../graphql/subscriptions";
import { GraphQLSubscription } from '@aws-amplify/api';
import Observable from 'zen-observable-ts';

interface UserHostModel {
    id: String;
}

export const initUserHostSubscription = async (userHostModel: UserHostModel) => {
    const subscription = await API.graphql(
        graphqlOperation(subscriptions.onUpdateUserHostModel, {
            id: userHostModel.id,
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