import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "./loadingFullPageModalStyling";
import LogoSpinner from "../spinner/logoSpinner/logoSpinner";

interface LoadingFullPageProps {
    guestMode: boolean;
    reverse?: boolean;
}

const LoadingFullPage: React.FC<LoadingFullPageProps> = ({ guestMode, reverse }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.position = "relative";
        document.body.style.height = "100vh";
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
            document.body.style.height = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, []);
    return (
        <ModalContainer>
            <LogoSpinner reverse={reverse} guestMode={guestMode} width={60} height={60} speedSeconds={1} />
        </ModalContainer>
    );
};

const LoadingFullPageModal: React.FC<LoadingFullPageProps> = ({ guestMode, reverse }) => {
    return createPortal(<LoadingFullPage guestMode={guestMode} reverse={reverse} />, document.getElementById("root") as HTMLElement);
};

export default LoadingFullPageModal;
