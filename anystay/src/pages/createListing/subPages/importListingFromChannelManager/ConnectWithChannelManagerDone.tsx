import { CreateListingNewListingQuestionWrapper, ConnectWithChannelManagerDoneWrapper, ConnectWithChannelManagerDoneIcon, ConnectWithChannelManagerDoneTitle } from "../../createListingStyling";
export default function ConnectWithChannelManagerDone() {
    return (
        <CreateListingNewListingQuestionWrapper>
            <ConnectWithChannelManagerDoneWrapper>
                <ConnectWithChannelManagerDoneIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"Tick icon"} />
                <ConnectWithChannelManagerDoneTitle>You’re all done!</ConnectWithChannelManagerDoneTitle>
            </ConnectWithChannelManagerDoneWrapper>
        </CreateListingNewListingQuestionWrapper>
    );
}
