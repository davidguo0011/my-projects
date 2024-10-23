import { DragItemButton, DragItemButtonIcon, EditRoomDraggableImage, EditRoomImageContainer } from "./editRoomImageDndStyling";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import constructOptimisedImageUrl from "../../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import SelectedDot from "./selectedDot";

interface EditListingRoomImageProps {
    id: string;
    imgKey: string;
    handleClick: (imgKey: string) => void;
}

const EditListingRoomImage = ({ id, imgKey, handleClick }: EditListingRoomImageProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };
    return (
        <EditRoomImageContainer ref={setNodeRef} style={style} onClick={() => handleClick(imgKey)}>
            <SelectedDot />
            <DragItemButton {...listeners} {...attributes} size="24px" left="16px" top="16px">
                <DragItemButtonIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/all-directions.png" alt="drag icon" />
            </DragItemButton>
            <EditRoomDraggableImage src={constructOptimisedImageUrl(imgKey)} alt={`Draggable image`} />
        </EditRoomImageContainer>
    );
};

export default EditListingRoomImage;
