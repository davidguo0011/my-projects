import { SelectedDotCircle, SelectedDotInnerCircle } from "./editRoomImageDndStyling";

const SelectedDot = ({ selected }: { selected?: boolean }) => {
    return <SelectedDotCircle selected={selected}>{selected ? <SelectedDotInnerCircle /> : null}</SelectedDotCircle>;
};

export default SelectedDot;
