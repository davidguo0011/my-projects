import styled from "styled-components";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import { motion } from "framer-motion";
import { TextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

// Navbar component styling
interface NavbarProps {
    navbarMenu: boolean;
    location: string;
}
export const Navbar = styled.nav<NavbarProps>`
    position: relative;
    @media (max-width: 767px) {
        position: ${(props) => (props.navbarMenu ? "fixed" : "relative")};
        display: ${(props) => (props.location.includes("/search") || props.location === "/" ? "none" : "flex")};
    }
    z-index: 101;
    background: ${ColorTheme.White.color};
    margin: 0 auto;
    width: 100%;
    height: 60px;
    padding: 0 24px;
    display: ${(props) => (props.location.includes("/create-booking") || props.location.includes("/complete-booking") ? "none" : "flex")};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    @media (min-width: 768px) {
        //home padding
        display: ${(props) => (props.location.includes("/create-booking") || props.location.includes("/complete-booking") || props.location.includes("hospitable")) && "none"};
        height: 80px;
        border-bottom: ${(props) =>
            props.location.includes("/your-stays") ||
            props.location.includes("/saved-listings") ||
            props.location.includes("/settings") ||
            props.location.includes("/edit-profile") ||
            props.location.includes("/profile") ||
            props.location.includes("/security-settings") ||
            props.location.includes("/payment-settings") ||
            props.location.includes("/dashboard") ||
            props.location.includes("/booking-request") ||
            props.location.includes("/payout-settings") ||
            props.location.includes("/payouts") ||
            props.location.includes("/payment-details") ||
            props.location.includes("/booking-receipt") ||
            props.location.includes("/your-calendar") ||
            props.location.includes("/your-listings") ||
            props.location.includes("/edit-listing") ||
            props.location.includes("/all-bookings") ||
            props.location.includes("/create-booking") ||
            props.location.includes("/complete-booking") ||
            props.location.includes("/manage-payments") ||
            props.location.includes("/host-conversation") ||
            props.location.includes("/conversation")
                ? `1px solid ${ColorTheme.Grey2.color}`
                : "none"};

        ${(props) => props.location.includes("/your-stays") && "padding: 0 32px;"}
        ${(props) => props.location.includes("/booking-request") && ""}
        ${(props) => props.location.includes("/referral-page") && "padding: 0 max(calc((100% - 1280px) / 2), 80px);"};
        ${(props) => props.location.includes("/settings") && "padding: 0 32px;"}
    }
    @media (min-width: 1024px) {
        ${(props) => props.location.includes("/settings") && "padding: 0 max(32px, calc((100% - 1024px) / 2));"}
    }
    @media (min-width: 1280px) {
        ${(props) => props.location.includes("/listing") && "padding: 0 calc(50% - 570px);"}
        ${(props) => props.location.includes("/your-stays") && "padding: 0 96px;"}
    }
`;

interface NavbarWrapperProps {
    location: string;
    navbarMenu: boolean;
}
export const NavbarWrapper = styled.div<NavbarWrapperProps>`
    position: ${(props) => (props.location.includes("/listing") ? "unset" : "fixed")};
    top: 0;
    width: 100%;
    max-height: 60px;
    background: ${ColorTheme.White.color};
    //make sure the mobilenavbar menu is behind if navbarmenu is opened on mobile;
    z-index: ${(props) => (props.navbarMenu ? "1002" : "100")};
    box-shadow: rgba(0, 0, 0, 0.065);
    ${(props) => (props.location.includes("/listing") || props.location.includes("create-listing")) && "display: none;"}

    @media (max-width: 767px) {
        ${(props) =>
            props.location.includes("/listing") ||
            props.location.includes("edit-profile") ||
            props.location.includes("your-inbox") ||
            props.location.includes("your-stays") ||
            props.location.includes("settings") ||
            props.location.includes("conversation") ||
            props.location.includes("saved-listings") ||
            props.location.includes("create-booking") ||
            props.location.includes("payment-settings") ||
            props.location.includes("your-booking") ||
            props.location.includes("manage-payments") ||
            props.location.includes("your-host-inbox") ||
            props.location.includes("payouts") ||
            props.location.includes("your-listings") ||
            props.location.includes("booking-request") ||
            props.location.includes("host-profile") ||
            props.location.includes("profile") ||
            props.location.includes("payment-details") ||
            props.location.includes("edit-listing") ||
            props.location.includes("your-calendar") ||
            props.location.includes("all-bookings") ||
            props.location.includes("referral-page") ||
            props.location.includes("hospitable")
                ? "display: none;"
                : ""}
    }

    @media (min-width: 768px) {
        max-height: 80px;
        /* Desktop nav bar shadow */
        box-shadow: ${(props) => (props.location.includes("-policy") || props.location.includes("-conditions") ? "none !important" : null)};
    }
`;

// Desktop search component
export const NavbarDesktopSearchbarWrapper = styled(motion.div)`
    @media (max-width: 767px) {
        display: none;
    }

    display: flex;
    height: 54px;
    width: 468px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    align-items: center;
    padding: 0 20px;
    transition: 125ms;
    cursor: pointer;
    position: relative;
    background: ${ColorTheme.White.color};
    box-shadow:
        1px 3px 16px 0px rgba(0, 0, 0, 0.1),
        0 0 2px 0 rgba(0, 0, 0, 0.125);

    &:hover {
        box-shadow:
            1px 3px 20px 0px rgba(0, 0, 0, 0.12),
            0 0 2px 0 rgba(0, 0, 0, 0.04);
    }
`;

export const NavbarDesktopMenuWrapper = styled.div`
    @media (max-width: 767px) {
        display: none;
    }

    display: flex;
    gap: ${SpacingTheme.spacing_500.gap};
    margin: 15px auto 0;
    position: relative;
`;

interface NavbarDesktopMenuButtonProps {
    selected: boolean;
}
export const NavbarDesktopMenuButton = styled(Link)<NavbarDesktopMenuButtonProps>`
    background: none;
    border: none;
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    font-weight: ${(props) => (props.selected ? ButtonTheme.sans_button_100.fontWeight : ButtonTheme.sans_button_100.fontWeight)};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    text-decoration: none;
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    cursor: pointer;
`;

export const NavbarDesktopMenuButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 34px;
`;

export const NavbarDesktopMenuButtonBorderBottom = styled.div`
    width: 20px;
    height: 3px;
    background-color: ${ColorTheme.Black.color};

    // temporarily hidden
    display: none;
`;

export const NavbarDesktopSearchIcon = styled.img`
    height: 20px;
    width: 20px;
    margin: auto;
    object-fit: cover;
    position: realtive;
`;

export const NavbarLogoHomeButtonWrapper = styled.div`
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-self: flex-start;
    flex-grow: 1;
    flex-basis: 0;
`;
export const NavbarLogoHomeButton = styled.button`
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 36px;
    }
`;

export const NavbarLogoImage = styled.img`
    height: 32px;
    @media (min-width: 768px) {
        height: 36px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;
export const NavbarLogoImageTablet = styled.img`
    height: 32px;
    @media (min-width: 768px) {
        height: 36px;
    }
    @media (max-width: 767px), (min-width: 1025px) {
        display: none;
    }
`;

interface NavbarRightContentWrapperProps {
    location: string;
}
export const NavbarRightContentWrapper = styled.div<NavbarRightContentWrapperProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    flex-basis: 0;
`;

export const NavbarDesktopListYourPlaceWrapper = styled.button`
    @media (max-width: 1280px) {
        display: none;
    }
    padding: 11px 12px;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    text-decoration: none;
    background-color: transparent;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    cursor: pointer;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const SearchListingResultsContainerFilterIcon = styled.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
`;

export const NavbarProfileNotificationWrapper = styled.button`
    /* Notifications hidden on mobile until complete */
    display: none;
    position: relative;
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background-color: ${ColorTheme.Grey5.color};
        }
    }
`;

interface NavbarProfileUnreadNotificationAlertProps {
    guestMode: boolean;
}
export const NavbarProfileUnreadNotificationAlert = styled.div<NavbarProfileUnreadNotificationAlertProps>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => (props.guestMode ? ColorTheme.Red.color : ColorTheme.Blue.color)};
    align-self: flex-start;
    justify-self: flex-end;
`;

export const NavbarProfileNotificationImage = styled.img`
    height: 24px;
    width: 24px;
`;

export const NavbarProfileImageButton = styled.div`
    position: relative;
    z-index: 100;
    margin-left: 14px;
    width: 44px;
    height: 44px;
    transition: 125ms;
    border: 3px solid ${ColorTheme.White.color};
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.12);
    }
`;

export const NavbarProfileImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

export const NavbarMenuWrapper = styled.div`
    position: absolute;
    justify-self: flex-end;
    right: 0;
    top: 0;
    width: 100%;
    height: calc(100dvh - 60px);
    min-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    background: ${ColorTheme.White.color};
    padding: 60px ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    text-align: left;

    @media (min-width: 768px) {
        min-height: unset;
        height: fit-content;
        width: 252px;
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        padding: ${SpacingTheme.spacing_200.padding} ${SpacingTheme.spacing_350.padding};
        margin-top: 56px;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    }
`;

export const NavbarMenuTextItemWrapper = styled(Link)`
    height: 64px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;

    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const NavbarMenuTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavbarMenuText1 = styled.div`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin-bottom: 4px;
    text-align: left;
`;

export const NavbarMenuText2 = styled.div`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_200.lineHeight};
    text-align: left;
`;

export const NavbarMenuRedDot = styled.div`
    background-color: red;
    border-radius: 50%;
    margin-top: 5px;
    width: 8px;
    height: 8px;
    align-items: right;
`;

export const NavbarMenuBtn = styled.button`
    display: flex;
    height: 44px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;
    align-items: center;
    padding: 0;
    text-decoration: none;
    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const NavbarMenuItem = styled(Link)`
    display: flex;
    height: 44px;
    gap: ${SpacingTheme.spacing_300.gap};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;
    align-items: center;
    padding: 13px 20px;
    text-decoration: none;
    margin: 0 -20px;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const NavbarMenuDivider = styled.span`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_200.margin} 0;
`;

export const NavbarMenuItemMainItemOutsideLink = styled.a`
    height: 44px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
    text-decoration: none;
    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const NavbarMenuItemMainIcon = styled.img`
    height: 20px;
    width: 20px;
    margin-top: 2px;
    object-fit: cover;
`;

export const NavbarHostMenuIcon = styled.div`
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: space-evenly;
    z-index: 10;

    justify-self: flex-end;
    flex-direction: column;
`;

export const NavbarCreateListingExitButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: 0;
    cursor: pointer;
    background: none;
    border: 1px solid ${ColorTheme.Grey1.color};
    text-align: center;
    padding: 0 16px;
    height: 36px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    transition: 0.2s;
    &:hover {
        background: ${ColorTheme.Grey5.color};
        border: none;
    }
    @media (min-width: 768px) {
        padding: 0 24px;
        height: 40px;
    }
`;

// export const NavbarCreateListingExitButton = styled(Link)`
//     grid-row: 1/2;
//     grid-column: 1/2;
//     justify-self: flex-end;
//     font-size: ${TextTheme.sans_400.fontSize};
//     font-weight: ${TextTheme.sans_400.fontWeight};
//     line-height: ${TextTheme.sans_400.lineHeight};
//     color: ${ColorTheme.Blue.color};
//     margin: 0;
//     background: none;
//     border: none;
//     text-decoration: none;
// `

export const NavbarHostMenuIconBar = styled.div`
    width: 100%;
    height: 2px;
    background: ${ColorTheme.Black.color};
    transition: 0.1s;
`;

export const NavbarAutocompleteInput = styled(Autocomplete)`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    height: 32px !important;
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    justify-self: center;
    border: none;
    background: none;
    outline: none;
    padding: 0;
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    padding-bottom: 14px;
    width: 840px; /* To make the google autocomplete dropdown full width*/
    padding-left: 32px;
    margin-left: -32px;
    padding-right: calc(840px - 32px - 250px);
    &::-webkit-scrollbar {
        display: none;
    }
    &::placeholder {
        font-weight: ${TextTheme.sans_300.fontWeight} !important;
        color: ${ColorTheme.Grey.color} !important;
    }
`;

export const NavbarAutocompleteSearchText = styled.p`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    text-align: center;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`;

export const NavbarSearbarGuestWrapper = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: 19px;
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_200.fontWeight};
    text-align: left;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`;

export const NavbarSearbarDatesWrapper = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: 19px;
    color: ${ColorTheme.Grey.color};
    font-weight: ${TextTheme.sans_200.fontWeight};
    text-align: right;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`;

export const SaveAndExitPopupWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 12px);
    position: fixed;
    background: ${ColorTheme.White.color};
    z-index: 102;
    left: 0;
    bottom: 0;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 560px;
        border-radius: 14px;
        min-height: unset;
        height: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const SaveAndExitPopupContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const SaveAndExitPopupContentTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_800_bold.fontSize};
        font-weight: ${TextTheme.sans_800_bold.fontWeight};
        line-height: ${TextTheme.sans_800_bold.lineHeight};
    }
`;
export const SaveAndExitPopupContentSubtitle = styled.p`
    margin: 0;
    margin-top: 12px;
    max-width: 240px;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
`;
export const SaveAndExitPopupContentImage = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;

export const SaveAndExitPopupButtonWrapper = styled.div`
    width: calc(100% - 48px);
    padding: ${SpacingTheme.spacing_300.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        border: none;
        padding: ${SpacingTheme.spacing_400.padding} 0;
        margin: 0;
    }
`;

export const SaveAndExitPopupCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    color: ${ColorTheme.Black.color};
`;

export const SaveAndExitPopupExitButton = styled.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    text-decoration: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${ColorTheme.Blue.color};

    @media (min-width: 768px) {
        width: 104px;
    }
`;

export const SearchBarClearButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${ColorTheme.Grey3.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    align-self: center;
    margin-left: auto;
`;

export const AddDatesPopupWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    width: calc(100% - 64px);
    max-width: 840px;
    height: 480px;
    background: ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_200.padding};
    z-index: 11;

    @media (min-width: 1280px) {
        margin-left: auto;
    }
`;

export const AddDatesPopupTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_500.gap};
    margin-bottom: 32px;
`;

interface AddDatesPopupTitleProps {
    selected: boolean;
}
export const AddDatesPopupTitle = styled.p<AddDatesPopupTitleProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    padding-bottom: 7px;
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : "none")};
    margin: 0;
`;

interface NavbarSearchbarPopDownProps {
    location: string;
}
export const NavbarSearchbarPopDown = styled(motion.div)<NavbarSearchbarPopDownProps>`
    position: relative;
    width: 100%;
    height: ${(props) => (props.location.includes("/search") || props.location === "/" ? "84px" : "68px")};
    background: ${ColorTheme.White.color};
    display: flex;
    justify-content: center;
    z-index: 102;
    align-items: ${(props) => (props.location.includes("/search") || props.location === "/" ? "center" : "start")};

    @media (min-width: 768px) {
        height: 96px;
        align-items: flex-start;
    }
`;

export const NavbarSearchbarMobileSearchButton = styled.button`
    position: relative;
    height: 56px;
    padding: 0px;
    width: calc(100% - 48px);
    background: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.Grey.color};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_250.gap};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    border: 0;
    box-shadow:
        1px 3px 16px 0px rgba(0, 0, 0, 0.1),
        0 0 2px 0 rgba(0, 0, 0, 0.025);
    flex-direction: row;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const NavbarDesktopSearchIconArea = styled.div`
    position: absolute;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavbarSearchbarMobileSearchTitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const SearchListingResultsContainerFiltersSelected = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${ColorTheme.Red.color};
    margin-right: 8px;
`;

export const SearchBarClearButtonIcon = styled.img`
    height: 10px;
    width: 10px;
`;
export const SearchListingResultsContainerFilterButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    z-index: 1100;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const NavbarSearchbarMobileSearchTitle = styled.div`
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
`;

export const NavbarSearchbarMobileSearchSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: 17px;
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const NavbarSearchbarWrapperDesktop = styled(motion.div)`
    max-width: 840px;
    width: calc(100% - 64px);
    height: 64px;
    box-shadow:
        rgba(0, 0, 0, 0.1) 1px 3px 16px 0px,
        rgba(0, 0, 0, 0.04) 0px 0px 2px 0px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const NavbarSearchbarWrapperDesktopSearchButton = styled(motion.button)`
    height: 48px;
    margin-left: auto;
    margin-right: 8px;
    background: ${GradientTheme.Red.background};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    align-items: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    cursor: pointer;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    border: none;
    display: flex;
    width: 112px;
    gap: 10px;
    padding: 0 18px;
    z-index: 11;
`;

export const NavbarSearchbarWrapperDesktopSearchIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

export const NavbarSearchbarWrapperDesktopSearchLabel = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    margin: 0;
`;

interface NavbarSearchbarWrapperDesktopDatesTextProps {
    selected: boolean;
}
export const NavbarSearchbarWrapperDesktopDatesText = styled.p<NavbarSearchbarWrapperDesktopDatesTextProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${(props) => (props.selected ? TextTheme.sans_300_semi.fontWeight : TextTheme.sans_300.fontWeight)};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    margin: 0;
    z-index: 10;
`;

export const NavbarSearchbarWrapperDesktopSearchWrapper = styled(motion.div)`
    flex: 1;
    height: 100%;
    margin-left: 32px;
    display: flex;
    justify-content: space-between;
    max-width: 260px;
`;
export const NavbarSearchbarWrapperDesktopLabelInputWrapper = styled.div`
    width: 93%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`;
export const NavbarSearchbarWrapperDesktopDatesWrapper = styled.div`
    flex: 1;
    padding-left: 20px;
    height: 100%;
    padding: 13px 0 14px;
    display: flex;
    max-width: 160px;
`;
export const NavbarSearchbarWrapperDesktopDatesLabelInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`;

export const NavbarSearchbarWrapperDesktopSearchDivider = styled.div`
    width: 1px;
    height: 24px;
    background: ${ColorTheme.Grey2.color};
    margin: 0 32px 0 16px;
`;

interface NavbarSearchbarWrapperDesktopGuestsWrapperProps {
    fullWidth: boolean;
}
export const NavbarSearchbarWrapperDesktopGuestsWrapper = styled.div<NavbarSearchbarWrapperDesktopGuestsWrapperProps>`
    flex: 1;
    height: 100%;
    padding: 13px 0 14px;
    display: flex;
    max-width: ${(props) => (props.fullWidth ? "300px" : "150px")};
`;
export const NavbarSearchbarWrapperDesktopGuestsLabelInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`;

interface NavbarSearchbarWrapperDesktopGuestsTextProps {
    selected: boolean;
}
export const NavbarSearchbarWrapperDesktopGuestsText = styled.p<NavbarSearchbarWrapperDesktopGuestsTextProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${(props) => (props.selected ? TextTheme.sans_300_semi.fontWeight : TextTheme.sans_300.fontWeight)};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    margin: 0;
    z-index: 10;
    white-space: nowrap;
`;

export const DesktopNavbarSearchMenuRecommendedCitiesWrapper = styled(motion.div)`
    flex-wrap: wrap;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap} 16px;
    position: absolute;
    top: 84px;
    right: 0;
    z-index: 11;
    left: 0;
    padding: ${SpacingTheme.spacing_500.padding};
    border-radius: ${BorderRadiusTheme.radius_32.borderRadius};
    background: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 64px);
    max-width: 840px;
    z-index: 1000;
`;

export const DesktopNavbarSearchMenuRecommendedCitiesTitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Black.color};
`;

interface DesktopNavbarSearchMenuRecommendedCityProps {
    url: string;
}
export const DesktopNavbarSearchMenuRecommendedCity = styled.button<DesktopNavbarSearchMenuRecommendedCityProps>`
    flex: 1 1 calc(25% - 16px); /* Adjusted to allow 4 buttons per row */
    height: 140px;
    background: blue;
    background: linear-gradient(193deg, rgba(0, 0, 0, 0) 16.24%, rgba(0, 0, 0, 0.13) 61.47%, rgba(0, 0, 0, 0.35) 84.92%), url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    border: none;
    display: flex;
    align-items: end;
    justify-content: flex-start;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    cursor: pointer;
    padding: ${SpacingTheme.spacing_300.padding};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.White.color};
`;

export const NavbarMiniDesktopSearchbarIconWrapper = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    position: absolute;
`;
export const NavbarMiniDesktopSearchbarIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`;
export const NavbarMiniDesktopSearchbarContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

export const NavbarMiniDesktopSearchbarDateGuestsWrapper = styled.div`
    display: flex;
`;

export const NavbarMiniDesktopSearchbarDotDivider = styled.div`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: 19px;
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0 4px;
`;

export const NavbarCreateListingIcon = styled.svg`
    width: 16px;
    height: 16x;
    margin: ${SpacingTheme.spacing_300.margin} ${SpacingTheme.spacing_250.margin} ${SpacingTheme.spacing_300.margin} 0;
`;

// notification
export const NotificationDropDownWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 72px;
    padding-bottom: 16px;

    width: 100%;
    height: 100%;

    background: ${ColorTheme.White.color};

    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        position: absolute;
        top: 0;
        right: 0;

        margin-top: 56px;
        padding: ${SpacingTheme.spacing_400.padding} 0;

        width: 400px;
        /* width: 252px; */
        height: 700px;
        /* height: 440px; */

        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};

        cursor: default;
    }
`;
export const NotificationDropDownTitle = styled.h1`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    padding: 0 24px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        margin-bottom: 12px;
    }
`;
export const NotificationDropDownItem = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    padding: ${SpacingTheme.spacing_250.padding} ${SpacingTheme.spacing_400.padding};

    cursor: pointer;
    &:hover {
        background: ${ColorTheme.Grey5.color};
    }
`;
export const NotificationDropDownItemImageWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${ColorTheme.Grey3.color};
`;
export const NotificationDropDownItemImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;
export const NotificationDropDownItemText = styled.p`
    width: 55%;
    font-size: ${TextTheme.sans_400_med.fontSize};
    font-weight: ${TextTheme.sans_400_med.fontWeight};
    line-height: ${TextTheme.sans_400_med.lineHeight};
    margin-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const NotificationDropDownItemTime = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-left: auto;
`;
export const NotificationDropDownNoContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${SpacingTheme.spacing_250.gap};
    margin: ${SpacingTheme.spacing_400.margin} ${SpacingTheme.spacing_400.margin} 0;
    width: 55%;
    @media (min-width: 768px) {
        align-items: center;
        margin: 52px auto 0;
    }
`;
export const NotificationDropDownNoContentTitle = styled.h1`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    color: ${ColorTheme.Grey1.color};
    text-align: left;
    @media (min-width: 768px) {
        text-align: center;
    }
`;
export const NotificationDropDownNoContentSubTitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey1.color};
    text-align: left;
    @media (min-width: 768px) {
        text-align: center;
    }
`;
