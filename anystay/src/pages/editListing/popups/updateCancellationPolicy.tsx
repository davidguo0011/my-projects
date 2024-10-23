import { useState } from "react";
import { EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitle, EditListingUpdateRuleButton, EditListingUpdateRuleTitle, EditListingUpdateRuleSubtitle } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateCancellationPolicyProps extends PopupProps {
    updateCancellationCard: boolean;
}

export default function UpdateCancellationPolicy({ updateCancellationCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateCancellationPolicyProps) {
    const wrapperRef = useClickOutside(updateCancellationCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [cancellationPolicy, setCancellationPolicy] = useState(listingData.cancellationPolicy);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateCancellationPolicy = async () => {
        try {
            const updatedCancellationPolicy = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/cancellation-policy`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: {
                    cancellationPolicy: cancellationPolicy,
                },
            });

            setListingData((prev: ListingDataInterface | null) => ({ ...prev!, cancellationPolicy: updatedCancellationPolicy.body.listing.cancellationPolicy }));
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateCancellationPolicy();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardTitleWrapper style={{ margin: "8px 0" }}>
                <EditListingUpdateCardTitle style={{ marginLeft: 0 }}>Cancellation policy</EditListingUpdateCardTitle>
            </EditListingUpdateCardTitleWrapper>
            <EditListingUpdateRuleButton
                onClick={() => {
                    setCancellationPolicy("flexible");
                }}
                style={{ marginTop: "16px" }}
                selected={cancellationPolicy === "flexible"}
            >
                <EditListingUpdateRuleTitle style={{ color: ColorTheme.Black.color }}>Flexible</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle style={{ textAlign: "left" }}>
                    Free cancellation until 24 hours before arrival. After that, you'll be paid for spent nights.
                </EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
            <EditListingUpdateRuleButton
                onClick={() => {
                    setCancellationPolicy("moderate");
                }}
                selected={cancellationPolicy === "moderate"}
            >
                <EditListingUpdateRuleTitle>Moderate</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle style={{ textAlign: "left" }}>
                    Free cancellation until 7 days before arrival. After that, you'll be paid for spent nights plus 50% of unspent nights.
                </EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
            <EditListingUpdateRuleButton
                onClick={() => {
                    setCancellationPolicy("strict");
                }}
                selected={cancellationPolicy === "strict"}
            >
                <EditListingUpdateRuleTitle>Strict</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle style={{ textAlign: "left" }}>
                    48 hour free cancellation. You're paid 50% until 7 days before arrival. After that, you'll be paid in full.
                </EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
        </GlobalPopupContainerRight>
    );
}
