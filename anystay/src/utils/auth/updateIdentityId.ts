import { callApi } from "../api/api";

export const updateIdentityId = async (idToken: any): Promise<void> => {
    if (idToken) {
        const identity = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/identityid", {
            headers: {
                Authorization: idToken
            },
        })
        console.log(identity)
    }
};
