import { useEffect, useState } from "react";

// This hook is to detect if the window is desktop size or not
const useIsDesktopSize = () => {
    const [isDesktopSize, setIsDesktopSize] = useState(window.innerWidth >= 768 ? true : false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDesktopSize(true);
            } else {
                setIsDesktopSize(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isDesktopSize;
};

export default useIsDesktopSize;
