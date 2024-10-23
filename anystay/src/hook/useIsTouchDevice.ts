import { useEffect, useState } from "react";

const useIsTouchDevice = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        const checkIfTouchDevice = () => {
            setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkIfTouchDevice();

        // in case the user switches between touch and non-touch device
        window.addEventListener("resize", checkIfTouchDevice);

        return () => {
            window.removeEventListener("resize", checkIfTouchDevice);
        };
    }, []);
    return isTouchDevice;
};

export default useIsTouchDevice;
