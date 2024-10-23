import {
    CreateListingNewListingQuestionWrapper,
    ChooseChannelManagerPlatformTitle,
    ChooseChannelManagerPlatformCardWrapper,
    ChooseChannelManagerPlatformCard,
    ChooseChannelManagerPlatformCardImg,
    ChooseChannelManagerPlatformCardTitle,
} from "../../createListingStyling";

interface ChooseChannelManagerPlatformProps {
    platform: string;
    setPlatform: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChooseChannelManagerPlatform({ platform, setPlatform }: ChooseChannelManagerPlatformProps) {
    return (
        <CreateListingNewListingQuestionWrapper>
            <ChooseChannelManagerPlatformTitle>Choose where you're importing from</ChooseChannelManagerPlatformTitle>
            <ChooseChannelManagerPlatformCardWrapper>
                <ChooseChannelManagerPlatformCard selected={platform === "hostaway"} onClick={() => setPlatform("hostaway")}>
                    <ChooseChannelManagerPlatformCardImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg" alt="hostaway logo" />
                    <ChooseChannelManagerPlatformCardTitle>Hostaway</ChooseChannelManagerPlatformCardTitle>
                </ChooseChannelManagerPlatformCard>
                {/* <ChooseChannelManagerPlatformCard selected={platform === "lodgify"} onClick={() => setPlatform("lodgify")}>
                    <ChooseChannelManagerPlatformCardImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Lodgify.svg" alt="lodgify logo" />
                    <ChooseChannelManagerPlatformCardTitle>Lodgify</ChooseChannelManagerPlatformCardTitle>
                </ChooseChannelManagerPlatformCard> */}
                <ChooseChannelManagerPlatformCard selected={platform === "hospitable"} onClick={() => setPlatform("hospitable")}>
                    <ChooseChannelManagerPlatformCardImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hospitable.svg" alt="hospitable logo" />
                    <ChooseChannelManagerPlatformCardTitle>Hospitable</ChooseChannelManagerPlatformCardTitle>
                </ChooseChannelManagerPlatformCard>
                {/* <ChooseChannelManagerPlatformCard selected={platform === "guesty"} onClick={() => setPlatform("guesty")}> */}
                {/* <ChooseChannelManagerPlatformCardImg src="" alt="guesty logo" /> */}
                {/* <div style={{ width: "55%", height: "55%", margin: "auto" }} /> */}
                {/* <ChooseChannelManagerPlatformCardTitle>Guesty (coming soon)</ChooseChannelManagerPlatformCardTitle> */}
                {/* </ChooseChannelManagerPlatformCard> */}
            </ChooseChannelManagerPlatformCardWrapper>
        </CreateListingNewListingQuestionWrapper>
    );
}
