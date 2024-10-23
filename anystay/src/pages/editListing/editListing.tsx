import { useState, useEffect, useCallback } from "react";
import { callApi } from "../../utils/api/api";
import {
    EditListingContainer,
    EditListingTitleWrapper,
    EditListingTitle,
    EditListingsContentContainer,
    EditListingsContentMenu,
    EditListingsContentMenuItem,
    EditListingsContentMenuWrapper,
    EditListingContent,
    EditListingDesktopContainer,
    EditListingDesktopTitleWrapper,
    EditListingDesktopTitle,
    EditListingDesktopPreviewButton,
    EditListingDesktopActiveButton,
    EditListingDesktopActiveIndicator,
} from "./editListingStyling";

//import internal name edit
import EditInternalName from "./EditInternalName/EditInternalName";

// Import listing subages
import ListingDetails from "./subPages/listingDetails-01/listingDetails";
import ExperienceDetails from "./subPages/experience-02/experienceDetails";
import PricingAndFees from "./subPages/pricingAndFees-03/pricingAndFees";
import CalendarDetails from "./subPages/calendar-04/calendarDetails";
import RulesAndPolicies from "./subPages/rulesAndPolicies-05/rulesAndPolicies";

// Import popup container
import PopupContainer from "./PopupContainer/PopupContainer";
import RoomPopupContainer from "./PopupContainer/RoomPopupContainer";

import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";

import { useNavigate, useParams } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { ListingModel } from "../../interfaces/models/listingModel";
import BackBtn from "../../components/btn/backBtn/backBtn";

export interface ListingDataInterface extends ListingModel {
    hostawayListingId: string;
    unitNumber: string;
    checkInInstructions: string | null;
    checkOutInstructions: string | null;
    extraGuestFee: number | null;
    advanceNotice: number;
    instantBookEnabled: boolean;
    timeBeforeCheckIn: number;
    timeAfterCheckOut: number;
    checkInTime: number;
    checkOutTime: number;
    straID: string | null;
    extraMaxGuests: number | null;
    advanceNoticeTime: number;
    iCalImportLinks: string[];
    stateShort: string;
}

export interface EditListingContentInterface {
    editListingIndex: number;
    activateCard: (name: string) => void;
    listingData: ListingDataInterface;
}

export default function EditListing() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const [listingData, setListingData] = useState<ListingDataInterface | null>(null);

    const [editListingIndex, setEditListingIndex] = useState(0);

    // Popup flags
    const [popupName, setPopupName] = useState("");
    //internal name
    const [internalName, setInternalName] = useState("");
    //ical token
    const [iCalToken, setICalToken] = useState("");

    const getListingData = useCallback(async () => {
        let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}/edit-listing`);
        listingData = listingData.body.listing;

        setListingData(listingData);
        setInternalName(listingData.internalName);
    }, [id]);

    const getICalToken = useCallback(async () => {
        //this api has an error
        await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/icaltoken/${id}`, {
            headers: {
                Authorization: accessToken,
                listingID: id,
            },
        })
            .then((res) => {
                if (res.success) {
                    let icalLink = `https://api.anystay.com.au/listing/ical/${res.body.iCalToken}`;
                    if (process.env.REACT_APP_ENV === "dev") {
                        icalLink = `https://api.anystay.com.au/dev/listing/ical/${res.body.iCalToken}`;
                    } else if (process.env.REACT_APP_ENV === "staging") {
                        icalLink = `https://api.anystay.com.au/staging/listing/ical/${res.body.iCalToken}`;
                    }
                    setICalToken(icalLink);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, accessToken]);
    useEffect(() => {
        getListingData();
        getICalToken();
    }, [getICalToken, getListingData]);

    const getTypeOfPlace = (typeOfPlace: string, propertyType: string) => {
        if (typeOfPlace && propertyType) {
            //get prefix
            const typeOfPlaceData: { [key: string]: string } = { "entire-place": "Entire", "private-room": "Private room in", "hotel-room": "Hotel room in", "shared-room": "Shared room in" };
            const prefix = typeOfPlaceData[typeOfPlace];
            //get suffix
            const propertyTypeSplit = propertyType.split("-");
            const indexOfAnd = propertyTypeSplit.indexOf("and");
            if (indexOfAnd !== -1) {
                propertyTypeSplit[indexOfAnd] = "&";
            }
            const suffix = ` ${propertyTypeSplit.join(" ")}`;
            return `${prefix}${suffix}`;
        }
    };

    const deactivateUpdateCards = async () => {
        setPopupName("");
        document.body.style.overflow = "unset";
    };
    const activateCard = (name: string) => {
        const isHostawayListing = listingData && listingData.hostawayListingId;
        const hostawayListingHasAddress = isHostawayListing && listingData.street && listingData.streetNumber && listingData.suburb;
        if (!isHostawayListing) {
            setPopupName(name);
        } else if (isHostawayListing && !hostawayListingHasAddress && name === "updateAddressCard") {
            setPopupName(name);
        } else {
            setPopupName("blocker");
        }
        document.body.style.overflow = "hidden";
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleCalendarNav = () => {
        navigate("/your-calendar");
    };

    if (!listingData) return null;
    const editListingSubpage = (editListingIndex: number) => {
        switch (editListingIndex) {
            case 0:
                return <ListingDetails editListingIndex={editListingIndex} getTypeOfPlace={getTypeOfPlace} listingData={listingData} activateCard={activateCard} />;
            case 1:
                return <ExperienceDetails editListingIndex={editListingIndex} listingData={listingData} activateCard={activateCard} />;
            case 2:
                return <PricingAndFees editListingIndex={editListingIndex} listingData={listingData} activateCard={activateCard} />;
            case 3:
                return <CalendarDetails editListingIndex={editListingIndex} listingData={listingData} activateCard={activateCard} iCalToken={iCalToken} />;
            case 4:
                return <RulesAndPolicies editListingIndex={editListingIndex} listingData={listingData} activateCard={activateCard} />;
            default:
                return <ListingDetails editListingIndex={editListingIndex} getTypeOfPlace={getTypeOfPlace} listingData={listingData} activateCard={activateCard} />;
        }
    };
    return (
        <EditListingDesktopContainer>
            <HelmetTags title="Edit listing | Anystay" />
            <EditListingContainer>
                <EditListingTitleWrapper>
                    <BackBtn onClick={handleBack} type="Arrow" mobileTop={24} />
                    <EditListingTitle>{listingData.propertyTitle}</EditListingTitle>
                </EditListingTitleWrapper>

                <EditListingDesktopTitleWrapper>
                    <EditListingDesktopTitle>
                        <BackBtn onClick={handleBack} type="Arrow" />
                        <EditListingTitle>{listingData.propertyTitle}</EditListingTitle>
                    </EditListingDesktopTitle>
                    <EditListingDesktopActiveButton
                        onClick={() => {
                            activateCard("updateListingStatusCard");
                        }}
                    >
                        <EditListingDesktopActiveIndicator selected={listingData.status === "active"}></EditListingDesktopActiveIndicator>
                        {listingData.status === "active" ? "Active" : listingData.status === "Suspended" ? "Suspended" : "Inactive"}
                    </EditListingDesktopActiveButton>
                    <EditListingDesktopPreviewButton
                        type="button"
                        onClick={() => {
                            window.open(`/listing/${id}`, "_blank");
                        }}
                    >
                        View
                    </EditListingDesktopPreviewButton>
                </EditListingDesktopTitleWrapper>

                <EditInternalName internalName={internalName} setInternalName={setInternalName} listingID={listingData.id} />

                <EditListingsContentContainer>
                    <EditListingsContentMenuWrapper>
                        <EditListingsContentMenu>
                            <EditListingsContentMenuItem
                                selected={editListingIndex === 0}
                                onClick={() => {
                                    setEditListingIndex(0);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Details
                            </EditListingsContentMenuItem>
                            <EditListingsContentMenuItem
                                selected={editListingIndex === 1}
                                onClick={() => {
                                    setEditListingIndex(1);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Experience
                            </EditListingsContentMenuItem>
                            <EditListingsContentMenuItem
                                selected={editListingIndex === 2}
                                onClick={() => {
                                    setEditListingIndex(2);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Pricing and fees
                            </EditListingsContentMenuItem>
                            <EditListingsContentMenuItem
                                selected={editListingIndex === 3}
                                onClick={() => {
                                    setEditListingIndex(3);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Calendar and bookings
                            </EditListingsContentMenuItem>
                            <EditListingsContentMenuItem
                                selected={editListingIndex === 4}
                                onClick={() => {
                                    setEditListingIndex(4);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Rules and policies
                            </EditListingsContentMenuItem>
                        </EditListingsContentMenu>
                    </EditListingsContentMenuWrapper>
                    {/* Edit listing sub pages */}
                    <EditListingContent selected={editListingIndex}>{editListingSubpage(editListingIndex)}</EditListingContent>
                </EditListingsContentContainer>

                <PopupContainer
                    popupName={popupName}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    iCalToken={iCalToken}
                    activateCard={activateCard}
                />
                <RoomPopupContainer popupName={popupName} listingData={listingData} setListingData={setListingData} activateCard={activateCard} deactivateUpdateCards={deactivateUpdateCards} />
            </EditListingContainer>

            {/* <EditListingMobileCalendarButtonWrapper>
                <EditListingMobileCalendarButtonDivider />
                <EditListingMobileCalendarButton type="button" onClick={handleCalendarNav}>
                    Calendar
                </EditListingMobileCalendarButton>
            </EditListingMobileCalendarButtonWrapper> */}
        </EditListingDesktopContainer>
    );
}
