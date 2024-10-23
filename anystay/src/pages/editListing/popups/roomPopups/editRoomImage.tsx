import { useState, useMemo } from "react";
import { EditListingAddRoomTitle, EditListingRoomSubtitle, EditListingRoomImagesWrapper, EditRoomImgSection } from "../../editListingStyling";
import { callApi } from "../../../../utils/api/api";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../../editListing";
import { RoomPopupProps } from "../../PopupContainer/RoomPopupContainer";
import EditRoomImageDropzone from "./components/droppable";
import { closestCenter, DndContext, DragEndEvent, DragOverEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import EditListingRoomImage from "./components/draggable";
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { RoomModel } from "../../../../interfaces/models/roomModel";
import GlobalPopupContainerFullScreen from "../../../../components/globalPopup/GlobalPopupContainerFullScreen";

interface EditRoomImageProps extends RoomPopupProps {
    editRoomImageCard: boolean;
    editRoomIndex: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function EditRoomImage({ editRoomImageCard, deactivateUpdateCards, editRoomIndex, listingData, setListingData, activateCard }: EditRoomImageProps) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const room = useMemo(() => {
        return listingData.RoomModels.items.filter((room) => room.id === editRoomIndex)[0];
    }, [editRoomIndex, listingData.RoomModels.items]);

    const [droppedItem, setDroppedItem] = useState<{ key: string } | null>(room.images.length > 0 ? { key: room.images[0] } : null);

    const [allImages, setAllImages] = useState<{ key: string }[]>(listingData.listingImages.map((img) => ({ key: JSON.parse(img as string).key })));

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    let draggableImages = [...allImages];
    if (droppedItem) {
        draggableImages = draggableImages.filter((img) => img.key !== droppedItem.key);
    }
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const updateRoomImages = async () => {
        try {
            if (!droppedItem) {
                activateCard("editRoomCard");
                return;
            }
            const updatedImages = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/room/images`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    roomid: room.id,
                    images: [droppedItem.key],
                },
            });

            let listingDataCopy = JSON.parse(JSON.stringify(listingData));
            let roomIndex = listingDataCopy.RoomModels.items.findIndex((room: RoomModel) => room.id === updatedImages.body.room.updateRoomModel.id);
            listingDataCopy.RoomModels.items[roomIndex] = updatedImages.body.room.updateRoomModel;

            setListingData(listingDataCopy);
            activateCard("editRoomCard");
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleDragOver = (e: DragOverEvent) => {
        const { active, over } = e;

        if (over && over.id === "droppable") {
            const draggedItem = draggableImages.find((images) => images.key === active.id);

            if (draggedItem) {
                setAllImages((images) => {
                    if (droppedItem) {
                        return [...draggableImages, droppedItem].filter((img) => img.key !== draggedItem.key);
                    }
                    return images.filter((img) => img.key !== draggedItem.key);
                });

                setDroppedItem(draggedItem);
            }
        }
    };
    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;
        if (over && active.id !== over.id) {
            if (over.id !== "droppable") {
                setAllImages((images) => {
                    const oldIndex = images.findIndex((img) => img.key === active.id);
                    const newIndex = images.findIndex((img) => img.key === over.id);
                    return arrayMove(images, oldIndex, newIndex);
                });
            }
        }
    };
    const handleClick = (imgKey: string) => {
        setAllImages((images) => {
            if (droppedItem) {
                return [...draggableImages, droppedItem].filter((img) => img.key !== imgKey);
            }
            return images.filter((img) => img.key !== imgKey);
        });
        setDroppedItem({ key: imgKey });
    };
    return (
        <GlobalPopupContainerFullScreen
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
                await updateRoomImages();
            }}
        >
            <EditRoomImgSection>
                <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd} collisionDetection={closestCenter} sensors={sensors}>
                    <EditListingAddRoomTitle>Choose a photo of your room</EditListingAddRoomTitle>
                    <EditRoomImageDropzone id="droppable" dropped={droppedItem} />
                    <EditListingRoomSubtitle>All photos</EditListingRoomSubtitle>
                    <EditListingRoomImagesWrapper>
                        <SortableContext items={draggableImages.map((item) => item.key)} strategy={window.innerWidth < 768 ? verticalListSortingStrategy : rectSortingStrategy}>
                            {draggableImages.map((item) => (
                                <EditListingRoomImage key={item.key} id={item.key} imgKey={item.key} handleClick={handleClick} />
                            ))}
                        </SortableContext>
                    </EditListingRoomImagesWrapper>
                </DndContext>
            </EditRoomImgSection>
        </GlobalPopupContainerFullScreen>
    );
}
