import {
    EditListingCheckInInstructionTitle,
    EditListingCheckInInstructionSubtitle,
    EditListingCheckInInstruction,
    EditListingCheckInInstructionTitleWrapper,
    EditListingCheckInInstructionSubtitleAndImgWrapper,
    EditListingCheckInInstructionImg,
    EditListingCheckInInstructionImgWrapper,
} from "./YourStaysPopupStyle";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";
import { Instruction } from "../../editListing/popups/updateCheckInOutInstructions";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { initialInstruction } from "../../editListing/util/initialInstruction";

interface YourStaysCheckInInstructionsProps {
    deactivatePopupCards: () => Promise<void>;
    checkInInstructions?: string | null;
}

export default function YourStaysCheckInInstructions({ deactivatePopupCards, checkInInstructions }: YourStaysCheckInInstructionsProps) {
    const initialInstructions: Instruction = initialInstruction(checkInInstructions ? checkInInstructions : "", true);

    return (
        <GlobalPopupContainerFullScreen backBtnOnClick={deactivatePopupCards} noContentWrapper={true}>
            <EditListingCheckInInstruction>
                <EditListingCheckInInstructionTitleWrapper>
                    <EditListingCheckInInstructionTitle>Check-in after {initialInstructions.checkInOutTime.startTime}</EditListingCheckInInstructionTitle>
                    {initialInstructions &&
                        initialInstructions.steps.map((item, index) => (
                            <EditListingCheckInInstructionSubtitleAndImgWrapper key={`instruction step ${index}`}>
                                <EditListingCheckInInstructionSubtitle>{item.instruction ? item.instruction : "There is no instruction for this step right now"}</EditListingCheckInInstructionSubtitle>
                                <EditListingCheckInInstructionImgWrapper hasImg={item.imgKey ? true : false}>
                                    {item.imgKey && <EditListingCheckInInstructionImg src={constructOptimisedImageUrl(item.imgKey)} />}
                                </EditListingCheckInInstructionImgWrapper>
                            </EditListingCheckInInstructionSubtitleAndImgWrapper>
                        ))}
                </EditListingCheckInInstructionTitleWrapper>
            </EditListingCheckInInstruction>
        </GlobalPopupContainerFullScreen>
    );
}
