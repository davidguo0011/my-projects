import { PayoutPaymentLink, PaymentsMenuItemButtonIcon, PaymentsIconButton } from "../paymentSettingsStyling";
import { PayoutPaymentItem, PayoutPaymentBookingRequestImage, PayoutPaymentTextWrapper, PayoutPaymentTextTitle, PayoutPaymentTextSubtitle } from "../../payouts/payoutsStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { TransactionInterface } from "../paymentSettings";

export default function PaymentItem({ paymentModel }: { paymentModel: TransactionInterface }) {
    const listingSuburb = paymentModel.bookingRequestSummary?.ListingModel.suburb;
    const date = new Date(paymentModel.paymentIntent.created * 1000);

    if (!paymentModel.bookingRequestSummary?.ListingModel) return null;

    return (
        <PayoutPaymentLink to={`/manage-payments/${paymentModel.paymentIntent.metadata.bookingID}`}>
            <PayoutPaymentItem>
                <PayoutPaymentBookingRequestImage src={constructOptimisedImageUrl(JSON.parse(paymentModel.bookingRequestSummary.ListingModel.listingImages[0] as string).key, 300)} alt="" />
                <PayoutPaymentTextWrapper>
                    {paymentModel.charge.amount_refunded > 0 ? (
                        <PayoutPaymentTextTitle>
                            ${((paymentModel.charge.amount - paymentModel.charge.amount_refunded) / 100).toFixed(2)} (-${(paymentModel.charge.amount_refunded / 100).toFixed(2)}) AUD
                        </PayoutPaymentTextTitle>
                    ) : (
                        <PayoutPaymentTextTitle>${(paymentModel.charge.amount / 100).toFixed(2)} AUD</PayoutPaymentTextTitle>
                    )}
                    <PayoutPaymentTextSubtitle>
                        {date ? `${date.toDateString().split(" ")[2]} ${date.toDateString().split(" ")[1]} · ${listingSuburb ? listingSuburb : null}` : ""}
                    </PayoutPaymentTextSubtitle>
                </PayoutPaymentTextWrapper>
                <PaymentsIconButton>
                    <PaymentsMenuItemButtonIcon style={{ transform: "rotate(180deg)" }} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="" />
                </PaymentsIconButton>
            </PayoutPaymentItem>
        </PayoutPaymentLink>
    );
}
