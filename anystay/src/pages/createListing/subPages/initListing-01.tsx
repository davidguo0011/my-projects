import {
    CreateListingNewListingQuestionWrapper,
    CreateListingNewListingQuestionTitle,
    CreateListingNewListingQuestion,
    CreateListingDraftListingWrapper,
    CreateListingNewListingQuestionLabelTitle,
    CreateListingNewListingQuestionLabelSubtitle,
    CreateListingNewListingDesktopTitle,
    CreateListingNewListingBtnWrapper,
    CreateListingGetStartedImg,
    CreateListingDraftListingImg,
    CreateListingDraftListingTextWrapper,
    CreateListingDraftListingTitle,
    CreateListingDraftListingImgWrapper,
    CreateListingDraftsWrapper,
    CreateListingGetStartedImgWrapper,
} from "../createListingStyling";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

interface AddressData {
    unitNumber: string;
    streetNumber: string;
    street: string;
    suburb: string;
    stateShort: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
    latitude: number | null;
    longitude: number | null;
    location: string;
    propertyType: string;
    typeOfPlace: string;
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    propertyTitle: string;
    propertyDescription: string;
    listingImages: string[] | null;
    minimumPrice: number;
    amenities: string[];
    houseRules: string[];
    weeklyDiscount: number;
    monthlyDiscount: number;
    areaValue: number;
    areaUnit: "Ha" | "m²" | "";
    id: string;
}

interface NewListingQuestionProps {
    initDraftListing: (draftListing: AddressData) => Promise<void>;
    menuIndex: number;
    setMenuIndex: (e: number) => void;
    draftListings: any[];
}

export default function NewListingQuestion({ initDraftListing, menuIndex, setMenuIndex, draftListings }: NewListingQuestionProps) {
    return (
        <CreateListingNewListingQuestionWrapper>
            <CreateListingNewListingDesktopTitle>Let's get started</CreateListingNewListingDesktopTitle>
            <CreateListingNewListingBtnWrapper>
                <CreateListingNewListingQuestion selected={menuIndex === 0} onClick={() => setMenuIndex(0)}>
                    <CreateListingGetStartedImgWrapper>
                        <CreateListingGetStartedImg src="https://d292awxalydr86.cloudfront.net/Create+listing+page/List+your+place.jpg" alt="list your place img" />
                    </CreateListingGetStartedImgWrapper>
                    <CreateListingNewListingQuestionLabelTitle>Create a new listing</CreateListingNewListingQuestionLabelTitle>
                    <CreateListingNewListingQuestionLabelSubtitle>
                        Apartment, house, room, cabin,
                        <br /> caravan and 99+ property types.
                    </CreateListingNewListingQuestionLabelSubtitle>
                </CreateListingNewListingQuestion>
                <CreateListingNewListingQuestion selected={menuIndex === 1} onClick={() => setMenuIndex(1)}>
                    <CreateListingGetStartedImgWrapper>
                        <CreateListingGetStartedImg src="https://d292awxalydr86.cloudfront.net/Create+listing+page/Import+a+listing.webp" alt="import a listing img" />
                    </CreateListingGetStartedImgWrapper>
                    <CreateListingNewListingQuestionLabelTitle>Import a listing</CreateListingNewListingQuestionLabelTitle>
                    <CreateListingNewListingQuestionLabelSubtitle>Sync your listings with the Hostaway API.</CreateListingNewListingQuestionLabelSubtitle>
                </CreateListingNewListingQuestion>
            </CreateListingNewListingBtnWrapper>

            {draftListings && draftListings.length > 0 && (
                <>
                    <CreateListingNewListingQuestionTitle>Complete a draft</CreateListingNewListingQuestionTitle>

                    <CreateListingDraftsWrapper>
                        {draftListings.map((listing, index) => {
                            let src = "";
                            if (listing.listingImages.length > 0) {
                                const imgKey = JSON.parse(listing.listingImages[0]).key;
                                src = constructOptimisedImageUrl(imgKey, 300);
                            }

                            return (
                                <CreateListingDraftListingWrapper
                                    onClick={() => {
                                        setMenuIndex(0);
                                        initDraftListing(listing);
                                    }}
                                    key={listing.id}
                                >
                                    <CreateListingDraftListingImgWrapper>{src && <CreateListingDraftListingImg src={src} />}</CreateListingDraftListingImgWrapper>
                                    <CreateListingDraftListingTextWrapper>
                                        <CreateListingDraftListingTitle>{listing.propertyTitle ? listing.propertyTitle : ""}</CreateListingDraftListingTitle>
                                        <CreateListingNewListingQuestionLabelSubtitle>
                                            {listing.streetNumber} {listing.street}, {listing.suburb} {listing.state} {listing.postcode}
                                        </CreateListingNewListingQuestionLabelSubtitle>
                                    </CreateListingDraftListingTextWrapper>
                                </CreateListingDraftListingWrapper>
                            );
                        })}
                    </CreateListingDraftsWrapper>
                </>
            )}
        </CreateListingNewListingQuestionWrapper>
    );
}
