import { useState } from "react";
import {
    DeclineRequestWrapper,
    DeclineRequestBackButton,
    DeclineRequestBackButtonIcon,
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
    HostSupportContinueButton,
} from "../../bookingRequestStyling";
import AnimationWrapperForPopup from "../../../../components/animationWrapper/AnimationWrapperForPopup";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
interface ReportGuestPopupProps {
    togglePopup: any;
    toggleReportGuestPopup: any;
    declineBooking: any;
}

const ReportGuestPopup: React.FC<ReportGuestPopupProps> = ({ togglePopup, toggleReportGuestPopup, declineBooking }) => {
    const [menuIndex, setMenuIndex] = useState(0);
    const [message, setMessage] = useState("");
    const [reportReason, setReportReason] = useState("");

    return (
        <>
            {menuIndex === 0 && (
                <AnimationWrapperForPopup>
                    <DeclineRequestWrapper>
                        <DeclineRequestBackButton type="button" onClick={() => togglePopup()}>
                            <DeclineRequestBackButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="back button icon" />
                        </DeclineRequestBackButton>
                        <DeclineRequestTitle>Report your guest</DeclineRequestTitle>
                        <DeclineRequestSubtitle>Please select a reason for your report it won't be shared.</DeclineRequestSubtitle>
                        <DeclineRequestOptionsWrapper>
                            <DeclineRequestOption
                                type="button"
                                onClick={() => {
                                    setMenuIndex(1);
                                    setReportReason("Guest is having problems paying");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Payment related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Guest is having problems paying</DeclineRequestOptionSubtitle>
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
                                    setReportReason("Guest is making you uncomfortable");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Behaviour related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Guest is making you uncomfortable</DeclineRequestOptionSubtitle>
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
                                    setReportReason("Guest is violating house rules");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Policy related</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Guest is violating house rules</DeclineRequestOptionSubtitle>
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
                                    setReportReason("Other reason");
                                }}
                            >
                                <DeclineRequestOptionTextWrapper>
                                    <DeclineRequestOptionTitle>Other reason</DeclineRequestOptionTitle>
                                    <DeclineRequestOptionSubtitle>Please describe your problem</DeclineRequestOptionSubtitle>
                                </DeclineRequestOptionTextWrapper>
                                <img
                                    src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                                    alt="arrow icon"
                                    style={{ width: "8px", objectFit: "cover", transform: "rotate(180deg)" }}
                                />
                            </DeclineRequestOption>
                        </DeclineRequestOptionsWrapper>
                    </DeclineRequestWrapper>
                </AnimationWrapperForPopup>
            )}
            {menuIndex === 1 && (
                <AnimationWrapperForPopup>
                    <DeclineRequestWrapper>
                        <DeclineRequestBackButton
                            type="button"
                            onClick={async () => {
                                toggleReportGuestPopup(false);
                            }}
                        >
                            <DeclineRequestBackButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="back button icon" />
                        </DeclineRequestBackButton>
                        <DeclineRequestTitle>Write some details</DeclineRequestTitle>
                        <DeclineRequestSubtitle>Tell us about your situation with as much details as possible.</DeclineRequestSubtitle>
                        <DeclineRequestMessageInput placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <DeclineRequestButtonsWrapper>
                            <DeclineRequestCancelButton
                                type="button"
                                onClick={async () => {
                                    toggleReportGuestPopup(false);
                                }}
                            >
                                Cancel
                            </DeclineRequestCancelButton>
                            <HostSupportContinueButton
                                selected={message !== "" && message !== null}
                                type="button"
                                onClick={async () => {
                                    await declineBooking(reportReason, message).then(async () => {
                                        setMenuIndex(2);
                                    });
                                }}
                            >
                                Submit
                            </HostSupportContinueButton>
                        </DeclineRequestButtonsWrapper>
                    </DeclineRequestWrapper>
                </AnimationWrapperForPopup>
            )}
            {menuIndex === 2 && (
                <AnimationWrapperForPopup>
                    <DeclineRequestWrapper>
                        <RequestDeclinedSuccessfulTitle>Report submitted</RequestDeclinedSuccessfulTitle>
                        <RequestDeclinedSuccessfulSubtitle>Thanks for helping us improve our experience. We take all reports seriously to serve you better.</RequestDeclinedSuccessfulSubtitle>
                        <div style={{ width: "100%", height: "1px", background: ColorTheme.Grey2.color, margin: "32px 0" }} />
                        <RequestDeclinedSuccessfulTitle>Our commitment</RequestDeclinedSuccessfulTitle>
                        <RequestDeclinedSuccessfulSubtitle>
                            We are committed to providing you with a safe and comfortable expereince for everyone involved. Our team is always ready to provide assistance for any questions or issues.
                        </RequestDeclinedSuccessfulSubtitle>
                        <div style={{ width: "100%", height: "1px", background: ColorTheme.Grey2.color, marginTop: "96px", marginBottom: "24px" }} />
                        <RequestDeclinedSuccessfulDoneButton onClick={() => toggleReportGuestPopup(false)} type="button">
                            Done
                        </RequestDeclinedSuccessfulDoneButton>
                    </DeclineRequestWrapper>
                </AnimationWrapperForPopup>
            )}
        </>
    );
};
export default ReportGuestPopup;
