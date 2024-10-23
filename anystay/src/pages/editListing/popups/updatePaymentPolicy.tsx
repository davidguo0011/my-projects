import { useState } from "react";
import { API } from "aws-amplify";
import { EditListingUpdateCardTitleWrapper, EditListingUpdateCardTitle, EditListingUpdateRuleButton, EditListingUpdateRuleTitle, EditListingUpdateRuleSubtitle } from "../editListingStyling";
import * as customMutations from "../../../graphql/customMutations";
import useClickOutside from "../../../hook/useClickOutside";
import { useParams } from "react-router-dom";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdatePaymentPolicyProps {
    updatePaymentPolicyCard: boolean;
    listingData: ListingDataInterface;
    deactivateUpdateCards: () => Promise<void>;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function UpdatePaymentPolicy({ updatePaymentPolicyCard, deactivateUpdateCards, listingData, setListingData }: UpdatePaymentPolicyProps) {
    const { id } = useParams();
    const [menuIndex, setMenuIndex] = useState(listingData.onceOffPaymentsOnly ? 2 : 0);
    const [onceOffPaymentsOnly, setOnceOffPaymentsOnly] = useState(listingData.onceOffPaymentsOnly);
    const wrapperRef = useClickOutside(updatePaymentPolicyCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateOnceOffPaymentsOnly = async (onceOffPaymentsOnly: boolean) => {
        try {
            const updatedListingModelData = {
                id: id,
                onceOffPaymentsOnly: onceOffPaymentsOnly,
            };
            await API.graphql({ query: customMutations.updateListingModelProfile, variables: { input: updatedListingModelData } });

            const copyListingData = JSON.parse(JSON.stringify(listingData)) as ListingDataInterface;
            copyListingData.onceOffPaymentsOnly = onceOffPaymentsOnly;

            setListingData(copyListingData);
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateOnceOffPaymentsOnly(onceOffPaymentsOnly);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardTitleWrapper style={{ marginTop: "8px" }}>
                <EditListingUpdateCardTitle style={{ marginLeft: 0 }}>Payment policy</EditListingUpdateCardTitle>
            </EditListingUpdateCardTitleWrapper>
            <EditListingUpdateRuleButton
                onClick={() => {
                    setMenuIndex(0);
                    setOnceOffPaymentsOnly(false);
                }}
                style={{ marginTop: "16px" }}
                selected={menuIndex === 0}
            >
                <EditListingUpdateRuleTitle>Flexible (Recommended)</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Accept weekly and once off payments from guests</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>

            <EditListingUpdateRuleButton
                onClick={() => {
                    setMenuIndex(2);
                    setOnceOffPaymentsOnly(true);
                }}
                selected={menuIndex === 2}
            >
                <EditListingUpdateRuleTitle>Once off only</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Only accept once off payments from guests</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
        </GlobalPopupContainerRight>
    );
}
