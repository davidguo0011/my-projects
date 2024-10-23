import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EditListingImageWrapper, EditListingImageRemoveButton, EditListingImageFiller, EditListingDeleteIcon, EditListingImageCover, EditListingImageMoveButton } from "./createListingStyling";
import constructOptimisedImageUrl from "../../utils/imageOptimisation/constructOptimisedImageUrl";

interface SortableImageProps {
    removeItem: (imgKey: string) => Promise<void>;
    imgKey: string;
    id: string;
    index: number;
}

function SortableImage({ id, imgKey, index, removeItem }: SortableImageProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <EditListingImageWrapper ref={setNodeRef} style={style}>
            {index === 0 ? <EditListingImageCover>COVER</EditListingImageCover> : null}
            <EditListingImageMoveButton {...attributes} {...listeners}>
                <EditListingDeleteIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/all-directions.png"} alt="delete icon" />
            </EditListingImageMoveButton>
            <EditListingImageRemoveButton
                onClick={(e) => {
                    removeItem(imgKey);
                }}
                type="button"
            >
                <EditListingDeleteIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg"} alt="delete icon" />
            </EditListingImageRemoveButton>
            <EditListingImageFiller id={`edit-listing-${id}`} src={constructOptimisedImageUrl(imgKey, 500)} alt="Featured Listing Image" />
        </EditListingImageWrapper>
    );
}

export default SortableImage;
