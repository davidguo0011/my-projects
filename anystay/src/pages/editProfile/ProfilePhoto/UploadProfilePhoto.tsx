import React, { useState, ChangeEvent } from "react";
import { callApi } from "../../../utils/api/api";
import { Storage } from "aws-amplify";
import { EditProfileHeaderImageWrapper, EditProfilePhotoWrapper, EditProfilePhotoText, EditProfileUploadPhotoLoadingWrapper } from "../editProfileStyling";
import ProfilePhoto from "./ProfilePhoto";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import ChatMessageLoadingSpinner from "../../../components/spinner/chatMessageLoadingSpinner/ChatMessageLoadingSpinner";
import { accessTokenSelector } from "../../../state/selectors/accessToken";

export default function UploadProfilePhoto() {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [loading, setLoading] = useState(false);
    const makeid = (length: number) => {
        var result = "profile-picture-";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const updateProfilePhoto = async (imgKey: string) => {
        setLoading(true);
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/profile/image", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                profilePicture: imgKey,
            },
        })
            .then((res) => {
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.profilePicture = imgKey;
                setUserModel(userModelCopy);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    const onChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = e.target.files![0];
        try {
            if (file) {
                await Storage.put(makeid(12), file, {
                    level: "protected",
                    contentType: "image/*",
                }).then((res) => {
                    updateProfilePhoto(res.key);
                });
            } else {
                console.log("No file selected.");
            }
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    };

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    if (loading) {
        return (
            <EditProfileUploadPhotoLoadingWrapper>
                <ChatMessageLoadingSpinner />
            </EditProfileUploadPhotoLoadingWrapper>
        );
    }

    return (
        <EditProfileHeaderImageWrapper
            onClick={() => {
                if (hiddenFileInput) {
                    hiddenFileInput.current!.click();
                }
            }}
        >
            <input style={{ position: "relative", display: "none" }} className="new-listing-image-upload-input-hidden" type="file" name="file" ref={hiddenFileInput} onChange={onChange} />
            <EditProfilePhotoWrapper>
                <ProfilePhoto />
            </EditProfilePhotoWrapper>
            <EditProfilePhotoText>Edit photo</EditProfilePhotoText>
        </EditProfileHeaderImageWrapper>
    );
}
