import { useEffect } from "react";

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const useGtagSendEvent = () => {
    useEffect(() => {
        if (typeof window.gtag !== "function") {
            console.warn("Google Analytics not loaded");
            return;
        }
    }, []);
    const gtagSendEvent = () => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion_event_purchase", { page_name: "create-booking", send_to: "G-PZWKZQZSK4" });
        }
    };
    return { gtagSendEvent };
};
