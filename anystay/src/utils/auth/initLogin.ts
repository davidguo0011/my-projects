import { getIP } from "./getIp";
import { Auth, Hub, Logger } from "aws-amplify";
import { setRecoil } from "recoil-nexus";
import { userState } from "../../state/atoms/user";
import { loginUser } from "./loginUser";
import { identityIdState } from "../../state/atoms/identityId";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});

export const initLogin = async (): Promise<void> => {
    getIP();
    const logger = new Logger("My-Logger");

    Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
            case "signIn":
                logger.info("user signed in");
                setRecoil(userState, JSON.parse(JSON.stringify(data)));
                break;
            case "cognitoHostedUI":
                console.log("GOOGLE SIGN IN DATA");
                console.log(data);
                break;
            case "signUp":
                logger.info("user signed up");
                break;
            case "signOut":
                logger.info("user signed out");
                setRecoil(userState, null);
                break;
            case "signIn_failure":
                logger.error("user sign in failed");
                break;
            case "tokenRefresh":
                logger.info("token refresh succeeded");
                break;
            case "tokenRefresh_failure":
                logger.error("token refresh failed");
                break;
            case "configured":
                logger.info("the Auth module is configured");
                break;
            default:
                break;
            // case "customOAuthState":
            //     this.setState({ customState: data });
        }
    });

    (window as any).Intercom("boot", {
        api_base: "https://api-iam.intercom.io",
        app_id: process.env.REACT_APP_INTERCOM_APP_ID,
        custom_launcher_selector: ".intercom_custom_launcher",
    });

    // Refresh the user session then check if the user is currently authenticated
    await Auth.currentAuthenticatedUser()
        .then(async (user) => {
            // let creds = await Auth.currentUserCredentials();
            if (user.username !== null) {
                await loginUser(user);
                analytics.identify(user.username, {})
            }
        })
        .catch(async () => {
            let creds = await Auth.currentUserCredentials();
            setRecoil(identityIdState, creds.identityId);
            analytics.identify(creds.identityId, {})
        });
};
