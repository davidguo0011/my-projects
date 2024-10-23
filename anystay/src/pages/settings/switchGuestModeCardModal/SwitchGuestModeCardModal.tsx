import { SwitchGuestModeCard, SwitchGuestModeImage, SwitchGuestModeSubtitle, SwitchGuestModeText, SwitchGuestModeSwitchButton } from "../settingsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { useRecoilState } from "recoil";
import { userModelSelector } from "../../../state/selectors/userModel";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useNavigate } from "react-router-dom";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

export default function SwitchGuestModeCardModal({ switchModeCard, setSwitchModeCard }: { switchModeCard: boolean; setSwitchModeCard: React.Dispatch<React.SetStateAction<boolean>> }) {
    const wrapperRef = useClickOutside(switchModeCard, () => {
        setSwitchModeCard(false);
    });
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const navigate = useNavigate();
    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={() => setSwitchModeCard(!switchModeCard)} noContinueBtn={true}>
            <SwitchGuestModeCard>
                <SwitchGuestModeImage src={"https://d292awxalydr86.cloudfront.net/Settings+page/Switch+mode+image.webp"} alt="switch mode card img" />

                <SwitchGuestModeSubtitle>{`Become a host, ${userModel && userModel.firstName}`}</SwitchGuestModeSubtitle>

                <SwitchGuestModeText>Join a global network of hosts and unlock rental income.</SwitchGuestModeText>
                <SwitchGuestModeSwitchButton
                    onClick={() => {
                        navigate(`/create-listing/${userHostModel && userHostModel.id}`);
                    }}
                    type="button"
                >
                    Create a listing
                </SwitchGuestModeSwitchButton>
            </SwitchGuestModeCard>
        </GlobalPopupContainerCenter>
    );
}
