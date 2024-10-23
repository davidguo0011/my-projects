import { DefaultValue, selector } from "recoil";
import { userState } from "../atoms/user";
import { ExtendedCognitoUser } from "../../interfaces/models/user";

export const userSelector = selector<ExtendedCognitoUser | null>({
    key: "userSelector",
    get: ({ get }) => get(userState),
    set: ({ set }, newValue: ExtendedCognitoUser | null | DefaultValue) => {
        if (newValue instanceof DefaultValue) {
            set(userState, newValue)
        }
    },
});
