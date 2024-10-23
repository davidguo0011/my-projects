import {
    ViewListingSendMessageRequestWrapper,
    ViewListingSendMessageRequestTitle,
    ViewListingSendMessageRequestSubtitle,
    ViewListingSendMessageRequestTextInput,
    ViewListingSendMessageRequestSentTitleWrapper,
    ViewListingSendMessageRequestSentTitle,
    ViewListingSendMessageRequestSentHeader,
    ViewListingSendMessageRequestSentImage,
    ViewListingSendMessageRequestSentHeaderTitle,
    ViewListingSendMessageRequestSentHeaderSubtitle,
    ViewListingSendMessageRequestSentHeaderPrice,
    ViewListingSendMessageRequestSentHeaderTotalWrapper,
    ViewListingSendMessageRequestSentHeaderSubtotal,
    ViewListingSendMessageRequestSentHeaderTotal,
} from "../viewListingStyling";
import { callApi } from "../../../utils/api/api";
import moment from "moment-timezone";
import { momentTimezone } from "@mobiscroll/react";
import useClickOutside from "../../../hook/useClickOutside";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ListingInterface } from "../viewListing";
import { BookingDetail } from "../../../interfaces/models/bookingDetail";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { GuestsInterface } from "../viewListing";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

momentTimezone.moment = moment;

interface SendMessageRequestPopupProps {
    selected: boolean;
    toggleSelected: () => Promise<void>;
    listing: ListingInterface;
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    guests: GuestsInterface;
    accessToken: string;
    bookingDetails: BookingDetail | null;
    sendMessageEvent: any;
}

export default function SendMessageRequestPopup({ selected, toggleSelected, guests, listing, dates, accessToken, bookingDetails, sendMessageEvent }: SendMessageRequestPopupProps) {
    const wrapperRef = useClickOutside(selected, toggleSelected);
    const [messageSent, setMessageSent] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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

    const sendMsg = async () => {
        await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "conversation", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                // userHostModelId: listing.userhostmodelID,
                listingModelId: listing.id,
                // messageownerId: userModel.id,
                message: message,
                arrivalDate: dates.startDate.toString(),
                departureDate: dates.endDate.toString(),
                // userModelId: userModel.id,
            },
        })
            .then(async (res) => {
                setMessageSent(true);
                setMessage("");
                sendMessageEvent(listing.id, dates.startDate.toString(), dates.endDate.toString(), message);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await sendMsg();
        setIsContinueBtnLoading(false);
    };

    const handleClose = () => {
        toggleSelected();
    };

    const handleReserve = () => {
        const arrivalDate = `${String((dates.startDate as Date).getDate()).padStart(2, "0")}-${String((dates.startDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.startDate as Date).getFullYear()}`;

        const departureDate = `${String((dates.endDate as Date).getDate()).padStart(2, "0")}-${String((dates.endDate as Date).getMonth() + 1).padStart(2, "0")}-${(dates.endDate as Date).getFullYear()}`;

        const adultsString = guests.adults ? `adults=${guests.adults}` : "";
        const childrenString = guests.children ? `children=${guests.children}` : "";
        const petsString = guests.pets ? `pets=${guests.pets}` : "";
        const infantsString = guests.infants ? `infants=${guests.infants}` : "";
        const searchParamsStrings = [adultsString, childrenString, petsString, infantsString].filter((param) => param !== "").join("&");

        navigate(`/create-booking/${listing.id}/${arrivalDate}/${departureDate}${searchParamsStrings ? `?${searchParamsStrings}` : ""}`);
    };

    return (
        <>
            {!messageSent && (
                <GlobalPopupContainerCenter
                    ref={wrapperRef}
                    backBtnType={"Arrow"}
                    closePopup={handleClose}
                    handleSave={handleSave}
                    disable={message === "" || isContinueBtnLoading}
                    isContinueBtnLoading={isContinueBtnLoading}
                    btnColor="red"
                    btnText="Send"
                >
                    <ViewListingSendMessageRequestWrapper style={{ marginTop: "44px" }}>
                        <ViewListingSendMessageRequestTitle>Send a message</ViewListingSendMessageRequestTitle>
                        <ViewListingSendMessageRequestSubtitle>You can ask about the property and its surroundings.</ViewListingSendMessageRequestSubtitle>
                        <ViewListingSendMessageRequestTextInput placeholder="Type your message" onChange={(e) => setMessage(e.target.value)} value={message} maxLength={4096} />
                    </ViewListingSendMessageRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
            {messageSent && (
                <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={handleClose} handleSave={handleReserve} btnColor="red" btnText="Reserve" cancelBtnText="Go to listing">
                    <ViewListingSendMessageRequestWrapper>
                        <ViewListingSendMessageRequestSentTitleWrapper>
                            <ViewListingSendMessageRequestSentTitle>Message sent!</ViewListingSendMessageRequestSentTitle>
                        </ViewListingSendMessageRequestSentTitleWrapper>
                        <ViewListingSendMessageRequestSentHeader>
                            <ViewListingSendMessageRequestSentImage src={constructOptimisedImageUrl(JSON.parse(listing.listingImages[0] as string).key, 500)} alt="Message sent" />
                            <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                <ViewListingSendMessageRequestSentHeaderTitle>{getPlaceType(listing.typeOfPlace)}</ViewListingSendMessageRequestSentHeaderTitle>
                                <ViewListingSendMessageRequestSentHeaderSubtitle>{listing.propertyTitle}</ViewListingSendMessageRequestSentHeaderSubtitle>
                                <ViewListingSendMessageRequestSentHeaderPrice>
                                    <span>${Number(listing.minimumPrice / 100).toFixed(2)} AUD</span> / night
                                </ViewListingSendMessageRequestSentHeaderPrice>
                            </div>
                        </ViewListingSendMessageRequestSentHeader>
                        <ViewListingSendMessageRequestSentHeaderTotalWrapper>
                            {bookingDetails && (
                                <>
                                    {bookingDetails.displayItems.priceItems
                                        .filter((item) => item.label !== "Deposit")
                                        .map((item) => {
                                            return (
                                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }} key={item.label}>
                                                    <ViewListingSendMessageRequestSentHeaderSubtotal>{item.label}</ViewListingSendMessageRequestSentHeaderSubtotal>
                                                    <ViewListingSendMessageRequestSentHeaderSubtotal>{item.amountFormatted}</ViewListingSendMessageRequestSentHeaderSubtotal>
                                                </div>
                                            );
                                        })}
                                    {bookingDetails.displayItems.subTotalItems.map((item, index) => {
                                        if (item.label === "Total (AUD)") {
                                            return (
                                                <div style={{ display: "flex", justifyContent: "space-between" }} key={item.label}>
                                                    <ViewListingSendMessageRequestSentHeaderTotal style={{ fontWeight: "600" }}>{item.label}</ViewListingSendMessageRequestSentHeaderTotal>
                                                    <ViewListingSendMessageRequestSentHeaderTotal style={{ fontWeight: "600" }}>{item.amountFormatted}</ViewListingSendMessageRequestSentHeaderTotal>
                                                </div>
                                            );
                                        }
                                    })}
                                </>
                            )}
                        </ViewListingSendMessageRequestSentHeaderTotalWrapper>
                    </ViewListingSendMessageRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
        </>
    );
}
