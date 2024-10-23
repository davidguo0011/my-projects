import { useState } from "react";
import { AuthSignUpCreateAccountSubPage, AuthSignInLabel, PhoneInputWrapper, AuthSignUpDOBInputWrapper, AuthSignUpInputDOB, AuthTermsAndConditionsText, AuthSignInTitle } from "../authBarStyling";
import { motion } from "framer-motion";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

import ContinueBtn from "../../btn/continueBtn/continueBtn";
import PhoneInput from "react-phone-number-input";
import { callApi } from "../../../utils/api/api";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";

const GoogleUserDetailsConfirmationPopup: React.FC = () => {
    const [phoneNum, setPhoneNum] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);

    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [dobInvalid, setDobInvalid] = useState(false);

    const isValidDate = (year: string, month: string, day: string): boolean => {
        let dob = new Date(Number(year), Number(month) - 1, Number(day));
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms);
        let age = Math.abs(age_dt.getUTCFullYear() - 1970);
        if (!isNaN(Number(dob)) && age >= 18 && age <= 110 && dob.getFullYear() === Number(year) && dob.getMonth() === Number(month) - 1 && dob.getDate() === Number(day)) {
            return true;
        }
        return false;
    };
    const checkPhoneRegex = (phoneNum: string) => {
        const phoneRegex = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
        return phoneRegex.test(phoneNum);
    };
    const onSubmit = async () => {
        let inValid = false;
        if (isValidDate(year, month, day)) {
            setDobInvalid(false);
        } else {
            setDobInvalid(true);
            inValid = true;
        }
        if (checkPhoneRegex(phoneNum)) {
            setPhoneInvalid(false);
        } else {
            setPhoneInvalid(true);
            inValid = true;
        }
        if (!inValid) {
            setIsContinueBtnLoading(true);
            let dob = new Date(Number(year), Number(month) - 1, Number(day));
            try {
                const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, `user/external/signup`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        birthdate: dob.toString(),
                        phone: phoneNum,
                    },
                });
                console.log(res);
                if (res.success) {
                    const userModelCopy = JSON.parse(JSON.stringify(userModel));
                    userModelCopy.externalSignOnCompleted = true;
                    userModelCopy.dateOfBirth = `${day}/${month}/${year}`;
                    userModelCopy.phone = phoneNum;
                    setUserModel(userModelCopy);
                    setSignInMenuActivated(false);
                }
                console.log("successfully updated phone and dob");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }} style={{ marginTop: "32px" }}>
            <AuthSignUpCreateAccountSubPage>
                <AuthSignInTitle>Compelete your account</AuthSignInTitle>
                <AuthSignInLabel invalid={phoneInvalid} htmlFor="email">
                    Phone <span>Enter a valid phone number</span>
                </AuthSignInLabel>
                <PhoneInputWrapper>
                    <PhoneInput
                        placeholder="Enter your number to start"
                        value={phoneNum}
                        defaultCountry={"AU"}
                        style={{
                            height: "54px",
                            marginTop: "12px",
                            marginBottom: "16px",
                            borderRadius: "10px",
                            border: `1px solid ${phoneInvalid ? ColorTheme.Red1.color : ColorTheme.Grey1.color}`,
                            paddingLeft: "16px",
                            paddingRight: "16px",
                        }}
                        onChange={(value) => {
                            setPhoneNum(value as string);
                        }}
                    />
                </PhoneInputWrapper>
                <AuthSignInLabel invalid={dobInvalid} htmlFor="date_of_birth">
                    Birthdate <span>Enter a valid birthdate</span>
                </AuthSignInLabel>
                <AuthSignUpDOBInputWrapper>
                    <AuthSignUpInputDOB
                        type="number"
                        value={day}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (Number(e.target.value) >= 0 && String(e.target.value).length < 3) {
                                setDay(e.target.value);
                            }
                        }}
                        invalid={dobInvalid}
                        style={{ marginBottom: 0 }}
                        placeholder="DD"
                        name="day"
                        id="dob-anchor"
                    />
                    <AuthSignUpInputDOB
                        type="number"
                        value={month}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (Number(e.target.value) >= 0 && String(e.target.value).length < 3) {
                                setMonth(e.target.value);
                            }
                        }}
                        invalid={dobInvalid}
                        style={{ marginBottom: 0 }}
                        placeholder="MM"
                        name="month"
                    />
                    <AuthSignUpInputDOB
                        type="number"
                        value={year}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (Number(e.target.value) >= 0 && String(e.target.value).length < 5) {
                                setYear(e.target.value);
                            }
                        }}
                        invalid={dobInvalid}
                        style={{ marginBottom: 0 }}
                        placeholder="YYYY"
                        name="year"
                    />
                </AuthSignUpDOBInputWrapper>

                <AuthTermsAndConditionsText>
                    By continuing, you accept our{" "}
                    <a href="/terms-and-conditions" target={window.innerWidth > 768 ? "_blank" : ""}>
                        Terms of Service
                    </a>
                    , <br />
                    <a href="/privacy-policy" target={window.innerWidth > 768 ? "_blank" : ""}>
                        Privacy Policy
                    </a>{" "}
                    and the{" "}
                    <a href="https://stripe.com/en-au/legal/connect-account" target={window.innerWidth > 768 ? "_blank" : ""} rel="noreferrer">
                        Stripe Connected Account Agreement
                    </a>
                </AuthTermsAndConditionsText>
                <ContinueBtn continueType="button" background={"black"} onClick={onSubmit} isLoading={isContinueBtnLoading} disabled={isContinueBtnLoading}>
                    Continue
                </ContinueBtn>
            </AuthSignUpCreateAccountSubPage>
        </motion.div>
    );
};

export default GoogleUserDetailsConfirmationPopup;
