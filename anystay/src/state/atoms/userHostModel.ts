import { atom } from "recoil";
import { UserHostModel } from "../../interfaces/models/userHostModel";

export const userHostModelState = atom<UserHostModel | null>({
    key: "userHostModelState",
    default: null,
});
