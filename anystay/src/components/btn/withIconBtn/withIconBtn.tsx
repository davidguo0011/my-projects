import { ButtonHTMLAttributes } from "react";
import { BtnText, Icon, IconWrapper, WithIconBtnWrapper } from "./withIconBtnStyling";

type InteractionEvent = React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>;
type InteractionHandler = (event: InteractionEvent) => void;

interface WithIconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconSrc?: string;
    alt?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    position?: string;
    center?: boolean;
    svgColorInvert?: boolean;
    isTouchDevice?: boolean;
    onTouchEnd?: InteractionHandler;
    onClick?: InteractionHandler;
}

const WithIconBtn = ({ iconSrc, alt, children, svgColorInvert, isTouchDevice, onClick, onTouchEnd, ...props }: WithIconBtnProps) => {
    const handleInteraction: InteractionHandler = (event) => {
        if (isTouchDevice && onTouchEnd) {
            onTouchEnd(event);
        } else if (!isTouchDevice && onClick) {
            onClick(event);
        }
    };
    return (
        <WithIconBtnWrapper onClick={!isTouchDevice ? handleInteraction : undefined} onTouchEnd={isTouchDevice ? handleInteraction : undefined} {...props}>
            {iconSrc && (
                <IconWrapper>
                    <Icon src={iconSrc} alt={alt ? alt : "button icon"} svgColorInvert={svgColorInvert} />
                </IconWrapper>
            )}
            <BtnText>{children}</BtnText>
        </WithIconBtnWrapper>
    );
};

export default WithIconBtn;
