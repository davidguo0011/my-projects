import { useEffect, useState, useCallback } from "react";
import {
    AllBookingsTitleWrapper,
    AllBookingsTitle,
    AllBookingsTitleIcon,
    AllBookingsMenuWrapper,
    AllBookingsMenuItem,
    AllBookingsRequestsWrapper,
    BookingRequestsWrapper,
    AllBookingsContainer,
    PaginationWrapper,
    PaginationTitle,
    DashboardNoRequestsTitle,
    DashboardNoRequestsSubtitle,
    DashboardNoRequestsWrapper,
} from "./allBookingsStyling";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import BookingRequest from "./BookingRequest/BookingRequest";
import { useRecoilState } from "recoil";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import AnimationWrapperForPageSlider from "../../components/animationWrapper/AnimationWrapperForPageSlider";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { UserModel } from "../../interfaces/models/userModel";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import { ChangeBookingRequestModel } from "../../interfaces/models/changeBookingRequestModel";
import { ListingModel } from "../../interfaces/models/listingModel";
import BackBtn from "../../components/btn/backBtn/backBtn";
interface ExtendedBookingRequestModel extends BookingRequestModel {
    changeBookingRequestModel: ChangeBookingRequestModel[];
    userModel: UserModel;
    status: string;
    daysUntilArrival: number;
    daysUntilDeparture: number;
    expiryTime: number;
    listingModel: ListingModel;
}

interface currentBookingRequestsType {
    [key: number]: Array<ExtendedBookingRequestModel>;
}
interface pastBookingRequestsType {
    [key: number]: Array<ExtendedBookingRequestModel>;
}

export default function AllBookings() {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [isLoading, setIsLoading] = useState(true);

    const [currentBookingRequests, setCurrentBookingRequests] = useState<currentBookingRequestsType>({});
    const [numberOfCurrentBookingRequests, setNumberOfCurrentBookingRequests] = useState(0);
    const [pastBookingRequests, setPastBookingRequests] = useState<pastBookingRequestsType>({});
    const [numberOfPastBookingRequests, setNumberOfPastBookingRequests] = useState(0);

    const [menuIndex, setMenuIndex] = useState(0);

    const [currentPages, setCurrentPages] = useState(1);
    const [pastPages, setPastPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pastPage, setPastPage] = useState(1);
    const navigate = useNavigate();

    const fetchBookingRequests = useCallback(async () => {
        if (accessToken && userHostModel) {
            const bookingRequestsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/bookings/all", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    userHostModelId: userHostModel.id,
                    get: "all",
                    today: new Date().toString(),
                },
            });
            setNumberOfCurrentBookingRequests(bookingRequestsData.body.currentTotal);
            setNumberOfPastBookingRequests(bookingRequestsData.body.pastTotal);
            setCurrentPages(bookingRequestsData.body.currentTotalPages);
            setPastPages(bookingRequestsData.body.pastTotalPages);
            setCurrentBookingRequests({ 1: bookingRequestsData.body.currentBookingRequests });
            setPastBookingRequests({ 1: bookingRequestsData.body.pastBookingRequests });
            setIsLoading(false);
        }
    }, [accessToken, userHostModel]);

    const fetchMoreBookingRequests = async (page: number, type: string) => {
        if (userHostModel) {
            const bookingRequestsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/bookings/all", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    userHostModelId: userHostModel.id,
                    get: type,
                    today: new Date().toString(),
                    page: page,
                },
            });
            if (type === "current") {
                setCurrentBookingRequests((prevState) => {
                    return { ...prevState, [page]: bookingRequestsData.body.currentBookingRequests };
                });
            } else {
                setPastBookingRequests((prevState) => {
                    return { ...prevState, [page]: bookingRequestsData.body.pastBookingRequests };
                });
            }
        }
    };

    useEffect(() => {
        fetchBookingRequests();
    }, [fetchBookingRequests]);

    const handleCurrentPageChange = async (event: any, value: number) => {
        if (!currentBookingRequests[value] && userHostModel) {
            await fetchMoreBookingRequests(value, "current");
        }
        setCurrentPage(value);
    };

    const handlePastPageChange = async (event: any, value: number) => {
        if (!pastBookingRequests[value] && userHostModel) {
            await fetchMoreBookingRequests(value, "past");
        }
        setPastPage(value);
    };

    const renderHeightOfAllBookingsRequestWrapper = (): number => {
        let currentLength = 0;
        let pastLength = 0;
        if (currentBookingRequests[currentPage]) {
            currentLength = currentBookingRequests[currentPage].length;
        }
        if (pastBookingRequests[pastPage]) {
            pastLength = pastBookingRequests[pastPage].length;
        }
        return Math.max(currentLength, pastLength);
    };

    const renderLoadingOrNoBooking = () => {
        if (isLoading) {
            return (
                <DashboardNoRequestsWrapper>
                    <DashboardNoRequestsTitle>Loading bookings</DashboardNoRequestsTitle>
                    <DashboardNoRequestsSubtitle>Bookings and requests will appear shortly</DashboardNoRequestsSubtitle>
                </DashboardNoRequestsWrapper>
            );
        }
        if (!isLoading && numberOfCurrentBookingRequests === 0) {
            return (
                <DashboardNoRequestsWrapper>
                    <DashboardNoRequestsTitle>No bookings yet</DashboardNoRequestsTitle>
                    <DashboardNoRequestsSubtitle>New bookings and requests will appear here</DashboardNoRequestsSubtitle>
                </DashboardNoRequestsWrapper>
            );
        }
        if (!isLoading && numberOfPastBookingRequests === 0) {
            return (
                <DashboardNoRequestsWrapper>
                    <DashboardNoRequestsTitle>No past bookings</DashboardNoRequestsTitle>
                    <DashboardNoRequestsSubtitle>Past bookings and requests will appear here</DashboardNoRequestsSubtitle>
                </DashboardNoRequestsWrapper>
            );
        }
        return null;
    };

    if (!userHostModel || !userModel) return null;
    return (
        <>
            <HelmetTags title="Bookings | Anystay" />
            <AllBookingsContainer>
                <AllBookingsTitleWrapper>
                    <BackBtn
                        onClick={() => {
                            navigate("/dashboard");
                        }}
                        type={"Arrow"}
                        mobileTop={24}
                        mobileLeft={0}
                    />
                    <AllBookingsTitle>All bookings</AllBookingsTitle>
                </AllBookingsTitleWrapper>
                <AllBookingsMenuWrapper>
                    <AllBookingsMenuItem selected={menuIndex === 0} onClick={() => setMenuIndex(0)} type="button">
                        Current
                    </AllBookingsMenuItem>
                    <AllBookingsMenuItem selected={menuIndex === 1} onClick={() => setMenuIndex(1)} type="button">
                        Past
                    </AllBookingsMenuItem>
                </AllBookingsMenuWrapper>
                <AllBookingsRequestsWrapper numberOfItems={renderHeightOfAllBookingsRequestWrapper()}>
                    <AnimationWrapperForPageSlider initial={false} currentPageIndex={menuIndex} thisPageIndex={0} style={{ position: "absolute", top: "0", width: "100%" }}>
                        {numberOfCurrentBookingRequests > 0 && currentBookingRequests[currentPage] ? (
                            <BookingRequestsWrapper>
                                {currentBookingRequests[currentPage].map((bookingRequest, index) => {
                                    return <BookingRequest delay={index * 0.1} bookingRequest={bookingRequest} key={index} />;
                                })}
                            </BookingRequestsWrapper>
                        ) : (
                            renderLoadingOrNoBooking()
                        )}
                        {currentPages > 1 && (
                            <PaginationWrapper>
                                <Pagination page={currentPage} onChange={handleCurrentPageChange} count={currentPages} size="small" />
                                <PaginationTitle>
                                    Showing {currentPage} of {currentPages} pages
                                </PaginationTitle>
                            </PaginationWrapper>
                        )}
                    </AnimationWrapperForPageSlider>
                    <AnimationWrapperForPageSlider initial={false} currentPageIndex={menuIndex} thisPageIndex={1} style={{ position: "absolute", top: "0", width: "100%" }}>
                        {numberOfPastBookingRequests > 0 && pastBookingRequests[pastPage] ? (
                            <BookingRequestsWrapper>
                                {pastBookingRequests[pastPage].map((bookingRequest, index) => {
                                    return <BookingRequest delay={index * 0.1} bookingRequest={bookingRequest} key={index} />;
                                })}
                            </BookingRequestsWrapper>
                        ) : (
                            renderLoadingOrNoBooking()
                        )}
                        {pastPages > 1 && (
                            <PaginationWrapper>
                                <Pagination page={pastPage} onChange={handlePastPageChange} count={pastPages} size="small" />
                                <PaginationTitle>
                                    Showing {pastPage} of {pastPages} pages
                                </PaginationTitle>
                            </PaginationWrapper>
                        )}
                    </AnimationWrapperForPageSlider>
                </AllBookingsRequestsWrapper>
            </AllBookingsContainer>
            <MobileNavbar hide={false} />
        </>
    );
}
