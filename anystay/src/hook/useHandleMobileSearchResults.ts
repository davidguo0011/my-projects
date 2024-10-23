import { useRef, useState, TouchEvent, MouseEvent } from "react";

const useHandleMobileSearchResults = (numberOfListings: number) => {
    const searchListingContainerRef = useRef<HTMLDivElement | null>(null);
    const searchListingResultsSpacerMobileRef = useRef<HTMLDivElement | null>(null);
    const initialTouchY = useRef<number | null>(null);
    const closeContainerTrigger = useRef<boolean>(false);
    const containerInitialTouchY = useRef<number | null>(null);
    // const userMoveY = useRef(0);

    const [isSearchResultsContainerClosed, setIsSearchResultsContainerClosed] = useState(false);

    // the following event handler is for the mobile search results container
    const handleContainerTitleTouchStart = (e: TouchEvent<HTMLElement>) => {
        // set initial position of the title
        initialTouchY.current = e.touches[0].clientY;
        // prevent the container from scrolling when user is touching move the title
        if (searchListingContainerRef.current && searchListingResultsSpacerMobileRef.current) {
            searchListingContainerRef.current.style.overflow = "hidden";
            searchListingResultsSpacerMobileRef.current.style.transition = "unset";
        }
    };
    const handleContainerTitleTouchMove = (e: TouchEvent<HTMLElement>) => {
        // record the current position of the title
        let currentY = e.touches[0].clientY;
        // calculate the relative movement of the title from the initial position
        let relativeMoveY = 0;
        if (initialTouchY.current) {
            relativeMoveY = currentY - initialTouchY.current;
        }
        // set the current relative movement of the title
        // userMoveY.current = relativeMoveY;
        // if the relative movement of the title is greater than 80, close the container
        if (relativeMoveY > 80) {
            closeContainerTrigger.current = true;
        } else if (relativeMoveY < -5) {
            closeContainerTrigger.current = false;
        }
        // move the title according to the relative movement
        if (isSearchResultsContainerClosed) {
            searchListingResultsSpacerMobileRef.current!.style.height = `calc(100dvh - 76px + ${relativeMoveY}px)`;
        } else if (!isSearchResultsContainerClosed && numberOfListings < 3 && relativeMoveY < -5) {
            e.preventDefault();
        } else {
            if (searchListingResultsSpacerMobileRef.current) {
                searchListingResultsSpacerMobileRef.current.style.height = `calc(40dvh + ${relativeMoveY}px)`;
            }
        }
    };
    const handleContainerTitleTouchEnd = (e: TouchEvent<HTMLElement>) => {
        // if the relative movement of the title is down greater than 80, close the container, else open the container
        if (searchListingResultsSpacerMobileRef.current) {
            searchListingResultsSpacerMobileRef.current.style.transition = "height 0.5s ease";
        }

        // searchListingContainerRef.current.style.overflow = "scroll";
        if (closeContainerTrigger.current) {
            if (searchListingContainerRef.current && searchListingResultsSpacerMobileRef.current) {
                searchListingContainerRef.current.scrollTo(0, 0);
                searchListingContainerRef.current.style.overflow = "hidden";

                setIsSearchResultsContainerClosed(true);
                searchListingResultsSpacerMobileRef.current.style.height = "calc(100dvh - 76px)";
            }
        } else {
            setIsSearchResultsContainerClosed(false);
            if (searchListingResultsSpacerMobileRef.current && searchListingContainerRef.current) {
                searchListingResultsSpacerMobileRef.current.style.height = "40dvh";
                searchListingContainerRef.current.style.overflow = "scroll";
            }
        }
    };
    // container event handler
    const handleContainerOpenOnClick = (e: MouseEvent<HTMLElement>) => {
        if (searchListingResultsSpacerMobileRef.current && searchListingContainerRef.current) {
            // open the container when user click the title
            searchListingResultsSpacerMobileRef.current.style.transition = "height 0.5s ease";
            searchListingContainerRef.current.style.overflow = "scroll";
            setIsSearchResultsContainerClosed(false);
            searchListingResultsSpacerMobileRef.current.style.height = "40dvh";
        }
    };
    const handleContainerTouchStart = (e: TouchEvent<HTMLElement>) => {
        if (searchListingResultsSpacerMobileRef.current) {
            // set initial position of the title
            containerInitialTouchY.current = e.touches[0].clientY;
            searchListingResultsSpacerMobileRef.current.style.transition = "unset";
        }
    };

    const handleContainerTouchMove = (e: TouchEvent<HTMLElement>) => {
        if (searchListingResultsSpacerMobileRef.current && searchListingResultsSpacerMobileRef.current?.getBoundingClientRect().y === 0 && !isSearchResultsContainerClosed) {
            // if the container is at middle position, enable the container to scroll down to close the container
            // record the current position of the title
            let currentY = e.touches[0].clientY;
            // calculate the relative movement of the title from the initial position
            let relativeMoveY = 0;
            if (containerInitialTouchY.current) {
                relativeMoveY = currentY - containerInitialTouchY.current;
            }
            // set the current relative movement of the title
            // if the relative movement of the title is greater than 80, close the container
            if (relativeMoveY > 80) {
                closeContainerTrigger.current = true;
            } else if (relativeMoveY < -5) {
                closeContainerTrigger.current = false;
            }
        }
    };
    const handleContainerTouchEnd = (e: TouchEvent<HTMLElement>) => {
        // if the relative movement of the title is down greater than 80, close the container, else open the container
        if (searchListingResultsSpacerMobileRef.current) {
            searchListingResultsSpacerMobileRef.current.style.transition = "height 0.5s ease";
        }

        if (closeContainerTrigger.current && searchListingResultsSpacerMobileRef.current) {
            if (searchListingContainerRef.current) {
                searchListingContainerRef.current.scrollTo(0, 0);
                searchListingContainerRef.current.style.overflow = "hidden";
                setIsSearchResultsContainerClosed(true);
                searchListingResultsSpacerMobileRef.current.style.height = "calc(100dvh - 76px)";
            }
        }
    };
    const handleMapClickCloseContainer = () => {
        if (searchListingResultsSpacerMobileRef.current && searchListingContainerRef.current) {
            searchListingResultsSpacerMobileRef.current.style.transition = "height 0.5s ease";

            searchListingContainerRef.current.scrollTo(0, 0);
            searchListingContainerRef.current.style.overflow = "hidden";

            setIsSearchResultsContainerClosed(true);
            searchListingResultsSpacerMobileRef.current.style.height = "calc(100dvh - 76px)";
        }
    };
    return {
        handleContainerTitleTouchStart,
        handleContainerTitleTouchMove,
        handleContainerTitleTouchEnd,
        handleContainerOpenOnClick,
        isSearchResultsContainerClosed,
        searchListingContainerRef,
        searchListingResultsSpacerMobileRef,
        handleContainerTouchStart,
        handleContainerTouchMove,
        handleContainerTouchEnd,
        handleMapClickCloseContainer,
    };
};

export default useHandleMobileSearchResults;
