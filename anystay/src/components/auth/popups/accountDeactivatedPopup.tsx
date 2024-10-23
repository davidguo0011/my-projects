import { motion } from "framer-motion";
import { AuthSignInSubPage, AuthContentTitleWrapper, AuthContentTitle, AuthContentTitleIcon, AuthSignInButton, AuthMFASubtitle } from "../authBarStyling";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export default function AccountDeactivatedPopup() {
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} style={{ height: "100%" }} initial={{ x: 400 }}>
            <AuthSignInSubPage style={{ height: "100%" }}>
                <AuthContentTitleWrapper>
                    <AuthContentTitleIcon src={"https://d292awxalydr86.cloudfront.net/Branding/Ellipse+79.png"} alt={"Anystay logo"} />
                    <AuthContentTitle>Account deactivated.</AuthContentTitle>
                </AuthContentTitleWrapper>
                <AuthMFASubtitle style={{ marginTop: "8px", marginBottom: "311px" }}>
                    Your account is currently deactivated.
                    <br />
                    <a style={{ textDecoration: "underline", color: ColorTheme.Black.color, marginTop: "8px" }} href="https://help.anystay.com.au">
                        Get support
                    </a>
                </AuthMFASubtitle>
                <AuthSignInButton
                    type="button"
                    onClick={() => {
                        setSignInMenuActivated(false);
                    }}
                >
                    Continue
                </AuthSignInButton>
            </AuthSignInSubPage>
        </motion.div>
    );
}
