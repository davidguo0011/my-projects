import { NavbarMenuRedDot, NavbarProfileNotificationImage } from "../../../components/navbar/desktopNavbar/navbarStyling";
import {
    SettingsHostPayoutCard,
    SettingsHostPayoutCardEarning,
    SettingsHostPayoutCardHeader,
    SettingsHostPayoutCardSubTitle,
    SettingsHostPayoutCardTitle,
    SettingsHostPayoutCardWrapper,
    SettingsLinkRightArrow,
    SettingsLinkTitleIcon,
    SettingsLinkTitleText,
    SettingsLinkTitleWrapper,
    SettingsLinkWrapper,
    SettingsLinksWrapper,
    SettingsLogoutButton,
    SettingsMobileContainer,
    SettingsMobileHeader,
    SettingsMobileHeaderBellIconWrapper,
    SettingsMobileHeaderHost,
    SettingsMobileHeaderLink,
    SettingsProfileBio,
    SettingsProfileInfoHostName,
    SettingsProfileInfoHostNameWrapper,
    SettingsProfileInfoHostTextWrapper,
    SettingsProfileInfoHostTitle,
    SettingsProfileInfoName,
    SettingsProfileInfoPfp,
    SettingsProfileInfoStat,
    SettingsProfileInfoStatNum,
    SettingsProfileInfoStatTitle,
    SettingsProfileInfoStatsWrapper,
    SettingsProfileInfoWrapper,
    SettingsReferralBanner,
    SettingsReferralBannerIcon,
    SettingsReferralBannerLink,
    SettingsReferralBannerText,
    SettingsSwitchModeButton,
    SettingsVersionText,
    SettingsHeaderImage,
} from "./settingsMobileStyling";
import { SettingsLink } from "../settingsStyling";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../utils/auth/logoutUser";
import { useCallback, useEffect, useState } from "react";
import { callApi } from "../../../utils/api/api";
import { useRecoilState } from "recoil";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { UserModel } from "../../../interfaces/models/userModel";
import { UserHostModel } from "../../../interfaces/models/userHostModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import NotificationDropDown from "../../../components/navbar/notifications/notifications";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";

import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { isUserChangePriceSelector } from "../../../state/selectors/isUserChangePrice";

interface SettingsMobileProps {
    userHostModel: UserHostModel | null;
    userModel: UserModel;
    setSwitchModeCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingsMobile({ userHostModel, userModel, setSwitchModeCard }: SettingsMobileProps) {
    const [reviews, setReviews] = useState([]);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [notificationsPopup, setNotificationsPopup] = useState(false);

    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const navigate = useNavigate();
    const id = userModel.id;
    const getProfile = useCallback(async () => {
        await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, `user/guest/profile/${id}`)
            .then(async (res) => {
                setReviews(res.body.userModel.ReviewGuestModel ? res.body.userModel.ReviewGuestModel.items : []);
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });
    }, [id]);
    const fetchBookings = useCallback(
        async (accessToken: string) => {
            try {
                if (!userHostModel) return;
                let bookingRequestsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/bookings", {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        userHostModelId: userHostModel.id,
                        today: new Date().toString(),
                    },
                });
                setTotalEarnings(bookingRequestsData.body.totalEarning);
            } catch (err) {
                console.log(err);
            }
        },
        [userHostModel]
    );

    useEffect(() => {
        getProfile();
        if (userModel && !userModel.guestMode) {
            fetchBookings(accessToken);
        }
    }, [getProfile, accessToken, fetchBookings, userModel]);

    return (
        <>
            <SettingsMobileContainer>
                <SettingsMobileHeader isGuestMode={userModel.guestMode}>
                    {userModel.guestMode ? (
                        <>
                            <SettingsMobileHeaderLink to={`/edit-profile`}>Edit</SettingsMobileHeaderLink>
                            <SettingsMobileHeaderBellIconWrapper
                                onTouchEnd={() => {
                                    setNotificationsPopup(true);
                                }}
                            >
                                <NavbarProfileNotificationImage src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png"} alt={"Any stay nofications"} />
                                {/* <NavbarMenuRedDot style={{ margin: "0", position: "absolute", right: "-4px", top: "-4px" }} /> */}
                            </SettingsMobileHeaderBellIconWrapper>
                        </>
                    ) : (
                        <>
                            <SettingsMobileHeaderHost>Profile</SettingsMobileHeaderHost>
                            <SettingsMobileHeaderBellIconWrapper
                                onTouchEnd={() => {
                                    setNotificationsPopup(true);
                                }}
                            >
                                <NavbarProfileNotificationImage src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png"} alt={"Any stay nofications"} />
                                {/* <NavbarMenuRedDot style={{ margin: "0", position: "absolute", right: "-4px", top: "-4px" }} /> */}
                            </SettingsMobileHeaderBellIconWrapper>
                        </>
                    )}
                </SettingsMobileHeader>
                <SettingsProfileInfoWrapper isGuestMode={userModel.guestMode}>
                    <SettingsProfileInfoPfp isGuestMode={userModel.guestMode}>
                        <SettingsHeaderImage
                            src={
                                userModel.profilePicture
                                    ? constructOptimisedProtectedImageUrl(userModel.profilePicture, userModel.identityID, 100)
                                    : "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"
                            }
                            alt={"profile pic"}
                        />
                    </SettingsProfileInfoPfp>
                    {userModel.guestMode ? (
                        <>
                            <SettingsProfileInfoName>{userModel.firstName}</SettingsProfileInfoName>
                            <SettingsProfileInfoStatsWrapper>
                                <SettingsProfileInfoStat>
                                    <SettingsProfileInfoStatNum>{userModel.BookingRequestModels.items.length}</SettingsProfileInfoStatNum>
                                    <SettingsProfileInfoStatTitle>Stays</SettingsProfileInfoStatTitle>
                                </SettingsProfileInfoStat>
                                <SettingsProfileInfoStat>
                                    <SettingsProfileInfoStatNum>{userModel.BookingRequestModels.items.length * 3 + 1}</SettingsProfileInfoStatNum>
                                    <SettingsProfileInfoStatTitle>Nights</SettingsProfileInfoStatTitle>
                                </SettingsProfileInfoStat>
                                <SettingsProfileInfoStat>
                                    <SettingsProfileInfoStatNum>{reviews.length}</SettingsProfileInfoStatNum>
                                    <SettingsProfileInfoStatTitle>Reviews</SettingsProfileInfoStatTitle>
                                </SettingsProfileInfoStat>
                            </SettingsProfileInfoStatsWrapper>
                        </>
                    ) : (
                        <SettingsProfileInfoHostTextWrapper>
                            <SettingsProfileInfoHostNameWrapper>
                                <SettingsProfileInfoHostName>{userModel.firstName}</SettingsProfileInfoHostName>
                                <SettingsProfileInfoHostTitle>Host</SettingsProfileInfoHostTitle>
                            </SettingsProfileInfoHostNameWrapper>
                            <SettingsMobileHeaderLink to={`/edit-profile`}>Edit profile</SettingsMobileHeaderLink>
                        </SettingsProfileInfoHostTextWrapper>
                    )}
                </SettingsProfileInfoWrapper>
                {userModel.guestMode ? (
                    <SettingsProfileBio>{userModel.profileDescription === "" || userModel.profileDescription === null ? `Write a bio...` : userModel.profileDescription}</SettingsProfileBio>
                ) : (
                    <SettingsHostPayoutCardWrapper to="/payouts">
                        <SettingsHostPayoutCard>
                            <SettingsHostPayoutCardHeader>
                                <SettingsHostPayoutCardTitle>Next payout</SettingsHostPayoutCardTitle>
                                <SettingsHostPayoutCardSubTitle>Today</SettingsHostPayoutCardSubTitle>
                            </SettingsHostPayoutCardHeader>
                            <SettingsHostPayoutCardEarning>${(totalEarnings / 100).toFixed(2)} AUD</SettingsHostPayoutCardEarning>
                        </SettingsHostPayoutCard>
                    </SettingsHostPayoutCardWrapper>
                )}
                <SettingsReferralBanner>
                    {userModel.guestMode ? (
                        <SettingsReferralBannerIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Referral.svg" alt="invite a friend banner icon" />
                    ) : (
                        <SettingsReferralBannerIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Referral.svg" alt="invite a friend banner icon" />
                    )}
                    <SettingsReferralBannerText>
                        {userModel.guestMode ? "Get 10% off your stay when you invite 5 or more friends" : "Get 10% off your stay when you invite 5 or more hosts"}
                    </SettingsReferralBannerText>
                    <SettingsReferralBannerLink to={"/referral-page"}>{userModel.guestMode ? "Invite a friend" : "Refer a friend"}</SettingsReferralBannerLink>
                </SettingsReferralBanner>
                <SettingsLinksWrapper>
                    <SettingsLink to={`/edit-profile`}>
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg" alt="Edit profile icon" />
                                <SettingsLinkTitleText>Your details</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </SettingsLink>
                    <SettingsLink to="/security-settings">
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Login.svg" alt="Login info icon" />
                                <SettingsLinkTitleText>Login & sharing</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </SettingsLink>
                    <SettingsLink to={userModel ? (userModel.guestMode ? "/payment-settings" : "/payout-settings") : ""}>
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/payments+and+payouts.svg" alt="Payment info icon" />
                                <SettingsLinkTitleText>Payments & payouts</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </SettingsLink>
                    <SettingsLink to="/referral-page">
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Gift.svg" alt="invite a friend icon" />
                                <NavbarMenuRedDot style={{ position: "absolute", left: "20px", bottom: "20px" }} />
                                <SettingsLinkTitleText>Invite a friend</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </SettingsLink>
                    <a href="https://help.anystay.com.au/en/" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Help+center.svg" alt="help center icon" />
                                <SettingsLinkTitleText>Help center</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </a>
                    <a href="https://rvjc88mc1ia.typeform.com/to/VJ6eFIXJ" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <SettingsLinkWrapper>
                            <SettingsLinkTitleWrapper>
                                <SettingsLinkTitleIcon src="https://d292awxalydr86.cloudfront.net/Settings+page/Feedback.svg" alt="feedback icon" />
                                <SettingsLinkTitleText>Feedback</SettingsLinkTitleText>
                            </SettingsLinkTitleWrapper>
                            <SettingsLinkRightArrow src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="setting link right arrow" />
                        </SettingsLinkWrapper>
                    </a>
                </SettingsLinksWrapper>
                {userModel.guestMode ? (
                    <SettingsSwitchModeButton
                        onClick={() => {
                            if (userHostModel && userHostModel.ListingModels.items.length > 0) {
                                navigate("/dashboard");
                            } else {
                                setSwitchModeCard(true);
                            }
                        }}
                    >
                        Switch to hosting
                    </SettingsSwitchModeButton>
                ) : (
                    <SettingsSwitchModeButton
                        onClick={() => {
                            const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                            searchFiltersCopy.category = "all";
                            setSearchFilters(searchFiltersCopy);
                            setIsUserChangePrice(false);
                            navigate("/");
                        }}
                    >
                        Switch to staying
                    </SettingsSwitchModeButton>
                )}
                <SettingsVersionText>1.0.9</SettingsVersionText>
                <SettingsLogoutButton
                    onClick={async () => {
                        await logoutUser();
                        navigate("/");
                    }}
                >
                    Log out
                </SettingsLogoutButton>
            </SettingsMobileContainer>
            {notificationsPopup && (
                <GlobalPopupContainerFullScreen noContentWrapper mobileHeight="100%" backBtnOnClick={() => setNotificationsPopup(false)}>
                    <NotificationDropDown notificationsPopup={notificationsPopup} closeNotificationDropDown={() => setNotificationsPopup(false)} setNotificationsPopup={setNotificationsPopup} />
                </GlobalPopupContainerFullScreen>
            )}
        </>
    );
}
