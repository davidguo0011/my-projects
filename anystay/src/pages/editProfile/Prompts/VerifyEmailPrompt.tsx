import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle } from "../editProfileStyling";

interface AddPromptCardProps {
    handleClick: () => void;
}
const VerifyEmailPrompt: React.FC<AddPromptCardProps> = ({ handleClick }) => {
    return (
        <EditProfilePromptButton type="button" onClick={handleClick}>
            <EditProfilePromptButtonTitle>Verify your email</EditProfilePromptButtonTitle>
            <EditProfilePromptButtonSubtitle>Confirm your email address to complete your account info.</EditProfilePromptButtonSubtitle>
        </EditProfilePromptButton>
    );
};

export default VerifyEmailPrompt;
