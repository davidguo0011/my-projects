import { Btn, SupportArrowSvg, SupportInitialSvgWrappar, SupportInitialSvgImg } from "./supportBtnStyling";
import { useState, useEffect, useRef } from "react";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import useClickOutside from "../../../hook/useClickOutside";
import useScrollDirection from "../../../hook/useScrollDirection";
interface SupportBtnProps {
    handleScroll: boolean;
    path: string;
}

const SupportBtn: React.FC<SupportBtnProps> = ({ handleScroll, path }) => {
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const intercomOpenedRef = useRef<boolean>(false);
    const isDesktopSize: boolean = useIsDesktopSize();
    const [scrollDirection, isHitBottom]: (string | boolean)[] = useScrollDirection(window);
    useEffect(() => {
        (window as any).Intercom("boot", { app_id: process.env.REACT_APP_INTERCOM_APP_ID });
        (window as any).Intercom("onHide", () => {
            if (intercomOpenedRef.current) {
                setIsRotated(false);
                intercomOpenedRef.current = false;
            }
        });

        (window as any).Intercom("onShow", () => {
            const messengerFrame = document.querySelector(".intercom-messenger-frame") as HTMLElement | null;
            if (messengerFrame) {
                setTimeout(() => {
                    if (isDesktopSize) {
                        messengerFrame.style.cssText = `
                        bottom: 88px !important;
                        height: 90vh !important;
                        `;
                    } else {
                        messengerFrame.style.cssText = `
                        bottom: 0 !important;
                        height: 100vh !important;
                        `;
                    }
                }, 100);
            }
        });
        return () => {
            (window as any).Intercom("shutdown");
        };
    }, [isDesktopSize]);

    const handleClick = (): void => {
        if (!isRotated) {
            (window as any).Intercom("showNewMessage", "");
            setIsRotated(true);
            intercomOpenedRef.current = true;
        } else {
            (window as any).Intercom("hide");
            intercomOpenedRef.current = false;
            setIsRotated(false);
        }

        setTimeout(() => {
            const messengerFrame = document.querySelector(".intercom-messenger-frame") as HTMLElement | null;
            if (messengerFrame) {
                if (isDesktopSize) {
                    messengerFrame.style.cssText = `
                        bottom: 88px !important;
                        height: 90vh !important;
                    `;
                } else {
                    messengerFrame.style.cssText = `
                        bottom: 0 !important;
                        height: 100vh !important;
                    `;
                }
            }
        }, 500);
    };

    const wrapperRef = useClickOutside(isRotated, handleClick, true);

    return (
        <Btn
            onClick={() => {
                handleClick();
            }}
            ref={wrapperRef}
            transition={handleScroll}
            path={path}
        >
            {!isRotated && (
                <SupportInitialSvgWrappar>
                    <SupportInitialSvgImg src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Question.svg"} alt={"Support Icon"} />
                </SupportInitialSvgWrappar>
            )}
            {isRotated && (
                <SupportArrowSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ rotate: -60 }} animate={{ rotate: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
                        fill="white"
                    ></path>
                </SupportArrowSvg>
            )}
        </Btn>
    );
};

export default SupportBtn;
