import { useState } from "react";
import { HostLandingPageFAQButtonIcon, HostLandingPageFAQButton, HostLandingPageFAQAnswer, HostLandingPageFAQWrapper } from "../hostLandingPageStyling";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

interface FAQQuestionProps {
    question: string;
    answer: string;
    learnMoreLink: string | null;
    index: number;
    length: number;
}

const FAQQuestion: React.FC<FAQQuestionProps> = ({ question, answer, learnMoreLink, index, length }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <HostLandingPageFAQWrapper style={{ borderBottom: index === length - 1 ? "none" : `1px solid ${ColorTheme.Grey2.color}` }}>
            <HostLandingPageFAQButton type="button" onClick={() => setIsActive(!isActive)} index={index}>
                {question}
                <HostLandingPageFAQButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} rotated={isActive} alt="Button icon" />
            </HostLandingPageFAQButton>
            {isActive && (
                <HostLandingPageFAQAnswer>
                    {answer}{" "}
                    {learnMoreLink && (
                        <a
                            target={window.innerWidth < 768 ? "" : "_blank"}
                            href={learnMoreLink}
                            rel="noreferrer"
                            style={{ fontWeight: "600", color: ColorTheme.Black.color, textDecoration: "underline" }}
                        >
                            Learn more
                        </a>
                    )}
                </HostLandingPageFAQAnswer>
            )}
        </HostLandingPageFAQWrapper>
    );
};

export default FAQQuestion;
