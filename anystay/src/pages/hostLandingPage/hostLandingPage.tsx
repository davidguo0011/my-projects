import { useState, useEffect } from "react";
import {
    HostLandingPageContainer,
    HostLandingPageTitleWrapper,
    HostLandingPageTitle,
    HostLandingPageSubtitle,
    HostLandingPageButtonWrapper,
    HostlandingPageContentWrapper,
    HostLandingContentWrapper,
    HostLandingContentTitle,
    HostLandingContentSubtitle,
    HostLandingContentGrid,
    HostLandingPageMobileBtnWrapper,
    CreateListingBtn,
    HostLandingPageTextWrapper,
    HostLandingCreateListingIcon,
    HostLandingContent,
} from "./hostLandingPageStyling";
import FAQQuestionContent from "./FAQQuestion/FAQQuestionContent";
import ContinueBtn from "../../components/btn/continueBtn/continueBtn";
import OurPartners from "./OutPartners/OurPartners";
import { signInMenuActivatedSelector } from "../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import Footer from "../../components/footer/footer";
import { directToAfterLoginSelector } from "../../state/selectors/directToAfterLogin";
import HelmetTags from "../../components/Helmet/HelmetTags";
import useClickOutside from "../../hook/useClickOutside";
import { jsonLd } from "./seo/jsonLd";
import OtherHostListing from "./OtherHostListings/OtherHostListing";
import SupportBtn from "../../components/btn/supportBtn/supportBtn";
import { useLocation } from "react-router-dom";
import HostingTools from "./HostingTools/hostingTools";
import HeroListingCard from "./heroListingCard/heroListingCard";
import { ColorTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

const HostLandingPage: React.FC = () => {
    const [directToAfterLogin, setDirectToAfterLogin] = useRecoilState(directToAfterLoginSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const navigate = useNavigate();
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [showMobileCreateListingBtn, setShowMobileCreateListingBtn] = useState(false);

    const [inTercomOpened, setIntercomOpened] = useState(false);
    const location = useLocation();

    const scrollHandler = () => {
        if (window.scrollY > 250) {
            setShowMobileCreateListingBtn(true);
        } else {
            setShowMobileCreateListingBtn(false);
        }
    };
    useEffect(() => {
        if (window.innerWidth < 768) {
            window.addEventListener("scroll", scrollHandler);
        }
        return () => {
            if (window.innerWidth < 768) {
                window.removeEventListener("scroll", scrollHandler);
            }
        };
    }, []);

    const createListingBtnOnClick = async () => {
        if (userHostModel) {
            setIsContinueBtnLoading(true);
            navigate(`/create-listing/${userHostModel && userHostModel.id}`);
        } else {
            setSignInMenuActivated(true);
            setDirectToAfterLogin("create-listing");
        }
    };

    const handleClick = () => {
        if (!inTercomOpened) {
            (window as any).Intercom("showNewMessage", "");
            setIntercomOpened(true);
        } else {
            (window as any).Intercom("hide");
            setIntercomOpened(false);
        }
    };
    const wrapperRef = useClickOutside<HTMLButtonElement>(inTercomOpened, handleClick, true);

    return (
        <>
            <HelmetTags title="List your place | Anystay" jsonLd={jsonLd} />
            <HostLandingPageContainer>
                <HostLandingPageTitleWrapper>
                    <HostlandingPageContentWrapper>
                        <HostLandingPageTextWrapper>
                            <HostLandingPageTitle>
                                You could earn
                                <br /> $6046 monthly <br />
                                in Australia.
                            </HostLandingPageTitle>
                            <HostLandingPageSubtitle>List & start earning with Anystay.</HostLandingPageSubtitle>
                            <HostLandingPageButtonWrapper>
                                <CreateListingBtn
                                    isLoading={isContinueBtnLoading}
                                    background={"black"}
                                    disabled={isContinueBtnLoading}
                                    style={{ width: "unset", padding: "0 24px 0 20px", marginTop: "0", height: "48px", fontSize: "16px" }}
                                    // continueType="button"
                                    onClick={createListingBtnOnClick}
                                >
                                    <HostLandingCreateListingIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="10.5" width="3" height="24" rx="1.5" fill={ColorTheme.White.color} />
                                        <rect y="13.5" width="3" height="24" rx="1.5" transform="rotate(-90 0 13.5)" fill={ColorTheme.White.color} />
                                    </HostLandingCreateListingIcon>
                                    Create a listing
                                </CreateListingBtn>
                                {/* <HostLandingPageContactTeamBtn onClick={handleClick} ref={wrapperRef}>
                                    Chat with us
                                </HostLandingPageContactTeamBtn> */}
                            </HostLandingPageButtonWrapper>
                        </HostLandingPageTextWrapper>
                        <HeroListingCard />
                    </HostlandingPageContentWrapper>
                </HostLandingPageTitleWrapper>
                <HostLandingContentWrapper>
                    <HostLandingContentGrid>
                        <HostLandingContent>
                            <HostLandingContentTitle>Unlock a new revenue channel</HostLandingContentTitle>
                            <HostLandingContentSubtitle>
                                You can use Anystay by itself or sync with your current platform to host short and long stays anywhere in Australia.
                            </HostLandingContentSubtitle>
                        </HostLandingContent>
                        <HostLandingContent>
                            <HostLandingContentTitle>Earn more with every booking</HostLandingContentTitle>
                            <HostLandingContentSubtitle>Get paid more with every booking when you host flexible stays from a single night to many months.</HostLandingContentSubtitle>
                        </HostLandingContent>
                        <HostLandingContent>
                            <HostLandingContentTitle style={{ padding: "0px" }}>Get 24/7 Australian support</HostLandingContentTitle>
                            <HostLandingContentSubtitle style={{ padding: "0px" }}>
                                We're from Brisbane, Australia! Anystay is proudly built by a passionate team of hosts from around Australia.
                            </HostLandingContentSubtitle>
                        </HostLandingContent>
                    </HostLandingContentGrid>
                </HostLandingContentWrapper>
                <OtherHostListing createListingBtnOnClick={createListingBtnOnClick} />
                {/* <HostLandingPlaceHolder
                    src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/sunrise1181mtcootthajenmendez_20160302_wide.webp"}
                    alt="Search icon"
                /> */}
                <HostingTools />
                <OurPartners />
                {/* <ScrollContent /> */}
                <FAQQuestionContent />
                <HostLandingPageMobileBtnWrapper hide={window.innerWidth < 768 && showMobileCreateListingBtn}>
                    <ContinueBtn background={"blue"} isLoading={isContinueBtnLoading} onClick={createListingBtnOnClick} disabled={isContinueBtnLoading}>
                        Create a listing
                    </ContinueBtn>
                </HostLandingPageMobileBtnWrapper>
            </HostLandingPageContainer>
            <SupportBtn handleScroll={!showMobileCreateListingBtn} path={location.pathname} />
            <Footer />
        </>
    );
};

export default HostLandingPage;
