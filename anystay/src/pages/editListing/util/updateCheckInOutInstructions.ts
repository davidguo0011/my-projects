import { callApi } from "../../../utils/api/api";
import { ListingDataInterface } from "../editListing";

interface UpdateCheckInOutInstructionsProps {
    instructions: string;
    isCheckIn: boolean;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
    accessToken: string;
    listingData: ListingDataInterface;
    deactivateUpdateCards?: () => Promise<void>;
}

export const updateCheckInOutInstructions = async ({ instructions, isCheckIn, setListingData, accessToken, listingData, deactivateUpdateCards }: UpdateCheckInOutInstructionsProps) => {
    try {
        const updated = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${isCheckIn ? "checkin" : "checkout"}-instructions`, {
            headers: {
                Authorization: accessToken,
                listingID: listingData.id,
            },
            body: isCheckIn ? { checkInInstructions: instructions } : { checkOutInstructions: instructions },
        });
        if (isCheckIn) {
            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, checkInInstructions: updated.body.listing.checkInInstructions }));
        } else {
            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, checkOutInstructions: updated.body.listing.checkOutInstructions }));
        }
        if (deactivateUpdateCards) {
            deactivateUpdateCards();
        }
    } catch (err) {
        console.log(err);
    }
};
