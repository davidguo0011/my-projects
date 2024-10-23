import { selector, DefaultValue } from "recoil";
import { ipState } from "../atoms/ip";
import { IpState } from "../../interfaces/state/ip";

export const ipSelector = selector<IpState>({
    key: "ipSelector",
    get: ({ get }) => get(ipState),
    set: ({ set }, newValue: IpState | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(ipState, newValue);
        }
    },
});
