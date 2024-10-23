import { useMemo } from "react";
import { SortableImagesWrapper } from "./createListingStyling";
import SortableImage from "./sortableImage";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

interface ListingImage {
    key: string;
    alt: string;
    height: number | null;
    width: number | null;
    priority: number | null;
}

interface SortableWrapperProps {
    removeItem: (imgKey: string) => Promise<void>;
    updateItemOrder: (items: ListingImage[]) => void;
    images: ListingImage[];
}

function SortableWrapper({ images, updateItemOrder, removeItem }: SortableWrapperProps) {
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over) {
            if (active.id !== over.id) {
                const activeIndex = images.findIndex((item) => item.key === active.id);
                const overIndex = images.findIndex((item) => item.key === over.id);

                updateItemOrder(arrayMove(images, activeIndex, overIndex));
            }
        }
    };
    const imgKeys = useMemo(() => {
        return images.map((img) => {
            return img.key;
        });
    }, [images]);

    return (
        <SortableImagesWrapper>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} autoScroll={false}>
                <SortableContext items={imgKeys} strategy={rectSortingStrategy}>
                    {imgKeys.map((keys, index) => {
                        return <SortableImage removeItem={removeItem} key={keys} id={keys} imgKey={keys} index={index} />;
                    })}
                </SortableContext>
            </DndContext>
        </SortableImagesWrapper>
    );
}

export default SortableWrapper;
