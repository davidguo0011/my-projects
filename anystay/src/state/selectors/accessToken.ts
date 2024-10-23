import { selector, DefaultValue } from "recoil";
import { accessTokenState } from "../atoms/accessToken";

export const accessTokenSelector = selector<string>({
    key: "accessTokenSelector",
    get: ({ get }) => get(accessTokenState),
    set: ({ set }, newValue: string | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(accessTokenState, newValue);
        }
    },
});
