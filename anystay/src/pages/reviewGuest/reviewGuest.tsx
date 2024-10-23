import { Fragment, useState } from "react";
import { ReviewGuestContainer, ReviewGuestWrapper, ReviewStayWrapper, ReviewGuestContentWrapper, ReviewGuestDesktopButtonWrapper } from "./reviewGuestStyling";
import Footer from "../../components/footer/footer";
import CycleBtn from "../../components/btn/cycleBtn/cycleBtn";
import { useParams } from "react-router-dom";
import Rating from "./Rating/Rating";
import WriteReview from "./WriteReview/WriteReview";
import { useNavigate } from "react-router-dom";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../utils/api/api";
import HelmetTags from "../../components/Helmet/HelmetTags";

export interface GuestRatingInterface {
    overall: null | number;
    [key: string]: null | number;
}

export default function ReviewGuest() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const [rating, setRating] = useState<GuestRatingInterface>({
        overall: null,
    });
    const [review, setReview] = useState("");

    const createReview = async () => {
        await callApi("put", `${process.env.REACT_APP_ENV}-anystay-booking`, "user/review", {
            headers: {
                Authorization: accessToken,
                bookingId: id,
            },
            body: {
                body: review,
                bookingRequestId: id,
                overall: rating.overall,
            },
        })
            .then((res) => {
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    return (
        <Fragment>
            <HelmetTags title="Review | Anystay" />
            <ReviewGuestContainer>
                <ReviewStayWrapper>
                    <ReviewGuestWrapper>
                        <ReviewGuestContentWrapper>
                            {pageIndex === 0 && <Rating setRating={setRating} rating={rating} />}
                            {pageIndex === 1 && <WriteReview setReview={setReview} review={review} setPageIndex={setPageIndex} />}
                        </ReviewGuestContentWrapper>
                    </ReviewGuestWrapper>
                    <ReviewGuestDesktopButtonWrapper>
                        <CycleBtn
                            onClick={async () => {
                                if (pageIndex === 0) {
                                    setPageIndex(1);
                                } else {
                                    setIsContinueBtnLoading(true);
                                    await createReview();
                                    setIsContinueBtnLoading(false);
                                }
                            }}
                            background={"blue"}
                            isLoading={isContinueBtnLoading}
                            disabled={isContinueBtnLoading}
                        />
                    </ReviewGuestDesktopButtonWrapper>
                </ReviewStayWrapper>
            </ReviewGuestContainer>
            <Footer />
        </Fragment>
    );
}
