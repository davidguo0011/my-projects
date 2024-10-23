import { MouseEventHandler, ReactElement, TouchEventHandler } from "react";
import { BackBtnIcon, BackBtnIconWrapper, BackBtnWrapper, BtnWrapper } from "./backBtnStyling";

/**
 * Global back button component with 40px * 40px clickable area and 16px * 16px icon.
 *
 * Note: The button will position absolute for desktop if either desktopTop or desktopLeft is provided. The same applies to mobile.
 *
 * @param {MouseEventHandler} onClick - function to be called when the button is clicked
 * @param {boolean} hasBackground - determine if the button has a background
 * @param {boolean} hasBorder - determine if the button has a border
 * @param {string} type - type of button icon to be displayed (currently only supports "Arrow" and "Close")
 * @param {number | string} desktopTop - top position of the button on desktop
 * @param {number | string} desktopLeft - left position of the button on desktop
 * @param {number | string} mobileTop - top position of the button on mobile
 * @param {number | string} mobileLeft - left position of the button on mobile
 * @param {boolean} disabled - determine if the button is disabled
 * @returns {ReactElement} - Back button component
 */

const buttonTypeSrc = {
    Arrow: "https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",
    Close: "https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",
    WhiteArrow: "https://d292awxalydr86.cloudfront.net/Universal+icons/White+back+icon.png",
};

interface BackBtnProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onTouchEnd?: TouchEventHandler<HTMLButtonElement>;
    hasBackground?: boolean;
    hasBorder?: boolean;
    type: "Arrow" | "Close" | "WhiteArrow";
    desktopTop?: number | string;
    desktopLeft?: number | string;
    mobileTop?: number | string;
    mobileLeft?: number | string;
    disabled?: boolean;
    noneHover?: boolean;
}

const BackBtn = ({ type, onClick, hasBackground, hasBorder, disabled, onTouchEnd, noneHover, ...props }: BackBtnProps) => {
    return (
        <BackBtnWrapper {...props}>
            <BtnWrapper onClick={onClick} onTouchEnd={onTouchEnd} hasBackground={hasBackground} hasBorder={hasBorder} disabled={disabled} noneHover={noneHover}>
                <BackBtnIconWrapper>
                    <BackBtnIcon src={buttonTypeSrc[type]} iconType={type} alt="Back button icon" color={""} />
                </BackBtnIconWrapper>
            </BtnWrapper>
        </BackBtnWrapper>
    );
};

export default BackBtn;
