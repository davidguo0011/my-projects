import {
    HostLandingPageSliderContentWrapper,
    HostLandingPageEarningsTitle,
    HostLandingPageEarningsSubtitle,
    HostLandingPageEarningsText,
    HostLandingPageEarningsSlider,
} from "../hostLandingPageStyling";
import { useState } from "react";

const EarnExtraMoney: React.FC = () => {
    const listingAveragePrice = 74076;
    const [listingNumber, setListingNumber] = useState(1);
    return (
        <HostLandingPageSliderContentWrapper>
            <HostLandingPageEarningsTitle>Earn an extra</HostLandingPageEarningsTitle>
            <HostLandingPageEarningsSubtitle>${Number(listingNumber * listingAveragePrice).toFixed(0)} AUD</HostLandingPageEarningsSubtitle>
            <HostLandingPageEarningsText>
                <span>{listingNumber} listing</span> on average in 1 year
            </HostLandingPageEarningsText>
            <HostLandingPageEarningsSlider
                value={listingNumber}
                onChange={(event: Event, newValue: number | number[]) => {
                    const newListingNumber = Array.isArray(newValue) ? newValue[0] : newValue;
                    setListingNumber(newListingNumber > 0 ? newListingNumber : 1);
                }}
                step={1}
                min={0}
                max={10}
            />
        </HostLandingPageSliderContentWrapper>
    );
};

export default EarnExtraMoney;
