import BackBtn from "../../../components/btn/backBtn/backBtn";
import {
    ReviewStayTitleWrapper,
    ReviewStayTitle,
    ReviewStayBodyInput,
    ReviewStayBodyInputSubtitle,
    ReviewStaySubtitle,
    ReviewStayTitleIcon,
    ReviewStayTitleIconButton,
    ReviewStayContentInputCount,
    ReviewStayInputCountWrapper,
    ReviewMobileExitButton,
} from "../reviewStayStyling";

interface WriteReviewProps {
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function WriteReview({ setPageIndex, text, setText }: WriteReviewProps) {
    const handleUpdate = async (preopertyReview: string) => {
        let charLimit = 2500;
        let propertyReviewChars = preopertyReview.split("");
        let shortenedReviewChars = propertyReviewChars.slice(0, charLimit);
        preopertyReview = shortenedReviewChars.join("").toString();

        setText(preopertyReview);
    };
    return (
        <>
            <ReviewStayTitleWrapper pageIndex={1}>
                <ReviewMobileExitButton
                    onClick={() => {
                        setPageIndex(0);
                    }}
                >
                    Exit
                </ReviewMobileExitButton>
                <ReviewStayTitleIconButton>
                    <BackBtn
                        onClick={() => {
                            setPageIndex(0);
                        }}
                        type="Arrow"
                    />
                </ReviewStayTitleIconButton>
                <ReviewStayTitle>Write a review</ReviewStayTitle>
            </ReviewStayTitleWrapper>
            <ReviewStaySubtitle>Review your experience</ReviewStaySubtitle>
            <ReviewStayBodyInput value={text} onChange={(e) => handleUpdate(e.target.value)} placeholder="You can write anything you'd like to share about your experience staying here." />
            <ReviewStayInputCountWrapper style={{ display: "flex" }}>
                <ReviewStayBodyInputSubtitle>Your review is visible to anyone</ReviewStayBodyInputSubtitle>
                <ReviewStayContentInputCount>{2500 - text.length}</ReviewStayContentInputCount>
            </ReviewStayInputCountWrapper>
        </>
    );
}
