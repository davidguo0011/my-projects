import { atom } from "recoil";

export const directToAfterLoginState = atom<string>({
    key: "directToAfterLoginState",
    default: "",
});
