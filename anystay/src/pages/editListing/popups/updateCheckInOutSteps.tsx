import { ChangeEvent, useEffect, useRef, useState } from "react";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";
import { PopupProps } from "../PopupContainer/PopupContainer";
import {
    EditListingCheckInOutInstructionSubtitle,
    EditListingCheckInOutInstructionTitle,
    EditListingCheckInOutStep,
    EditListingCheckInOutStepAddDeleteBtn,
    EditListingCheckInOutStepAddDeleteBtnIcon,
    EditListingCheckInOutStepImgUploadWrapper,
    EditListingCheckInOutStepsWrapper,
    EditListingUpdateCardContentInputTextarea,
} from "../editListingStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import ImgComponent from "../../../components/imageComponent/ImgComponent";
import { Storage } from "aws-amplify";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { Instruction } from "./updateCheckInOutInstructions";
import { initialInstruction } from "../util/initialInstruction";
import { updateCheckInOutInstructions } from "../util/updateCheckInOutInstructions";

interface UpdateCheckInOutStepsProps extends PopupProps {
    isCheckIn: boolean;
    activateCard: (cardName: string) => void;
}

const makeid = (length: number) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const UpdateCheckInOutSteps = ({ isCheckIn, setListingData, listingData, deactivateUpdateCards, activateCard, accessToken }: UpdateCheckInOutStepsProps) => {
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [instruction, setInstruction] = useState<Instruction>(initialInstruction(isCheckIn ? listingData.checkInInstructions : listingData.checkOutInstructions, isCheckIn));
    const fileInputRefs = useRef<{ [key: number]: HTMLInputElement }>({});
    const stepRefs = useRef<{ [key: number]: HTMLDivElement }>({});

    const addStepPhoto = (imgKey: string, index: number) => {
        setInstruction((prev) => {
            const newStep = prev.steps.map((prevStep) => (prevStep.step === index ? { ...prevStep, imgKey: imgKey } : prevStep));
            return { ...prev, steps: newStep };
        });
    };

    const handleImageInputChange = async (e: ChangeEvent<HTMLInputElement>, index: number): Promise<void> => {
        const file = e.target.files![0];
        try {
            if (file) {
                await Storage.put(makeid(12), file, {
                    contentType: "image/*",
                }).then((res) => {
                    addStepPhoto(res.key, index);
                });
            } else {
                console.log("No file selected.");
            }
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    };
    const handleInstructionTextChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number): void => {
        setInstruction((prev) => {
            const newStep = prev.steps.map((prevStep) => (prevStep.step === index + 1 ? { ...prevStep, instruction: e.target.value } : prevStep));
            return { ...prev, steps: newStep };
        });
    };

    const handleAddDeleteStep = (index: number) => {
        if (instruction.steps.length - 1 === index) {
            setInstruction((prev) => {
                return { ...prev, steps: [...prev.steps, { step: index + 2, imgKey: "", instruction: "" }] };
            });
            setTimeout(() => {
                stepRefs.current[index + 1].scrollIntoView({ behavior: "smooth", block: "end" });
            }, 0);
        } else {
            setInstruction((prev) => {
                const newInstructionSteps = prev.steps.filter((step, i) => i !== index + 1);
                return { ...prev, steps: newInstructionSteps.map((item, i) => ({ step: i + 1, imgKey: item.imgKey, instruction: item.instruction })) };
            });
            setTimeout(() => {
                stepRefs.current[index].scrollIntoView({ behavior: "smooth", block: "end" });
            }, 0);
        }
    };
    const setInputRef = (index: number, el: HTMLInputElement | null) => {
        if (el) {
            fileInputRefs.current[index] = el;
        } else {
            delete fileInputRefs.current[index];
        }
    };
    const setStepRef = (index: number, el: HTMLDivElement | null) => {
        if (el) {
            stepRefs.current[index] = el;
        } else {
            delete stepRefs.current[index];
        }
    };
    return (
        <GlobalPopupContainerFullScreen
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
            <EditListingCheckInOutInstructionTitle>{isCheckIn ? "Check-in" : "Check-out"} guide</EditListingCheckInOutInstructionTitle>
            <EditListingCheckInOutInstructionSubtitle>Write detailed {isCheckIn ? "check-in" : "check-out"} instructions for your guest</EditListingCheckInOutInstructionSubtitle>
            <EditListingCheckInOutStepsWrapper>
                {instruction.steps.map((step, index) => (
                    <EditListingCheckInOutStep key={`instruction step: ${index}`} ref={(el) => setStepRef(index, el)}>
                        <EditListingCheckInOutStepImgUploadWrapper>
                            <ImgComponent
                                width="128px"
                                hasImage={step.imgKey ? true : false}
                                noShadow={step.imgKey ? false : true}
                                hasBackground={step.imgKey ? false : true}
                                src={step.imgKey ? constructOptimisedImageUrl(step.imgKey) : "https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"}
                                alt="check-in/out step image"
                                cursorStyle="unset"
                            />
                            <input style={{ display: "none" }} type="file" name="file" ref={(el) => setInputRef(index, el)} onChange={(e) => handleImageInputChange(e, step.step)} />
                            <ContinueBtn
                                background="black"
                                style={{ width: "unset", borderRadius: "100px", marginTop: "unset" }}
                                onClick={() => {
                                    if (fileInputRefs.current && fileInputRefs.current[index]) {
                                        fileInputRefs.current[index]?.click();
                                    }
                                }}
                                isLoading={isContinueBtnLoading}
                                disabled={isContinueBtnLoading}
                            >
                                Upload Photo
                            </ContinueBtn>
                        </EditListingCheckInOutStepImgUploadWrapper>
                        <EditListingUpdateCardContentInputTextarea
                            height="117px"
                            maxLength={2000}
                            placeholder="Type your instruction"
                            margin="32px 0"
                            value={step.instruction}
                            onChange={(e) => handleInstructionTextChange(e, index)}
                        />
                        <EditListingCheckInOutStepAddDeleteBtn
                            onClick={() => {
                                handleAddDeleteStep(index);
                            }}
                        >
                            <EditListingCheckInOutStepAddDeleteBtnIcon
                                src={
                                    instruction.steps.length - 1 === index
                                        ? "https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"
                                        : "https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg"
                                }
                                alt="check-in check-out step add/delete button icon"
                            />
                        </EditListingCheckInOutStepAddDeleteBtn>
                    </EditListingCheckInOutStep>
                ))}
            </EditListingCheckInOutStepsWrapper>
        </GlobalPopupContainerFullScreen>
    );
};

export default UpdateCheckInOutSteps;
