import {
    ManagePaymentsPayPopupWrapper,
    ManagePaymentsFooterWrapper,
    ManagePaymentsFooterCancelButton,
    ManagePaymentsFooterRequestButton,
    ManagePaymentsRefundSentTitle,
    ManagePaymentsRefundSentSubtitle,
    ManagePaymentsDivider,
} from "../managePaymentsStyling";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface ManagePaymentsRefundSentPopupProps {
    togglePopup: () => void;
}

export default function ManagePaymentsRefundSentPopup({ togglePopup }: ManagePaymentsRefundSentPopupProps) {
    return (
        <GlobalPopupContainerCenter noBackBtn={true} noContinueBtn={true} closePopup={togglePopup}>
            <ManagePaymentsPayPopupWrapper>
                <ManagePaymentsRefundSentTitle>Request sent</ManagePaymentsRefundSentTitle>
                <ManagePaymentsRefundSentSubtitle>You have successfully sent a refund request, your host has 24 hours to respond.</ManagePaymentsRefundSentSubtitle>
                <ManagePaymentsDivider />
                <ManagePaymentsRefundSentTitle>Our commitment</ManagePaymentsRefundSentTitle>
                <ManagePaymentsRefundSentSubtitle>
                    We are committed to providing you with a perfect accomodation experience. On the rare occasion of things going wrong, rest assured knowing our friendly support team is here to help
                    you out.
                </ManagePaymentsRefundSentSubtitle>
                <ManagePaymentsFooterWrapper style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <ManagePaymentsFooterCancelButton type="button" onClick={togglePopup}>
                        Contact host
                    </ManagePaymentsFooterCancelButton>
                    <ManagePaymentsFooterRequestButton type="button" onClick={togglePopup}>
                        Done
                    </ManagePaymentsFooterRequestButton>
                </ManagePaymentsFooterWrapper>
            </ManagePaymentsPayPopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
