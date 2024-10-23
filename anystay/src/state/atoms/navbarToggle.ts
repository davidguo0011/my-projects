import { atom } from "recoil";

export const mobileSearchMenuActivatedState = atom<boolean>({
    key: "mobileSearchMenuActivatedState",
    default: false,
});
export const navbarSearchMenuActivatedState = atom<boolean>({
    key: "navbarSearchMenuActivatedState",
    default: false,
});

export const signInMenuActivatedState = atom<boolean>({
    key: "signInMenuActivatedState",
    default: false,
});
