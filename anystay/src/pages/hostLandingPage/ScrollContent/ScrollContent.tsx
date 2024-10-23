import {
    HostLandingPageScrollContentTitle,
    HostLandingPageScrollContentWrapper,
    HostLandingPageScrollContentCard,
    HostLandingPageScrollContentCardImg,
    HostLandingPageScrollContentCardTitle,
    HostLandingPageScrollWrapper,
    HostLandingPageScrollContentLearnMoreBtn,
} from "../hostLandingPageStyling";

const ScrollContent: React.FC = () => {
    const typeOfPlace = [
        {
            title: "House",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/HOUSE.png",
        },
        {
            title: "Apartment",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/APARTMENT.png",
        },
        {
            title: "Cottage",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/COTTAGE.png",
        },
        {
            title: "Tiny home",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/TINY+HOUSE.png",
        },
        {
            title: "RV",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/RV.png",
        },
        {
            title: "Campsite",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/CAMPSITE.png",
        },
        {
            title: "Tree house",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/TREE+HOUSE.png",
        },
    ];
    const typeOfRoom = [
        {
            title: "Bedroom",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/BEDROOM.png",
        },
        {
            title: "Suite",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/SUITE",
        },
        {
            title: "Hostel",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/SHARED+ROOM.png",
        },
        {
            title: "B&B",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/B&B.png",
        },
        {
            title: "Hotel",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/HOTEL.png",
        },
        {
            title: "Motel",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/MOTEL.png",
        },
        {
            title: "and more...",
            imgUrl: "https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/OTHER+ROOMS.png",
        },
    ];
    return (
        <>
            <HostLandingPageScrollWrapper>
                <HostLandingPageScrollContentTitle>List any type of place</HostLandingPageScrollContentTitle>
                <HostLandingPageScrollContentWrapper>
                    {typeOfPlace.map((place) => {
                        return (
                            <HostLandingPageScrollContentCard key={place.title}>
                                <HostLandingPageScrollContentCardImg src={place.imgUrl} alt="" />
                                <HostLandingPageScrollContentCardTitle>{place.title}</HostLandingPageScrollContentCardTitle>
                            </HostLandingPageScrollContentCard>
                        );
                    })}
                </HostLandingPageScrollContentWrapper>
                <HostLandingPageScrollContentWrapper style={{ marginBottom: "0" }}>
                    {typeOfRoom.map((room) => {
                        return (
                            <HostLandingPageScrollContentCard key={room.title}>
                                <HostLandingPageScrollContentCardImg src={room.imgUrl} alt="" />
                                <HostLandingPageScrollContentCardTitle>{room.title}</HostLandingPageScrollContentCardTitle>
                            </HostLandingPageScrollContentCard>
                        );
                    })}
                </HostLandingPageScrollContentWrapper>

                <HostLandingPageScrollContentLearnMoreBtn href="https://help.anystay.com.au">Learn more</HostLandingPageScrollContentLearnMoreBtn>
            </HostLandingPageScrollWrapper>
        </>
    );
};

export default ScrollContent;
