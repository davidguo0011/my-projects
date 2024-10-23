import { useState } from "react";
import { EditListingUpdateCardContentInputText, EditListingUpdateCardContentSubtitleDeposit, EditListingUpdateCardContentTitleDeposit, EditListingUpdateCardInvaidMsg } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateDepositProps extends PopupProps {
    updateDepositCard: boolean;
}

export default function UpdateDeposit({ updateDepositCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateDepositProps) {
    const wrapperRef = useClickOutside(updateDepositCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [deposit, setDeposit] = useState(listingData.deposit ? Number(listingData.deposit / 100) : 0);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [invalidPriceNum, setInvalidPriceNum] = useState(false);

    const updateDeposit = async (deposit: number) => {
        try {
            if (Number(deposit * 100) <= 1000000) {
                const updatedDeposit = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/deposit`, {
                    headers: {
                        Authorization: accessToken,
                        listingid: listingData.id,
                    },
                    body: {
                        deposit: Number(deposit * 100),
                    },
                });

                setListingData((prev: ListingDataInterface | null) => ({ ...prev!, deposit: updatedDeposit.body.listing.deposit }));
                deactivateUpdateCards();
            }
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateDeposit(deposit);
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={deposit < 0 || deposit === undefined || deposit === null || invalidPriceNum || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateCardContentTitleDeposit>Damage deposit</EditListingUpdateCardContentTitleDeposit>
            <EditListingUpdateCardContentSubtitleDeposit style={{ maxWidth: "100%", textAlign: "left" }}>
                You may collect a damage deposit up to the amount you set. Deposits must follow our{" "}
                <a target={window.innerWidth < 768 ? "" : "_blank"} href="https://help.anystay.com.au/en/articles/7016835-deposits" rel="nooreferrer noreferrer">
                    deposit guidelines
                </a>
                . <strong>You are responsible for the collection and return of guest deposits.</strong>
            </EditListingUpdateCardContentSubtitleDeposit>
            <EditListingUpdateCardContentInputText
                style={{ border: `1px solid ${invalidPriceNum ? ColorTheme.Red1.color : ColorTheme.Grey1.color}` }}
                placeholder="$0.00"
                type="text"
                value={`$${Number(deposit)}`}
                onChange={(e) => {
                    let price = e.target.value.replace(/\D/g, "");
                    setDeposit(Number(price.replace("$", "")));
                    if (Number(price.replace("$", "")) > 10000) {
                        setInvalidPriceNum(true);
                    } else {
                        setInvalidPriceNum(false);
                    }
                }}
            />
            <EditListingUpdateCardInvaidMsg style={{ textAlign: "left", visibility: invalidPriceNum ? "visible" : "hidden" }}>Invalid price number</EditListingUpdateCardInvaidMsg>
        </GlobalPopupContainerRight>
    );
}
