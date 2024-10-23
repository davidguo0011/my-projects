import { useState, useEffect, ReactElement } from "react";
import { createPortal } from "react-dom";
import { Wrapper } from "./loadingFullPageSmallModalDefaultSpinnerStyling";
import LoadingSpinner from "../spinner/loadingSpinner/loadingSpinner";

interface LoadingFullPageSmallModalDefaultSpinnerProps {
    timeout: number;
}

const LoadingFullPageSmallModalDefaultSpinner: React.FC<LoadingFullPageSmallModalDefaultSpinnerProps> = ({ timeout }): ReactElement => {
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
                        <LoadingSpinner />
                    </Wrapper>
                </div>
            )}
        </>
    );
};
const LoadingFullPageSmallModalDefaultSpinnerPortal: React.FC<LoadingFullPageSmallModalDefaultSpinnerProps> = ({ timeout }) => {
    return createPortal(<LoadingFullPageSmallModalDefaultSpinner timeout={timeout} />, document.getElementById("root") as HTMLElement);
};

export default LoadingFullPageSmallModalDefaultSpinnerPortal;
