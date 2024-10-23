import { selector, DefaultValue } from "recoil";
import { identityIdState } from "../atoms/identityId";

export const identityIdSelector = selector<string>({
    key: "identityIdSelector",
    get: ({ get }) => get(identityIdState),
    set: ({ set }, newValue: string | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(identityIdState, newValue);
        }
    },
});
