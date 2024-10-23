import { atom } from "recoil";

export const googleLoginErrState = atom<string | undefined>({
    key: "googleLoginErrState",
    default: undefined,
});
