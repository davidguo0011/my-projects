import { useState, useEffect, useRef } from "react";
import {
    ViewListingShareButtonIcon,
    ViewListingDesktopHeaderWrapper,
    ViewListingDesktopHeaderPriceWrapper,
    ViewListingDesktopHeaderPrice,
    ViewListingDesktopHeaderMinimum,
    ViewListingDesktopHeaderReserveButton,
    ViewListingDesktopHeaderContentWrapper,
    HeartIcon,
    ViewListingHeaderSaveButtonWrapper,
    ViewListingHeaderShareButtonWrapper,
} from "../viewListingStyling";
import { useNavigate } from "react-router-dom";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { ListingInterface } from "../viewListing";
import { UserModel } from "../../../interfaces/models/userModel";
import { BookingDetail } from "../../../interfaces/models/bookingDetail";
import { GuestsInterface } from "../viewListing";

interface ViewListingDesktopHeaderProps {
    listing: ListingInterface;
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    guests: GuestsInterface;
    accessToken: string;
    toggleCalendar: () => void;
    bookingDetails: BookingDetail | null;
    toggleShareListing: () => Promise<void>;
    toggleSaved: (listingId: string, userModel: UserModel, accessToken: string) => Promise<void>;
    handleShare: () => Promise<void>;
    isSaved: boolean;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ViewListingDesktopHeader({
    listing,
    dates,
    accessToken,
    guests,
    toggleCalendar,
    bookingDetails,
    toggleShareListing,
    toggleSaved,
    handleShare,
    isSaved,
    setIsSaved,
}: ViewListingDesktopHeaderProps) {
    const [desktopHeaderActive, setDesktopHeaderActive] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const isSavedLoading = useRef(false);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    const listenToScroll = () => {
        const scroll = window.pageYOffset;
        setDesktopHeaderActive(scroll >= 1364);
    };

    const handleToggleSaved = async () => {
        if (userModel) {
            if (isSavedLoading.current) return;
            try {
                setIsSaved((prev) => !prev);
                isSavedLoading.current = true;
                await toggleSaved(listing.id, userModel, accessToken);
            } catch (err: any) {
                console.log(err);
                setIsSaved((prev) => !prev);
            } finally {
                isSavedLoading.current = false;
            }
        } else {
            setSignInMenuActivated(true);
        }
    };

    return (
        <ViewListingDesktopHeaderWrapper animate={{ y: desktopHeaderActive && window.innerWidth > 1024 ? 0 : "-104px" }} desktopHeaderActive={desktopHeaderActive} initial={false}>
            <ViewListingDesktopHeaderContentWrapper>
                {/* <ViewListingHeaderSaveButtonWrapper style={{ width: "44px", height: "44px" }} onClick={handleToggleSaved}>
                    <HeartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path
                            d="M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z"
                            fill={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.White.color}`}
                            stroke={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.Black.color}`}
                            transform="translate(0.7, 2.5)"
                        />
                    </HeartIcon>
                </ViewListingHeaderSaveButtonWrapper>
                <ViewListingHeaderShareButtonWrapper type="button" onClick={window.innerWidth < 768 ? handleShare : toggleShareListing} style={{ width: "44px", height: "44px" }}>
                    <ViewListingShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Share.svg"} alt={"Share Button"} />
                </ViewListingHeaderShareButtonWrapper> */}
                <ViewListingDesktopHeaderPriceWrapper>
                    {bookingDetails ? (
                        <ViewListingDesktopHeaderPrice>
                            <strong>
                                {bookingDetails.displayItems.subTotalItems[0]
                                    ? bookingDetails.displayItems.subTotalItems[0].amountFormatted
                                    : `$${Number(bookingDetails.pricePerNight / 100).toFixed(2)}`}
                            </strong>{" "}
                            {bookingDetails.displayItems.subTotalItems[0] ? "total" : "/ night"}
                        </ViewListingDesktopHeaderPrice>
                    ) : (
                        listing.minimumPrice && (
                            <ViewListingDesktopHeaderPrice>
                                <strong>${Number(listing.minimumPrice / 100).toFixed(2)}</strong> / night
                            </ViewListingDesktopHeaderPrice>
                        )
                    )}
                    <ViewListingDesktopHeaderMinimum type="button" onClick={() => toggleCalendar()}>
                        {dates.startDate !== "anyArrival" && dates.endDate !== "anyDeparture"
                            ? `${(dates.startDate as Date).toLocaleDateString("au", { month: "short", day: "numeric" })} - ${(dates.endDate as Date).toLocaleDateString("au", {
                                  month: "short",
                                  day: "numeric",
                              })}`
                            : listing.minimumStay === 1 || listing.minimumStay === null
                              ? "No min. stay"
                              : `${listing.minimumStay} nights minimum`}
                    </ViewListingDesktopHeaderMinimum>
                </ViewListingDesktopHeaderPriceWrapper>
                <ViewListingDesktopHeaderReserveButtonComponent dates={dates} guests={guests} listingID={listing.id} toggleCalendar={toggleCalendar} />
            </ViewListingDesktopHeaderContentWrapper>
        </ViewListingDesktopHeaderWrapper>
    );
}

interface ViewListingDesktopHeaderReserveButtonComponentProps {
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    guests: GuestsInterface;
    listingID: string;
    toggleCalendar: () => void;
}

function ViewListingDesktopHeaderReserveButtonComponent({ dates, listingID, guests, toggleCalendar }: ViewListingDesktopHeaderReserveButtonComponentProps) {
    let navigate = useNavigate();

    return (
        <ViewListingDesktopHeaderReserveButton
            type="button"
            onClick={() => {
                if (dates.startDate && dates.startDate !== "anyArrival" && dates.endDate && dates.startDate !== "anyDeparture") {
                    // createBookingRequest()

                    let arrivalDate = `${String((dates.startDate as Date).getDate()).padStart(2, "0")}-${String((dates.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.startDate as Date).getFullYear()}`;

                    let departureDate = `${String((dates.endDate as Date).getDate()).padStart(2, "0")}-${String((dates.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.endDate as Date).getFullYear()}`;

                    const adultsString = guests.adults ? `adults=${guests.adults}` : "";
                    const childrenString = guests.children ? `children=${guests.children}` : "";
                    const petsString = guests.pets ? `pets=${guests.pets}` : "";
                    const infantsString = guests.infants ? `infants=${guests.infants}` : "";
                    const searchParamsStrings = [adultsString, childrenString, petsString, infantsString].filter((param) => param !== "").join("&");

                    navigate(`/create-booking/${listingID}/${arrivalDate}/${departureDate}${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
                } else {
                    toggleCalendar();
                }
            }}
        >
            {dates.startDate && dates.startDate !== "anyArrival" && dates.endDate && dates.endDate !== "anyDeparture" ? "Reserve" : "Select dates"}
        </ViewListingDesktopHeaderReserveButton>
    );
}
