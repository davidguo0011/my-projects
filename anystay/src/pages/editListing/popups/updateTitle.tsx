import { useState } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardContentInputText, EditListingUpdateCardContentInputCount } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateTitleProps extends PopupProps {
    updateTitleCard: boolean;
}

export default function UpdateTitle({ updateTitleCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateTitleProps) {
    const wrapperRef = useClickOutside(updateTitleCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [title, setTitle] = useState(listingData.propertyTitle ? listingData.propertyTitle : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateTitle = async () => {
        try {
            const updatedTitle = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/title`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    title: title,
                },
            });
            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, propertyTitle: updatedTitle.body.listing.propertyTitle }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateTitle();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={!title || isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>Title</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Use as many characters as you can for better results.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputText
                type="text"
                value={title}
                onChange={(e) => {
                    if (e.target.value.length <= 50) {
                        setTitle(e.target.value);
                    }
                }}
            />
            <EditListingUpdateCardContentInputCount>{50 - title.length}</EditListingUpdateCardContentInputCount>
        </GlobalPopupContainerRight>
    );
}
