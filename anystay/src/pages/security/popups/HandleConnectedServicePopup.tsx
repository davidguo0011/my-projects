import { useState, ChangeEvent } from "react";
import {
    ChangePasswordForgotPasswordTabWrapper,
    AddChannelManagerKeyForm,
    AddChannelManagerKeyInput,
    AddChannelManagerKeyItem,
    AddChannelManagerKeyErrMsg,
    HandleConnectedServicePopupImg,
    HandleConnectedServicePopupTitle,
} from "../loginAndSecurityStyling";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface HandleConnectedServicePopupProps {
    activateCard: (popupName: string) => void;
    deactivatePopupCards: () => void;
    hostawayKey: string;
    hostawaySecret: string;
}

const HandleConnectedServicePopup: React.FC<HandleConnectedServicePopupProps> = ({ activateCard, deactivatePopupCards, hostawayKey, hostawaySecret }) => {
    const [acctId, setAcctId] = useState<string>(hostawayKey);
    const [channelManagerKey, setChannelManagerKey] = useState<string>(hostawaySecret);
    const [invalidKey, setInvalidKey] = useState<boolean>(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenSelector);
    const wrapperRef = useClickOutside(true, deactivatePopupCards);
    const handleKeyInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInvalidKey(false);
        setChannelManagerKey(e.target.value);
    };
    const handleAccountIdInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInvalidKey(false);
        const value = e.target.value.replace(/\D/g, "");
        if (value) {
            setAcctId(value);
        } else {
            setAcctId("");
        }
    };
    const connectWithChannelManager = async () => {
        setIsContinueBtnLoading(true);
        try {
            if (!acctId || !channelManagerKey) throw new Error();
            const update = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `user/host/update-credentials`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    hostawayKey: acctId,
                    hostawaySecret: channelManagerKey,
                },
            });
            if (!update.success) throw new Error();
            const sync = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `listings/sync`, {
                headers: {
                    Authorization: accessToken,
                },
            });
            if (!sync.success) throw new Error();
            setIsContinueBtnLoading(false);
            deactivatePopupCards();
        } catch (err) {
            setInvalidKey(true);
            setIsContinueBtnLoading(false);
        }
    };
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={deactivatePopupCards}
            handleSave={connectWithChannelManager}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Save"
            cancelBtnText="Remove"
            cancelPopup={() => {
                activateCard("confirmDisconnectPopup");
            }}
        >
            <ChangePasswordForgotPasswordTabWrapper style={{ alignItems: "center" }}>
                <HandleConnectedServicePopupImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg" alt="hostaway logo" />
                <HandleConnectedServicePopupTitle>Edit your Hostaway integration</HandleConnectedServicePopupTitle>
                <AddChannelManagerKeyForm>
                    <AddChannelManagerKeyItem>
                        <AddChannelManagerKeyInput value={acctId} onChange={handleAccountIdInput} placeholder="Account ID" />
                    </AddChannelManagerKeyItem>
                    <AddChannelManagerKeyItem>
                        <AddChannelManagerKeyInput value={channelManagerKey} onChange={handleKeyInput} placeholder="Hostaway API key" />
                    </AddChannelManagerKeyItem>
                </AddChannelManagerKeyForm>
                <AddChannelManagerKeyErrMsg invalidKey={invalidKey}>Incorrect or expired key</AddChannelManagerKeyErrMsg>
            </ChangePasswordForgotPasswordTabWrapper>
        </GlobalPopupContainerCenter>
    );
};

export default HandleConnectedServicePopup;
