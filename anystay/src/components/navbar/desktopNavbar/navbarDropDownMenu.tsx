import {
    NavbarMenuWrapper,
    NavbarMenuBtn,
    NavbarMenuItem,
    NavbarMenuDivider,
    NavbarMenuItemMainIcon,
    NavbarMenuItemMainItemOutsideLink,
    NavbarMenuRedDot,
    NavbarMenuTextWrapper,
    NavbarMenuTextItemWrapper,
    NavbarMenuText1,
    NavbarMenuText2,
} from "./navbarStyling";
// import ContinueBtn from "../../btn/continueBtn/continueBtn";
import { userModelSelector, guestModeSelector } from "../../../state/selectors/userModel";
import { userHostModelSelector, userHostConversationsModelSelector } from "../../../state/selectors/userHostModel";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState, useRecoilValue } from "recoil";
import { logoutUser } from "../../../utils/auth/logoutUser";
import useClickOutside from "../../../hook/useClickOutside";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { isUserChangePriceSelector } from "../../../state/selectors/isUserChangePrice";

interface NavbarDropDownMenuProps {
    closeNavbarMenu: () => void;
    navbarMenu: boolean;
    setNavbarMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarDropDownMenu({ closeNavbarMenu, navbarMenu, setNavbarMenu }: NavbarDropDownMenuProps) {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const userHostConversations = useRecoilValue(userHostConversationsModelSelector);
    const [guestMode, setGuestMode] = useRecoilState(guestModeSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);

    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);

    const wrapperRef = useClickOutside(
        navbarMenu,
        () => {
            setNavbarMenu(false);
        },
        true
    );
    const renderSwitchOrBecomeHostBtn = () => {
        if (userHostModel) {
            const renderSwitchToHost = userHostModel.ListingModels.items.length > 0;
            return (
                <NavbarMenuItem
                    to={renderSwitchToHost ? "/dashboard" : "/list-your-place"}
                    onClick={async () => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "13px 20px" }}
                >
                    {renderSwitchToHost ? "Switch to hosting" : "Become a host"}
                </NavbarMenuItem>
            );
        }
    };

    if (!userModel) {
        return (
            <NavbarMenuWrapper ref={wrapperRef}>
                {window.innerWidth < 600 && <NavbarMenuDivider style={{ margin: 0 }} />}
                <NavbarMenuBtn
                    onClick={() => {
                        setSignInMenuActivated(true);
                        closeNavbarMenu();
                    }}
                >
                    Sign up
                </NavbarMenuBtn>
                <NavbarMenuBtn
                    onClick={() => {
                        setSignInMenuActivated(true);
                        closeNavbarMenu();
                    }}
                >
                    Log in
                </NavbarMenuBtn>
                <NavbarMenuDivider />
                <NavbarMenuItem
                    to={"/list-your-place"}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "13px 20px" }}
                >
                    Become a host
                </NavbarMenuItem>
                <NavbarMenuItemMainItemOutsideLink target={window.innerWidth > 768 ? "_blank" : ""} href="https://help.anystay.com.au" style={{ gap: "12px" }}>
                    Get support
                </NavbarMenuItemMainItemOutsideLink>
                <NavbarMenuDivider />
                <NavbarMenuTextItemWrapper
                    to="/referral-page"
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                >
                    <NavbarMenuTextWrapper>
                        <NavbarMenuText1>Refer a friend</NavbarMenuText1>
                        <NavbarMenuText2>Earn 10% off</NavbarMenuText2>
                    </NavbarMenuTextWrapper>
                    <NavbarMenuRedDot />
                </NavbarMenuTextItemWrapper>
            </NavbarMenuWrapper>
        );
    } else if (guestMode) {
        return (
            <NavbarMenuWrapper ref={wrapperRef}>
                {window.innerWidth < 600 && <NavbarMenuDivider style={{ margin: 0 }} />}
                <NavbarMenuItem
                    to={
                        window.innerWidth < 768
                            ? `/your-inbox/${userModel.id}`
                            : userModel.ConversationModels.items.length > 0
                              ? `/conversation/${userModel.ConversationModels.items.at(-1)!.id}`
                              : "/conversation/null"
                    }
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(guest).svg" alt="Messages icon" />
                    Inbox
                </NavbarMenuItem>
                <NavbarMenuItem
                    to={`/your-stays/${userModel?.id}`}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Stays.svg" alt="Stays icon" />
                    Stays
                </NavbarMenuItem>
                <NavbarMenuItem
                    to={`/saved-listings/${userModel?.id}`}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Heart.svg" alt="Saved icon" />
                    Saved
                </NavbarMenuItem>
                <NavbarMenuDivider />
                {renderSwitchOrBecomeHostBtn()}
                <NavbarMenuItemMainItemOutsideLink target={window.innerWidth > 768 ? "_blank" : ""} href="https://help.anystay.com.au" style={{ gap: "12px" }}>
                    Get support
                </NavbarMenuItemMainItemOutsideLink>
                <NavbarMenuItem
                    to="/settings"
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                >
                    Profile
                </NavbarMenuItem>
                <NavbarMenuDivider />
                <NavbarMenuTextItemWrapper
                    to="/referral-page"
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                >
                    <NavbarMenuTextWrapper>
                        <NavbarMenuText1>Refer a friend</NavbarMenuText1>
                        <NavbarMenuText2>Earn 10% off</NavbarMenuText2>
                    </NavbarMenuTextWrapper>
                    <NavbarMenuRedDot />
                </NavbarMenuTextItemWrapper>
                <NavbarMenuItem
                    to="/"
                    onClick={async () => {
                        await logoutUser();
                        closeNavbarMenu();
                    }}
                >
                    Log out
                </NavbarMenuItem>
            </NavbarMenuWrapper>
        );
    } else if (!guestMode) {
        return (
            <NavbarMenuWrapper ref={wrapperRef}>
                {window.innerWidth < 600 && <NavbarMenuDivider style={{ margin: 0 }} />}
                <NavbarMenuItem
                    to={
                        window.innerWidth < 768
                            ? `/your-host-inbox/${userModel?.id}`
                            : userHostConversations && userHostConversations.length > 0
                              ? `/host-conversation/${userHostConversations.at(-1)?.id}`
                              : "/host-conversation/null"
                    }
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(host).svg" alt="Messages icon" />
                    Inbox
                </NavbarMenuItem>
                <NavbarMenuItem
                    to={`/your-calendar`}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Calendar.svg" alt="Messages icon" />
                    Calendar
                </NavbarMenuItem>
                <NavbarMenuItem
                    to={`/your-listings/${userHostModel?.id}`}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Listings.svg" alt="Messages icon" />
                    Listings
                </NavbarMenuItem>
                <NavbarMenuItem
                    to={`/payouts`}
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                    style={{ padding: "12px 20px" }}
                >
                    <NavbarMenuItemMainIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Payouts.svg" alt="Messages icon" />
                    Payouts
                </NavbarMenuItem>
                <NavbarMenuDivider />
                <NavbarMenuItem
                    to={"/"}
                    onClick={async () => {
                        const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                        searchFiltersCopy.category = "all";
                        setSearchFilters(searchFiltersCopy);
                        setIsUserChangePrice(false);
                        closeNavbarMenu();
                    }}
                >
                    Switch to staying
                </NavbarMenuItem>

                <NavbarMenuItemMainItemOutsideLink target={window.innerWidth > 768 ? "_blank" : ""} href="https://help.anystay.com.au" style={{ gap: "12px" }}>
                    Get support
                </NavbarMenuItemMainItemOutsideLink>
                <NavbarMenuItem
                    to="/settings"
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                >
                    Profile
                </NavbarMenuItem>
                <NavbarMenuDivider style={{ marginBottom: "8px" }} />

                <NavbarMenuTextItemWrapper
                    to="/referral-page"
                    onClick={() => {
                        closeNavbarMenu();
                    }}
                >
                    <NavbarMenuTextWrapper>
                        <NavbarMenuText1>Refer a friend</NavbarMenuText1>
                        <NavbarMenuText2>Earn 10% off</NavbarMenuText2>
                    </NavbarMenuTextWrapper>
                    <NavbarMenuRedDot />
                </NavbarMenuTextItemWrapper>
                <NavbarMenuItem
                    to="/"
                    onClick={async () => {
                        await logoutUser();
                        closeNavbarMenu();
                    }}
                    style={{ padding: "13px 20px" }}
                >
                    Log out
                </NavbarMenuItem>
            </NavbarMenuWrapper>
        );
    } else {
        return <></>;
    }
}
