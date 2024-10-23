import { useDroppable } from "@dnd-kit/core";
import { EditRoomImageDropzoneWrapper, EditRoomImageDropzonePlaceHolder, EditRoomImageDropzoneImg } from "./editRoomImageDndStyling";
import constructOptimisedImageUrl from "../../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import SelectedDot from "./selectedDot";

interface EditRoomImageDropzoneProps {
    id: string;
    dropped: { key: string } | null;
}

const EditRoomImageDropzone = ({ id, dropped }: EditRoomImageDropzoneProps) => {
    const { setNodeRef } = useDroppable({ id: id });
    return (
        <EditRoomImageDropzoneWrapper ref={setNodeRef}>
            {dropped ? (
                <>
                    <SelectedDot selected />
                    <EditRoomImageDropzoneImg src={constructOptimisedImageUrl(dropped.key)} alt="selected room image" />
                </>
            ) : (
                <EditRoomImageDropzonePlaceHolder>Drop or select a photo from all photos</EditRoomImageDropzonePlaceHolder>
            )}
        </EditRoomImageDropzoneWrapper>
    );
};

export default EditRoomImageDropzone;
