import { Auth } from "aws-amplify";
import { setRecoil } from "recoil-nexus";

// Import initialization functions
import { updateIdentityId } from "./updateIdentityId";
import { initMixpanel } from "../mixpanel/initMixpanel";
import { initIntercom } from "../intercom/initIntercom";

// Import state
import { loggedInState } from "../../state/atoms/loggedIn";
import { userState } from "../../state/atoms/user";
import { userModelState } from "../../state/atoms/userModel";
import { userHostModelState } from "../../state/atoms/userHostModel";
import { stripeCustomerState } from "../../state/atoms/stripeCustomer";
import { stripeAccountState } from "../../state/atoms/stripeAccount";
import { accessTokenState } from "../../state/atoms/accessToken";
import { callApi } from "../api/api";

// Import types
import { ICredentials } from "@aws-amplify/core";
import { UserModel } from "../../interfaces/models/userModel";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { Stripe } from "stripe";
interface UserProfileData {
    body: {
        userModel: UserModel;
        userHostModel: UserHostModel;
        stripeCustomerAccount: Stripe.Customer | null;
        stripeAccount: Stripe.Account | null;
        ip: string;
    };
}

export const loginUser = async (user: UserModel): Promise<{ userHostModel: UserHostModel; userModel: UserModel }> => {
    const userSession = await Auth.currentSession();
    const accessToken = userSession.getAccessToken().getJwtToken();
    // Get user data
    let userProfileData: UserProfileData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, "user", {
        headers: {
            Authorization: accessToken,
        },
    });

    let userModel = userProfileData.body.userModel;
    let userHostModel = userProfileData.body.userHostModel;
    let stripeCustomer = userProfileData.body.stripeCustomerAccount;
    let stripeHostAccount = userProfileData.body.stripeAccount;
    setRecoil(loggedInState, true);
    setRecoil(userState, JSON.parse(JSON.stringify(user)));
    setRecoil(userModelState as any, userModel);
    setRecoil(userHostModelState as any, userHostModel);
    setRecoil(stripeCustomerState as any, stripeCustomer);
    setRecoil(stripeAccountState as any, stripeHostAccount);
    setRecoil(accessTokenState, accessToken);
    initMixpanel(userModel, userProfileData.body.ip);
    initIntercom(userModel);
    
    if (userModel.identityID === null) {
        const idToken = userSession.getIdToken().getJwtToken();
        updateIdentityId(idToken);
    }
    
    return { userHostModel, userModel };
};
