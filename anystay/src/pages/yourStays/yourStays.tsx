import { useState, useEffect, useCallback } from "react";
import { callApi } from "../../utils/api/api";
// Import styling
import {
    YourStaysContainer,
    YourStaysTitle,
    YourStaysNoStaysTitle,
    YourStaysTitleWrapper,
    YourStaysNoStaysSubtitle,
    YourStaysCurrentWrapper,
    YourStaysNoBookingsWrapper,
    YourStaysCurrentTitle,
    YourStaysPastWrapper,
    YourStaysPastTitle,
    YourStaysBookingRequestPastDesktopWrapper,
    YourStaysBookingRequestPastMobileWrapper,
    YourStaysBookingRequestPastMobileSwiperSlide,
} from "./yourStaysStyling";

// Import components
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import StayLocation from "./StayMap/stayLocation";
import StayPastCard from "./StayCard/StayPastCard";
import StayCurrentCard from "./StayCard/StayCurrentCard";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { Navigation, Mousewheel, FreeMode } from "swiper";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { ReviewStayModel } from "../../interfaces/models/reviewStayModel";
import useIsDesktopSize from "../../hook/useIsDesktopSize";

export interface YourStaysProps extends BookingRequestModel {
    bookingAmount: number;
    changeRequested: boolean;
    daysUntilArrival: number;
    daysUntilDeparture: number;
    refundRequested: boolean;
    refundedAmount: number;
    responseBefore: any;
    responseNeeded: boolean;
    ReviewStayModels: { items: ReviewStayModel[] };
    state: string;
    status: string;
    overallAverage: number | null;
    hostPhoneNumber: string;
    conversationmodelID: string;
}

interface BookingRequestsState {
    [key: number]: YourStaysProps[];
}

const YourStays: React.FC = () => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    const [menuIndex, setMenuIndex] = useState(0);
    const [currentBookingRequests, setCurrentBookingRequests] = useState<BookingRequestsState>([]);
    const [pastBookingRequests, setPastBookingRequests] = useState<BookingRequestsState>([]);
    const [numberOfCurrentBookings, setNumberOfCurrentBookings] = useState(0);
    const [numberOfPastBookings, setNumberOfPastBookings] = useState(0);
    const [pastPages, setPastPages] = useState(1);
    const [pastPage, setPastPage] = useState(1);
    const [currentPages, setCurrentPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const isDesktopSize = useIsDesktopSize();

    //get from listing data
    const [stayMapCardSuburb, setStayMapCardSuburb] = useState("");
    const [stayMapCardStateShort, setStateMapCardStateShort] = useState("");

    const getBookings = useCallback(async () => {
        if (!userModel) return;

        const bookingsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/guest/bookings", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                get: "all",
                userModelId: userModel.id,
                today: new Date().toString(),
            },
        });

        setNumberOfCurrentBookings(bookingsData.body.currentTotal);
        setNumberOfPastBookings(bookingsData.body.pastTotal);
        setCurrentPages(bookingsData.body.currentTotalPages);
        setPastPages(bookingsData.body.pastTotalPages);
        setCurrentBookingRequests({ 1: bookingsData.body.currentBookingRequests });
        setPastBookingRequests({ 1: bookingsData.body.pastBookingRequests });
    }, [accessToken, userModel]);
    useEffect(() => {
        getBookings();
    }, [getBookings]);
    // const fetchMoreBookings = async (page, type) => {
    //     const bookingsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/guest/bookings", {
    //         headers: {
    //             Authorization: accessToken,
    //         },
    //         body: {
    //             userModelId: userModel.id,
    //             page: page,
    //             today: new Date().toString(),
    //             get: type,
    //         },
    //     });
    //     if (type === "current") {
    //         setCurrentBookingRequests((prevState) => {
    //             return { ...prevState, [page]: bookingsData.body.currentBookingRequests };
    //         });
    //     } else {
    //         setPastBookingRequests((prevState) => {
    //             return { ...prevState, [page]: bookingsData.body.pastBookingRequests };
    //         });
    //     }
    // };

    // const handlePageChange = async (event, value) => {
    //     if (!currentBookingRequests[value]) {
    //         await fetchMoreBookings(value, "current");
    //     }
    //     setCurrentPage(value);
    // };

    // const handlePastPageChange = async (event, value) => {
    //     if (!pastBookingRequests[value]) {
    //         await fetchMoreBookings(value, "past");
    //     }
    //     setPastPage(value);
    // };
    // const renderHeightOfAllBookingsRequestWrapper = () => {
    //     if (menuIndex === 0) {
    //         if (currentBookingRequests[currentPage]) {
    //             return currentBookingRequests[currentPage].length;
    //         } else {
    //             return 0;
    //         }
    //     } else {
    //         if (pastBookingRequests[pastPage]) {
    //             return pastBookingRequests[pastPage].length;
    //         } else {
    //             return 0;
    //         }
    //     }
    // };

    const getTitle = () => {
        //if there are current bookings
        const stayMapCardStateShortString = stayMapCardStateShort ? `, ${stayMapCardStateShort}` : "";

        if (numberOfCurrentBookings > 0 && currentBookingRequests[currentPage]) {
            if (currentBookingRequests[currentPage][0].status === "Booking Requested" && stayMapCardSuburb) {
                return `Your stay in ${stayMapCardSuburb}${stayMapCardStateShortString} is pending`;
            }
            if (currentBookingRequests[currentPage][0].status === "Change Requested") {
                return `Your change request in ${stayMapCardSuburb}${stayMapCardStateShortString} is pending`;
            }
            if (currentBookingRequests[currentPage][0].status === "Refund Requested") {
                return `Your refund in ${stayMapCardSuburb}${stayMapCardStateShortString} is pending`;
            }
            if (currentBookingRequests[currentPage][0].status === "Confirmed" && stayMapCardSuburb) {
                if (currentBookingRequests[currentPage][0].daysUntilArrival > 0) {
                    return `You’re arriving in ${stayMapCardSuburb}${stayMapCardStateShortString}`;
                } else {
                    return `Welcome to ${stayMapCardSuburb}${stayMapCardStateShortString}`;
                }
            }
        }
        //if there are no current bookings but past bookings
        if (numberOfPastBookings > 0 && pastBookingRequests[pastPage]) {
            if ((pastBookingRequests[pastPage][0].status === "Review Pending" || pastBookingRequests[pastPage][0].status === "Stay Review Pending") && stayMapCardSuburb) {
                //only check the first one
                return `Review your stay in ${pastBookingRequests[pastPage][0].state}`;
            }
        }
        return "Stays";
    };
    const renderStayMapCard = () => {
        //if there are current bookings
        if (numberOfCurrentBookings > 0 && currentBookingRequests[currentPage]) {
            return <StayLocation setStayMapCardSuburb={setStayMapCardSuburb} setStateMapCardStateShort={setStateMapCardStateShort} bookingRequest={currentBookingRequests[currentPage][0]} />;
        }
        //if no current booking but past booking
        if (numberOfPastBookings > 0 && pastBookingRequests[pastPage]) {
            if (pastBookingRequests[pastPage][0].status === "Review Pending" || pastBookingRequests[pastPage][0].status === "Stay Review Pending") {
                //only check the first one
                return <StayLocation setStayMapCardSuburb={setStayMapCardSuburb} setStateMapCardStateShort={setStateMapCardStateShort} bookingRequest={pastBookingRequests[pastPage][0]} />;
            }
        }
        return (
            <YourStaysNoBookingsWrapper>
                <YourStaysNoStaysTitle>No stays yet</YourStaysNoStaysTitle>
                <YourStaysNoStaysSubtitle>Search where you want to go and book your first stay</YourStaysNoStaysSubtitle>
            </YourStaysNoBookingsWrapper>
        );
    };

    return (
        <>
            <HelmetTags title="Your stays | Anystay" />
            <MobileNavbar hide={false} />
            <YourStaysContainer>
                <YourStaysTitleWrapper>
                    <YourStaysTitle>{getTitle()}</YourStaysTitle>
                </YourStaysTitleWrapper>

                {renderStayMapCard()}

                {numberOfCurrentBookings > 1 && currentBookingRequests[currentPage] && (
                    <YourStaysCurrentWrapper>
                        <YourStaysCurrentTitle>Upcoming arrivals</YourStaysCurrentTitle>
                        {isDesktopSize ? (
                            <YourStaysBookingRequestPastDesktopWrapper>
                                {currentBookingRequests[currentPage].map((bookingRequest, index) => {
                                    if (index === 0) return null;
                                    return <StayCurrentCard bookingRequest={bookingRequest} key={bookingRequest.id} />;
                                })}
                            </YourStaysBookingRequestPastDesktopWrapper>
                        ) : (
                            <YourStaysBookingRequestPastMobileWrapper
                                className="mySwiper"
                                modules={[Navigation, Mousewheel, FreeMode]}
                                navigation={true}
                                mousewheel={true}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={false}
                                onSlideChange={(e) => {}}
                                initialSlide={0}
                                slidesPerView={"auto"}
                            >
                                {currentBookingRequests[currentPage].map((bookingRequest, index) => {
                                    if (index === 0) return null;
                                    return (
                                        <YourStaysBookingRequestPastMobileSwiperSlide key={bookingRequest.id}>
                                            <StayCurrentCard bookingRequest={bookingRequest} />
                                        </YourStaysBookingRequestPastMobileSwiperSlide>
                                    );
                                })}
                            </YourStaysBookingRequestPastMobileWrapper>
                        )}
                    </YourStaysCurrentWrapper>
                )}

                {numberOfPastBookings > 0 && pastBookingRequests[pastPage] && (
                    <YourStaysPastWrapper>
                        <YourStaysPastTitle>Recent stays</YourStaysPastTitle>
                        {isDesktopSize ? (
                            <YourStaysBookingRequestPastDesktopWrapper>
                                {pastBookingRequests[pastPage].map((bookingRequest) => {
                                    return <StayPastCard bookingRequest={bookingRequest} key={bookingRequest.id} />;
                                })}
                            </YourStaysBookingRequestPastDesktopWrapper>
                        ) : (
                            <YourStaysBookingRequestPastMobileWrapper
                                className="mySwiper"
                                modules={[Navigation, Mousewheel, FreeMode]}
                                navigation={true}
                                mousewheel={true}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={false}
                                onSlideChange={(e) => {}}
                                initialSlide={0}
                                slidesPerView={"auto"}
                            >
                                {pastBookingRequests[pastPage].map((bookingRequest) => {
                                    return (
                                        <YourStaysBookingRequestPastMobileSwiperSlide key={bookingRequest.id}>
                                            <StayPastCard bookingRequest={bookingRequest} />
                                        </YourStaysBookingRequestPastMobileSwiperSlide>
                                    );
                                })}
                            </YourStaysBookingRequestPastMobileWrapper>
                        )}
                    </YourStaysPastWrapper>
                )}
            </YourStaysContainer>
        </>
    );
};

export default YourStays;
