import { SearchListingResultCardImageWrapper, SearchListingLink } from "../../../profileStyling";
import { YourListingResultImage } from "../../../../yourListing/yourListingStyling";
import {
    SearchListingResultCard,
    SearchListingResultCardSubtitle,
    SearchListingResultCardTitle,
    SearchListingResultCardAttributeWrapper,
    SearchListingResultCardPrice,
    SearchListingResultCardAttribute,
    SearchListingResultTextWrapper,
    SearchListingResultCardPriceWrapper,
} from "../../../../searchListing/searchListingStyling";
import { defaultSearchFilter } from "../../../../../utils/defaultSearchQuery/defaultSearchQuery";
import constructOptimisedImageUrl from "../../../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface ProfileListingResultProps {
    listing: any;
}

const ProfileListingResult: React.FC<ProfileListingResultProps> = ({ listing }) => {
    const getPlaceType = () => {
        let placeType: string = "";

        if (listing && listing.suburb !== null) {
            switch (listing.typeOfPlace) {
                case "entire-place":
                    placeType = listing.propertyType + " in " + listing.suburb.toLowerCase();
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "hotel-room":
                    placeType = "Hotel room in " + listing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "private-room":
                    placeType = "Private room in " + listing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "shared-room":
                    placeType = "Shared room in " + listing.propertyType;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                default:
                    break;
            }
        }
        return placeType;
    };

    return (
        <SearchListingLink to={`/listing/${listing.id}`} target="_blank" rel="noopener noreferrer">
            <SearchListingResultCard>
                {/* <SearchListingVerifiedButton>
            </SearchListingVerifiedButton> */}
                <SearchListingResultCardImageWrapper>
                    {/* <AmplifyS3Image style={{"--width": "100%", "--height": "100%", "--objectFit": "cover"}} imgKey={listing.listingImages[0]} /> */}
                    <YourListingResultImage src={constructOptimisedImageUrl(JSON.parse(listing.listingImages[0]).key, 800)} alt="img" />
                </SearchListingResultCardImageWrapper>
                <SearchListingResultTextWrapper>
                    <SearchListingResultCardSubtitle>{getPlaceType()}</SearchListingResultCardSubtitle>
                    <SearchListingResultCardTitle>{listing.propertyTitle}</SearchListingResultCardTitle>
                    <SearchListingResultCardAttributeWrapper>
                        {listing.amenities.map((attribute: string, index: number) => {
                            if (index < 3) {
                                return <SearchListingResultCardAttribute key={index}>{attribute}</SearchListingResultCardAttribute>;
                            } else if (index < 4) {
                                return <SearchListingResultCardAttribute key={index}>+{listing.amenities.length - 3}</SearchListingResultCardAttribute>;
                            } else {
                                return null;
                            }
                        })}
                        {/* {listingAttributeCards(listing.amenities)} */}
                    </SearchListingResultCardAttributeWrapper>
                    <SearchListingResultCardPriceWrapper>
                        {/* <SearchListingResultCardPropertyDetails >
                        {listing.guests} {listing.guests > 1 ? 'guests' : 'guest'} • {listing.bedrooms} bed • {listing.bathrooms} bath
                    </SearchListingResultCardPropertyDetails> */}
                        <SearchListingResultCardPrice>
                            ${Number(listing.minimumPrice / 100).toFixed(2)} AUD <span>/ night</span>
                        </SearchListingResultCardPrice>
                    </SearchListingResultCardPriceWrapper>
                </SearchListingResultTextWrapper>
            </SearchListingResultCard>
        </SearchListingLink>
    );
};

export default ProfileListingResult;
