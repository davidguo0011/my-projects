import {
    ManagePaymentsPayPopupWrapper,
    ManagePaymentsRefundBackButtonIcon,
    ManagePaymentsRefundTitleWrapper,
    ManagePaymentsRefundTitle,
    ManagePaymentsRefundSubtitle,
    ManagePaymentsRefundOptionsWrapper,
    ManagePaymentsRefundOption,
    ManagePaymentsRefundOptionTextWrapper,
    ManagePaymentsRefundOptionTitle,
    ManagePaymentsRefundOptionSubtitle,
} from "../managePaymentsStyling";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../hook/useClickOutside";

interface ManagePaymentsRefundPopupProps {
    togglePopup: () => void;
    toggleNext: () => void;
    updateRefundReason: (arg1: string) => void;
}

export default function ManagePaymentsRefundPopup({ togglePopup, toggleNext, updateRefundReason }: ManagePaymentsRefundPopupProps) {
    const wrapperRef = useClickOutside(true, togglePopup);
    return (
        <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={togglePopup} noContinueBtn={true}>
            <ManagePaymentsPayPopupWrapper>
                <ManagePaymentsRefundTitleWrapper>
                    <ManagePaymentsRefundTitle>Request refund</ManagePaymentsRefundTitle>
                    <ManagePaymentsRefundSubtitle>Your host has 24 hours to respond to your refund request.</ManagePaymentsRefundSubtitle>
                </ManagePaymentsRefundTitleWrapper>
                <ManagePaymentsRefundOptionsWrapper>
                    <ManagePaymentsRefundOption
                        onClick={() => {
                            updateRefundReason("Booking related");
                            toggleNext();
                            togglePopup();
                        }}
                    >
                        <ManagePaymentsRefundOptionTextWrapper>
                            <ManagePaymentsRefundOptionTitle>Booking related</ManagePaymentsRefundOptionTitle>
                            <ManagePaymentsRefundOptionSubtitle>Refund for booking related issues</ManagePaymentsRefundOptionSubtitle>
                        </ManagePaymentsRefundOptionTextWrapper>
                        <ManagePaymentsRefundBackButtonIcon
                            style={{ transform: "rotate(180deg)" }}
                            src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                            alt="refund backl button"
                        />
                    </ManagePaymentsRefundOption>
                    <ManagePaymentsRefundOption
                        onClick={() => {
                            updateRefundReason("Property related");
                            toggleNext();
                            togglePopup();
                        }}
                    >
                        <ManagePaymentsRefundOptionTextWrapper>
                            <ManagePaymentsRefundOptionTitle>Property related</ManagePaymentsRefundOptionTitle>
                            <ManagePaymentsRefundOptionSubtitle>Refund for property related issues</ManagePaymentsRefundOptionSubtitle>
                        </ManagePaymentsRefundOptionTextWrapper>
                        <ManagePaymentsRefundBackButtonIcon
                            style={{ transform: "rotate(180deg)" }}
                            src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                            alt="refund backl button"
                        />
                    </ManagePaymentsRefundOption>
                    <ManagePaymentsRefundOption
                        onClick={() => {
                            updateRefundReason("Service related");
                            toggleNext();
                            togglePopup();
                        }}
                    >
                        <ManagePaymentsRefundOptionTextWrapper>
                            <ManagePaymentsRefundOptionTitle>Service related</ManagePaymentsRefundOptionTitle>
                            <ManagePaymentsRefundOptionSubtitle>Refund for service related issues</ManagePaymentsRefundOptionSubtitle>
                        </ManagePaymentsRefundOptionTextWrapper>
                        <ManagePaymentsRefundBackButtonIcon
                            style={{ transform: "rotate(180deg)" }}
                            src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                            alt="refund backl button"
                        />
                    </ManagePaymentsRefundOption>
                    <ManagePaymentsRefundOption
                        onClick={() => {
                            updateRefundReason("Other reasons");
                            toggleNext();
                            togglePopup();
                        }}
                    >
                        <ManagePaymentsRefundOptionTextWrapper>
                            <ManagePaymentsRefundOptionTitle>Other reasons</ManagePaymentsRefundOptionTitle>
                            <ManagePaymentsRefundOptionSubtitle>Please describe the issue for your refund</ManagePaymentsRefundOptionSubtitle>
                        </ManagePaymentsRefundOptionTextWrapper>
                        <ManagePaymentsRefundBackButtonIcon
                            style={{ transform: "rotate(180deg)" }}
                            src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                            alt="refund backl button"
                        />
                    </ManagePaymentsRefundOption>
                </ManagePaymentsRefundOptionsWrapper>
            </ManagePaymentsPayPopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
