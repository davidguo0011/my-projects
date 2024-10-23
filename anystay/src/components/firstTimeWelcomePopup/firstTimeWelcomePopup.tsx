import { useState, useEffect } from "react";
import {
    FirstTimeWelcomePopupButton,
    FirstTimeWelcomePopupCloseButton,
    FirstTimeWelcomePopupContentWrapper,
    FirstTimeWelcomePopupImage,
    FirstTimeWelcomePopupImageWrapper,
    FirstTimeWelcomePopupTextWrapper,
    FirstTimeWelcomePopupTitle,
    FirstTimeWelcomePopupWrapper,
    FirstTimeWelcomePopupButtonIcon,
} from "./firstTimeWelcomePopupStyling";
import AnimationWrapperForPopupPortal from "../animationWrapper/AnimationWrapperForPopup";
import { useCookies } from "react-cookie";
import useClickOutside from "../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../components/globalPopup/GlobalPopupContainerCenter";

const FirstTimeWelcomePopup: React.FC = () => {
    const [isWelcomePopupShowed, setIsWelcomePopupShowed] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["firstVisit"]);
    const [imgLoading, setImgLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!cookies.firstVisit) {
            setCookie("firstVisit", "true", { path: "/", maxAge: 60 * 60 * 24 * 365 });
            setIsWelcomePopupShowed(true);
        }
    }, [cookies, setCookie]);

    const handleWelcomePopup = () => {
        setIsWelcomePopupShowed(!isWelcomePopupShowed);
    };
    const wrapperRef = useClickOutside(isWelcomePopupShowed, handleWelcomePopup, true);
    if (!isWelcomePopupShowed) return null;

    return (
        <FirstTimeWelcomePopupWrapper>
            <GlobalPopupContainerCenter ref={wrapperRef} closePopup={handleWelcomePopup} desktopWidth={"640px"} backBtnBackground={true} noContinueBtn={true}>
                <FirstTimeWelcomePopupImageWrapper>
                    <FirstTimeWelcomePopupImage
                        src={"https://d292awxalydr86.cloudfront.net/General/Welcome+hero.jpg"}
                        alt="Welcome to Anystay"
                        onLoad={() => {
                            setImgLoading(false);
                        }}
                        imgLoading={imgLoading}
                    />
                </FirstTimeWelcomePopupImageWrapper>
                <FirstTimeWelcomePopupTextWrapper>
                    <FirstTimeWelcomePopupTitle>Get 10% off your first Australian stay</FirstTimeWelcomePopupTitle>
                    <FirstTimeWelcomePopupButton to={`/referral-page`} onClick={handleWelcomePopup}>
                        Get coupons
                    </FirstTimeWelcomePopupButton>
                </FirstTimeWelcomePopupTextWrapper>
            </GlobalPopupContainerCenter>
        </FirstTimeWelcomePopupWrapper>
    );
};

export default FirstTimeWelcomePopup;
