import { useEffect, useState, useCallback } from "react";
import {
    BookingHostReceiptContainer,
    BookingHostReceiptWrapper,
    BookingHostReceiptTitleWrapper,
    BookingHostReceiptTitle,
    BookingHostReceiptPrintButton,
    BookingHostReceiptSubtitle,
    BookingHostNameLine,
    BookingHostAddressLine,
    BookingHostReceiptPricingWrapper,
    BookingHostReceiptPricingTitle,
    BookingHostReceiptPricingSubtitle,
    BookingHostReceiptPricingPrice,
} from "./bookingHostReceiptStyling";
import { useParams } from "react-router-dom";
import { stripeAccountSelector } from "../../state/selectors/stripeAccount";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";

interface ExtendedBookingRequstModel extends BookingRequestModel {
    serviceFee: number;
}

export default function BookingHostReceipt() {
    const [booking, setBooking] = useState<ExtendedBookingRequstModel | null>(null);
    const [hostName, setHostName] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [address, setAddress] = useState("");
    const [tax_id_provided, setTax_id_provided] = useState(false);
    const [stripeHostAccount, setStripeHostAccount] = useRecoilState(stripeAccountSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const { id } = useParams();

    const getBooking = useCallback(async () => {
        let bookingRequest = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, `booking/${id}`, {
            headers: {
                Authorization: accessToken,
                bookingId: id,
            },
        });
        return bookingRequest.body.bookingRequest;
    }, [id, accessToken]);

    const getAddress = useCallback(async () => {
        let address = "";

        if (stripeHostAccount?.individual?.address) {
            if (stripeHostAccount.individual.address.line1 && stripeHostAccount.individual.address.city && stripeHostAccount.individual.address.state && stripeHostAccount.individual.address.country) {
                address = `${stripeHostAccount.individual.address.line2 ? `${stripeHostAccount.individual.address.line2}/` : ""}${stripeHostAccount.individual.address.line1}, ${
                    stripeHostAccount.individual.address.city
                }, ${stripeHostAccount.individual.address.state}, ${stripeHostAccount.individual.address.country}`;
            }
        }

        return address;
    }, [stripeHostAccount]);

    const getTaxId = useCallback(() => {
        let tax_id_provided = false;
        if (stripeHostAccount) {
            if (stripeHostAccount.company) {
                if (stripeHostAccount.company.tax_id_provided) {
                    tax_id_provided = true;
                }
            }
        }

        return tax_id_provided;
    }, [stripeHostAccount]);
    const getCreatedDate = (booking: ExtendedBookingRequstModel) => {
        const day = new Date(booking.createdAt).getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[new Date(booking.createdAt).getMonth()];
        const year = new Date(booking.createdAt).getFullYear();

        return `${day} ${month} ${year}`;
    };
    const setData = useCallback(async () => {
        let booking = await getBooking();
        let address = await getAddress();
        let tax_id_provided = getTaxId();
        let createdDate = getCreatedDate(booking);

        let host = userModel;
        let hostName = `${host?.firstName ? host.firstName : ""} ${host?.lastName ? host.lastName : ""}`;
        setAddress(address);
        setBooking(booking);
        setHostName(hostName);
        setCreatedDate(createdDate);
        setTax_id_provided(tax_id_provided);
    }, [getAddress, getBooking, getTaxId, userModel]);

    useEffect(() => {
        setData();
    }, [setData]);

    return (
        <BookingHostReceiptContainer>
            <HelmetTags title="Receipt | Anystay" />
            <BookingHostReceiptWrapper>
                <BookingHostReceiptTitleWrapper>
                    <BookingHostReceiptTitle>Tax invoice</BookingHostReceiptTitle>
                    <BookingHostReceiptPrintButton type="button" onClick={() => window.print()}>
                        Print
                    </BookingHostReceiptPrintButton>
                </BookingHostReceiptTitleWrapper>
                <BookingHostReceiptSubtitle>
                    {createdDate} {tax_id_provided ? "- Tax ID Provided" : null}
                </BookingHostReceiptSubtitle>
                <BookingHostNameLine>Anystay Pty Ltd</BookingHostNameLine>
                <BookingHostAddressLine>60 Sherwood road, Toowong, QLD 4066</BookingHostAddressLine>
                <BookingHostNameLine>{hostName}</BookingHostNameLine>
                <BookingHostAddressLine>{address}</BookingHostAddressLine>
                <BookingHostReceiptPricingWrapper>
                    <BookingHostReceiptPricingTitle style={{ gridColumn: "1/2" }}>Subtotal</BookingHostReceiptPricingTitle>
                    <BookingHostReceiptPricingPrice style={{ gridColumn: "1/2" }}>${booking ? Number((booking.serviceFee * 9) / 1000).toFixed(2) : 0}</BookingHostReceiptPricingPrice>
                    <BookingHostReceiptPricingSubtitle style={{ gridColumn: "1/2" }}>Before tax</BookingHostReceiptPricingSubtitle>
                    <BookingHostReceiptPricingTitle style={{ gridColumn: "2/3" }}>GST</BookingHostReceiptPricingTitle>
                    <BookingHostReceiptPricingPrice style={{ gridColumn: "2/3" }}>${booking ? Number(booking.serviceFee / 1000).toFixed(2) : 0}</BookingHostReceiptPricingPrice>
                    <BookingHostReceiptPricingSubtitle style={{ gridColumn: "2/3" }}>10%</BookingHostReceiptPricingSubtitle>
                    <BookingHostReceiptPricingTitle style={{ gridColumn: "3/4" }}>Total service fee</BookingHostReceiptPricingTitle>
                    <BookingHostReceiptPricingPrice style={{ gridColumn: "3/4" }}>${booking ? Number(booking.serviceFee / 100).toFixed(2) : 0}</BookingHostReceiptPricingPrice>
                    <BookingHostReceiptPricingSubtitle style={{ gridColumn: "3/4" }}>After tax</BookingHostReceiptPricingSubtitle>
                </BookingHostReceiptPricingWrapper>
            </BookingHostReceiptWrapper>
        </BookingHostReceiptContainer>
    );
}
