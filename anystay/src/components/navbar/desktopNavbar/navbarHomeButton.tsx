import { NavbarLogoHomeButtonWrapper, NavbarLogoHomeButton, NavbarLogoImage, NavbarLogoImageTablet } from "./navbarStyling";
import { guestModeSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { isUserChangePriceSelector } from "../../../state/selectors/isUserChangePrice";

function HomeButton({
    setNavbarMenu,
    setNavbarSearchMenuActivated,
}: {
    setNavbarMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setNavbarSearchMenuActivated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [guestMode, setGuestMode] = useRecoilState(guestModeSelector);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [isUserChangePrice, setIsUserChangePrice] = useRecoilState(isUserChangePriceSelector);
    const navigate = useNavigate();

    if (!guestMode) {
        return (
            <NavbarLogoHomeButtonWrapper>
                <NavbarLogoHomeButton
                    onClick={() => {
                        setNavbarMenu(false);
                        navigate("/dashboard");
                    }}
                >
                    <NavbarLogoImage src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+full+logo+red.svg"} alt={"Anystay Logo"} />
                    <NavbarLogoImageTablet src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+red.svg"} alt={"Anystay Logo"} />
                </NavbarLogoHomeButton>
            </NavbarLogoHomeButtonWrapper>
        );
    }
    return (
        <NavbarLogoHomeButtonWrapper>
            <NavbarLogoHomeButton
                onClick={() => {
                    setNavbarSearchMenuActivated(false);
                    setNavbarMenu(false);
                    const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                    searchFiltersCopy.category = "all";
                    setSearchFilters(searchFiltersCopy);
                    setIsUserChangePrice(false);
                    navigate("/");
                }}
            >
                <NavbarLogoImage src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+full+logo+red.svg"} alt={"Anystay Logo"} />
                <NavbarLogoImageTablet src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+red.svg"} alt={"Anystay Logo"} />
            </NavbarLogoHomeButton>
        </NavbarLogoHomeButtonWrapper>
    );
}

export default HomeButton;
