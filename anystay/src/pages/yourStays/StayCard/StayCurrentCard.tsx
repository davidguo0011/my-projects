import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../../utils/api/api";

// Import styling
import {
    YourStayPastCardWrapper,
    YourStayPastCardFeaturedImage,
    YourStayPastCardSubtitle,
    YourStaysPastCardFooterWrapper,
    YourStaysBookingRequestReviewPastStayTitle,
    YourStayPastCardFeaturedImageWrapper,
} from "../yourStaysStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import SkeletonLoadingDummyCardYourPastStay from "../../../components/skeletonLoadingDummyCard/skeletonLoadingDummyCardYourStay/skeletonLoadingDummyCardYourPastStay";
import { YourStaysProps } from "../yourStays";
import { StayListingProps } from "../StayMap/stayLocation";

interface StayCardProps {
    bookingRequest: YourStaysProps;
}

const StayCard: React.FC<StayCardProps> = ({ bookingRequest }) => {
    const navigate = useNavigate();
    const [listingData, setListingData] = useState<StayListingProps | null>(null);
    const [loading, setLoading] = useState(true);

    const initStay = async (bookingRequest: YourStaysProps) => {
        try {
            let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${bookingRequest.listingmodelID}/your-stay-card`);
            setListingData(listingData.body.listing);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    };
    useEffect(() => {
        const init = async () => {
            await initStay(bookingRequest);
        };
        init();
    }, [bookingRequest]);

    const getArrivalDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let arrivalDate = new Date(bookingRequest.arrivalDate);
        return `${arrivalDate.getUTCDate()} ${month[arrivalDate.getUTCMonth()]}`;
    };

    const getDepartureDate = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let departureDate = new Date(bookingRequest.departureDate);
        return `${departureDate.getUTCDate()} ${month[departureDate.getUTCMonth()]}`;
    };

    const getStatus = () => {
        if (bookingRequest.status === "Booking Requested") {
            return "Requested";
        }
        if (bookingRequest.status === "Change Requested") {
            return bookingRequest.status;
        }
        if (bookingRequest.status === "Refund Requested") {
            return bookingRequest.status;
        }
        return `Arriving in ${bookingRequest.daysUntilArrival} day`;
    };

    if (loading || !listingData) return <SkeletonLoadingDummyCardYourPastStay />;
    return (
        <YourStayPastCardWrapper>
            <YourStayPastCardFeaturedImageWrapper
                onClick={() => {
                    navigate(`/your-booking/${bookingRequest.id}`);
                }}
            >
                <YourStayPastCardFeaturedImage src={constructOptimisedImageUrl(JSON.parse(listingData.listingImages[0] as string).key, 800)} alt="Featured image" />
            </YourStayPastCardFeaturedImageWrapper>

            <YourStayPastCardSubtitle>{listingData.propertyTitle}</YourStayPastCardSubtitle>
            <YourStaysPastCardFooterWrapper>
                {getArrivalDate()} - {getDepartureDate()}
            </YourStaysPastCardFooterWrapper>

            <YourStaysBookingRequestReviewPastStayTitle>{getStatus()}</YourStaysBookingRequestReviewPastStayTitle>
        </YourStayPastCardWrapper>
    );
};

export default StayCard;
