import { selector, DefaultValue } from "recoil";
import { draftListingState } from "../atoms/draftListing";
import { DraftListingState } from "../../interfaces/state/draftListing";

export const draftListingSelector = selector<DraftListingState>({
    key: "draftListingSelector",
    get: ({ get }) => get(draftListingState),
    set: ({ set }, newValue: DraftListingState | DefaultValue) => {
        if (!(newValue instanceof DefaultValue)) {
            return set(draftListingState, newValue);
        }
    },
});
