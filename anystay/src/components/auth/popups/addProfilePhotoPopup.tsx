import {
    AuthSignUpConfirmPhoneSubPage,
    AuthSignUpConfirmPhoneSubtitle,
    AuthSignUpAmplifyImageWrapper,
    ProfileAuthSignInImage,
    AuthSignUpUploadPhotoButton,
    AuthSignUpUploadPhotoWrapper,
    AuthSignUpPhotoButton,
} from "../authBarStyling";
import { motion } from "framer-motion";
import { Auth, Storage } from "aws-amplify";
import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import { userModelSelector } from "../../../state/selectors/userModel";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
interface AddProfilePhotoPopupProps {
    setPageName: (pageName: string) => void;
    profilePicture: string;
    setProfilePicture: (profilePicture: string) => void;
}

const AddProfilePhotoPopup: React.FC<AddProfilePhotoPopupProps> = ({ setPageName, profilePicture, setProfilePicture }) => {
    const [photoUploaded, setPhotoUploaded] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const makeid = (length: number): string => {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    const updateProfilePhoto = async (imgKey: string): Promise<void> => {
        if (userModel) {
            try {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/profile/image`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        profilePicture: imgKey,
                    },
                });
                const creds = await Auth.currentUserCredentials();
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.identityID = creds.identityId;
                setUserModel(userModelCopy);
                const profilePictureURL = constructOptimisedProtectedImageUrl(imgKey, creds.identityId, 100);
                setProfilePicture(profilePictureURL);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const updateUsermodelProfilePic = (key: string): void => {
        const userModelCopy = JSON.parse(JSON.stringify(userModel));
        userModelCopy.profilePicture = key;
        setUserModel(userModelCopy);
    };

    const onChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = e.target.files![0];
        if (file) {
            try {
                let res = await Storage.put(makeid(12), file, {
                    contentType: "image/*",
                    level: "protected",
                });
                await updateProfilePhoto(res.key);
                updateUsermodelProfilePic(res.key);
                setPhotoUploaded(true);
            } catch (error) {
                console.log("Error uploading file: ", error);
            }
        }
    };

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleFileClick = (event: MouseEvent<HTMLElement>) => {
        hiddenFileInput.current!.click();
    };

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }} style={{ height: "100%" }}>
            <AuthSignUpConfirmPhoneSubPage pageName={"AddProfilePhotoPopup"}>
                <AuthSignUpAmplifyImageWrapper onClick={handleFileClick}>
                    <ProfileAuthSignInImage src={profilePicture} alt="Photo" />
                </AuthSignUpAmplifyImageWrapper>
                <AuthSignUpConfirmPhoneSubtitle>Add a photo of you so hosts can recognise you better.</AuthSignUpConfirmPhoneSubtitle>
                <AuthSignUpUploadPhotoWrapper>
                    <input style={{ visibility: "hidden" }} className="new-listing-image-upload-input-hidden" type="file" name="file" ref={hiddenFileInput} onChange={onChange} />
                    <AuthSignUpUploadPhotoButton onClick={handleFileClick}>Upload photo</AuthSignUpUploadPhotoButton>
                    <AuthSignUpPhotoButton
                        type="submit"
                        onClick={() => {
                            setPageName("WelcomePopup");
                        }}
                    >
                        {photoUploaded ? "Continue" : "Do this later"}
                    </AuthSignUpPhotoButton>
                </AuthSignUpUploadPhotoWrapper>
            </AuthSignUpConfirmPhoneSubPage>
        </motion.div>
    );
};

export default AddProfilePhotoPopup;
