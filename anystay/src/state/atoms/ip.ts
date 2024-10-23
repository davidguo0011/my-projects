import { atom } from "recoil";
import { IpState } from "../../interfaces/state/ip";

export const ipState = atom<IpState>({
    key: "ipState",
    default: {
        ip: null,
        geoData: null,
        ipBlocked: false,
        ipBlockedWarning: false,
    },
});
