import {
    YourBookingReportBookingWrapper,
    YourBookingReceiptContent,
    YourBookingReceiptIcon,
    YourBookingReceiptText,
    YourBookingReceiptSubText,
    YourBookingReceiptDoneButton,
} from "../../yourBookingStyling";
import { userModelSelector } from "../../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import useClickOutside from "../../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
interface ReceiptSentPopupProps {
    deactivatePopupCards: () => void;
}

const ReceiptSentPopup: React.FC<ReceiptSentPopupProps> = ({ deactivatePopupCards }) => {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    return (
        <GlobalPopupContainerCenter ref={wrapperRef} closePopup={deactivatePopupCards} backBtnType={"Arrow"} noContinueBtn={true}>
            <YourBookingReportBookingWrapper noContinueBtn={true}>
                <YourBookingReceiptContent>
                    <YourBookingReceiptIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/email.svg"} alt={"Email rceipt icon"} />
                    <YourBookingReceiptText>Your receipt has been sent to your email</YourBookingReceiptText>
                    <YourBookingReceiptSubText>{userModel && userModel.email}</YourBookingReceiptSubText>
                </YourBookingReceiptContent>
                <YourBookingReceiptDoneButton type="button" onClick={deactivatePopupCards}>
                    Done
                </YourBookingReceiptDoneButton>
            </YourBookingReportBookingWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default ReceiptSentPopup;
