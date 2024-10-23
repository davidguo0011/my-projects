import { useState, useMemo } from "react";
import { EditListingAddRoomTitle, EditListingEditRoomTitleWordCount, EditListingUpdateCardContentInputTextarea } from "../../editListingStyling";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../../editListing";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";

interface EditRoomTitleProps extends RoomPopupProps {
    editRoomDescriptionCard: boolean;
    editRoomIndex: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function EditRoomDescription({ editRoomDescriptionCard, deactivateUpdateCards, editRoomIndex, listingData, setListingData, activateCard }: EditRoomTitleProps) {
    const [newDescription, setNewDescription] = useState(listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomDescription);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const room = useMemo(() => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0];
    }, [editRoomIndex, listingData.RoomModels.items]);

    const updateDescription = async () => {
        try {
            const updatedRoom = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room/description`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomid: room.id,
                    roomDescription: newDescription,
                },
            });
            let listingDataCopy = listingData;
            let roomIndex = listingDataCopy.RoomModels.items.findIndex((room) => room.id === updatedRoom.body.room.id);
            listingDataCopy.RoomModels.items[roomIndex] = updatedRoom.body.room;
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
            backBtnType="Arrow"
            backBtnDisabled={isContinueBtnLoading}
            cancelBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => {
                activateCard("editRoomCard");
            }}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await updateDescription();
            }}
        >
            <EditListingAddRoomTitle>How do you describe this room?</EditListingAddRoomTitle>
            <EditListingUpdateCardContentInputTextarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                maxLength={2500}
                placeholder="Please write a description for this room."
            />
            <EditListingEditRoomTitleWordCount>{2500 - newDescription.trim().length}</EditListingEditRoomTitleWordCount>
        </GlobalPopupContainerFullScreen>
    );
}
