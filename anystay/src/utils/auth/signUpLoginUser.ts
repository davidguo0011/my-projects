import { setRecoil } from "recoil-nexus";
import { Auth } from "aws-amplify";
import { updateIdentityId } from "./updateIdentityId";
import { loggedInState } from "../../state/atoms/loggedIn";
import { userState } from "../../state/atoms/user";
import { userModelState } from "../../state/atoms/userModel";
import { userHostModelState } from "../../state/atoms/userHostModel";
import { stripeCustomerState } from "../../state/atoms/stripeCustomer";
import { stripeAccountState } from "../../state/atoms/stripeAccount";
import { accessTokenState } from "../../state/atoms/accessToken";
import { callApi } from "../api/api";

// Define interfaces for our data structures
interface UserModel {
    // Add properties as needed
    id: string;
    firstName: string;
    email: string;
}

export const signUpLoginUser = async (user: UserModel): Promise<void> => {
    const userSession = await Auth.currentSession();
    const accessToken = userSession.getAccessToken().getJwtToken();
    const idToken = userSession.getIdToken().getJwtToken();

    let userProfileData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, "user", {
        headers: {
            Authorization: accessToken,
        },
    });

    let userModel = userProfileData.body.userModel;
    let userHostModel = userProfileData.body.userHostModel;
    let stripeCustomer = userProfileData.body.stripeCustomerAccount;
    let stripeHostAccount = userProfileData.body.stripeAccount;

    setRecoil(accessTokenState, accessToken);
    updateIdentityId(idToken);
    setRecoil(loggedInState, true);
    setRecoil(userState, JSON.parse(JSON.stringify(user)));
    setRecoil(userModelState, userModel);
    setRecoil(userHostModelState, userHostModel);
    setRecoil(stripeCustomerState, stripeCustomer);
    setRecoil(stripeAccountState, stripeHostAccount);
};
