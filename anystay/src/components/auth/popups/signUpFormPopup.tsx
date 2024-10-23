import { Fragment, useState, ChangeEvent } from "react";
import {
    AuthSignUpCreateAccountSubPage,
    AuthSignUpNameInputWrapper,
    AuthSignInLabel,
    AuthSignUpInput,
    AuthSignUpDOBInputWrapper,
    AuthSignUpInputDOB,
    AuthTermsAndConditionsText,
    AuthContentTitleWrapper,
    AuthContentTitle,
} from "../authBarStyling";
import { Auth } from "aws-amplify";
import { motion } from "framer-motion";

import ContinueBtn from "../../btn/continueBtn/continueBtn";
import { getIP } from "../../../utils/auth/getIp";
import ReCAPTCHA from "react-google-recaptcha";
import { IpState } from "../../../interfaces/state/ip";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import { CognitoUser } from "@aws-amplify/auth";
import moment from "moment";
import { useCookies } from "react-cookie";
import tr from "@mobiscroll/react/dist/src/i18n/tr";

interface SignUpFormPopupProps {
    ip: IpState["ip"];
    setPageName: (pageName: string) => void;
    ipBlockedWarning: IpState["ipBlockedWarning"];
    emailSignUp: boolean;
    setUsername: (userName: string) => void;
    phoneNumFromPhonePopup: string;
    setCodeDeliveryDetails: (codeDeliveryDetails: { AttributeName?: string; DeliveryMedium?: string; Destination?: string }) => void;
    setSignUpPassword: (signUpPassword: string) => void;
    setCreatingAccount: (creatingAccount: boolean) => void;
    setEmailInvalid: (emailInvalid: boolean) => void;
    setInvalidEmailContent: (invalidEmailContent: string) => void;
    emailInvalid: boolean;
    invalidEmailContent: string;
    handleKeyboardDismiss: () => void;
}

const SignUpFormPopup: React.FC<SignUpFormPopupProps> = ({
    ip,
    setPageName,
    ipBlockedWarning,
    emailSignUp,
    setUsername,
    phoneNumFromPhonePopup,
    setCodeDeliveryDetails,
    setSignUpPassword,
    setCreatingAccount,
    setEmailInvalid,
    setInvalidEmailContent,
    emailInvalid,
    invalidEmailContent,
    handleKeyboardDismiss,
}) => {
    const siteKey = process.env.REACT_APP_GOOGLE_RECAPTCHA_API_KEY as string;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captchaValue, setCaptchaValue] = useState<string>("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [dobInvalid, setDobInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [isAdult, setIsAdult] = useState(false);
    const [cookies] = useCookies(['referralCode']);
  

    const isDesktopSize = useIsDesktopSize();

    const isValidDate = (year: string, month: string, day: string) => {
        let dob = new Date(Number(year), Number(month) - 1, Number(day));
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms);
        let age = Math.abs(age_dt.getUTCFullYear() - 1970);
        if (age < 18) {
            setIsAdult(true);
        }
        if (!isNaN(Number(dob)) && age >= 18 && age <= 110 && dob.getFullYear() === Number(year) && dob.getMonth() === Number(month) - 1 && dob.getDate() === Number(day)) {
            return true;
        }
        return false;
    };

    const signUp = async () => {
        //emailSignup, use the email previously entered, else use the phone previously entered, email should be previously entered email
        let username = emailSignUp ? email : phoneNumFromPhonePopup;
        let birthdate = `${String(Number(day)).padStart(2, "0")}/${String(Number(month)).padStart(2, "0")}/${Number(year)}`;

        const data = {
            username: username,
            password: password,
            attributes: {
                email: email,
                phone_number: emailSignUp ? null : phoneNumFromPhonePopup,
            },
            validationData: {
                name: firstName,
                family_name: lastName,
                birthdate,
                "custom:ip": `${ip}`,
                captchaValue,
                referralCode: cookies.referralCode,
                ...(emailSignUp && { "custom:phone_number": `${phoneNumFromPhonePopup}` }),
            },
        };

        try {
            const res = await Auth.signUp(data);
            const user = res.user as CognitoUser & { username: string };
            setUsername(user.username);
            setSignUpPassword(password);
            setCodeDeliveryDetails(res.codeDeliveryDetails);
            setPageName("SignUpVerificationPopup");
        } catch (error: any) {
            const strError = error.toString();
            console.log(strError);
            if (strError === "UserLambdaValidationException: PreSignUp failed with error Email already exists in user pool.") {
                setEmailInvalid(true);
                setInvalidEmailContent("Someone has used this email.");
            }
        }
    };
    const onSignUpSubmit = async () => {
        let inputCheckFail = false;

        if (!firstName || !lastName) {
            setNameInvalid(true);
            inputCheckFail = true;
        } else {
            setNameInvalid(false);
        }

        if (isValidDate(year, month, day)) {
            setDobInvalid(false);
        } else {
            setDobInvalid(true);
            inputCheckFail = true;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email) || !email) {
            setEmailInvalid(true);
            setInvalidEmailContent("Enter a valid email");
            inputCheckFail = true;
        } else {
            setEmailInvalid(false);
        }

        if (password.length < 8) {
            setPasswordInvalid(true);
            inputCheckFail = true;
        } else {
            setPasswordInvalid(false);
        }

        // Check for ip fetch if its not available
        if (!ip) {
            await getIP();
        }

        if (!inputCheckFail) {
            setCreatingAccount(true);
            await signUp();
            setCreatingAccount(false);
        }
    };

    const handleCaptchaChange = (token: string | null) => {
        if (token) {
            setCaptchaValue(token);
        }
    };

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }}>
            {!ipBlockedWarning ? (
                <AuthSignUpCreateAccountSubPage>
                    <AuthContentTitleWrapper style={{ marginBottom: isDesktopSize ? "16px" : undefined }}>
                        <AuthContentTitle>Welcome to Anystay</AuthContentTitle>
                    </AuthContentTitleWrapper>
                    <AuthSignInLabel invalid={nameInvalid} htmlFor="first_name">
                        Name <span>Enter a valid name</span>
                    </AuthSignInLabel>
                    <AuthSignUpNameInputWrapper>
                        <AuthSignUpInput
                            value={firstName}
                            type="text"
                            onChange={(e) => {
                                const regex = /^[a-zA-Z ]+$/;
                                if (e.target.value === "" || e.target.value.slice(-1) === " ") {
                                    setFirstName(e.target.value);
                                } else if (regex.test(e.target.value)) {
                                    setFirstName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
                                }
                            }}
                            invalid={nameInvalid}
                            placeholder="First name"
                            name="first_name"
                        />
                        <AuthSignUpInput
                            value={lastName}
                            onChange={(e) => {
                                const regex = /^[a-zA-Z ]+$/;
                                if (e.target.value === "" || e.target.value.slice(-1) === " ") {
                                    setLastName(e.target.value);
                                } else if (regex.test(e.target.value)) {
                                    setLastName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
                                }
                            }}
                            invalid={nameInvalid}
                            placeholder="Last name"
                            name="last_name"
                            type="text"
                        />
                    </AuthSignUpNameInputWrapper>
                    <AuthSignInLabel invalid={dobInvalid} htmlFor="date_of_birth">
                        Birthdate <span>{isAdult ? "You must be at least 18" : "Enter a valid birthdate"}</span>
                    </AuthSignInLabel>
                    <AuthSignUpDOBInputWrapper>
                        <AuthSignUpInputDOB
                            type="text"
                            value={date}
                            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                let input = e.target.value.replace(/[^\d]/g, "").slice(0, 8);

                                const key = (e.nativeEvent as InputEvent).inputType;
                                const isBackspace = key === "deleteContentBackward";

                                let formattedDate = "";

                                if (input.length < 2 || (isBackspace && input.length === 2)) {
                                    formattedDate = input;
                                } else if (input.length < 4 || (isBackspace && input.length === 4)) {
                                    formattedDate = `${input.slice(0, 2)} / ${input.slice(2)}`;
                                } else {
                                    formattedDate = `${input.slice(0, 2)} / ${input.slice(2, 4)} / ${input.slice(4, 8)}`;
                                }

                                setDate(formattedDate);

                                if (formattedDate.length === 14) {
                                    const momentDate = moment(input, "DD / MM / YYYY", true);
                                    if (momentDate.isValid()) {
                                        console.log(11111111);
                                        setDobInvalid(false);
                                    } else {
                                        setDay(input.slice(0, 2));
                                        setMonth(input.slice(2, 4));
                                        setYear(input.slice(4, 8));
                                    }
                                } else {
                                    setDobInvalid(false);
                                }
                            }}
                            invalid={dobInvalid || isAdult}
                            style={{ marginLeft: 0 }}
                            placeholder="DD / MM / YYYY"
                            name="day"
                            id="dob-anchor"
                            onBlur={handleKeyboardDismiss}
                        />
                        {/* <AuthSignUpInputDOB
                            type="number"
                            value={month}
                            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                if (Number(e.target.value) >= 0 && String(e.target.value).length < 3) {
                                    setMonth(e.target.value);
                                }
                            }}
                            invalid={dobInvalid}
                            style={{ marginLeft: 0 }}
                            placeholder="MM"
                            name="month"
                        />
                        <AuthSignUpInputDOB
                            type="number"
                            value={year}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                if (Number(e.target.value) >= 0 && String(e.target.value).length < 5) {
                                    setYear(e.target.value);
                                }
                            }}
                            invalid={dobInvalid}
                            style={{ marginLeft: 0 }}
                            placeholder="YYYY"
                            name="year"
                        /> */}
                    </AuthSignUpDOBInputWrapper>
                    {!emailSignUp && (
                        <Fragment>
                            <AuthSignInLabel invalid={emailInvalid} htmlFor="email">
                                Email <span>{invalidEmailContent}</span>
                            </AuthSignInLabel>
                            <AuthSignUpInput
                                invalid={emailInvalid}
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Example@gmail.com"
                                name="email"
                                onBlur={handleKeyboardDismiss}
                            />
                        </Fragment>
                    )}
                    {emailSignUp && (
                        <Fragment>
                            <AuthSignInLabel invalid={phoneInvalid} htmlFor="email">
                                Phone <span>Enter a valid phone number</span>
                            </AuthSignInLabel>
                            <AuthSignUpInput
                                invalid={phoneInvalid}
                                value={phoneNum}
                                onChange={(e) => {
                                    setPhoneNum(e.target.value);
                                }}
                                placeholder="+61"
                                name="telephone"
                            />
                        </Fragment>
                    )}
                    <AuthSignInLabel invalid={passwordInvalid} htmlFor="password">
                        Password <span>8 characters minimum</span>
                    </AuthSignInLabel>
                    <AuthSignUpInput
                        invalid={passwordInvalid}
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Create a password"
                        name="password"
                        style={{ marginBottom: "0px" }}
                        onBlur={handleKeyboardDismiss}
                    />
                    <AuthTermsAndConditionsText>
                        By continuing, you accept our{" "}
                        <a href="/terms-and-conditions" target={window.innerWidth > 768 ? "_blank" : ""}>
                            Terms of Service
                        </a>
                        ,
                        <a href="/privacy-policy" target={window.innerWidth > 768 ? "_blank" : ""}>
                            Privacy Policy
                        </a>{" "}
                        and the{" "}
                        <a href="https://stripe.com/en-au/legal/connect-account" target={window.innerWidth > 768 ? "_blank" : ""} rel="noreferrer">
                            Stripe Connected Account Agreement
                        </a>
                    </AuthTermsAndConditionsText>

                    <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} style={{ width: "400px" }} />
                    <ContinueBtn
                        style={isDesktopSize ? { marginTop: "16px" } : { position: "fixed", bottom: "16px", width: "calc(100% - 48px)" }}
                        continueType="button"
                        disabled={!captchaValue}
                        background={"black"}
                        isLoading={isContinueBtnLoading}
                        onClick={async () => {
                            setIsContinueBtnLoading(true);
                            await onSignUpSubmit();
                            setIsContinueBtnLoading(false);
                        }}
                    >
                        Continue
                    </ContinueBtn>
                </AuthSignUpCreateAccountSubPage>
            ) : (
                <AuthSignUpCreateAccountSubPage>
                    <h2>You must turn off ad block to sign up</h2>
                </AuthSignUpCreateAccountSubPage>
            )}
        </motion.div>
    );
};

export default SignUpFormPopup;
