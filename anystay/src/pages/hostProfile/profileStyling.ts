import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ProfileDesktopContentWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-column: 1/2;
        grid-row: 3/4;
    }
    @media (min-width: 1280px) {
        grid-column: 2/3;
        grid-row: 2/3;
        padding-top: 0;
        padding-left: 48px;
    }
`;

export const ProfileEditProfileButton = styled(Link)`
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    height: 34px;
    display: flex;
    align-items: center;
`;
export const ProfileEditProfileButtonIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
    margin-right: 16px;
`;

export const ProfileTitleIcon = styled.img`
    height: 16px;
    width: 9px;
    margin-right: 24px;
    object-fit: cover;
    display: flex;
    align-items: center;
`;

// Profile header section
export interface ProfileHeaderSubtitleProps {
    confirmed: boolean;
}

export const ProfileHeaderSubtitle = styled.p<ProfileHeaderSubtitleProps>`
    margin: 0;
    margin-top: 4px;
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${(props) => (props.confirmed ? ColorTheme.Black.color : ColorTheme.Grey.color)};

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_500.margin} 0;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ProfileHeaderEditLink = styled(Link)`
    text-decoration: underline;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    cursor: pointer;
    margin: 0;
    padding: 0;
    margin-top: 16px;

    @media (min-width: 768px) {
        display: none;
    }
`;

// Profile description section
export const ProfileDescriptionWrapperReviews = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        grid-row: 2/3;
        grid-column: 2/3;
        padding-top: 44px;
    }
    @media (min-width: 1280px) {
        margin-left: 48px;
        width: calc(100% - 44px);
    }
`;

export const ProfileDescriptionTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
        margin-bottom: 20px;
    }
`;

export const ProfileResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        /* display: grid;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px); */
        /* gap: ${SpacingTheme.spacing_500.gap} 20px; */
        /* max-width: 704px; */
    }
    @media (min-width: 1024px) {
        // grid-template-columns: 352px 352px;
    }
`;

export const ProfileResultsCardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`;

// Profile Review section
export const ProfileReviewsWrapper = styled.div`
    width: 100%;
    padding-top: 32px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
`;

export const ProfileReviewsTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin: 0;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_600_semi.fontSize};
    }
`;

export const ProfileReviewsSubtitle = styled(Link)`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
    cursor: pointer;
`;

// Profile Contact Verified section
export const ProfileSafteryVerificationTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-top: 32px;
    margin-bottom: 22px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ProfileListingsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    margin: 0;
    margin-top: 32px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-top: 44px;
        margin-bottom: 24px;
    }
`;

export const ProfileContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ProfileDescriptionSocialIcon = styled.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`;

export const BookingRequestDeclineButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Grey1.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    width: 100%;

    @media (min-width: 768px) {
        height: 35px;
    }
`;

export const DeclineRequestWrapper = styled(motion.div)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    background: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_400.padding};
    display: flex;
    z-index: 3;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        border-radius: 14px;
        margin-left: auto;
        left: 0;
        margin-right: auto;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        top: 0;
        bottom: 0;
    }
`;

export const DeclineRequestBackButton = styled.button`
    border: none;
    background: none;
    text-decoration: none;
    padding: none;
    align-self: flex-start;
`;

export const DeclineRequestBackButtonIcon = styled.img`
    width: 12px;
    object-fit: cover;
`;

export const DeclineRequestTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 16px;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
    }
`;

export const DeclineRequestSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    max-width: 220px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_300.fontSize};
        line-height: ${TextTheme.sans_300.lineHeight};
        max-width: 260px;
    }
    align-self: center;
    margin: 0;
    margin-bottom: 48px;
    text-align: center;
`;

export const DeclineRequestOptionsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    border-top: 1px solid ${ColorTheme.Grey2.color};
`;

export const DeclineRequestOption = styled.button`
    display: flex;
    padding-bottom: 24px;
    border: none;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    background: none;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const DeclineRequestOptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${SpacingTheme.spacing_200.gap};
`;

export const DeclineRequestOptionTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
`;

export const DeclineRequestOptionSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const DeclineRequestMessageInput = styled.textarea`
    padding: ${SpacingTheme.spacing_300.padding};
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    height: 150px;
    border: 1px solid ${ColorTheme.Grey1.color};
    margin: 0;
    margin-bottom: 96px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const DeclineRequestButtonsWrapper = styled.div`
    width: 100%;
    padding-top: 24px;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DeclineRequestCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    padding: 0;
    border: none;
    background: none;
    text-decoration: underline;
`;

export const DeclineRequestDeclineButton = styled.button`
    width: 156px;
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Red1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border: none;
    color: ${ColorTheme.White.color};
`;

export const RequestDeclinedSuccessfulTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 16px;
`;

export const RequestDeclinedSuccessfulSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
`;

export const RequestDeclinedSuccessfulDoneButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${ColorTheme.Red.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    border: none;
`;

export interface HostSupportContinueButtonProps {
    selected: boolean;
}

export const HostSupportContinueButton = styled.button<HostSupportContinueButtonProps>`
    height: 48px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.selected ? ColorTheme.Red.color : ColorTheme.Grey1.color)};
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    width: 156px;
`;

export const ProfileTitleBackButton = styled.button`
    padding: 0;
    cursor: pointer;
    height: 16px;
    background: none;
    border: none;
`;
export const SearchListingResultCardImageWrapper = styled.div`
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    aspect-ratio: 1/1;
`;

export const SearchListingLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 768px) {
        width: calc((100% - 24px) / 2);
    }
`;
