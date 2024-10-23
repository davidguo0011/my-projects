import { useState } from "react";
import GlobalPopupContainerFullScreen from "../../../components/globalPopup/GlobalPopupContainerFullScreen";
import { PopupProps } from "../PopupContainer/PopupContainer";
import {
    EditListingCheckInOutInstructionSubtitle,
    EditListingCheckInOutInstructionTitle,
    EditListingCheckInOutTimeDivider,
    EditListingCheckInOutTimeInputWrapper,
    EditListingCheckInOutTimeRangeWrapper,
} from "../editListingStyling";
import { Datepicker } from "@mobiscroll/react";
import { Instruction } from "./updateCheckInOutInstructions";
import { initialInstruction } from "../util/initialInstruction";
import { callApi } from "../../../utils/api/api";
import { ListingDataInterface } from "../editListing";
import { updateCheckInOutInstructions } from "../util/updateCheckInOutInstructions";

const getTimeNum = (time: string) => {
    return parseInt(time.replace(":", ""));
};

interface UpdateCheckInOutTimeProps extends PopupProps {
    isCheckIn: boolean;
    activateCard: (cardName: string) => void;
}

const UpdateCheckInOutTime = ({ isCheckIn, setListingData, listingData, deactivateUpdateCards, activateCard, accessToken }: UpdateCheckInOutTimeProps) => {
    const initInstruction = initialInstruction(isCheckIn ? listingData.checkInInstructions : listingData.checkOutInstructions, isCheckIn);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [instruction, setInstruction] = useState<string>(JSON.stringify(initInstruction));
    const [startTime, setStartTime] = useState<string>(initInstruction.checkInOutTime.startTime);
    const [endTime, setEndTime] = useState<string>(initInstruction.checkInOutTime.endTime);

    const addCheckInOutTime = (time: string, isStartTime: boolean) => {
        const newInstruction = isStartTime
            ? { ...initInstruction, checkInOutTime: { startTime: time, endTime: endTime } }
            : { ...initInstruction, checkInOutTime: { startTime: startTime, endTime: time } };

        setInstruction(JSON.stringify(newInstruction));
    };
    const updateCheckInCheckOutTime = async (checkInTime: number, checkOutTime: number) => {
        try {
            const updatedCheckInCheckOutTime = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/checkin-checkout-time`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    checkInTime: checkInTime,
                    checkOutTime: checkOutTime,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({
                ...prev!,
                checkInTime: updatedCheckInCheckOutTime.body.listing.checkInTime,
                checkOutTime: updatedCheckInCheckOutTime.body.listing.checkOutTime,
            }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };
    return (
        <GlobalPopupContainerFullScreen
            mobileHeight="55%"
            backBtnOnClick={() => {
                deactivateUpdateCards();
                activateCard(isCheckIn ? "updateCheckInInstructionsCard" : "updateCheckOutInstructionsCard");
            }}
            backBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => deactivateUpdateCards()}
            cancelBtnDisabled={isContinueBtnLoading}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await updateCheckInOutInstructions({ instructions: instruction, isCheckIn, setListingData, accessToken, listingData });
                await updateCheckInCheckOutTime(isCheckIn ? getTimeNum(startTime) : listingData.checkInTime, !isCheckIn ? getTimeNum(endTime) : listingData.checkOutTime);
                activateCard(isCheckIn ? "updateCheckInInstructionsCard" : "updateCheckOutInstructionsCard");
            }}
        >
            <EditListingCheckInOutInstructionTitle>{isCheckIn ? "Check-in" : "Check-out"} time</EditListingCheckInOutInstructionTitle>
            <EditListingCheckInOutInstructionSubtitle>Let guests know when they can {isCheckIn ? "arrive at" : "depart from"} your place.</EditListingCheckInOutInstructionSubtitle>
            <EditListingCheckInOutTimeRangeWrapper>
                <EditListingCheckInOutTimeInputWrapper>
                    <Datepicker
                        controls={["time"]}
                        select="date"
                        timeFormat="H:00"
                        touchUi={true}
                        theme="auto"
                        themeVariant="light"
                        placeholder="From"
                        value={startTime}
                        valid={isCheckIn ? [{ start: "00:00", end: "15:00" }] : [{ start: "00:00", end: "23:00" }]}
                        onChange={(value) => {
                            setStartTime(value.valueText as string);
                            addCheckInOutTime(value.valueText as string, true);
                        }}
                    />
                </EditListingCheckInOutTimeInputWrapper>
                <EditListingCheckInOutTimeDivider />
                <EditListingCheckInOutTimeInputWrapper>
                    <Datepicker
                        controls={["time"]}
                        select="date"
                        timeFormat="H:00"
                        touchUi={true}
                        theme="auto"
                        themeVariant="light"
                        placeholder="To"
                        value={endTime}
                        valid={!isCheckIn ? [{ start: "00:00", end: "16:00" }] : [{ start: "00:00", end: "23:00" }]}
                        onChange={(value) => {
                            setEndTime(value.valueText as string);
                            addCheckInOutTime(value.valueText as string, false);
                        }}
                    />
                </EditListingCheckInOutTimeInputWrapper>
            </EditListingCheckInOutTimeRangeWrapper>
        </GlobalPopupContainerFullScreen>
    );
};

export default UpdateCheckInOutTime;
