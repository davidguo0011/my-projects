import { useState, useCallback } from "react";
import { AuthSignUpConfirmAccountSubPage, AuthMFASubtitle, ReactCodeInputWrapper, AuthMFAInvalid } from "../authBarStyling";
import { motion } from "framer-motion";
import { Auth } from "aws-amplify";
import { userModelSelector } from "../../../state/selectors/userModel";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import ContinueBtn from "../../btn/continueBtn/continueBtn";
import { signUpLoginUser } from "../../../utils/auth/signUpLoginUser";
import { callApi } from "../../../utils/api/api";
import { ICredentials } from "@aws-amplify/core";
import VerificationInput from "react-verification-input";

interface SignUpVerificationPopupProps {
    username: string;
    signUpPassword: string;
    setPageName: (pageName: string) => void;
    codeDeliveryDetails: { AttributeName?: string; DeliveryMedium?: string; Destination?: string };
    pageName: string;
    countdown: number;
    activateCountdown: (active: boolean) => void;
    resendNotReady: boolean;
    handleKeyboardDismiss: () => void;
}

const SignUpVerificationPopup: React.FC<SignUpVerificationPopupProps> = ({
    username,
    signUpPassword,
    setPageName,
    codeDeliveryDetails,
    pageName,
    countdown,
    activateCountdown,
    resendNotReady,
    handleKeyboardDismiss,
}) => {
    const [mfaInvalid, setMfaInvalid] = useState(false);
    const [resetAttemptsExceeded, setResetAttemptsExceeded] = useState(false);
    const [mfaCode, setMfaCode] = useState("");
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const triggerResend = useCallback(async (): Promise<void> => {
        if (resendNotReady) return;
        activateCountdown(true);
        await Auth.resendSignUp(username)
            .then((res) => {})
            .catch((err) => {
                if (err.code === "CodeMismatchException") {
                    setMfaInvalid(true);
                } else if (err.code === "LimitExceededException") {
                    setResetAttemptsExceeded(true);
                }
            });
    }, [activateCountdown, resendNotReady, username]);

    if (pageName !== "SignUpVerificationPopup") return null;

    const confirmSignUpAfterVerificationCode = async (code: string): Promise<void> => {
        setIsContinueBtnLoading(true);
        await Auth.confirmSignUp(username, code)
            .then(async (res) => {
                if (signUpPassword) {
                    await Auth.signIn(username, signUpPassword).then(async (user) => {
                        let creds = await Auth.currentUserCredentials();
                        updateIdentityId(creds);
                        await signUpLoginUser(user);
                        setPageName("AddProfilePhotoPopup");
                    });
                } else {
                    setPageName("PasswordPopup");
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "CodeMismatchException") {
                    setMfaInvalid(true);
                    setIsContinueBtnLoading(false);
                }
            });
    };

    const updateIdentityId = async (creds: ICredentials) => {
        if (userModel) {
            if (userModel.identityID === null) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, `user/identityid`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        identityID: creds.identityId,
                    },
                });
            }
        }
    };

    const handleComplete = async (code: string) => {
        if (code.length === 6) {
            await confirmSignUpAfterVerificationCode(code);
        }
    };

    const handleChange = (code: string) => {
        setMfaInvalid(false);
        setMfaCode(code);
    };

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} style={{ height: "100%" }} initial={{ x: 400 }}>
            <AuthSignUpConfirmAccountSubPage>
                <ReactCodeInputWrapper mfaInvalid={mfaInvalid}>
                    <VerificationInput
                        value={mfaCode}
                        length={6}
                        placeholder=""
                        validChars="0-9"
                        autoFocus={true}
                        onChange={handleChange}
                        onComplete={handleComplete}
                        classNames={{
                            container: "verification-container",
                            character: "verification-character",
                            characterInactive: "verification-character--inactive",
                            characterSelected: "verification-character--selected",
                        }}
                        onBlur={handleKeyboardDismiss}
                    />
                </ReactCodeInputWrapper>
                <AuthMFASubtitle>{`We sent a 6 digit code to ${codeDeliveryDetails ? codeDeliveryDetails.Destination : ""}`}</AuthMFASubtitle>
                <AuthMFAInvalid mfaInvalid={mfaInvalid || resetAttemptsExceeded}>
                    {resetAttemptsExceeded ? "You exceeded your reset attempts, please try again later" : "You have entered the wrong code, please try again"}
                </AuthMFAInvalid>
                <ContinueBtn
                    background={"black"}
                    style={{ marginTop: "unset" }}
                    continueType="button"
                    onClick={triggerResend}
                    disabled={resendNotReady || isContinueBtnLoading}
                    isLoading={isContinueBtnLoading}
                >
                    Resend code {!resendNotReady ? "" : `(${countdown})`}
                </ContinueBtn>
            </AuthSignUpConfirmAccountSubPage>
        </motion.div>
    );
};

export default SignUpVerificationPopup;
