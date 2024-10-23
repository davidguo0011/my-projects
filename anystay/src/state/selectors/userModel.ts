import { selector, DefaultValue } from "recoil";
import { userModelState } from "../atoms/userModel";
import { UserModel } from "../../interfaces/models/userModel";

export const userModelSelector = selector<UserModel | null>({
    key: "userModelSelector",
    get: ({ get }) => get(userModelState),
    set: ({ set }, newValue) => set(userModelState, newValue),
});

export const guestModeSelector = selector<boolean | null | undefined>({
    key: "guestModeSelector",
    get: ({ get }) => {
        const userModel = get(userModelState);
        return userModel ? userModel.guestMode : true;
    },
    set: ({ set }, newValue: boolean | null | undefined | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(userModelState, (prevState) => {
                if (prevState === null) {
                    // Handle the case where there's no previous state
                    return { guestMode: newValue } as UserModel;
                }
                return {
                    ...prevState,
                    guestMode: newValue,
                };
            });
        }
    },
});
