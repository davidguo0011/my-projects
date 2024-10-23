declare module "react-heart";

declare module "@analytics/segment";

interface Window {
    fbq: (eventType: string, eventName: string, parameters?: object) => void;
}

declare function fbq(eventType: string, eventName: string, parameters?: object): void;
