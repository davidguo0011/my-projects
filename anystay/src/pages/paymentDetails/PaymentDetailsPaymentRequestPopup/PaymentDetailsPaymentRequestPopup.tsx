import {
    PaymentDetailsPopupWrapper,
    PaymentDetailsPopupIcon,
    PaymentDetailsPopupTitle,
    PaymentDetailsPopupSubtitle,
    PaymentDetailsPopupDivider,
    PaymentDetailsPopupDoneButton,
} from "../paymentDetailsStyling";
import AnimationWrapperForPopup from "../../../components/animationWrapper/AnimationWrapperForPopup";

interface PaymentDetailsPaymentRequestPopupProps {
    toggleSelected: () => void;
}

export default function PaymentDetailsPaymentRequestPopup({ toggleSelected }: PaymentDetailsPaymentRequestPopupProps) {
    return (
        <AnimationWrapperForPopup>
            <PaymentDetailsPopupWrapper>
                <PaymentDetailsPopupIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="alert icon" />
                <PaymentDetailsPopupTitle>Feature unavailable</PaymentDetailsPopupTitle>
                <PaymentDetailsPopupSubtitle>Payment requests are not available in your region yet.</PaymentDetailsPopupSubtitle>
                <PaymentDetailsPopupDivider />
                <PaymentDetailsPopupDoneButton type="button" onClick={toggleSelected}>
                    Done
                </PaymentDetailsPopupDoneButton>
            </PaymentDetailsPopupWrapper>
        </AnimationWrapperForPopup>
    );
}
