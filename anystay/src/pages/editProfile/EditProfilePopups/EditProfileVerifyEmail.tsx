import { useState, useEffect, useRef, useCallback } from "react";
import { callApi } from "../../../utils/api/api";
import { EditProfileInputWrapper, EditProfileInputInfoWrapper, EditProfileInputInfoTitle, EditProfileInputInfoSubtitle, ReactCodeInputWrapper, EditProfileCodeSubtitle } from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import useCountdown from "../../../hook/useCountdown";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import VerificationInput from "react-verification-input";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditProfileVerifyEmailProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
}

const EditProfileVerifyEmail: React.FC<EditProfileVerifyEmailProps> = ({ active, toggleInput }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("verifyEmailInputActive", false));
    const [code, setCode] = useState("");
    const [resendReady, setResendReady] = useState(true);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [mfaInvalid, setMfaInvalid] = useState(false);
    const [mfaExpired, setMfaExpired] = useState(false);
    const [attemptsExceeded, setAttemptsExceeded] = useState(false);
    const resendOnOpenPopup = useRef(true);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const [countdown, activateCountdown] = useCountdown(60);

    const resendInitialEmail = useCallback(async () => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/email/verify", {
            headers: {
                Authorization: accessToken,
            },
            body: {},
        })
            .then((res) => console.log(res))
            .catch((err) => {
                if (err.response.status === 434) {
                    setAttemptsExceeded(true);
                }
                if (err.code && err.code === "LimitExceededException") {
                    setAttemptsExceeded(true);
                }
            });
    }, [accessToken]);

    const triggerResend = useCallback(async () => {
        setResendReady(false);
        await resendInitialEmail();
        activateCountdown(true);
        setTimeout(() => {
            setResendReady(true);
        }, 60000);
    }, [resendInitialEmail, activateCountdown]);

    useEffect(() => {
        setAttemptsExceeded(false);
        setMfaExpired(false);
        setMfaInvalid(false);
        setCode("");
        if (active && resendReady && resendOnOpenPopup.current) {
            triggerResend();
            resendOnOpenPopup.current = false;
        } else {
            if (!active && resendReady) {
                resendOnOpenPopup.current = true;
            }
        }
    }, [active, resendReady, triggerResend]);

    const verifyProfileEmailConfirm = async (code: string) => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/email/verify/confirm", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                verificationCode: code,
            },
        })
            .then((res) => {
                console.log("res", res);
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.emailConfirmed = true;
                setUserModel(userModelCopy);
                toggleInput("verifyEmailInputActive", false);
            })
            .catch((error) => {
                if (error.response.status === 432) {
                    setMfaInvalid(true);
                }
                if (error.response.status === 433) {
                    setMfaExpired(true);
                }
            });
    };

    let verificationCodeMessage = `6 digit code sent to ${userModel?.email}`;
    if (mfaInvalid) {
        verificationCodeMessage = "You have entered the wrong code, please try again";
    } else if (mfaExpired) {
        verificationCodeMessage = "Verification code expired, please request a new one";
    } else if (attemptsExceeded) {
        verificationCodeMessage = "You have exceeded the attempts limit, please try again later";
    }

    const handleChange = (code: string) => {
        setMfaInvalid(false);
        setMfaExpired(false);
        setCode(code);
    };

    if (!active) return null;

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await verifyProfileEmailConfirm(code);
        setIsContinueBtnLoading(false);
    };

    const handleResend = () => {
        setAttemptsExceeded(false);
        setMfaExpired(false);
        setMfaInvalid(false);
        if (resendReady) {
            triggerResend();
        }
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={() => toggleInput("verifyEmailInputActive", false)}
            handleSave={handleSave}
            disable={code === "" || code.length < 6 || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Verify"
            cancelPopup={handleResend}
            cancelBtnText={resendReady ? `Resend code?` : `Try again in ${countdown}s`}
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Verify your email</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Please check your email for a verification code.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <ReactCodeInputWrapper mfaInvalid={mfaInvalid} mfaExpired={mfaExpired}>
                    <VerificationInput
                        value={code}
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
                <EditProfileCodeSubtitle mfaInvalid={mfaInvalid} mfaExpired={mfaExpired}>
                    {verificationCodeMessage}
                </EditProfileCodeSubtitle>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfileVerifyEmail;
