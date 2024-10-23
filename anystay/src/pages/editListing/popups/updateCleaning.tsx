import { useState } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardContentInputText, EditListingUpdateCardSelectSubtitleWithMargin } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateCleaningProps extends PopupProps {
    updateCleaningCard: boolean;
}

export default function UpdateCleaning({ updateCleaningCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateCleaningProps) {
    const wrapperRef = useClickOutside(updateCleaningCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [cleaningFee, setCleaningFee] = useState(listingData.cleaningFee / 100);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [invalidPriceNum, setInvalidPriceNum] = useState(false);

    const updateCleaning = async (cleaningFee: number) => {
        try {
            if (cleaningFee <= 10000) {
                const updatedCleaningFee = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/cleaning-fee`, {
                    headers: {
                        Authorization: accessToken,
                        listingID: listingData.id,
                    },
                    body: {
                        cleaningFee: Number(cleaningFee * 100),
                        // cleaningFrequency: cleaningFrequency
                    },
                });

                setListingData((prev: ListingDataInterface | null) => ({ ...prev!, cleaningFee: updatedCleaningFee.body.listing.cleaningFee }));
                deactivateUpdateCards();
            }
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateCleaning(Number(cleaningFee));
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={isContinueBtnLoading || invalidPriceNum}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateCardContentTitle>Cleaning fee</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>The cleaning fee you set will be added to your guest's total.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputText
                placeholder="$0.00"
                style={{ marginTop: "0px" }}
                type="text"
                value={`$${Number(cleaningFee)}`}
                onChange={(e) => {
                    let price = e.target.value.replace(/\D/g, "");
                    setCleaningFee(Number(price.replace("$", "")));
                    if (Number(price.replace("$", "")) > 10000) {
                        setInvalidPriceNum(true);
                    } else {
                        setInvalidPriceNum(false);
                    }
                }}
            />
            <EditListingUpdateCardSelectSubtitleWithMargin style={{ color: invalidPriceNum ? ColorTheme.Red.color : ColorTheme.Black.color }}>
                {invalidPriceNum ? "Invalid price number" : "This fee is charged once per stay"}
            </EditListingUpdateCardSelectSubtitleWithMargin>
        </GlobalPopupContainerRight>
    );
}
