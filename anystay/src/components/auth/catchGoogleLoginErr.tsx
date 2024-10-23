import { useRecoilState } from "recoil";
import { signInMenuActivatedSelector } from "../../state/selectors/navbarToggle";
import { googleLoginErrStateSelector } from "../../state/selectors/googleLoginErr";
import { useEffect } from "react";

const CatchGoogleLoginErr = () => {
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [googleLoginErrState, setGoogleLoginErrState] = useRecoilState(googleLoginErrStateSelector);

    const catchForGoogleErrors = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get("error");
        const errorDescription = urlParams.get("error_description");

        if (error) {
            if (errorDescription && errorDescription?.includes("GOOGLE_SIGN_IN_FAILED_EMAIL_EXISTS")) {
                setSignInMenuActivated(true);
                setGoogleLoginErrState(errorDescription?.split("USERNAME=")[1].replace(".", "").trim());
            }
        } else {
            setGoogleLoginErrState("");
        }
    };

    useEffect(() => {
        catchForGoogleErrors();
    }, [googleLoginErrState, signInMenuActivated]);

    return <></>;
};

export default CatchGoogleLoginErr;
