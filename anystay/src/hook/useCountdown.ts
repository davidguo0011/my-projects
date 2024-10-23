import { useState, useRef, useEffect, useCallback } from "react";
const useCountdown = (seconds: number): [number, (active: boolean) => void, boolean] => {
    const [countdown, setCountdown] = useState(seconds);
    const [active, setActive] = useState(false);
    const resendIntervalId = useRef<NodeJS.Timeout | null>(null);

    const resendTick = useCallback(() => {
        // Update the seconds in the state every second
        setCountdown((prevState) => {
            if (prevState === 0) {
                setActive(false);
                return 60;
            }
            return prevState > 0 ? prevState - 1 : 0;
        });
    }, []);

    useEffect(() => {
        if (active) {
            resendIntervalId.current = setInterval(resendTick, 1000);
        }
        return () => {
            if (resendIntervalId.current !== null) {
                clearInterval(resendIntervalId.current as NodeJS.Timeout);
            }
        };
    }, [active, resendTick]);

    return [countdown, setActive, active];
};

export default useCountdown;
