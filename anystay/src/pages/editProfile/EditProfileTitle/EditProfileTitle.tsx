import { EditProfileTitleWrapper, ProfileTitle } from "../../profile/profileStyling";
import { GoToProfileButton } from "../editProfileStyling";
import { useNavigate } from "react-router-dom";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import BackBtn from "../../../components/btn/backBtn/backBtn";

export default function EditProfileTitle() {
    const navigate = useNavigate();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    const handleBack = () => {
        navigate(-1);
    };

    if (!userModel) return null;

    return (
        <EditProfileTitleWrapper>
            <BackBtn onClick={handleBack} type="Arrow" mobileLeft={24} mobileTop={24} />
            <ProfileTitle>Edit profile</ProfileTitle>
            {window.innerWidth > 768 && <GoToProfileButton to={userModel.guestMode ? `/guest/profile/${userModel.id}` : `/host/profile/${userModel.id}`}>Go to profile</GoToProfileButton>}
        </EditProfileTitleWrapper>
    );
}
