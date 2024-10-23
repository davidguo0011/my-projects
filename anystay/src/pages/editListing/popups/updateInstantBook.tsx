import { useState } from "react";
import { EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitle, EditListingUpdateRuleButton, EditListingUpdateRuleTitle, EditListingUpdateRuleSubtitle } from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateInstantBookProps extends PopupProps {
    updateInstantBookCard: boolean;
}

export default function UpdateInstantBook({ updateInstantBookCard, deactivateUpdateCards, accessToken, setListingData, listingData }: UpdateInstantBookProps) {
    const wrapperRef = useClickOutside(updateInstantBookCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [menuIndex, setMenuIndex] = useState(listingData.instantBookEnabled);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const submitInstantBook = async () => {
        if (menuIndex) {
            await updateInstantBook(true);
        } else {
            await updateInstantBook(false);
        }
    };

    const updateInstantBook = async (instantBookEnabled: boolean) => {
        try {
            const updatedInstantBook = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/instant-book`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    instantBookEnabled: instantBookEnabled,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, instantBookEnabled: updatedInstantBook.body.listing.instantBookEnabled }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await submitInstantBook();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardTitleWrapper>
                <EditListingUpdateCardTitle style={{ marginLeft: 0 }}>Instant book</EditListingUpdateCardTitle>
            </EditListingUpdateCardTitleWrapper>
            <EditListingUpdateRuleButton
                onClick={async () => {
                    setMenuIndex(true);
                }}
                style={{ marginTop: "16px" }}
                selected={menuIndex}
            >
                <EditListingUpdateRuleTitle>On</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Allow requests and instant bookings. You can always change this later.</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
            <EditListingUpdateRuleButton
                onClick={async () => {
                    setMenuIndex(false);
                }}
                selected={!menuIndex}
            >
                <EditListingUpdateRuleTitle>Requests only</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Allow requests only, this may result in less bookings from guests.</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
        </GlobalPopupContainerRight>
    );
}
