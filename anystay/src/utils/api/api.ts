import { API } from "aws-amplify";
import { refreshUser } from "../auth/refreshUser";
// Wrapper function for API calls
export const callApi = async (method: string, pathName: string, path: string, options?: any) => {
    try {
        console.log("callapi");
        // Make the API call using Amplify's API module
        if (method === "get") {
            return await API.get(pathName, path, options);
        } else if (method === "post") {
            return await API.post(pathName, path, options);
        } else if (method === "put") {
            return await API.put(pathName, path, options);
        } else if (method === "del") {
            return await API.del(pathName, path, options);
        } else {
            throw new Error(`Invalid API method: ${method}`);
        }
    } catch (error: any) {
        // Send error to cloudwatch logs
        console.error(error);
        let retries = 1;
        if (error.response && (error.response.status === 403 || error.response.status === 401) && retries > 0) {
            retries = retries - 1;
            // Check if the error is due to token expiration
            console.log("REFRESHING TOKEN");
            const accessToken = await refreshUser();
            console.log("REFRESHED TOKEN");
            // update options authorization header to accessToken
            const optionsCopy = { ...options };
            optionsCopy.headers.Authorization = accessToken;
            // Retry the API call
            if (method === "get") {
                return await API.get(pathName, path, optionsCopy);
            } else if (method === "post") {
                return await API.post(pathName, path, optionsCopy);
            } else if (method === "put") {
                return await API.put(pathName, path, optionsCopy);
            } else if (method === "del") {
                return await API.del(pathName, path, optionsCopy);
            } else {
                throw new Error(`Invalid API method: ${method}`);
            }
        }
    }
};
