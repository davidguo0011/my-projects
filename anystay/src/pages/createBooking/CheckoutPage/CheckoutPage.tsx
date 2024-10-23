import {
    CreateBookingWrapper,
    CreateBookingContentWrapper,
    CreateBookingTitleWrapper,
    CreateBookingTitleBackButton,
    CreateBookingTitleIcon,
    CreateBookingTitle,
    CreateBookingListingDetailsWrapper,
    CreateBookingListingDetailImage,
    CreateBookingListingDetailsText,
    CreateBookingListingDetailTitle,
    CreateBookingListingDetailSubtitle,
    CreateBookingSection,
    CreateBookingSectionDatesChangeWrapper,
    CreateBookingSectionDatesChangeTextWrapper,
    CreateBookingSectionDatesChangeTextTitle,
    CreateBookingSectionDatesChangeTextSubtitle,
    CreateBookingSectionDatesButton,
    CreateBookingPriceSection,
    CreateBookingSectionTitle,
    CreateBookingPricingTextWrapper,
    CreateBookingPricingTextRowWrapper,
    CreateBookingPricingText,
    CreateBookingSignUpSignInButton,
    CheckoutSectionDivider,
} from "../createBookingStyling";
import Payment from "../payment/payment";
import DatepickerBooking from "../../../components/datepicker/DatepickerBooking";
import GuestPicker from "../../../components/guestpicker/GuestPicker";
import { useEffect, useState, useCallback } from "react";
import { userModelSelector } from "../../../state/selectors/userModel";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import NightlyPriceBreakdownPopup from "../../../components/nightlyPriceBreakdownPopup/NightlyPriceBreakdownPopup";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../../utils/api/api";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import PromotionBanner from "./PromotionBanner/PromotionBanner";
// import ChooseHowToPay from "./ChooseHowToPay/ChooseHowToPay";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { BookingDetail } from "../../../interfaces/models/bookingDetail";
import { GuestsProps } from "../createBooking";
import BackBtn from "../../../components/btn/backBtn/backBtn";
import GuestPolicy from "../payment/GuestPolicy/GuestPolicy";
import CouponInput from "../payment/CouponInput/CouponInput";

interface ExtendListingModel extends ListingModel {
    instantBookEnabled: boolean;
    advanceNotice: number;
    advanceNoticeTime: number;
}

interface CheckoutPageProps {
    pageIndex: number;
    listing: ExtendListingModel;
    imageKey: string;
    bookingDetails: BookingDetail;
    guests: GuestsProps;
    startDate: Date | null;
    endDate: Date | null;
    listingOwnerData: any;
    updateGuests: (guests: GuestsProps) => Promise<void>;
    updateDates: (dates: Date[]) => Promise<void>;
    updateCoupon: (couponCode: string) => Promise<any>;
    clientSecret: string | null;
    createBookingRequest: (paymentIntent: any) => Promise<void>;
    cancellationPolicy: string | null;
}

export default function CheckoutPage({
    pageIndex,
    listing,
    imageKey,
    bookingDetails,
    guests,
    startDate,
    endDate,
    listingOwnerData,
    updateGuests,
    updateDates,
    updateCoupon,
    clientSecret,
    createBookingRequest,
    cancellationPolicy,
}: CheckoutPageProps) {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [changeDatesMenu, setChangeDatesMenu] = useState(false);
    const [changeGuestsMenu, setChangeGuestsMenu] = useState(false);
    const [unavailableDates, setUnavailableDates] = useState([]);
    const [nightlyPriceBreakdownPopupActive, setNightlyPriceBreakdownPopupActive] = useState(false);
    const navigate = useNavigate();

    const getUnavailableDates = useCallback(async () => {
        let unavailableDates = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `getunavailabledates/${listing.id}`);
        setUnavailableDates(unavailableDates.body.unavailableDates);
    }, [listing]);

    const getRoomType = () => {
        switch (listing.typeOfPlace) {
            case "entire-place":
                return `${listing.propertyType}`;
            case "private-room":
                return "Private room";
            case "hotel-room":
                return "Hotel room";
            case "shared-room":
                return "Shared room";
            default:
                return "";
        }
    };

    const toggleNightlyPriceBreakdownPopup = () => {
        setNightlyPriceBreakdownPopupActive(!nightlyPriceBreakdownPopupActive);
    };

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        getUnavailableDates();
    }, [getUnavailableDates]);

    if (!listing) {
        return null;
    }

    return (
        <CreateBookingWrapper pageIndex={pageIndex}>
            <CreateBookingContentWrapper pageIndex={pageIndex}>
                <CreateBookingTitleWrapper border={pageIndex === 0}>
                    {pageIndex === 0 && <BackBtn onClick={handleBack} type="Arrow" mobileLeft={0} mobileTop={22} />}
                    <CreateBookingTitle checkoutPage>
                        {pageIndex === 0 && listing
                            ? listing.instantBookEnabled
                                ? "Confirm your stay"
                                : "Request to stay"
                            : listing
                              ? listing.instantBookEnabled
                                  ? "Your stay has been confirmed!"
                                  : "Your stay has been requested!"
                              : null}
                    </CreateBookingTitle>
                </CreateBookingTitleWrapper>
                <CreateBookingListingDetailsWrapper>
                    <CreateBookingListingDetailImage src={constructOptimisedImageUrl(imageKey, 800)} alt="Listing image" />
                    <CreateBookingListingDetailsText>
                        <CreateBookingListingDetailTitle>{getRoomType()}</CreateBookingListingDetailTitle>
                        <CreateBookingListingDetailSubtitle style={{ marginTop: "4px" }}>{listing.propertyTitle}</CreateBookingListingDetailSubtitle>
                        <CreateBookingListingDetailSubtitle style={{ position: "relative", marginTop: "auto" }}>
                            <span>${Number(listing.minimumPrice / 100).toFixed(2)} AUD</span> / night
                        </CreateBookingListingDetailSubtitle>
                    </CreateBookingListingDetailsText>
                </CreateBookingListingDetailsWrapper>

                <PromotionBanner instantBookEnabled={listing.instantBookEnabled} />

                <CreateBookingSection style={{ borderTop: "0" }}>
                    <CreateBookingSectionDatesChangeWrapper style={{ marginBottom: "32px" }}>
                        <CreateBookingSectionDatesChangeTextWrapper>
                            <CreateBookingSectionDatesChangeTextTitle>Dates</CreateBookingSectionDatesChangeTextTitle>

                            <CreateBookingSectionDatesChangeTextSubtitle>
                                {!isNaN(startDate!.valueOf()) && !isNaN(endDate!.valueOf())
                                    ? `${startDate!.toDateString().split(" ")[2]} ${startDate!.toDateString().split(" ")[1]} - ${endDate!.toDateString().split(" ")[2]} ${
                                          endDate!.toDateString().split(" ")[1]
                                      }`
                                    : !isNaN(startDate!.valueOf())
                                      ? `${startDate!.toDateString().split(" ")[2]} ${startDate!.toDateString().split(" ")[1]} - `
                                      : "Please select dates"}
                            </CreateBookingSectionDatesChangeTextSubtitle>
                        </CreateBookingSectionDatesChangeTextWrapper>
                        <CreateBookingSectionDatesButton type="button" onClick={() => setChangeDatesMenu(true)}>
                            Edit
                        </CreateBookingSectionDatesButton>
                    </CreateBookingSectionDatesChangeWrapper>
                    <CreateBookingSectionDatesChangeWrapper>
                        <CreateBookingSectionDatesChangeTextWrapper>
                            <CreateBookingSectionDatesChangeTextTitle>Guests</CreateBookingSectionDatesChangeTextTitle>
                            <CreateBookingSectionDatesChangeTextSubtitle>
                                {`${guests.adults} ` + (guests.adults === 1 ? `adult` : `adults`)}
                                {guests.children > 0 ? `, ${guests.children} ` + (guests.children === 1 ? `child` : `children`) : null}
                                {guests.infants > 0 ? `, ${guests.infants} ` + (guests.infants === 1 ? `infant` : `infants`) : null}
                                {guests.pets > 0 ? `, ${guests.pets} ` + (guests.pets === 1 ? `pet` : `pets`) : null}
                            </CreateBookingSectionDatesChangeTextSubtitle>
                        </CreateBookingSectionDatesChangeTextWrapper>
                        <CreateBookingSectionDatesButton type="button" onClick={() => setChangeGuestsMenu(true)}>
                            Edit
                        </CreateBookingSectionDatesButton>
                    </CreateBookingSectionDatesChangeWrapper>
                </CreateBookingSection>
                <CheckoutSectionDivider />
                <CouponInput updateCoupon={updateCoupon} />
                <CheckoutSectionDivider />
                <CreateBookingPriceSection>
                    <CreateBookingSectionTitle>Price details</CreateBookingSectionTitle>
                    <CreateBookingPricingTextWrapper>
                        {bookingDetails.displayItems.priceItems
                            .filter((item) => item.label !== "Deposit")
                            .map((item, index) => {
                                const showBreakdown = index === 0;
                                return (
                                    <CreateBookingPricingTextRowWrapper
                                        key={item.label}
                                        onClick={() => {
                                            if (showBreakdown) {
                                                toggleNightlyPriceBreakdownPopup();
                                            }
                                        }}
                                    >
                                        <CreateBookingPricingText showBreakdown={showBreakdown}>{item.label}</CreateBookingPricingText>
                                        <CreateBookingPricingText>{item.amountFormatted}</CreateBookingPricingText>
                                        {showBreakdown && nightlyPriceBreakdownPopupActive && (
                                            <NightlyPriceBreakdownPopup bookingDetails={bookingDetails} toggleModal={toggleNightlyPriceBreakdownPopup} />
                                        )}
                                    </CreateBookingPricingTextRowWrapper>
                                );
                            })}
                        {bookingDetails.displayItems.subTotalItems.map((priceItem, index) => {
                            if (priceItem.label === "Total (AUD)") {
                                return (
                                    <CreateBookingPricingTextRowWrapper key={priceItem.label}>
                                        <CreateBookingPricingText style={{ fontWeight: "600" }}>{priceItem.label}</CreateBookingPricingText>
                                        <CreateBookingPricingText style={{ fontWeight: "600" }}>{priceItem.amountFormatted}</CreateBookingPricingText>
                                    </CreateBookingPricingTextRowWrapper>
                                );
                            }
                            return null;
                        })}
                    </CreateBookingPricingTextWrapper>
                </CreateBookingPriceSection>
                <CheckoutSectionDivider />

                {userModel ? (
                    <>
                        <CreateBookingSection>
                            <CreateBookingSectionTitle>Pay {bookingDetails.displayItems.subTotalItems[0].amountFormatted} AUD</CreateBookingSectionTitle>
                            {!isNaN(startDate!.valueOf()) && !isNaN(endDate!.valueOf()) && (
                                <Payment
                                    createBookingRequest={createBookingRequest}
                                    clientSecret={clientSecret}
                                    listing={listing}
                                    startDate={startDate}
                                    endDate={endDate}
                                    cancellationPolicy={cancellationPolicy}
                                />
                            )}
                        </CreateBookingSection>
                    </>
                ) : (
                    <>
                        <GuestPolicy listing={listing} startDate={startDate} cancellationPolicy={cancellationPolicy} />
                        <CreateBookingSignUpSignInButton type="button" onClick={() => setSignInMenuActivated(true)}>
                            Sign up or log in to book
                        </CreateBookingSignUpSignInButton>
                    </>
                )}
                {changeDatesMenu && (
                    <DatepickerBooking
                        startDate={startDate}
                        endDate={endDate}
                        listing={listing}
                        unavailableDates={unavailableDates}
                        saveFunc={updateDates}
                        cancelFunc={() => {
                            setChangeDatesMenu(false);
                        }}
                        handleClickOutside={() => {
                            setChangeDatesMenu(false);
                        }}
                    />
                )}

                {changeGuestsMenu && (
                    <GuestPicker
                        adults={guests.adults}
                        infants={guests.infants}
                        children={guests.children}
                        pets={guests.pets}
                        listingOwnerData={listingOwnerData}
                        toggleGuests={() => {
                            setChangeGuestsMenu(false);
                        }}
                        listing={listing}
                        updateGuests={updateGuests}
                    />
                )}
            </CreateBookingContentWrapper>
        </CreateBookingWrapper>
    );
}
