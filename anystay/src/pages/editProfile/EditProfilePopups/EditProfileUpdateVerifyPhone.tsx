import { useState, useCallback } from "react";
import { callApi } from "../../../utils/api/api";
import { EditProfileInputWrapper, EditProfileInputInfoWrapper, EditProfileInputInfoTitle, EditProfileInputInfoSubtitle, ReactCodeInputWrapper, EditProfileCodeSubtitle } from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import useCountdown from "../../../hook/useCountdown";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import VerificationInput from "react-verification-input";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditProfileUpdateVerifyEmailProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
    newPhone: string;
}

const EditProfileUpdateVerifyPhone: React.FC<EditProfileUpdateVerifyEmailProps> = ({ newPhone, active, toggleInput }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("verifyUpdatePhoneInputActive", false));
    const [code, setCode] = useState("");
    const [resendReady, setResendReady] = useState(true);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [mfaInvalid, setMfaInvalid] = useState(false);
    const [attemptsExceeded, setAttemptsExceeded] = useState(false);
    const [countdown, activateCountdown] = useCountdown(60);

    const resendSMS = useCallback(async () => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/phone", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                phone: newPhone,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => {
                if (err.code === "LimitExceededException") {
                    setAttemptsExceeded(true);
                }
            });
    }, [accessToken, newPhone]);

    const triggerResend = async () => {
        setResendReady(false);
        await resendSMS();
        activateCountdown(true);
        setTimeout(() => {
            setResendReady(true);
        }, 60000);
    };

    // useEffect(() => {
    //     if (active && resendReady && resendOnOpenPopup.current) {
    //         triggerResend();
    //         resendOnOpenPopup.current = false;
    //     } else {
    //         if (!active && resendReady) {
    //             resendOnOpenPopup.current = true;
    //         }
    //     }
    // }, [active, resendReady, triggerResend]);

    const verifyUpdateProfilePhoneConfirm = async () => {
        if (code) {
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/phone/confirm", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    verificationCode: code,
                },
            })
                .then((res) => {
                    if (res.success) {
                        const userModelCopy = JSON.parse(JSON.stringify(userModel));
                        userModelCopy.phone = newPhone;
                        setUserModel(userModelCopy);
                        toggleInput("verifyUpdatePhoneInputActive", false);
                    } else {
                        setMfaInvalid(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    if (err.response.data.message === "CodeMismatchException") {
                        setMfaInvalid(true);
                    }
                });
        }
    };
    const handleChange = (inputCode: string) => {
        setMfaInvalid(false);
        setCode(inputCode);
    };
    if (!active) return null;

    const handleSave = () => {
        verifyUpdateProfilePhoneConfirm();
    };

    const handleResend = () => {
        if (resendReady) {
            triggerResend();
        }
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleInput("verifyUpdatePhoneInputActive", false)}
            handleSave={handleSave}
            btnText="Confirm"
            cancelPopup={handleResend}
            cancelBtnText={resendReady ? `Resend code?` : `Try again in ${countdown}s`}
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Verify new phone</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Please check your message for a verification code.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>

                <ReactCodeInputWrapper mfaInvalid={mfaInvalid}>
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
                <EditProfileCodeSubtitle mfaInvalid={mfaInvalid}>
                    {attemptsExceeded
                        ? "You have exceeded the attempts limit, please try again later"
                        : mfaInvalid
                          ? "You have entered the wrong code, please try again"
                          : `Enter the 6 digit code we sent to ${newPhone}`}
                </EditProfileCodeSubtitle>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfileUpdateVerifyPhone;
