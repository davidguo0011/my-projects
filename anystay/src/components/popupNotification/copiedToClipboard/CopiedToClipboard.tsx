import React from "react";
import { createPortal } from "react-dom";
import { CopiedToClipboardWrapper, CopiedToClipboardIcon, CopiedToClipboardText } from "./CopiedToClipboardStyling";

const copiedToClipboardAnimation = {
    initial: { y: "100vh", x: "-50%" },
    animate: { y: "0", x: "-50%" },
    exit: { y: "100vh", x: "-50%", transition: { duration: 0.5 } },
    transition: { ease: "easeOut", duration: 0.2 },
    key: "copiedToClipboard",
};
const CopiedToClipboard = () => {
    return (
        <CopiedToClipboardWrapper {...copiedToClipboardAnimation}>
            <CopiedToClipboardIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"Verified contact icon"} />
            <CopiedToClipboardText>Copied to clipboard</CopiedToClipboardText>
        </CopiedToClipboardWrapper>
    );
};

const CopiedToClipboardPortal = () => {
    return createPortal(<CopiedToClipboard />, document.getElementById("root") as HTMLElement);
};

export default CopiedToClipboardPortal;
