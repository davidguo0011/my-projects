import { useState } from "react";
import { EditListingCheckInOutInstructionTitle, EditListingCheckInOutInstructionSubtitle, EditListingEditRoomAttributesWrapper } from "../editListingStyling";
import { PopupProps } from "../PopupContainer/PopupContainer";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";
import EditContentBtnCard from "../components/editContentBtnCard";
import { initialInstruction } from "../util/initialInstruction";

export interface Instruction {
    type: string;
    checkInOutTime: { startTime: string; endTime: string };
    steps: { step: number; imgKey: string; instruction: string }[];
}

interface UpdateCheckInInstructionsProps extends PopupProps {
    isCheckIn: boolean;
    activateCard: (cardName: string) => void;
}

export default function UpdateCheckInInstructions({ isCheckIn, deactivateUpdateCards, listingData, accessToken, setListingData, activateCard }: UpdateCheckInInstructionsProps) {
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const instruction = initialInstruction(isCheckIn ? listingData.checkInInstructions : listingData.checkOutInstructions, isCheckIn);
    return (
        <GlobalPopupContainerFullScreen
            backBtnOnClick={deactivateUpdateCards}
            cancelBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => {
                deactivateUpdateCards();
            }}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={() => {
                deactivateUpdateCards();
            }}
            continueBtnText="Done"
        >
            <EditListingCheckInOutInstructionTitle>{isCheckIn ? "Check-in" : "Check-out"} instructions</EditListingCheckInOutInstructionTitle>
            <EditListingCheckInOutInstructionSubtitle>Write detailed {isCheckIn ? "check-in" : "check-out"} instructions for your guest</EditListingCheckInOutInstructionSubtitle>
            <EditListingEditRoomAttributesWrapper>
                <EditContentBtnCard
                    withImg
                    textCenter
                    title={isCheckIn ? "Check-in guide" : "Check-out guide"}
                    onClick={() => {
                        deactivateUpdateCards();
                        activateCard(`${isCheckIn ? "updateCheckInStepsCard" : "updateCheckOutStepsCard"}`);
                    }}
                />
                <EditContentBtnCard
                    title="Type"
                    subTitle={instruction.type}
                    onClick={() => {
                        activateCard(`${isCheckIn ? "updateCheckInTypeCard" : "updateCheckOutTypeCard"}`);
                    }}
                />
                <EditContentBtnCard
                    title={isCheckIn ? "Check-in time" : "Check-out time"}
                    subTitle={`${instruction.checkInOutTime.startTime} - ${instruction.checkInOutTime.endTime}`}
                    onClick={() => {
                        activateCard(`${isCheckIn ? "updateCheckInTimeCard" : "updateCheckOutTimeCard"}`);
                    }}
                />
            </EditListingEditRoomAttributesWrapper>
        </GlobalPopupContainerFullScreen>
    );
}
