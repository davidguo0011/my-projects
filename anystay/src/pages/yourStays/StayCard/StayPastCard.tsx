import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { callApi } from "../../../utils/api/api";

// Import styling
import {
    YourStayPastCardWrapper,
    YourStayPastCardFeaturedImage,
    YourStayPastCardSubtitle,
    YourStaysPastCardFooterWrapper,
    YourStaysBookingRequestReviewStayWrapper,
    YourStaysBookingRequestReviewPastStayTitle,
    YourStaysBookingRequestReviewStayStarsWrapper,
    YourStaysBookingRequestReviewStayStarButton,
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

    const getReviewStayStarBtns = () => {
        const list = [];
        const starAmount = bookingRequest.overallReviewScore;
        for (let i = 1; i <= 5; i++) {
            list.push(
                <YourStaysBookingRequestReviewStayStarButton key={i} to={`/review-stay/${bookingRequest.id}/${bookingRequest.listingmodelID}`}>
                    <svg width="16" height="16" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z"
                            fill={starAmount && i <= starAmount ? ColorTheme.Red.color : ColorTheme.Grey2.color}
                        />
                    </svg>
                </YourStaysBookingRequestReviewStayStarButton>
            );
        }
        return list;
    };

    const getStatus = () => {
        if (bookingRequest.status === "Reviewed") {
            return "Complete";
        }
        if (bookingRequest.status === "Cancelled") {
            return "Cancelled";
        }
        if (bookingRequest.status === "Declined") {
            return "Declined";
        }
        if (bookingRequest.status === "Overdue") {
            return "Expired";
        }
        return "Complete";
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

            <YourStayPastCardSubtitle>{listingData ? listingData.propertyTitle : ""}</YourStayPastCardSubtitle>
            <YourStaysPastCardFooterWrapper>
                {getArrivalDate()} - {getDepartureDate()}
            </YourStaysPastCardFooterWrapper>

            {bookingRequest.status === "Review Pending" || bookingRequest.status === "Stay Review Pending" ? (
                <YourStaysBookingRequestReviewStayWrapper>
                    <YourStaysBookingRequestReviewStayStarsWrapper>{getReviewStayStarBtns()}</YourStaysBookingRequestReviewStayStarsWrapper>
                </YourStaysBookingRequestReviewStayWrapper>
            ) : (
                <YourStaysBookingRequestReviewPastStayTitle>{getStatus()}</YourStaysBookingRequestReviewPastStayTitle>
            )}
        </YourStayPastCardWrapper>
    );
};

export default StayCard;