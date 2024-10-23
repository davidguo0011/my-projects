import {
    HomeFeedListingLink,
    HomeFeedListingWrapper,
    HomeFeedListingResultTextWrapper,
    HomeFeedListingResultCardTitle,
    HomeFeedListingResultCardDate,
    HomeFeedListingResultCardPriceWrapper,
    HomeFeedListingResultCardPrice,
    HomeFeedListingResultCardSubtitle,
    HomeFeedListingSaveButtonWrapper,
    HeartIcon,
} from "./HomeFeedListingItemStyling";
import HomeFeedListingPhoto from "./HomeFeedListingPhoto";
import constructOptimisedImageUrl from "../../../../utils/imageOptimisation/constructOptimisedImageUrl";
import HomeFeedListingItemSkeleton from "../HomeFeedListingItemSkeleton/HomeFeedListingItemSkeleton";
import { motion } from "framer-motion";
import { useState, useRef, MouseEvent, useEffect } from "react";
import { accessTokenSelector } from "../../../../state/selectors/accessToken";
import { userModelSelector } from "../../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { signInMenuActivatedSelector } from "../../../../state/selectors/navbarToggle";
import { toggleSaved } from "../../../../utils/savedListings/toggleSaved";
import { SearchListingModel, ListingImageObject } from "../../../../interfaces/models/listingModel";

interface HomeFeedListingItemProps {
    listing: SearchListingModel;
    delay: number;
    cache: boolean;
    clickedListingEvent: any;
}

const HomeFeedListingItem: React.FC<HomeFeedListingItemProps> = ({ listing, delay, cache, clickedListingEvent }) => {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [isSaved, setIsSaved] = useState(false);
    const [hover, setHover] = useState(false);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);
    const isSavedLoading = useRef(false);
    const init = useRef(false);
    useEffect(() => {
        //run only once if usermodel is true for init
        if (init.current) return;
        if (userModel && userModel.savedListings.includes(listing.id)) {
            setIsSaved(true);
            init.current = true;
        }
    }, [listing.id, userModel]);

    const getPlaceType = () => {
        let placeType = "";
        if (listing && listing.suburb !== null) {
            const place = listing.suburb.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
            switch (listing.typeOfPlace) {
                case "entire-place":
                    placeType = listing.propertyType + " in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "hotel-room":
                    placeType = "Hotel in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "private-room":
                    placeType = "Private room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                case "shared-room":
                    placeType = "Shared room in " + place;
                    placeType = placeType[0].toUpperCase() + placeType.substring(1);
                    break;
                default:
                    break;
            }
        }

        return placeType;
    };

    function convertDateRange(startDate: string, endDate: string): string {
        // Parse the input date strings
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Format the dates
        const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" }; // Using 'short' for month abbreviation (e.g., "May")
        const startStr = start.toLocaleDateString("en-GB", options).replace(/ /g, " ");
        const endStr = end.toLocaleDateString("en-GB", options).replace(/ /g, " ");

        // Check if the start and end dates are in the same month
        if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
            // If in the same month, only show the day
            const dayOptions: Intl.DateTimeFormatOptions = { day: "2-digit" };
            const startDayStr = start.toLocaleDateString("en-GB", dayOptions).replace(/ /g, " ");
            const endDayStr = end.toLocaleDateString("en-GB", dayOptions).replace(/ /g, " ");
            return `${startDayStr} - ${endDayStr} ${start.toLocaleDateString("en-GB", { month: "short" })}`;
        }

        return `${startStr} - ${endStr}`;
    }

    const handleButtonClick = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        event.stopPropagation();
        if (userModel) {
            if (isSavedLoading.current) return;
            try {
                setIsSaved((prev) => !prev);
                isSavedLoading.current = true;
                await toggleSaved(listing.id, userModel, accessToken);
            } catch (err: any) {
                console.log(err);
                setIsSaved((prev) => !prev);
            } finally {
                isSavedLoading.current = false;
            }
        } else {
            setSignInMenuActivated(true);
        }
    };
    return (
        <HomeFeedListingWrapper>
            <HomeFeedListingLink
                to={`/listing/${listing.id}`}
                onClick={() => clickedListingEvent(listing.id)}
                target={window.innerWidth > 768 ? "_blank" : ""}
                rel="noopener noreferrer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <motion.div initial={{ display: "none" }} animate={{ display: "block" }} transition={{ duration: 0.5 }}>
                    <HomeFeedListingSaveButtonWrapper onClick={handleButtonClick} hover={hover || isSaved}>
                        <HeartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" onClick={() => {}}>
                            <path
                                d="M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z"
                                fill={isSaved ? `${ColorTheme.Red.color}` : `${ColorTheme.Black.opacityColor}`}
                                transform="translate(1, 1)"
                            />
                        </HeartIcon>
                    </HomeFeedListingSaveButtonWrapper>
                </motion.div>
                <motion.div
                    style={{ width: "100%", height: "100%", display: "flex", position: "absolute", top: 0 }}
                    initial={{ opacity: !cache ? 1 : 0 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: delay }}
                >
                    <HomeFeedListingItemSkeleton
                        aspectRatio={
                            (listing && listing?.listingImages[0]?.width ? listing.listingImages[0].width : 16) / (listing && listing?.listingImages[0]?.height ? listing.listingImages[0].height : 9)
                        }
                    />
                </motion.div>

                <motion.div
                    style={{ width: "100%", height: "100%", zIndex: 1, display: "flex", flexDirection: "column" }}
                    initial={{ opacity: !cache ? 0 : 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: delay }}
                >
                    <HomeFeedListingPhoto
                        url={constructOptimisedImageUrl((listing?.listingImages[0] as ListingImageObject)?.key, 500)}
                        aspectRatio={(listing?.listingImages[0] as ListingImageObject).width / (listing?.listingImages[0] as ListingImageObject)?.height}
                    />
                    <HomeFeedListingResultTextWrapper>
                        <HomeFeedListingResultCardTitle>{getPlaceType()}</HomeFeedListingResultCardTitle>
                        <HomeFeedListingResultCardSubtitle>{listing.propertyTitle}</HomeFeedListingResultCardSubtitle>
                        <HomeFeedListingResultCardDate>{convertDateRange(listing.startDate, listing.endDate)}</HomeFeedListingResultCardDate>

                        <HomeFeedListingResultCardPriceWrapper>
                            <HomeFeedListingResultCardPrice>${Number(listing.totalPrice! / 100).toFixed(0)} AUD</HomeFeedListingResultCardPrice>
                        </HomeFeedListingResultCardPriceWrapper>
                    </HomeFeedListingResultTextWrapper>
                </motion.div>
            </HomeFeedListingLink>
        </HomeFeedListingWrapper>
    );
};

export default HomeFeedListingItem;
