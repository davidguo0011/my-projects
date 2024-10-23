import { useState } from "react";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { EditListingCheckInOutInstructionSubtitle, EditListingCheckInOutInstructionTitle, EditListingUpdateCardSelectWrapper } from "../editListingStyling";
import CustomSelect from "../../../components/select/customSelect";
import { Instruction } from "./updateCheckInOutInstructions";
import { initialInstruction } from "../util/initialInstruction";
import { updateCheckInOutInstructions } from "../util/updateCheckInOutInstructions";

const options = [
    { value: "Smart lock", label: "Smart lock" },
    { value: "Keypad", label: "Keypad" },
    { value: "Lockbox", label: "Lockbox" },
    { value: "In-person greeting", label: "In-person greeting" },
    { value: "Other", label: "Other" },
];

interface UpdateCheckInOutTypeProps extends PopupProps {
    isCheckIn: boolean;
    activateCard: (cardName: string) => void;
}

const UpdateCheckInOutType = ({ isCheckIn, setListingData, listingData, deactivateUpdateCards, activateCard, accessToken }: UpdateCheckInOutTypeProps) => {
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [instruction, setInstruction] = useState<Instruction>(initialInstruction(isCheckIn ? listingData.checkInInstructions : listingData.checkOutInstructions, isCheckIn));
    const addCheckInOutType = (type: string) => {
        setInstruction((prev) => {
            return { ...prev, type: type };
        });
    };
    console.log("checkinOUT type");
    return (
        <GlobalPopupContainerFullScreen
            mobileHeight="55%"
            backBtnOnClick={() => {
                deactivateUpdateCards();
                activateCard(`${isCheckIn ? "updateCheckInInstructionsCard" : "updateCheckOutInstructionsCard"}`);
            }}
            backBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => deactivateUpdateCards()}
            cancelBtnDisabled={isContinueBtnLoading}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await updateCheckInOutInstructions({ instructions: JSON.stringify(instruction), isCheckIn, setListingData, accessToken, listingData, deactivateUpdateCards });
                activateCard(`${isCheckIn ? "updateCheckInInstructionsCard" : "updateCheckOutInstructionsCard"}`);
            }}
        >
            <EditListingCheckInOutInstructionTitle>How can guests {isCheckIn ? "check-in" : "check-out"}?</EditListingCheckInOutInstructionTitle>
            <EditListingCheckInOutInstructionSubtitle>Please select {isCheckIn ? "check-in" : "check-out"} type for your guest</EditListingCheckInOutInstructionSubtitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    options={options}
                    onChange={(value) => {
                        addCheckInOutType((value as { value: string; label: string }).value);
                    }}
                    placeholder={`Select ${isCheckIn ? "check-in" : "check-out"} type`}
                    initialValue={{ value: instruction.type, label: instruction.type }}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
        </GlobalPopupContainerFullScreen>
    );
};

export default UpdateCheckInOutType;
