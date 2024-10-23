import { useState } from "react";
import {
    SettingsContainer,
    SettingsCardWrapper,
    SettingsTitle,
    SettingsCard,
    SettingsCardTitle,
    SettingsCardIcon,
    SettingsCardTitleWrapper,
    SettingsCardSubtitle,
    SettingsListPlaceCard,
    SettingsListPlaceCardContent,
    SettingsListPlaceCardTitle,
    SettingsLink,
    SettingsTitleWrapper,
    SettingsSwitchUserModeButton,
    PayoutNoticeBarWrapper,
    PayoutNoticeBarTitle,
    PayoutNoticeBarSubtitle,
    ProfileLogOutButton,
} from "./settingsStyling";
import Footer from "../../components/footer/footer";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import { userModelSelector } from "../../state/selectors/userModel";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/auth/logoutUser";
import HelmetTags from "../../components/Helmet/HelmetTags";
import useIsDesktopSize from "../../hook/useIsDesktopSize";
import SettingsMobile from "./mobile/settingsMobile";
import { NavbarMenuRedDot } from "../../components/navbar/desktopNavbar/navbarStyling";
import SwitchGuestModeCardModal from "./switchGuestModeCardModal/SwitchGuestModeCardModal";

import { searchFiltersSelector } from "../../state/selectors/searchQuery";
import { isUserChangePriceSelector } from "../../state/selectors/isUserChangePrice";

export default function Settings() {
    const [switchModeCard, setSwitchModeCard] = useState(false);

    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);

    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const navigate = useNavigate();

    const isDesktopSize = useIsDesktopSize();

    if (!userModel) {
        return null;
    }

    const SettingPayoutNoticeBar = () => {
        return (
            <PayoutNoticeBarWrapper to={"/payouts"}>
                <PayoutNoticeBarTitle>Pending</PayoutNoticeBarTitle>
                <PayoutNoticeBarSubtitle>$0.00 AUD</PayoutNoticeBarSubtitle>
            </PayoutNoticeBarWrapper>
        );
    };

    return (
        <>
            <HelmetTags title="Profile | Anystay" />
            <MobileNavbar />
            {switchModeCard && <SwitchGuestModeCardModal switchModeCard={switchModeCard} setSwitchModeCard={setSwitchModeCard} />}
            {!isDesktopSize ? (
                <SettingsMobile userModel={userModel} userHostModel={userHostModel} setSwitchModeCard={setSwitchModeCard} />
            ) : (
                <>
                    <SettingsContainer>
                        <SettingsTitleWrapper>
                            <SettingsTitle>{userModel.firstName}</SettingsTitle>
                        </SettingsTitleWrapper>
                        <SettingsCardWrapper>
                            {window.innerWidth < 768 && userModel && userModel.guestMode === false && <SettingPayoutNoticeBar />}
                            <SettingsLink to={`/edit-profile`}>
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg"} alt={"Edit profile icon"} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Edit profile</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Personal information and
                                        <br /> contact details
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </SettingsLink>
                            <SettingsLink to="/security-settings">
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Login.svg"} alt={"Login info icon"} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Login & sharing</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Password reset and social
                                        <br /> sharing preferences
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </SettingsLink>
                            <SettingsLink to={userModel ? (userModel.guestMode ? "/payment-settings" : "/payout-settings") : ""}>
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/payments+and+payouts.svg"} alt={"Payment info icon"} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Payments & payouts</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Payment methods, payouts,
                                        <br /> taxes and coupons
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </SettingsLink>
                            <SettingsLink to="/referral-page">
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Gift.svg"} alt={"Payment info icon"} />
                                    <NavbarMenuRedDot style={{ position: "absolute", left: "44px", top: "23px" }} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Invite a friend</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Payment methods, payouts,
                                        <br /> taxes and coupons
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </SettingsLink>
                            <a href="https://help.anystay.com.au/en/" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Help+center.svg"} alt={"help center icon"} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Help center</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Payment methods, payouts,
                                        <br /> taxes and coupons
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </a>
                            <a style={{ textDecoration: "none" }} href="https://rvjc88mc1ia.typeform.com/to/VJ6eFIXJ" target="_blank" rel="noopener noreferrer">
                                <SettingsCard>
                                    <SettingsCardIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Feedback.svg"} alt={"feedback icon"} />
                                    <SettingsCardTitleWrapper>
                                        <SettingsCardTitle>Feedback</SettingsCardTitle>
                                    </SettingsCardTitleWrapper>
                                    <SettingsCardSubtitle>
                                        Help us improve Anystay by
                                        <br /> giving your feedback
                                    </SettingsCardSubtitle>
                                </SettingsCard>
                            </a>
                        </SettingsCardWrapper>

                        {window.innerWidth > 768 && (
                            <SettingsListPlaceCard type="button" onClick={() => navigate("/list-your-place")}>
                                <SettingsListPlaceCardContent>
                                    <SettingsListPlaceCardTitle>Host stays with any place</SettingsListPlaceCardTitle>
                                </SettingsListPlaceCardContent>
                            </SettingsListPlaceCard>
                        )}

                        {userModel.guestMode ? (
                            <SettingsSwitchUserModeButton
                                onClick={() => {
                                    if (userHostModel && userHostModel.ListingModels.items.length > 0) {
                                        navigate("/dashboard");
                                    } else {
                                        setSwitchModeCard(true);
                                    }
                                }}
                                type="button"
                            >
                                Switch to hosting
                            </SettingsSwitchUserModeButton>
                        ) : (
                            <SettingsSwitchUserModeButton
                                onClick={() => {
                                    const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                                    searchFiltersCopy.category = "all";
                                    setSearchFilters(searchFiltersCopy);
                                    setIsUserChangePrice(false);
                                    navigate("/");
                                }}
                                type="button"
                            >
                                Switch to staying
                            </SettingsSwitchUserModeButton>
                        )}
                    </SettingsContainer>
                    {window.innerWidth < 768 && (
                        <ProfileLogOutButton
                            onClick={async () => {
                                await logoutUser();
                                navigate("/");
                            }}
                        >
                            Log out
                        </ProfileLogOutButton>
                    )}
                    <Footer />
                </>
            )}
        </>
    );
}
