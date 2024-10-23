import { useState } from "react";
import {
    EditProfileInputWrapper,
    EditProfileInputInfoWrapper,
    EditProfileInputInfoTitle,
    EditProfileInputInfoSubtitle,
    EditProfileInput,
    EditProfileNameWrapper,
    EditProfileInputLabel,
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

const EditProfileLegalName: React.FC<EditPopupProps> = ({ active, toggleInput }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("legalNameInputActive", false));
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [firstNameData, setFirstNameData] = useState(userModel ? userModel.firstName : "");
    const [lastNameData, setLastNameData] = useState(userModel ? userModel.lastName : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateProfileLegalName = async (firstName: string, lastName: string) => {
        // Update users name on stripe
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/name", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                firstName: firstName,
                lastName: lastName,
            },
        })
            .then((res) => {
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.firstName = firstName;
                userModelCopy.lastName = lastName;
                setUserModel(userModelCopy);
                toggleInput("legalNameInputActive", false);
            })
            .catch((err) => console.log(err));
    };
    const checkDisabled = () => {
        if (!firstNameData || !lastNameData || (firstNameData === userModel?.firstName && lastNameData === userModel?.lastName)) {
            return true;
        }
        if (isContinueBtnLoading) {
            return true;
        }
        return false;
    };
    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateProfileLegalName(firstNameData, lastNameData);
    };
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={() => toggleInput("legalNameInputActive", false)}
            handleSave={handleSave}
            disable={checkDisabled()}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Legal name</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Enter your full name as it appears on your ID.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <EditProfileNameWrapper>
                    <EditProfileInput
                        style={{ margin: 0, width: "100%", gridColumn: "1/2", gridRow: "1/2" }}
                        value={firstNameData}
                        onChange={(e) => {
                            const regex = /^[a-zA-Z ]+$/;
                            if (e.target.value.length >= 90) return;
                            if (e.target.value === "" || e.target.value.slice(-1) === " ") {
                                setFirstNameData(e.target.value);
                            } else if (regex.test(e.target.value)) {
                                setFirstNameData(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
                            }
                        }}
                    />
                    <EditProfileInputLabel style={{ gridColumn: "1/2", gridRow: "2/3" }}>First name</EditProfileInputLabel>
                    <EditProfileInput
                        style={{ margin: 0, width: "100%", gridColumn: "2/3", gridRow: "1/2" }}
                        value={lastNameData}
                        onChange={(e) => {
                            const regex = /^[a-zA-Z ]+$/;
                            if (e.target.value.length >= 90) return;
                            if (e.target.value === "" || e.target.value.slice(-1) === " ") {
                                setLastNameData(e.target.value);
                            } else if (regex.test(e.target.value)) {
                                setLastNameData(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
                            }
                        }}
                    />
                    <EditProfileInputLabel style={{ gridColumn: "2/3", gridRow: "2/3" }}>Last name</EditProfileInputLabel>
                </EditProfileNameWrapper>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default EditProfileLegalName;
