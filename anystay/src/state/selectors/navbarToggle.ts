import { DefaultValue, selector } from "recoil";
import { mobileSearchMenuActivatedState, signInMenuActivatedState, navbarSearchMenuActivatedState } from "../atoms/navbarToggle";

export const mobileSearchMenuActivatedSelector = selector<boolean>({
    key: "mobileSearchMenuActivatedSelector",
    get: ({ get }) => get(mobileSearchMenuActivatedState),
    set: ({ set }, newValue: boolean | DefaultValue) => {
        return set(mobileSearchMenuActivatedState, newValue);
    },
});

export const navbarSearchMenuActivatedSelector = selector<boolean>({
    key: "navbarSearchMenuActivatedSelector",
    get: ({ get }) => get(navbarSearchMenuActivatedState),
    set: ({ set }, newValue: boolean | DefaultValue) => {
        return set(navbarSearchMenuActivatedState, newValue);
    },
});

export const signInMenuActivatedSelector = selector<boolean>({
    key: "signInMenuActivatedSelector",
    get: ({ get }) => get(signInMenuActivatedState),
    set: ({ set }, newValue: boolean | DefaultValue) => {
        return set(signInMenuActivatedState, newValue);
    },
});
