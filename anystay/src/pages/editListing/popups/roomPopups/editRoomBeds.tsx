import { useState, useMemo } from "react";
import {
    BedSelectorButtonWrapper,
    BedSelectorButtonTitle,
    BedSelectorButtonSelectorWrapper,
    BedSelectorButtonSelector,
    BedSelectorButtonSelectorValue,
    EditListingAddRoomTitle,
    EditListingEditBedSubtitle,
} from "../../editListingStyling";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../../editListing";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import { RoomModel } from "../../../../interfaces/models/roomModel";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";

interface EditRoomBedsProps extends RoomPopupProps {
    editRoomBedsCard: boolean;
    editRoomIndex: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function EditRoomBeds({ editRoomBedsCard, deactivateUpdateCards, editRoomIndex, activateCard, listingData, setListingData }: EditRoomBedsProps) {
    const [bedNum, setBedNum] = useState({
        singleBeds: listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomBeds.filter((bed) => bed === "single").length,
        doubleBeds: listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomBeds.filter((bed) => bed === "double").length,
        queenBeds: listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomBeds.filter((bed) => bed === "queen").length,
        kingBeds: listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomBeds.filter((bed) => bed === "king").length,
    });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const room = useMemo(() => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0];
    }, [editRoomIndex, listingData.RoomModels.items]);

    const updateBeds = async () => {
        try {
            let newBeds = [];

            for (let s = 0; s < bedNum.singleBeds; s++) {
                newBeds.push("single");
            }

            for (let s = 0; s < bedNum.doubleBeds; s++) {
                newBeds.push("double");
            }

            for (let s = 0; s < bedNum.queenBeds; s++) {
                newBeds.push("queen");
            }

            for (let s = 0; s < bedNum.kingBeds; s++) {
                newBeds.push("king");
            }

            const updated = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room/beds`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomid: room.id,
                    beds: newBeds,
                },
            });

            let listingDataCopy = JSON.parse(JSON.stringify(listingData));

            let roomIndex = listingDataCopy.RoomModels.items.findIndex((room: RoomModel) => room.id === updated.body.room.id);

            listingDataCopy.RoomModels.items[roomIndex] = updated.body.room;

            setListingData(listingDataCopy);
            activateCard("editRoomCard");
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    return (
        <GlobalPopupContainerFullScreen
            mobileHeight="55%"
            backBtnOnClick={() => {
                activateCard("editRoomCard");
            }}
            backBtnDisabled={isContinueBtnLoading}
            backBtnType="Arrow"
            cancelBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => {
                activateCard("editRoomCard");
            }}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await updateBeds();
            }}
        >
            <EditListingAddRoomTitle marginBottom="8px">What beds are in your room?</EditListingAddRoomTitle>
            <EditListingEditBedSubtitle>Select available bed types in your bedroom.</EditListingEditBedSubtitle>
            <BedSelectorButtonWrapper>
                <BedSelectorButtonTitle>Single bed</BedSelectorButtonTitle>
                <BedSelectorButtonSelectorWrapper>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.singleBeds < 10) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    singleBeds: prevState.singleBeds + 1,
                                }));
                            }
                        }}
                    >
                        +
                    </BedSelectorButtonSelector>
                    <BedSelectorButtonSelectorValue>{bedNum.singleBeds}</BedSelectorButtonSelectorValue>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.singleBeds > 0) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    singleBeds: prevState.singleBeds - 1,
                                }));
                            }
                        }}
                        disabled={bedNum.singleBeds === 0}
                    >
                        -
                    </BedSelectorButtonSelector>
                </BedSelectorButtonSelectorWrapper>
            </BedSelectorButtonWrapper>
            <BedSelectorButtonWrapper>
                <BedSelectorButtonTitle>Double bed</BedSelectorButtonTitle>
                <BedSelectorButtonSelectorWrapper>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.doubleBeds < 10) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    doubleBeds: prevState.doubleBeds + 1,
                                }));
                            }
                        }}
                    >
                        +
                    </BedSelectorButtonSelector>
                    <BedSelectorButtonSelectorValue>{bedNum.doubleBeds}</BedSelectorButtonSelectorValue>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.doubleBeds > 0) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    doubleBeds: prevState.doubleBeds - 1,
                                }));
                            }
                        }}
                        disabled={bedNum.doubleBeds === 0}
                    >
                        -
                    </BedSelectorButtonSelector>
                </BedSelectorButtonSelectorWrapper>
            </BedSelectorButtonWrapper>
            <BedSelectorButtonWrapper>
                <BedSelectorButtonTitle>Queen bed</BedSelectorButtonTitle>
                <BedSelectorButtonSelectorWrapper>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.queenBeds < 10) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    queenBeds: prevState.queenBeds + 1,
                                }));
                            }
                        }}
                    >
                        +
                    </BedSelectorButtonSelector>
                    <BedSelectorButtonSelectorValue>{bedNum.queenBeds}</BedSelectorButtonSelectorValue>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.queenBeds > 0) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    queenBeds: prevState.queenBeds - 1,
                                }));
                            }
                        }}
                        disabled={bedNum.queenBeds === 0}
                    >
                        -
                    </BedSelectorButtonSelector>
                </BedSelectorButtonSelectorWrapper>
            </BedSelectorButtonWrapper>
            <BedSelectorButtonWrapper>
                <BedSelectorButtonTitle>King bed</BedSelectorButtonTitle>
                <BedSelectorButtonSelectorWrapper>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.kingBeds < 10) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    kingBeds: prevState.kingBeds + 1,
                                }));
                            }
                        }}
                    >
                        +
                    </BedSelectorButtonSelector>
                    <BedSelectorButtonSelectorValue>{bedNum.kingBeds}</BedSelectorButtonSelectorValue>
                    <BedSelectorButtonSelector
                        onClick={() => {
                            if (bedNum.kingBeds > 0) {
                                setBedNum((prevState) => ({
                                    ...prevState,
                                    kingBeds: prevState.kingBeds - 1,
                                }));
                            }
                        }}
                        disabled={bedNum.kingBeds === 0}
                    >
                        -
                    </BedSelectorButtonSelector>
                </BedSelectorButtonSelectorWrapper>
            </BedSelectorButtonWrapper>
        </GlobalPopupContainerFullScreen>
    );
}
