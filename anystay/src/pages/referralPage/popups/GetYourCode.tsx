import { PopupWrapper, PopupTitleWrapper, PopupTitle, EmailInputWrapper, EmailInput, EmailInputSubtitle } from "../referralPageStyling";
import { useState } from "react";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface GetYourCodePopupProps {
    getCodePopup: boolean;
    handleClosePopup: () => void;
}

export default function GetYourCodePopup({ getCodePopup, handleClosePopup }: GetYourCodePopupProps) {
    const [emailNo, setEmailNo] = useState("");
    const getCodePopupRef = useClickOutside(getCodePopup, handleClosePopup);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const checkEmail = async () => {
        //function for sending emails
        setIsContinueBtnLoading(true);
        await console.log("checkEmail function triggered"); // change this to the actual function to send the Email
        setIsContinueBtnLoading(false);
    };

    return (
        <GlobalPopupContainerCenter
            ref={getCodePopupRef}
            backBtnType="Close"
            closePopup={handleClosePopup}
            handleSave={checkEmail}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Get code"
        >
            <PopupWrapper>
                <PopupTitleWrapper>
                    <PopupTitle>Enter your email to get your discount code</PopupTitle>
                </PopupTitleWrapper>
                <EmailInputWrapper>
                    <EmailInput
                        value={emailNo}
                        onChange={(e) => {
                            setEmailNo(e.target.value);
                        }}
                        placeholder="Example@gmail.com"
                        name="email"
                    />
                    <EmailInputSubtitle>You agree to receiving occasional marking emails from us</EmailInputSubtitle>
                </EmailInputWrapper>
            </PopupWrapper>
        </GlobalPopupContainerCenter>
    );
}
