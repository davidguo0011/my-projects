import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ChangeBookingTitle,
    ChangeBookingListingHeaderWrapper,
    ChangeBookingListingHeaderImage,
    ChangeBookingListingHeaderTextWrapper,
    ChangeBookingListingHeaderTextTitle,
    ChangeBookingListingHeaderText,
    ChangeBookingBookingRequestStatus,
    ChangeBookingChangeDatesWrapper,
    ChangeBookingChangeDatesTitle,
    ChangeBookingChangeDatesDateEdit,
    ChangeBookingPriceDetailWrapper,
    ChangeBookingPriceDetail,
    ChangeBookingPriceDetailDivider,
    ChangeBookingTitleWrapper,
    ChangeBookingTitleIcon,
    ChangeBookingChangeDatesEditButtonWrapper,
    ChangeBookingChangeDatesEditButtonTitleWrapper,
    ChangeBookingChangeDatesSubtitle,
    ChangeBookingInfoSectionWrapper,
    ChangeBookingInfoSectionText,
    ChangeBookingInfoSectionIcon,
    ChangeBookingDivider,
    ChangeBookingPriceDetailTitle,
    ChangeBookingPriceDifferenceWrapper,
    ChangeBookingPriceDetailPrice,
    ChangeBookingPaymentWrapper,
    ChangeBookingTitleBackButton,
    ChangeBookingPaymentTerms,
    ChangeBookingMobilePaymentDetailsWrapper,
} from "../changeBookingStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import PaymentFailedNotAvailableBooking from "../../../components/paymentFailedModal/paymentFailedNotAvailableBookingModal";
import Payment from "../payment/payment";
import { callApi } from "../../../utils/api/api";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { ExtendedBookingRequestModel, ExtendedListingModel } from "../interface/interface";
import { BookingDetail, DisplayItem } from "../../../interfaces/models/bookingDetail";
import BackBtn from "../../../components/btn/backBtn/backBtn";

interface GuestType {
    guests: number;
    adults: number;
    children: number;
    infants: number;
    pets: number;
}
interface ChangeDetailProps {
    getPlaceType: () => string;
    bookingRequestListing: ExtendedListingModel;
    startDate: Date | null;
    endDate: Date | null;
    originalBeginDate: string;
    originalEndDate: string;
    guests: GuestType;
    bookingDetails: BookingDetail;
    toggleNightlyPriceBreakdownPopup: () => void;
    bookingRequest: ExtendedBookingRequestModel;
    clientSecret: string;
    setPageIndex: (arg: number) => void;
    accessToken: string;
    toggleDatepicker: () => void;
    toggleGuestsPopup: () => void;
}

const ChangeDetail: React.FC<ChangeDetailProps> = ({
    getPlaceType,
    bookingRequestListing,
    startDate,
    endDate,
    guests,
    bookingDetails,
    toggleNightlyPriceBreakdownPopup,
    bookingRequest,
    clientSecret,
    originalBeginDate,
    originalEndDate,
    setPageIndex,
    accessToken,
    toggleDatepicker,
    toggleGuestsPopup,
}) => {
    const [changeNotAvailable, setChangeNotAvailable] = useState(false);
    const navigate = useNavigate();
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const getForamttedDateRange = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (startDate && endDate) {
            return `${startDate.getDate()} ${month[startDate.getMonth()]} - ${endDate.getDate()} ${month[endDate.getMonth()]}`;
        } else {
            return "-";
        }
    };

    const formatGuestsValue = () => {
        let guestsArray = [];
        if (guests.adults > 0) {
            guestsArray.push(`${guests.adults} ${guests.adults > 1 ? "Adults" : "Adult"}`);
        }
        if (guests.children > 0) {
            guestsArray.push(`${guests.children} ${guests.children > 1 ? "Children" : "Child"}`);
        }
        if (guests.infants > 0) {
            guestsArray.push(`${guests.infants} ${guests.infants > 1 ? "Infants" : "Infant"}`);
        }
        if (guests.pets > 0) {
            guestsArray.push(`${guests.pets} ${guests.pets > 1 ? "Pets" : "Pet"}`);
        }
        return guestsArray.join(", ");
    };

    const checkBookingChanged = () => {
        let bookingChanged = false;
        if (bookingRequest) {
            const arrivalDate = new Date(new Date(bookingRequest.arrivalDate).getUTCFullYear(), new Date(bookingRequest.arrivalDate).getUTCMonth(), new Date(bookingRequest.arrivalDate).getUTCDate());
            const departureDate = new Date(
                new Date(bookingRequest.departureDate).getUTCFullYear(),
                new Date(bookingRequest.departureDate).getUTCMonth(),
                new Date(bookingRequest.departureDate).getUTCDate()
            );

            if (startDate && endDate) {
                if (startDate.getTime() !== arrivalDate.getTime() || endDate.getTime() !== departureDate.getTime() || guests.guests !== bookingRequest.guests) {
                    bookingChanged = true;
                }
            }
            if (bookingRequest.adults !== guests.adults || bookingRequest.children !== guests.children || bookingRequest.infants !== guests.infants || bookingRequest.pets !== guests.pets) {
                bookingChanged = true;
            }
        }

        return bookingChanged;
    };

    const submitChangeBookingRequest = async (paymentIntentId: string) => {
        if (!startDate || !endDate) return;
        try {
            let changeBookingRequest = {
                newArrivalDate: startDate.toString(),
                newDepartureDate: endDate.toString(),
                newGuests: guests.guests,
                newAdults: guests.adults,
                newChildren: guests.children,
                newInfants: guests.infants,
                newPets: guests.pets,
                listingModelId: bookingRequest.listingmodelID,
                bookingRequestId: bookingRequest.id,
                bookingRequestVersion: bookingRequest._version,
                paymentIntentId: paymentIntentId ? paymentIntentId : null,
            };

            await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/change", {
                headers: {
                    Authorization: accessToken,
                    bookingId: bookingRequest.id,
                },
                body: changeBookingRequest,
            })
                .then(async (res) => {
                    if (res.success) {
                        setPageIndex(1);
                        window.scrollTo(0, 0);
                    } else {
                        setChangeNotAvailable(true);
                    }
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Fragment>
            {changeNotAvailable && (
                <PaymentFailedNotAvailableBooking
                    closeModal={() => {
                        setChangeNotAvailable(false);
                    }}
                />
            )}
            <ChangeBookingTitleWrapper>
                <BackBtn
                    onClick={() => {
                        handleBack();
                    }}
                    type="Arrow"
                    mobileTop={24}
                />
                <ChangeBookingTitle>Change your stay</ChangeBookingTitle>
            </ChangeBookingTitleWrapper>
            <ChangeBookingListingHeaderWrapper>
                <ChangeBookingListingHeaderImage src={constructOptimisedImageUrl(JSON.parse(bookingRequestListing.listingImages[0] as string).key, 500)} alt="featured listing image" />
                <ChangeBookingListingHeaderTextWrapper>
                    <ChangeBookingListingHeaderTextTitle>{getPlaceType()}</ChangeBookingListingHeaderTextTitle>
                    <ChangeBookingListingHeaderText>{bookingRequestListing ? bookingRequestListing.propertyTitle : null}</ChangeBookingListingHeaderText>
                    <ChangeBookingBookingRequestStatus>Confirmed</ChangeBookingBookingRequestStatus>
                </ChangeBookingListingHeaderTextWrapper>
            </ChangeBookingListingHeaderWrapper>
            <ChangeBookingDivider />
            <ChangeBookingChangeDatesEditButtonWrapper style={{ border: "none" }}>
                <ChangeBookingChangeDatesEditButtonTitleWrapper>
                    <ChangeBookingChangeDatesTitle style={{ padding: 0 }}>Dates</ChangeBookingChangeDatesTitle>
                    <ChangeBookingChangeDatesSubtitle>{getForamttedDateRange()}</ChangeBookingChangeDatesSubtitle>
                </ChangeBookingChangeDatesEditButtonTitleWrapper>
                <ChangeBookingChangeDatesDateEdit type="button" onClick={toggleDatepicker}>
                    Edit
                </ChangeBookingChangeDatesDateEdit>
            </ChangeBookingChangeDatesEditButtonWrapper>
            <ChangeBookingChangeDatesEditButtonWrapper style={{ border: "none", paddingBottom: "32px" }}>
                <ChangeBookingChangeDatesEditButtonTitleWrapper>
                    <ChangeBookingChangeDatesTitle style={{ padding: 0 }}>Guests</ChangeBookingChangeDatesTitle>
                    <ChangeBookingChangeDatesSubtitle>{formatGuestsValue()}</ChangeBookingChangeDatesSubtitle>
                </ChangeBookingChangeDatesEditButtonTitleWrapper>
                <ChangeBookingChangeDatesDateEdit type="button" onClick={toggleGuestsPopup}>
                    Edit
                </ChangeBookingChangeDatesDateEdit>
            </ChangeBookingChangeDatesEditButtonWrapper>
            <ChangeBookingDivider />
            {
                <>
                    {bookingDetails.displayItems.priceDiffItems.length !== 0 &&
                        bookingDetails.displayItems.priceDiffItems.map((item: DisplayItem, index: number) => {
                            return (
                                <Fragment key={item.label}>
                                    <ChangeBookingPriceDifferenceWrapper>
                                        <ChangeBookingPriceDetailTitle style={{ margin: 0 }}>{item.label}</ChangeBookingPriceDetailTitle>
                                        <ChangeBookingPriceDetailPrice>{item.amountFormatted}</ChangeBookingPriceDetailPrice>
                                    </ChangeBookingPriceDifferenceWrapper>
                                    <ChangeBookingPriceDetailDivider style={{ marginTop: 0, marginBottom: 0 }} />
                                </Fragment>
                            );
                        })}
                </>
            }
            <ChangeBookingInfoSectionWrapper>
                <ChangeBookingInfoSectionIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Info icon" />
                <ChangeBookingInfoSectionText>
                    <strong>Your host will review your request.</strong> Changes will not apply until your host accepts them.
                </ChangeBookingInfoSectionText>
            </ChangeBookingInfoSectionWrapper>
            {window.innerWidth < 768 && <ChangeBookingDivider />}

            <ChangeBookingMobilePaymentDetailsWrapper>
                <ChangeBookingPriceDetailTitle>Price details</ChangeBookingPriceDetailTitle>
                {bookingDetails.displayItems.priceItems
                    .filter((item) => item.label !== "Deposit")
                    .map((item: DisplayItem, index: number) => {
                        const showBreakdown = index === 0;
                        return (
                            <ChangeBookingPriceDetailWrapper
                                key={item.label}
                                onClick={() => {
                                    if (showBreakdown) {
                                        toggleNightlyPriceBreakdownPopup();
                                    }
                                }}
                            >
                                <ChangeBookingPriceDetail showBreakdown={showBreakdown}>{item.label}</ChangeBookingPriceDetail>
                                <ChangeBookingPriceDetail>{item.amountFormatted}</ChangeBookingPriceDetail>
                            </ChangeBookingPriceDetailWrapper>
                        );
                    })}
                {bookingDetails.displayItems.subTotalItems.map((item: DisplayItem, index: number) => {
                    return (
                        <ChangeBookingPriceDetailWrapper key={item.label}>
                            <ChangeBookingPriceDetail style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.label}</ChangeBookingPriceDetail>
                            <ChangeBookingPriceDetail style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.amountFormatted}</ChangeBookingPriceDetail>
                        </ChangeBookingPriceDetailWrapper>
                    );
                })}
            </ChangeBookingMobilePaymentDetailsWrapper>
            <ChangeBookingDivider />
            {bookingDetails.displayItems.priceDiffItems.length > 0 && bookingDetails.displayItems.priceDiffItems[2].amount > 0 ? (
                <ChangeBookingPaymentWrapper>
                    <ChangeBookingChangeDatesWrapper>
                        <ChangeBookingChangeDatesTitle style={{ paddingBottom: "24px" }}>Pay {bookingDetails.priceDiffFormatted} AUD</ChangeBookingChangeDatesTitle>
                        {clientSecret && (
                            <Payment
                                submitChangeBookingRequest={submitChangeBookingRequest}
                                clientSecret={clientSecret}
                                startDate={startDate}
                                endDate={endDate}
                                listingID={bookingRequestListing.id}
                                originalBeginDate={originalBeginDate}
                                originalEndDate={originalEndDate}
                            />
                        )}
                    </ChangeBookingChangeDatesWrapper>
                </ChangeBookingPaymentWrapper>
            ) : (
                <ChangeBookingPaymentWrapper>
                    <ChangeBookingPaymentTerms>
                        By continuing, you accept our{" "}
                        <a href="/terms-and-conditions" target={window.innerWidth > 768 ? "_blank" : ""}>
                            Terms of Service
                        </a>
                        , <br />
                        <a href="/privacy-policy" target={window.innerWidth > 768 ? "_blank" : ""}>
                            Privacy Policy
                        </a>{" "}
                        and the{" "}
                        <a href="https://stripe.com/en-au/legal/connect-account" target={window.innerWidth > 768 ? "_blank" : ""} rel="noreferrer">
                            Stripe Connected Account Agreement
                        </a>
                    </ChangeBookingPaymentTerms>
                    <ChangeBookingChangeDatesWrapper>
                        <ContinueBtn
                            style={{ marginTop: window.innerWidth < 768 ? "24px" : "32px" }}
                            isLoading={isContinueBtnLoading}
                            background={"red"}
                            disabled={isContinueBtnLoading || !checkBookingChanged()}
                            onClick={async () => {
                                setIsContinueBtnLoading(true);
                                await submitChangeBookingRequest("");
                                setIsContinueBtnLoading(false);
                            }}
                        >
                            Request change
                        </ContinueBtn>
                    </ChangeBookingChangeDatesWrapper>
                </ChangeBookingPaymentWrapper>
            )}
        </Fragment>
    );
};

export default ChangeDetail;
