// Define the interface for the IP state
export interface IpState {
    ip: string | null;
    geoData: any | null; // Replace 'GeoData' with the actual type if available
    ipBlocked: boolean;
    ipBlockedWarning: boolean;
}