import { PayoutPaymentItem, PayoutPaymentBookingRequestImage, PayoutPaymentTextWrapper, PayoutPaymentTextTitle, PayoutPaymentTextSubtitle, PayoutPaymentButton } from "../payoutsStyling";
import { useNavigate } from "react-router-dom";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingImageObject, ListingModel } from "../../../interfaces/models/listingModel";

interface ExtendedBookingRequestModel extends BookingRequestModel {
    bookingAmount: number;
    userModel: { firstName: string; identityID: string; profilePicture: string };
    refundAmount: number;
    listingModel: ListingModel;
    status: string;
}
interface PaymentItemProps {
    bookingRequest: ExtendedBookingRequestModel;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ bookingRequest }) => {
    const navigate = useNavigate();
    let ListingPicture = constructOptimisedImageUrl((bookingRequest.listingModel.listingImages[0] as ListingImageObject).key);
    const getRespondNeeded = () => {
        return bookingRequest.status === "Change Requested" || bookingRequest.status === "Booking Requested" || bookingRequest.status === "Refund Requested";
    };

    return (
        <PayoutPaymentItem
            type="button"
            onClick={() => {
                navigate(getRespondNeeded() ? `/booking-request/${bookingRequest.id}` : `/payment-details/${bookingRequest.id}`);
            }}
        >
            <PayoutPaymentBookingRequestImage src={ListingPicture} alt="profile image" />
            <PayoutPaymentTextWrapper>
                <PayoutPaymentTextTitle>
                    {bookingRequest.refundAmount > 0
                        ? `$${Number((bookingRequest.bookingAmount - bookingRequest.refundAmount) / 100).toFixed(2)} (-$${(bookingRequest.refundAmount / 100).toFixed(2)})`
                        : `$${Number(bookingRequest.bookingAmount / 100).toFixed(2)}`}
                </PayoutPaymentTextTitle>
                <PayoutPaymentTextSubtitle>{`${new Date(bookingRequest.arrivalDate.replace("Z", "")).toLocaleDateString("au", {
                    day: "numeric",
                    month: "short",
                })} · ${bookingRequest.userModel.firstName}`}</PayoutPaymentTextSubtitle>
            </PayoutPaymentTextWrapper>
            <PayoutPaymentButton respondNeeded={getRespondNeeded()}>{getRespondNeeded() ? "Respond" : "Details"}</PayoutPaymentButton>
        </PayoutPaymentItem>
    );
};

export default PaymentItem;
