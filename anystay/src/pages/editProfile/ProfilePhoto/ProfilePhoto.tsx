import { useState, useEffect } from "react";
import { ProfileHeaderImage } from "../../profile/profileStyling";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

export default function ProfilePhoto() {
    const [url, setUrl] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    useEffect(() => {
        if (userModel?.profilePicture) {
            const profilePic = constructOptimisedProtectedImageUrl(userModel.profilePicture, userModel.identityID, 100);
            setUrl(profilePic);
        }
    }, [userModel]);

    return <ProfileHeaderImage src={url} alt="Featured Listing Image" />;
}
