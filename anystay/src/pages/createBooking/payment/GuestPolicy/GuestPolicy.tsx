import {
    CreateBookingSection,
    CreateBookingSectionTitle,
    CreateBookingCancellationSubtitle,
    DamageDepositLink,
    CreateBookingRequestOnlyWrapper,
    CreateBookingRequestOnlyIcon,
    CreateBookingRequestOnlyText,
} from "../../createBookingStyling";
import { ViewListingDamageDepositText } from "../../../viewListing/viewListingStyling";
import { ListingModel } from "../../../../interfaces/models/listingModel";
import useIsDesktopSize from "../../../../hook/useIsDesktopSize";

interface GuestPolicyProps {
    listing: ExtendedListingModel;
    startDate: Date | null;
    cancellationPolicy: string | null;
}

interface ExtendedListingModel extends ListingModel {
    instantBookEnabled?: boolean;
}

export default function GuestPolicy({ startDate, cancellationPolicy, listing }: GuestPolicyProps) {
    const isDesktopSize = useIsDesktopSize();
    const getCancellationPolicy = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let currentDate = new Date();
        let futureDate = new Date(startDate!);
        let futureDateNumber = futureDate.setUTCDate(futureDate.getUTCDate() - 1);
        let futureDate7 = new Date(startDate!);
        let futureDateNumber7 = futureDate7.setUTCDate(futureDate7.getUTCDate() - 7);
        let futureDate2 = currentDate.setUTCDate(currentDate.getUTCDate() + 2);
        let futureDate28 = new Date(startDate!);
        let futureDateNumber28 = futureDate28.setUTCDate(futureDate28.getUTCDate() - 28);
        let futureDateString = `${new Date(futureDateNumber).getUTCDate()} ${month[new Date(futureDateNumber).getUTCMonth()]}`;
        let futureDate7String = `${new Date(futureDateNumber7).getUTCDate()} ${month[new Date(futureDateNumber7).getUTCMonth()]}`;
        let futureDate2String = `${new Date(futureDate2).getUTCDate()} ${month[new Date(futureDate2).getUTCMonth()]}`;
        let futureDate28String = `${new Date(futureDateNumber28).getUTCDate()} ${month[new Date(futureDateNumber28).getUTCMonth()]}`;
        switch (cancellationPolicy) {
            case "flexible":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0, maxWidth: "unset" }}>
                        <strong style={{ fontWeight: 575 }}>Free cancellation {futureDateString === "NaN undefined" ? "until 24 hours before arrival" : `before ${futureDateString}`}.</strong> After
                        that, you will receive a full refund of unspent nights minus service fee.{" "}
                        <DamageDepositLink target="_blank" href="https://help.anystay.com.au/en/articles/7007340-cancellations">
                            Learn more
                        </DamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            case "moderate":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0 }}>
                        <strong style={{ fontWeight: 575 }}>Free cancellation {futureDate7String === "NaN undefined" ? "until 7 days before arrival" : `before ${futureDate7String}`}.</strong> After
                        that, you will receive a 50% refund of unspent nights minus service fee.{" "}
                        <DamageDepositLink target="_blank" href="https://help.anystay.com.au/en/articles/7007340-cancellations">
                            Learn more
                        </DamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            case "strict":
                return (
                    <ViewListingDamageDepositText style={{ margin: 0 }}>
                        <strong style={{ fontWeight: 575 }}>Free cancellation before {futureDate2String}.</strong> If you cancel{" "}
                        {futureDate28String === "NaN undefined" ? "28 days before arrival" : `before ${futureDate28String}`} you will receive a 50% refund minus service fees. After that, you won't be
                        Refunded.{" "}
                        <DamageDepositLink target="_blank" href="https://help.anystay.com.au/en/articles/7007340-cancellations">
                            Learn more
                        </DamageDepositLink>
                    </ViewListingDamageDepositText>
                );
            default:
                return "";
        }
    };
    return (
        <CreateBookingSection style={isDesktopSize ? { marginTop: "40px" } : {}}>
            <CreateBookingSectionTitle>Guest policy</CreateBookingSectionTitle>
            <CreateBookingCancellationSubtitle>{getCancellationPolicy()}</CreateBookingCancellationSubtitle>
            {listing.deposit > 0 && (
                <CreateBookingCancellationSubtitle>
                    <ViewListingDamageDepositText style={{ margin: 0, maxWidth: "unset" }}>
                        <strong style={{ fontWeight: 575 }}>
                            <br />
                            Your host may charge a ${Number(listing.deposit / 100).toFixed(2)} deposit.
                        </strong>{" "}
                        This is usually processed at check-in.{" "}
                        <DamageDepositLink target="_blank" href="https://help.anystay.com.au/en/articles/7007403-deposits">
                            Learn more
                        </DamageDepositLink>
                    </ViewListingDamageDepositText>
                </CreateBookingCancellationSubtitle>
            )}
            {!listing.instantBookEnabled && (
                <CreateBookingRequestOnlyWrapper>
                    <CreateBookingRequestOnlyIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Interface+Time+Rewind.svg"} alt="" />
                    <CreateBookingRequestOnlyText>
                        <strong>Your host has 24 hours to confirm your request.</strong> You won't be charged until then.
                    </CreateBookingRequestOnlyText>
                </CreateBookingRequestOnlyWrapper>
            )}
        </CreateBookingSection>
    );
}
