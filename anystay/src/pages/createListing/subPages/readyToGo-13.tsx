import {
    NewListingReadyToGoChecklist,
    NewListingReadyToGoChecklistItem,
    NewListingReadyToGoChecklistItemIcon,
    NewListingReadyToGoChecklistItemText,
    CreateListingAddAddressTitle,
    CreateListingReadyToGoSubtitle,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";

interface NewListingReadyToGoProps {
    changePage: (index: number) => void;
}

export default function NewListingReadyToGo({ changePage }: NewListingReadyToGoProps) {
    const readyToGoList = ["Address", "Unit number", "Property type", "Basic details", "Area", "Amenities", "Photos", "Title", "Description", "House rules", "Price", "Discounts"];
    return (
        <CreateListingNewListingQuestionWrapper>
            <CreateListingAddAddressTitle>You're all done!</CreateListingAddAddressTitle>
            <CreateListingReadyToGoSubtitle>Your listing is ready welcome it's first guest.</CreateListingReadyToGoSubtitle>
            <NewListingReadyToGoChecklist>
                {readyToGoList.map((item, index) => {
                    let page = index + 2;
                    return (
                        <NewListingReadyToGoChecklistItem key={item}>
                            <NewListingReadyToGoChecklistItemIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"Approval icon"} />
                            <NewListingReadyToGoChecklistItemText onClick={() => changePage(page)}>{item}</NewListingReadyToGoChecklistItemText>
                        </NewListingReadyToGoChecklistItem>
                    );
                })}
            </NewListingReadyToGoChecklist>
        </CreateListingNewListingQuestionWrapper>
    );
}
