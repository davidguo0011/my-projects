import { atom } from "recoil";
import { DraftListingState } from "../../interfaces/state/draftListing";

export const draftListingState = atom<DraftListingState>({
    key: "draftListingState",
    default: {
        draftListing: null,
        listingID: null,
    },
});
