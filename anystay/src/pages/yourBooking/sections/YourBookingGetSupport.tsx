import {
    YourBookingGetSupportTextSection,
    YourBookingGetSupportTitle,
    YourBookingGetSupportSubtitle,
    YourBookingHeaderDetailsDatesTextSection,
    YourBookingTextButton,
    YourBookingTextLinkImage,
} from "../yourBookingStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { useState } from "react";
import useClickOutside from "../../../hook/useClickOutside";

const YourBookingGetSupport: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            (window as any).Intercom("showNewMessage", "");
            setIsOpen(true);
        } else {
            (window as any).Intercom("hide");
            setIsOpen(false);
        }
    };
    const wrapperRef = useClickOutside(isOpen, handleClick);

    return (
        <YourBookingGetSupportTextSection>
            <YourBookingGetSupportTitle>Get support</YourBookingGetSupportTitle>
            <YourBookingGetSupportSubtitle>
                Get in touch with our friendly support team. <br /> We're ready to assist you with anything you need during your stay.
            </YourBookingGetSupportSubtitle>
            <YourBookingHeaderDetailsDatesTextSection style={{ width: "100%", margin: 0, borderBottom: "none", padding: "24px 0", borderTop: `1px solid ${ColorTheme.Grey2.color}` }}>
                <YourBookingTextButton onClick={() => handleClick()} ref={wrapperRef}>
                    Contact support
                    <YourBookingTextLinkImage src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt="arrow icon" />
                </YourBookingTextButton>
            </YourBookingHeaderDetailsDatesTextSection>
        </YourBookingGetSupportTextSection>
    );
};

export default YourBookingGetSupport;
