import { useState, useMemo } from "react";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import {
    ViewLisitingAvailableRoomWrapper,
    ViewLisitingAvailableRoomTitle,
    ViewLisitingAvailableRooms,
    ViewLisitingAvailableRoom,
    ViewLisitingAvailableRoomIcon,
    ViewLisitingAvailableRoomText,
    ViewLisitingAvailableRoomSubtext,
    ViewLisitingAvailableRoomImage,
    ViewLisitingAvailableRoomSubtextListItem,
    ViewLisitingSwiperButton,
    ViewLisitingSwiperButtonWrapper,
    SwiperSlideWrapper,
} from "../viewListingStyling";
import Lightbox from "react-18-image-lightbox";
import { useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { RoomModel } from "../../../interfaces/models/roomModel";
import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

export default function ViewListingAvailableRooms({ availableRooms }: { availableRooms: RoomModel[] }) {
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);

    const SwiperButton = ({ isEnd, isBeginning }: { isEnd: boolean; isBeginning: boolean }) => {
        const swiper = useSwiper();
        return (
            <ViewLisitingSwiperButtonWrapper>
                <ViewLisitingSwiperButton onClick={() => swiper.slidePrev()} selected={isBeginning}>
                    <svg width="8px" height="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160" fill="none">
                        <path
                            d="M75.6698 10.0001C76.8638 9.99401 78.0469 10.2281 79.1498 10.6891C80.2526 11.15 81.2529 11.8279 82.0921 12.6827C83.794 14.3972 84.75 16.7213 84.75 19.1454C84.75 21.5683 83.794 23.8925 82.0921 25.6081L27.9259 80.1143L82.0921 134.62C83.6975 136.354 84.5714 138.647 84.5298 141.016C84.4884 143.385 83.5345 145.646 81.8694 147.321C80.2043 148.997 77.9578 149.957 75.6032 149.999C73.2487 150.04 70.9705 149.161 69.2474 147.545L8.65864 86.577C6.95609 84.8613 6 82.5372 6 80.1143C6 77.6901 6.95609 75.366 8.65864 73.6516L69.2474 12.6827C70.086 11.8279 71.0869 11.15 72.1896 10.6891C73.2923 10.2281 74.475 9.99401 75.6698 10.0001Z"
                            fill={isBeginning ? ColorTheme.Grey2.color : ColorTheme.Black.color}
                        />
                    </svg>
                </ViewLisitingSwiperButton>
                <ViewLisitingSwiperButton onClick={() => swiper.slideNext()} selected={isEnd}>
                    <svg width="8px" height="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160" fill="none" style={{ transform: "rotate(180deg)" }}>
                        <path
                            d="M75.6698 10.0001C76.8638 9.99401 78.0469 10.2281 79.1498 10.6891C80.2526 11.15 81.2529 11.8279 82.0921 12.6827C83.794 14.3972 84.75 16.7213 84.75 19.1454C84.75 21.5683 83.794 23.8925 82.0921 25.6081L27.9259 80.1143L82.0921 134.62C83.6975 136.354 84.5714 138.647 84.5298 141.016C84.4884 143.385 83.5345 145.646 81.8694 147.321C80.2043 148.997 77.9578 149.957 75.6032 149.999C73.2487 150.04 70.9705 149.161 69.2474 147.545L8.65864 86.577C6.95609 84.8613 6 82.5372 6 80.1143C6 77.6901 6.95609 75.366 8.65864 73.6516L69.2474 12.6827C70.086 11.8279 71.0869 11.15 72.1896 10.6891C73.2923 10.2281 74.475 9.99401 75.6698 10.0001Z"
                            fill={isEnd ? ColorTheme.Grey2.color : ColorTheme.Black.color}
                        />
                    </svg>
                </ViewLisitingSwiperButton>
            </ViewLisitingSwiperButtonWrapper>
        );
    };

    if (availableRooms.length === 0) return null;
    const sortedAvailableRooms = availableRooms.sort((a, b) => {
        const getOrder = (roomType: string): number => {
            switch (roomType) {
                case "bedroom":
                    return 1;
                case "bathroom":
                    return 2;
                case "half-bathroom":
                    return 3;
                case "otherRoom":
                    return 4;
                default:
                    return 5;
            }
        };

        return getOrder(a.roomType) - getOrder(b.roomType);
    });
    return (
        <ViewLisitingAvailableRoomWrapper>
            <ViewLisitingAvailableRoomTitle>Rooms and spaces</ViewLisitingAvailableRoomTitle>
            <ViewLisitingAvailableRooms
                slidesPerView="auto"
                spaceBetween={24}
                modules={[Navigation, FreeMode]}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                loop={false}
                onSlideChange={(e) => {
                    setIsEnd(e.isEnd);
                    setIsBeginning(e.isBeginning);
                }}
                className="listing-category-swiper"
            >
                {sortedAvailableRooms.map(function (value, index) {
                    return (
                        <SwiperSlideWrapper key={index}>
                            <ViewListingAvailableRoomCard room={value} key={index} />
                        </SwiperSlideWrapper>
                    );
                })}
                {availableRooms.length > 3 && <SwiperButton isEnd={isEnd} isBeginning={isBeginning} />}
            </ViewLisitingAvailableRooms>
        </ViewLisitingAvailableRoomWrapper>
    );
}

function ViewListingAvailableRoomCard({ room }: { room: RoomModel }) {
    const [imageLightboxActive, setImageLightBoxActive] = useState(false);
    let singleBeds = room.roomType === "bedroom" && room.roomBeds ? room.roomBeds.filter((bed: string) => bed === "single") : [];
    let doubleBeds = room.roomType === "bedroom" && room.roomBeds ? room.roomBeds.filter((bed: string) => bed === "double") : [];
    let queenBeds = room.roomType === "bedroom" && room.roomBeds ? room.roomBeds.filter((bed: string) => bed === "queen") : [];
    let kingBeds = room.roomType === "bedroom" && room.roomBeds ? room.roomBeds.filter((bed: string) => bed === "king") : [];

    const formatBeds = () => {
        let beds = [];
        if (singleBeds.length > 0) {
            beds.push(singleBeds.length + " single");
        }
        if (doubleBeds.length > 0) {
            beds.push(doubleBeds.length + " double");
        }
        if (queenBeds.length > 0) {
            beds.push(queenBeds.length + " queen");
        }
        if (kingBeds.length > 0) {
            beds.push(kingBeds.length + " king");
        }
        return beds.join(", ");
    };

    const roomImageUrl = useMemo(() => {
        if (room.images[0]) {
            return constructOptimisedImageUrl(room.images[0], 300);
        }
        return "";
    }, [room.images]);

    return (
        <>
            {imageLightboxActive && (
                <Lightbox
                    mainSrc={room.images[0] ? constructOptimisedImageUrl(room.images[0], 1000) : ""}
                    onCloseRequest={() => setImageLightBoxActive(false)}
                    imageTitle={
                        room.roomType === "bedroom"
                            ? `${room.roomTitle} • ${singleBeds.length > 0 ? singleBeds.length + " single bed" + (singleBeds.length > 1 ? "s" : "") : ""}${
                                  doubleBeds.length > 0 ? doubleBeds.length + " double bed" + (doubleBeds.length > 1 ? "s" : "") : ""
                              }${queenBeds.length > 0 ? queenBeds.length + " queen bed" + (queenBeds.length > 1 ? "s" : "") : ""}${
                                  kingBeds.length > 0 ? kingBeds.length + " king bed" + (kingBeds.length > 1 ? "s" : "") : ""
                              }`
                            : room.roomTitle
                    }
                    enableZoom={false}
                />
            )}
            <ViewLisitingAvailableRoom>
                {roomImageUrl ? (
                    <ViewLisitingAvailableRoomImage onClick={() => setImageLightBoxActive(true)} src={roomImageUrl} alt={"room icon"} />
                ) : room.roomType === "bedroom" ? (
                    <ViewLisitingAvailableRoomIcon src={"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg"} alt={"room icon"} />
                ) : (
                    (room.roomType === "bathroom" || room.roomType === "half-bathroom") && (
                        <ViewLisitingAvailableRoomIcon src={"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bathrooms.svg"} alt={"room icon"} />
                    )
                )}
            </ViewLisitingAvailableRoom>
            <ViewLisitingAvailableRoomText>{room.roomTitle}</ViewLisitingAvailableRoomText>
            {room.roomType === "bedroom" && (
                <ViewLisitingAvailableRoomSubtext>
                    <ViewLisitingAvailableRoomSubtextListItem>{formatBeds()}</ViewLisitingAvailableRoomSubtextListItem>
                </ViewLisitingAvailableRoomSubtext>
            )}
        </>
    );
}
