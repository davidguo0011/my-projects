import { FAQQuestionWrapper, HostLandingPageFAQContentTitle, FAQQuestionContainer } from "../hostLandingPageStyling";
import FAQQuestion from "./FAQQuestion";

const FAQQuestionContent: React.FC = () => {
    const faqs = [
        {
            question: "Can my place be listed?",
            answer: "You can list any type of accommodation that meets our guidelines for safety and cleanliness. This includes over 500 types of places from entire homes to shared rooms and beyond.",
            learnMoreLink: null,
        },
        {
            question: "How do I get started?",
            answer: "Once you’re ready to begin, simply click Create a listing to start listing your place. Whether it’s your first time hosting or you’re a seasoned host, there’s a place here for you.",
            learnMoreLink: null,
        },
        {
            question: "Do I have to host instant bookings?",
            answer: "Once you have created your listing, you can choose whether to accept instant bookings or requests from guests booking a stay with you.",
            learnMoreLink: null,
        },
        {
            question: "Can I sync my calendar?",
            answer: "You’ll be able to sync your calendar with Airbnb, Stayz, Hipcamp, and more. We’ll help you connect your iCal calendar.",
            learnMoreLink: "https://help.anystay.com.au/en/articles/7010834-syncing-your-calendar/",
        },
        {
            question: "What can guests pay with?",
            answer: "Guests will be able to pay with any debit or credit card from Australia or around the world. In addition, you’ll also be able to accept payments from Apple Pay, Google Pay, Klarna and more.",
            learnMoreLink: null,
        },
        {
            question: "What do I have to pay?",
            answer: "Anystay is free to use - we take a small fee from your completed payouts to help us improve your experience and the Australian hosting community.",
            learnMoreLink: null,
        },
        {
            question: "How do payouts work?",
            answer: "Payouts will be sent to you via our secure payout system to any bank account in Australia. You can learn more about how payouts work and how to connect your payout method after creating your first listing.",
            learnMoreLink: "https://help.anystay.com.au/en/articles/7016804-adding-payout-methods",
        },
    ];
    return (
        <FAQQuestionContainer>
            <HostLandingPageFAQContentTitle>Questions you asked</HostLandingPageFAQContentTitle>
            <FAQQuestionWrapper>
                {faqs.map((faq, index) => {
                    return <FAQQuestion key={faq.question} question={faq.question} answer={faq.answer} learnMoreLink={faq.learnMoreLink} index={index} length={faqs.length} />;
                })}
            </FAQQuestionWrapper>
        </FAQQuestionContainer>
    );
};

export default FAQQuestionContent;
