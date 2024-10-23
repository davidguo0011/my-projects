import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";

// Import styling
import {
    CreateListingWrapper,
    CreateListingNewListingQuestionsWrapper,
    CreateListingQuestionsButtonsWrapper,
    NewListingBackButton,
    NewListingBackButtonArrow,
    CreateListingHeaderWrapper,
    CreateListingContainer,
} from "./createListingStyling";

// Import sub pages
import InitListing from "./subPages/initListing-01";
import AddAddress from "./subPages/addAddress-02";
import PropertyType from "./subPages/propertyType-04";
import BasicDetails from "./subPages/basicDetails-05";
import AddImages from "./subPages/addImages-07";
import AddTitle from "./subPages/addTitle-08";
import AddDescription from "./subPages/addDescription-09";
import AddHouseRules from "./subPages/addHouseRules-10";
import AddPrice from "./subPages/addPrice-11";
import AddDiscounts from "./subPages/addDiscounts-12";
import ReadyToGo from "./subPages/readyToGo-13";
import AddSubpremises from "./subPages/addSubpremises";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import { userModelSelector } from "../../state/selectors/userModel";
import { draftListingSelector } from "../../state/selectors/draftListing";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import { ColorTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
import AddArea from "./subPages/addArea-20";
import CycleBtn from "../../components/btn/cycleBtn/cycleBtn";
import { NavbarCreateListingExitButton } from "../../components/navbar/desktopNavbar/navbarStyling";
import SaveAndExitPopup from "../../components/navbar/saveAndExitPopup/saveAndExitPopup";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import HelmetTags from "../../components/Helmet/HelmetTags";
import ChooseChannelManagerPlatform from "./subPages/importListingFromChannelManager/ChooseChannelManagerPlatform";
import ConnectWithChannelManager from "./subPages/importListingFromChannelManager/ConnectWithChannelManager";
import AddChannelManagerKey from "./subPages/importListingFromChannelManager/AddChannelManagerKey";
import ConnectWithChannelManagerDone from "./subPages/importListingFromChannelManager/ConnectWithChannelManagerDone";
import { loggedInSelector } from "../../state/selectors/loggedIn";
import { identityIdSelector } from "../../state/selectors/identityId";
import Analytics from "analytics";
import segmentPlugin from "@analytics/segment";
import GlobalAmenities from "../../components/globalAmenities/globalAmenities";

const analytics = Analytics({
    app: "Anystay",
    plugins: [
        segmentPlugin({
            writeKey: process.env.REACT_APP_SEGMENT_WRITE_KEY,
        }),
    ],
});

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
}

interface Listing extends AddressData {
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
}

interface DraftListingProps extends Listing {
    id: string;
}

interface PropertyTypeData {
    propertyType: string | null;
    typeOfPlace: string | null;
}

interface BasicDetailsData {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
}

interface DiscountsData {
    weeklyDiscount: string | number;
    monthlyDiscount: string | number;
}

interface ListingImage {
    key: string;
    alt: string;
    height: number | null;
    width: number | null;
    priority: number | null;
}

const defaultAddressData: AddressData = {
    unitNumber: "",
    streetNumber: "",
    street: "",
    suburb: "",
    stateShort: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    latitude: null,
    longitude: null,
};

export default function CreateListing() {
    const navigate = useNavigate();
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [draftListing, setDraftListing] = useRecoilState(draftListingSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);

    const { id, userhostmodelID } = useParams<{ id: string; userhostmodelID: string }>();
    const [frontPageIndex, setFrontPageIndex] = useState(0);
    const [subPageIndex, setSubPageIndex] = useState(1);
    const [formProgress, setFormProgress] = useState(1);
    const [addressData, setAddressData] = useState<AddressData>(defaultAddressData);
    const [propertyTypeData, setPropertyTypeData] = useState<PropertyTypeData>({
        propertyType: null,
        typeOfPlace: null,
    });
    const [basicDetailsData, setBasicDetailsData] = useState<BasicDetailsData>({
        guests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
    });
    const [amenitiesData, setAmenitiesData] = useState<string[]>([]);
    const [houseRulesData, setHouseRulesData] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState(0);
    const [propertyTitle, setPropertyTitle] = useState("");
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInSelector);
    const [identityId, setIdentityId] = useRecoilState(identityIdSelector);
    const [propertyDescription, setPropertyDescription] = useState("");
    const [listingImages, setListingImages] = useState<ListingImage[]>([]);
    const [discounts, setDiscounts] = useState<DiscountsData>({
        weeklyDiscount: 0,
        monthlyDiscount: 0,
    });
    const [draftListings, setDraftListings] = useState<any[]>([]);
    const [pageLoading, setPageLoading] = useState(true);
    const [readyToGo, setReadyToGo] = useState(false);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [isImgUploading, setIsImgUploading] = useState(false);

    const [areaValue, setAreaValue] = useState(0);
    const [areaUnit, setAreaUnit] = useState<"Ha" | "m²" | "">("m²");

    const [saveAndExitPopup, setSaveAndExitPopup] = useState(false);

    //channelmanager
    const [platform, setPlatform] = useState("");
    const [channelManagerKey, setChannelManagerKey] = useState("");
    const [acctId, setAcctId] = useState("");
    const [invalidKey, setInvalidKey] = useState<string | boolean>(false);

    const location = useLocation();

    useEffect(() => {
        if (!userModel) {
            navigate("/");
        }
        if (location.state && location.state.from === "integrationResult") {
            setFrontPageIndex(1);
            setPlatform(location.state.platform);
            setSubPageIndex(3);
        }
    }, [userModel, navigate]);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (subPageIndex === 14) {
            setReadyToGo(true);
        }
    }, [subPageIndex]);
    useEffect(() => {
        setDraftListing({ draftListing: null, listingID: null });
        return () => {
            setDraftListing({ draftListing: null, listingID: null });
        };
    }, [setDraftListing]);

    const initPage = useCallback(async () => {
        if (id) {
            await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}/create-listing`, {
                headers: {
                    Authorization: accessToken,
                },
            })
                .then((res) => {
                    initListing(res.body.listing);
                    setTimeout(() => {
                        setPageLoading(false);
                    }, 1050);
                })
                .catch((err) => console.log(err));
        } else {
            // Fetch the host's drafts
            await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, "drafts", {
                headers: {
                    Authorization: accessToken,
                },
            })
                .then((res) => {
                    // Check to see if the host has any drafts, if they don't we can skip the first page
                    if (res.body.drafts.length > 0) {
                        setDraftListings(res.body.drafts);
                    }
                    setTimeout(() => {
                        setPageLoading(false);
                    }, 1050);
                })
                .catch((err) => console.log(err));
        }
    }, [id, accessToken]);
    useEffect(() => {
        initPage();
    }, [initPage]);

    const initListing = (listing: Listing | null) => {
        if (listing) {
            setAddressData({
                unitNumber: listing.unitNumber,
                streetNumber: listing.streetNumber,
                street: listing.street,
                suburb: listing.suburb,
                stateShort: listing.stateShort,
                city: listing.city,
                state: listing.state,
                country: listing.country,
                postcode: listing.postcode,
                latitude: JSON.parse(listing.location).lat,
                longitude: JSON.parse(listing.location).lon,
            });
            setPropertyTypeData({
                propertyType: listing.propertyType,
                typeOfPlace: listing.typeOfPlace,
            });
            setBasicDetailsData({
                guests: listing.guests,
                bedrooms: listing.bedrooms,
                beds: listing.beds,
                bathrooms: listing.bathrooms,
            });
            setPropertyTitle(listing.propertyTitle);
            setPropertyDescription(listing.propertyDescription);
            setListingImages(listing.listingImages ? listing.listingImages.map((e) => JSON.parse(e)) : []);
            setMinPrice(listing.minimumPrice / 100);
            setAmenitiesData(listing.amenities);
            setHouseRulesData(listing.houseRules);
            setDiscounts({
                weeklyDiscount: listing.weeklyDiscount,
                monthlyDiscount: listing.monthlyDiscount,
            });
            setAreaValue(listing.areaValue);
            setAreaUnit(listing.areaUnit);
        }
        // Once we intialise the data from the draft we skip the user to the page they were up to
        // E.g skip the user tothe page closest to the end, as long as they have all the previous pages of data filled

        if (listing) {
            if (!(JSON.parse(listing.location).lat && JSON.parse(listing.location).lon)) {
                setSubPageIndex(2);
                return;
            }
            if (!(listing.propertyType || listing.typeOfPlace)) {
                setSubPageIndex(4);
                return;
            }
            if (!listing.guests) {
                setSubPageIndex(5);
                return;
            }
            if (!listing.areaValue) {
                setSubPageIndex(6);
                return;
            }
            if (!(listing.amenities.length > 0)) {
                setSubPageIndex(7);
                return;
            }
            if (listing.listingImages)
                if (!(listing.listingImages.length >= 8)) {
                    setSubPageIndex(8);
                    return;
                }
            if (!listing.propertyTitle) {
                setSubPageIndex(9);
                return;
            }
            if (!listing.propertyDescription) {
                setSubPageIndex(10);
                return;
            }
            if (!(listing.houseRules.length > 0)) {
                setSubPageIndex(11);
                return;
            }
            if (!listing.minimumPrice) {
                setSubPageIndex(12);
                return;
            }
            if (!(listing.weeklyDiscount && listing.monthlyDiscount)) {
                setSubPageIndex(13);
                return;
            }

            setSubPageIndex(14);
        }
    };

    const updateProgress = async (index: number) => {
        if (formProgress < index) {
            setFormProgress(index);
            analytics.track("CreateListingFormProgress", {
                userId: loggedIn ? userModel?.id : identityId,
                listingID: draftListing?.listingID ? draftListing.listingID : null,
                subPageIndex: index,
            });
        }
    };

    const initDraftListing = async (draftListing: DraftListingProps) => {
        navigate(`/create-listing/${userhostmodelID}/${draftListing.id}`);
        initListing(draftListing);
    };

    const previousSubPage = () => {
        if (platform === "guesty") {
            setPlatform("");
        }
        if (subPageIndex > 1) {
            setSubPageIndex(subPageIndex - 1);
        } else {
            navigate(`/your-listings/${userhostmodelID}`);
        }
    };

    const changePage = (index: number) => {
        setSubPageIndex(index);
    };

    const nextSubPage = () => {
        if (subPageIndex > 1 && frontPageIndex === 0) {
            updateListingData();
        }
        setSubPageIndex(subPageIndex + 1);
        updateProgress(subPageIndex + 1);
    };

    const isReadyToContinue = () => {
        if (frontPageIndex === 1) {
            if (subPageIndex === 4 && platform === "hostaway") {
                return Boolean(channelManagerKey && acctId);
            }
            if (subPageIndex === 4 && platform === "lodgify") {
                return Boolean(channelManagerKey);
            }
            return true;
        }
        switch (subPageIndex) {
            //only 2 3 4 7 8 11 need checking, others are not required
            case 2:
                return Boolean(
                    addressData.streetNumber &&
                        addressData.street &&
                        addressData.suburb &&
                        // addressData.stateShort &&
                        addressData.city &&
                        addressData.country &&
                        addressData.postcode &&
                        addressData.longitude &&
                        addressData.latitude
                );

            case 4:
                return Boolean(propertyTypeData.typeOfPlace && propertyTypeData.propertyType);
            case 5:
                return Boolean(basicDetailsData.guests);
            case 6:
                return areaValue > 0;
            case 8:
                return listingImages.length >= 8 && listingImages.length <= 100;
            case 9:
                return propertyTitle !== null && propertyTitle.trim() !== "";
            case 12:
                return minPrice >= 10 && minPrice <= 100000;
            default:
                return true;
        }
    };

    const getRooms = () => {
        let rooms = [];
        let bedrooms = Number(basicDetailsData.bedrooms);
        let bathrooms = 0;
        let createHalfBathroom = false;
        // Since bathrooms is an integer, 0.5 bathroom = 1
        // We check if number is even, if it is even that means there is no half bathroom e.g 3 bathrooms not 2.5 or 3.5
        // If it is odd there is a half bathroom, we make the number even and set halfBathroom flag to true
        if (Number(basicDetailsData.bathrooms) % 2 === 0) {
            bathrooms = Number(basicDetailsData.bathrooms) / 2;
        } else {
            bathrooms = (Number(basicDetailsData.bathrooms) + 1) / 2;
            createHalfBathroom = true;
        }
        // Generate the JSON for the rooms
        for (let i = 1; i < bedrooms + 1; i++) {
            let bedroom = {
                type: "bedroom",
                title: `Bedroom ${i}`,
                image: null,
                beds: [],
            };
            rooms.push(JSON.stringify(bedroom));
        }
        for (let i = 1; i < bathrooms + 1; i++) {
            let bathroom = null;
            // Check if halfBathroom should be created and if it should be this one
            bathroom = {
                type: "bathroom",
                title: `Bathroom ${i}`,
                halfBathroom: createHalfBathroom && i === bathrooms,
                image: null,
            };
            rooms.push(JSON.stringify(bathroom));
        }
        return rooms;
    };

    const createListing = async () => {
        setIsContinueBtnLoading(true);
        let newListingData = {
            unitNumber: addressData.unitNumber ? addressData.unitNumber : "",
            streetNumber: addressData.streetNumber,
            street: addressData.street,
            suburb: addressData.suburb,
            stateShort: addressData.stateShort,
            postcode: Number(addressData.postcode),
            state: addressData.state,
            city: addressData.city,
            country: addressData.country,
            latitude: addressData.latitude,
            longitude: addressData.longitude,
            guests: Number(basicDetailsData.guests),
            beds: Number(basicDetailsData.beds),
            bedrooms: Number(basicDetailsData.bedrooms),
            bathrooms: Number(basicDetailsData.bathrooms),
            propertyType: propertyTypeData.propertyType,
            typeOfPlace: propertyTypeData.typeOfPlace,
            categories: [propertyTypeData.typeOfPlace, propertyTypeData.propertyType],
            propertyTitle: propertyTitle,
            propertyDescription: propertyDescription,
            listingImages: listingImages.map((e) => JSON.stringify(e)),
            amenities: amenitiesData,
            minimumPrice: Number(minPrice * 100),
            houseRules: houseRulesData,
            weeklyDiscount: Number(discounts.weeklyDiscount),
            monthlyDiscount: Number(discounts.monthlyDiscount),
            rooms: getRooms(),
            userhostmodelID: userhostmodelID,
            draft: false,
            areaValue: areaValue,
            areaUnit: areaUnit,
        };
        if (id) {
            try {
                const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}`, {
                    headers: {
                        Authorization: accessToken,
                        listingID: id,
                    },
                    body: {
                        newListingData: newListingData,
                        hostEmail: userModel!.email,
                        name: userModel!.firstName,
                        id: id,
                    },
                });
                const listingDetail = {
                    ...newListingData,
                    id: id,
                };
                if (res.success) {
                    setIsContinueBtnLoading(false);
                    const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                    userHostModelCopy.ListingModels.items = [...userHostModelCopy.ListingModels.items, listingDetail];
                    setUserHostModel(userHostModelCopy);
                    navigate(`/your-listings/${userhostmodelID}`);
                }
            } catch (err) {
                console.log(err);
                setIsContinueBtnLoading(false);
            }
        } else {
            try {
                const res = await callApi("put", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing`, {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        newListingData: newListingData,
                        hostEmail: userModel!.email,
                        name: userModel!.firstName,
                    },
                });
                const listingDetail = {
                    ...newListingData,
                    id: res.body.createListing.id,
                };
                if (res.success) {
                    const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                    userHostModelCopy.ListingModels.items = [...userHostModelCopy.ListingModels.items, listingDetail];
                    setUserHostModel(userHostModelCopy);
                    setIsContinueBtnLoading(false);
                    navigate(`/your-listings/${userhostmodelID}`);
                }
            } catch (err) {
                console.log(err);
                setIsContinueBtnLoading(false);
            }
        }
    };

    const updateListingData = () => {
        let newListingData = {
            unitNumber: addressData.unitNumber,
            streetNumber: addressData.streetNumber,
            street: addressData.street,
            suburb: addressData.suburb,
            postcode: Number(addressData.postcode),
            state: addressData.state,
            city: addressData.city,
            country: addressData.country,
            latitude: addressData.latitude,
            longitude: addressData.longitude,
            guests: Number(basicDetailsData.guests),
            beds: Number(basicDetailsData.beds),
            bedrooms: Number(basicDetailsData.bedrooms),
            bathrooms: Number(basicDetailsData.bathrooms),
            propertyType: propertyTypeData.propertyType,
            typeOfPlace: propertyTypeData.typeOfPlace,
            propertyTitle: propertyTitle,
            propertyDescription: propertyDescription,
            listingImages: listingImages.map((e) => JSON.stringify(e)),
            amenities: amenitiesData,
            minimumPrice: Number(minPrice * 100),
            houseRules: houseRulesData,
            weeklyDiscount: Number(discounts.weeklyDiscount),
            monthlyDiscount: Number(discounts.monthlyDiscount),
            rooms: getRooms(),
            userhostmodelID: userhostmodelID,
            draft: true,
            areaValue: areaValue,
            areaUnit: areaUnit,
        };
        setDraftListing({ draftListing: newListingData, listingID: id ? id : null });
    };

    const updateAddress = async (place: google.maps.places.PlaceResult | null) => {
        if (place) {
            const getAddressComponent = (place: google.maps.places.PlaceResult, type: string, isShort?: boolean) => {
                if (isShort) {
                    return place.address_components?.find((obj) => obj.types.includes(type))?.short_name || null;
                }
                return place.address_components?.find((obj) => obj.types.includes(type))?.long_name || null;
            };
            let subpremise = getAddressComponent(place, "subpremise");
            let streetNumber = getAddressComponent(place, "street_number");
            let street = getAddressComponent(place, "route");
            let suburb = getAddressComponent(place, "locality");
            let stateShort = getAddressComponent(place, "administrative_area_level_1", true);
            let city = getAddressComponent(place, "administrative_area_level_2");
            let state = getAddressComponent(place, "administrative_area_level_1");
            let country = getAddressComponent(place, "country");
            let postCode = getAddressComponent(place, "postal_code");

            // Some places have the same city and suburb, such as 330 Church street, parramatta, NSW
            if (suburb && (city === null || city === undefined)) {
                city = suburb;
            }
            if (place && place.geometry && place.geometry.location) {
                setAddressData({
                    unitNumber: subpremise ? subpremise : "",
                    streetNumber: streetNumber ? streetNumber : "",
                    street: street ? street : "",
                    suburb: suburb ? suburb : "",
                    stateShort: stateShort ? stateShort : "",
                    city: city ? city : "",
                    state: state ? state : "",
                    country: country ? country : "",
                    postcode: postCode ? postCode : "",
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng(),
                });
            }
        } else {
            setAddressData(defaultAddressData);
        }
    };

    const updatePropertyType = (propertyType: string) => {
        setPropertyTypeData({
            ...propertyTypeData,
            propertyType: propertyType,
        });
    };

    const updateTypeOfPlace = (placeType: string) => {
        setPropertyTypeData({
            ...propertyTypeData,
            typeOfPlace: placeType,
        });
    };

    const updateGuests = (guests: number) => {
        setBasicDetailsData({
            ...basicDetailsData,
            guests: guests,
        });
    };

    const updateBedrooms = (bedrooms: number) => {
        setBasicDetailsData({
            ...basicDetailsData,
            bedrooms: bedrooms,
        });
    };

    const updateBeds = (beds: number) => {
        setBasicDetailsData({
            ...basicDetailsData,
            beds: beds,
        });
    };

    const updateBathrooms = (bathrooms: number) => {
        setBasicDetailsData({
            ...basicDetailsData,
            bathrooms: bathrooms,
        });
    };

    const updateNightlyPrice = (minimumPrice: number) => {
        setMinPrice(minimumPrice);
    };

    const updateWeeklyDiscount = (weeklyDiscount: string) => {
        setDiscounts({
            ...discounts,
            weeklyDiscount: weeklyDiscount,
        });
    };

    const updateMonthlyDiscount = async (monthlyDiscount: string) => {
        setDiscounts({
            ...discounts,
            monthlyDiscount: monthlyDiscount,
        });
    };

    const addAmenitie = async (amenitie: string) => {
        setAmenitiesData([...amenitiesData, amenitie]);
    };
    const removeAmenitie = async (amenitie: string) => {
        let amenities = amenitiesData.filter((item) => {
            return item !== amenitie;
        });
        setAmenitiesData(amenities);
    };
    const addHouseRule = async (houseRule: string) => {
        setHouseRulesData([...houseRulesData, houseRule]);
    };
    const removeHouseRule = async (houseRule: string) => {
        let houseRules = houseRulesData.filter((item) => {
            return item !== houseRule;
        });
        setHouseRulesData(houseRules);
    };

    const updatePropertyTitle = (propertyTitle: string) => {
        let charLimit = 50;
        let propertyTitleChars = propertyTitle.split("");
        let shortenedTitleChars = propertyTitleChars.slice(0, charLimit);
        propertyTitle = shortenedTitleChars.join("").toString();
        setPropertyTitle(propertyTitle);
    };

    const updatePropertyDescription = (propertyDescription: string) => {
        let charLimit = 2500;
        let propertyDescriptionChars = propertyDescription.split("");
        let shortenedDescriptionChars = propertyDescriptionChars.slice(0, charLimit);
        propertyDescription = shortenedDescriptionChars.join("").toString();
        setPropertyDescription(propertyDescription);
    };

    const addImg = async (imgKey: string, height: number | null, width: number | null) => {
        setListingImages((prevState) => [
            ...prevState,
            {
                key: imgKey,
                alt: "",
                height: height,
                width: width,
                priority: null,
            },
        ]);
    };
    const updateImages = async (images: ListingImage[]) => {
        setListingImages(images);
    };

    const updateAreaValue = (value: number) => {
        setAreaValue(value);
    };
    const updateAreaUnit = (value: "Ha" | "m²" | "") => {
        setAreaUnit(value);
    };

    const connectWithChannelManager = async () => {
        setIsContinueBtnLoading(true);
        try {
            if (!acctId || !channelManagerKey) throw new Error();
            const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `user/host/update-credentials`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    hostawayKey: acctId,
                    hostawaySecret: channelManagerKey,
                },
            });
            if (res.success) {
                const res = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `listings/sync`, {
                    headers: {
                        Authorization: accessToken,
                    },
                });
                if (res.success) {
                    console.log(res);
                    setIsContinueBtnLoading(false);
                    nextSubPage();
                }
            } else {
                setInvalidKey(true);
                setIsContinueBtnLoading(false);
            }
        } catch (err) {
            setInvalidKey(true);
            setIsContinueBtnLoading(false);
        }
    };

    const connectWithChannelManagerLodgify = async () => {
        setIsContinueBtnLoading(true);
        try {
            if (!channelManagerKey) throw new Error();
            const res = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-lodgify`, `/user/host/update-lodgify-credential`, {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    lodgifyAPIKey: channelManagerKey,
                },
            });
            if (res.success) {
                console.log(res);
                setIsContinueBtnLoading(false);
                nextSubPage();
            } else {
                setInvalidKey(true);
                setIsContinueBtnLoading(false);
            }
        } catch (err) {
            setInvalidKey(true);
            setIsContinueBtnLoading(false);
        }
    };

    if (pageLoading) {
        return <LoadingFullPageModal guestMode={true} reverse={false} />;
    }
    return (
        <>
            <HelmetTags title="Create a listing | Anystay" />
            <CreateListingContainer>
                {saveAndExitPopup && <SaveAndExitPopup closeSaveAndExitPopup={() => setSaveAndExitPopup(false)} activated={saveAndExitPopup} />}
                <CreateListingHeaderWrapper>
                    <NewListingBackButton type="button" onClick={previousSubPage}>
                        <NewListingBackButtonArrow />
                    </NewListingBackButton>
                    {draftListing.draftListing && frontPageIndex === 0 ? (
                        <NavbarCreateListingExitButton type="button" onClick={() => setSaveAndExitPopup(true)}>
                            {window.innerWidth > 768 ? "Exit" : "Exit"}
                        </NavbarCreateListingExitButton>
                    ) : (
                        <NavbarCreateListingExitButton type="button" onClick={() => navigate(`/your-listings/${userHostModel!.id}`)}>
                            Exit
                        </NavbarCreateListingExitButton>
                    )}
                </CreateListingHeaderWrapper>
                <CreateListingWrapper>
                    <CreateListingNewListingQuestionsWrapper>
                        <ExitButtonCover subPageIndex={subPageIndex} />
                        {subPageIndex === 1 && (
                            <InitListing initDraftListing={initDraftListing} menuIndex={frontPageIndex} setMenuIndex={(e: number) => setFrontPageIndex(e)} draftListings={draftListings} />
                        )}
                        {frontPageIndex === 0 ? (
                            <>
                                {subPageIndex === 2 && (
                                    <AddAddress
                                        latitude={addressData.latitude}
                                        longitude={addressData.longitude}
                                        unitNumber={addressData.unitNumber}
                                        streetNumber={addressData.streetNumber}
                                        street={addressData.street}
                                        suburb={addressData.suburb}
                                        stateShort={addressData.stateShort}
                                        state={addressData.state}
                                        country={addressData.country}
                                        postcode={addressData.postcode}
                                        updateAddress={updateAddress}
                                    />
                                )}
                                {subPageIndex === 3 && <AddSubpremises addressData={addressData} setAddressData={setAddressData} />}
                                {subPageIndex === 4 && (
                                    <PropertyType
                                        propertyType={propertyTypeData.propertyType}
                                        updatePropertyType={updatePropertyType}
                                        typeOfPlace={propertyTypeData.typeOfPlace}
                                        updateTypeOfPlace={updateTypeOfPlace}
                                    />
                                )}
                                {subPageIndex === 5 && (
                                    <BasicDetails
                                        guests={basicDetailsData.guests}
                                        updateGuests={updateGuests}
                                        bedrooms={basicDetailsData.bedrooms}
                                        updateBedrooms={updateBedrooms}
                                        updateBeds={updateBeds}
                                        beds={basicDetailsData.beds}
                                        bathrooms={basicDetailsData.bathrooms}
                                        updateBathrooms={updateBathrooms}
                                    />
                                )}
                                {subPageIndex === 6 && <AddArea updateAreaValue={updateAreaValue} updateAreaUnit={updateAreaUnit} areaValue={areaValue} areaUnit={areaUnit} />}
                                {subPageIndex === 7 && <GlobalAmenities amenities={amenitiesData} addAmenitie={addAmenitie} removeAmenitie={removeAmenitie} amenitiesTitle="Choose your amenities" />}
                                {subPageIndex === 8 && <AddImages images={listingImages} addImg={addImg} updateImages={updateImages} setIsImgUploading={setIsImgUploading} />}
                                {subPageIndex === 9 && <AddTitle propertyTitle={propertyTitle} updatePropertyTitle={updatePropertyTitle} />}
                                {subPageIndex === 10 && <AddDescription propertyDescription={propertyDescription} updatePropertyDescription={updatePropertyDescription} />}
                                {subPageIndex === 11 && <AddHouseRules houseRules={houseRulesData} addService={addHouseRule} removeService={removeHouseRule} />}
                                {subPageIndex === 12 && <AddPrice minimumPrice={minPrice} updateNightlyPrice={updateNightlyPrice} />}
                                {subPageIndex === 13 && (
                                    <AddDiscounts
                                        weeklyDiscount={discounts.weeklyDiscount}
                                        updateWeeklyDiscount={updateWeeklyDiscount}
                                        monthlyDiscount={discounts.monthlyDiscount}
                                        updateMonthlyDiscount={updateMonthlyDiscount}
                                    />
                                )}
                                {subPageIndex === 14 && <ReadyToGo changePage={changePage} />}
                            </>
                        ) : (
                            <>
                                {subPageIndex === 2 && <ChooseChannelManagerPlatform platform={platform} setPlatform={setPlatform} />}
                                {subPageIndex === 3 && <ConnectWithChannelManager platform={platform} />}
                                {subPageIndex === 4 && (
                                    <AddChannelManagerKey
                                        channelManagerKey={channelManagerKey}
                                        setChannelManagerKey={setChannelManagerKey}
                                        acctId={acctId}
                                        setAcctId={setAcctId}
                                        invalidKey={invalidKey}
                                        setInvalidKey={setInvalidKey}
                                        platform={platform}
                                    />
                                )}
                                {subPageIndex === 5 && <ConnectWithChannelManagerDone />}
                            </>
                        )}

                        {window.innerWidth < 768 && (
                            <CycleBtn
                                isLoading={isImgUploading || isContinueBtnLoading}
                                disabled={!isReadyToContinue() || isImgUploading || isContinueBtnLoading || platform === "guesty"}
                                background={"black"}
                                style={{ position: "fixed", right: "24px", bottom: "24px", zIndex: "101", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)" }}
                                onClick={() => {
                                    if (frontPageIndex === 0) {
                                        if (readyToGo && subPageIndex !== 14) {
                                            updateListingData();
                                            changePage(14);
                                            return;
                                        }
                                        if (subPageIndex === 14) {
                                            createListing();
                                            return;
                                        }
                                        nextSubPage();
                                    } else {
                                        if (subPageIndex === 3 && platform === "hospitable") {
                                            window.location.href = `https://auth.hospitable.com/oauth/authorize?client_id=${process.env.REACT_APP_HOSPITABLE_CLIENT_ID}&response_type=code`;
                                            return;
                                        }
                                        if (subPageIndex === 4 && platform === "hostaway") {
                                            connectWithChannelManager();
                                            return;
                                        }
                                        if (subPageIndex === 4 && platform === "lodgify") {
                                            connectWithChannelManagerLodgify();
                                            return;
                                        }
                                        if (subPageIndex === 5) {
                                            navigate(`/your-listings/${userHostModel!.id}`);
                                            return;
                                        }
                                        nextSubPage();
                                    }
                                }}
                            />
                        )}
                    </CreateListingNewListingQuestionsWrapper>
                    {window.innerWidth >= 768 && (
                        <CreateListingQuestionsButtonsWrapper>
                            <CycleBtn
                                isLoading={isImgUploading || isContinueBtnLoading}
                                disabled={!isReadyToContinue() || isImgUploading || isContinueBtnLoading || platform === "guesty"}
                                background={"black"}
                                style={{ position: "absolute", right: "32px" }}
                                onClick={() => {
                                    if (frontPageIndex === 0) {
                                        if (readyToGo && subPageIndex !== 14) {
                                            updateListingData();
                                            changePage(14);
                                            return;
                                        }
                                        if (subPageIndex === 14) {
                                            createListing();
                                            return;
                                        }
                                        if (isReadyToContinue()) {
                                            nextSubPage();
                                            return;
                                        }
                                    } else {
                                        if (subPageIndex === 3 && platform === "hospitable") {
                                            window.location.href = `https://auth.hospitable.com/oauth/authorize?client_id=${process.env.REACT_APP_HOSPITABLE_CLIENT_ID}&response_type=code`;
                                            return;
                                        }
                                        if (subPageIndex === 4 && platform === "hostaway") {
                                            connectWithChannelManager();
                                            return;
                                        }
                                        if (subPageIndex === 4 && platform === "lodgify") {
                                            connectWithChannelManagerLodgify();
                                            return;
                                        }
                                        if (subPageIndex === 5) {
                                            navigate(`/your-listings/${userHostModel!.id}`);
                                            return;
                                        }
                                        nextSubPage();
                                    }
                                }}
                            />
                        </CreateListingQuestionsButtonsWrapper>
                    )}
                </CreateListingWrapper>
            </CreateListingContainer>
        </>
    );
}

interface ExitButtonCoverProps {
    subPageIndex: number;
}

function ExitButtonCover({ subPageIndex }: ExitButtonCoverProps) {
    return (
        <motion.div
            initial={false}
            animate={{ x: subPageIndex === 17 ? "0vw" : "-100vw" }}
            style={{ height: "50px", width: "100px", background: ColorTheme.White.color, position: "fixed", right: 0, top: 0, zIndex: 200 }}
        ></motion.div>
    );
}
