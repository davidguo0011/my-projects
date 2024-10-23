import { useState, useRef, useEffect, useCallback } from "react";
import { AuthSignInSubPage, AuthMFAInvalid, AuthMFASubtitle, ReactCodeInputWrapper } from "../authBarStyling";
import { motion } from "framer-motion";
import { Auth } from "aws-amplify";
import ContinueBtn from "../../btn/continueBtn/continueBtn";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import { loginUser } from "../../../utils/auth/loginUser";
import { useRecoilState } from "recoil";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import VerificationInput from "react-verification-input";

interface SignInVerificationPopupProps {
    username: string;
    mfaInvalid: boolean;
    setMfaInvalid: (mfaInvalid: boolean) => void;
    codeDeliveryDetails: { AttributeName?: string; DeliveryMedium?: string; Destination?: string };
    setCodeDeliveryDetails: (codeDeliveryDetails: { AttributeName?: string; DeliveryMedium?: string; Destination?: string }) => void;
    setPageName: (pageName: string) => void;
    pageName: string;
    countdown: number;
    activateCountdown: (active: boolean) => void;
    newPassword: string;
    setLoggingIn: (loggingIn: boolean) => void;
    resendNotReady: boolean;
    handleKeyboardDismiss: () => void;
}

const SignInVerificationPopup: React.FC<SignInVerificationPopupProps> = ({
    username,
    mfaInvalid,
    setMfaInvalid,
    codeDeliveryDetails,
    setCodeDeliveryDetails,
    setPageName,
    pageName,
    countdown,
    activateCountdown,
    newPassword,
    setLoggingIn,
    resendNotReady,
    handleKeyboardDismiss,
}) => {
    const resendOnOpenPopup = useRef(true);
    const isDesktopSize = useIsDesktopSize();
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [mfaCode, setMfaCode] = useState("");
    const [resetAttemptsExceeded, setResetAttemptsExceeded] = useState(false);

    const forgotPasswordResend = useCallback(async () => {
        if (resendNotReady) return;
        activateCountdown(true);

        await Auth.forgotPassword(username)
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
    }, [activateCountdown, resendNotReady, setCodeDeliveryDetails, setMfaInvalid, username]);

    const resetPasswordSubmit = async (mfaCode: string) => {
        setIsContinueBtnLoading(true);
        await Auth.forgotPasswordSubmit(username, mfaCode, newPassword)
            .then(async () => {
                await Auth.signIn(username, newPassword).then(async (user) => {
                    // let creds = await Auth.currentUserCredentials();
                    setIsContinueBtnLoading(false);
                    setLoggingIn(true);
                    await loginUser(user);
                    //back to default
                    setPageName("PhonePopup");
                    setLoggingIn(false);
                    //close auth
                    setSignInMenuActivated(false);
                });
            })
            .catch((err) => {
                setLoggingIn(false);
                setIsContinueBtnLoading(false);
                if (err.code === "CodeMismatchException") {
                    setMfaInvalid(true);
                } else if (err.code === "LimitExceededException") {
                    setResetAttemptsExceeded(true);
                }
            });
    };

    useEffect(() => {
        if (resendNotReady) return;
        if (pageName === "SignInVerificationPopup" && resendOnOpenPopup.current) {
            forgotPasswordResend();
            resendOnOpenPopup.current = false;
        } else {
            if (pageName !== "SignInVerificationPopup") {
                resendOnOpenPopup.current = true;
            }
        }
    }, [forgotPasswordResend, pageName, resendNotReady]);

    if (pageName !== "SignInVerificationPopup") return null;
    const handleComplete = (code: string) => {
        if (code.length === 6) {
            resetPasswordSubmit(code);
        }
    };

    const handleChange = (code: string) => {
        setMfaInvalid(false);
        setMfaCode(code);
    };
    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} style={{ height: "100%" }} initial={{ x: 400 }}>
            <AuthSignInSubPage style={{ height: "100%" }}>
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
                    style={{ marginTop: "unset" }}
                    isLoading={isContinueBtnLoading}
                    background={"black"}
                    continueType="button"
                    onClick={forgotPasswordResend}
                    disabled={resendNotReady || isContinueBtnLoading}
                >
                    Resend code {!resendNotReady ? "" : `(${countdown})`}
                </ContinueBtn>
            </AuthSignInSubPage>
        </motion.div>
    );
};

export default SignInVerificationPopup;
