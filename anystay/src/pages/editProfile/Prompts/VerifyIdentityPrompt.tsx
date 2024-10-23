import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle } from "../editProfileStyling";
interface AddPromptCardProps {
    handleClick: () => void;
}
const VerifyIdentityPrompt: React.FC<AddPromptCardProps> = ({ handleClick }) => {
    return (
        <EditProfilePromptButton type="button" onClick={handleClick}>
            <EditProfilePromptButtonTitle>Verify your identity</EditProfilePromptButtonTitle>
            <EditProfilePromptButtonSubtitle>Give hosts confidence by verifying your identity</EditProfilePromptButtonSubtitle>
        </EditProfilePromptButton>
    );
};
export default VerifyIdentityPrompt;
