import { useState } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardContentInputTextarea, EditListingUpdateCardContentInputCount } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateDescriptionProps extends PopupProps {
    updateDescriptionCard: boolean;
}

export default function UpdateDescription({ updateDescriptionCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateDescriptionProps) {
    const wrapperRef = useClickOutside(updateDescriptionCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [description, setDescription] = useState(listingData.propertyDescription);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const handleUpdate = async (propertyDescription: string) => {
        let charLimit = 2500;
        let propertyDescriptionChars = propertyDescription.split("");
        let shortenedDescriptionChars = propertyDescriptionChars.slice(0, charLimit);
        propertyDescription = shortenedDescriptionChars.join("").toString();

        setDescription(propertyDescription);
    };

    const updateDescription = async (description: string) => {
        try {
            const updatedDescription = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/description`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    description: description,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, propertyDescription: updatedDescription.body.listing.propertyDescription }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateDescription(description);
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={!description || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateCardContentTitle>Description</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Write a detailed description of your place.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputTextarea value={description} onChange={(e) => handleUpdate(e.target.value)} />
            <EditListingUpdateCardContentInputCount style={{ marginBottom: "48px" }}>{2500 - description.length}</EditListingUpdateCardContentInputCount>
        </GlobalPopupContainerRight>
    );
}
