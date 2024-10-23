import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    MobileNavbarMenuWrapper,
    MobileNavbarMenuItem,
    MobileNavbarMenuItemText,
    NavLink,
    MobileNavbarProfilePicture,
    MobileNavbarMenuWrapperNotLoggedIn,
    MobileNavbarMenuWrapperNotLoggedInLogInWrapper,
    MobileNavbarMenuWrapperNotLoggedInIcon,
    MobileNavbarMenuItemLogIn,
    MobileNavbarMenuImage,
    MobileNavbarProfilePictureWrapper,
} from "./mobileNavbarStyling";
import { userModelSelector } from "../../../state/selectors/userModel";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { ColorTheme, TextTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface MobileNavbarMenuItemsProps {
    isTouchDevice?: boolean;
}

export default function MobileNavbarMenuItems({ isTouchDevice }: MobileNavbarMenuItemsProps) {
    const navigate = useNavigate();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const [profilePicture, setProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);

    let currentIndex = 1;
    if (window.location.href.includes("/your-inbox")) {
        currentIndex = 2;
    } else if (window.location.href.includes("/your-stays")) {
        currentIndex = 3;
    } else if (window.location.href.includes("/saved-listings")) {
        currentIndex = 4;
    } else if (window.location.href.includes("/settings")) {
        currentIndex = 5;
    } else if (window.location.href.includes("/dashboard")) {
        currentIndex = 6;
    } else if (window.location.href.includes("/your-host-inbox")) {
        currentIndex = 7;
    } else if (window.location.href.includes("/your-calendar")) {
        currentIndex = 8;
    } else if (window.location.href.includes("/your-listings")) {
        currentIndex = 9;
    }

    useEffect(() => {
        if (userModel && userModel.profilePicture) {
            const profilePic = constructOptimisedProtectedImageUrl(userModel.profilePicture, userModel.identityID, 100);
            setProfilePicture(profilePic);
        }
    }, [userModel]);

    const handleMenuItemInteraction = () => {
        const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
        searchFiltersCopy.category = "all";
        setSearchFilters(searchFiltersCopy);
        navigate("/");
    };

    if (userModel) {
        if (userModel.guestMode) {
            return (
                <MobileNavbarMenuWrapper>
                    <MobileNavbarMenuItemNav
                        url="/"
                        text={"Home"}
                        alt={"Search button"}
                        img={"https://d292awxalydr86.cloudfront.net/General/MobileNavbarExploreIcon.png"}
                        color={currentIndex === 1 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url={`/your-inbox/${userModel.id}`}
                        text={"Inbox"}
                        alt={"Inbox button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(guest).svg"}
                        color={currentIndex === 2 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url={`/your-stays/${userModel.id}`}
                        text={"Stays"}
                        alt={"Your stays button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Stays.svg"}
                        color={currentIndex === 3 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url={`/saved-listings/${userModel.id}`}
                        text={"Saved"}
                        alt={"Saved button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Heart.svg"}
                        color={currentIndex === 4 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItem
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      navigate("/settings");
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      navigate("/settings");
                                  }
                                : undefined
                        }
                    >
                        <MobileNavbarProfilePictureWrapper selected={currentIndex === 5}>
                            <MobileNavbarProfilePicture src={profilePicture} alt="profile picture" />
                        </MobileNavbarProfilePictureWrapper>
                        <MobileNavbarMenuItemText color={currentIndex === 5 ? ColorTheme.Black.color : ColorTheme.Grey.color}>Profile</MobileNavbarMenuItemText>
                    </MobileNavbarMenuItem>
                </MobileNavbarMenuWrapper>
            );
        } else {
            return (
                <MobileNavbarMenuWrapper>
                    <MobileNavbarMenuItemNav
                        url="/dashboard"
                        text={"Home"}
                        alt={"Home button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Dashboard.svg"}
                        color={currentIndex === 6 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url={`/your-host-inbox/${userHostModel ? userHostModel.id : ""}`}
                        text={"Inbox"}
                        alt={"Inbox button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(host).svg"}
                        color={currentIndex === 7 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url="/your-calendar"
                        text={"Calendar"}
                        alt={"Calendar button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Calendar.svg"}
                        color={currentIndex === 8 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItemNav
                        url={`/your-listings/${userHostModel ? userHostModel.id : ""}`}
                        text={"Listings"}
                        alt={"Listings button"}
                        img={"https://d292awxalydr86.cloudfront.net/Universal+icons/Listings.svg"}
                        color={currentIndex === 9 ? ColorTheme.Black.color : ColorTheme.Grey.color}
                        isTouchDevice={isTouchDevice}
                    />
                    <MobileNavbarMenuItem
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      navigate("/settings");
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      navigate("/settings");
                                  }
                                : undefined
                        }
                    >
                        <MobileNavbarProfilePictureWrapper selected={currentIndex === 5}>
                            <MobileNavbarProfilePicture src={profilePicture} alt="profile picture" />
                        </MobileNavbarProfilePictureWrapper>
                        <MobileNavbarMenuItemText color={currentIndex === 5 ? ColorTheme.Black.color : ColorTheme.Grey.color}>Profile</MobileNavbarMenuItemText>
                    </MobileNavbarMenuItem>
                </MobileNavbarMenuWrapper>
            );
        }
    } else {
        return (
            <MobileNavbarMenuWrapperNotLoggedIn>
                <MobileNavbarMenuWrapperNotLoggedInLogInWrapper>
                    <NavLink to={`/`} style={{ gridRow: "1/2" }}>
                        <MobileNavbarMenuItem
                            stroke={ColorTheme.Black.color}
                            onTouchEnd={isTouchDevice ? handleMenuItemInteraction : undefined}
                            onClick={!isTouchDevice ? handleMenuItemInteraction : undefined}
                        >
                            <MobileNavbarMenuWrapperNotLoggedInIcon src={"https://d292awxalydr86.cloudfront.net/General/MobileNavbarExploreIcon.png"} alt="Home" />
                            <MobileNavbarMenuItemText color={ColorTheme.Black.color}>Home</MobileNavbarMenuItemText>
                        </MobileNavbarMenuItem>
                    </NavLink>
                    <MobileNavbarMenuItemLogIn
                        stroke={ColorTheme.Black.color}
                        onTouchEnd={
                            isTouchDevice
                                ? () => {
                                      setSignInMenuActivated(true);
                                  }
                                : undefined
                        }
                        onClick={
                            !isTouchDevice
                                ? () => {
                                      setSignInMenuActivated(true);
                                  }
                                : undefined
                        }
                    >
                        <MobileNavbarMenuWrapperNotLoggedInIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"} alt="Log in icon" />
                        <MobileNavbarMenuItemText color={ColorTheme.Grey.color}>Log in</MobileNavbarMenuItemText>
                    </MobileNavbarMenuItemLogIn>
                </MobileNavbarMenuWrapperNotLoggedInLogInWrapper>
            </MobileNavbarMenuWrapperNotLoggedIn>
        );
    }
}

interface MobileNavbarMenuItemNavProps {
    color: string;
    url: string;
    text: string;
    alt: string;
    img: string;
    isTouchDevice?: boolean;
}

function MobileNavbarMenuItemNav({ color, url, text, alt, img, isTouchDevice }: MobileNavbarMenuItemNavProps) {
    let navigate = useNavigate();
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const handleMobileNavbarMenuItenInteraction = () => {
        if (url === "/") {
            const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
            searchFiltersCopy.category = "all";
            setSearchFilters(searchFiltersCopy);
            navigate(url);
        } else {
            navigate(url);
        }
    };
    return (
        <MobileNavbarMenuItem
            stroke={color}
            onTouchEnd={isTouchDevice ? handleMobileNavbarMenuItenInteraction : undefined}
            onClick={!isTouchDevice ? handleMobileNavbarMenuItenInteraction : undefined}
        >
            <MobileNavbarMenuImage style={{ filter: color === ColorTheme.Grey.color ? "opacity(50%)" : undefined }} alt={alt} src={img} />
            <MobileNavbarMenuItemText color={color}>{text}</MobileNavbarMenuItemText>
        </MobileNavbarMenuItem>
    );
}
