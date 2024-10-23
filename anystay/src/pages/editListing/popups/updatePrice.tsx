import { useState } from "react";
import { EditListingUpdateCardContentTitle, EditListingUpdateCardContentSubtitle, EditListingUpdateCardContentInputPrice, EditListingPriceErrorMessage } from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdatePriceProps extends PopupProps {
    updatePriceCard: boolean;
}

export default function UpdatePrice({ updatePriceCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdatePriceProps) {
    const wrapperRef = useClickOutside(updatePriceCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [minimumPrice, setMinimumPrice] = useState(Number(listingData.minimumPrice / 100));
    const [belowMinimumPrice, setBelowMinimumPrice] = useState(false);
    const [aboveMaximumPrice, setAboveMaximumPrice] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updatePrice = async (minimumPrice: number) => {
        try {
            const updatedPrice = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/price`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    minimumPrice: minimumPrice * 100,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, minimumPrice: updatedPrice.body.listing.minimumPrice }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updatePrice(minimumPrice);
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={belowMinimumPrice || aboveMaximumPrice || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateCardContentTitle style={{ marginTop: "0" }}>Nightly price</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>Adjust your listing's base price per night.</EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardContentInputPrice
                type="text"
                value={`$ ${Number(minimumPrice)}`}
                onChange={(e) => {
                    let price = e.target.value.replace(/\D/g, "");
                    if (Number(price) < 10) {
                        setBelowMinimumPrice(true);
                    } else if (Number(price) > 100000) {
                        setAboveMaximumPrice(true);
                    } else {
                        setAboveMaximumPrice(false);
                        setBelowMinimumPrice(false);
                    }
                    setMinimumPrice(Number(price.replace("$", "")));
                }}
            />
            {belowMinimumPrice && <EditListingPriceErrorMessage>Price must be at least $10 AUD</EditListingPriceErrorMessage>}
            {aboveMaximumPrice && <EditListingPriceErrorMessage>Price must be below $100000 AUD</EditListingPriceErrorMessage>}
        </GlobalPopupContainerRight>
    );
}
