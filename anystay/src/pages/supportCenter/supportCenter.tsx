import React from "react";
import {
    SupportCenterContainer,
    SupportCenterHeader,
    SupportCenterTitle,
    SupportCenterCard,
    SupportCenterCardTitle,
    SupportCenterCardSubtitle,
    SupportCenterCardButton,
    SupportCenterCardHostButton,
} from "./supportCenterStyling";
import Footer from "../../components/footer/footer";
import HelmetTags from "../../components/Helmet/HelmetTags";

const SupportCenter: React.FC = () => {
    return (
        <>
            <HelmetTags title="Help | Anystay" />
            <SupportCenterContainer>
                <SupportCenterHeader>
                    <SupportCenterTitle>Support center</SupportCenterTitle>
                </SupportCenterHeader>
                <SupportCenterCard className="guest">
                    <SupportCenterCardTitle>I'm a guest</SupportCenterCardTitle>
                    <SupportCenterCardSubtitle>
                        <span>Get help from our guest support team.</span> We're available to assist all booking related issues including payments, cancellations and refunds.
                    </SupportCenterCardSubtitle>
                    <SupportCenterCardButton type="button">Start a request</SupportCenterCardButton>
                </SupportCenterCard>
                <SupportCenterCard className="post">
                    <SupportCenterCardTitle>I'm a host</SupportCenterCardTitle>
                    <SupportCenterCardSubtitle>
                        <span>Get help from our guest support team.</span> We're available to assist all booking related issues including payments, cancellations and refunds.
                    </SupportCenterCardSubtitle>
                    <SupportCenterCardHostButton type="button">Start a request</SupportCenterCardHostButton>
                </SupportCenterCard>
            </SupportCenterContainer>
            <Footer />
        </>
    );
}

export default SupportCenter;