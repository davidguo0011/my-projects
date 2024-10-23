import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle } from "../editProfileStyling";

interface AddPromptCardProps {
    handleClick: () => void;
}

const AddABioPrompt: React.FC<AddPromptCardProps> = ({ handleClick }) => {
    return (
        <EditProfilePromptButton type="button" onClick={handleClick}>
            <EditProfilePromptButtonTitle>Add a bio</EditProfilePromptButtonTitle>
            <EditProfilePromptButtonSubtitle>Introduce yourself by writing a short bio</EditProfilePromptButtonSubtitle>
        </EditProfilePromptButton>
    );
};
export default AddABioPrompt;
