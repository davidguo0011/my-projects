import { useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardContentInputText,
    EditListingUpdateCardSelectSubtitle,
    EditListingUpdateCardSelectSubtitleWithMargin,
} from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateMinimumStayProps extends PopupProps {
    updateMinimumStayCard: boolean;
}

export default function UpdateMinimumStay({ updateMinimumStayCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateMinimumStayProps) {
    const wrapperRef = useClickOutside(updateMinimumStayCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [minimumStay, setMinimumStay] = useState(listingData.minimumStay ? Number(listingData.minimumStay) : "");
    const [maximumStay, setMaximumStay] = useState(listingData.maximumStay ? Number(listingData.maximumStay) : "");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const checkMinMax = () => {
        return minimumStay && maximumStay && Number(minimumStay) <= Number(maximumStay) && Number(minimumStay) > 0 && Number(maximumStay) <= 1000;
    };
    const updateStayLength = async () => {
        try {
            const updatedStayLength = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/stay-length`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    minimumStay: Number(minimumStay),
                    maximumStay: Number(maximumStay),
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, minimumStay: updatedStayLength.body.listing.minimumStay, maximumStay: updatedStayLength.body.listing.maximumStay }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const onChangeFunc = (setter: React.Dispatch<React.SetStateAction<string | number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const value = parseInt(e.target.value);
            if (!isNaN(value)) {
                setter(value > 1000 ? 1000 : value);
            }
        } else {
            setter(0);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateStayLength();
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={isContinueBtnLoading || !checkMinMax()}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateCardContentTitle>Stay length</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Edit your minimum and maximum stay in nights</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputText type="text" value={minimumStay} onChange={onChangeFunc(setMinimumStay)} />

            <EditListingUpdateCardSelectSubtitle>Minimum nights</EditListingUpdateCardSelectSubtitle>
            <EditListingUpdateCardContentInputText type="text" style={{ marginTop: "24px" }} value={maximumStay} onChange={onChangeFunc(setMaximumStay)} />
            <EditListingUpdateCardSelectSubtitleWithMargin>Maximum nights</EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
