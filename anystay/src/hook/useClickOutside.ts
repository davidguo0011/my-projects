import { useRef, useCallback, useEffect, RefObject } from "react";

const useClickOutside = <T extends HTMLElement = HTMLDivElement>(activated: boolean, togglePopup: () => void, useClick?: boolean): RefObject<T> => {
    const ref = useRef<T>(null);
    const handleClickOutside = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (activated && ref.current && !ref.current.contains(event.target as Node)) {
                togglePopup();
            }
        },
        [activated, ref, togglePopup]
    );
    //in authbar it needs to use mousedown, using click will cause popup to close for some reason, if it causes bug in other place please let david know
    useEffect(() => {
        const timeout = setTimeout(() => {
            document.addEventListener(`${useClick ? "click" : "mousedown"}`, handleClickOutside);
        }, 0);
        return () => {
            clearTimeout(timeout);
            document.removeEventListener(`${useClick ? "click" : "mousedown"}`, handleClickOutside);
        };
    }, [handleClickOutside, useClick]);

    return ref;
};

export default useClickOutside;
