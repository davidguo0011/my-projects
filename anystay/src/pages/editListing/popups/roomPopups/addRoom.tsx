import { useState } from "react";
import { EditListingUpdateCardSelectWrapper, EditListingRoomSelectorWarning, EditListingAddRoomTitle } from "../../editListingStyling";
import CustomSelect from "../../../../components/select/customSelect";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import { ListingDataInterface } from "../../editListing";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";

const options = [
    { value: "bedroom", label: "Bedroom" },
    { value: "bathroom", label: "Bathroom" },
    { value: "half-bathroom", label: "Half bathroom" },
    { value: "living-space", label: "Living space" },
    { value: "kitchen", label: "Kitchen" },
    { value: "dining", label: "Dining room" },
    { value: "outdoors", label: "Outdoors" },
    { value: "parking", label: "Parking" },
    { value: "workspace", label: "Workspace" },
    { value: "cellar", label: "Cellar" },
    { value: "workshop", label: "Workshop" },
    { value: "balcony", label: "Balcony" },
    { value: "pool", label: "Pool" },
    { value: "cinema", label: "Cinema" },
    { value: "game-room", label: "Game room" },
    { value: "kitchenette", label: "Kitchenette" },
    { value: "library", label: "Library" },
    { value: "sun-room", label: "Sun room" },
];

interface AddRoomProps extends RoomPopupProps {
    addRoomCard: boolean;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function AddRoom({ addRoomCard, deactivateUpdateCards, listingData, setListingData, activateCard }: AddRoomProps) {
    const [newRoomType, setNewRoomType] = useState<{ value: string; label: string } | null>(null);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const addRoom = async () => {
        try {
            const res = await callApi("put", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomType: newRoomType && newRoomType.value,
                },
            });
            const listingDataCopy = JSON.parse(JSON.stringify(listingData));
            listingDataCopy.RoomModels.items.push(res.body.room.createRoomModel);
            listingDataCopy.bathrooms = res.body.bathroomNumber;
            listingDataCopy.bedrooms = res.body.bedroomNumber;
            setListingData(listingDataCopy);
            activateCard("updateRoomsCard");
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };
    return (
        <GlobalPopupContainerFullScreen
            backBtnOnClick={() => {
                activateCard("updateRoomsCard");
            }}
            backBtnType="Arrow"
            mobileHeight="55%"
            backBtnDisabled={isContinueBtnLoading}
            cancelBtnOnClick={() => {
                deactivateUpdateCards();
            }}
            cancelBtnDisabled={isContinueBtnLoading}
            continueBtnDisabled={!newRoomType || isContinueBtnLoading}
            continueBtnLoading={isContinueBtnLoading}
            continueBtnOnClick={async () => {
                setIsContinueBtnLoading(true);
                await addRoom();
            }}
            continueBtnText="Add"
        >
            <EditListingAddRoomTitle>What are you adding?</EditListingAddRoomTitle>
            <EditListingUpdateCardSelectWrapper>
                <CustomSelect
                    options={options}
                    onChange={(value) => {
                        setNewRoomType(value as { value: string; label: string });
                    }}
                    placeholder={"Select room type"}
                    initialValue={newRoomType}
                ></CustomSelect>
            </EditListingUpdateCardSelectWrapper>
            <EditListingRoomSelectorWarning>Rooms must accurately reflect your place</EditListingRoomSelectorWarning>
        </GlobalPopupContainerFullScreen>
    );
}
