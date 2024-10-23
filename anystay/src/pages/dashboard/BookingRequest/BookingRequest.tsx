import { useEffect, useState, useCallback } from "react";
import {
    BookingRequestWrapper,
    BookingRequestTitle,
    BookingRequestSubtitle,
    BookingRequestRespondButton,
    BookingRequestContentTextWrapper,
    BookingRequestContentWrapper,
    BookingRequestContentText,
    BookingRequestGuestProfilePicture,
    BookingRequestGuestProfilePictureWrapper,
    BookingRequestContainerWrapper,
} from "../dashboardStyling";
import SkeletonLoadingDummyHostBooking from "../../../components/skeletonLoadingDummyCard/skeletonLoadingDummyHostBooking/skeletonLoadingDummyHostBooking";
import { motion } from "framer-motion";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { UserModel } from "../../../interfaces/models/userModel";
import { ChangeBookingRequestModel } from "../../../interfaces/models/changeBookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface DashboardBookingRequest extends BookingRequestModel {
    userModel?: UserModel;
    changeBookingRequestModel?: ChangeBookingRequestModel[];
    status?: string;
    daysUntilArrival?: number;
    daysUntilDeparture?: number;
    expiryTime?: number;
    listingModel?: ListingModel;
}

interface DashboardContentProps {
    bookingRequest: DashboardBookingRequest;
    delay: number;
}

const BookingRequest: React.FC<DashboardContentProps> = ({ bookingRequest, delay }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guestProfilePicture, setGuestProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [imgLoading, setImgLoading] = useState(true);
    const [complete, setComplete] = useState(false);
    const getProfilePicture = useCallback(() => {
        let guestData = bookingRequest.userModel;
        if (guestData && guestData.profilePicture) {
            const guestProfilePic = constructOptimisedProtectedImageUrl(guestData.profilePicture, guestData.identityID, 100);
            setGuestProfilePicture(guestProfilePic);
        }
    }, [bookingRequest]);
    const formatDate = useCallback(() => {
        let arrivalDate: Date | string = new Date(bookingRequest.arrivalDate.replace("Z", ""));
        let departureDate: Date | string = new Date(bookingRequest.departureDate.replace("Z", ""));
        arrivalDate = arrivalDate.toString().split(" ").slice(1, 3).reverse().join(" ");
        departureDate = departureDate.toString().split(" ").slice(1, 3).reverse().join(" ");
        if (bookingRequest.changeBookingRequestModel) {
            bookingRequest.changeBookingRequestModel.forEach((changeBookingRequestModel: ChangeBookingRequestModel) => {
                if (!changeBookingRequestModel.completed && !changeBookingRequestModel.confirmed) {
                    arrivalDate = new Date(changeBookingRequestModel.newArrivalDate.replace("Z", ""));
                    departureDate = new Date(changeBookingRequestModel.newDepartureDate.replace("Z", ""));
                    arrivalDate = arrivalDate.toString().split(" ").slice(1, 3).reverse().join(" ");
                    departureDate = departureDate.toString().split(" ").slice(1, 3).reverse().join(" ");
                }
            });
        }
        setStartDate(arrivalDate);
        setEndDate(departureDate);
    }, [bookingRequest]);

    useEffect(() => {
        getProfilePicture();
        formatDate();
    }, [formatDate, getProfilePicture]);

    const getBookingRequestTitle = () => {
        if (bookingRequest.status === "Confirmed") {
            if (bookingRequest.daysUntilArrival === 0 && bookingRequest.daysUntilDeparture === 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Departing today</span>;
            } else if (bookingRequest.daysUntilArrival && bookingRequest.daysUntilArrival > 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Arriving in {bookingRequest.daysUntilArrival} days</span>;
            } else if (bookingRequest.daysUntilDeparture && bookingRequest.daysUntilDeparture > 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Departing in {bookingRequest.daysUntilDeparture} days</span>;
            }
        }
        if (bookingRequest.status === "Overdue") {
            return <span style={{ color: ColorTheme.Red1.color }}>Overdue</span>;
        }
        if (bookingRequest.status === "Change Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Changes requested</span>;
        }
        if (bookingRequest.status === "Refund Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Refund requested</span>;
        }
        if (bookingRequest.status === "Booking Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Expires in {bookingRequest.expiryTime} hours</span>;
        }
    };

    const getBookingRequestRespondBtn = () => {
        if (bookingRequest.status === "Confirmed") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                    Details
                </BookingRequestRespondButton>
            );
        }
        if (bookingRequest.status === "Booking Requested") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Yellow.color }} to={`/booking-request/${bookingRequest.id}`}>
                    Stay requested
                </BookingRequestRespondButton>
            );
        }
        return (
            <BookingRequestRespondButton
                style={{ background: `${bookingRequest.status === "Overdue" ? ColorTheme.Red1.color : ColorTheme.Yellow.color}` }}
                to={`/booking-request/${bookingRequest.id}`}
            >
                Respond
            </BookingRequestRespondButton>
        );
    };

    return (
        <BookingRequestContainerWrapper>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, display: complete ? "none" : "block" }}
                transition={{ duration: 0.2, delay: delay }}
                onAnimationComplete={() => setComplete(true)}
            >
                <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "11" }}>
                    <SkeletonLoadingDummyHostBooking />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay }}>
                <BookingRequestWrapper>
                    <BookingRequestTitle>
                        {getBookingRequestTitle()}
                        {bookingRequest.status === "Change Requested" && <span style={{ color: ColorTheme.Yellow.color }}>{bookingRequest.expiryTime}h</span>}
                    </BookingRequestTitle>
                    <BookingRequestSubtitle>{bookingRequest.listingModel?.propertyTitle}</BookingRequestSubtitle>
                    <BookingRequestContentWrapper>
                        <BookingRequestContentTextWrapper>
                            <BookingRequestContentText>{bookingRequest.userModel?.firstName}</BookingRequestContentText>
                            <BookingRequestContentText>{`${startDate} - ${endDate}`}</BookingRequestContentText>
                        </BookingRequestContentTextWrapper>

                        <BookingRequestGuestProfilePictureWrapper>
                            <BookingRequestGuestProfilePicture
                                onLoad={() => {
                                    setImgLoading(false);
                                }}
                                src={guestProfilePicture}
                                alt={"Guest profile picture"}
                                imgLoading={imgLoading}
                            />
                        </BookingRequestGuestProfilePictureWrapper>
                    </BookingRequestContentWrapper>
                    {getBookingRequestRespondBtn()}
                </BookingRequestWrapper>
            </motion.div>
        </BookingRequestContainerWrapper>
    );
};

export default BookingRequest;
