import {
    EditListingListingDetailsSubPageWrapper,
    EditListingListingDetailsImagesSectionTitleWrapper,
    EditListingListingDetailsSectionTitleWrapper,
    EditListingListingDetailsSectionTitle,
    EditListingListingDetailsSectionEditButton,
    EditListingBasicsQuestionWrapper,
    EditListingBasicsQuestionTitle,
    EditListingBasicsQuestionTitleWrapper,
    EditListingBasicsQuestionTitleText,
    EditListingBasicsQuestionEditButton,
    EditListingBasicsQuestionText,
    EditListingStatusBubble,
    EditListingImageWrapper,
    EditListingImage,
    EditListingImagesWrapper,
    EditListingImagesSectionWrapper,
    EditListingRoomCardsWrapper,
    EditListingRoomImgWrapper,
    EditListingRoomCard,
    EditListingRoomImg,
    EditListingRoomIcon,
    EditListingRoomTitle,
    EditListingBasicsQuestionHoverWrapper,
    EditListingMarginWrapper,
} from "../../editListingStyling";
import AnimationWrapperForPageSlider from "../../../../components/animationWrapper/AnimationWrapperForPageSlider";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { EditListingContentInterface } from "../../editListing";
import { RoomModel } from "../../../../interfaces/models/roomModel";
import ImgComponent from "../../../../components/imageComponent/ImgComponent";
import useIsDesktopSize from "../../../../hook/useIsDesktopSize";

interface ListingDetailsProps extends EditListingContentInterface {
    getTypeOfPlace: (typeOfPlace: string, propertyType: string) => string | undefined;
}

export default function ListingDetails({ activateCard, listingData, getTypeOfPlace }: ListingDetailsProps) {
    const isDesktopSize = useIsDesktopSize();
    return (
        <EditListingListingDetailsSubPageWrapper>
            <EditListingListingDetailsPhotos activateCard={activateCard} listingImages={listingData.listingImages as string[]} />
            <EditListingRoomPhotos activateCard={activateCard} rooms={listingData.RoomModels.items} />
            <EditListingBasicsQuestionWrapper>
                <EditListingBasicsQuestionTitle style={isDesktopSize ? { marginTop: "48px" } : { marginTop: "32px" }}>Basic details</EditListingBasicsQuestionTitle>
                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateTitleCard")}>
                        <EditListingBasicsQuestionTitleText>Title</EditListingBasicsQuestionTitleText>
                        <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateTitleCard")} type="button">
                            Edit
                        </EditListingBasicsQuestionEditButton>
                    </EditListingBasicsQuestionTitleWrapper>
                    <EditListingBasicsQuestionText onClick={() => activateCard("updateTitleCard")}>
                        {listingData.propertyTitle ? listingData.propertyTitle : "No title yet"}
                    </EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>

                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateDescriptionCard")}>
                        <EditListingBasicsQuestionTitleText>Description</EditListingBasicsQuestionTitleText>
                        <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateDescriptionCard")} type="button">
                            Edit
                        </EditListingBasicsQuestionEditButton>
                    </EditListingBasicsQuestionTitleWrapper>
                    <EditListingBasicsQuestionText onClick={() => activateCard("updateDescriptionCard")}>
                        {listingData.propertyDescription
                            ? listingData.propertyDescription.length > 44
                                ? `${listingData.propertyDescription.slice(0, 44)}...`
                                : listingData.propertyDescription
                            : "No description yet"}
                    </EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>

                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateAmenitiesCard")}>
                        <EditListingBasicsQuestionTitleText>Amenities</EditListingBasicsQuestionTitleText>
                        <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateAmenitiesCard")} type="button">
                            Edit
                        </EditListingListingDetailsSectionEditButton>
                    </EditListingBasicsQuestionTitleWrapper>
                    <EditListingBasicsQuestionText onClick={() => activateCard("updateAmenitiesCard")}>{listingData.amenities.length}</EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>

                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateGuestsCard")}>
                        <EditListingBasicsQuestionTitleText>Guests</EditListingBasicsQuestionTitleText>
                        <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateGuestsCard")} type="button">
                            Edit
                        </EditListingBasicsQuestionEditButton>
                    </EditListingBasicsQuestionTitleWrapper>
                    <EditListingBasicsQuestionText style={{ marginBottom: 0 }} onClick={() => activateCard("updateGuestsCard")}>
                        {listingData.guests}
                    </EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>
            </EditListingBasicsQuestionWrapper>

            <EditListingBasicsQuestionTitle>Property info</EditListingBasicsQuestionTitle>
            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateAddressCard")}>
                    <EditListingBasicsQuestionTitleText>Location</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateAddressCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText
                    onClick={() => activateCard("updateAddressCard")}
                >{`${listingData.unitNumber ? `${listingData.unitNumber}/` : ""}${listingData.streetNumber && listingData.street && listingData.suburb ? `${listingData.streetNumber} ${listingData.street}, ${listingData.suburb}` : "Invalid address"}`}</EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updatePropertyTypeCard")}>
                    <EditListingBasicsQuestionTitleText>Property type</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updatePropertyTypeCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText onClick={() => activateCard("updatePropertyTypeCard")}>
                    {getTypeOfPlace(listingData.typeOfPlace, listingData.propertyType)}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingBasicsQuestionHoverWrapper>
                <EditListingBasicsQuestionTitleWrapper onClick={() => activateCard("updateListingAreaCard")}>
                    <EditListingBasicsQuestionTitleText>Area</EditListingBasicsQuestionTitleText>
                    <EditListingBasicsQuestionEditButton onClick={() => activateCard("updateListingAreaCard")} type="button">
                        Edit
                    </EditListingBasicsQuestionEditButton>
                </EditListingBasicsQuestionTitleWrapper>
                <EditListingBasicsQuestionText style={{ marginBottom: "0px" }} onClick={() => activateCard("updateListingAreaCard")}>
                    {listingData.areaUnit ? `${listingData.areaValue} ${listingData.areaUnit}` : "No area set"}
                </EditListingBasicsQuestionText>
            </EditListingBasicsQuestionHoverWrapper>

            <EditListingMarginWrapper>
                <EditListingBasicsQuestionHoverWrapper>
                    <EditListingListingDetailsSectionTitleWrapper onClick={() => activateCard("updateListingStatusCard")}>
                        <EditListingListingDetailsSectionTitle>Status</EditListingListingDetailsSectionTitle>
                        <EditListingListingDetailsSectionEditButton onClick={() => activateCard("updateListingStatusCard")} type="button">
                            Edit
                        </EditListingListingDetailsSectionEditButton>
                    </EditListingListingDetailsSectionTitleWrapper>
                    <EditListingBasicsQuestionText style={{ marginBottom: 0, display: "flex", alignItems: "center" }} onClick={() => activateCard("updateListingStatusCard")}>
                        <EditListingStatusBubble active={listingData.status === "active"} />
                        {listingData.status === "active" ? "Active" : "Inactive"}
                    </EditListingBasicsQuestionText>
                </EditListingBasicsQuestionHoverWrapper>
            </EditListingMarginWrapper>
            {/* <EditListingListingDetailsSectionTitleWrapper>
                <EditListingListingDetailsSectionTitle>
                    Verification
                </EditListingListingDetailsSectionTitle>
                <EditListingListingDetailsSectionEditButton onClick={() => listingData ? listingData.verified ? activateCard({updateVerifyListingUploadedCard: true}) : listingData.verifiedDocuments.length > 0 ? activateCard({updateVerifyListingUploadedCard: true}) : activateCard({updateVerifyListingCard: true}) : activateCard({updateVerifyListingCard: true})} type="button">Edit</EditListingListingDetailsSectionEditButton>
            </EditListingListingDetailsSectionTitleWrapper>
            <EditListingBasicsQuestionText style={{marginTop: "8px", marginBottom: 0, display: "flex", alignItems: "center"}}>
                <EditListingStatusBubble active={listingData ? listingData.verified : null} />{listingData ? listingData.verified ? 'Verified' : listingData.verifiedDocuments ? listingData.verifiedDocuments.length > 0 ? 'Unverified - being processed' : 'Unverified' : 'Unverified' : null}
            </EditListingBasicsQuestionText> */}
        </EditListingListingDetailsSubPageWrapper>
    );
}

function EditListingListingDetailsPhotos({ listingImages, activateCard }: { listingImages: string[]; activateCard: (name: string) => void }) {
    if (listingImages.length > 0) {
        return (
            <EditListingImagesSectionWrapper>
                <EditListingListingDetailsImagesSectionTitleWrapper>
                    <EditListingListingDetailsSectionTitle>Photos</EditListingListingDetailsSectionTitle>
                    <EditListingListingDetailsSectionEditButton type="button" onClick={() => activateCard("updatePhotosCard")}>
                        Edit
                    </EditListingListingDetailsSectionEditButton>
                </EditListingListingDetailsImagesSectionTitleWrapper>
                <EditListingImagesWrapper>
                    {listingImages.map(function (imgObj, index) {
                        return <EditListingListingDetailsPhoto imgKey={JSON.parse(imgObj).key as string} key={JSON.parse(imgObj).key} activateCard={activateCard} />;
                    })}
                </EditListingImagesWrapper>
            </EditListingImagesSectionWrapper>
        );
    } else {
        return <div>No images uploaded yet</div>;
    }
}

function EditListingListingDetailsPhoto({ imgKey, activateCard }: { imgKey: string; activateCard: (name: string) => void }) {
    return (
        <EditListingImageWrapper onClick={() => activateCard("updatePhotosCard")}>
            <EditListingImage id={`edit-listing-${imgKey}`} src={constructOptimisedImageUrl(imgKey, 500)} alt="Featured Listing Image" />
        </EditListingImageWrapper>
    );
}

function EditListingRoomPhotos({ rooms, activateCard }: { rooms: RoomModel[]; activateCard: (name: string) => void }) {
    const sortedRooms = rooms.sort((a, b) => {
        const getOrder = (roomType: string): number => {
            switch (roomType) {
                case "bedroom":
                    return 1;
                case "bathroom":
                    return 2;
                case "half-bathroom":
                    return 3;
                case "living-space":
                    return 4;
                default:
                    return 5;
            }
        };

        return getOrder(a.roomType) - getOrder(b.roomType);
    });
    const roomIcon = (roomType: string) => {
        if (roomType === "bedroom") {
            return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg";
        } else if (roomType === "bathroom" || roomType === "half-bathroom") {
            return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bathrooms.svg";
        } else {
            return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg";
        }
    };
    return (
        <EditListingImagesSectionWrapper>
            <EditListingListingDetailsImagesSectionTitleWrapper>
                <EditListingListingDetailsSectionTitle>Rooms & spaces</EditListingListingDetailsSectionTitle>
                <EditListingListingDetailsSectionEditButton type="button" onClick={() => activateCard("updateRoomsCard")}>
                    Edit
                </EditListingListingDetailsSectionEditButton>
            </EditListingListingDetailsImagesSectionTitleWrapper>
            <EditListingRoomCardsWrapper>
                {rooms.length > 0 ? (
                    sortedRooms.map((room, index) => (
                        <EditListingRoomCard onClick={() => activateCard("updateRoomsCard")} key={index}>
                            <ImgComponent
                                hasImage={room.images.length > 0}
                                src={room.images.length > 0 ? constructOptimisedImageUrl(room.images[0]) : roomIcon(room.roomType)}
                                width="160px"
                                alt="room image"
                                desktopWidth="180px"
                            />
                            <EditListingRoomTitle>{room.roomTitle}</EditListingRoomTitle>
                        </EditListingRoomCard>
                    ))
                ) : (
                    <EditListingRoomCard onClick={() => activateCard("updateRoomsCard")}>
                        <ImgComponent hasImage={false} src="https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg" width="128px" desktopWidth="180px" alt="add room icon" />
                        <EditListingRoomTitle>Add a room</EditListingRoomTitle>
                    </EditListingRoomCard>
                )}
            </EditListingRoomCardsWrapper>
        </EditListingImagesSectionWrapper>
    );
}
