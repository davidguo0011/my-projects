import {
    CreateListingNewListingQuestionWrapper,
    ConnectWithChannelManagerHeader,
    ConnectWithChannelManagerHeaderBubble,
    ConnectWithChannelManagerHeaderIcon,
    ConnectWithChannelManagerTitleWrapper,
    ConnectWithChannelManagerTitle,
    ConnectWithChannelManagerSubtitle,
    ConnectWithChannelManagerIntro,
    ConnectWithChannelManagerIntroItem,
    ConnectWithChannelManagerIntroItemTitle,
    ConnectWithChannelManagerIntroItemSubtitle,
} from "../../createListingStyling";

const platformMap: { [key: string]: string } = {
    hostaway: "Hostaway",
    guesty: "Guesty",
    hospitable: "Hospitable",
    lodgify: "Lodgify",
};

interface ConnectWithChannelManagerProps {
    platform: string;
}

export default function ConnectWithChannelManager({ platform }: ConnectWithChannelManagerProps) {
    return (
        <CreateListingNewListingQuestionWrapper>
            <ConnectWithChannelManagerHeader>
                <ConnectWithChannelManagerHeaderBubble src={"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+black.svg"} alt={"anystay logo icon"} />
                <ConnectWithChannelManagerHeaderIcon src={"https://d292awxalydr86.cloudfront.net/Create+listing+page/Integrate.svg"} alt={"connect icon"} />
                {platform === "hostaway" && (
                    <ConnectWithChannelManagerHeaderBubble src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg" alt={"target service icon"} />
                )}
                {platform === "lodgify" && (
                    <ConnectWithChannelManagerHeaderBubble src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Lodgify.svg" alt={"target service icon"} />
                )}
                {platform === "hospitable" && (
                    <ConnectWithChannelManagerHeaderBubble src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hospitable.svg" alt={"target service icon"} />
                )}
            </ConnectWithChannelManagerHeader>
            <ConnectWithChannelManagerTitleWrapper>
                <ConnectWithChannelManagerTitle>Connect with {platformMap[platform]}</ConnectWithChannelManagerTitle>
                <ConnectWithChannelManagerSubtitle>You’ll be providing access to the following:</ConnectWithChannelManagerSubtitle>
            </ConnectWithChannelManagerTitleWrapper>
            <ConnectWithChannelManagerIntro>
                <ConnectWithChannelManagerIntroItem>
                    <ConnectWithChannelManagerIntroItemTitle>Access your information</ConnectWithChannelManagerIntroItemTitle>
                    <ConnectWithChannelManagerIntroItemSubtitle>Your name, email and profile photo</ConnectWithChannelManagerIntroItemSubtitle>
                </ConnectWithChannelManagerIntroItem>
                <ConnectWithChannelManagerIntroItem>
                    <ConnectWithChannelManagerIntroItemTitle>Sync your calendar</ConnectWithChannelManagerIntroItemTitle>
                    <ConnectWithChannelManagerIntroItemSubtitle>Add, edit and remove listing info</ConnectWithChannelManagerIntroItemSubtitle>
                </ConnectWithChannelManagerIntroItem>
                {(platform === "hostaway" || platform === "lodgify") && (
                    <ConnectWithChannelManagerIntroItem>
                        <ConnectWithChannelManagerIntroItemTitle>Edit your listings</ConnectWithChannelManagerIntroItemTitle>
                        <ConnectWithChannelManagerIntroItemSubtitle>Add, edit and remove bookings</ConnectWithChannelManagerIntroItemSubtitle>
                    </ConnectWithChannelManagerIntroItem>
                )}
                {platform === "hostaway" && (
                    <ConnectWithChannelManagerIntroItem>
                        <ConnectWithChannelManagerIntroItemTitle>Reply to messages</ConnectWithChannelManagerIntroItemTitle>
                        <ConnectWithChannelManagerIntroItemSubtitle>Add, edit and remove events</ConnectWithChannelManagerIntroItemSubtitle>
                    </ConnectWithChannelManagerIntroItem>
                )}
                {platform === "hostaway" && (
                    <ConnectWithChannelManagerIntroItem>
                        <ConnectWithChannelManagerIntroItemTitle>Manage co-hosts</ConnectWithChannelManagerIntroItemTitle>
                        <ConnectWithChannelManagerIntroItemSubtitle>Add, edit and remove co-hosts</ConnectWithChannelManagerIntroItemSubtitle>
                    </ConnectWithChannelManagerIntroItem>
                )}
            </ConnectWithChannelManagerIntro>
        </CreateListingNewListingQuestionWrapper>
    );
}
