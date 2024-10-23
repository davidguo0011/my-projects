import { AlertIcon, Wrapper, Title, Subtitle } from "./DeleteConfirmationPopupStyling";
import { useState } from "react";
import useClickOutside from "../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../globalPopup/GlobalPopupContainerCenter";

interface DeleteConfirmationProps {
    titleText: string;
    subtitleText: string;
    closeModal: () => void;
    submitFunc: () => Promise<void>;
    activateCard: (popupName: string) => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationProps> = ({ titleText, subtitleText, closeModal, submitFunc, activateCard }) => {
    const wrapperRef = useClickOutside(true, () => {
        if (!isContinueBtnLoading) {
            activateCard("handleConnectedService");
        }
    });
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState<boolean>(false);
    const onSubmit = async (): Promise<void> => {
        setIsContinueBtnLoading(true);
        await submitFunc();
        setIsContinueBtnLoading(false);
    };
    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={() => activateCard("handleConnectedService")}
            handleSave={onSubmit}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Disconnect"
        >
            <Wrapper>
                <AlertIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Unavailable feature icon" />
                <Title>{titleText}</Title>
                <Subtitle>{subtitleText}</Subtitle>
            </Wrapper>
        </GlobalPopupContainerCenter>
    );
};

export default DeleteConfirmationPopup;
