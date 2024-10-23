import { useCallback, useEffect, useState, useRef, RefObject } from "react";

// this hook is to detect the scroll direction of the page and if the element has been scrolled to the bottom
const useScrollDirection = (ref: RefObject<HTMLElement> | Window): (string | boolean)[] => {
    const prevScrollTopRef = useRef<number>(ref instanceof Window ? ref.scrollY : ref.current ? ref.current.scrollTop : 0);
    const [scrollDirection, setScrollDirection] = useState(["you have not scrolled yet", false]);

    const handleScroll = useCallback((): void => {
        if (ref instanceof Window) {
            const windowScrollTop = ref.scrollY;
            if (prevScrollTopRef.current > windowScrollTop) {
                setScrollDirection(["up", false]);
            } else if (prevScrollTopRef.current < windowScrollTop && windowScrollTop > 100) {
                if (windowScrollTop + ref.innerHeight >= document.scrollingElement!.scrollHeight - 200) {
                    setScrollDirection(["down", true]);
                } else {
                    setScrollDirection(["down", false]);
                }
            }
            prevScrollTopRef.current = windowScrollTop;
        } else if (ref.current instanceof HTMLElement) {
            const currentScrollTop = ref.current.scrollTop;
            if (currentScrollTop > prevScrollTopRef.current && currentScrollTop > 400) {
                if (currentScrollTop + ref.current.clientHeight >= ref.current.scrollHeight - 200) {
                    setScrollDirection(["down", true]);
                } else {
                    setScrollDirection(["down", false]);
                }
            } else if (prevScrollTopRef.current > currentScrollTop) {
                setScrollDirection(["up", false]);
            }
            prevScrollTopRef.current = currentScrollTop;
        }
    }, [ref, prevScrollTopRef]);

    useEffect(() => {
        if (ref instanceof Window) {
            ref.addEventListener("scroll", handleScroll);
            return () => ref.removeEventListener("scroll", handleScroll);
        } else if (ref.current) {
            const element = ref.current;
            element.addEventListener("scroll", handleScroll);
            return () => {
                element.removeEventListener("scroll", handleScroll);
            };
        }
    }, [handleScroll, ref]);
    return scrollDirection;
};

export default useScrollDirection;
