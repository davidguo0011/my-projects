import {
    ChooseHowToPayWrapper,
    ChooseHowToPayTitle,
    ChooseHowToPayItem,
    ChooseHowToPayItemIcon,
    ChooseHowToPayTextWrapper,
    ChooseHowToPayTextTitle,
    ChooseHowToPayTextSubtitle,
} from "./ChooseHowToPayStyling";
import { useState } from "react";
export default function ChooseHowToPay() {
    const [currentSelect, setCurrentSelect] = useState(0);
    return (
        <ChooseHowToPayWrapper>
            <ChooseHowToPayTitle>Choose how to pay</ChooseHowToPayTitle>
            <ChooseHowToPayItem
                selected={currentSelect === 0}
                onClick={() => {
                    setCurrentSelect(0);
                }}
            >
                <ChooseHowToPayItemIcon />
                <ChooseHowToPayTextWrapper>
                    <ChooseHowToPayTextTitle>Credit or debit card</ChooseHowToPayTextTitle>
                    <ChooseHowToPayTextSubtitle>Visa, Mastercard, AMEX and more</ChooseHowToPayTextSubtitle>
                </ChooseHowToPayTextWrapper>
            </ChooseHowToPayItem>
            <ChooseHowToPayItem
                selected={currentSelect === 1}
                onClick={() => {
                    setCurrentSelect(1);
                }}
            >
                <ChooseHowToPayItemIcon />
                <ChooseHowToPayTextWrapper>
                    <ChooseHowToPayTextTitle>Bank transfer</ChooseHowToPayTextTitle>
                </ChooseHowToPayTextWrapper>
            </ChooseHowToPayItem>
            <ChooseHowToPayItem
                selected={currentSelect === 2}
                onClick={() => {
                    setCurrentSelect(2);
                }}
            >
                <ChooseHowToPayItemIcon />
                <ChooseHowToPayTextWrapper>
                    <ChooseHowToPayTextTitle>PayPal</ChooseHowToPayTextTitle>
                </ChooseHowToPayTextWrapper>
            </ChooseHowToPayItem>
            <ChooseHowToPayItem
                selected={currentSelect === 3}
                onClick={() => {
                    setCurrentSelect(3);
                }}
            >
                <ChooseHowToPayItemIcon />
                <ChooseHowToPayTextWrapper>
                    <ChooseHowToPayTextTitle>Klarna</ChooseHowToPayTextTitle>
                </ChooseHowToPayTextWrapper>
            </ChooseHowToPayItem>
        </ChooseHowToPayWrapper>
    );
}
