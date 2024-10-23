import { useState, ChangeEvent, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Auth } from "aws-amplify";
import { AuthSignInSubPage, AuthSignInInput, AuthContentTitleWrapper, AuthContentTitle, AuthForgotPasswordButton, AuthSignInInputInvalid, AuthContentSubTitle } from "../authBarStyling";

import ContinueBtn from "../../btn/continueBtn/continueBtn";
import { userModelSelector } from "../../../state/selectors/userModel";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import { loginUser } from "../../../utils/auth/loginUser";
import { directToAfterLoginSelector } from "../../../state/selectors/directToAfterLogin";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../../utils/api/api";
import { ICredentials } from "@aws-amplify/core";
import { googleLoginErrStateSelector } from "../../../state/selectors/googleLoginErr";

interface PasswordPopupProps {
    phoneNumFromPhonePopup: string;
    setLoggingIn: (loggingIn: boolean) => void;
    username: string;
    setPageName: (pageName: string) => void;
    setCodeDeliveryDetails: (codeDeliveryDetails: { AttributeName?: string; DeliveryMedium?: string; Destination?: string }) => void;
    setMfaInvalid: (mfaInvalid: boolean) => void;
    signInPasswordInvalid: boolean;
    setSignInPasswordInvalid: (signInPasswordInvalid: boolean) => void;
    handleKeyboardDismiss: () => void;
    isGoogleAccountExist: boolean;
}

const PasswordPopup: React.FC<PasswordPopupProps> = ({
    phoneNumFromPhonePopup,
    setLoggingIn,
    username,
    setPageName,
    setCodeDeliveryDetails,
    setMfaInvalid,
    signInPasswordInvalid,
    setSignInPasswordInvalid,
    handleKeyboardDismiss,
    isGoogleAccountExist,
}) => {
    const [passwordResetRequired, setPasswordResetRequired] = useState(false);
    const [resetAttemptsExceeded, setResetAttemptsExceeded] = useState(false);
    const [user, setUser] = useState(false)
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [password, setPassword] = useState("");
    const [directToAfterLogin, setDirectToAfterLogin] = useRecoilState(directToAfterLoginSelector);
    const [googleLoginErrState, setGoogleLoginErrState] = useRecoilState(googleLoginErrStateSelector);
    const [passwordCannotBeEmpty, setPasswordCannotBeEmpty] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const signIn = async (password: string): Promise<void> => {
        try {
            if (password) {
                setPasswordCannotBeEmpty(false);
                setLoggingIn(true);
                setIsContinueBtnLoading(true);
                await Auth.signIn(username, password)
                    .then(async (user) => {
                        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                            console.log("TRIGGERED")
                            setUser(user)
                            setPasswordResetRequired(true)
                            setPassword("");
                            setSignInPasswordInvalid(false);
                            setLoggingIn(false);
                            setIsContinueBtnLoading(false);
                        } else {
                            // let creds = await Auth.currentUserCredentials();
                            // updateIdentityId(creds);
                            const { userHostModel } = await loginUser(user);
                            if (directToAfterLogin === "create-listing" && userHostModel) {
                                navigate(`/create-listing/${userHostModel.id}`);
                                setDirectToAfterLogin("");
                            }
                            setSignInPasswordInvalid(false);
                            setLoggingIn(false);
                            setGoogleLoginErrState("");
                            setSignInMenuActivated(false);
                        }
                    })
                    .catch(async (err) => {
                        console.log(err)
                        setLoggingIn(false);
                        setIsContinueBtnLoading(false);
                        if (err.code === "NotAuthorizedException") {
                            if (err.message === "User is disabled.") {
                                setPageName("AccountDeactivatedPopup");
                            }
                        } else if (err.code === "UserNotConfirmedException") {
                            setCodeDeliveryDetails({ Destination: phoneNumFromPhonePopup });
                            setPageName("SignUpVerificationPopup");
                            await Auth.resendSignUp(username)
                                .then((data) => {
                                    setCodeDeliveryDetails(data.CodeDeliveryDetails);
                                })
                                .catch((err) => {
                                    if (err.code === "CodeMismatchException") {
                                        setMfaInvalid(true);
                                    } else if (err.code === "LimitExceededException") {
                                        setResetAttemptsExceeded(true);
                                    }
                                });
                        }
                        setSignInPasswordInvalid(true);
                    });
            } else {
                setPasswordCannotBeEmpty(true);
                setIsContinueBtnLoading(false);
                console.log("password cannot be empty");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const resetPassword = async (newPassword: string) => {
        try {
            await Auth.completeNewPassword(user, newPassword, {})
                .then(async (user) => {
                    const { userHostModel } = await loginUser(user);
                    if (directToAfterLogin === "create-listing" && userHostModel) {
                        navigate(`/create-listing/${userHostModel.id}`);
                        setDirectToAfterLogin("");
                    }
                    setSignInPasswordInvalid(false);
                    setLoggingIn(false);
                    setGoogleLoginErrState("");
                    setSignInMenuActivated(false);
                })
                .catch(async (err) => {
                    console.log("DID NOT WORK")
                    console.log(err)
                    setLoggingIn(false);
                    setIsContinueBtnLoading(false);
                    if (err.code === "NotAuthorizedException") {
                        if (err.message === "User is disabled.") {
                            setPageName("AccountDeactivatedPopup");
                        }
                    } else if (err.code === "UserNotConfirmedException") {
                        setCodeDeliveryDetails({ Destination: phoneNumFromPhonePopup });
                        setPageName("SignUpVerificationPopup");
                        await Auth.resendSignUp(username)
                            .then((data) => {
                                setCodeDeliveryDetails(data.CodeDeliveryDetails);
                            })
                            .catch((err) => {
                                if (err.code === "CodeMismatchException") {
                                    setMfaInvalid(true);
                                } else if (err.code === "LimitExceededException") {
                                    setResetAttemptsExceeded(true);
                                }
                            });
                    }
                    setSignInPasswordInvalid(true);
                });
        } catch (err) {
            console.log(err);
        }
    }   

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }}>
            <AuthSignInSubPage>
                <AuthContentTitleWrapper>
                    {!passwordResetRequired ?
                        <>
                            <AuthContentTitle>Log in to Anystay</AuthContentTitle>
                            <AuthContentTitle>with your password</AuthContentTitle>
                            {isGoogleAccountExist && <AuthContentSubTitle>Account already exists, please enter your password to login</AuthContentSubTitle>}
                        </>
                        :
                        <>
                            <AuthContentTitle>Create a new</AuthContentTitle>
                            <AuthContentTitle>permanent password</AuthContentTitle>
                        </>
                    }
                </AuthContentTitleWrapper>
                <AuthSignInInput
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    invalid={signInPasswordInvalid || passwordCannotBeEmpty}
                    style={{ width: "100%", margin: "0", fontSize: "16px" }}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onKeyDown={async (e: KeyboardEvent<HTMLInputElement>) => (e.key === "Enter" ? await signIn(password) : null)}
                    onBlur={handleKeyboardDismiss}
                />
                <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "space-between", marginTop: "16px" }}>
                    <AuthForgotPasswordButton
                        onClick={() => {
                            // forgotPassword();
                            setPageName("NewPasswordPopup");
                            setSignInPasswordInvalid(false);
                        }}
                        type="button"
                    >
                        Forgot password?
                    </AuthForgotPasswordButton>
                    <AuthSignInInputInvalid invalid={signInPasswordInvalid || resetAttemptsExceeded || passwordCannotBeEmpty}>
                        {resetAttemptsExceeded
                            ? "You exceeded your reset attempts, please try again later"
                            : signInPasswordInvalid
                              ? "Invalid password"
                              : passwordCannotBeEmpty
                                ? "Password cannot be empty"
                                : ""}
                    </AuthSignInInputInvalid>
                </div>
                <ContinueBtn
                    style={{ position: "relative" }}
                    continueType="button"
                    isLoading={isContinueBtnLoading}
                    disabled={isContinueBtnLoading}
                    onClick={() => {
                        if (passwordResetRequired) {
                            resetPassword(password);
                        } else {
                            signIn(password);
                        }
                    }}
                    background={"black"}
                >
                    Continue
                </ContinueBtn>
            </AuthSignInSubPage>
        </motion.div>
    );
};

export default PasswordPopup;
