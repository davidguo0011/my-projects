import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../utils/api/api";

//map
import Map from "../../components/map/map";
//styling
import {
    YourBookingWrapper,
    YourBookingTextLink,
    YourBookingTextLinkPhone,
    YourBookingHeaderDetailsDatesTextSection,
    YourBookingTextLinkImage,
    YourBookingDesktopWrapper,
    YourBookingDesktopMap,
    YourBookingReservationGuestsSplitter,
    YourBookingHeaderDetailsSeeListingButton,
    YourBookingCheckInGuide,
} from "./yourBookingStyling";
//popup
import ReviewCancellationPolicyPopup from "./popup/ReviewCancellationPolicyPopup/ReviewCancellationPolicyPopup";
// import ReasonForCancelPopup from "./popup/ReasonForCancelPopup/ReasonForCancelPopup";
import RefundSummaryPopup from "./popup/RefundSummaryPopup/RefundSummaryPopup";
import SendMessageToHostPopup from "./popup/SendMessageToHostPopup/SendMessageToHostPopup";
import BookingCanceledPopup from "./popup/BookingCanceledPopup/BookingCanceledPopup";
import ReceiptSentPopup from "./popup/ReceiptSentPopup/ReceiptSentPopup";
//sections
import YourBookingHeaderImgs from "./sections/YourBookingHeaderImgs";
import YourBookingHeaderMessage from "./sections/YourBookingHeaderMessage";
import YourBookingDateDetails from "./sections/YourBookingDateDetails";
import YourBookingAddressDetails from "./sections/YourBookingAddressDetails";
import YourBookingDetailsChangeAndCancelSection from "./sections/YourBookingDetailsChangeAndCancelSection";
import YourBookingGetSupport from "./sections/YourBookingGetSupport";
import YourBookingPriceDetails from "./sections/YourBookingPriceDetails";
import YourBookingManagePaymentsBtn from "./sections/YourBookingManagePaymentsBtn";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ListingModel } from "../../interfaces/models/listingModel";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { DisplayItem } from "../../interfaces/models/bookingDetail";
import { useNavigate } from "react-router-dom";
import { CheckInGuideIcon, CheckInGuideIconWrapper, CheckInGuideSubtitle, CheckInGuideTitle, CheckInGuideTitleWrapper } from "../yourStays/yourStaysStyling";
import YourStaysCheckInInstructions from "../yourStays/Popup/YourStaysCheckInInstruction";
import { initialInstruction } from "../editListing/util/initialInstruction";

export interface YourBookingRequestListingData extends ListingModel {
    checkInInstructions: string | null;
    checkOutInstructions: string | null;
    checkInTime: number;
}

export interface YourBookingRequestBookingRequest extends BookingRequestModel {
    conversationmodelID: string;
    guestPriceBreakdown: string;
    expired?: boolean;
    checkInTime: number;
    checkOutTime: number;
    overall?: null | number;
    reviewContent?: null | string;
    paymentAmount: number;
    confirmedAt: string;
}

export interface guestPriceBreakdownType {
    priceDiffItems: DisplayItem[] | null;
    priceItems: DisplayItem[];
    subTotalItems: DisplayItem[];
}

const YourBookingRequest: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    //data state
    const [bookingRequest, setBookingRequest] = useState<YourBookingRequestBookingRequest | null>(null);
    const [listingData, setListingData] = useState<YourBookingRequestListingData | null>(null);
    const [hostData, setHostData] = useState<UserHostModel["UserModel"] | null>(null);
    const [guestPriceBreakdown, setGuestPriceBreakdown] = useState<guestPriceBreakdownType | null>(null);

    //popup state
    const [popupName, setPopupName] = useState("");

    //page state
    const [refundAmount, setRefundAmount] = useState(0);
    const [changesRequested, setChangesRequested] = useState(false);
    const [refundRequested, setRefundRequested] = useState(false);
    const getBooking = useCallback(async () => {
        let bookingRequest = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
            headers: {
                Authorization: accessToken,
                bookingId: id,
            },
        });
        bookingRequest = bookingRequest.body.bookingRequest;

        setBookingRequest(bookingRequest);
        setGuestPriceBreakdown(JSON.parse(bookingRequest.guestPriceBreakdown));
        console.log(bookingRequest);
        setListingData(bookingRequest.ListingModel);
        setHostData(bookingRequest.UserHostModel.UserModel);
        if (bookingRequest.changeRequested) {
            setChangesRequested(true);
        }
        if (bookingRequest.refundRequested) {
            setRefundRequested(true);
        }
        //set up subscription to update booking details
        // const subscription = API.graphql({
        //     query: customSubscriptions.onUpdateBookingByID,
        //     variables: {
        //         id: bookingRequest.id,
        //     },
        // }) as Observable<any>;

        // subscription.subscribe({
        //     next: ({ provider, value }) => {
        //         getBooking();
        //     },
        //     error: (error: any) => console.log(error),
        // });
    }, [id, accessToken]);

    useEffect(() => {
        //init
        getBooking();
    }, [getBooking]);

    const deactivatePopupCards = async () => {
        setPopupName("");
        document.body.style.overflow = "unset";
    };

    const activateCard = (name: string) => {
        setPopupName(name);
        document.body.style.overflow = "hidden";
    };

    const isDateBeforeDate = () => {
        if (bookingRequest) {
            const departureDate = new Date(new Date(bookingRequest.departureDate.slice(0, -1)).setHours(0, 0, 0, 0));
            const dateBeforeArrivalDate = new Date(new Date(bookingRequest.arrivalDate.slice(0, -1)).getTime() - 2 * 86400000);
            const currentDate = new Date();

            return currentDate >= dateBeforeArrivalDate && currentDate < departureDate;
        } else {
            return false;
        }
    };

    const renderCheckInGuide = () => {
        if (!listingData?.checkInInstructions) return null;
        try {
            let guide = initialInstruction(listingData.checkInInstructions, true);
            if ((guide.steps[0].instruction || guide.steps[0].imgKey) && isDateBeforeDate()) {
                return (
                    <YourBookingCheckInGuide
                        onClick={(event) => {
                            activateCard("YourStaysCheckInInstructions");
                        }}
                    >
                        <CheckInGuideIconWrapper style={{ marginLeft: "16px" }}>
                            <CheckInGuideIcon src="https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg" alt="Check in guid icon" />
                        </CheckInGuideIconWrapper>
                        <CheckInGuideTitleWrapper>
                            <CheckInGuideTitle>Check-in guide</CheckInGuideTitle>
                            <CheckInGuideSubtitle>Arrive after {guide.checkInOutTime.startTime}</CheckInGuideSubtitle>
                        </CheckInGuideTitleWrapper>
                    </YourBookingCheckInGuide>
                );
            } else {
                return null;
            }
        } catch (error) {
            return (
                <YourBookingCheckInGuide
                    onClick={(event) => {
                        activateCard("YourStaysCheckInInstructions");
                    }}
                >
                    <CheckInGuideIconWrapper style={{ marginLeft: "16px" }}>
                        <CheckInGuideIcon src="https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg" alt="Check in guid icon" />
                    </CheckInGuideIconWrapper>
                    <CheckInGuideTitleWrapper>
                        <CheckInGuideTitle>Check-in guide</CheckInGuideTitle>
                        <CheckInGuideSubtitle>Arrive after {`${listingData.checkInTime / 100}:00`}</CheckInGuideSubtitle>
                    </CheckInGuideTitleWrapper>
                </YourBookingCheckInGuide>
            );
        }
    };

    if (!bookingRequest || !hostData || !listingData) return null;
    return (
        <YourBookingDesktopWrapper>
            <HelmetTags title={`Your stay in ${listingData.suburb} | ${bookingRequest.confirmationCode} | Anystay`} />
            <YourBookingWrapper>
                <YourBookingHeaderImgs listingData={listingData} bookingRequest={bookingRequest} />
                {renderCheckInGuide()}
                <YourBookingHeaderMessage bookingRequest={bookingRequest} refundRequested={refundRequested} changesRequested={changesRequested} />
                <YourBookingDateDetails bookingRequest={bookingRequest} />
                <YourBookingAddressDetails listingData={listingData} />
                <YourBookingHeaderDetailsDatesTextSection>
                    <YourBookingTextLink to={`/conversation/${bookingRequest.conversationmodelID}`}>
                        Message host
                        <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                    </YourBookingTextLink>
                </YourBookingHeaderDetailsDatesTextSection>
                <YourBookingHeaderDetailsDatesTextSection style={{ borderBottom: "none" }}>
                    <YourBookingTextLinkPhone href={`tel:${hostData.phone}`}>
                        Call host
                        <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                    </YourBookingTextLinkPhone>
                </YourBookingHeaderDetailsDatesTextSection>
                <YourBookingReservationGuestsSplitter />
                <YourBookingDetailsChangeAndCancelSection
                    bookingRequest={bookingRequest}
                    listingData={listingData}
                    changesRequested={changesRequested}
                    refundRequested={refundRequested}
                    activateCard={activateCard}
                    hostData={hostData}
                />
                <YourBookingReservationGuestsSplitter />
                <YourBookingGetSupport />
                <YourBookingReservationGuestsSplitter />
                <YourBookingPriceDetails guestPriceBreakdown={guestPriceBreakdown as guestPriceBreakdownType} />
                <YourBookingManagePaymentsBtn bookingRequest={bookingRequest} />
                {popupName === "cancelStayMenuPolicy" && (
                    <ReviewCancellationPolicyPopup
                        accessToken={accessToken}
                        bookingRequest={bookingRequest}
                        activateCard={activateCard}
                        deactivatePopupCards={deactivatePopupCards}
                        setRefundAmount={setRefundAmount}
                    />
                )}
                {/* {popupName === "cancelStayMenu" && (
                    <ReasonForCancelPopup
                        accessToken={accessToken}
                        bookingRequest={bookingRequest}
                        activateCard={activateCard}
                        deactivatePopupCards={deactivatePopupCards}
                        setRefundAmount={setRefundAmount}
                    />
                )} */}
                {popupName === "cancelStayMenuRefundSummary" && (
                    <RefundSummaryPopup refundAmount={refundAmount} bookingRequest={bookingRequest} activateCard={activateCard} deactivatePopupCards={deactivatePopupCards} />
                )}
                {popupName === "cancelStayMenuRefundMessage" && (
                    <SendMessageToHostPopup
                        accessToken={accessToken}
                        bookingRequest={bookingRequest}
                        activateCard={activateCard}
                        deactivatePopupCards={deactivatePopupCards}
                        setBookingRequest={setBookingRequest}
                        setGuestPriceBreakdown={setGuestPriceBreakdown}
                    />
                )}
                {popupName === "cancelStayPopupSubmitted" && <BookingCanceledPopup deactivatePopupCards={deactivatePopupCards} />}
                {popupName === "sendReceiptPopup" && <ReceiptSentPopup deactivatePopupCards={deactivatePopupCards} />}
                {popupName === "YourStaysCheckInInstructions" && <YourStaysCheckInInstructions checkInInstructions={listingData.checkInInstructions} deactivatePopupCards={deactivatePopupCards} />}
                <YourBookingHeaderDetailsSeeListingButton type="button" onClick={() => navigate(`/listing/${listingData.id}`)}>
                    See listing
                </YourBookingHeaderDetailsSeeListingButton>
            </YourBookingWrapper>
            <YourBookingDesktopMap>
                <Map
                    containerStyle={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0px",
                        position: "absolute",
                        bottom: -25,
                    }}
                    lat={JSON.parse(listingData.location).lat}
                    lng={JSON.parse(listingData.location).lon}
                    zoom={16}
                    minZoom={13}
                />
            </YourBookingDesktopMap>
        </YourBookingDesktopWrapper>
    );
};

export default YourBookingRequest;
