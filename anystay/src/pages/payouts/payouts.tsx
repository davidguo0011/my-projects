import { useState, useEffect, useCallback } from "react";
import MobileNavbar from "../../components/navbar/mobileNavbar/mobileNavbar";
import {
    PayoutTitleWrapper,
    PayoutTitle,
    PayoutDetailsWrapper,
    PayoutDetailsTitle,
    PayoutDetailsPrice,
    PayoutDetailsPart,
    PayoutDetailsDivider,
    PayoutNoPayoutsYetWrapper,
    PayoutNoPayoutsYetTitle,
    PayoutNoPayoutsYetSubtitle,
    PayoutWrapper,
    PayoutTitleBackButton,
    PayoutTitleBackIcon,
    PayoutMenuWrapper,
    PayoutMenuItem,
    PayoutItemWrapper,
} from "./payoutsStyling";
import { callApi } from "../../utils/api/api";
import PaymentItem from "./PaymentItem/PaymentItem";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import HelmetTags from "../../components/Helmet/HelmetTags";
import { UserHostModel } from "../../interfaces/models/userHostModel";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/btn/backBtn/backBtn";

const Payouts: React.FC = () => {
    const [nextPayout, setNextPayout] = useState(0);
    const [pendingBalance, setPendingBalance] = useState(0);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [menuIndex, setMenuIndex] = useState(0);
    const [currentBookingRequests, setCurrentBookingRequests] = useState([]);
    const [pastBookingRequests, setPastBookingRequests] = useState([]);
    const navigate = useNavigate();

    const fetchBookingRequests = useCallback(
        async (userHostModel: UserHostModel) => {
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
            if (bookingRequestsData && bookingRequestsData.body) {
                setCurrentBookingRequests(bookingRequestsData.body.currentBookingRequests);
                setPastBookingRequests(bookingRequestsData.body.pastBookingRequests);
            }
        },
        [accessToken]
    );

    const fetchNextPayout = useCallback(
        async (userHostModel: UserHostModel) => {
            try {
                const today = new Date().toString();
                const url = `user/host/${userHostModel.id}/nextpayout?today=${encodeURIComponent(today)}`;
                const res = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, url, {
                    headers: {
                        Authorization: accessToken,
                    },
                });
                if (res.success) {
                    setNextPayout(res.nextPayout / 100);
                }
            } catch (err) {
                console.log(err);
            }
        },
        [accessToken]
    );
    const fetchPending = useCallback(
        async (userHostModel: UserHostModel) => {
            try {
                const res = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, `user/host/${userHostModel.id}/pending`, {
                    headers: {
                        Authorization: accessToken,
                    },
                });
                if (res.success) {
                    setPendingBalance(res.pendingAmount / 100);
                }
            } catch (err) {
                console.log(err);
            }
        },
        [accessToken]
    );

    useEffect(() => {
        const init = async () => {
            if (userHostModel) {
                fetchBookingRequests(userHostModel);
                fetchNextPayout(userHostModel);
                fetchPending(userHostModel);
            }
        };
        init();
    }, [fetchBookingRequests, fetchNextPayout, fetchPending, userHostModel]);

    return (
        <>
            <HelmetTags title="Payouts | Anystay" />
            <MobileNavbar hide={null} />
            <PayoutWrapper>
                <PayoutTitleWrapper>
                    <PayoutTitleBackButton to={"/settings"}>
                        <BackBtn
                            onClick={() => {
                                navigate("/settings");
                            }}
                            type="Arrow"
                            mobileTop={24}
                            mobileLeft={24}
                        />
                    </PayoutTitleBackButton>
                    <PayoutTitle>Payouts</PayoutTitle>
                </PayoutTitleWrapper>
                <PayoutDetailsWrapper>
                    <PayoutDetailsPart style={{ gridRow: "1/2", gridColumn: "1/2" }}>
                        <PayoutDetailsTitle>Next payout</PayoutDetailsTitle>
                        <PayoutDetailsPrice>${nextPayout.toFixed(2)} AUD</PayoutDetailsPrice>
                    </PayoutDetailsPart>
                    <PayoutDetailsDivider />
                    <PayoutDetailsPart>
                        <PayoutDetailsTitle>Pending</PayoutDetailsTitle>
                        <PayoutDetailsPrice>${pendingBalance.toFixed(2)} AUD</PayoutDetailsPrice>
                    </PayoutDetailsPart>
                </PayoutDetailsWrapper>

                <PayoutMenuWrapper>
                    <PayoutMenuItem selected={menuIndex === 0} onClick={() => setMenuIndex(0)} type="button">
                        Current
                    </PayoutMenuItem>
                    <PayoutMenuItem selected={menuIndex === 1} onClick={() => setMenuIndex(1)} type="button">
                        Past
                    </PayoutMenuItem>
                </PayoutMenuWrapper>

                <PayoutItemWrapper>
                    {menuIndex === 0 && (
                        <>
                            {currentBookingRequests.length > 0 ? (
                                <div style={{ display: "flex", flexDirection: "column", marginBottom: "80px" }}>
                                    {currentBookingRequests.map((bookingRequest, index) => {
                                        return <PaymentItem key={index} bookingRequest={bookingRequest} />;
                                    })}
                                </div>
                            ) : (
                                <PayoutNoPayoutsYetWrapper>
                                    <PayoutNoPayoutsYetTitle>No payouts yet</PayoutNoPayoutsYetTitle>
                                    <PayoutNoPayoutsYetSubtitle>Your upcoming payouts will appear here</PayoutNoPayoutsYetSubtitle>
                                </PayoutNoPayoutsYetWrapper>
                            )}
                        </>
                    )}
                    {menuIndex === 1 && (
                        <>
                            {pastBookingRequests.length > 0 ? (
                                <div style={{ display: "flex", flexDirection: "column", marginBottom: "80px" }}>
                                    {pastBookingRequests.map((bookingRequest, index) => {
                                        return <PaymentItem key={index} bookingRequest={bookingRequest} />;
                                    })}
                                </div>
                            ) : (
                                <PayoutNoPayoutsYetWrapper>
                                    <PayoutNoPayoutsYetTitle>No past payouts</PayoutNoPayoutsYetTitle>
                                    <PayoutNoPayoutsYetSubtitle>Past and completed payouts will appear here</PayoutNoPayoutsYetSubtitle>
                                </PayoutNoPayoutsYetWrapper>
                            )}
                        </>
                    )}
                </PayoutItemWrapper>
            </PayoutWrapper>
        </>
    );
};

export default Payouts;
