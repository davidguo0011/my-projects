import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle } from "../editProfileStyling";
import { useNavigate } from "react-router-dom";

export default function AddASocialPrompt() {
    const navigate = useNavigate();
    return (
        <EditProfilePromptButton type="button" onClick={() => navigate("/security-settings")}>
            <EditProfilePromptButtonTitle>Link your socials</EditProfilePromptButtonTitle>
            <EditProfilePromptButtonSubtitle>Introduce yourself to your community.</EditProfilePromptButtonSubtitle>
        </EditProfilePromptButton>
    );
}
