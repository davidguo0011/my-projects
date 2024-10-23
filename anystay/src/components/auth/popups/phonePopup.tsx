import { useState, KeyboardEvent, useRef } from "react";
import { motion } from "framer-motion";
import {
    AuthSignInSocialButton,
    AuthSignInSubPage,
    AuthContentTitleWrapper,
    AuthContentTitle,
    PhoneInputWrapper,
    AuthSignInInputSubtitle,
    AuthSignInSocialIcon,
    AuthSignInSocialTitle,
} from "../authBarStyling";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

import PhoneInput from "react-phone-number-input";
import ContinueBtn from "../../btn/continueBtn/continueBtn";
import { callApi } from "../../../utils/api/api";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { googleLoginErrStateSelector } from "../../../state/selectors/googleLoginErr";

interface PhonePopupProps {
    setPageName: (pageName: string) => void;
    setUsername: (userName: string) => void;
    setPhoneNumFromPhonePopup: (phoneNumFromPhonePopup: string) => void;
    handleKeyboardDismiss: () => void;
}

const PhonePopup: React.FC<PhonePopupProps> = ({ setUsername, setPageName, setPhoneNumFromPhonePopup, handleKeyboardDismiss }) => {
    const [phoneNum, setPhoneNum] = useState("");
    const [signInPhoneNumberInvalid, setSignInPhoneNumberInvalid] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [cookies] = useCookies(["referralCode"]);
    const googleErrMessageRef = useRef("");

    const [googleLoginErrState, setGoogleLoginErrState] = useRecoilState(googleLoginErrStateSelector);

    const checkPhoneRegex = (): boolean => {
        const phoneRegex = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
        return phoneRegex.test(phoneNum);
    };

    const checkPhone = async (): Promise<void> => {
        setGoogleLoginErrState("");
        if (checkPhoneRegex()) {
            setIsContinueBtnLoading(true);
            setSignInPhoneNumberInvalid(false);
            setPhoneNumFromPhonePopup(phoneNum);

            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/exists", {
                body: {
                    emailLogin: false,
                    username: phoneNum,
                },
            })
                .then(async (res) => {
                    setIsContinueBtnLoading(false);
                    if (res.message === "User already exists") {
                        setUsername(res.username);
                        setPageName("PasswordPopup");
                    } else if (res.message === "User already exists but not attributes are verified") {
                        setPageName("SignInVerificationPopup");
                    } else if (res.message === "There are no users with that username") {
                        setPageName("SignUpFormPopup");
                    } else if (res.message === "The user signed up with google, you must sign in with email or google") {
                        setSignInPhoneNumberInvalid(true);
                        googleErrMessageRef.current = "The user signed up with google, you must sign in with google";
                    } else {
                        console.log("signin not working");
                    }
                })
                .catch((err) => {
                    setIsContinueBtnLoading(false);
                    console.log(err);
                });
        } else {
            setSignInPhoneNumberInvalid(true);
        }
    };
    const getCurrentURL = () => {
        return window.location.pathname + window.location.search;
    };
    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }}>
            <AuthSignInSubPage>
                <AuthContentTitleWrapper>
                    <AuthContentTitle>Sign up or log in</AuthContentTitle>
                    <AuthContentTitle>to continue exploring</AuthContentTitle>
                </AuthContentTitleWrapper>
                <PhoneInputWrapper>
                    <PhoneInput
                        placeholder="(000) 0000 0000"
                        value={phoneNum}
                        defaultCountry={"AU"}
                        style={{
                            height: "54px",
                            marginBottom: "16px",
                            borderRadius: "10px",
                            border: `1px solid ${signInPhoneNumberInvalid ? ColorTheme.Red1.color : ColorTheme.Grey1.color}`,
                            paddingLeft: "16px",
                            paddingRight: "16px",
                        }}
                        onChange={async (value): Promise<void> => {
                            setSignInPhoneNumberInvalid(false);
                            setPhoneNum(value as string);
                        }}
                        onKeyDown={async (e: KeyboardEvent<HTMLInputElement>) => (e.key === "Enter" ? await checkPhone() : null)}
                        onBlur={handleKeyboardDismiss}
                    />
                </PhoneInputWrapper>

                <ContinueBtn
                    style={{ marginTop: "0px" }}
                    background={"black"}
                    isLoading={isContinueBtnLoading}
                    disabled={isContinueBtnLoading}
                    continueType="submit"
                    onClick={async () => await checkPhone().catch((err) => console.log(err))}
                >
                    Continue
                </ContinueBtn>
                <AuthSignInInputSubtitle invalid={signInPhoneNumberInvalid}>
                    {signInPhoneNumberInvalid
                        ? googleErrMessageRef.current
                            ? googleErrMessageRef.current
                            : "Invalid phone number, try again!"
                        : "We’ll text you to confirm your number, standard rates apply."}
                </AuthSignInInputSubtitle>

                <AuthSignInSocialButton
                    onClick={() => {
                        const currentURL = getCurrentURL();
                        const customStateData = {
                            redirectURL: currentURL,
                            referralCode: cookies.referralCode,
                            platform: "Google",
                        };
                        Auth.federatedSignIn({
                            provider: CognitoHostedUIIdentityProvider.Google,
                            customState: JSON.stringify(customStateData),
                        });
                    }}
                >
                    <AuthSignInSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Google.svg"} alt={"Google icon"} />
                    <AuthSignInSocialTitle>Continue with google</AuthSignInSocialTitle>
                </AuthSignInSocialButton>
                {/* GOOGLE SIGN UP NOT WORKING */}
                {/* EMAIL SIGN UP STILL HAS BUGS */}
                {/* <AuthSignInSocialButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>
                    <AuthSIgnInSocialIconWrapper>
                        <AuthSIgnInSocialIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Social+Media+Google.png"} alt={"Google icon"} />
                    </AuthSIgnInSocialIconWrapper>
                    <p>Continue with google</p>
                </AuthSignInSocialButton>
                <AuthSignInSocialButton style={{ marginTop: "24px" }} onClick={async () => {
                    await this.setState({ emailSignUp: true })
                    // this.toggleSignIn()
                    this.changePage(9)
                    // setTimeout(() => this.toggleSignUp(), 100)
                }}>
                    <AuthSIgnInSocialIconWrapper>
                        <img style={{ width: "100%", height: "100%" }} src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Email icon"} />
                    </AuthSIgnInSocialIconWrapper>
                    <p>Continue with email</p>
                </AuthSignInSocialButton> */}
                {/* <AuthSignInSocialButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</AuthSignInSocialButton> */}
            </AuthSignInSubPage>
        </motion.div>
    );
};

export default PhonePopup;
