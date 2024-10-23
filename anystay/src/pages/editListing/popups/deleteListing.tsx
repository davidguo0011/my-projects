import { useState } from "react";
import { EditListingUpdateCardTitleWrapper, EditListingDeleteRoomIcon, EditListingDeleteTitle, EditListingDeleteSubtitle, EditListingDeleteListingWrapper } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import { ListingDataInterface } from "../editListing";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import BackBtn from "../../../components/btn/backBtn/backBtn";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface DeleteListingProps {
    accessToken: string;
    deleteListingCard: boolean;
    listingData: ListingDataInterface;
    deactivateUpdateCards: () => Promise<void>;
}

export default function DeleteListing({ deleteListingCard, deactivateUpdateCards, listingData, accessToken }: DeleteListingProps) {
    const wrapperRef = useClickOutside(deleteListingCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const navigate = useNavigate();

    const deleteListing = async () => {
        try {
            const res = await callApi("del", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${listingData.id}`, {
                headers: {
                    Authorization: accessToken,
                    listingID: listingData.id,
                },
                body: { listingmodelID: listingData.id },
            });

            if (res.listing && res.listing.deleteListingModel !== null && userHostModel) {
                deactivateUpdateCards();
                navigate(`/your-listings/${userHostModel.id}`);
            }
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await deleteListing();
    };

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={handleSave} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <EditListingDeleteListingWrapper>
                <EditListingDeleteRoomIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="delete icon" />
                <EditListingDeleteTitle>You're about to permanently delete your listing</EditListingDeleteTitle>
                <EditListingDeleteSubtitle>You won't be able to recover it</EditListingDeleteSubtitle>
            </EditListingDeleteListingWrapper>
        </GlobalPopupContainerRight>
    );
}
