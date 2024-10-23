import { useState, Fragment, useEffect, useCallback } from "react";
import {
    ManagePaymentsWrapper,
    ManagePaymentsTitleWrapper,
    ManagePaymentsTitleIcon,
    ManagePaymentsTitle,
    ManagePaymentsHeaderWrapper,
    ManagePaymentsHeaderImage,
    ManagePaymentsHeaderTextWrapper,
    ManagePaymentsHeaderTitle,
    ManagePaymentsHeaderStatus,
    ManagePaymentsHeaderTypeOfPlace,
    ManagePaymentsContentWrapper,
    ManagePaymentHeaderLinkIcon,
    ManagePaymentsActionButtonWrapper,
    ManagePaymentsActionButton,
    ManagePaymentsMapWrapper,
    PaymentDetailsHeaderLink,
    ManagePaymentsTitleBackButton,
} from "./managePaymentsStyling";
// import Map from './map/map'
import constructOptimisedImageUrl from "../../utils/imageOptimisation/constructOptimisedImageUrl";
import ManagePaymentsPayment from "./ManagePaymentsPayment/ManagePaymentsPayment";
import ManagePaymentsPayPopup from "./popups/ManagePaymentsPayPopup";
import ManagePaymentsRefundPopup from "./popups/ManagePaymentsRefundPopup";
import ManagePaymentsRefundDetailsPopup from "./popups/ManagePaymentsRefundDetailsPopup";
import ManagePaymentsRefundAmountPopup from "./popups/ManagePaymentsRefundAmountPopup";
import ManagePaymentsRefundSentPopup from "./popups/ManagePaymentsRefundSentPopup";
import RefundUnavailablePopup from "./popups/RefundUnavailablePopup";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import Map from "../../components/map/map";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ListingModel } from "../../interfaces/models/listingModel";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import BackBtn from "../../components/btn/backBtn/backBtn";

interface ExtendedBookingRequest extends BookingRequestModel {
    refundedAmount: number;
    paymentAmount: number;
}

export default function ManagePayments() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const [payPopup, setPayPopup] = useState(false);
    const [refundAmountPopup, setRefundAmountPopup] = useState(false);
    const [refundPopup, setRefundPopup] = useState(false);
    const [refundDetailsPopup, setRefundDetailsPopup] = useState(false);
    const [refundSent, setRefundSent] = useState(false);
    const [refundUnavailablePopup, setRefundUnavailablePopup] = useState(false);

    const [refundMessage, setRefundMessage] = useState("");
    const [refundReason, setRefundReason] = useState("");
    const [refundAmount, setRefundAmount] = useState(0);
    const [refundRequested, setRefundRequested] = useState(false);
    const [refundAvailable, setRefundAvailable] = useState(false);

    const [listing, setListing] = useState<ListingModel | null>(null);
    const [bookingRequest, setBookingRequest] = useState<ExtendedBookingRequest | null>(null);
    const [paymentModels, setPaymentModels] = useState([]);

    const [pageLoading, setPageLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const init = useCallback(async () => {
        let bookingRequest = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
            headers: {
                Authorization: accessToken,
                bookingId: id,
            },
        });
        bookingRequest = bookingRequest.body.bookingRequest;
        let paymentModelsData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/payments/${id}`, {
            headers: {
                Authorization: accessToken,
                bookingId: id,
            },
        });

        let refundAvailable = true;
        if (bookingRequest.changeRequested || bookingRequest.refundRequested || bookingRequest.confirmed !== true) {
            refundAvailable = false;
        }
        setRefundRequested(bookingRequest.refundRequested);
        setListing(bookingRequest.ListingModel);
        setBookingRequest(bookingRequest);
        setRefundAvailable(refundAvailable);
        setPaymentModels(paymentModelsData.body.payments);
        setPageLoading(false);
    }, [id, accessToken]);

    useEffect(() => {
        init();
    }, [init]);

    const getRoomType = () => {
        let typeOfPlace = listing!.typeOfPlace;
        let roomType = "House";
        switch (typeOfPlace) {
            case "entire-place":
                roomType = "Entire place";
                break;
            case "private-room":
                roomType = "Private room";
                break;
            case "shared-room":
                roomType = "Shared room";
                break;
            default:
                break;
        }
        return roomType;
    };

    const updateRefundMessage = (message: string) => {
        setRefundMessage(message);
    };

    const updateRefundAmount = (amount: number) => {
        setRefundAmount(amount);
    };
    const updateRefundReason = (reason: string) => {
        setRefundReason(reason);
    };

    const createRefundRequest = async () => {
        if (refundAvailable) {
            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/guest/refund", {
                headers: {
                    Authorization: accessToken,
                    bookingId: id,
                },
                body: {
                    bookingRequestID: id,
                    refundReason: refundReason,
                    refundMessage: refundMessage,
                    refundAmount: refundAmount,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        setRefundRequested(true);
                        setRefundAvailable(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (pageLoading || !bookingRequest || !listing) {
        return <LoadingFullPageModal reverse={true} guestMode={true} />;
    }
    return (
        <Fragment>
            <HelmetTags title={`${bookingRequest.confirmationCode} | Anystay`} />
            <ManagePaymentsWrapper>
                <ManagePaymentsTitleWrapper>
                    <div style={{ display: "flex", alignItems: "center", maxWidth: "fit-content" }}>
                        <BackBtn onClick={handleBack} type="Arrow" mobileTop={24} mobileLeft={24} />
                        <ManagePaymentsTitle>
                            {bookingRequest.refundedAmount
                                ? `$${(bookingRequest.paymentAmount / 100).toFixed(2)} (-$${(bookingRequest.refundedAmount / 100).toFixed(2)}) AUD`
                                : `$${(bookingRequest.paymentAmount / 100).toFixed(2)} AUD`}
                        </ManagePaymentsTitle>
                    </div>
                </ManagePaymentsTitleWrapper>
                <PaymentDetailsHeaderLink to={`/your-booking/${id}`}>
                    <ManagePaymentsHeaderWrapper>
                        <ManagePaymentsHeaderImage src={constructOptimisedImageUrl(JSON.parse(listing.listingImages[0] as string).key, 500)} alt={"Manage payments listing featured image"} />
                        <ManagePaymentsHeaderTextWrapper>
                            <ManagePaymentsHeaderTypeOfPlace>{getRoomType()}</ManagePaymentsHeaderTypeOfPlace>
                            <ManagePaymentsHeaderTitle>{listing.propertyTitle}</ManagePaymentsHeaderTitle>

                            <ManagePaymentsHeaderStatus confirmed={bookingRequest.confirmed} declined={bookingRequest.declined}>
                                {bookingRequest && bookingRequest.cancelled
                                    ? "Cancelled"
                                    : refundRequested
                                      ? "Refund requested"
                                      : bookingRequest.confirmed
                                        ? "Confirmed"
                                        : bookingRequest.declined
                                          ? "Declined"
                                          : "Requested"}
                            </ManagePaymentsHeaderStatus>

                            <ManagePaymentHeaderLinkIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Listing header button" />
                        </ManagePaymentsHeaderTextWrapper>
                    </ManagePaymentsHeaderWrapper>
                </PaymentDetailsHeaderLink>
                <ManagePaymentsActionButtonWrapper>
                    {/* <ManagePaymentsActionButton type="button" onClick={() => setState({payPopup: !state.payPopup})}>Pay</ManagePaymentsActionButton> */}
                    <ManagePaymentsActionButton
                        type="button"
                        selected={refundAvailable && bookingRequest.paymentAmount > 0}
                        onClick={() => {
                            if (refundAvailable && bookingRequest.paymentAmount > 0) {
                                setRefundPopup(true);
                            }
                        }}
                    >
                        Request refund
                    </ManagePaymentsActionButton>
                </ManagePaymentsActionButtonWrapper>
                <ManagePaymentsContentWrapper>
                    {paymentModels.length > 0 && (
                        <div>
                            {paymentModels.map((payment, index) => {
                                return <ManagePaymentsPayment payment={payment} key={index} />;
                            })}
                        </div>
                    )}
                </ManagePaymentsContentWrapper>
                <ManagePaymentsMapWrapper>
                    <Map
                        containerStyle={{
                            width: "100%",
                            height: "100vh",
                            borderRadius: "0px",
                            position: "absolute",
                            bottom: -25,
                        }}
                        lat={JSON.parse(listing.location).lat}
                        lng={JSON.parse(listing.location).lon}
                        zoom={16}
                        minZoom={13}
                    />
                </ManagePaymentsMapWrapper>
            </ManagePaymentsWrapper>
            {payPopup && <ManagePaymentsPayPopup togglePopup={() => setPayPopup(false)} />}

            {refundPopup && <ManagePaymentsRefundPopup updateRefundReason={updateRefundReason} toggleNext={() => setRefundAmountPopup(true)} togglePopup={() => setRefundPopup(false)} />}

            {refundAmountPopup && (
                <ManagePaymentsRefundAmountPopup
                    paymentAmount={bookingRequest.paymentAmount}
                    updateRefundAmount={updateRefundAmount}
                    toggleNext={() => setRefundDetailsPopup(true)}
                    togglePopup={() => setRefundAmountPopup(false)}
                />
            )}

            {refundDetailsPopup && (
                <ManagePaymentsRefundDetailsPopup
                    createRefundRequest={createRefundRequest}
                    refundMessage={refundMessage}
                    toggleNext={() => setRefundSent(true)}
                    updateRefundMessage={updateRefundMessage}
                    togglePopup={() => setRefundDetailsPopup(false)}
                />
            )}

            {refundSent && <ManagePaymentsRefundSentPopup togglePopup={() => setRefundSent(false)} />}

            {refundUnavailablePopup && <RefundUnavailablePopup togglePopup={() => setRefundUnavailablePopup(false)} />}
        </Fragment>
    );
}
