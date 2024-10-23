import { useState } from "react";
import {
    EditProfileInputInfoWrapper,
    EditProfileInputInfoTitle,
    EditProfileInputInfoSubtitle,
    EditProfileInputTextarea,
    EditProfileInputAboutWrapper,
    EditProfileInputCount,
} from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditPopupProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
}

const EditProfileAbout: React.FC<EditPopupProps> = ({ toggleInput, active }) => {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [about, setAbout] = useState(userModel?.profileDescription ? userModel.profileDescription : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const wrapperRef = useClickOutside(active, () => toggleInput("aboutInputActive", false));
    const updateUserProfileAbout = async (about: string) => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/bio", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                profileDescription: about,
            },
        })
            .then((res) => {
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.profileDescription = about;
                setUserModel(userModelCopy);
            })
            .catch((err) => console.log(err));

        toggleInput("aboutInputActive", false);
    };
    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateUserProfileAbout(about);
    };
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={() => toggleInput("aboutInputActive", false)}
            handleSave={handleSave}
            disable={about === userModel?.profileDescription || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditProfileInputAboutWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Bio</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Write something interesting about yourself.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <EditProfileInputTextarea
                    placeholder="Start writing here"
                    value={about}
                    onChange={(e) => {
                        if (e.target.value.length <= 500) {
                            setAbout(e.target.value);
                        }
                    }}
                />
                <EditProfileInputCount>{500 - about.length}</EditProfileInputCount>
            </EditProfileInputAboutWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfileAbout;
