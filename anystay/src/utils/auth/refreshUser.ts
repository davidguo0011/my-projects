import { Auth } from "aws-amplify";

// Import state
import { setRecoil } from "recoil-nexus";
import { accessTokenState } from "../../state/atoms/accessToken";

export const refreshUser = async (): Promise<void | string> => {
    try {
        console.log("refresh user");
        const userSession = await Auth.currentSession();
        const accessToken = userSession.getAccessToken().getJwtToken();
        // Set user data
        setRecoil(accessTokenState, accessToken);
        return accessToken;
    } catch (err) {
        console.log("user is not logged in, refresh token fail");
    }
};
