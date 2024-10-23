import { CreateBookingBookNowNoticeWrapper, CreateBookingBookNowNoticeIcon, CreateBookingBookNowNoticeTitle, CreateBookingBookNowNoticeSubtitle } from "../../createBookingStyling";
import { userModelSelector } from "../../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { ListingModel } from "../../../../interfaces/models/listingModel";

interface PromotionBannerProps {
    instantBookEnabled: boolean;
}

export default function PromotionBanner({ instantBookEnabled }: PromotionBannerProps) {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [promotion, setPromotion] = useState(false);

    if (promotion) {
        return (
            <CreateBookingBookNowNoticeWrapper>
                <CreateBookingBookNowNoticeIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.png"} alt="notice icon" />
                <CreateBookingBookNowNoticeTitle>$129 off with HELLOAUS</CreateBookingBookNowNoticeTitle>
                <CreateBookingBookNowNoticeSubtitle>Be the first to review this place.</CreateBookingBookNowNoticeSubtitle>
            </CreateBookingBookNowNoticeWrapper>
        );
    }

    return (
        <CreateBookingBookNowNoticeWrapper>
            <CreateBookingBookNowNoticeIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Wave.svg"} alt="wave icon" />
            <CreateBookingBookNowNoticeTitle>Book now{userModel ? `, ${userModel.firstName}` : null}!</CreateBookingBookNowNoticeTitle>
            <CreateBookingBookNowNoticeSubtitle>Secure this place before anyone else.</CreateBookingBookNowNoticeSubtitle>
        </CreateBookingBookNowNoticeWrapper>
    );
}
