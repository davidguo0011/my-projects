import { selector } from "recoil";
import { userHostModelState } from "../atoms/userHostModel";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { ConversationModel } from "../../interfaces/models/conversationModel";

export const userHostModelSelector = selector<UserHostModel | null>({
    key: "userHostModelSelector",
    get: ({ get }) => get(userHostModelState),
    set: ({ set }, newValue) => set(userHostModelState, newValue),
});

export const userHostConversationsModelSelector = selector<ConversationModel[] | null | undefined>({
    key: "userHostConversationsModelSelector",
    get: ({ get }) => {
        return get(userHostModelState) ? (get(userHostModelState)?.ConversationModels ? get(userHostModelState)?.ConversationModels?.items : []) : [];
    },
});
