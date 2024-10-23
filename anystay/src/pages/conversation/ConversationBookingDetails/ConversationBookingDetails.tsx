import {
    ConversationBookingRequestDesktopWrapper,
    BookingRequestDetailsButton,
    BookingRequestDetailsButtonComplete,
    BookingRequestDetailsWrapperButton,
    BookingRequestImage,
    BookingRequestTitle,
    BookingRequestSubtitle,
    BookingRequestDatesWrapper,
    BookingRequestDatesTitle,
    BookingRequestDatesSubtitle,
    BookingRequestDatesSubtitleTime,
    BookingRequestDatesDivider,
    BookingRequestDetailWrapper,
    BookingRequestDetailButton,
    PriceDetailsSubtotalPriceWrapper,
    PriceDetailsSubtotalPrice,
    PriceDetailsSubtotalPriceDivider,
    BookingRequestCommunicationNotice,
    BookingRequestReportHost,
    BookingRequestDetailLinkDisabled,
    BookingRequestDetailLink,
    InboxSectionDivider,
    BookingRequestCompleteOrDetailsButtonWrapper,
    ConversationBookingRequestDesktopHeaderSubtitle,
    BookingRequestStateWrapper,
} from "../conversationStyling";
import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ConversationBookingRequestDesktopWrapperLoading from "../loading/ConversationBookingRequestDesktopWrapperLoading/ConversationBookingRequestDesktopWrapperLoading";
import { useNavigate } from "react-router-dom";
import { defaultSearchFilter } from "../../../utils/defaultSearchQuery/defaultSearchQuery";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";

interface ExtendedBookingRequest extends BookingRequestModel {
    expired: boolean;
    ListingModel: ListingModel;
    checkInTime: number;
    checkOutTime: number;
}

interface BookingGuestData {
    firstName: string;
    phone: string;
}

interface ListingData {
    id: string;
    propertyTitle: string;
    listingImages: string[];
    typeOfPlace: string;
    suburb: string;
}

interface listingOwnerData {
    listingOwnerData: object;
}

interface PriceItem {
    label: string;
    amountFormatted: string;
}

interface guestPriceBreakdown {
    priceItems: PriceItem[];
    subTotalItems: PriceItem[];
}

interface Props {
    bookingRequest: ExtendedBookingRequest | null;
    bookingGuestData?: BookingGuestData | null;
    listingData: ListingData | null;
    listingOwnerData: listingOwnerData | null;
    loadingPage: boolean;
    guestPriceBreakdown: guestPriceBreakdown | null;
}

export default function ConversationBookingDetails({ bookingRequest, listingOwnerData, listingData, guestPriceBreakdown, loadingPage }: Props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const [changesRequested, setChangesRequested] = useState(false);
    const [refundRequested, setRefundRequested] = useState(false);
    const bookingDetailRef = useRef<HTMLDivElement>(null);

    const getPlaceType = (placeType: string) => {
        switch (placeType) {
            case "entire-place":
                return "Entire home";
            case "private-room":
                return "Private room";
            case "shared-room":
                return "Shared room";
            default:
                break;
        }
    };
    const getMonth = (month: number) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
    };
    const getArrivalFullDate = () => {
        if (bookingRequest!.arrivalDate === null) {
            return "-";
        }
        let arrivalDate = new Date(bookingRequest!.arrivalDate.replace("Z", ""));

        return `${arrivalDate.getDate()} ${getMonth(arrivalDate.getMonth())} ${arrivalDate.getFullYear()}`;
    };
    const getDepartureFullDate = () => {
        if (bookingRequest!.departureDate === null) {
            return "-";
        }
        let departureDate = new Date(bookingRequest!.departureDate.replace("Z", ""));
        return `${departureDate.getDate()} ${getMonth(departureDate.getMonth())} ${departureDate.getFullYear()}`;
    };
    const getTime = (time: number) => {
        if (time < 100 || time > 2400) {
            return null;
        }
        const ampm = time > 1100 && time < 2400 ? "pm" : "am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };
    const getBookingRequestState = () => {
        if (bookingRequest) {
            if (bookingRequest.declined) {
                return "Declined";
            }
            if (bookingRequest.cancelled) {
                return "Cancelled";
            }
            if (!bookingRequest.completed) {
                return "Enquiry";
            }
            if (bookingRequest.confirmed) {
                return "Confirmed";
            }
            if (bookingRequest.expired) {
                return "Expired";
            } else {
                return "Requested";
            }
        }
    };
    const getArrivalDate = () => {
        let arrivalDate = new Date(bookingRequest!.arrivalDate.replace("Z", ""));

        return `${arrivalDate.getDate()} ${getMonth(arrivalDate.getMonth())}`;
    };
    const getDepartureDate = () => {
        let departureDate = new Date(bookingRequest!.departureDate.replace("Z", ""));

        return `${departureDate.getDate()} ${getMonth(departureDate.getMonth())}`;
    };
    const renderChangeBtn = () => {
        if (changesRequested || refundRequested) {
            return <BookingRequestDetailLinkDisabled>Change</BookingRequestDetailLinkDisabled>;
        }
        if (bookingRequest) {
            if (!bookingRequest.completed && !bookingRequest.cancelled) {
                return <BookingRequestDetailLink to={`/complete-booking/${bookingRequest.id}`}>Change</BookingRequestDetailLink>;
            }
            if (bookingRequest.confirmed && !bookingRequest.cancelled) {
                return <BookingRequestDetailLink to={`/change-your-booking/${bookingRequest.id}`}>Change</BookingRequestDetailLink>;
            }
        }
        return <BookingRequestDetailLinkDisabled>Change</BookingRequestDetailLinkDisabled>;
    };
    const getCancellationPolicy = () => {
        if (bookingRequest) {
            let arrivalDate = new Date(bookingRequest.arrivalDate);
            let flexibleDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 1);
            let moderateDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 14);
            let strictDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 28);

            if (bookingRequest.cancellationPolicy === "flexible") {
                return (
                    <div>
                        <strong>Free cancellation before {`${new Date(flexibleDate).getUTCDate()} ${getMonth(new Date(flexibleDate).getMonth())}`}.</strong> After that, you will receive a full refund
                        of unspent nights minus service fee and cleaning fee if applicable.
                    </div>
                );
            } else if (bookingRequest.cancellationPolicy === "moderate") {
                return (
                    <div>
                        <strong>Free cancellation before {`${new Date(moderateDate).getUTCDate()} ${getMonth(new Date(moderateDate).getMonth())}`}.</strong> After that, you will receive a full refund
                        of unspent nights minus service fee and cleaning fee if applicable.
                    </div>
                );
            } else if (bookingRequest.cancellationPolicy === "strict") {
                return (
                    <div>
                        <strong>Free cancellation before {`${new Date(strictDate).getUTCDate()} ${getMonth(new Date(strictDate).getMonth())}`}.</strong> After that, if your guest cancel less than 2
                        weeks to arrival, they will be charged for the first week.
                    </div>
                );
            }
        }
    };
    const checkChangesRequested = useCallback(async () => {
        let changesRequested = false;

        if (bookingRequest) {
            if (bookingRequest.ChangeBookingRequestModel.items.length > 0) {
                bookingRequest.ChangeBookingRequestModel.items.map((item, index) => {
                    if (!item.completed) {
                        changesRequested = true;
                    }
                    return null;
                });
            }
        }

        if (changesRequested) {
            setChangesRequested(true);
        }
    }, [bookingRequest]);

    const checkRefundRequested = useCallback(async () => {
        let refundRequested = false;

        if (bookingRequest) {
            if (bookingRequest.RefundRequestModel.items.length > 0) {
                bookingRequest.RefundRequestModel.items.map((item, index) => {
                    if (!item.completed) {
                        refundRequested = true;
                    }
                    return null;
                });
            }
        }

        if (refundRequested) {
            setRefundRequested(true);
        }
    }, [bookingRequest]);

    useEffect(() => {
        bookingDetailRef.current?.scrollTo({ top: 0 });
        checkChangesRequested();
        checkRefundRequested();
    }, [checkChangesRequested, checkRefundRequested, id]);

    if (loadingPage) return <ConversationBookingRequestDesktopWrapperLoading />;
    if (!bookingRequest || !listingOwnerData || !listingData || !guestPriceBreakdown) return <ConversationBookingRequestDesktopWrapper />;
    return (
        <ConversationBookingRequestDesktopWrapper ref={bookingDetailRef}>
            <BookingRequestStateWrapper>
                <ConversationBookingRequestDesktopHeaderSubtitle>{getBookingRequestState()}</ConversationBookingRequestDesktopHeaderSubtitle>
            </BookingRequestStateWrapper>
            <BookingRequestDetailsWrapperButton type="button" onClick={() => navigate(`/listing/${bookingRequest.listingmodelID}`)}>
                <BookingRequestImage src={constructOptimisedImageUrl(JSON.parse(listingData.listingImages[0]).key, 800)} alt="" />
            </BookingRequestDetailsWrapperButton>
            <BookingRequestTitle>{listingData.propertyTitle}</BookingRequestTitle>
            <BookingRequestSubtitle>
                {getPlaceType(listingData.typeOfPlace)} in {listingData.suburb}
            </BookingRequestSubtitle>
            <BookingRequestCompleteOrDetailsButtonWrapper>
                {bookingRequest.completed ? (
                    <BookingRequestDetailsButton to={`/your-booking/${bookingRequest.id}`}>Details</BookingRequestDetailsButton>
                ) : (
                    <BookingRequestDetailsButtonComplete to={`/complete-booking/${bookingRequest.id}`}>Complete booking</BookingRequestDetailsButtonComplete>
                )}
            </BookingRequestCompleteOrDetailsButtonWrapper>

            <BookingRequestDatesWrapper>
                <div style={{ gridColumn: "1/2", gridRow: "1/2", display: "flex", flexDirection: "column" }}>
                    <BookingRequestDatesTitle>Arrive</BookingRequestDatesTitle>
                    <BookingRequestDatesSubtitle>{getArrivalFullDate()}</BookingRequestDatesSubtitle>
                    <BookingRequestDatesSubtitleTime>{bookingRequest.checkInTime > 0 ? getTime(bookingRequest.checkInTime) : "3:00 pm"}</BookingRequestDatesSubtitleTime>
                </div>
                <BookingRequestDatesDivider />
                <div style={{ gridColumn: "2/3", display: "flex", flexDirection: "column", paddingLeft: "32px" }}>
                    <BookingRequestDatesTitle>Depart</BookingRequestDatesTitle>
                    <BookingRequestDatesSubtitle>{getDepartureFullDate()}</BookingRequestDatesSubtitle>
                    <BookingRequestDatesSubtitleTime>{bookingRequest.checkOutTime > 0 ? getTime(bookingRequest.checkOutTime) : "11:00 am"}</BookingRequestDatesSubtitleTime>
                </div>
            </BookingRequestDatesWrapper>

            {getBookingRequestState() !== "Enquiry" && (
                <BookingRequestDetailWrapper>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <BookingRequestDatesTitle>Dates</BookingRequestDatesTitle>
                        <BookingRequestDatesSubtitle>
                            {getArrivalDate()} - {getDepartureDate()}
                        </BookingRequestDatesSubtitle>
                    </div>
                    {renderChangeBtn()}
                </BookingRequestDetailWrapper>
            )}
            {getBookingRequestState() !== "Enquiry" && (
                <BookingRequestDetailWrapper>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <BookingRequestDatesTitle>Guests</BookingRequestDatesTitle>
                        <BookingRequestDatesSubtitle>{bookingRequest.guests}</BookingRequestDatesSubtitle>
                    </div>
                    {renderChangeBtn()}
                </BookingRequestDetailWrapper>
            )}
            {getBookingRequestState() !== "Enquiry" && bookingRequest.completed && (
                <BookingRequestDetailWrapper style={{ border: "none" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <BookingRequestDatesTitle>Booking ref.</BookingRequestDatesTitle>
                        <BookingRequestDatesSubtitle>{bookingRequest.confirmationCode}</BookingRequestDatesSubtitle>
                    </div>
                    <BookingRequestDetailButton
                        type="button"
                        onClick={() => {
                            setCopied(true);
                            navigator.clipboard.writeText(bookingRequest ? bookingRequest.confirmationCode : "");
                        }}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </BookingRequestDetailButton>
                </BookingRequestDetailWrapper>
            )}
            {getBookingRequestState() !== "Enquiry" && (
                <>
                    <InboxSectionDivider />
                    <BookingRequestDetailWrapper style={{ border: "none" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <BookingRequestDatesTitle style={{ fontSize: "22px", lineHeight: "26px", marginTop: "8px", marginBottom: "24px" }}>Price details</BookingRequestDatesTitle>

                            {guestPriceBreakdown.priceItems
                                .filter((item) => item.label !== "Deposit")
                                .map((priceItem) => {
                                    return (
                                        <PriceDetailsSubtotalPriceWrapper key={priceItem.label}>
                                            <PriceDetailsSubtotalPrice>{priceItem.label}</PriceDetailsSubtotalPrice>
                                            <PriceDetailsSubtotalPrice>{priceItem.amountFormatted}</PriceDetailsSubtotalPrice>
                                        </PriceDetailsSubtotalPriceWrapper>
                                    );
                                })}
                            {guestPriceBreakdown.subTotalItems.map((priceItem, index) => {
                                return (
                                    <PriceDetailsSubtotalPriceWrapper key={priceItem.label}>
                                        <PriceDetailsSubtotalPrice style={{ fontWeight: index === 0 ? "600" : "400" }}>{priceItem.label}</PriceDetailsSubtotalPrice>
                                        <PriceDetailsSubtotalPrice style={{ fontWeight: index === 0 ? "600" : "400" }}>{priceItem.amountFormatted}</PriceDetailsSubtotalPrice>
                                    </PriceDetailsSubtotalPriceWrapper>
                                );
                            })}
                        </div>
                    </BookingRequestDetailWrapper>
                    <InboxSectionDivider />
                </>
            )}
             <BookingRequestDatesTitle style={{ fontSize: "22px", lineHeight: "26px", marginTop: "32px", marginBottom: "24px" }}>Guest policy</BookingRequestDatesTitle>
            <BookingRequestCommunicationNotice>
                {getCancellationPolicy()}
                {bookingRequest.deposit > 0 ? (
                    <div style={{ marginTop: "24px" }}>
                        <strong>Your host may charge a ${Number(bookingRequest.deposit / 100)} AUD deposit. </strong> This is usually processed at check-in, your host will provide more information.
                    </div>
                ) : (
                    <div style={{ marginTop: "24px" }}>
                        <strong>No deposit. </strong> You don't have to pay a deposit. However, you may still be liable for damages. Your host will provide more information.
                    </div>
                )}
            </BookingRequestCommunicationNotice>

            <BookingRequestCommunicationNotice>
                <strong>Always communicate through Anystay.</strong> To protect your payment, never transfer money or communicate outside of the Anystay website or app.
            </BookingRequestCommunicationNotice>

            <BookingRequestReportHost onClick={() => (window as any).Intercom("showNewMessage", "")}>Report host</BookingRequestReportHost>
        </ConversationBookingRequestDesktopWrapper>
    );
}
