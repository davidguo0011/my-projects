import { useState, useEffect, ReactElement } from "react";
import { createPortal } from "react-dom";
import LogoSpinner from "../spinner/logoSpinner/logoSpinner";
import { Waiting, Wrapper, Title, Subtitle } from "./loadingFullPageSmallModalStyling";

interface LoadingFullPageSmallModalProps {
    spinnerWidth: string;
    spinnerHeight: string;
    title: string;
    subtitle: string;
    waiting: boolean;
    timeout: number | null;
    guestMode: boolean;
}

const LoadingFullPageSmallModal: React.FC<LoadingFullPageSmallModalProps> = ({ spinnerWidth, spinnerHeight, title, subtitle, waiting, timeout, guestMode }): ReactElement => {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        let timeoutfunc: NodeJS.Timeout;
        if (timeout) {
            timeoutfunc = setTimeout(() => {
                setShowModal(false);
            }, timeout);
        }
        return () => {
            if (timeoutfunc) {
                clearTimeout(timeoutfunc);
            }
        };
    }, [timeout]);
    return (
        <>
            {showModal && (
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        zIndex: 101,
                        background: "rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(0px)",
                    }}
                    id={"loading-full-page-small-modal"}
                >
                    <Wrapper>
                        <LogoSpinner width={spinnerHeight} height={spinnerWidth} guestMode={guestMode} />
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <Waiting waiting={waiting}>This may take a few seconds.</Waiting>
                    </Wrapper>
                </div>
            )}
        </>
    );
};
const LoadingFullPageSmallModalPortal: React.FC<LoadingFullPageSmallModalProps> = ({ spinnerWidth, spinnerHeight, title, subtitle, waiting, timeout, guestMode }) => {
    return createPortal(
        <LoadingFullPageSmallModal spinnerWidth={spinnerWidth} spinnerHeight={spinnerHeight} title={title} subtitle={subtitle} waiting={waiting} timeout={timeout} guestMode={guestMode} />,
        document.getElementById("root") as HTMLElement
    );
};

export default LoadingFullPageSmallModalPortal;
