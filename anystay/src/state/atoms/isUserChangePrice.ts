import { atom } from "recoil";

export const isUserChangePrice = atom<boolean>({
    key: "isUserChangePrice",
    default: false,
});
