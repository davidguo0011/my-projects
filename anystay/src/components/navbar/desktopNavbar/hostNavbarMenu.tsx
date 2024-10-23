import { Fragment, useState, useEffect } from "react";
import { NavbarDesktopMenuWrapper, NavbarDesktopMenuButton, NavbarDesktopMenuButtonWrapper, NavbarDesktopMenuButtonBorderBottom } from "./navbarStyling";
import { useLocation } from "react-router-dom";

import { userHostModelSelector, userHostConversationsModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState, useRecoilValue } from "recoil";
export default function HostNavbarDesktopMenu() {
    const [menuIndex, setMenuIndex] = useState(0);
    const [menuHidden, setMenuHidden] = useState(false);
    const location = useLocation();
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const userHostConversations = useRecoilValue(userHostConversationsModelSelector);

    // Check if menu should be hidden on current page
    useEffect(() => {
        if (
            location.pathname.includes("/create-listing") ||
            location.pathname.includes("/profile") ||
            location.pathname.includes("/edit-profile") ||
            location.pathname === "/settings" ||
            location.pathname.includes("/booking-request") ||
            location.pathname.includes("payment-details") ||
            location.pathname.includes("edit-listing")
        ) {
            setMenuHidden(true);
        } else {
            setMenuHidden(false);
        }
        if (location.pathname === "/dashboard") {
            setMenuIndex(0);
        } else if (location.pathname.includes("/host-conversation")) {
            setMenuIndex(1);
        } else if (location.pathname === "/your-calendar") {
            setMenuIndex(2);
        } else if (location.pathname.includes("/your-listings")) {
            setMenuIndex(3);
        } else if (location.pathname === "/payouts") {
            setMenuIndex(4);
        }
    }, [location]);

    return (
        <Fragment>
            {!menuHidden && (
                <NavbarDesktopMenuWrapper>
                    <NavbarDesktopMenuButtonWrapper>
                        <NavbarDesktopMenuButton type="button" selected={menuIndex === 0} to="/dashboard">
                            Home
                        </NavbarDesktopMenuButton>
                        {menuIndex === 0 && <NavbarDesktopMenuButtonBorderBottom />}
                    </NavbarDesktopMenuButtonWrapper>
                    <NavbarDesktopMenuButtonWrapper>
                        <NavbarDesktopMenuButton
                            type="button"
                            selected={menuIndex === 1}
                            to={userHostModel && userHostConversations && userHostConversations.length > 0 ? `/host-conversation/${userHostConversations[0].id}` : "/host-conversation/null"}
                        >
                            Inbox
                        </NavbarDesktopMenuButton>
                        {menuIndex === 1 && <NavbarDesktopMenuButtonBorderBottom />}
                    </NavbarDesktopMenuButtonWrapper>
                    <NavbarDesktopMenuButtonWrapper>
                        <NavbarDesktopMenuButton type="button" selected={menuIndex === 2} to="/your-calendar">
                            Calendar
                        </NavbarDesktopMenuButton>
                        {menuIndex === 2 && <NavbarDesktopMenuButtonBorderBottom />}
                    </NavbarDesktopMenuButtonWrapper>
                    <NavbarDesktopMenuButtonWrapper>
                        <NavbarDesktopMenuButton type="button" selected={menuIndex === 3} to={userHostModel ? `/your-listings/${userHostModel.id}` : ""}>
                            Listings
                        </NavbarDesktopMenuButton>
                        {menuIndex === 3 && <NavbarDesktopMenuButtonBorderBottom />}
                    </NavbarDesktopMenuButtonWrapper>
                    <NavbarDesktopMenuButtonWrapper>
                        <NavbarDesktopMenuButton type="button" selected={menuIndex === 4} to="/payouts">
                            Payouts
                        </NavbarDesktopMenuButton>
                        {menuIndex === 4 && <NavbarDesktopMenuButtonBorderBottom />}
                    </NavbarDesktopMenuButtonWrapper>
                </NavbarDesktopMenuWrapper>
            )}
        </Fragment>
    );
}
