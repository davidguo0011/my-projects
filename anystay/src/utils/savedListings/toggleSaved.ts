import { callApi } from "../api/api";
import { userModelState } from "../../state/atoms/userModel";
import { setRecoil } from "recoil-nexus";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";

interface UserModel {
    id: string;
    firstName: string;
    email: string;
    savedListings: string[];
}

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});

export const toggleSaved = async (listingId: string, userModel: UserModel, accessToken: string) => {
    try {
        let addedOrRemoved = "";
        if (!userModel) {
            throw new Error("user model not defined.");
        }
        const savedListings = userModel.savedListings || [];
        let newListingIDs = [];
        if (savedListings.includes(listingId)) {
            addedOrRemoved = "removed";
            newListingIDs = savedListings.filter((e) => e !== listingId);
        } else {
            addedOrRemoved = "added";
            newListingIDs = [...savedListings, listingId];
        }

        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/saved`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                listingId: listingId,
            },
        });
        

        let userModelCopy = JSON.parse(JSON.stringify(userModel));
        userModelCopy.savedListings = newListingIDs;
        setRecoil(userModelState, userModelCopy);
        analytics.track('SavedListing', {
            userId: userModel.id,
            addedOrRemoved: addedOrRemoved,
            listingId: listingId
        })
    } catch (err) {
        console.log(err);
    }
};
