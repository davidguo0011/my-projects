import { AlertIcon, Btn, BtnContainer, Wrapper, Title, Subtitle } from "./paymentFailedModalStyling";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";

interface PaymentFailedNotAvailableBookingProps {
    closeModal: () => void;
}

const PaymentFailedNotAvailableBooking: React.FC<PaymentFailedNotAvailableBookingProps> = ({ closeModal }) => {
    return (
        <AnimationWrapperForPopup>
            <Wrapper>
                <div style={{ height: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <AlertIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Unavailable feature icon" />
                    <Title>Booking failed</Title>
                    <Subtitle>The dates you selected are no longer available.</Subtitle>
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
                </BtnContainer>
            </Wrapper>
        </AnimationWrapperForPopup>
    );
};

export default PaymentFailedNotAvailableBooking;
