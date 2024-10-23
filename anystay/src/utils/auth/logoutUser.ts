import { Auth } from "aws-amplify";

// Import state
import { loggedInState } from "../../state/atoms/loggedIn";
import { userState } from "../../state/atoms/user";
import { userModelState } from "../../state/atoms/userModel";
import { userHostModelState } from "../../state/atoms/userHostModel";
import { stripeCustomerState } from "../../state/atoms/stripeCustomer";
import { stripeAccountState } from "../../state/atoms/stripeAccount";
import { setRecoil } from "recoil-nexus";
import { accessTokenState } from "../../state/atoms/accessToken";

export const logoutUser = async (): Promise<void> => {
    try {
        // Log amplify user out
        await Auth.signOut({ global: true });
        // Log intercom out
        (window as any).Intercom("shutdown");
        // Clear user data
        setRecoil(loggedInState, false);
        setRecoil(userState, null);
        setRecoil(userModelState, null);
        setRecoil(userHostModelState, null);
        setRecoil(stripeCustomerState, null);
        setRecoil(stripeAccountState, null);
        setRecoil(accessTokenState, "");
    } catch (error) {
        console.log("error signing out: ", error);
    }
};
