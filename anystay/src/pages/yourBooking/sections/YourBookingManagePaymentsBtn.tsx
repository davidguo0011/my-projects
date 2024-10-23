import { YourBookingHeaderDetailsDatesTextSection, YourBookingManagePaymentsButton } from "../yourBookingStyling";
import { useNavigate } from "react-router-dom";
import { YourBookingTextLinkImage } from "../yourBookingStyling";
import { YourBookingRequestBookingRequest } from "../yourBooking";

interface YourBookingManagePaymentsBtnProps {
    bookingRequest: YourBookingRequestBookingRequest;
}

const YourBookingManagePaymentsBtn: React.FC<YourBookingManagePaymentsBtnProps> = ({ bookingRequest }) => {
    const navigate = useNavigate();
    return (
        <YourBookingHeaderDetailsDatesTextSection style={{borderBottom: "0"}}>
            {bookingRequest.confirmed || bookingRequest.declined || bookingRequest.expired ? (
                <YourBookingManagePaymentsButton onClick={() => navigate(`/manage-payments/${bookingRequest.id}`)}>
                    Manage payments
                    <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                </YourBookingManagePaymentsButton>
            ) : (
                <YourBookingManagePaymentsButton>
                    Manage payments
                    <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                </YourBookingManagePaymentsButton>
            )}
        </YourBookingHeaderDetailsDatesTextSection>
    );
};

export default YourBookingManagePaymentsBtn;
