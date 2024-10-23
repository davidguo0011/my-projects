import {
    AddChannelManagerKeyTitle,
    AddChannelManagerKeySubtitle,
    AddChannelManagerKeyForm,
    AddChannelManagerKeyItem,
    AddChannelManagerKeyInput,
    AddChannelManagerKeyErrMsg,
    AddChannelManagerKeyTitleMobile,
    AddChannelManagerInstructionSectionTitle,
    AddChannelManagerInstructionItem,
    AddChannelManagerInstructionImg,
    AddChannelManagerInstructionTextWrapper,
    AddChannelManagerInstructionTitle,
    AddChannelManagerInstructionSubtitle,
    AddChannelManagerLink,
    NewListingAddAmenitiesQuestionWrapper,
} from "../../createListingStyling";

interface AddChannelManagerKeyProps {
    channelManagerKey: string;
    setChannelManagerKey: (value: string) => void;
    acctId: string;
    setAcctId: (value: string) => void;
    invalidKey: string | boolean;
    setInvalidKey: (value: string | boolean) => void;
    platform: string;
}

export default function AddChannelManagerKey({ channelManagerKey, setChannelManagerKey, acctId, setAcctId, invalidKey, setInvalidKey, platform }: AddChannelManagerKeyProps) {
    const handleKeyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvalidKey(false);
        setChannelManagerKey(e.target.value);
    };
    const handleAccountIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvalidKey(false);
        const value = e.target.value.replace(/\D/g, "");
        if (value) {
            setAcctId(value);
        } else {
            setAcctId("");
        }
    };
    return (
        <NewListingAddAmenitiesQuestionWrapper>
            <AddChannelManagerKeyTitle>Create and add your {platform} key</AddChannelManagerKeyTitle>
            <AddChannelManagerKeyTitleMobile>Add your {platform} key</AddChannelManagerKeyTitleMobile>
            <AddChannelManagerKeySubtitle>You’ll be providing access to the following</AddChannelManagerKeySubtitle>
            <AddChannelManagerKeyForm>
                {platform === "hostaway" && (
                    <AddChannelManagerKeyItem>
                        <AddChannelManagerKeyInput value={acctId} onChange={handleAccountIdInput} placeholder="Account ID" />
                    </AddChannelManagerKeyItem>
                )}
                <AddChannelManagerKeyItem>
                    <AddChannelManagerKeyInput value={channelManagerKey} onChange={handleKeyInput} placeholder={`${platform} API key`} />
                </AddChannelManagerKeyItem>
            </AddChannelManagerKeyForm>
            <AddChannelManagerKeyErrMsg invalidKey={invalidKey}>Incorrect or expired key</AddChannelManagerKeyErrMsg>
            <AddChannelManagerInstructionSectionTitle>How to create a key</AddChannelManagerInstructionSectionTitle>
            <AddChannelManagerInstructionItem>
                {platform === "hostaway" && <AddChannelManagerInstructionImg src="https://d292awxalydr86.cloudfront.net/Create+listing+page/Hostaway1.webp" alt="instruction img 1" />}
                <AddChannelManagerInstructionTextWrapper>
                    <AddChannelManagerInstructionTitle>Go to {platform}’s API settings</AddChannelManagerInstructionTitle>
                    <AddChannelManagerInstructionSubtitle>Visit {platform}’s settings to create a new API key.</AddChannelManagerInstructionSubtitle>
                </AddChannelManagerInstructionTextWrapper>
            </AddChannelManagerInstructionItem>
            <AddChannelManagerInstructionItem>
                {platform === "hostaway" && <AddChannelManagerInstructionImg src="https://d292awxalydr86.cloudfront.net/Create+listing+page/Hostaway2.webp" alt="instruction img 2" />}
                <AddChannelManagerInstructionTextWrapper>
                    <AddChannelManagerInstructionTitle>Click ‘Create’ to get a new key</AddChannelManagerInstructionTitle>
                    <AddChannelManagerInstructionSubtitle>Add a name for your key, it can be anything you want.</AddChannelManagerInstructionSubtitle>
                </AddChannelManagerInstructionTextWrapper>
            </AddChannelManagerInstructionItem>
            <AddChannelManagerInstructionItem>
                {platform === "hostaway" && <AddChannelManagerInstructionImg src="https://d292awxalydr86.cloudfront.net/Create+listing+page/Hostaway3.webp" alt="instruction img 3" />}
                <AddChannelManagerInstructionTextWrapper>
                    <AddChannelManagerInstructionTitle>Copy your Account ID and API key</AddChannelManagerInstructionTitle>
                    <AddChannelManagerInstructionSubtitle>You can only see your key once - this cannot be changed later.</AddChannelManagerInstructionSubtitle>
                </AddChannelManagerInstructionTextWrapper>
            </AddChannelManagerInstructionItem>
            {platform === "hostaway" && (
                <AddChannelManagerLink href="https://dashboard.hostaway.com" target={window.innerWidth > 768 ? "_blank" : ""} rel="noreferrer">
                    Go to {platform}
                </AddChannelManagerLink>
            )}{" "}
            {platform === "lodgify" && (
                <AddChannelManagerLink href="https://app.lodgify.com/dashboard/" target={window.innerWidth > 768 ? "_blank" : ""} rel="noreferrer">
                    Go to {platform}
                </AddChannelManagerLink>
            )}
        </NewListingAddAmenitiesQuestionWrapper>
    );
}
