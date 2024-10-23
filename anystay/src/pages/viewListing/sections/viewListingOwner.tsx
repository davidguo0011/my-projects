import { useState } from "react";
import { UserModel } from "../../../interfaces/models/userModel";
import { ListingInterface } from "../viewListing";
import {
    ViewListingOwnerSectionWrapper,
    ViewListingOwnerSectionImage,
    ViewListingOwnerSectionTitleWrapper,
    ViewListingOwnerSectionTitle,
    ViewListingOwnerSectionSubtitle,
    ViewListingOwnerSectionQuestionButton,
    ViewListingOwnerSectionText,
    ViewListingHeaderProfileImageWrapper,
    ViewListingHeaderProfileImageVerified,
    ViewListingOwnerSectionButton,
    ViewListingOwnerSectionQuestionWrapper,
    ViewListingOwnerSectionPartWrapper,
    ReadMoreButton,
} from "../viewListingStyling";
import { useNavigate } from "react-router-dom";

interface ExtendedListingInterface extends ListingInterface {
    straID?: string;
}

interface ViewListingOwnerSectionProps {
    listingOwnerProfilePictureURL: string;
    listingOwnerData: UserModel;
    listing: ExtendedListingInterface;
    dates: {
        startDate: string | Date;
        endDate: string | Date;
    };
    toggleSendMessageRequest: () => Promise<void>;
    toggleSendAMessageBtnClicked: () => Promise<void>;
    toggleCalendar: () => void;
    sendAMessageBtnClicked: boolean;
}

export default function ViewListingOwnerSection({
    listingOwnerProfilePictureURL,
    listingOwnerData,
    listing,
    dates,
    toggleSendMessageRequest,
    toggleSendAMessageBtnClicked,
    toggleCalendar,
    sendAMessageBtnClicked,
}: ViewListingOwnerSectionProps) {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <ViewListingOwnerSectionWrapper>
            <ViewListingOwnerSectionPartWrapper>
                <ViewListingOwnerSectionButton type="button" onClick={() => navigate(`/host/profile/${listingOwnerData.id}`)}>
                    <ViewListingHeaderProfileImageWrapper>
                        <ViewListingOwnerSectionImage src={listingOwnerProfilePictureURL} alt="Listing owner profile picture" />
                        {listingOwnerData.userIDConfirmed && <ViewListingHeaderProfileImageVerified src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Vector.png"} alt="Verified tick" />}
                    </ViewListingHeaderProfileImageWrapper>
                    {/* <ViewListingOwnerSectionImage src={url} alt="Listing owner profile picture" /> */}
                    <ViewListingOwnerSectionTitleWrapper>
                        <ViewListingOwnerSectionTitle>{listingOwnerData.firstName}</ViewListingOwnerSectionTitle>
                        <ViewListingOwnerSectionSubtitle>
                            {listingOwnerData.userIDConfirmed
                                ? "Verified host"
                                : (new Date(listingOwnerData.createdAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24) <= 14
                                  ? "New host"
                                  : "Host"}
                        </ViewListingOwnerSectionSubtitle>
                    </ViewListingOwnerSectionTitleWrapper>
                </ViewListingOwnerSectionButton>
            </ViewListingOwnerSectionPartWrapper>
            <ViewListingOwnerSectionPartWrapper>
                <ViewListingOwnerSectionText>
                    {listingOwnerData.profileDescription ? (
                        isExpanded && listingOwnerData.profileDescription.length > 50 ? (
                            listingOwnerData.profileDescription.slice(0, 50) + "..."
                        ) : (
                            listingOwnerData.profileDescription
                        )
                    ) : (
                        <>
                            <span>{listingOwnerData.firstName} hasn't written about them yet.</span>
                            &nbsp;Don’t worry, you can still message them to ask questions or see what they’re like.
                        </>
                    )}
                    {listingOwnerData.profileDescription?.length > 50 && (
                        <>
                            <br />
                            <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read more" : "Show less"}</ReadMoreButton>
                        </>
                    )}
                    {listing ? (
                        listing.straID ? (
                            <>
                                <br />
                                <br />
                                <span>STRA registration:</span>
                                &nbsp;{listing.straID}
                            </>
                        ) : null
                    ) : null}
                </ViewListingOwnerSectionText>
            </ViewListingOwnerSectionPartWrapper>
            <ViewListingOwnerSectionQuestionWrapper>
                <ViewListingOwnerSectionQuestionButton
                    type="button"
                    onClick={() => {
                        if (dates.startDate !== "anyArrival" && dates.endDate !== "anyDeparture") {
                            toggleSendMessageRequest();
                            return;
                        }
                        //if send a message button is clicked, remember it so that datepicker knows to toggle sendmessage popup as soon as a date is selected
                        if (!sendAMessageBtnClicked) {
                            toggleSendAMessageBtnClicked();
                        }
                        toggleCalendar();
                    }}
                >
                    Message {listingOwnerData.firstName}
                </ViewListingOwnerSectionQuestionButton>
            </ViewListingOwnerSectionQuestionWrapper>
        </ViewListingOwnerSectionWrapper>
    );
}
