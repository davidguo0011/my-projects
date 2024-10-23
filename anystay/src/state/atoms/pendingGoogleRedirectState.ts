import { atom } from "recoil";

export const pendingGoogleRedirectState = atom<string | null>({
    key: "pendingGoogleRedirectState",
    default: null,
});
