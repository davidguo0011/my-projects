import { Instruction } from "../popups/updateCheckInOutInstructions";

export const initialInstruction = (value: string | null, isCheckIn: boolean): Instruction => {
    const defaultInstruction = {
        type: "None",
        checkInOutTime: {
            startTime: isCheckIn ? "15:00" : "9:00",
            endTime: isCheckIn ? "17:00" : "11:00",
        },
        steps: [{ step: 1, imgKey: "", instruction: "" }],
    };

    if (!value) {
        return defaultInstruction;
    }
    const copyInstruction: Instruction = JSON.parse(JSON.stringify(defaultInstruction));
    try {
        let result = JSON.parse(value);

        if (typeof result !== "object") {
            return copyInstruction;
        }
        if (result.type) {
            copyInstruction.type = result.type;
        }
        if (result.checkInOutTime) {
            copyInstruction.checkInOutTime = result.checkInOutTime;
        }
        if (result.steps) {
            copyInstruction.steps = result.steps;
        }
        return copyInstruction;
    } catch (e) {
        copyInstruction.steps[0].instruction = value;
        return copyInstruction;
    }
};
