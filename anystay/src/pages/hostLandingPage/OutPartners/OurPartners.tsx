import {
    OurPartnersItemContent,
    OurPartnersLogo,
    OurPartnersContentWrapper,
    OurPartnersTextHeader,
    OurPartnersText,
    OurPartnersItemWrapper,
    OurPartnersTitle,
    OurPartnersLogoWrapper,
    OurPartnersContent,
    OurPartnersContentDivider,
} from "./OurPartnersStyling";

interface OurPartnersProps {
    props?: any;
}

const OurPartners: React.FC<OurPartnersProps> = (props) => {
    return (
        <OurPartnersContent>
            <OurPartnersContentWrapper>
                <OurPartnersTitle>Unlock new earning opportunities</OurPartnersTitle>
                <OurPartnersItemContent>
                    <OurPartnersItemWrapper>
                        <OurPartnersLogoWrapper>
                            <OurPartnersLogo style={{ width: "143px" }} src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Google.png"} alt="Google logo" />
                            <OurPartnersTextHeader>Google Vacation Rentals</OurPartnersTextHeader>
                            <OurPartnersText>Get discovered on the world's largest search engine with automatic listing on Google Vacation Rentals. </OurPartnersText>
                        </OurPartnersLogoWrapper>
                        {/* <OurPartnersComingSoon>Coming soon</OurPartnersComingSoon> */}
                    </OurPartnersItemWrapper>
                    <OurPartnersItemWrapper>
                        <OurPartnersLogoWrapper>
                            <OurPartnersLogo style={{ width: "48px" }} src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Fliggy.png"} alt="Fliggy logo" />
                            <OurPartnersTextHeader>Access Fliggy’s 300M+ users</OurPartnersTextHeader>
                            <OurPartnersText>Reach new guests in Asia and beyond with Fliggy, a leading online travel platform by Alibaba. </OurPartnersText>
                        </OurPartnersLogoWrapper>
                        {/* <OurPartnersComingSoon>Coming soon</OurPartnersComingSoon> */}
                    </OurPartnersItemWrapper>
                    <OurPartnersItemWrapper>
                        <OurPartnersLogoWrapper>
                            <OurPartnersLogo style={{ width: "48px" }} src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Xiaozhu.png"} alt="Xiaozhu logo" />
                            <OurPartnersTextHeader>Unlock Asia with Xiaozhu</OurPartnersTextHeader>
                            <OurPartnersText>Distribute directly to China's fastest growing short term accommodation platform. </OurPartnersText>
                        </OurPartnersLogoWrapper>
                        {/* <OurPartnersComingSoon>Coming soon</OurPartnersComingSoon> */}
                    </OurPartnersItemWrapper>
                </OurPartnersItemContent>
            </OurPartnersContentWrapper>
            <OurPartnersContentDivider></OurPartnersContentDivider>
        </OurPartnersContent>
    );
};

export default OurPartners;
