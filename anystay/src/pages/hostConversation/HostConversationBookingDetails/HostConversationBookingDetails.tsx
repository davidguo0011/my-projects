import {
    ConversationBookingRequestDesktopWrapper,
    // BookingRequestCallButton,
    BookingRequestDetailsButton,
    BookingRequestDetailsButtonComplete,
    BookingRequestDatesWrapper,
    BookingRequestDatesTitle,
    BookingRequestDatesSubtitle,
    BookingRequestDatesDivider,
    BookingRequestDetailWrapper,
    PriceDetailsSubtotalPriceWrapper,
    PriceDetailsSubtotalPrice,
    BookingRequestCommunicationNotice,
    BookingRequestReportHost,
    HostConversationGuestProfileWrapper,
    HostConversationGuestProfilePictureWrapper,
    HostConversationGuestProfilePicture,
    HostConversationGuestProfileTextWrapper,
    HostConversationGuestProfileTextTitle,
    HostConversationGuestProfileName,
    ConversationBookingRequestHeaderPrice,
    HostConversationGuestProfileTextSubtitle,
    HostConversationBookingRequestGuests,
    HostConversationBookingRequestGuestsText,
    HostBookingRefButton,
    HostConversationBookingRequestGuestLink,
    PotentialPayoutDivider,
    BookingRequestCommunicationNoticeTitle,
    InboxSectionDivider,
    BookingRequestDatesSubtitleTime,
} from "../../conversation/conversationStyling";
import { useRef, useState, RefObject } from "react";
import ConversationBookingRequestDesktopWrapperLoading from "../loading/ConversationBookingRequestDesktopWrapperLoading/ConversationBookingRequestDesktopWrapperLoading";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import useClickOutside from "../../../hook/useClickOutside";
import CopiedToClipboardPortal from "../../../components/popupNotification/copiedToClipboard/CopiedToClipboard";
import { AnimatePresence } from "framer-motion";
interface BookingRequest {
    id: string;
    declined: boolean;
    cancelled: boolean;
    completed: boolean;
    confirmed: boolean;
    bookingAmountIncludingServiceFee: number;
    refundedAmount: number;
    arrivalDate: string;
    departureDate: string;
    cancellationPolicy: string;
    checkInTime: number;
    checkOutTime: number;
    guests: number;
    infants: number;
    pets: number;
    createdAt: string;
    confirmationCode: string;
    paymentAmount: number;
    deposit: number;
}

interface BookingGuestData {
    firstName: string;
    phone: string;
}

interface ListingData {
    propertyTitle: string;
}

interface PriceItem {
    label: string;
    amountFormatted: string;
}

interface HostPriceBreakdown {
    priceItems: PriceItem[];
    subTotalItems: PriceItem[];
}

interface HostConversationBookingRequest extends BookingRequest {
    bookingAmount: number;
}

interface Props {
    bookingRequest: HostConversationBookingRequest | null;
    bookingGuestData: BookingGuestData | null;
    guestProfilePictureURL: string;
    listingData: ListingData | null;
    loadingPage: boolean;
    hostPriceBreakdown: HostPriceBreakdown | null;
}

export default function HostConversationBookingDetails({ bookingRequest, bookingGuestData, guestProfilePictureURL, listingData, loadingPage, hostPriceBreakdown }: Props) {
    const bookingDetailRef = useRef(null);
    const [copied, setCopied] = useState(false);
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
            } else {
                return "Requested";
            }
        }
    };
    const getMonth = (month: number) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month] ? months[month] : "";
    };
    // const renderHeaderPrice = () => {
    //     const amount = ((bookingRequest.bookingAmountIncludingServiceFee - bookingRequest.refundedAmount) / 100).toFixed(2);
    //     const refundedAmount = (bookingRequest.refundedAmount / 100).toFixed(2);
    //     return `$${amount} ${bookingRequest.refundedAmount > 0 ? `(-$${refundedAmount})` : ""} AUD`;
    // };
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
    const getCancellationPolicy = () => {
        let arrivalDate = new Date(bookingRequest!.arrivalDate);
        let flexibleDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 1);
        let moderateDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 14);
        let strictDate = arrivalDate.setUTCDate(arrivalDate.getUTCDate() - 28);

        if (bookingRequest!.cancellationPolicy === "flexible") {
            return (
                <span>
                    <strong>Free cancellation before {`${new Date(flexibleDate).getUTCDate()} ${getMonth(new Date(flexibleDate).getMonth())}`}.</strong> After that, if your guest cancels they will
                    receive a full refund of unspent nights minus service fee and cleaning fee if applicable.
                </span>
            );
        } else if (bookingRequest!.cancellationPolicy === "moderate") {
            return (
                <span>
                    <strong>Free cancellation before {`${new Date(moderateDate).getUTCDate()} ${getMonth(new Date(moderateDate).getMonth())}`}.</strong> After that, if your guest cancels they will
                    receive a full refund of half the unspent nights minus service fee and cleaning fee if applicable.
                </span>
            );
        } else if (bookingRequest!.cancellationPolicy === "strict") {
            return (
                <span>
                    <strong>Free cancellation before {`${new Date(strictDate).getUTCDate()} ${getMonth(new Date(strictDate).getMonth())}`}.</strong> After that, if your guest cancel less than 2 weeks
                    to arrival, they will be charged for the first week.
                </span>
            );
        }
    };
    const getTime = (time: number) => {
        if (time < 100 || time > 2400) {
            return null;
        }
        const ampm = time > 1100 && time < 2400 ? "pm" : "am";
        const hour = time === 1200 || time === 2400 ? 12 : (time / 100) % 12;
        return `${hour}:00${ampm}`;
    };
    const getNights = () => {
        const departureDatewithNoTime = new Date(new Date(bookingRequest!.departureDate).setUTCHours(0, 0, 0, 0)).getTime();
        const arrivalDatewithNoTime = new Date(new Date(bookingRequest!.arrivalDate).setUTCHours(0, 0, 0, 0)).getTime();
        let nights = (departureDatewithNoTime - arrivalDatewithNoTime) / (1000 * 3600 * 24);
        return Math.ceil(nights);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            (window as any).Intercom("showNewMessage", "");
            setIsOpen(true);
        } else {
            (window as any).Intercom("hide");
            setIsOpen(false);
        }
    };
    const wrapperRef = useClickOutside<HTMLAnchorElement>(isOpen, handleClick);
    if (loadingPage) return <ConversationBookingRequestDesktopWrapperLoading />;
    if (!bookingRequest || !bookingGuestData || !listingData) return <ConversationBookingRequestDesktopWrapper />;
    return (
        <ConversationBookingRequestDesktopWrapper ref={bookingDetailRef}>
            {getBookingRequestState() !== "Enquiry" &&
                (bookingRequest.cancelled || bookingRequest.declined ? null : bookingRequest.confirmed ? (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
                        {/* <BookingRequestCallButton style={{ background: ColorTheme.Blue.color }} href={`tel:${bookingGuestData.phone}`}>
                            Call
                        </BookingRequestCallButton> */}
                        <BookingRequestDetailsButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                            Details
                        </BookingRequestDetailsButton>
                    </div>
                ) : (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
                        <BookingRequestDetailsButtonComplete style={{ background: ColorTheme.Yellow.color }} to={`/booking-request/${bookingRequest.id}`}>
                            Respond
                        </BookingRequestDetailsButtonComplete>
                    </div>
                ))}
            <HostConversationGuestProfileWrapper>
                <HostConversationGuestProfilePictureWrapper>
                    <HostConversationGuestProfilePicture src={guestProfilePictureURL} alt="" />
                </HostConversationGuestProfilePictureWrapper>
                <HostConversationGuestProfileTextWrapper>
                    <HostConversationGuestProfileTextTitle>{getBookingRequestState()}</HostConversationGuestProfileTextTitle>

                    <HostConversationGuestProfileName>{bookingGuestData.firstName}</HostConversationGuestProfileName>

                    <ConversationBookingRequestHeaderPrice>{`$${(bookingRequest.bookingAmount / 100).toFixed(2)} ${
                        bookingRequest.refundedAmount > 0 ? `(-$${(bookingRequest.refundedAmount / 100).toFixed(2)})` : ""
                    } AUD`}</ConversationBookingRequestHeaderPrice>
                    {listingData && <HostConversationGuestProfileTextSubtitle>{listingData.propertyTitle}</HostConversationGuestProfileTextSubtitle>}
                    {bookingRequest && (
                        <HostConversationGuestProfileTextSubtitle style={{ textDecoration: "none" }}>
                            {getNights()} nights • {bookingRequest.guests} guest{bookingRequest.guests > 1 && "s"}
                        </HostConversationGuestProfileTextSubtitle>
                    )}
                </HostConversationGuestProfileTextWrapper>
            </HostConversationGuestProfileWrapper>

            <BookingRequestDatesWrapper>
                <div style={{ gridColumn: "1/2", gridRow: "1/2", display: "flex", flexDirection: "column" }}>
                    <BookingRequestDatesTitle>Arrive</BookingRequestDatesTitle>
                    <BookingRequestDatesSubtitle>{getArrivalFullDate()}</BookingRequestDatesSubtitle>
                    <BookingRequestDatesSubtitleTime>{bookingRequest.checkInTime > 0 ? getTime(bookingRequest.checkInTime) : "3:00PM"}</BookingRequestDatesSubtitleTime>
                </div>
                <BookingRequestDatesDivider />
                <div style={{ gridColumn: "2/3", display: "flex", flexDirection: "column", paddingLeft: "32px" }}>
                    <BookingRequestDatesTitle>Depart</BookingRequestDatesTitle>
                    <BookingRequestDatesSubtitle>{getDepartureFullDate()}</BookingRequestDatesSubtitle>
                    <BookingRequestDatesSubtitleTime>{bookingRequest.checkOutTime ? getTime(bookingRequest.checkOutTime) : "10:00AM"}</BookingRequestDatesSubtitleTime>
                </div>
            </BookingRequestDatesWrapper>

            <HostConversationBookingRequestGuests>
                <HostConversationBookingRequestGuestsText>Guests</HostConversationBookingRequestGuestsText>
                <HostConversationBookingRequestGuestsText>
                    {bookingRequest.guests} guest{bookingRequest.guests > 1 && "s"}
                    {bookingRequest.infants > 1 ? `, ${bookingRequest.infants} infants` : bookingRequest.infants > 0 && `, ${bookingRequest.infants} infant`}
                    {bookingRequest.pets > 1 ? `, ${bookingRequest.pets} pes` : bookingRequest.pets > 0 && `, ${bookingRequest.pets} pet`}
                </HostConversationBookingRequestGuestsText>
            </HostConversationBookingRequestGuests>

            {getBookingRequestState() !== "Enquiry" && (
                <HostConversationBookingRequestGuests>
                    <HostConversationBookingRequestGuestsText>Booking date</HostConversationBookingRequestGuestsText>
                    <HostConversationBookingRequestGuestsText>
                        {new Date(bookingRequest.createdAt.replace("Z", "")).toLocaleDateString("au", { day: "numeric", month: "short", year: "numeric" })}
                    </HostConversationBookingRequestGuestsText>
                </HostConversationBookingRequestGuests>
            )}
            {getBookingRequestState() !== "Enquiry" && (
                <HostConversationBookingRequestGuests>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <BookingRequestDatesTitle>Booking ref.</BookingRequestDatesTitle>
                        <BookingRequestDatesSubtitle>{bookingRequest.confirmationCode}</BookingRequestDatesSubtitle>
                    </div>
                    <HostBookingRefButton
                        type="button"
                        onClick={() => {
                            setCopied(true);
                            navigator.clipboard.writeText(bookingRequest.confirmationCode);
                            setTimeout(() => {
                                setCopied(false);
                            }, 2000);
                        }}
                    >
                        {copied ? "Copied!" : "Copy"}
                        <AnimatePresence>{copied && <CopiedToClipboardPortal />}</AnimatePresence>
                    </HostBookingRefButton>
                </HostConversationBookingRequestGuests>
            )}
            <HostConversationBookingRequestGuests style={{ border: "none" }}>
                <HostConversationBookingRequestGuestLink to={"/your-calendar"}>See calendar</HostConversationBookingRequestGuestLink>
            </HostConversationBookingRequestGuests>
            {getBookingRequestState() !== "Enquiry" && (
                <>
                    <InboxSectionDivider />
                    <BookingRequestDetailWrapper style={{ paddingTop: "0" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <BookingRequestCommunicationNoticeTitle style={{ marginBottom: "24px" }}>Your payout</BookingRequestCommunicationNoticeTitle>
                            {hostPriceBreakdown!.priceItems.map((item, index) => {
                                return (
                                    <PriceDetailsSubtotalPriceWrapper key={item.label}>
                                        <PriceDetailsSubtotalPrice>{item.label}</PriceDetailsSubtotalPrice>
                                        <PriceDetailsSubtotalPrice>{item.amountFormatted}</PriceDetailsSubtotalPrice>
                                    </PriceDetailsSubtotalPriceWrapper>
                                );
                            })}
                            {hostPriceBreakdown!.subTotalItems.map((item, index) => {
                                return (
                                    <PriceDetailsSubtotalPriceWrapper key={item.label}>
                                        <PriceDetailsSubtotalPrice style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.label}</PriceDetailsSubtotalPrice>
                                        <PriceDetailsSubtotalPrice style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.amountFormatted}</PriceDetailsSubtotalPrice>
                                    </PriceDetailsSubtotalPriceWrapper>
                                );
                            })}
                        </div>
                    </BookingRequestDetailWrapper>
                </>
            )}
            {bookingRequest.confirmed && (
                <HostConversationBookingRequestGuests style={{ border: "none" }}>
                    <HostConversationBookingRequestGuestLink to={`/payment-details/${bookingRequest.id}`}>Manage payout</HostConversationBookingRequestGuestLink>
                </HostConversationBookingRequestGuests>
            )}
            <InboxSectionDivider />
            <BookingRequestCommunicationNoticeTitle>Guest policy</BookingRequestCommunicationNoticeTitle>
            <BookingRequestCommunicationNotice>
                {getCancellationPolicy()}
                <br />
                <br />
                {bookingRequest.deposit > 0 ? (
                    <span>
                        <strong>Your host may charge a ${Number(bookingRequest.deposit / 100)} AUD deposit. </strong> This is usually processed at check-in, your host will provide more information.
                    </span>
                ) : (
                    <span>
                        <strong>No deposit. </strong> You don't have to pay a deposit. However, you may still be liable for damages. Your host will provide more information.
                    </span>
                )}
            </BookingRequestCommunicationNotice>

            <BookingRequestCommunicationNotice>
                <strong>Always communicate through Anystay.</strong> To protect your payment, never transfer money or communicate outside of the Anystay website or app.
            </BookingRequestCommunicationNotice>
            <BookingRequestReportHost onClick={handleClick} style={{ color: ColorTheme.Black.color }} ref={wrapperRef}>
                Report guest
            </BookingRequestReportHost>
        </ConversationBookingRequestDesktopWrapper>
    );
}
