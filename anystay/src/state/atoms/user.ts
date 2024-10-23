import { atom } from "recoil";
import { ExtendedCognitoUser } from "../../interfaces/models/user";

export const userState = atom<ExtendedCognitoUser | null>({
    key: "userState",
    default: null,
});
