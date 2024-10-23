import { UserModel } from "../../interfaces/models/userModel";

export const initIntercom = (userModel: UserModel) => {
    (window as any).Intercom("boot", {
        api_base: "https://api-iam.intercom.io",
        app_id: process.env.REACT_APP_INTERCOM_APP_ID,
        email: `${userModel.email}`, // Email address
        guest_mode: userModel.guestMode,
    });
};
