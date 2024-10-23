import {
    PayoutPaymentItem,
    PayoutPaymentBookingRequestImage,
    PayoutPaymentTextWrapper,
    PayoutPaymentTextTitle,
    PayoutPaymentTextSubtitle,
    ManagePaymentsPaymentPayButton,
    ManagePaymentHeaderLinkIcon,
} from "../../payouts/payoutsStyling";
import { useNavigate } from "react-router-dom";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface PaymentItemProps {
    //will change the datastructure
    transfer: any;
    imgKey: string;
}

export default function PaymentItem({ transfer, imgKey }: PaymentItemProps) {
    const navigate = useNavigate();
    return (
        <PayoutPaymentItem
            type="button"
            onClick={() => {
                navigate(`/booking-receipt/${transfer.metadata.bookingID ? transfer.metadata.bookingID : ""}`);
            }}
        >
            <PayoutPaymentBookingRequestImage src={constructOptimisedImageUrl(imgKey, 300)} alt="" />
            <PayoutPaymentTextWrapper>
                <PayoutPaymentTextTitle>
                    {transfer.amount_reversed > 0
                        ? `$${Number((transfer.amount - transfer.amount_reversed) / 100).toFixed(2)} (-$${transfer.amount_reversed})`
                        : `$${Number(transfer.amount / 100).toFixed(2)}`}
                </PayoutPaymentTextTitle>
                <PayoutPaymentTextSubtitle>{`Paid on ${new Date(transfer.created * 1000).toLocaleDateString("au", { day: "numeric", month: "short" })}`}</PayoutPaymentTextSubtitle>
            </PayoutPaymentTextWrapper>
            <ManagePaymentsPaymentPayButton>
                <ManagePaymentHeaderLinkIcon style={{ margin: 0 }} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Listing header button" />
            </ManagePaymentsPaymentPayButton>
        </PayoutPaymentItem>
    );
}
