import {
    YourStayServiceBtnsWrapper,
    YourStayServiceBtn,
    YourStayServiceBtnIconWrapper,
    YourStayServiceBtnIcon,
    YourStayServiceBtnTextContent,
    YourStayServiceBtnTitle,
    YourStayServiceBtnSubtitle,
    YourStayServiceBtnsScrollWrapper,
    YourStayServiceCallBtn,
    YourStayServiceLink,
} from "./ServiceBtnsStyling";
import { useState } from "react";
import useClickOutside from "../../../hook/useClickOutside";
import { YourStaysProps } from "../yourStays";
interface SearviceBtnsProps {
    bookingRequest: YourStaysProps;
}

const SearviceBtns: React.FC<SearviceBtnsProps> = ({ bookingRequest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const handleClick = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => {
        if (!isOpen) {
            (window as any).Intercom("showNewMessage", "");
            setIsOpen(true);
        } else {
            (window as any).Intercom("hide");
            setIsOpen(false);
        }
    };

    const conciegreWrapperRef = useClickOutside<HTMLButtonElement>(isShow, () => handleClick(isShow, setIsShow));

    return (
        <YourStayServiceBtnsScrollWrapper>
            <YourStayServiceBtnsWrapper>
                <YourStayServiceLink to={`/conversation/${bookingRequest.conversationmodelID}`}>
                    <YourStayServiceBtnIconWrapper>
                        <YourStayServiceBtnIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(guest).svg" alt="message icon" />
                    </YourStayServiceBtnIconWrapper>
                    <YourStayServiceBtnTextContent>
                        <YourStayServiceBtnTitle>Send a message</YourStayServiceBtnTitle>
                        <YourStayServiceBtnSubtitle>We typically reply in a few minutes</YourStayServiceBtnSubtitle>
                    </YourStayServiceBtnTextContent>
                </YourStayServiceLink>
                <YourStayServiceCallBtn href={`tel:1300237472`}>
                    <YourStayServiceBtnIconWrapper>
                        <YourStayServiceBtnIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Call.svg" alt="phone icon" />
                    </YourStayServiceBtnIconWrapper>
                    <YourStayServiceBtnTextContent>
                        <YourStayServiceBtnTitle>Call {bookingRequest.hostPhoneNumber}</YourStayServiceBtnTitle>
                        <YourStayServiceBtnSubtitle>Contact your host by phone</YourStayServiceBtnSubtitle>
                    </YourStayServiceBtnTextContent>
                </YourStayServiceCallBtn>
                <YourStayServiceBtn onClick={() => handleClick(isShow, setIsShow)} ref={conciegreWrapperRef}>
                    <YourStayServiceBtnIconWrapper>
                        <YourStayServiceBtnIcon src="https://d292awxalydr86.cloudfront.net/Stays+page/Concierge.svg" alt="concierge icon" />
                    </YourStayServiceBtnIconWrapper>
                    <YourStayServiceBtnTextContent>
                        <YourStayServiceBtnTitle>Get help from us</YourStayServiceBtnTitle>
                        <YourStayServiceBtnSubtitle>Get anything you need</YourStayServiceBtnSubtitle>
                    </YourStayServiceBtnTextContent>
                </YourStayServiceBtn>
            </YourStayServiceBtnsWrapper>
        </YourStayServiceBtnsScrollWrapper>
    );
};

export default SearviceBtns;
