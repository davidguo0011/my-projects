import {
    YourStayMapCardWrapper,
    YourStayMapCardStatus,
    YourStayCardMapFeaturedImageWrapper,
    YourStayCardFeaturedImage,
    YourStayMapCardTitle,
    YourStaysMapCardFooterDates,
    YourStaysMapCardFooterDate,
    YourStaysMapCardFooterDivider,
    YourStayMapCardLocation,
    YourStaysMapCardFooterWrapper,
    YourStaysMapCardMobileFooterDates,
    YourStayMapCardMobileLocation,
    YourStaysStayMapCardStarsButton,
    YourStaysStayMapCardReviewStayTitle,
    YourStaysStayMapCardStarsWrapper,
    YourStaysMapCardCheckInGuideWrapper,
    CheckInGuideIcon,
    CheckInGuideTitle,
    CheckInGuideSubtitle,
    CheckInGuideIconWrapper,
    YourStaysMapCardWrapper,
    CheckInGuideTitleWrapper,
} from "../yourStaysStyling";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { YourStaysProps } from "../yourStays";
import { StayListingProps } from "../StayMap/stayLocation";
import { useState } from "react";
import YourStaysCheckInInstructions from "../Popup/YourStaysCheckInInstruction";

interface StayMapProps {
    bookingRequest: YourStaysProps;
    listingData: StayListingProps;
}

const StayMap: React.FC<StayMapProps> = ({ bookingRequest, listingData }) => {
    const navigate = useNavigate();
    const [popupName, setPopupName] = useState("");
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
        if (bookingRequest.status === "Confirmed") {
            let today = new Date();
            let arrivalDate = new Date(bookingRequest.arrivalDate);
            let departureDate = new Date(bookingRequest.departureDate);

            arrivalDate.setUTCHours(0, 0, 0, 0);
            departureDate.setUTCHours(0, 0, 0, 0);
            if (arrivalDate > today) {
                if (bookingRequest.daysUntilArrival > 1) {
                    return `Arriving in ${bookingRequest.daysUntilArrival} days`;
                } else if (bookingRequest.daysUntilArrival === 1) {
                    return "Arriving tomorrow";
                }
                let hours = new Date(bookingRequest.arrivalDate).getUTCHours();
                const minutes = new Date(bookingRequest.arrivalDate).getUTCMinutes();
                const ampm = hours >= 12 ? "pm" : "am";
                hours = hours % 12;
                hours = hours ? hours : 12;
                return `Check-in after ${hours}:${minutes < 10 ? "0" + minutes : minutes}${ampm}`;
            } else {
                if (bookingRequest.daysUntilDeparture > 1) {
                    return `Departing in ${bookingRequest.daysUntilDeparture} days`;
                } else if (bookingRequest.daysUntilDeparture === 1) {
                    return "Departing tomorrow";
                }
                let hours = new Date(bookingRequest.departureDate).getUTCHours();
                const minutes = new Date(bookingRequest.departureDate).getUTCMinutes();
                const ampm = hours >= 12 ? "pm" : "am";
                hours = hours % 12;
                hours = hours ? hours : 12;
                return `Checkout before ${hours}:${minutes < 10 ? "0" + minutes : minutes}${ampm}`;
            }
        }
        if (bookingRequest.status === "Review Pending" || bookingRequest.status === "Stay Review Pending" || bookingRequest.status === "Guest Review Pending" || bookingRequest.status === "Reviewed") {
            return "Complete";
        }

        return "";
    };

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
                <YourStaysStayMapCardStarsButton
                    key={i}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    to={`/review-stay/${bookingRequest.id}/${bookingRequest.listingmodelID}`}
                >
                    <svg width="34" height="34" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z"
                            fill={starAmount && i <= starAmount ? ColorTheme.Red.color : ColorTheme.Grey2.color}
                        />
                    </svg>
                </YourStaysStayMapCardStarsButton>
            );
        }
        return list;
    };

    const isDateBeforeDate = () => {
        const departureDate = new Date(new Date(bookingRequest.departureDate.slice(0, -1)).setHours(0, 0, 0, 0));
        const dateBeforeArrivalDate = new Date(new Date(bookingRequest.arrivalDate.slice(0, -1)).getTime() - 2 * 86400000);
        const currentDate = new Date();

        return currentDate >= dateBeforeArrivalDate && currentDate < departureDate;
    };

    const deactivatePopupCards = async () => {
        setPopupName("");
        document.body.style.overflow = "unset";
    };

    const activateCard = (name: string) => {
        setPopupName(name);
        document.body.style.overflow = "hidden";
    };
    const renderCheckInGuide = () => {
        if (listingData.checkInInstructions) {
            try {
                let guide = JSON.parse(listingData.checkInInstructions);
                if ((guide.steps[0].instruction || guide.steps[0].imgKey) && isDateBeforeDate()) {
                    return (
                        <YourStaysMapCardCheckInGuideWrapper
                            onClick={(event) => {
                                event.stopPropagation();
                                activateCard("YourStaysCheckInInstructions");
                            }}
                        >
                            <CheckInGuideIconWrapper>
                                <CheckInGuideIcon src="https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg" alt="Check in guid icon" />
                            </CheckInGuideIconWrapper>
                            <CheckInGuideTitleWrapper>
                                <CheckInGuideTitle>Check-in guide</CheckInGuideTitle>
                                <CheckInGuideSubtitle>Hosted by {listingData.UserHostModel.UserModel.firstName}</CheckInGuideSubtitle>
                            </CheckInGuideTitleWrapper>
                        </YourStaysMapCardCheckInGuideWrapper>
                    );
                } else {
                    return null;
                }
            } catch (error) {
                return (
                    <YourStaysMapCardCheckInGuideWrapper
                        onClick={(event) => {
                            event.stopPropagation();
                            activateCard("YourStaysCheckInInstructions");
                        }}
                    >
                        <CheckInGuideIconWrapper>
                            <CheckInGuideIcon src="https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg" alt="Check in guid icon" />
                        </CheckInGuideIconWrapper>
                        <CheckInGuideTitleWrapper>
                            <CheckInGuideTitle>Check-in guide</CheckInGuideTitle>
                            <CheckInGuideSubtitle>Hosted by {listingData.UserHostModel.UserModel.firstName}</CheckInGuideSubtitle>
                        </CheckInGuideTitleWrapper>
                    </YourStaysMapCardCheckInGuideWrapper>
                );
            }
        }
    };

    if (!listingData) return null;
    return (
        <>
            <YourStayMapCardWrapper
                onClick={() => {
                    navigate(`/your-booking/${bookingRequest.id}`);
                }}
            >
                <YourStayMapCardStatus style={{ color: ColorTheme.Black.color }}>{getStatus()}</YourStayMapCardStatus>

                <YourStayCardMapFeaturedImageWrapper>
                    {listingData && <YourStayCardFeaturedImage src={constructOptimisedImageUrl(JSON.parse(listingData.listingImages[0] as string).key, 800)} alt="Featured image" />}
                </YourStayCardMapFeaturedImageWrapper>

                {bookingRequest.status === "Review Pending" || bookingRequest.status === "Stay Review Pending" ? (
                    <>
                        <YourStaysStayMapCardReviewStayTitle>Review your stay</YourStaysStayMapCardReviewStayTitle>
                        <YourStaysStayMapCardStarsWrapper>{getReviewStayStarBtns()}</YourStaysStayMapCardStarsWrapper>
                    </>
                ) : (
                    <YourStaysMapCardWrapper>
                        <YourStayMapCardTitle>{listingData ? listingData.propertyTitle : ""}</YourStayMapCardTitle>
                        <YourStayMapCardLocation>
                            {listingData.unitNumber && `${listingData.unitNumber}/`}
                            {listingData.streetNumber} {listingData.street}, {listingData.suburb}
                        </YourStayMapCardLocation>
                        <YourStayMapCardMobileLocation>
                            {listingData.unitNumber && `${listingData.propertyTitle}/`}
                            {listingData.streetNumber} {listingData.street}, {listingData.suburb}
                        </YourStayMapCardMobileLocation>
                        <YourStaysMapCardFooterWrapper>
                            <YourStaysMapCardFooterDates>
                                <YourStaysMapCardFooterDate style={{ marginRight: "16px" }}>{getArrivalDate()}</YourStaysMapCardFooterDate>
                                <YourStaysMapCardMobileFooterDates style={{ marginRight: "16px" }}>{getArrivalDate()}</YourStaysMapCardMobileFooterDates>
                                <YourStaysMapCardFooterDivider />
                                <YourStaysMapCardFooterDate style={{ marginLeft: "16px" }}>{getDepartureDate()}</YourStaysMapCardFooterDate>
                                <YourStaysMapCardMobileFooterDates style={{ marginLeft: "16px" }}>{getDepartureDate()}</YourStaysMapCardMobileFooterDates>
                            </YourStaysMapCardFooterDates>
                        </YourStaysMapCardFooterWrapper>
                        {renderCheckInGuide()}
                    </YourStaysMapCardWrapper>
                )}
                {popupName === "YourStaysCheckInInstructions" && <YourStaysCheckInInstructions checkInInstructions={listingData.checkInInstructions} deactivatePopupCards={deactivatePopupCards} />}
            </YourStayMapCardWrapper>
        </>
    );
};

export default StayMap;
