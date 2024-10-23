import { EditProfileInputWrapper, EditProfileInputInfoWrapper, EditProfileInputInfoTitle, EditProfileInputInfoSubtitle, EditProfileInput } from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { useState } from "react";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditProfileEmailProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
    setNewEmail: React.Dispatch<React.SetStateAction<string>>;
}
const EditProfileEmail: React.FC<EditProfileEmailProps> = ({ active, toggleInput, setNewEmail }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("emailInputActive", false));
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [emailData, setEmailData] = useState(userModel ? userModel.email : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const checkEmailRegex = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const onSubmit = async () => {
        if (!checkEmailRegex(emailData)) {
            setInvalidEmail(true);
            return;
        }

        const success = await updateProfileEmail(emailData);
        if (!success) {
            setInvalidEmail(true);
        }
        // if (success) {
        //     console.log("Email updated");
        //     setIsPopupActive(false);
        //     toggleInput("emailInputActive", false);
        //     // setNewEmail(email);
        //     toggleInput("verifyUpdateEmailInputActive", true);
        // }
    };
    const updateProfileEmail = async (email: string) => {
        setIsContinueBtnLoading(true);
        // When the user attempts to change their email, we need to verify the new email address
        try {
            const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/email", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    email: email,
                },
            });
            // const user = await Auth.currentAuthenticatedUser()
            // await Auth.updateUserAttributes(user, {
            //     email: email
            // })
            if (!res.success && res.message === "LimitExceededException") {
                setErrorMessage("You have exceeded the limit of email sent. Please try again later.");
            } else if (!res.success) {
                setErrorMessage("Something went wrong. Please try again.");
            }
            toggleInput("emailInputActive", false);
            setNewEmail(email);
            toggleInput("verifyUpdateEmailInputActive", true);
            return true;
        } catch (err) {
            setIsContinueBtnLoading(false);
            setErrorMessage("Something went wrong. Please try again.");
            return false;
        }
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleInput("emailInputActive", false)}
            handleSave={onSubmit}
            disable={emailData === userModel?.email || emailData === "" || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Email address</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Check your inbox to confirm your email after any changes.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <EditProfileInput
                    invalid={invalidEmail}
                    value={emailData}
                    onChange={(e) => {
                        setEmailData(e.target.value);
                        setInvalidEmail(false);
                    }}
                />
                <p style={{ color: ColorTheme.Red1.color, fontSize: "12px", marginTop: "8px", marginBottom: "96px", textAlign: "left", visibility: invalidEmail ? "visible" : "hidden" }}>
                    {errorMessage ? errorMessage : "Please enter a valid email address."}
                </p>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default EditProfileEmail;
