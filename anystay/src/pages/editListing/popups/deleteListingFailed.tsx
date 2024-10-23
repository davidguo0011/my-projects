import { EditListingDeleteRoomIcon, EditListingDeleteTitle, EditListingDeleteSubtitle, EditListingEditTitleWrapper } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

export default function DeleteListingFailed({ deleteListingFailedCard, deactivateUpdateCards }: { deleteListingFailedCard: boolean; deactivateUpdateCards: () => Promise<void> }) {
    const wrapperRef = useClickOutside(deleteListingFailedCard, deactivateUpdateCards);
    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={deactivateUpdateCards} disable={false} isContinueBtnLoading={false} btnColor="red" btnText="Go back">
            <EditListingEditTitleWrapper>
                <EditListingDeleteRoomIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="delete icon" />
            </EditListingEditTitleWrapper>
            <EditListingDeleteTitle>You have active bookings!</EditListingDeleteTitle>
            <EditListingDeleteSubtitle>You must decline or cancel any active bookings before you delete your listing</EditListingDeleteSubtitle>
        </GlobalPopupContainerRight>
    );
}
