import {
    ManagePaymentsPayPopupWrapper,
    ManagePaymentsPayPopupTitleWrapper,
    ManagePaymentsPayPopupTitle,
    ManagePaymentsFooterWrapper,
    ManagePaymentsFooterButton,
    ManagePaymentsPayPopupContentWrapper,
    ManagePaymentsPayPopupContentIcon,
    ManagePaymentsPayPopupContentTitle,
    ManagePaymentsPayPopupContentSubtitle,
} from "../managePaymentsStyling";
import AnimationWrapperForPopup from "../../../components/animationWrapper/AnimationWrapperForPopup";

interface ManagePaymentsPayPopupProps {
    togglePopup: () => void;
}

export default function ManagePaymentsPayPopup({ togglePopup }: ManagePaymentsPayPopupProps) {
    return (
        <AnimationWrapperForPopup>
            <ManagePaymentsPayPopupWrapper>
                <ManagePaymentsPayPopupTitleWrapper>
                    <ManagePaymentsPayPopupTitle>Region not supported</ManagePaymentsPayPopupTitle>
                </ManagePaymentsPayPopupTitleWrapper>
                <ManagePaymentsPayPopupContentWrapper>
                    <ManagePaymentsPayPopupContentIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Unavailable icon" />
                    <ManagePaymentsPayPopupContentTitle>Feature unavailable</ManagePaymentsPayPopupContentTitle>
                    <ManagePaymentsPayPopupContentSubtitle>Custom payments are not available in your region yet.</ManagePaymentsPayPopupContentSubtitle>
                </ManagePaymentsPayPopupContentWrapper>
                <ManagePaymentsFooterWrapper>
                    <ManagePaymentsFooterButton type="button" onClick={togglePopup}>
                        Done
                    </ManagePaymentsFooterButton>
                </ManagePaymentsFooterWrapper>
            </ManagePaymentsPayPopupWrapper>
        </AnimationWrapperForPopup>
    );
}
