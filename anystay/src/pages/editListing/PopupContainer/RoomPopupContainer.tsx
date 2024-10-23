import { useState } from "react";

// Import listing popups
import UpdateRoom from "../popups/roomPopups/updateRoom";
import AddRoom from "../popups/roomPopups/addRoom";
import EditRoom from "../popups/roomPopups/editRoom";
import DeleteRoom from "../popups/roomPopups/deleteRoom";
import EditRoomTitle from "../popups/roomPopups/editRoomTitle";
import EditRoomImage from "../popups/roomPopups/editRoomImage";
import EditRoomBeds from "../popups/roomPopups/editRoomBeds";
import HostawayEditListingBlocker from "../popups/hostawayEditListingBlocker";
import { ListingDataInterface } from "../editListing";
import EditRoomDescription from "../popups/roomPopups/editRoomDescription";

interface RoomPopupContainerProps {
    popupName: string;
    activateCard: (popupName: string) => void;
    listingData: ListingDataInterface;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
    deactivateUpdateCards: () => Promise<void>;
}

export interface RoomPopupProps {
    deactivateUpdateCards: () => void;
    listingData: ListingDataInterface;
    activateCard: (popupName: string) => void;
}

export default function RoomPopupContainer({ popupName, activateCard, listingData, setListingData, deactivateUpdateCards }: RoomPopupContainerProps) {
    const [editRoomIndex, setEditRoomIndex] = useState("0");

    return (
        <>
            {popupName === "updateRoomsCard" && (
                <UpdateRoom
                    updateRoomsCard={popupName === "updateRoomsCard"}
                    activateCard={activateCard}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    setEditRoomIndex={setEditRoomIndex}
                />
            )}
            {popupName === "addRoomCard" && (
                <AddRoom
                    addRoomCard={popupName === "addRoomCard"}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                />
            )}

            {popupName === "editRoomCard" && (
                <EditRoom
                    activateCard={activateCard}
                    editRoomCard={popupName === "editRoomCard"}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "deleteRoomCard" && (
                <DeleteRoom
                    deleteRoomCard={popupName === "deleteRoomCard"}
                    activateCard={activateCard}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "editRoomTitleCard" && (
                <EditRoomTitle
                    activateCard={activateCard}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    editRoomTitleCard={popupName === "editRoomTitleCard"}
                />
            )}
            {popupName === "editRoomDescriptionCard" && (
                <EditRoomDescription
                    activateCard={activateCard}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    editRoomDescriptionCard={popupName === "editRoomDescriptionCard"}
                />
            )}
            {popupName === "editRoomImageCard" && (
                <EditRoomImage
                    activateCard={activateCard}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    editRoomImageCard={popupName === "editRoomImageCard"}
                />
            )}
            {popupName === "editRoomBedsCard" && (
                <EditRoomBeds
                    activateCard={activateCard}
                    editRoomIndex={editRoomIndex}
                    listingData={listingData}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    editRoomBedsCard={popupName === "editRoomBedsCard"}
                />
            )}
            {popupName === "blocker" && <HostawayEditListingBlocker deactivateUpdateCards={deactivateUpdateCards} hostawayListingId={listingData.hostawayListingId} />}
        </>
    );
}
