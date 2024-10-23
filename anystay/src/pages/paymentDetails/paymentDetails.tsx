import { useState, useCallback, useEffect } from "react";
import { callApi } from "../../utils/api/api";
import {
    PaymentDetailsWrapper,
    PaymentDetailsTitleWrapper,
    PaymentDetailsTitleIcon,
    PaymentDetailsTitle,
    PaymentDetailsHeaderWrapper,
    PaymentDetailsHeaderProfileImage,
    PaymentDetailsHeaderStatus,
    PaymentDetailsHeaderTitle,
    PaymentDetailsHeaderSubtitle,
    PaymentDetailsHeaderText,
    PaymentDetailsHeaderTextWrapper,
    PaymentDetailsButtonWrapper,
    PaymentDetailsButton,
    PaymentDetailsPaymentWrapper,
    PaymentDetailsPaymentTextWrapper,
    PaymentDetailsPaymentTitle,
    PaymentDetailsPaymentSubtitle,
    PaymentDetailsHeaderLink,
    PaymentDetailsTitleBackButton,
    PaymentDetailsPaymentDivider,
    PaymentDetailsPaymentPrice,
    PaymentDetailsSupportButton,
    PaymentDetailsReceiptButton,
    PaymentDetailsHeaderLinkIcon,
    PaymentDetailsRespondButton,
    TransfersWrapper,
    PaymentDetailsPageWrapper,
} from "./paymentDetailsStyling";
import PaymentDetailsPaymentRequestPopup from "./PaymentDetailsPaymentRequestPopup/PaymentDetailsPaymentRequestPopup";
import RefundGuestPopup from "./RefundGuestPopup/RefundGuestPopup";
import PaymentItem from "./PaymentItem/PaymentItem";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import { useParams, useNavigate } from "react-router-dom";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
import HelmetTags from "../../components/Helmet/HelmetTags";
import constructOptimisedProtectedImageUrl from "../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../interfaces/models/listingModel";
import { UserModel } from "../../interfaces/models/userModel";
import useClickOutside from "../../hook/useClickOutside";
import BackBtn from "../../components/btn/backBtn/backBtn";
interface ExtendedBookingRequestModel extends BookingRequestModel {
    paymentAmount: number;
    bookingAmount: number;
    refundedAmount: number;
}

export default function PaymentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const [listing, setListing] = useState<ListingModel | null>(null);
    const [bookingRequest, setBookingRequest] = useState<ExtendedBookingRequestModel | null>(null);
    const [profilePicture, setProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [transfers, setTransfers] = useState([]);
    const [guestUserModel, setGuestUserModel] = useState<UserModel | null>(null);

    const [paymentRequestPopup, setPaymentRequestPopup] = useState(false);
    const [paymentRefundPopup, setPaymentRefundPopup] = useState(false);
    const [refundRequested, setRefundRequested] = useState(false);
    const [changesRequested, setChangesRequested] = useState(false);
    const [refundAvailable, setRefundAvailable] = useState(false);

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

    const checkRefundAvailable = (bookingRequest: ExtendedBookingRequestModel) => {
        let currentDate = new Date();
        let departureDate = new Date(bookingRequest.departureDate);
        departureDate.setUTCDate(departureDate.getUTCDate() + 60);

        if (bookingRequest) {
            if (bookingRequest.cancelled) {
                setRefundAvailable(false);
            } else if (bookingRequest.paymentAmount <= 0) {
                setRefundAvailable(false);
            } else if (currentDate.getTime() >= departureDate.getTime()) {
                setRefundAvailable(false);
            } else {
                setRefundAvailable(true);
            }
        }
    };

    const init = useCallback(async () => {
        try {
            let bookingRequest = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
                headers: {
                    Authorization: accessToken,
                    bookingId: id,
                },
            });
            bookingRequest = bookingRequest.body.bookingRequest;

            let transferModelsData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/transfers/${id}`, {
                headers: {
                    Authorization: accessToken,
                    bookingId: id,
                },
            });

            if (bookingRequest.UserModel.profilePicture) {
                const profilePic = constructOptimisedProtectedImageUrl(bookingRequest.UserModel.profilePicture, bookingRequest.UserModel.identityID, 100);
                setProfilePicture(profilePic);
            }

            setGuestUserModel(bookingRequest.UserModel);
            setListing(bookingRequest.ListingModel);
            setBookingRequest(bookingRequest);
            setChangesRequested(bookingRequest.changeRequested);
            setRefundRequested(bookingRequest.refundRequested);
            setTransfers(transferModelsData.body.transfers);
            checkRefundAvailable(bookingRequest);
        } catch (err) {
            console.log(err);
        }
    }, [id, accessToken]);
    useEffect(() => {
        init();
    }, [init]);

    const setColor = () => {
        if (bookingRequest?.confirmed === null || changesRequested || refundRequested) {
            return ColorTheme.Yellow.color;
        } else {
            return ColorTheme.Black.color;
        }
    };

    const getNights = () => {
        if (!bookingRequest) return;
        let arrivalDate = new Date(bookingRequest.arrivalDate);
        let departureDate = new Date(bookingRequest.departureDate);
        let nights = (new Date(departureDate.setUTCHours(0)).getTime() - new Date(arrivalDate.setUTCHours(0)).getTime()) / (1000 * 3600 * 24);

        return nights;
    };

    const updateBookingRequest = (bookingRequest: ExtendedBookingRequestModel) => {
        setBookingRequest(bookingRequest);
    };

    function addOneDayAndFormatDate(dateString: string) {
        const date = new Date(dateString.replace("Z", ""));
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
    }

    const handleBack = () => {
        navigate(-1);
    };

    const handleBookingNav = () => {
        if (!bookingRequest) return;
        navigate(`/booking-request/${bookingRequest.id}`);
    };

    const handleReceiptNav = () => {
        if (!bookingRequest) return;
        navigate(`/booking-receipt/${bookingRequest.id}`);
    };
    if (!bookingRequest || !listing || !guestUserModel) {
        return <LoadingFullPageModal guestMode={true} reverse={false} />;
    }
    return (
        <PaymentDetailsPageWrapper>
            <HelmetTags title="Settings | Anystay" />
            {/* <PaymentDetailsPaymentRefundPopup selected={paymentRefundPopup} toggleSelected={() => setState({ paymentRefundPopup: !paymentRefundPopup })} /> */}
            {paymentRefundPopup && (
                <RefundGuestPopup bookingRequest={bookingRequest} togglePopup={() => setPaymentRefundPopup(false)} updateBookingRequest={updateBookingRequest} guestUserModel={guestUserModel} />
            )}
            {paymentRequestPopup && <PaymentDetailsPaymentRequestPopup toggleSelected={() => setPaymentRequestPopup(false)} />}

            <PaymentDetailsWrapper>
                <PaymentDetailsTitleWrapper>
                    <BackBtn onClick={handleBack} type="Arrow" mobileTop={24} mobileLeft={24} />
                    <PaymentDetailsTitle>
                        {bookingRequest && `$${(bookingRequest.bookingAmount / 100).toFixed(2)} ${bookingRequest.refundedAmount > 0 ? `(-$${(bookingRequest.refundedAmount / 100).toFixed(2)})` : ""}`}
                    </PaymentDetailsTitle>
                </PaymentDetailsTitleWrapper>
                <PaymentDetailsHeaderLink to={`/booking-request/${bookingRequest.id}`}>
                    <PaymentDetailsHeaderWrapper>
                        <PaymentDetailsHeaderProfileImage src={profilePicture} alt="profile image" />
                        <PaymentDetailsHeaderTextWrapper>
                            <PaymentDetailsHeaderStatus style={{ color: setColor() }}>
                                {bookingRequest.cancelled
                                    ? "Cancelled"
                                    : refundRequested
                                      ? "Refund requested"
                                      : changesRequested
                                        ? "Change requested"
                                        : bookingRequest.confirmed
                                          ? "Confirmed"
                                          : "Requested"}
                            </PaymentDetailsHeaderStatus>
                            <PaymentDetailsHeaderTitle>{guestUserModel ? `${guestUserModel.firstName}` : ""}</PaymentDetailsHeaderTitle>
                            <PaymentDetailsHeaderSubtitle>{listing ? listing.propertyTitle : null}</PaymentDetailsHeaderSubtitle>
                            <PaymentDetailsHeaderText>
                                {getNights()} nights · {bookingRequest.guests} guests
                            </PaymentDetailsHeaderText>
                        </PaymentDetailsHeaderTextWrapper>
                        <PaymentDetailsHeaderLinkIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="" />
                    </PaymentDetailsHeaderWrapper>
                </PaymentDetailsHeaderLink>
                <PaymentDetailsPaymentWrapper>
                    <PaymentDetailsPaymentTextWrapper style={{ gridColumn: "1/2", gridRow: "1/2" }}>
                        <PaymentDetailsPaymentTitle>Your payout</PaymentDetailsPaymentTitle>
                        <PaymentDetailsPaymentPrice>${Number(bookingRequest.bookingAmount / 100).toFixed(2)}</PaymentDetailsPaymentPrice>
                        <PaymentDetailsPaymentSubtitle>{addOneDayAndFormatDate(bookingRequest.arrivalDate)}</PaymentDetailsPaymentSubtitle>
                    </PaymentDetailsPaymentTextWrapper>
                    <PaymentDetailsPaymentDivider />
                    <PaymentDetailsPaymentTextWrapper style={{ gridColumn: "2/3", gridRow: "1/2" }} secondRow={true}>
                        <PaymentDetailsPaymentTitle>Guest paid</PaymentDetailsPaymentTitle>
                        <PaymentDetailsPaymentPrice>${Number(bookingRequest.paymentAmount / 100).toFixed(2)}</PaymentDetailsPaymentPrice>
                        <PaymentDetailsPaymentSubtitle>
                            {new Date(bookingRequest.createdAt.replace("Z", "")).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                        </PaymentDetailsPaymentSubtitle>
                    </PaymentDetailsPaymentTextWrapper>
                </PaymentDetailsPaymentWrapper>
                <PaymentDetailsButtonWrapper>
                    {bookingRequest.confirmed === null || changesRequested || refundRequested ? (
                        <PaymentDetailsRespondButton type="button" onClick={handleBookingNav}>
                            Respond
                        </PaymentDetailsRespondButton>
                    ) : (
                        <>
                            <PaymentDetailsButton
                                available={refundAvailable}
                                type="button"
                                onClick={() => {
                                    if (refundAvailable) {
                                        setPaymentRefundPopup(true);
                                    }
                                }}
                            >
                                Refund {guestUserModel ? guestUserModel.firstName : ""}
                            </PaymentDetailsButton>
                            <PaymentDetailsReceiptButton type="button" onClick={handleReceiptNav}>
                                Get receipt
                            </PaymentDetailsReceiptButton>
                        </>
                    )}
                </PaymentDetailsButtonWrapper>
                <TransfersWrapper>
                    {transfers.map((transfer, index) => {
                        return <PaymentItem key={index} transfer={transfer} imgKey={JSON.parse(listing.listingImages[0] as string).key} />;
                    })}
                </TransfersWrapper>
                <PaymentDetailsSupportButton onClick={handleClick} ref={wrapperRef}>
                    Need help with your payout?
                </PaymentDetailsSupportButton>
            </PaymentDetailsWrapper>
        </PaymentDetailsPageWrapper>
    );
}
