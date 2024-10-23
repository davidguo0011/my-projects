import { useState } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardContentInputText } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateStraIDProps extends PopupProps {
    updateStraIDCard: boolean;
}

export default function UpdateStraID({ updateStraIDCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateStraIDProps) {
    const wrapperRef = useClickOutside(updateStraIDCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [straID, setStraID] = useState(listingData.straID ? listingData.straID : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateStraID = async () => {
        try {
            const updatedStraId = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/stra-id`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    straId: straID,
                },
            });
            setListingData(updatedStraId.body.listing);
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateStraID();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardContentTitle>STRA Registration</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Display your STRA ID on your listing as required by your local government</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputText type="text" value={straID} onChange={(e) => setStraID(e.target.value)} />
        </GlobalPopupContainerRight>
    );
}
