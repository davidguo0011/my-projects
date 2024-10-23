import BackBtn from "../../../components/btn/backBtn/backBtn";
import {
    ReviewGuestTitleWrapper,
    ReviewGuestTitle,
    ReviewGuestBodyInput,
    ReviewGuestBodyInputSubtitle,
    ReviewGuestTitleIcon,
    ReviewGuestTitleIconButton,
    ReviewMobileExitButton,
} from "../reviewGuestStyling";

interface WriteReviewProps {
    setReview: React.Dispatch<React.SetStateAction<string>>;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    review: string;
}

export default function WriteReview({ setReview, setPageIndex, review }: WriteReviewProps) {
    return (
        <>
            <ReviewGuestTitleWrapper pageIndex={1}>
                <ReviewMobileExitButton
                    onClick={() => {
                        setPageIndex(0);
                    }}
                >
                    Exit
                </ReviewMobileExitButton>
                <ReviewGuestTitleIconButton>
                    <BackBtn
                        onClick={() => {
                            setPageIndex(0);
                        }}
                        type="Arrow"
                    />
                </ReviewGuestTitleIconButton>
                <ReviewGuestTitle>Write a review</ReviewGuestTitle>
            </ReviewGuestTitleWrapper>
            <ReviewGuestBodyInput value={review} onChange={(e) => setReview(e.target.value)} placeholder="You can write anything you'd like to share about your experience staying here." />
            <ReviewGuestBodyInputSubtitle>Your review is visible to anyone</ReviewGuestBodyInputSubtitle>
        </>
    );
}
