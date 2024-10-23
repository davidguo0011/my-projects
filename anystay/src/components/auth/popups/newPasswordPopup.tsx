import { useState, ChangeEvent, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { AuthSignInSubPage, AuthSignInInput, AuthMFAInvalid, NewPasswordSubtitle, NewPasswordTitle, AuthCancelBtn, AuthContentTitleWrapper } from "../authBarStyling";
import ContinueBtn from "../../btn/continueBtn/continueBtn";

interface NewPasswordPopupProps {
    setPageName: (pageName: string) => void;
    newPassword: string;
    setNewPassword: (newPassword: string) => void;
    handleKeyboardDismiss: () => void;
}

const NewPasswordPopup: React.FC<NewPasswordPopupProps> = ({ setPageName, setNewPassword, newPassword, handleKeyboardDismiss }) => {
    const [newPasswordInvalid, setNewPasswordInvalid] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);

    const checkNewPassword = (): void => {
        if (newPassword && newPassword.length >= 8 && newPassword !== "") {
            setIsContinueBtnLoading(true);
            setPageName("SignInVerificationPopup");
            setIsContinueBtnLoading(false);
        } else {
            setIsContinueBtnLoading(true);
            setNewPasswordInvalid(true);
            setIsContinueBtnLoading(false);
        }
    };

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }}>
            <AuthSignInSubPage style={{ height: "100%" }}>
                <AuthContentTitleWrapper style={{ marginBottom: "0" }}>
                    <NewPasswordTitle>Create a password</NewPasswordTitle>
                    <NewPasswordSubtitle>Never share your password with anyone.</NewPasswordSubtitle>
                </AuthContentTitleWrapper>

                <AuthSignInInput
                    style={{ width: "100%", margin: "0", marginBottom: "12px" }}
                    placeholder="New password"
                    type="password"
                    value={newPassword}
                    onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                        setNewPassword(e.target.value);
                        setNewPasswordInvalid(false);
                    }}
                    name="password"
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => (e.key === "Enter" ? checkNewPassword() : null)}
                    onBlur={handleKeyboardDismiss}
                />

                <AuthMFAInvalid mfaInvalid={newPasswordInvalid}>You must enter a valid password</AuthMFAInvalid>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "72px", alignItems: "center" }}>
                    <AuthCancelBtn onClick={() => setPageName("PasswordPopup")}>Cancel</AuthCancelBtn>
                    <ContinueBtn
                        background={"black"}
                        style={{ position: "relative", width: "unset" }}
                        isLoading={isContinueBtnLoading}
                        continueType="button"
                        onClick={checkNewPassword}
                        disabled={isContinueBtnLoading}
                    >
                        Reset
                    </ContinueBtn>
                </div>
            </AuthSignInSubPage>
        </motion.div>
    );
};

export default NewPasswordPopup;
