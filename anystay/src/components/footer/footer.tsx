import { useRecoilState } from "recoil";
import {
    Footer,
    FooterWrapper,
    FooterLinkSection,
    FooterLinkLabel,
    FooterLink,
    FooterLinkWrapper,
    FooterDivider,
    FooterCopyrightWrapper,
    FooterCopyrightText,
    FooterSocialMediaWrapper,
    FooterSocialMediaIcon,
    FooterSocialTermsLinkWrapper,
    FooterLinkA,
    FooterLinkMainLabel,
    FooterDesktopMediaSection,
    FooterMobileMediaSection,
} from "./footerStyling";
import { useLocation } from "react-router-dom";
import { loggedInSelector } from "../../state/selectors/loggedIn";

const FooterComponent: React.FC = () => {
    const location = useLocation();
    const [userLoggedIn, setUserLoggedIn] = useRecoilState(loggedInSelector);

    return (
        <Footer location={location.pathname}>
            <FooterWrapper location={location.pathname}>
                {/* <FooterHeaderWrapper className="hidden">
                </FooterHeaderWrapper> */}
                {/* <FooterDivider className="hidden" style={{ gridRow: "2/3", gridColumn: "1/5" }} /> */}
                <FooterLinkSection className="hidden">
                    <FooterLinkMainLabel>Support and guidebooks</FooterLinkMainLabel>
                    {/* <FooterLinkA href="https://help.anystay.com.au/" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Go to help center</FooterLink>
                    </FooterLinkA> */}
                    {/* <FooterLinkA href="https://help.anystay.com.au" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>What's new</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>
                            Stay safety
                        </FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>
                            Feedback
                        </FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>
                            Careers
                        </FooterLink>
                    </FooterLinkA> */}
                    <FooterDesktopMediaSection>
                        <FooterSocialTermsLinkWrapper className="reverse">
                            {/* <FooterTermsWrapper>
                        <FooterTermsLink to="/terms-and-conditions">Terms</FooterTermsLink>
                        <FooterTermsLink to="/privacy-policy">Privacy</FooterTermsLink>
                    </FooterTermsWrapper> */}
                            <FooterSocialMediaWrapper>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anystay.com.au/">
                                    <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Footer/ig1.png"} alt={"instagram icon"} />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/anystay.com.au/">
                                    <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Footer/fb1.png"} alt={"Facebook icon"} />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@anystay.com.au/">
                                    <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg"} alt={"Tiktok icon"} />
                                </a>
                            </FooterSocialMediaWrapper>
                        </FooterSocialTermsLinkWrapper>
                        <FooterCopyrightWrapper>
                            <FooterCopyrightText>© 2023, Anystay Pty Ltd</FooterCopyrightText>
                        </FooterCopyrightWrapper>
                    </FooterDesktopMediaSection>
                    <FooterDivider />
                </FooterLinkSection>
                <FooterLinkSection className="hidden">
                    <FooterLinkLabel>Explore</FooterLinkLabel>
                    <FooterLinkWrapper
                        to={
                            'search/Australia/ChIJ38WHZwf9KysRUhNblaFnglM/anyArrival/anyDeparture/%7B"typeOfPlace":[],"propertyType":[],"priceRange":%7B"min":0,"max":1000%7D,"guests":1,"adults":1,"children":0,"infants":0,"pets":0,"bedrooms":1,"bathrooms":0,"amenities":[],"services":[],"houseRules":[]%7D'
                        }
                    >
                        <FooterLink>Find a short stay</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper
                        to={
                            'search/Australia/ChIJ38WHZwf9KysRUhNblaFnglM/anyArrival/anyDeparture/%7B"typeOfPlace":[],"propertyType":[],"priceRange":%7B"min":0,"max":1000%7D,"guests":1,"adults":1,"children":0,"infants":0,"pets":0,"bedrooms":1,"bathrooms":0,"amenities":[],"services":[],"houseRules":[]%7D'
                        }
                    >
                        <FooterLink>Find a long stay</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkA href="https://help.anystay.com.au/en/collections/3862266-guests" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Help for guests</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7007327-changes" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Change request</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7007448-refunds" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Refund request</FooterLink>
                    </FooterLinkA>
                    <FooterLinkWrapper to="/referral-page">
                        <FooterLink>Invite a friend</FooterLink>
                    </FooterLinkWrapper>

                    <FooterDivider />
                </FooterLinkSection>
                <FooterLinkSection className="hidden">
                    <FooterLinkLabel>Hosting</FooterLinkLabel>
                    <FooterLinkWrapper to={userLoggedIn ? `/your-listings/1` : "/list-your-place"}>
                        <FooterLink>List your place</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper to={userLoggedIn ? `/your-listings/1` : "/list-your-place"}>
                        <FooterLink>List your room</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkA href="https://help.anystay.com.au/en/collections/3862361-hosts" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Help for hosts</FooterLink>
                    </FooterLinkA>
                    <FooterLinkWrapper to={`/your-listings/1`}>
                        <FooterLink>Manage listings</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7016728-how-to-start-hosting" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Getting started</FooterLink>
                    </FooterLinkA>
                    <FooterLinkWrapper to="/referral-page">
                        <FooterLink>Refer a host</FooterLink>
                    </FooterLinkWrapper>
                    <FooterDivider />
                </FooterLinkSection>
                <FooterLinkSection className="hidden">
                    <FooterLinkLabel>Support</FooterLinkLabel>
                    <FooterLinkA href="https://help.anystay.com.au/" target={window.innerWidth > 768 ? "_blank" : ""} rel="noopener norefferer">
                        <FooterLink>Help Center</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7007340-cancellations">
                        <FooterLink>Cancellations</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7007327-changes">
                        <FooterLink>Changes</FooterLink>
                    </FooterLinkA>
                    <FooterLinkA href="https://help.anystay.com.au/en/articles/7007403-deposits">
                        <FooterLink>Deposits</FooterLink>
                    </FooterLinkA>
                    <FooterLinkWrapper to="/terms-and-conditions">
                        <FooterLink>Term of use</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper to="/privacy-policy">
                        <FooterLink>Privacy policy</FooterLink>
                    </FooterLinkWrapper>
                    <FooterDivider />
                </FooterLinkSection>

                <FooterMobileMediaSection>
                    <FooterSocialTermsLinkWrapper className="reverse">
                        {/* <FooterTermsWrapper>
                        <FooterTermsLink to="/terms-and-conditions">Terms</FooterTermsLink>
                        <FooterTermsLink to="/privacy-policy">Privacy</FooterTermsLink>
                    </FooterTermsWrapper> */}
                        <FooterSocialMediaWrapper>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anystay.com.au/">
                                <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Footer/ig1.png"} alt={"instagram icon"} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/anystay.com.au/">
                                <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Footer/fb1.png"} alt={"Facebook icon"} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/anystay.com.au/">
                                <FooterSocialMediaIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg"} alt={"Tiktok icon"} />
                            </a>
                        </FooterSocialMediaWrapper>
                    </FooterSocialTermsLinkWrapper>
                    <FooterCopyrightWrapper>
                        <FooterCopyrightText>© 2023, Anystay Pty Ltd</FooterCopyrightText>
                    </FooterCopyrightWrapper>
                </FooterMobileMediaSection>
            </FooterWrapper>
        </Footer>
    );
};

export default FooterComponent;
