import {
    ManagePaymentsPaymentItemWrapper,
    ManagePaymentsPaymentPayButton,
    ManagePaymentsPaymentTitle,
    ManagePaymentsPaymentSubtitle,
    ManagePaymentsPaymentTextWrapper,
    ManagePaymentHeaderLinkIcon,
} from "../managePaymentsStyling";

interface ManagePaymentsPaymentProps {
    //need a payment model interface in models
    payment: any;
}

export default function ManagePaymentsPayment({ payment }: ManagePaymentsPaymentProps) {
    const getMonth = (monthIndex: number) => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return month[monthIndex];
    };

    const setSubtitle = () => {
        if (payment.charge.amount_refunded && payment.charge.amount_refunded > 0) {
            return "Refunded";
        } else {
            let monthIndex = new Date(payment.charge.created * 1000).getMonth();
            let month = getMonth(monthIndex);
            let date = new Date(payment.charge.created * 1000).getDate();
            return `Paid on ${date} ${month}`;
        }
    };
    if (!payment.paymentIntent) {
        return null;
    }

    return (
        <ManagePaymentsPaymentItemWrapper type="button" onClick={() => window.open(payment.charge.receipt_url, "_blank")}>
            <ManagePaymentsPaymentTextWrapper>
                {payment.charge.amount_refunded && payment.charge.amount_refunded > 0 ? (
                    <ManagePaymentsPaymentTitle>
                        ${((payment.charge.amount - payment.charge.amount_refunded) / 100).toFixed(2)} (-${(payment.charge.amount_refunded / 100).toFixed(2)})
                    </ManagePaymentsPaymentTitle>
                ) : (
                    <ManagePaymentsPaymentTitle>${(payment.charge.amount / 100).toFixed(2)}</ManagePaymentsPaymentTitle>
                )}
                <ManagePaymentsPaymentSubtitle>{setSubtitle()}</ManagePaymentsPaymentSubtitle>
            </ManagePaymentsPaymentTextWrapper>
            <ManagePaymentsPaymentPayButton>
                <ManagePaymentHeaderLinkIcon style={{ margin: 0 }} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Listing header button" />
            </ManagePaymentsPaymentPayButton>
        </ManagePaymentsPaymentItemWrapper>
    );
}
