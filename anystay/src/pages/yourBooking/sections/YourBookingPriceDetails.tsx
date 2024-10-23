import {
    YourBookingHeaderDetailsDatesTextSection,
    YourBookingPriceDetailsTitle,
    YourBookingPriceDetailsPrice,
    YourBookingPriceDetailsPriceWrapper,
    YourBookingPriceDetailsPriceBold,
} from "../yourBookingStyling";
import { guestPriceBreakdownType } from "../yourBooking";

interface YourBookingPriceDetailsProps {
    guestPriceBreakdown: guestPriceBreakdownType;
}

const YourBookingPriceDetails: React.FC<YourBookingPriceDetailsProps> = ({ guestPriceBreakdown }) => {
    return (
        <YourBookingHeaderDetailsDatesTextSection>
            <YourBookingPriceDetailsTitle>Price details</YourBookingPriceDetailsTitle>
            {guestPriceBreakdown.priceItems
                .filter((item) => item.label !== "Deposit")
                .map((item) => {
                    return (
                        <YourBookingPriceDetailsPriceWrapper key={item.label}>
                            <YourBookingPriceDetailsPrice>{item.label}</YourBookingPriceDetailsPrice>
                            <YourBookingPriceDetailsPrice>{item.amountFormatted}</YourBookingPriceDetailsPrice>
                        </YourBookingPriceDetailsPriceWrapper>
                    );
                })}
            {guestPriceBreakdown.subTotalItems.map((item, index) => {
                return (
                    <YourBookingPriceDetailsPriceWrapper key={item.label}>
                        <YourBookingPriceDetailsPriceBold style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.label}</YourBookingPriceDetailsPriceBold>
                        <YourBookingPriceDetailsPriceBold style={{ fontWeight: index === 0 ? "600" : "400" }}>{item.amountFormatted}</YourBookingPriceDetailsPriceBold>
                    </YourBookingPriceDetailsPriceWrapper>
                );
            })}
        </YourBookingHeaderDetailsDatesTextSection>
    );
};

export default YourBookingPriceDetails;
