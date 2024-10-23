import { ChangePasswordForgotPasswordTabWrapper, DeactivateAccountIcon, DeactivateAccountTextTitle, DeactivateAccountTextSubtitle } from "../loginAndSecurityStyling";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface DeactivateAccountFailedPopupProps {
    deactivatePopupCards: () => void;
}

export default function DeactivateAccountFailedPopup({ deactivatePopupCards }: DeactivateAccountFailedPopupProps) {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={deactivatePopupCards} handleSave={deactivatePopupCards} btnText="Go back">
            <ChangePasswordForgotPasswordTabWrapper>
                <DeactivateAccountIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Alert icon" />
                <DeactivateAccountTextTitle>You're unable to deactivate your account</DeactivateAccountTextTitle>
                <DeactivateAccountTextSubtitle>Deactivate listings and cancel all bookings to continue.</DeactivateAccountTextSubtitle>
            </ChangePasswordForgotPasswordTabWrapper>
        </GlobalPopupContainerCenter>
    );
}
