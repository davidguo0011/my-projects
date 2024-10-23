import React from "react";
import { ShareButtonsContainer, BtnWrapper, EmailBtn, FacebookBtn, IndividualShareButton, WhatsappBtn, TwitterBtn, IndividualShareButtonIcon, IndividualShareButtonText } from "./shareButtonsStyling";
const ShareButtons: React.FC = (props: any) => {
    //NEED width listing

    return (
        <ShareButtonsContainer width={props.width}>
            <BtnWrapper>
                <IndividualShareButton onClick={() => navigator.clipboard.writeText(`http://localhost:3000/listing/${props.listing.id}`)}>
                    <IndividualShareButtonIcon style={{ height: "24px", width: "24px" }} src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Duplicate+2.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Copy link</IndividualShareButtonText>
                </IndividualShareButton>
            </BtnWrapper>
            <BtnWrapper>
                <EmailBtn
                    url={"https://anystay.com.au"}
                    subject={props.listing ? `Come check out: ${props.listing.propertyTitle}!` : ""}
                    separator={" "}
                    body={"Come check out the listing i will be staying at!"}
                >
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Email</IndividualShareButtonText>
                </EmailBtn>
            </BtnWrapper>
            <BtnWrapper>
                <FacebookBtn quote={"Check out Anystay!"} url={"https://anystay.com.au"} hashtag={"#anystay"}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Facebook</IndividualShareButtonText>
                </FacebookBtn>
            </BtnWrapper>
            <BtnWrapper>
                <WhatsappBtn separator={" "} url="https://anystay.com.au">
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Imessage.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Message</IndividualShareButtonText>
                </WhatsappBtn>
            </BtnWrapper>
            <BtnWrapper>
                <TwitterBtn url="https://anystay.com.au">
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Twitter</IndividualShareButtonText>
                </TwitterBtn>
            </BtnWrapper>
            <BtnWrapper>
                <IndividualShareButton>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Snapchat.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Snapchat</IndividualShareButtonText>
                </IndividualShareButton>
            </BtnWrapper>
            <BtnWrapper>
                <IndividualShareButton>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Instagram</IndividualShareButtonText>
                </IndividualShareButton>
            </BtnWrapper>
            <BtnWrapper>
                <IndividualShareButton>
                    <IndividualShareButtonIcon
                        style={{ height: "24px", width: "24px" }}
                        src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Navigation+Menu+Horizontal.svg"}
                        alt={"Icon"}
                    />
                    <IndividualShareButtonText>More</IndividualShareButtonText>
                </IndividualShareButton>
            </BtnWrapper>
        </ShareButtonsContainer>
    );
};

export default ShareButtons;
