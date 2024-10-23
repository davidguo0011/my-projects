import {
    EditListingEditRoomWrapper,
    EditListingEditRoomButtonTitle,
    EditListingEditTitleWrapper,
    EditListingEditRoomTitle,
    EditListingEditRoomAddRoomButton,
    EditListingUpdateRoomWrapper,
    EditListingEditRoomFilterWrapper,
    EditListingEditRoomFilter,
    EditListingUpdateRoomContentWrapper,
    EditListingUpdateRoomMobileCardsWrapper,
    EditListingUpdateRoomMobileCardWrapper,
    EditListingUpdateRoomMobileCardTitle,
    EditListingUpdateRoomMobileAddBtn,
} from "../../editListingStyling";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import { YourListingAddListingIcon } from "../../../yourListing/yourListingStyling";
import { RoomModel } from "../../../../interfaces/models/roomModel";
import CycleBtn from "../../../../components/btn/cycleBtn/cycleBtn";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";
import ImgComponent from "../../../../components/imageComponent/ImgComponent";

const roomIconMap: { [key: string]: string } = {
    bedroom: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg",
    bathroom: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bathrooms.svg",
    other: "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg",
};

interface UpdateRoomProps extends RoomPopupProps {
    updateRoomsCard: boolean;
    setEditRoomIndex: React.Dispatch<React.SetStateAction<string>>;
}

export default function UpdateRoom({ updateRoomsCard, deactivateUpdateCards, listingData, activateCard, setEditRoomIndex }: UpdateRoomProps) {
    const getFormattedBeds = (beds: string[]) => {
        const singleBeds = beds.filter((bed) => bed === "single").length;
        const doubleBeds = beds.filter((bed) => bed === "double").length;
        const queenBeds = beds.filter((bed) => bed === "queen").length;
        const kingBeds = beds.filter((bed) => bed === "king").length;

        return `${singleBeds > 0 ? `${singleBeds} single bed${singleBeds > 1 ? "s" : ""}${singleBeds !== beds.length ? "," : ""}` : ""}${
            doubleBeds > 0 ? `${doubleBeds} double bed${doubleBeds > 1 ? "s" : ""}${doubleBeds !== beds.length ? "," : ""}` : ""
        }${queenBeds > 0 ? ` ${queenBeds} queen bed${queenBeds > 1 ? "s" : ""}${queenBeds !== beds.length ? "," : ""}` : ""}${
            kingBeds > 0 ? `, ${kingBeds} king bed${kingBeds > 1 ? "s" : ""}${kingBeds !== beds.length ? "," : ""}` : ""
        }`;
    };
    const getOtherRoomTypes = (rooms: RoomModel[]) => {
        if (rooms.length > 0) {
            let otherRoomTypes = rooms.filter((room) => room.roomType !== "bedroom" && room.roomType !== "bathroom" && room.roomType !== "half-bathroom").map((room) => room.roomType);
            return [...new Set(otherRoomTypes)];
        } else {
            return [];
        }
    };
    const mobileRoomCardsSection = (
        <>
            <EditListingUpdateRoomMobileCardsWrapper>
                {listingData.RoomModels.items.map((room, index) => (
                    <EditListingUpdateRoomMobileCardWrapper
                        key={`${room.id}-${index}`}
                        onClick={() => {
                            setEditRoomIndex(room.id);
                            activateCard("editRoomCard");
                        }}
                    >
                        <ImgComponent
                            hasImage={room.images.length > 0}
                            width="100%"
                            src={room.images.length > 0 ? constructOptimisedImageUrl(room.images[0]) : roomIconMap[room.roomType] || roomIconMap["other"]}
                            alt="room image"
                        />
                        <EditListingUpdateRoomMobileCardTitle>{room.roomTitle}</EditListingUpdateRoomMobileCardTitle>
                    </EditListingUpdateRoomMobileCardWrapper>
                ))}
            </EditListingUpdateRoomMobileCardsWrapper>
            <EditListingUpdateRoomMobileAddBtn>
                <CycleBtn
                    src="https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"
                    background="white"
                    onClick={() => {
                        activateCard("addRoomCard");
                    }}
                    iconSize="24px"
                    size="64px"
                />
            </EditListingUpdateRoomMobileAddBtn>
        </>
    );
    const desktopRoomCardsSection = (
        <EditListingUpdateRoomWrapper>
            {listingData.RoomModels.items.map((room, index) => {
                return (
                    <EditListingEditRoomWrapper
                        onClick={() => {
                            setEditRoomIndex(room.id);
                            activateCard("editRoomCard");
                        }}
                        id={`room-${index}`}
                        key={`${room.id}-${index}`}
                    >
                        <EditListingEditRoomButtonImageComponent type={room.roomType} imgKeys={room.images} />
                        <EditListingEditRoomButtonTitle>{room.roomTitle}</EditListingEditRoomButtonTitle>
                    </EditListingEditRoomWrapper>
                );
            })}
        </EditListingUpdateRoomWrapper>
    );
    return (
        <GlobalPopupContainerFullScreen backBtnOnClick={deactivateUpdateCards} noContentWrapper>
            <EditListingUpdateRoomContentWrapper paddingTop="72px">
                <EditListingEditTitleWrapper>
                    <EditListingEditRoomTitle>Rooms & spaces</EditListingEditRoomTitle>

                    <EditListingEditRoomAddRoomButton
                        type="button"
                        onClick={() => {
                            activateCard("addRoomCard");
                        }}
                    >
                        <YourListingAddListingIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg"} alt={"Add a listing"} />
                    </EditListingEditRoomAddRoomButton>
                </EditListingEditTitleWrapper>
                <EditListingEditRoomFilterWrapper>
                    <EditListingEditRoomFilter>
                        {listingData.bedrooms} {listingData.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                    </EditListingEditRoomFilter>
                    <EditListingEditRoomFilter>
                        {listingData.bathrooms / 2} {listingData.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                    </EditListingEditRoomFilter>
                    {getOtherRoomTypes(listingData.RoomModels.items).length > 0
                        ? getOtherRoomTypes(listingData.RoomModels.items).map((roomType, index) => (
                              <EditListingEditRoomFilter key={`${roomType} - ${index}`}>{roomType.charAt(0).toUpperCase() + roomType.slice(1)}</EditListingEditRoomFilter>
                          ))
                        : null}
                </EditListingEditRoomFilterWrapper>

                {window.innerWidth < 768 ? mobileRoomCardsSection : desktopRoomCardsSection}
            </EditListingUpdateRoomContentWrapper>
        </GlobalPopupContainerFullScreen>
    );
}

function EditListingEditRoomButtonImageComponent({ imgKeys, type }: { imgKeys: string[] | null; type: string }) {
    if (imgKeys && imgKeys.length) {
        return <ImgComponent hasImage={true} width="100%" src={constructOptimisedImageUrl(imgKeys[0], 200)} alt="Room image" />;
    }
    return <ImgComponent hasImage={false} width="100%" src={roomIconMap[type] || roomIconMap["other"]} alt="Room image" />;
}
