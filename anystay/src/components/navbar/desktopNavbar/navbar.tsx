import { useEffect, useState } from "react";
import { Navbar, NavbarWrapper } from "./navbarStyling";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

// Import navbar components
import HomeButton from "./navbarHomeButton";
import HostNavbarDesktopMenu from "./hostNavbarMenu";
import MiniDesktopSearchbar from "./search/MiniDesktopSearchbar";
import NavbarSearchbarPopDownInput from "./search/NavbarSearchbarPopDownInput";
import LocationBasedComponents from "./Components/LocationBasedComponents";
// import NotificationsTray from "../notifications/notifications";
import SaveAndExitPopup from "../saveAndExitPopup/saveAndExitPopup";

// Import atom selectors
import { userModelSelector, guestModeSelector } from "../../../state/selectors/userModel";
import { mobileSearchMenuActivatedSelector, navbarSearchMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import { AnimatePresence } from "framer-motion";

interface NavbarComponentProps {
    showFullPageLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loggingIn: boolean;
}

export default function NavbarComponent({ showFullPageLoading, loggingIn }: NavbarComponentProps) {
    const location = useLocation();

    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [guestMode, setGuestMode] = useRecoilState(guestModeSelector);
    const [mobileSearchMenuActivated, setMobileSearchMenuActivated] = useRecoilState(mobileSearchMenuActivatedSelector);
    const [navbarSearchMenuActivated, setNavbarSearchMenuActivated] = useRecoilState(navbarSearchMenuActivatedSelector);

    const [navbarMenu, setNavbarMenu] = useState(false);
    const [saveAndExitPopup, setSaveAndExitPopup] = useState(false);
    //notification not in use for now
    const [notificationsPopup, setNotificationsPopup] = useState(false);
    const isDesktopSize = useIsDesktopSize();

    //mobile searchanywhere popdown and desktop search popdown
    const navbarpopdownActive = () => {
        if (!isDesktopSize && !navbarMenu && !mobileSearchMenuActivated) {
            return location.pathname === "/" || location.pathname.includes("/search");
        } else if (isDesktopSize && navbarSearchMenuActivated && !navbarMenu) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        if (mobileSearchMenuActivated) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "relative";
            document.body.style.height = "100vh";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.position = "unset";
            document.body.style.height = "unset";
            document.documentElement.style.overflow = "unset";
        }
    }, [mobileSearchMenuActivated, navbarMenu]);
    return (
        <NavbarWrapper location={location.pathname} navbarMenu={navbarMenu}>
            <Navbar location={location.pathname} navbarMenu={navbarMenu}>
                <HomeButton setNavbarMenu={setNavbarMenu} setNavbarSearchMenuActivated={setNavbarSearchMenuActivated} />

                {userModel && !guestMode ? (
                    <HostNavbarDesktopMenu />
                ) : (
                    <MiniDesktopSearchbar setNavbarSearchMenuActivated={setNavbarSearchMenuActivated} navbarpopdownActive={navbarpopdownActive()} setNavbarMenu={setNavbarMenu} />
                )}

                <LocationBasedComponents
                    navbarMenu={navbarMenu}
                    setNavbarMenu={setNavbarMenu}
                    setNotificationsPopup={setNotificationsPopup}
                    notificationsPopup={notificationsPopup}
                    setSaveAndExitPopup={setSaveAndExitPopup}
                    loggingIn={loggingIn}
                    setNavbarSearchMenuActivated={setNavbarSearchMenuActivated}
                />
            </Navbar>

            {saveAndExitPopup && <SaveAndExitPopup closeSaveAndExitPopup={() => setSaveAndExitPopup(false)} activated={saveAndExitPopup} />}
            <AnimatePresence>
                {navbarpopdownActive() && (
                    <NavbarSearchbarPopDownInput
                        setNavbarSearchMenuActivated={setNavbarSearchMenuActivated}
                        setMobileSearchMenuActivated={setMobileSearchMenuActivated}
                        active={navbarpopdownActive()}
                    />
                )}
            </AnimatePresence>
        </NavbarWrapper>
    );
}
