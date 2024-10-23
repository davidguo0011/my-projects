import { useState } from "react";
import {
    DeclineRequestWrapper,
    DeclineRequestTitle,
    DeclineRequestSubtitle,
    DeclineRequestOptionsWrapper,
    DeclineRequestOption,
    DeclineRequestOptionTextWrapper,
    DeclineRequestOptionTitle,
    DeclineRequestOptionSubtitle,
    DeclineRequestMessageInput,
    DeclineRequestButtonsWrapper,
    DeclineRequestCancelButton,
    RequestDeclinedSuccessfulDoneButton,
    RequestDeclinedSuccessfulTitle,
    RequestDeclinedSuccessfulSubtitle,
} from "../../bookingRequestStyling";
import ContinueBtn from "../../../../components/btn/continueBtn/continueBtn";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
import GlobalPopupContainerCenter from "../../../../components/globalPopup/GlobalPopupContainerCenter";
import useClickOutside from "../../../../hook/useClickOutside";
import { UserModel } from "../../../../interfaces/models/userModel";
interface DeclineBookingRequestPopupProps {
    declineRequestPopup: boolean;
    toggleDeclineRequestPopup: (arg: boolean) => void;
    declineBooking: (arg1: string, arg2: string) => Promise<void>;
    fetchBooking: () => Promise<{ bookingRequest: any } | void>;
    guestData: UserModel | null;
}

const DeclineBookingRequestPopup: React.FC<DeclineBookingRequestPopupProps> = ({ declineRequestPopup, toggleDeclineRequestPopup, declineBooking, fetchBooking, guestData }) => {
    const wrapperRef = useClickOutside(true, () => {
        toggleDeclineRequestPopup(!declineRequestPopup);
    });
    const [menuIndex, setMenuIndex] = useState(0);
    const [reasonCancelled, setReasonCancelled] = useState("");
    const [declinedMessage, setDeclinedMessage] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const handleClick = () => {
        setMenuIndex(0);
        setReasonCancelled("");
        setDeclinedMessage("");
    };

    const handleSave = async () => {
        setIsContinueBtnLoading(true);
        await declineBooking(reasonCancelled, declinedMessage).then(async () => {
            fetchBooking();
            setMenuIndex(1);
        });
        setIsContinueBtnLoading(false);
    };

    return (
        <>
            {/* {menuIndex === 0 && (
                <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={() => toggleDeclineRequestPopup(false)} noContinueBtn={true}>
                    <DeclineRequestWrapper>
                        <DeclineRequestTitle>Decline {guestData && `${guestData.firstName}'s`} request</DeclineRequestTitle>
                        <DeclineRequestSubtitle>Please select a reason for declining it won't be shared.</DeclineRequestSubtitle>
                        <DeclineRequestOptionsWrapper>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReasonCancelled("dates-unavailable");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Dates are unavailable</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Your place is unavailable for this stay.</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReasonCancelled("host-unavailable");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>I am unavailable</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>You're unable to host this stay.</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReasonCancelled("guest-unqualified");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Unqualified guest</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Guests didn't meet requirements.</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReasonCancelled("other-reason");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Other reason</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Please describe your problem.</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                        </DeclineRequestOptionsWrapper>
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )} */}
            {menuIndex === 0 && (
                <GlobalPopupContainerCenter
                    ref={wrapperRef}
                    backBtnType={"Arrow"}
                    closePopup={() => toggleDeclineRequestPopup(false)}
                    cancelPopup={() => toggleDeclineRequestPopup(false)}
                    handleSave={handleSave}
                    btnText="Decline"
                    disable={isContinueBtnLoading}
                    isContinueBtnLoading={isContinueBtnLoading}
                >
                    <DeclineRequestWrapper>
                        <DeclineRequestTitle>Decline {guestData && `${guestData.firstName}'s`} request</DeclineRequestTitle>
                        <DeclineRequestSubtitle>Let {guestData ? guestData.firstName : "your guest"} know why you had to decline their request to stay.</DeclineRequestSubtitle>
                        <DeclineRequestMessageInput
                            placeholder="Type your message"
                            value={declinedMessage}
                            onChange={(e) => {
                                setDeclinedMessage(e.target.value);
                            }}
                        />
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
            {menuIndex === 1 && (
                <GlobalPopupContainerCenter ref={wrapperRef} backBtnType={"Arrow"} closePopup={handleClick} noBackBtn={true} noContinueBtn={true}>
                    <DeclineRequestWrapper style={{ marginTop: "0" }}>
                        <RequestDeclinedSuccessfulTitle>Request declined</RequestDeclinedSuccessfulTitle>
                        <RequestDeclinedSuccessfulSubtitle>There are no penalties for declining requests, however if you do it often your account may be reviewed.</RequestDeclinedSuccessfulSubtitle>
                        <div style={{ width: "100%", height: "1px", background: ColorTheme.Grey2.color, margin: "32px 0" }} />
                        <RequestDeclinedSuccessfulTitle>Our commitment</RequestDeclinedSuccessfulTitle>
                        <RequestDeclinedSuccessfulSubtitle>
                            We are committed to providing you withh a perfect hosting experience. When you don't feel comfortable about a request, rest assured knowing our friendly support team is
                            here to help you out.
                        </RequestDeclinedSuccessfulSubtitle>
                        <div style={{ width: "100%", height: "1px", background: ColorTheme.Grey2.color, margin: "32px 0" }} />
                        <RequestDeclinedSuccessfulDoneButton onClick={() => toggleDeclineRequestPopup(false)} type="button">
                            Done
                        </RequestDeclinedSuccessfulDoneButton>
                    </DeclineRequestWrapper>
                </GlobalPopupContainerCenter>
            )}
        </>
    );
};
export default DeclineBookingRequestPopup;
