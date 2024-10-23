import { atom } from "recoil";
import { UserModel } from "../../interfaces/models/userModel";

export const userModelState = atom<UserModel | null>({
    key: "userModelState",
    default: null,
});
