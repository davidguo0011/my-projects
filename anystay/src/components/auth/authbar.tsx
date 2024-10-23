import { useEffect, useState } from "react";
import LogoSpinner from "../spinner/logoSpinner/logoSpinner";
import { AuthContainer, AuthSignInWrapper, AuthContentWrapper, AuthLoginProcessingTitle } from "./authBarStyling";

import PhonePopup from "./popups/phonePopup";
import PasswordPopup from "./popups/passwordPopup";
import NewPasswordPopup from "./popups/newPasswordPopup";
import AccountDeactivatedPopup from "./popups/accountDeactivatedPopup";
import AccountSuspendedPopup from "./popups/accountSuspendedPopup";
import SignUpFormPopup from "./popups/signUpFormPopup";
import WelcomePopup from "./popups/welcomePopup";
import SignUpVerificationPopup from "./popups/signUpVerificationPopup";
import SignInVerificationPopup from "./popups/signInVerificationPopup";
import AddProfilePhotoPopup from "./popups/addProfilePhotoPopup";
import useClickOutside from "../../hook/useClickOutside";
import { ipSelector } from "../../state/selectors/ip";
import { signInMenuActivatedSelector } from "../../state/selectors/navbarToggle";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
import GoogleUserDetailsConfirmationPopup from "./popups/googleUserDetailsConfirmationPopup";
import useCountdown from "../../hook/useCountdown";

import BackBtn from "../btn/backBtn/backBtn";
import { googleLoginErrStateSelector } from "../../state/selectors/googleLoginErr";

const Authbar: React.FC = () => {
    const [ipState, setIpState] = useRecoilState(ipSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [googleLoginErrState, setGoogleLoginErrState] = useRecoilState(googleLoginErrStateSelector);

    const [loggingIn, setLoggingIn] = useState(false);
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [countdown, activateCountdown, resendNotReady] = useCountdown(60);
    const [username, setUsername] = useState("");

    //email sign up is not used
    const [emailSignUp, setEmailSignUp] = useState(false);
    ////////////////////////////

    const [pageName, setPageName] = useState("PhonePopup");

    const [newPassword, setNewPassword] = useState("");

    const [phoneNumFromPhonePopup, setPhoneNumFromPhonePopup] = useState("");

    const [mfaInvalid, setMfaInvalid] = useState(false);
    const [profilePicture, setProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");

    const [codeDeliveryDetails, setCodeDeliveryDetails] = useState<{ AttributeName?: string; DeliveryMedium?: string; Destination?: string }>({});
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signInPasswordInvalid, setSignInPasswordInvalid] = useState(false);

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [invalidEmailContent, setInvalidEmailContent] = useState("");

    const wrapperRef = useClickOutside(signInMenuActivated, () => {
        if (loggingIn || creatingAccount) return;
        if (userModel && userModel.externalSignOn && !userModel.externalSignOnCompleted) return;
        setSignInMenuActivated(false);
        setPageName("PhonePopup");
    });
    // 0 PhonePopup
    // 1 PasswordPopup
    // 2 SignUpFormPopup
    // 3 SignInVerificationPopup
    // 4 AddProfilePhotoPopup
    // 5 WelcomePopup
    // 6 AccountDeactivatedPopup
    // 7 AccountSuspendedPopup
    // 8 NewPasswordPopup
    // 9 EmailPopup
    useEffect(() => {
        if (googleLoginErrState) {
            setUsername(googleLoginErrState);
            setPageName("PasswordPopup");
        }
    }, [googleLoginErrState]);
    useEffect(() => {
        if (!userModel) {
            setPageName("PhonePopup");
        }
    }, [userModel]);

    const backButtonHandleClick = () => {
        switch (pageName) {
            case "PhonePopup":
                setSignInMenuActivated(false);
                break;
            case "PasswordPopup":
                setPageName("PhonePopup");
                break;
            case "SignInVerificationPopup":
                setPageName("PasswordPopup");
                break;
            case "WelcomePopup":
                setPageName("AddProfilePhotoPopup");
                break;
            case "NewPasswordPopup":
                setPageName("PasswordPopup");
                break;
            case "SignUpVerificationPopup":
                setPageName("PhonePopup");
                break;
            case "SignUpFormPopup":
                if (emailSignUp) {
                    setPageName("EmailPopup");
                } else {
                    setPageName("PhonePopup");
                }
                break;
            case "GoogleUserDetailsConfirmationPopup":
                if (userModel && userModel.externalSignOn && userModel.externalSignOnCompleted) {
                    setSignInMenuActivated(false);
                }
                break;
            default:
                setGoogleLoginErrState("");
                setSignInMenuActivated(false);
                break;
        }
    };
    useEffect(() => {
        //clear the signinpasswordinvalid state if authbar is closed
        if (!signInMenuActivated) {
            setSignInPasswordInvalid(false);
        }
    }, [signInMenuActivated]);

    //google user signon not complete, required to enter phone and dob

    useEffect(() => {
        if (userModel && userModel.externalSignOn && !userModel.externalSignOnCompleted) {
            //google user signon not complete, required to enter phone and dob
            setSignInMenuActivated(true);
            setPageName("GoogleUserDetailsConfirmationPopup");
        }
    }, [setSignInMenuActivated, userModel]);

    // if (loggingIn) {
    //     return (
    //         <AuthContainer>
    //             {signInMenuActivated && (
    //                 <AnimationWrapperForPopup>
    //                     <AuthSignInWrapper ref={wrapperRef}>
    //                         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "310px" }}>
    //                             <LogoSpinner width="96" height="96" guestMode={"true"} />
    //                             <AuthLoginProcessingTitle>Logging in...</AuthLoginProcessingTitle>
    //                         </div>
    //                     </AuthSignInWrapper>
    //                 </AnimationWrapperForPopup>
    //             )}
    //         </AuthContainer>
    //     );
    // }
    const handleKeyboardDismiss = () => {
        if (window.innerWidth < 768) {
            window.scrollTo(0, 0);
        }
    };
    return (
        <AuthContainer>
            {signInMenuActivated && (
                <AnimationWrapperForPopup>
                    {loggingIn && (
                        <AuthSignInWrapper>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "600px" }}>
                                <LogoSpinner width="64" height="64" guestMode={true} />
                                <AuthLoginProcessingTitle>Logging in...</AuthLoginProcessingTitle>
                            </div>
                        </AuthSignInWrapper>
                    )}

                    {creatingAccount && (
                        <AuthSignInWrapper>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "346px" }}>
                                <LogoSpinner width="64" height="64" guestMode={true} />
                                <AuthLoginProcessingTitle>Creating account...</AuthLoginProcessingTitle>
                            </div>
                        </AuthSignInWrapper>
                    )}

                    <AuthSignInWrapper ref={wrapperRef} pageName={pageName} style={{ display: loggingIn || creatingAccount ? "none" : "flex" }}>
                        <AuthContentWrapper>
                            {pageName === "PhonePopup" ? (
                                <BackBtn type={"Close"} onClick={backButtonHandleClick} mobileLeft={24} mobileTop={24} />
                            ) : (
                                <BackBtn type={"Arrow"} onClick={backButtonHandleClick} mobileLeft={24} mobileTop={24} />
                            )}
                            {pageName === "PhonePopup" && (
                                <PhonePopup setUsername={setUsername} setPageName={setPageName} setPhoneNumFromPhonePopup={setPhoneNumFromPhonePopup} handleKeyboardDismiss={handleKeyboardDismiss} />
                            )}
                            {pageName === "PasswordPopup" && (
                                <PasswordPopup
                                    setLoggingIn={setLoggingIn}
                                    username={username}
                                    setPageName={setPageName}
                                    setCodeDeliveryDetails={setCodeDeliveryDetails}
                                    signInPasswordInvalid={signInPasswordInvalid}
                                    setSignInPasswordInvalid={setSignInPasswordInvalid}
                                    phoneNumFromPhonePopup={phoneNumFromPhonePopup}
                                    setMfaInvalid={setMfaInvalid}
                                    handleKeyboardDismiss={handleKeyboardDismiss}
                                    isGoogleAccountExist={googleLoginErrState ? true : false}
                                />
                            )}
                            <SignInVerificationPopup
                                setPageName={setPageName}
                                username={username}
                                mfaInvalid={mfaInvalid}
                                setMfaInvalid={setMfaInvalid}
                                codeDeliveryDetails={codeDeliveryDetails}
                                setCodeDeliveryDetails={setCodeDeliveryDetails}
                                pageName={pageName}
                                activateCountdown={activateCountdown}
                                countdown={countdown}
                                newPassword={newPassword}
                                setLoggingIn={setLoggingIn}
                                resendNotReady={resendNotReady}
                                handleKeyboardDismiss={handleKeyboardDismiss}
                            />
                            {pageName === "NewPasswordPopup" && (
                                <NewPasswordPopup setPageName={setPageName} setNewPassword={setNewPassword} newPassword={newPassword} handleKeyboardDismiss={handleKeyboardDismiss} />
                            )}
                            {pageName === "AccountDeactivatedPopup" && <AccountDeactivatedPopup />}
                            {pageName === "AccountSuspendedPopup" && <AccountSuspendedPopup />}
                            {pageName === "SignUpFormPopup" && (
                                <SignUpFormPopup
                                    ip={ipState.ip}
                                    setCreatingAccount={setCreatingAccount}
                                    setPageName={setPageName}
                                    ipBlockedWarning={ipState.ipBlockedWarning}
                                    emailSignUp={emailSignUp}
                                    setUsername={setUsername}
                                    setCodeDeliveryDetails={setCodeDeliveryDetails}
                                    setSignUpPassword={setSignUpPassword}
                                    phoneNumFromPhonePopup={phoneNumFromPhonePopup}
                                    setEmailInvalid={setEmailInvalid}
                                    setInvalidEmailContent={setInvalidEmailContent}
                                    emailInvalid={emailInvalid}
                                    invalidEmailContent={invalidEmailContent}
                                    handleKeyboardDismiss={handleKeyboardDismiss}
                                />
                            )}
                            {pageName === "GoogleUserDetailsConfirmationPopup" && <GoogleUserDetailsConfirmationPopup />}
                            {pageName === "AddProfilePhotoPopup" && <AddProfilePhotoPopup setProfilePicture={setProfilePicture} profilePicture={profilePicture} setPageName={setPageName} />}
                            {pageName === "WelcomePopup" && <WelcomePopup profilePicture={profilePicture} />}
                            <SignUpVerificationPopup
                                username={username}
                                signUpPassword={signUpPassword}
                                setPageName={setPageName}
                                pageName={pageName}
                                codeDeliveryDetails={codeDeliveryDetails}
                                activateCountdown={activateCountdown}
                                countdown={countdown}
                                resendNotReady={resendNotReady}
                                handleKeyboardDismiss={handleKeyboardDismiss}
                            />
                            {/* {pageName === "EmailPopup" && (
                                            <EmailPopup
                                                phone_number={phone_number}
                                                setPhoneNumber={(value) => setPhoneNumber(value)}
                                                setUsername={(value) => setUsername(value)}
                                                setPageName={setPageName}
                                                toggleSignIn={toggleSignIn()}
                                                toggleSignUp={toggleSignUp()}
                                            />
                                        )} */}
                        </AuthContentWrapper>
                    </AuthSignInWrapper>
                </AnimationWrapperForPopup>
            )}
        </AuthContainer>
    );
};

export default Authbar;
