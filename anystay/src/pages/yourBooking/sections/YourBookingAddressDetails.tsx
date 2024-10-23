import { YourBookingHeaderDetailsDatesTextSection, YourBookingHeaderDetailsDatesTitle, YourBookingHeaderDetailsDatesSubtitle, YourBookingHeaderDetailsAddressSubtitle } from "../yourBookingStyling";
import { YourBookingRequestListingData } from "../yourBooking";

interface YourBookingAddressDetailsProps {
    listingData: YourBookingRequestListingData;
}

const YourBookingAddressDetails: React.FC<YourBookingAddressDetailsProps> = ({ listingData }) => {
    return (
        <YourBookingHeaderDetailsDatesTextSection>
            <YourBookingHeaderDetailsDatesTitle>Address</YourBookingHeaderDetailsDatesTitle>
            <YourBookingHeaderDetailsDatesSubtitle style={{ paddingRight: "32px" }}>
                {`${listingData.streetNumber} ${listingData.street}, ${listingData.suburb},  ${listingData.city},  ${listingData.postcode},  ${listingData.country}`}
            </YourBookingHeaderDetailsDatesSubtitle>
            <YourBookingHeaderDetailsAddressSubtitle>{listingData.propertyTitle}</YourBookingHeaderDetailsAddressSubtitle>
        </YourBookingHeaderDetailsDatesTextSection>
    );
};

export default YourBookingAddressDetails;
