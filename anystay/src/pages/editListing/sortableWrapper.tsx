import { SortableImagesWrapper } from "./editListingStyling";
import { ListingPhotoInterface } from "./popups/updatePhotos";
import SortableImage from "./sortableImage";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy, verticalListSortingStrategy } from "@dnd-kit/sortable";

interface SortableWrapperProps {
    removeItem: (imgKey: string) => Promise<void>;
    updateItemOrder: (items: ListingPhotoInterface[]) => void;
    items: ListingPhotoInterface[];
}

function SortableWrapper({ items, updateItemOrder, removeItem }: SortableWrapperProps) {
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const activeIndex = items.findIndex((item) => item.key === active.id);
            const overIndex = items.findIndex((item) => item.key === over.id);

            if (activeIndex !== -1 && overIndex !== -1) {
                updateItemOrder(arrayMove(items, activeIndex, overIndex));
            }
        }
    };

    return (
        <SortableImagesWrapper>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} autoScroll={false}>
                <SortableContext items={items.map((item) => ({ id: item.key }))} strategy={window.innerWidth < 768 ? verticalListSortingStrategy : rectSortingStrategy}>
                    {items.map((item, index) => (
                        <SortableImage removeItem={removeItem} key={item.key} id={item} imgKey={item} index={index} />
                    ))}
                </SortableContext>
            </DndContext>
        </SortableImagesWrapper>
    );
}

export default SortableWrapper;
