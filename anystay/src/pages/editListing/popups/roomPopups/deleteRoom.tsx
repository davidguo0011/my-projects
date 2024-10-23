import { useState, useMemo } from "react";
import { EditListingDeleteRoomTitle, EditListingDeleteRoomSubtitle, EditListingDeleteRoomIcon, EditListingDeleteRoomWrapper } from "../../editListingStyling";
import useClickOutside from "../../../../hook/useClickOutside";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../../editListing";
import { RoomModel } from "../../../../interfaces/models/roomModel";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";

interface DeleteRoomProps extends RoomPopupProps {
    deleteRoomCard: boolean;
    editRoomIndex: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

interface RoomInterface extends RoomModel {
    title: string;
}

export default function DeleteRoom({ deleteRoomCard, deactivateUpdateCards, editRoomIndex, listingData, setListingData, activateCard }: DeleteRoomProps) {
    const wrapperRef = useClickOutside(deleteRoomCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const room = useMemo((): RoomInterface => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0] as RoomInterface;
    }, [editRoomIndex, listingData.RoomModels.items]);

    const updateRooms = async () => {
        try {
            const res = await callApi("del", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomid: room.id,
                },
            });
            const listingDataCopy = JSON.parse(JSON.stringify(listingData));
            listingDataCopy.RoomModels.items = listingDataCopy.RoomModels.items.filter((room: RoomInterface) => room.id !== res.body.room.id);
            listingDataCopy.bathrooms = res.body.bathroomNumber;
            listingDataCopy.bedrooms = res.body.bedroomNumber;
            setListingData(listingDataCopy);
            activateCard("updateRoomsCard");
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleDelete = async () => {
        setIsContinueBtnLoading(true);
        await updateRooms();
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleDelete}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Delete"
            backBtnType="Close"
        >
            <EditListingDeleteRoomWrapper>
                <EditListingDeleteRoomIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Warning icon" />
                {room && <EditListingDeleteRoomTitle>Delete {room.title}?</EditListingDeleteRoomTitle>}
                <EditListingDeleteRoomSubtitle>Any details you have entered will be removed</EditListingDeleteRoomSubtitle>
            </EditListingDeleteRoomWrapper>
        </GlobalPopupContainerCenter>
    );
}
