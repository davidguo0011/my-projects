import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from '@aws-amplify/api';
import * as customSubscriptions from "../../graphql/customSubscriptions";
import Observable from 'zen-observable-ts';

interface UserModel {
    id: String;
}

export const initUserSubscription = async (userModel: UserModel): Promise<void> => {
    const subscription = await API.graphql<GraphQLSubscription<any>>(
        graphqlOperation(customSubscriptions.onUpdateUserByIDTrigger, {
            id: userModel.id,
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