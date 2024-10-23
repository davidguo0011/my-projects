import { selector, DefaultValue } from "recoil";
import { directToAfterLoginState } from "../atoms/directToAfterLogin";

export const directToAfterLoginSelector = selector<string>({
    key: "directToAfterLoginSelector",
    get: ({ get }) => get(directToAfterLoginState),
    set: ({ set }, newValue: string | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(directToAfterLoginState, newValue);
        }
    },
});
