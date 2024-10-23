import {
    AuthSignUpConfirmPhoneSubPage,
    AuthSignUpConfirmPhoneSubtitle,
    AuthSignUpAmplifyImageWrapper,
    ProfileAuthSignInImage,
    AuthSignUpReadytoGoTitle,
    AuthSignUpCompleteExploreButton,
} from "../authBarStyling";
import { motion } from "framer-motion";
import { userModelSelector } from "../../../state/selectors/userModel";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";

interface WelcomePopupProps {
    profilePicture: string;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ profilePicture }) => {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    return (
        <motion.div animate={{ x: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} initial={{ x: 400 }} style={{ height: "100%" }}>
            <AuthSignUpConfirmPhoneSubPage pageName={"WelcomePopup"}>
                <AuthSignUpAmplifyImageWrapper style={{ width: "128px", height: "128px" }}>
                    <ProfileAuthSignInImage style={{ width: "128px", height: "128px" }} src={profilePicture} alt="Profile photo" />
                </AuthSignUpAmplifyImageWrapper>
                <AuthSignUpReadytoGoTitle>Welcome to Anystay, {userModel ? userModel.firstName : "Guest"}</AuthSignUpReadytoGoTitle>
                <AuthSignUpConfirmPhoneSubtitle>You're on your way to our homes and rooms for rent.</AuthSignUpConfirmPhoneSubtitle>
                <AuthSignUpCompleteExploreButton
                    type="button"
                    onClick={() => {
                        setSignInMenuActivated(false);
                    }}
                >
                    Start exploring
                </AuthSignUpCompleteExploreButton>
            </AuthSignUpConfirmPhoneSubPage>
        </motion.div>
    );
};

export default WelcomePopup;
