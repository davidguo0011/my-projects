import { selector, DefaultValue } from "recoil";
import { isUserChangePrice } from "../atoms/isUserChangePrice";

export const isUserChangePriceSelector = selector<boolean>({
    key: "isUserChangePriceSelector",
    get: ({ get }) => get(isUserChangePrice),
    set: ({ set }, newValue: boolean | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(isUserChangePrice, newValue);
        }
    },
});
