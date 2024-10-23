import {
    CreateBookingDesktopContentWrapper,
    CreateBookingDesktopContent,
    CreateBookingFeaturedImageDesktop,
    CreateBookingDesktopTitle,
    CreateBookingDesktopSubtitle,
    CreateBookingTitleContentWrapper,
    CreateBookingReviews,
    CreateBookingNoReviews,
} from "../createBookingStyling";
import { useNavigate } from "react-router-dom";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { defaultSearchFilter } from "../../../utils/defaultSearchQuery/defaultSearchQuery";

interface RightLayoutConetentProps {
    listing: ExtendedListing;
    imageKey: string;
}

interface ExtendedListing extends ListingModel {
    overallAverage?: number;
}

export default function RightLayoutConetent({ listing, imageKey }: RightLayoutConetentProps) {
    const navigate = useNavigate();
    const getRoomType = () => {
        if (listing) {
            switch (listing.typeOfPlace) {
                case "entire-place":
                    return `${listing.propertyType}`;
                case "private-room":
                    return "Private room";
                case "hotel-room":
                    return "Hotel room";
                case "shared-room":
                    return "Shared room";
                default:
                    return "";
            }
        }
    };
    return (
        <CreateBookingDesktopContentWrapper>
            <CreateBookingDesktopContent>
                <CreateBookingFeaturedImageDesktop
                    src={constructOptimisedImageUrl(imageKey, 800)}
                    alt="Featured image"
                    onClick={() => {
                        navigate(`/listing/${listing.id}`);
                    }}
                />
                <CreateBookingTitleContentWrapper>
                    <CreateBookingDesktopTitle>{listing.propertyTitle}</CreateBookingDesktopTitle>
                    {listing.overallAverage! > 0 ? (
                        <CreateBookingReviews>
                            {(listing.overallAverage! / 10).toFixed(1)} <span>({listing.ReviewStayModels.items.length})</span>
                        </CreateBookingReviews>
                    ) : (
                        <CreateBookingNoReviews>New</CreateBookingNoReviews>
                    )}
                </CreateBookingTitleContentWrapper>
                <CreateBookingDesktopSubtitle>{getRoomType()}</CreateBookingDesktopSubtitle>
            </CreateBookingDesktopContent>
        </CreateBookingDesktopContentWrapper>
    );
}
