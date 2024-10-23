import { useState } from "react";
import { callApi } from "../../../utils/api/api";
import { ChangePasswordForgotPasswordTabWrapper, DeactivateAccountIcon, DeactivateAccountTextTitle, DeactivateAccountTextSubtitle } from "../loginAndSecurityStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../utils/auth/logoutUser";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface DeactivateAccountPopupProps {
    deactivatePopupCards: () => void;
    accessToken: string;
}

interface DeactivateUserApiResponse {
    success: boolean;
    message: string;
    body: object;
}

export default function DeactivateAccountPopup({ deactivatePopupCards, accessToken }: DeactivateAccountPopupProps) {
    const wrapperRef = useClickOutside(true, deactivatePopupCards);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const navigate = useNavigate();

    const deactivateAccount = async () => {
        try {
            const res: DeactivateUserApiResponse = await callApi("del", `${process.env.REACT_APP_ENV}-anystay-user`, "user/deactivate", {
                headers: {
                    Authorization: accessToken,
                },
            });
            if (res && res.success) {
                //redirect to home
                navigate("/");
                logoutUser();
            }
        } catch (err: any) {
            console.error(err);
            // throw new Error("error deactivating account: ", err.message);
            return;
        }
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await deactivateAccount();
        setIsContinueBtnLoading(false);
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Arrow"}
            closePopup={deactivatePopupCards}
            handleSave={handleSave}
            btnText="Deactivate"
            btnColor="red"
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <ChangePasswordForgotPasswordTabWrapper>
                <DeactivateAccountIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt="Alert icon" />
                <DeactivateAccountTextTitle>You're about to permanently deactivate your account</DeactivateAccountTextTitle>
                <DeactivateAccountTextSubtitle>You won't be able to recover it</DeactivateAccountTextSubtitle>
            </ChangePasswordForgotPasswordTabWrapper>
        </GlobalPopupContainerCenter>
    );
}
