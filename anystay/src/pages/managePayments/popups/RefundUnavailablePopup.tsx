import {
    RefundUnavailablePopupWrapper,
    RefundUnavailablePopupSupportButton,
    RefundUnavailablePopupButtonWrapper,
    RefundUnavailablePopupIcon,
    RefundUnavailablePopupTitle,
    RefundUnavailablePopupSubtitle,
} from "../managePaymentsStyling";

import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import AnimationWrapperForPopup from "../../../components/animationWrapper/AnimationWrapperForPopup";
interface RefundUnavailablePopupProps {
    togglePopup: () => void;
}
export default function RefundUnavailablePopup({ togglePopup }: RefundUnavailablePopupProps) {
    return (
        <AnimationWrapperForPopup>
            <RefundUnavailablePopupWrapper>
                <RefundUnavailablePopupIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="" />
                <RefundUnavailablePopupTitle>Refund unavailable</RefundUnavailablePopupTitle>
                <RefundUnavailablePopupSubtitle>Refund requests are not currently available.</RefundUnavailablePopupSubtitle>
                <RefundUnavailablePopupButtonWrapper>
                    <RefundUnavailablePopupSupportButton className={"intercom_custom_launcher"} href="#">
                        Get support
                    </RefundUnavailablePopupSupportButton>
                    <ContinueBtn isLoading={false} disabled={false} background={"red"} onClick={togglePopup}>
                        Done
                    </ContinueBtn>
                </RefundUnavailablePopupButtonWrapper>
            </RefundUnavailablePopupWrapper>
        </AnimationWrapperForPopup>
    );
}
