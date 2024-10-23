import { useEffect, useState, useCallback } from "react";
import {
    DashboardWrapper,
    DashboardHeaderWrapper,
    DashboardHeaderTitle,
    DashboardContentTitleWrapper,
    DashboardContentTitle,
    DashboardHeaderInfoWrapper,
    DashboardHeaderInfoCard,
    DashboardHeaderInfoCardTitle,
    DashboardHeaderInfoCardValue,
    DashboardHeaderContainer,
    PayoutSettingIncompleteLink,
    PayoutSettingsIncompleteCategory,
    PayoutSettingsIncompleteTitle,
    PayoutSettingsIncompleteSubtitle,
    PayoutSettingsCardWrapper,
    DashboardTitleWrapper,
    DashboardHeaderTitleWrapper,
} from "./dashboardStyling";
import DashboardContent from "./DashboardContent/DashboardContent";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import Footer from "../../components/footer/footer";
import LoadingFullPageModal from "../../components/loadingFullPageModal/loadingFullPageModal";
import { userModelSelector } from "../../state/selectors/userModel";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { stripeAccountSelector } from "../../state/selectors/stripeAccount";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { BookingRequestModel } from "../../interfaces/models/bookingRequestModel";
import ContinueBtn from "../../components/btn/continueBtn/continueBtn";
import GlobalPopupContainerCenter from "../../components/globalPopup/GlobalPopupContainerCenter";

export interface BookingRequestModelState {
    [key: number]: BookingRequestModel[];
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [stripeHostAccount, setStripeHostAccount] = useRecoilState(stripeAccountSelector);

    const [bookingRequests, setBookingRequests] = useState<BookingRequestModelState>({});
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [loadingBookings, setLoadingBookings] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [numberOfBookings, setNumberOfBookings] = useState(0);
    const [numberOfPendingRequests, setNumberOfPendingRequests] = useState(0);

    // const [coHostPopupOpen, setCoHostPopupOpen] = useState(false);

    const fetchBookings = useCallback(
        async (accessToken: string) => {
            try {
                if (!userHostModel) return;
                let bookingRequestsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/bookings", {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        userHostModelId: userHostModel.id,
                        today: new Date().toString(),
                    },
                });
                setNumberOfPendingRequests(bookingRequestsData.body.totalResponseNeeded);
                setNumberOfBookings(bookingRequestsData.body.totalBookings);
                setTotalEarnings(bookingRequestsData.body.totalEarning);
                setBookingRequests({ 1: bookingRequestsData.body.bookingRequests });
                setPageCount(bookingRequestsData.body.totalPages);
            } catch (err) {
                console.log(err);
            }
        },
        [userHostModel]
    );

    useEffect(() => {
        const initFunc = async () => {
            if (!accessToken || !userModel) {
                navigate("/");
                return;
            }
            setLoadingBookings(true);
            await fetchBookings(accessToken);
            setLoadingBookings(false);
        };
        initFunc();
    }, [fetchBookings, navigate, accessToken, userModel]);

    const fetchMoreBookings = async (page: number) => {
        console.log("fetched more");

        if (bookingRequests[page]) {
            return;
        }
        setLoadingBookings(true);
        let bookingRequestsData = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/host/bookings", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                page: page,
                userHostModelId: userHostModel && userHostModel.id,
                today: new Date().toString(),
            },
        });
        setBookingRequests((prevState) => {
            return { ...prevState, [page]: bookingRequestsData.body.bookingRequests };
        });
        setLoadingBookings(false);
    };

    if (!userModel || !stripeHostAccount) {
        return <LoadingFullPageModal reverse={true} guestMode={true} />;
    }
    return (
        <>
            <HelmetTags title="Dashboard | Anystay" />
            {/* {coHostPopupOpen && (
                <GlobalPopupContainerCenter closePopup={() => setCoHostPopupOpen(false)} noContinueBtn>
                    <div>123</div>
                </GlobalPopupContainerCenter>
            )} */}
            <DashboardWrapper>
                <DashboardHeaderContainer>
                    <DashboardHeaderWrapper>
                        <DashboardHeaderTitleWrapper>
                            <DashboardHeaderTitle>👋&nbsp;&nbsp;Welcome, {userModel.firstName}</DashboardHeaderTitle>
                            {/* <ContinueBtn
                                disabled={false}
                                isLoading={false}
                                onClick={() => setCoHostPopupOpen(true)}
                                background="black"
                                style={{ width: "unset", borderRadius: "50px", height: "40px", padding: "10px 16px" }}
                            >
                                Share
                            </ContinueBtn> */}
                        </DashboardHeaderTitleWrapper>
                        <DashboardHeaderInfoWrapper>
                            <DashboardHeaderInfoCard>
                                <DashboardHeaderInfoCardTitle>Bookings</DashboardHeaderInfoCardTitle>
                                <DashboardHeaderInfoCardValue>{numberOfBookings}</DashboardHeaderInfoCardValue>
                            </DashboardHeaderInfoCard>
                            <DashboardHeaderInfoCard>
                                <DashboardHeaderInfoCardTitle>Requests</DashboardHeaderInfoCardTitle>
                                <DashboardHeaderInfoCardValue>{numberOfPendingRequests}</DashboardHeaderInfoCardValue>
                            </DashboardHeaderInfoCard>
                            <DashboardHeaderInfoCard>
                                <DashboardHeaderInfoCardTitle>Earnings</DashboardHeaderInfoCardTitle>
                                <DashboardHeaderInfoCardValue>
                                    ${(totalEarnings / 100).toFixed(2)} <span>AUD</span>
                                </DashboardHeaderInfoCardValue>
                            </DashboardHeaderInfoCard>
                        </DashboardHeaderInfoWrapper>
                    </DashboardHeaderWrapper>
                </DashboardHeaderContainer>
                {stripeHostAccount?.individual?.verification?.status !== "verified" && (
                    <DashboardTitleWrapper>
                        <DashboardContentTitle>Complete your info</DashboardContentTitle>
                    </DashboardTitleWrapper>
                )}
                <PayoutSettingsCardWrapper>
                    {stripeHostAccount?.individual?.verification?.status !== "verified" && (
                        <PayoutSettingIncompleteLink to={"/payout-settings"}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "8px" }}>
                                <PayoutSettingsIncompleteCategory>Complete your info</PayoutSettingsIncompleteCategory>
                                <PayoutSettingsIncompleteTitle>Add payout method</PayoutSettingsIncompleteTitle>
                                <PayoutSettingsIncompleteSubtitle>Complete to activate your listings on Anystay</PayoutSettingsIncompleteSubtitle>
                            </div>
                            {/* <PayoutSettingsIncompleteIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Arrow icon" /> */}
                        </PayoutSettingIncompleteLink>
                    )}

                    {/* <PayoutSettingIncompleteExternalLink onClick={() => window.Intercom('showNewMessage', '')}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "8px" }}>
                            <PayoutSettingsIncompleteTitle>Get support</PayoutSettingsIncompleteTitle>
                            <PayoutSettingsIncompleteSubtitle>Get 24/7 support with a problem or issue</PayoutSettingsIncompleteSubtitle>
                        </div>
                        <PayoutSettingsIncompleteIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Arrow icon" />
                    </PayoutSettingIncompleteExternalLink>
                    <PayoutSettingIncompleteExternalLink onClick={() => window.Intercom('showNewMessage', '')}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "8px" }}>
                            <PayoutSettingsIncompleteTitle>Report a bug</PayoutSettingsIncompleteTitle>
                            <PayoutSettingsIncompleteSubtitle>Report something noteworthy, earn a reward</PayoutSettingsIncompleteSubtitle>
                        </div>
                        <PayoutSettingsIncompleteIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Arrow icon" />
                    </PayoutSettingIncompleteExternalLink> */}
                </PayoutSettingsCardWrapper>
                <DashboardContent
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    pageCount={pageCount}
                    bookingRequests={bookingRequests}
                    loadingBookings={loadingBookings}
                    fetchMoreBookings={fetchMoreBookings}
                    numberOfBookings={numberOfBookings}
                />
            </DashboardWrapper>
            <MobileNavbar hide={null} />
            <Footer />
        </>
    );
};

export default Dashboard;
