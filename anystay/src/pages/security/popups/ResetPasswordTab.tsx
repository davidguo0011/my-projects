import { useState, useEffect, useCallback, useRef } from "react";
import { Auth } from "aws-amplify";
import {
    ChangePasswordForgotPasswordTabWrapper,
    ChangePasswordForgotPasswordTitle,
    ChangePasswordForgotPasswordInput,
    ChangePasswordForgotPasswordSubtitle,
    ReactCodeInputWrapper,
    EditLoginMFASubtitle,
} from "../loginAndSecurityStyling";
import { ExtendedCognitoUser } from "../../../interfaces/models/user";
import useClickOutside from "../../../hook/useClickOutside";
import useCountdown from "../../../hook/useCountdown";
import { useRecoilState } from "recoil";
import { userSelector } from "../../../state/selectors/user";
import { CodeDeliveryDetails } from "../../../interfaces/state/codeDeliveryDetails";
import VerificationInput from "react-verification-input";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ResetPasswordTabProps {
    popupName: string;
    deactivatePopupCards: () => void;
    updateCodeDeliveryDetails: (details: CodeDeliveryDetails) => void;
    codeDeliveryDetails: CodeDeliveryDetails | null;
}

const ResetPasswordTab: React.FC<ResetPasswordTabProps> = ({ popupName, deactivatePopupCards, updateCodeDeliveryDetails, codeDeliveryDetails }) => {
    const wrapperRef = useClickOutside(popupName === "resetPassword", deactivatePopupCards);
    const [user, setUser] = useRecoilState<ExtendedCognitoUser | null>(userSelector);
    const [mfaInvalid, setMfaInvalid] = useState<boolean>(false);
    const [resetAttemptsExceeded, setResetAttemptsExceeded] = useState<boolean>(false);
    const [mfaCode, setMfaCode] = useState<string>("");
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>("");
    const [resendReady, setResendReady] = useState<boolean>(true);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [countdown, activateCountdown] = useCountdown(60);
    const resendOnOpenPopup = useRef<boolean>(true);

    const changePassword = async () => {
        if (newPassword.length < 8) {
            setInvalidPassword(true);
        } else {
            if (user) {
                await Auth.forgotPasswordSubmit(user.username, mfaCode, newPassword)
                    .then((data) => {
                        console.log("successfully changed password");
                        deactivatePopupCards();
                    })
                    .catch((err) => {
                        if (err.code === "CodeMismatchException") {
                            setMfaInvalid(true);
                        }
                        console.log(err);
                    });
            }
        }
    };

    const resendForgotPassword = useCallback(async () => {
        if (resendReady && user) {
            setResendReady(false);
            await Auth.forgotPassword(user.username)
                .then((data) => {
                    updateCodeDeliveryDetails(data.CodeDeliveryDetails);
                })
                .catch((err) => {
                    if (err.code === "LimitExceededException") {
                        setResetAttemptsExceeded(true);
                    }
                    console.log(err);
                });
            activateCountdown(true);
            setTimeout(() => {
                setResendReady(true);
            }, 60000);
        }
    }, [activateCountdown, resendReady, updateCodeDeliveryDetails, user]);

    useEffect(() => {
        if (popupName === "resetPassword" && resendReady && resendOnOpenPopup.current) {
            resendForgotPassword();
            resendOnOpenPopup.current = false;
        } else {
            if (!(popupName === "resetPassword") && resendReady) {
                resendOnOpenPopup.current = true;
            }
        }
    }, [resendReady, resendForgotPassword, popupName]);

    const handleChange = (code: string) => {
        setMfaInvalid(false);
        setMfaCode(code);
    };

    if (!(popupName === "resetPassword")) return null;

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await changePassword();
        setIsContinueBtnLoading(false);
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={deactivatePopupCards}
            handleSave={handleSave}
            disable={!mfaCode || mfaCode.length !== 6 || newPassword === "" || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Save"
            cancelBtnText={resendReady ? `Resend code?` : `Try again in ${countdown}s`}
            cancelPopup={resendForgotPassword}
        >
            <ChangePasswordForgotPasswordTabWrapper>
                <ChangePasswordForgotPasswordTitle>Reset password</ChangePasswordForgotPasswordTitle>
                <ChangePasswordForgotPasswordSubtitle>Never share your password with anyone.</ChangePasswordForgotPasswordSubtitle>
                <ReactCodeInputWrapper mfaInvalid={mfaInvalid}>
                    <VerificationInput
                        value={mfaCode}
                        length={6}
                        placeholder=""
                        validChars="0-9"
                        autoFocus={true}
                        onChange={handleChange}
                        classNames={{
                            container: "verification-container",
                            character: "verification-character",
                            characterInactive: "verification-character--inactive",
                            characterSelected: "verification-character--selected",
                        }}
                    />
                </ReactCodeInputWrapper>
                {/* <ChangePasswordForgotPasswordInput style={{marginTop: "56px"}} type="password" value={mfaCode} onChange={(e) => setState({mfaCode: e.target.value})} placeholder={"Enter your MFA code"} /> */}

                <EditLoginMFASubtitle mfaInvalid={mfaInvalid || resetAttemptsExceeded}>
                    {resetAttemptsExceeded
                        ? "Reset attempts exceeded, please try again later"
                        : mfaInvalid
                          ? "You have entered the wrong code, please try again"
                          : `6 digit code sent to ${codeDeliveryDetails ? codeDeliveryDetails.Destination : ""}`}
                </EditLoginMFASubtitle>

                <ChangePasswordForgotPasswordInput
                    type="password"
                    value={newPassword}
                    passwordInvalid={invalidPassword}
                    onChange={(e) => {
                        setNewPassword(e.target.value);
                        setInvalidPassword(false);
                    }}
                    placeholder={"Enter your new password"}
                />
                <EditLoginMFASubtitle mfaInvalid={invalidPassword || resetAttemptsExceeded}>
                    {resetAttemptsExceeded ? "Reset attempts exceeded, please try again later" : invalidPassword ? "You must enter a password with at least 8 chars" : `New password`}
                </EditLoginMFASubtitle>
            </ChangePasswordForgotPasswordTabWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default ResetPasswordTab;
