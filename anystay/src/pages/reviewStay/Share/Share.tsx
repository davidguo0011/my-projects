import { ListingModel } from "../../../interfaces/models/listingModel";
import {
    ReviewStayTitleWrapper,
    ReviewStayTitle,
    IndividualEmailShareButton,
    IndividualFacebookShareButton,
    IndividualTwitterShareButton,
    IndividualWhatsappShareButton,
    IndividualShareButton,
    IndividualShareButtonIcon,
    IndividualShareButtonText,
} from "../reviewStayStyling";
export default function Share({ listing }: { listing: ListingModel }) {
    return (
        <>
            <ReviewStayTitleWrapper pageIndex={2}>
                <ReviewStayTitle>Share with friends</ReviewStayTitle>
            </ReviewStayTitleWrapper>
            <div style={{ display: "grid", gridTemplateColumns: "calc(50% - 8px) calc(50% - 8px)", gap: "16px" }}>
                <IndividualFacebookShareButton quote={"Check out Anystay!"} url={"https://anystay.com.au"} hashtag={"#anystay"}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Facebook</IndividualShareButtonText>
                </IndividualFacebookShareButton>
                <IndividualEmailShareButton
                    url={"https://anystay.com.au"}
                    subject={`Come check out: ${listing.propertyTitle}!`}
                    separator={" "}
                    body={"Come check out the listing i will be staying at!"}
                >
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Email</IndividualShareButtonText>
                </IndividualEmailShareButton>
                <IndividualTwitterShareButton title={"Check out Anystay!"} url={"https://anystay.com.au"} hashtags={["#anystay"]}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Twitter</IndividualShareButtonText>
                </IndividualTwitterShareButton>
                <IndividualWhatsappShareButton url={"https://anystay.com.au"} separator={" "}>
                    <IndividualShareButtonIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Imessage.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Message</IndividualShareButtonText>
                </IndividualWhatsappShareButton>
                <IndividualShareButton onClick={() => navigator.clipboard.writeText(`http://localhost:3000/listing/${listing.id}`)}>
                    <IndividualShareButtonIcon style={{ height: "20px", width: "20px" }} src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Duplicate+2.svg"} alt={"Icon"} />
                    <IndividualShareButtonText>Copy link</IndividualShareButtonText>
                </IndividualShareButton>
                <IndividualShareButton>
                    <IndividualShareButtonIcon
                        style={{ height: "24px", width: "24px" }}
                        src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Navigation+Menu+Horizontal.svg"}
                        alt={"Icon"}
                    />
                    <IndividualShareButtonText>More</IndividualShareButtonText>
                </IndividualShareButton>
            </div>
        </>
    );
}
