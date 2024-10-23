import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewStayContainer, ReviewStayWrapper, ReviewStayBtnWrapper, ReviewStayContentWrapper } from "./reviewStayStyling";
import Footer from "../../components/footer/footer";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import Rating from "./Rating/Rating";
import WriteReview from "./WriteReview/WriteReview";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utils/api/api";
import CycleBtn from "../../components/btn/cycleBtn/cycleBtn";
import HelmetTags from "../../components/Helmet/HelmetTags";

export interface StayRatingInterface {
    communication: number;
    amenities: number;
    cleaning: number;
    location: number;
    service: number;
    value: number;
    [key: string]: number | null;
}

export default function ReviewStay() {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const { listingId, bookingId } = useParams();
    const [rating, setRating] = useState<StayRatingInterface>({
        communication: 0,
        amenities: 0,
        cleaning: 0,
        location: 0,
        service: 0,
        value: 0,
    });
    const [text, setText] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const navigate = useNavigate();

    const getReview = useCallback(async () => {
        setIsContinueBtnLoading(true);
        try {
            const res = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/review", {
                headers: {
                    Authorization: accessToken,
                    bookingid: bookingId,
                },
            });
            if (res.success) {
                if (res.review) {
                    setIsContinueBtnLoading(false);
                    navigate(`/your-booking/${bookingId}`);
                }
            }
            setIsContinueBtnLoading(false);
        } catch (err) {
            console.log(err);
        }
    }, [accessToken, bookingId, navigate]);

    useEffect(() => {
        getReview();
    }, [getReview]);

    const createReview = async () => {
        setIsContinueBtnLoading(true);
        try {
            if (userModel) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, "booking/review", {
                    headers: {
                        Authorization: accessToken,
                        bookingId: bookingId,
                    },
                    body: {
                        userModelId: userModel.id,
                        listingModelId: listingId,
                        communication: rating.communication,
                        amenities: rating.amenities,
                        cleaning: rating.cleaning,
                        location: rating.location,
                        service: rating.service,
                        value: rating.value,
                        body: text,
                    },
                });
                setTimeout(() => {
                    setIsContinueBtnLoading(false);
                    navigate(`/your-stays/${userModel.id}`);
                }, 1000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    if (!userModel) {
        return null;
    }
    return (
        <Fragment>
            <HelmetTags title="Review | Anystay" />
            <ReviewStayContainer>
                <ReviewStayWrapper>
                    <ReviewStayContentWrapper>
                        {pageIndex === 0 && <Rating rating={rating} setRating={setRating} />}
                        {pageIndex === 1 && <WriteReview setPageIndex={setPageIndex} text={text} setText={setText} />}

                        {/* {pageIndex === 2 &&
                            <Share listing={null}/>
                        } */}
                    </ReviewStayContentWrapper>
                    <ReviewStayBtnWrapper>
                        <CycleBtn
                            isLoading={isContinueBtnLoading}
                            disabled={isContinueBtnLoading}
                            background={"red"}
                            onClick={() => {
                                if (pageIndex === 0) {
                                    setPageIndex(1);
                                } else if (pageIndex === 1) {
                                    createReview();
                                } else {
                                    navigate(`/your-stays/${userModel.id}`);
                                }
                            }}
                        />
                    </ReviewStayBtnWrapper>
                </ReviewStayWrapper>
            </ReviewStayContainer>
            <Footer />
        </Fragment>
    );
}
