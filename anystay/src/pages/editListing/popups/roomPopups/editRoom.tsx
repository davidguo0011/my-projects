import { useMemo } from "react";
import { EditListingAddRoomTitle, EditListingEditRoomAttributesWrapper } from "../../editListingStyling";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";
import EditContentBtnCard from "../../components/editContentBtnCard";

interface EditRoomProps extends RoomPopupProps {
    editRoomCard: boolean;
    editRoomIndex: string;
}

export default function EditRoom({ editRoomCard, deactivateUpdateCards, listingData, editRoomIndex, activateCard }: EditRoomProps) {
    const room = useMemo(() => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0];
    }, [editRoomIndex, listingData.RoomModels.items]);

    if (!room) return null;

    const getFormattedBeds = (beds: string[]) => {
        const bedCounts: { [key: string]: number } = {
            single: 0,
            double: 0,
            queen: 0,
            king: 0,
        };
        beds.forEach((bed) => {
            bedCounts[bed]++;
        });
        const formattedBeds = Object.entries(bedCounts)
            .filter(([type, count]) => count > 0)
            .map(([type, count]) => `${count} ${type} bed${count > 1 ? "s" : ""}`)
            .join(", ");

        return formattedBeds;
    };

    return (
        <GlobalPopupContainerFullScreen
            backBtnOnClick={() => {
                deactivateUpdateCards();
                activateCard("updateRoomsCard");
            }}
            backBtnType="Arrow"
            cancelBtnOnClick={() => {
                activateCard("deleteRoomCard");
            }}
            cancelBtnText="Delete room"
            continueBtnOnClick={() => {
                deactivateUpdateCards();
                activateCard("updateRoomsCard");
            }}
        >
            <EditListingAddRoomTitle>{room.roomTitle}</EditListingAddRoomTitle>
            <EditListingEditRoomAttributesWrapper>
                <EditContentBtnCard
                    withImg
                    imgSrc={room.images[0] ? constructOptimisedImageUrl(room.images[0], 200) : ""}
                    textCenter
                    textGap="4px"
                    title="Photo"
                    subTitle={room.images[0] ? "Selected" : "None"}
                    onClick={() => {
                        deactivateUpdateCards();
                        activateCard("editRoomImageCard");
                    }}
                />
                <EditContentBtnCard
                    title="Title"
                    subTitle={room.roomTitle}
                    onClick={() => {
                        deactivateUpdateCards();
                        activateCard("editRoomTitleCard");
                    }}
                />
                <EditContentBtnCard
                    title="Description"
                    subTitle={room.roomDescription ? room.roomDescription : "None"}
                    onClick={() => {
                        deactivateUpdateCards();
                        activateCard("editRoomDescriptionCard");
                    }}
                />
                {room.roomType === "bedroom" && (
                    <EditContentBtnCard
                        title="Beds"
                        subTitle={room.roomBeds.length > 0 ? (room.roomBeds.length > 0 ? getFormattedBeds(room.roomBeds) : "None") : "None"}
                        onClick={() => {
                            deactivateUpdateCards();
                            activateCard("editRoomBedsCard");
                        }}
                    />
                )}
            </EditListingEditRoomAttributesWrapper>
        </GlobalPopupContainerFullScreen>
    );
}
