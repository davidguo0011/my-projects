import { selector, DefaultValue } from "recoil";
import { loggedInState } from "../atoms/loggedIn";

export const loggedInSelector = selector<boolean>({
    key: "loggedInSelector",
    get: ({ get }) => get(loggedInState),
    set: ({ set }, newValue: boolean | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(loggedInState, newValue);
        }
    },
});
