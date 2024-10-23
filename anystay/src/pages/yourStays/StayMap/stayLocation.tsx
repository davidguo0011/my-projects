import { YourStaysBookingsMapWrapper, YourStaysDivider } from "../yourStaysStyling";
import { useState, useEffect, useCallback } from "react";
import Map from "../../../components/map/map";
import { callApi } from "../../../utils/api/api";
import SkeletonLoadingDummyCardYourStayMap from "../../../components/skeletonLoadingDummyCard/skeletonLoadingDummyCardYourStay/skeletonLoadingDummyCardYourStayMap";
import StayMapCard from "../StayCard/StayMapCard";
import useIsDesktopSize from "../../../hook/useIsDesktopSize";
import SearviceBtns from "../ServiceBtns/ServiceBtns";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { YourStaysProps } from "../yourStays";
import { UserHostModel } from "../../../interfaces/models/userHostModel";

interface StayLocationProps {
    bookingRequest: YourStaysProps;
    setStayMapCardSuburb: (stayMapCardSuburb: string) => void;
    setStateMapCardStateShort: (stayMapCardStateShort: string) => void;
}

export interface StayListingProps extends ListingModel {
    stateShort: string;
    unitNumber: string;
    UserHostModel: UserHostModel;
    checkInInstructions?: string;
    checkInTime: number;
}

export interface ListingDataProps {
    body: {
        listing: StayListingProps;
    };
}

const StayLocation: React.FC<StayLocationProps> = ({ bookingRequest, setStayMapCardSuburb, setStateMapCardStateShort }) => {
    const [listingData, setListingData] = useState<StayListingProps | null>(null);
    const [loading, setLoading] = useState(true);
    const isDesktopSize = useIsDesktopSize();

    const initStay = useCallback(
        async (listingmodelID: string) => {
            let listingData: ListingDataProps = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${listingmodelID}/your-stay-card`);
            setListingData(listingData.body.listing);
            setStateMapCardStateShort(listingData.body.listing.stateShort ? listingData.body.listing.stateShort : "");
            setStayMapCardSuburb(listingData.body.listing.suburb);
            setLoading(false);
        },
        [setStateMapCardStateShort, setStayMapCardSuburb]
    );
    useEffect(() => {
        const init = async () => {
            await initStay(bookingRequest.listingmodelID);
        };
        init();
    }, [bookingRequest.listingmodelID, initStay]);

    return (
        <>
            <YourStaysBookingsMapWrapper>
                {loading ? (
                    <SkeletonLoadingDummyCardYourStayMap />
                ) : (
                    <>
                        <StayMapCard bookingRequest={bookingRequest} listingData={listingData as StayListingProps} />
                        {isDesktopSize && (
                            <Map
                                containerStyle={{
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    borderRadius: "12px",
                                }}
                                lat={listingData && JSON.parse(listingData.location).lat}
                                lng={listingData && JSON.parse(listingData.location).lon}
                                zoom={16}
                                minZoom={13}
                                zoomControl={true}
                                scrollWheelZoom={false}
                            />
                        )}
                    </>
                )}
            </YourStaysBookingsMapWrapper>
            <SearviceBtns bookingRequest={bookingRequest} />
            <YourStaysDivider />
        </>
    );
};

export default StayLocation;
