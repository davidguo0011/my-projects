
import mixpanel from "mixpanel-browser";

const mixpanelToken = process.env.REACT_APP_MIXPANEL_TOKEN || "";

// Define interfaces for our data structures
interface UserModel {
    // Add properties as needed
    id: string;
    firstName: string;
    email: string;
}

export const initMixpanel = (userModel: UserModel, ip: string) => {
    mixpanel.init(mixpanelToken)

    mixpanel.identify(userModel.id)
    mixpanel.people.set({ '$ip': ip })
}