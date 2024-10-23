import { useState } from "react";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";
import GlobalAmenities from "../../../components/globalAmenities/globalAmenities";

interface UpdateAmenitiesProps extends PopupProps {
    updateAmenitiesCard: boolean;
}

export default function UpdateAmenities({ deactivateUpdateCards, updateAmenitiesCard, listingData, accessToken, setListingData }: UpdateAmenitiesProps) {
    const wrapperRef = useClickOutside(updateAmenitiesCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [amenities, setAmenities] = useState(listingData.amenities);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const addAmenitie = async (amenitie: string) => {
        let amenitiesCopy = [...amenities, amenitie];
        setAmenities(amenitiesCopy);
    };

    const removeAmenitie = async (amenitie: string) => {
        let amenitiesCopy = [...amenities];
        let newAmenities = amenitiesCopy.filter((e) => e !== amenitie);
        setAmenities(newAmenities);
    };

    const updateAmenities = async (amenities: string[]) => {
        try {
            const updatedAmenities = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/amenities`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    amenities: amenities,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, amenities: updatedAmenities.body.listing.amenities }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateAmenities(amenities);
    };

    const isDesktopSize = useIsDesktopSize();

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            style={isDesktopSize ? { height: "100%" } : { height: "98%" }}
        >
            <GlobalAmenities amenities={amenities} addAmenitie={addAmenitie} removeAmenitie={removeAmenitie} />
        </GlobalPopupContainerRight>
    );
}
