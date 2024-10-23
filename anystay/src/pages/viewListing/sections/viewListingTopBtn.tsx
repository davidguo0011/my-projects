import { useEffect, useRef, useState } from "react";
import BackBtn from "../../../components/btn/backBtn/backBtn";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import {
    HeartIcon,
    ViewListingIconWrappar,
    ViewListingSaveAndShareButtonWrapper,
    ViewListingSaveButtonWrapper,
    ViewListingShareButtonIcon,
    ViewListingShareButtonWrapper,
} from "../viewListingStyling";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userModelSelector } from "../../../state/selectors/userModel";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { UserModel } from "../../../interfaces/models/userModel";
import { ListingInterface } from "../viewListing";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

interface ViewListingTopBtnProps {
    listing: ListingInterface;
    handleShare: () => Promise<void>;
    toggleSaved: (listingId: string, userModel: UserModel, accessToken: string) => Promise<void>;
    toggleShareListing: () => void;
    isSaved: boolean;
    accessToken: string;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
    loggedIn: boolean;
}

export default function ViewListingTopBtn({ setIsSaved, isSaved, handleShare, toggleShareListing, listing, toggleSaved, accessToken, loggedIn }: ViewListingTopBtnProps) {
    const isSavedLoading = useRef(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const navigate = useNavigate();
    const isDesktopSize = useIsDesktopSize();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 64);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleToggleSaved = async () => {
        if (userModel) {
            if (isSavedLoading.current) return;
            try {
                setIsSaved((prev) => !prev);
                isSavedLoading.current = true;
                await toggleSaved(listing.id, userModel, accessToken);
            } catch (err: any) {
                console.log(err);
                setIsSaved((prev) => !prev);
            } finally {
                isSavedLoading.current = false;
            }
        } else {
            setSignInMenuActivated(true);
        }
    };
    const handleBackBtnClick = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };
    return (
        <ViewListingIconWrappar isSticky={isSticky} loggedIn={loggedIn}>
            <BackBtn onClick={handleBackBtnClick} type={isDesktopSize ? "Close" : "Arrow"} hasBackground />
            <ViewListingSaveAndShareButtonWrapper>
                <ViewListingSaveButtonWrapper onClick={handleToggleSaved}>
                    <HeartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path
                            d="M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z"
                            fill={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.White.color}`}
                            stroke={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.Black.color}`}
                            transform="translate(0.7, 2.5)"
                        />
                    </HeartIcon>
                </ViewListingSaveButtonWrapper>
                <ViewListingShareButtonWrapper type="button" onClick={window.innerWidth < 768 ? handleShare : toggleShareListing}>
                    <ViewListingShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Share.svg"} alt={"Share Button"} />
                </ViewListingShareButtonWrapper>
            </ViewListingSaveAndShareButtonWrapper>
        </ViewListingIconWrappar>
    );
}
