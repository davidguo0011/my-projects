import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle } from "../editProfileStyling";
interface AddPromptCardProps {
    handleClick: () => void;
}

const VerifyPhonePrompt: React.FC<AddPromptCardProps> = ({ handleClick }) => {
    return (
        <EditProfilePromptButton type="button" onClick={handleClick}>
            <EditProfilePromptButtonTitle>Verify your phone</EditProfilePromptButtonTitle>
            <EditProfilePromptButtonSubtitle>Confirm your phone number to complete your account</EditProfilePromptButtonSubtitle>
        </EditProfilePromptButton>
    );
};
export default VerifyPhonePrompt;
