import { userModelSelector, guestModeSelector } from "../../../../state/selectors/userModel";
import { signInMenuActivatedSelector } from "../../../../state/selectors/navbarToggle";
import { userHostModelSelector } from "../../../../state/selectors/userHostModel";
import { draftListingSelector } from "../../../../state/selectors/draftListing";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
import {
    NavbarProfileImage,
    NavbarProfileNotificationWrapper,
    NavbarProfileNotificationImage,
    NavbarCreateListingExitButton,
    NavbarProfileImageButton,
    NavbarDesktopListYourPlaceWrapper,
    NavbarRightContentWrapper,
    NavbarCreateListingIcon,
    NavbarMenuRedDot,
} from "../navbarStyling";
import { useState, useEffect } from "react";
import ContinueBtn from "../../../btn/continueBtn/continueBtn";
import NavbarMenu from "../navbarDropDownMenu";
import { directToAfterLoginSelector } from "../../../../state/selectors/directToAfterLogin";
import constructOptimisedProtectedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";
import NotificationDropDown from "../../notifications/notifications";
import { searchFiltersSelector } from "../../../../state/selectors/searchQuery";
import { isUserChangePriceSelector } from "../../../../state/selectors/isUserChangePrice";

interface LocationBasedComponentsProps {
    navbarMenu: boolean;
    setNavbarMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setNotificationsPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setSaveAndExitPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setNavbarSearchMenuActivated: React.Dispatch<React.SetStateAction<boolean>>;
    loggingIn: boolean;
    notificationsPopup: boolean;
}

export default function LocationBasedComponents({
    navbarMenu,
    setNavbarMenu,
    setNotificationsPopup,
    setSaveAndExitPopup,
    loggingIn,
    setNavbarSearchMenuActivated,
    notificationsPopup,
}: LocationBasedComponentsProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const [draftListing, setDraftListing] = useRecoilState(draftListingSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [guestMode, setGuestMode] = useRecoilState(guestModeSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [directToAfterLogin, setDirectToAfterLogin] = useRecoilState(directToAfterLoginSelector);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [profilePic, setProfilePic] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [hideBtn, setHideBtn] = useState(true);

    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const createListingBtnOnClick = async () => {
        if (userHostModel) {
            setIsContinueBtnLoading(true);
            navigate(`/create-listing/${userHostModel && userHostModel.id}`);
        } else {
            setSignInMenuActivated(true);
            setDirectToAfterLogin("create-listing");
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 333) {
                setHideBtn(false);
            } else {
                setHideBtn(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (userModel && userModel.profilePicture && userModel.identityID) {
            const profilePic = constructOptimisedProtectedImageUrl(userModel.profilePicture, userModel.identityID, 100);
            setProfilePic(profilePic);
        } else {
            setProfilePic("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
        }
    }, [userModel]);

    const renderListYourPlaceOrSwitchToStaying = () => {
        if (userModel) {
            if (!guestMode) {
                return (
                    <NavbarDesktopListYourPlaceWrapper
                        onClick={() => {
                            const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                            searchFiltersCopy.category = "all";
                            setSearchFilters(searchFiltersCopy);
                            setIsUserChangePrice(false);
                            navigate("/");
                        }}
                    >
                        Switch to staying
                    </NavbarDesktopListYourPlaceWrapper>
                );
            }
        }
        if (userHostModel && userHostModel.ListingModels.items.length > 0) {
            return (
                <NavbarDesktopListYourPlaceWrapper
                    onClick={() => {
                        setNavbarSearchMenuActivated(false);
                        setNavbarMenu(false);
                        navigate("/dashboard");
                    }}
                >
                    Switch to hosting
                </NavbarDesktopListYourPlaceWrapper>
            );
        }
        return (
            <NavbarDesktopListYourPlaceWrapper
                onClick={(e) => {
                    e.stopPropagation();
                    setNavbarSearchMenuActivated(false);
                    setNavbarMenu(false);
                    navigate("/list-your-place");
                }}
            >
                Create a listing
            </NavbarDesktopListYourPlaceWrapper>
        );
    };

    if (location.pathname.includes("/booking-request")) return null;

    if (location.pathname.includes("/create-listing")) {
        return (
            <>
                {draftListing.draftListing ? (
                    <NavbarCreateListingExitButton type="button" onClick={() => setSaveAndExitPopup(true)}>
                        {window.innerWidth > 768 ? "Exit" : "Exit"}
                    </NavbarCreateListingExitButton>
                ) : (
                    <NavbarCreateListingExitButton type="button" onClick={() => navigate(userHostModel ? `/your-listings/${userHostModel.id}` : "/your-listings")}>
                        Exit
                    </NavbarCreateListingExitButton>
                )}
            </>
        );
    }
    if (location.pathname.includes("/list-your-place") && window.innerWidth >= 768) {
        if (hideBtn) {
            return null;
        } else {
            return (
                <ContinueBtn
                    isLoading={isContinueBtnLoading}
                    background={"black"}
                    disabled={isContinueBtnLoading}
                    style={{ width: "unset", padding: "0 24px 0 20px", marginTop: "0", height: "48px", fontSize: "16px", borderRadius: "90px" }}
                    continueType="button"
                    onClick={createListingBtnOnClick}
                >
                    <NavbarCreateListingIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="10.5" width="3" height="24" rx="1.5" fill={ColorTheme.White.color} />
                        <rect y="13.5" width="3" height="24" rx="1.5" transform="rotate(-90 0 13.5)" fill={ColorTheme.White.color} />
                    </NavbarCreateListingIcon>
                    Create a listing
                </ContinueBtn>
            );
        }
    }
    return (
        <NavbarRightContentWrapper location={location.pathname}>
            {renderListYourPlaceOrSwitchToStaying()}
            <NavbarProfileNotificationWrapper>
                <NavbarProfileNotificationImage
                    onClick={() => {
                        setNavbarSearchMenuActivated(false);
                        setNavbarMenu(false);
                        if (userModel) {
                            setNotificationsPopup(true);
                        } else {
                            setSignInMenuActivated(true);
                        }
                    }}
                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png"}
                    alt={"Any stay nofications"}
                />
                {/* <NavbarMenuRedDot style={{ margin: "0", position: "absolute", right: "4px", top: "4px" }} /> */}
            </NavbarProfileNotificationWrapper>

            {window.innerWidth >= 768 && (
                <NavbarProfileImageButton>
                    <NavbarProfileImage
                        src={profilePic}
                        alt="profile picture"
                        onClick={() => {
                            setNotificationsPopup(false);
                            setNavbarSearchMenuActivated(false);
                            setNavbarMenu(true);
                        }}
                    />
                    {navbarMenu && <NavbarMenu closeNavbarMenu={() => setNavbarMenu(false)} navbarMenu={navbarMenu} setNavbarMenu={setNavbarMenu} />}
                    {notificationsPopup && (
                        <NotificationDropDown notificationsPopup={notificationsPopup} closeNotificationDropDown={() => setNotificationsPopup(false)} setNotificationsPopup={setNotificationsPopup} />
                    )}
                </NavbarProfileImageButton>
            )}
        </NavbarRightContentWrapper>
    );
}
