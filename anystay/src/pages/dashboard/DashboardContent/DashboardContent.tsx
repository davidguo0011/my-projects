import { Fragment, ChangeEvent } from "react";
import {
    DashboardContentWrapper,
    DashboardContentTitleWrapper,
    DashboardContentTitle,
    DashboardContentSeeAllButton,
    DashboardNoRequestsWrapper,
    DashboardNoRequestsTitle,
    DashboardNoRequestsSubtitle,
    BookingRequestsWrapper,
    PaginationWrapper,
    PaginationTitle,
} from "../dashboardStyling";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import BookingRequest from "../BookingRequest/BookingRequest";
import { BookingRequestModelState } from "../dashboard";

interface DashboardContentProps {
    bookingRequests: BookingRequestModelState;
    loadingBookings: boolean;
    currentPage: number;
    pageCount: number;
    fetchMoreBookings: (page: number) => Promise<void>;
    setCurrentPage: (currentPage: number) => void;
    numberOfBookings: number;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ bookingRequests, loadingBookings, currentPage, pageCount, fetchMoreBookings, setCurrentPage, numberOfBookings }) => {
    const handleCurrentPageChange = async (event: ChangeEvent<unknown>, value: number) => {
        await fetchMoreBookings(value);
        setCurrentPage(value);
    };

    return (
        <DashboardContentWrapper>
            {loadingBookings && (
                <Fragment>
                    <DashboardContentTitleWrapper>
                        <DashboardContentTitle>Your bookings</DashboardContentTitle>
                        <Link to="/all-bookings">
                            <DashboardContentSeeAllButton type="button">See all</DashboardContentSeeAllButton>
                        </Link>
                    </DashboardContentTitleWrapper>
                    <DashboardNoRequestsWrapper>
                        <DashboardNoRequestsTitle>Loading bookings</DashboardNoRequestsTitle>
                        <DashboardNoRequestsSubtitle>Bookings and requests will appear shortly</DashboardNoRequestsSubtitle>
                    </DashboardNoRequestsWrapper>
                </Fragment>
            )}
            {!loadingBookings &&
                (numberOfBookings > 0 ? (
                    <Fragment>
                        <DashboardContentTitleWrapper style={{ paddingBottom: "24px" }}>
                            <DashboardContentTitle>Your bookings</DashboardContentTitle>
                            <Link to="/all-bookings">
                                <DashboardContentSeeAllButton type="button">See all</DashboardContentSeeAllButton>
                            </Link>
                        </DashboardContentTitleWrapper>
                        <BookingRequestsWrapper>
                            {bookingRequests[currentPage].map((bookingRequest, index) => {
                                return <BookingRequest delay={index * 0.1} bookingRequest={bookingRequest} key={bookingRequest.id} />;
                            })}
                        </BookingRequestsWrapper>
                        {pageCount > 1 && (
                            <PaginationWrapper>
                                <Pagination page={currentPage} onChange={handleCurrentPageChange} count={pageCount} size="small" />
                                <PaginationTitle>
                                    Showing {currentPage} of {pageCount} pages
                                </PaginationTitle>
                            </PaginationWrapper>
                        )}
                    </Fragment>
                ) : (
                    <Fragment>
                        <DashboardContentTitleWrapper>
                            <DashboardContentTitle>Your bookings</DashboardContentTitle>
                            <Link to="/all-bookings">
                                <DashboardContentSeeAllButton type="button">See all</DashboardContentSeeAllButton>
                            </Link>
                        </DashboardContentTitleWrapper>
                        <DashboardNoRequestsWrapper>
                            <DashboardNoRequestsTitle>No bookings yet</DashboardNoRequestsTitle>
                            <DashboardNoRequestsSubtitle>New bookings and requests will appear here</DashboardNoRequestsSubtitle>
                        </DashboardNoRequestsWrapper>
                    </Fragment>
                ))}
        </DashboardContentWrapper>
    );
};

export default DashboardContent;
