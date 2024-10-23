import { selector, DefaultValue } from "recoil";
import { googleLoginErrState } from "../atoms/googleLoginErr";

export const googleLoginErrStateSelector = selector<string | undefined>({
    key: "googleLoginErrStateSelector",
    get: ({ get }) => get(googleLoginErrState),
    set: ({ set }, newValue: string | undefined | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(googleLoginErrState, newValue);
        }
    },
});
