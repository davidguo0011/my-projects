import { AlertIcon, Btn, BtnContainer, Wrapper, Title, Subtitle } from "./paymentFailedModalStyling";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
import { FormEvent } from "react";

interface PaymentFailedModalProps {
    tryAgainFunc: (e?: FormEvent<HTMLFormElement>) => Promise<void>;
    closeModal: () => void;
}

const PaymentFailedModal: React.FC<PaymentFailedModalProps> = ({ tryAgainFunc, closeModal }) => {
    return (
        <AnimationWrapperForPopup>
            <Wrapper>
                <div style={{ height: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <AlertIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Unavailable feature icon" />
                    <Title>Payment failed</Title>
                    <Subtitle>Your payment method is invalid, please try again or change it.</Subtitle>
                </div>
                <BtnContainer>
                    <Btn
                        paymentType="back"
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        Back
                    </Btn>
                    {tryAgainFunc && (
                        <Btn
                            paymentType="try-again"
                            onClick={() => {
                                tryAgainFunc();
                            }}
                        >
                            Try again
                        </Btn>
                    )}
                </BtnContainer>
            </Wrapper>
        </AnimationWrapperForPopup>
    );
};

export default PaymentFailedModal;
