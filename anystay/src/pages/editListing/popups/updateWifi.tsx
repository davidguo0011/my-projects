import { useState } from "react";
import { EditListingUpdateWifiContentTitle, EditListingUpdateWifiContentSubtitle, EditListingUpdateWifiContentInputText } from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { PopupProps } from "../PopupContainer/PopupContainer";
import { ListingDataInterface } from "../editListing";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateWifiProps extends PopupProps {
    updateWifiCard: boolean;
}

export default function UpdateWifi({ updateWifiCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateWifiProps) {
    const wrapperRef = useClickOutside(updateWifiCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [wifi, setWifi] = useState("");
    const [password, setPassword] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateWifi = async () => {
        try {
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/wifi`, {
                headers: {
                    Authorization: accessToken,
                    listingid: listingData.id,
                },
                body: {
                    wifiName: wifi,
                    wifiPassword: password,
                },
            });
            deactivateUpdateCards();
        } catch (err) {
            console.log(err);
            setIsContinueBtnLoading(false);
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await updateWifi();
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={handleSave}
            disable={(wifi.length === 0 && password.length === 0) || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditListingUpdateWifiContentTitle>Wi-Fi</EditListingUpdateWifiContentTitle>
            <EditListingUpdateWifiContentSubtitle>Add instructions for guests to access your Wi-Fi.</EditListingUpdateWifiContentSubtitle>
            <EditListingUpdateWifiContentInputText
                type="text"
                value={wifi}
                onChange={(e) => {
                    if (e.target.value.length <= 50) {
                        setWifi(e.target.value);
                    }
                }}
                placeholder="SSID"
            />
            <EditListingUpdateWifiContentInputText
                type="text"
                value={password}
                onChange={(e) => {
                    if (e.target.value.length <= 50) {
                        setPassword(e.target.value);
                    }
                }}
                placeholder="Password"
            />
        </GlobalPopupContainerRight>
    );
}
