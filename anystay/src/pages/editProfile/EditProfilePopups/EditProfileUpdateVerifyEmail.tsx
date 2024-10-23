import { useState, useEffect, useCallback } from "react";
import { Auth } from "aws-amplify";
import { callApi } from "../../../utils/api/api";
import { EditProfileInputWrapper, EditProfileInputInfoWrapper, EditProfileInputInfoTitle, EditProfileInputInfoSubtitle, ReactCodeInputWrapper, EditProfileCodeSubtitle } from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import useCountdown from "../../../hook/useCountdown";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import VerificationInput from "react-verification-input";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditProfileUpdateVerifyEmailProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
    newEmail: string;
}

const EditProfileUpdateVerifyEmail: React.FC<EditProfileUpdateVerifyEmailProps> = ({ active, toggleInput, newEmail }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("verifyUpdateEmailInputActive", false));
    const [code, setCode] = useState("");
    const [resendReady, setResendReady] = useState(true);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [attemptsExceeded, setAttemptsExceeded] = useState(false);
    const [mfaInvalid, setMfaInvalid] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [countdown, activateCountdown] = useCountdown(60);

    const resendEmail = useCallback(async () => {
        const user = await Auth.currentAuthenticatedUser();

        await Auth.updateUserAttributes(user, {
            email: newEmail,
        })
            .then((res) => console.log(res))
            .catch((err) => {
                if (err.code === "LimitExceededException") {
                    setAttemptsExceeded(true);
                }
            });
    }, [newEmail]);

    const triggerResend = async () => {
        setResendReady(false);
        await resendEmail();
        activateCountdown(true);
        setTimeout(() => {
            setResendReady(true);
        }, 60000);
    };

    const verifyUpdateProfileEmailConfirm = async (code: string) => {
        // Verify if the user has entered the correct code, if they have update their email to confirmed
        const user = await Auth.currentAuthenticatedUser();

        await Auth.verifyUserAttributeSubmit(user, "email", code)
            .then(async (res) => {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/email", {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        stripeAccountID: userHostModel?.stripeAccountID,
                        email: newEmail,
                    },
                })
                    .then((res) => {
                        const userModelCopy = JSON.parse(JSON.stringify(userModel));
                        userModelCopy.email = newEmail;
                        setUserModel(userModelCopy);
                        toggleInput("verifyUpdateEmailInputActive", false);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                if (error.code === "CodeMismatchException") {
                    setMfaInvalid(true);
                }
            });
    };

    useEffect(() => {
        setMfaInvalid(false);
    }, []);

    const handleChange = (code: string) => {
        setMfaInvalid(false);
        setCode(code);
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await verifyUpdateProfileEmailConfirm(code);
        setIsContinueBtnLoading(false);
    };

    const handleResend = () => {
        if (resendReady) {
            triggerResend();
        }
    };

    if (!active) return null;
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => toggleInput("verifyUpdateEmailInputActive", false)}
            handleSave={handleSave}
            disable={code === "" || code.length < 6 || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Confirm"
            cancelPopup={handleResend}
            cancelBtnText={resendReady ? `Resend code?` : `Try again in ${countdown}s`}
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Verify new email</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Please check your email for a verification code.</EditProfileInputInfoSubtitle>
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
                          ? `You have entered the wrong code, please try again.`
                          : `6 digit code sent to ${newEmail}`}
                </EditProfileCodeSubtitle>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfileUpdateVerifyEmail;
