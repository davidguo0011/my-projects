import {
    NavbarDesktopSearchbarWrapper,
    NavbarMiniDesktopSearchbarContentWrapper,
    NavbarSearbarDatesWrapper,
    NavbarAutocompleteSearchText,
    NavbarSearbarGuestWrapper,
    NavbarMiniDesktopSearchbarIconWrapper,
    NavbarMiniDesktopSearchbarIcon,
    NavbarMiniDesktopSearchbarDateGuestsWrapper,
    NavbarMiniDesktopSearchbarDotDivider,
} from "../navbarStyling";
import { useLocation } from "react-router-dom";
import { SetterOrUpdater, useRecoilState } from "recoil";
// Import atom selectors
import { searchQuerySelector, searchFiltersSelector } from "../../../../state/selectors/searchQuery";

export default function MiniDesktopSearchbar({
    setNavbarSearchMenuActivated,
    navbarpopdownActive,
    setNavbarMenu,
}: {
    setNavbarSearchMenuActivated: SetterOrUpdater<boolean>;
    navbarpopdownActive: boolean;
    setNavbarMenu: SetterOrUpdater<boolean>;
}) {
    const location = useLocation();
    const [searchQuery, setSearchquery] = useRecoilState(searchQuerySelector);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);

    const miniSearchBarActive = () => {
        if (location.pathname.includes("/listing") || location.pathname.includes("/search") || location.pathname.includes("/guest-affiliate")) {
            //no need to scroll for these pages
            return true;
        } else if (location.pathname === "/") {
            //if on home page, only show search bar if scrolled down
            return true;
        } else {
            return false;
        }
    };

    const formatStartDate = () => {
        if (searchQuery.startDate) {
            return searchQuery.startDate ? new Date(searchQuery.startDate).toLocaleDateString("au", { month: "short", day: "numeric" }) : "";
        }
    };

    const formatEndDate = () => {
        if (searchQuery.endDate) {
            return searchQuery.endDate ? new Date(searchQuery.endDate).toLocaleDateString("au", { month: "short", day: "numeric" }) : "";
        }
    };
    if (!miniSearchBarActive() || navbarpopdownActive) {
        return null;
    }
    return (
        <NavbarDesktopSearchbarWrapper
            onClick={() => {
                setNavbarMenu(false);
                setNavbarSearchMenuActivated(true);
            }}
            initial={{ opacity: 0, zIndex: 1 }}
            animate={{ opacity: 1, zIndex: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
        >
            <NavbarMiniDesktopSearchbarIconWrapper>
                <NavbarMiniDesktopSearchbarIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Search.svg"} style={{ margin: 0 }} alt={"Search icon"} />
            </NavbarMiniDesktopSearchbarIconWrapper>

            <NavbarMiniDesktopSearchbarContentWrapper>
                <NavbarAutocompleteSearchText>{searchQuery.title ? searchQuery.title : "Australia"}</NavbarAutocompleteSearchText>
                <NavbarMiniDesktopSearchbarDateGuestsWrapper>
                    <NavbarSearbarDatesWrapper>{searchQuery.startDate && searchQuery.endDate ? `${formatStartDate()} - ${formatEndDate()}` : "Anytime"}</NavbarSearbarDatesWrapper>
                    <NavbarMiniDesktopSearchbarDotDivider>·</NavbarMiniDesktopSearchbarDotDivider>
                    <NavbarSearbarGuestWrapper>{searchFilters.guests && searchFilters.guests > 0 ? `${searchFilters.guests} guests` : "Add guests"}</NavbarSearbarGuestWrapper>
                </NavbarMiniDesktopSearchbarDateGuestsWrapper>
            </NavbarMiniDesktopSearchbarContentWrapper>
        </NavbarDesktopSearchbarWrapper>
    );
}
