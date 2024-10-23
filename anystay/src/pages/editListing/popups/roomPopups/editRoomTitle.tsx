import { useState, useMemo } from "react";
import { EditListingUpdateCardContentInputText, EditListingAddRoomTitle, EditListingEditRoomTitleWordCount } from "../../editListingStyling";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../../editListing";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";

interface EditRoomTitleProps extends RoomPopupProps {
    editRoomTitleCard: boolean;
    editRoomIndex: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function EditRoomTitle({ editRoomTitleCard, deactivateUpdateCards, editRoomIndex, listingData, setListingData, activateCard }: EditRoomTitleProps) {
    const [newTitle, setNewTitle] = useState(listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0].roomTitle);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const room = useMemo(() => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0];
    }, [editRoomIndex, listingData.RoomModels.items]);

    const updateTitle = async () => {
        try {
            const updatedRoom = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room/title`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomid: room.id,
                    title: newTitle,
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
            backBtnType="Arrow"
            backBtnOnClick={() => {
                activateCard("editRoomCard");
            }}
            backBtnDisabled={isContinueBtnLoading}
            cancelBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => {
                activateCard("editRoomCard");
            }}
            continueBtnDisabled={isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await updateTitle();
            }}
        >
            <EditListingAddRoomTitle>What is your room called?</EditListingAddRoomTitle>
            <EditListingUpdateCardContentInputText type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} maxLength={30} />
            <EditListingEditRoomTitleWordCount>{30 - newTitle.length}</EditListingEditRoomTitleWordCount>
        </GlobalPopupContainerFullScreen>
    );
}
