import { AuthTitle } from "./authBarStyling";

interface AuthbarTitleProps {
    pageName: string;
    emailSignUp: boolean;
}

const AuthbarTitle: React.FC<AuthbarTitleProps> = ({ pageName, emailSignUp }) => {
    const getTitle = () => {
        if (pageName === "PhonePopup") {
            return "Sign up or log in";
        } else if (pageName === "PasswordPopup") {
            return "Enter your password";
        } else if (pageName === "SignUpFormPopup" || pageName === "GoogleUserDetailsConfirmationPopup") {
            return "Create account";
        } else if (pageName === "SignInVerificationPopup") {
            return `Verify your ${emailSignUp ? "email" : "phone"}`;
        } else if (pageName === "SignUpVerificationPopup") {
            return `Verify your ${emailSignUp ? "email" : "phone"}`;
        } else if (pageName === "AddProfilePhotoPopup") {
            return "Add profile photo";
        } else if (pageName === "WelcomePopup") {
            return "Ready to go!";
        } else if (pageName === "AccountDeactivatedPopup") {
            return "Account deactivated";
        } else if (pageName === "AccountSuspendedPopup") {
            return "Account suspended";
        } else if (pageName === "NewPasswordPopup") {
            return "";
        } else {
            return "Sign up or log in";
        }
    };
    return <AuthTitle>{getTitle()}</AuthTitle>;
};

export default AuthbarTitle;
