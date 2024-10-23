import { useState } from "react";
import { Auth } from "aws-amplify";
import {
    ChangePasswordForgotPasswordTabWrapper,
    ChangePasswordForgotPasswordTitle,
    ChangePasswordForgotPasswordInputTitle,
    ChangePasswordForgotPasswordInput,
    ChangePasswordForgotPasswordSubtitle,
    ChangePasswordForgotPasswordResetPasswordButton,
    ChangePasswordForgotPasswordInputLabel,
} from "../loginAndSecurityStyling";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ChangePasswordForgotPasswordTabProps {
    activateCard: (popupName: string) => void;
    deactivatePopupCards: () => void;
}

export default function ChangePasswordForgotPasswordTab({ activateCard, deactivatePopupCards }: ChangePasswordForgotPasswordTabProps) {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);

    const [resetAttemptsExceeded, setResetAttemptsExceeded] = useState<boolean>(false);

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);

    const [newPasswordInvalid, setNewPasswordInvalid] = useState<boolean>(false);
    const [newPasswordInvalidMsg, setNewPasswordInvalidMsg] = useState<string>("");
    const [currentPasswordInvalid, setCurrentPasswordInvalid] = useState<boolean>(false);
    const [currentPasswordInvalidMsg, setCurrentPasswordInvalidMsg] = useState<string>("");

    const changePassword = async (currentPassword: string, newPassword: string) => {
        let inputValid = true;
        if (!newPassword) {
            setNewPasswordInvalid(true);
            setNewPasswordInvalidMsg("New password cannot be empty");
            inputValid = false;
        }

        if (newPassword.length < 8) {
            setNewPasswordInvalid(true);
            setNewPasswordInvalidMsg("8 characters minimum");
            inputValid = false;
        }

        if (currentPassword.length === 0) {
            setCurrentPasswordInvalid(true);
            setCurrentPasswordInvalidMsg("Current password cannot be empty");
            inputValid = false;
        }
        if (!inputValid) return;

        await Auth.currentAuthenticatedUser()
            .then((user) => {
                return Auth.changePassword(user, currentPassword, newPassword);
            })
            .then((data) => {
                deactivatePopupCards();
            })
            .catch((err) => {
                if (err.code === "NotAuthorizedException") {
                    setCurrentPasswordInvalid(true);
                    setCurrentPasswordInvalidMsg("Current password is invalid");
                } else if (err.code === "LimitExceededException") {
                    setResetAttemptsExceeded(true);
                }
                setIsContinueBtnLoading(false);
            });
    };
    const forgotPassword = () => {
        activateCard("resetPassword");
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await changePassword(currentPassword, newPassword);
        setIsContinueBtnLoading(false);
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={deactivatePopupCards}
            handleSave={handleSave}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <ChangePasswordForgotPasswordTabWrapper>
                <ChangePasswordForgotPasswordTitle>Reset password</ChangePasswordForgotPasswordTitle>
                <ChangePasswordForgotPasswordSubtitle>Never share your password with anyone.</ChangePasswordForgotPasswordSubtitle>
                <ChangePasswordForgotPasswordInput
                    type="password"
                    passwordInvalid={currentPasswordInvalid}
                    value={currentPassword}
                    onChange={(e) => {
                        setCurrentPassword(e.target.value);
                        setCurrentPasswordInvalid(false);
                    }}
                    placeholder={"Current password"}
                />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    {resetAttemptsExceeded ? (
                        <ChangePasswordForgotPasswordInputLabel>Reset attempts exceeded</ChangePasswordForgotPasswordInputLabel>
                    ) : currentPasswordInvalid ? (
                        <ChangePasswordForgotPasswordInputLabel>{currentPasswordInvalidMsg}</ChangePasswordForgotPasswordInputLabel>
                    ) : (
                        <ChangePasswordForgotPasswordInputTitle>Current password</ChangePasswordForgotPasswordInputTitle>
                    )}
                    {!resetAttemptsExceeded}
                </div>
                <ChangePasswordForgotPasswordInput
                    type="password"
                    passwordInvalid={newPasswordInvalid}
                    value={newPassword}
                    onChange={(e) => {
                        setNewPassword(e.target.value);
                        setNewPasswordInvalid(false);
                        setNewPasswordInvalidMsg("");
                    }}
                    placeholder={"New password"}
                />
                {newPasswordInvalid ? (
                    <ChangePasswordForgotPasswordInputLabel>{newPasswordInvalidMsg}</ChangePasswordForgotPasswordInputLabel>
                ) : (
                    <ChangePasswordForgotPasswordInputTitle>New password</ChangePasswordForgotPasswordInputTitle>
                )}
            </ChangePasswordForgotPasswordTabWrapper>
        </GlobalPopupContainerCenter>
    );
}
