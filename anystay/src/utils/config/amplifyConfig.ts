import { Amplify } from "aws-amplify";
import configData from "../../aws-exports.js";

let isAmplifyConfigured = false;

export function configureAmplify() {
    if (!isAmplifyConfigured) {
        let config: any = configData;

        config.aws_cloud_logic_custom = [
            {
                name: `${process.env.REACT_APP_ENV}-anystay-user`,
                endpoint: `${process.env.REACT_APP_BACKEND_USER}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-booking`,
                endpoint: `${process.env.REACT_APP_BACKEND_BOOKING}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-search`,
                endpoint: `${process.env.REACT_APP_BACKEND_SEARCH}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-auth`,
                endpoint: `${process.env.REACT_APP_BACKEND_AUTH}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-listing`,
                endpoint: `${process.env.REACT_APP_BACKEND_LISTING}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-hostaway`,
                endpoint: `${process.env.REACT_APP_BACKEND_HOSTAWAY}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-lodgify`,
                endpoint: `${process.env.REACT_APP_BACKEND_LODGIFY}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-hospitable`,
                endpoint: `${process.env.REACT_APP_BACKEND_HOSPITABLE}`,
                region: "ap-southeast-2",
            },
            {
                name: `${process.env.REACT_APP_ENV}-anystay-intelligence`,
                endpoint: `${process.env.REACT_APP_BACKEND_INTELLIGENCE}`,
                region: "ap-southeast-2",
            },
        ];

        config.oauth = {
            domain: process.env.REACT_APP_SSO_DOMAIN,
            scope: ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
            redirectSignIn: `${process.env.REACT_APP_REDIRECT_URL}`,
            redirectSignOut: `${process.env.REACT_APP_REDIRECT_URL}`,
            responseType: "code", // or 'token', depending on your flow
        };

        Amplify.configure({
            ...config,
            Logging: {
                logStreamName: `${process.env.REACT_APP_LOG_GROUP}`,
                logStreamGroup: `frontend-log-${new Date().toISOString().split("T")[0]}`,
                region: "ap-southeast-2",
                LOG_LEVEL: "ERROR",
                pushToCloudWatch: true,
            },
        });

        isAmplifyConfigured = true;
    }
}
