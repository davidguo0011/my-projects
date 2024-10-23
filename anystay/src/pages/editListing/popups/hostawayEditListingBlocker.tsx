import {
    ConnectWithChannelManagerHeader,
    ConnectWithChannelManagerHeaderBubble,
    ConnectWithChannelManagerHeaderIcon,
    NewListingBackButton,
    NewListingBackButtonArrow,
    BlockerBtn,
    BlockerBtnText,
    BlockerContent,
    BlockerTitle,
    BlockerWrapper,
} from "../editListingStyling";

const HostawayEditListingBlocker = ({ deactivateUpdateCards, hostawayListingId }: { deactivateUpdateCards: () => Promise<void>; hostawayListingId: string }) => {
    return (
        <BlockerWrapper>
            <NewListingBackButton type="button" subPageIndex={3} onClick={() => deactivateUpdateCards()}>
                <NewListingBackButtonArrow />
            </NewListingBackButton>
            <BlockerContent>
                <ConnectWithChannelManagerHeader>
                    <ConnectWithChannelManagerHeaderBubble
                        style={{ background: "white" }}
                        src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+black.svg"}
                        alt={"anystay logo icon"}
                    />
                    <ConnectWithChannelManagerHeaderIcon src={"https://d292awxalydr86.cloudfront.net/Create+listing+page/Integrate.svg"} alt={"connect icon"} />
                    <ConnectWithChannelManagerHeaderBubble
                        style={{ background: "white" }}
                        src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg"
                        alt={"target service icon"}
                    />
                </ConnectWithChannelManagerHeader>
                <BlockerTitle>Edit your listing on Hostaway</BlockerTitle>
                <BlockerBtn href={hostawayListingId ? `https://dashboard.hostaway.com/listing/${hostawayListingId}` : ""} target="_blank">
                    <BlockerBtnText>Go to Hostaway</BlockerBtnText>
                </BlockerBtn>
            </BlockerContent>
        </BlockerWrapper>
    );
};

export default HostawayEditListingBlocker;
