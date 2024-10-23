import { atom } from "recoil";

export const identityIdState = atom<string>({
    key: "identityIdState",
    default: "",
});
