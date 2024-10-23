import { useState } from "react";
import {
    EditListingUpdateCardTitleWrapper,
    EditListingUpdateCardTitle,
    EditListingUpdateRuleButton,
    EditListingUpdateRuleButtonRed,
    EditListingUpdateRuleTitle,
    EditListingUpdateRuleSubtitle,
    EditListingUpdateRuleTitleDotIndicator,
} from "../editListingStyling";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";
interface UpdateStatusProps extends PopupProps {
    updateListingStatusCard: boolean;
    activateCard: (name: string) => void;
}

export default function UpdateStatus({ updateListingStatusCard, deactivateUpdateCards, listingData, accessToken, setListingData, activateCard }: UpdateStatusProps) {
    const wrapperRef = useClickOutside(updateListingStatusCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [listingStatus, setListingStatus] = useState(listingData.status);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);

    const updateListingStatus = async (status: string) => {
        try {
            if (status === "delete") {
                const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/delete/check/${listingData.id}`, {
                    headers: {
                        Authorization: accessToken,
                        listingID: listingData.id,
                    },
                    body: { listingmodelID: listingData.id },
                });
                const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                if (userHostModel) {
                    userHostModelCopy.ListingModels.items = userHostModel.ListingModels.items.filter((item) => item.id !== listingData.id);
                }
                setUserHostModel(userHostModelCopy);
                if (res.success) {
                    deactivateUpdateCards();
                    if (res.body.canDeactivate) {
                        deactivateUpdateCards();
                        activateCard("deleteListingCard");
                    } else {
                        deactivateUpdateCards();
                        activateCard("deleteListingFailedCard");
                    }
                }
            } else {
                const updatedStatus = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/status`, {
                    headers: {
                        Authorization: accessToken,
                        listingID: listingData.id,
                    },
                    body: { status: status },
                });
                setListingData((prev: ListingDataInterface | null) => ({ ...prev!, status: updatedStatus.body.listing.status }));
                deactivateUpdateCards();
            }
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const isSuspended = listingData.status === "Suspended";

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateListingStatus(listingStatus);
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingUpdateCardTitleWrapper>
                <EditListingUpdateCardTitle style={{ marginLeft: 0 }}>Listing status</EditListingUpdateCardTitle>
            </EditListingUpdateCardTitleWrapper>
            <EditListingUpdateRuleButton
                onClick={() => {
                    if (!isSuspended) {
                        setListingStatus("active");
                    }
                }}
                style={{ marginTop: "16px" }}
                selected={listingStatus === "active"}
                disabled={isSuspended} // Disable button if the listing is suspended
            >
                <EditListingUpdateRuleTitle>
                    <EditListingUpdateRuleTitleDotIndicator></EditListingUpdateRuleTitleDotIndicator>
                    Active
                </EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Your listing is available to find and book across our platform</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
            <EditListingUpdateRuleButton
                onClick={() => {
                    if (!isSuspended) {
                        setListingStatus("inactive");
                    }
                }}
                selected={listingStatus === "inactive"}
                disabled={isSuspended}
            >
                <EditListingUpdateRuleTitle>
                    <EditListingUpdateRuleTitleDotIndicator style={{ background: ColorTheme.Red1.color }}></EditListingUpdateRuleTitleDotIndicator>
                    Inactive
                </EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Your listing is not available to find and book across our platform</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButton>
            <EditListingUpdateRuleButtonRed
                onClick={() => {
                    setListingStatus("delete");
                }}
                selected={listingStatus === "delete"}
                style={{ marginBottom: "48px" }}
            >
                <EditListingUpdateRuleTitle style={{ color: "hsla(0, 0%, 15%, 1)" }}>Delete listing</EditListingUpdateRuleTitle>
                <EditListingUpdateRuleSubtitle>Permanently delete this listing, you won’t be able to recover it</EditListingUpdateRuleSubtitle>
            </EditListingUpdateRuleButtonRed>
        </GlobalPopupContainerRight>
    );
}
