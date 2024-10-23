import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ProfileContainer = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    padding-bottom: 90px;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        max-width: 704px;
        margin: 0 auto;
        margin-top: 80px;
    }
    @media (min-width: 1280px) {
        max-width: 1024px;
    }
`;

export const ProfileDesktopContentWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1280px) {
        padding-top: 0;
        width: calc(100% - 48px - 368px);
    }
`;

// Title section
export const EditProfileTitleWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 24px;

    @media (min-width: 768px) {
        position: relative;
        border: none;
        padding-top: 48px;
        padding-bottom: 0;
        margin-bottom: 32px;
    }
`;

// Title section
export const ProfileTitleWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 24px;

    @media (min-width: 768px) {
        /* grid-row: 1/2;
        grid-column: 1/3; */
        position: relative;
        border: none;
        padding-top: 48px;
        padding-bottom: 0;
        margin-bottom: 32px;
    }
`;
export const ProfileMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px) {
        flex-direction: row;
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;

export const ProfileTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};

    margin: 0;
    span {
        display: none;
    }

    @media (min-width: 768px) {
        span {
            display: inline-block;
        }
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        padding-left: 24px;
    }
`;

// Profile header section
export const ProfileHeaderWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 18px;

    @media (min-width: 768px) {
        width: 50%;
        border: none;
        display: flex;
        flex-direction: column;
        height: 274px;
        justify-content: center;
        gap: unset;
    }
    @media (min-width: 1280px) {
        flex-direction: column;
        align-items: center;
        height: unset;
    }
`;

export const ProfileHeaderDesktopDivider = styled.div`
    height: 40px;
    width: 1px;
    background: ${ColorTheme.Grey2.color};
    @media (min-width: 1280px) {
        width: 40px;
        height: 1px;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

export const ProfileHeaderImageWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 100px;
    width: 100px;
    margin: ${SpacingTheme.spacing_400.margin} 0;
    padding: 0;
    border-radius: 50%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    position: relative;

    @media (min-width: 768px) {
        margin: 0 auto;
        align-self: flex-start;
        margin-top: 40px;
        height: 128px;
        width: 128px;
    }
`;

export const ProfileOverallReviewScoreWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 28px;
    width: 75px;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_200.gap};
    padding: 0 16px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    align-self: flex-end;
    justify-self: center;
    position: absolute;
    bottom: -10px;
`;

export const ProfileOverallReviewScoreText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
`;

export const ProfileOverallReviewScoreStar = styled.img`
    height: 12px;
    width: 12px;
    object-fit: cover;
`;

export const ProfileHeaderImage = styled.img`
    width: 100%;
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
`;

export const ProfileHeaderTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        text-align: center;
    }
`;

export const ProfileHeaderTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};

    text-align: start;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ProfileHeaderSubtitle = styled.p`
    margin: 0;
    margin-top: 4px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_500.margin} 0;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const ProfileHeaderEditLink = styled(Link)`
    text-decoration: underline;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
    padding: 0;
    margin-top: 30px;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ProfileHeaderEditButton = styled.a`
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};

    margin: 0;
    padding: 0;
    margin-top: 28px;
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

// Profile description section

export const ProfileDescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        padding-top: 64px;
        // padding-left: 44px;
        border: none;
    }
    @media (min-width: 1280px) {
        padding-top: 0;
        /* width: 100%; */
    }
`;

export const ProfileDescriptionWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_500.padding} 0;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        grid-row: 2/3;
        grid-column: 2/3;
        padding-top: 0;
        // padding-left: 44px;
        // border: none;
    }
    @media (min-width: 1280px) {
        /* margin-left: 48px; */
        padding-right: 0;
        /* width: calc(100% - 44px); */
    }
`;

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
        margin-left: 44px;
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

export const ProfileDescriptionText = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    padding: 0;
    word-wrap: break-word;
    padding-right: 16px;

    strong {
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
    }
`;

export const ProfileDescriptionButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};

    text-decoration: underline;
    margin: 0;
    background: none;
    border: none;
    width: fit-content;
    padding: 0;
`;

// Profile Review section
export const ProfileReviewsWrapper = styled.div`
    /* width: 100%; */
    padding-top: 32px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px) {
        /* margin-left: 44px; */
    }
`;

export const ProfileReviewsTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};

    margin: 0;
    margin-bottom: 32px;
`;

export const ProfileReviewsSubtitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: 0;
`;

export const ProfileReviewsText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey1.color};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
    margin-top: 12px;
`;

// Profile Contact Verified section
export const ProfileVerifiedWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: baseline;
    gap: ${SpacingTheme.spacing_300.gap};
    padding: ${SpacingTheme.spacing_400.padding} 0px;

    @media (min-width: 768px) {
        padding: 0;
        width: 50%;
        border: none;
        align-items: center;
        align-self: unset;
    }
    @media (min-width: 1280px) {
        margin-top: 48px;
        margin-bottom: 64px;
        width: fit-content;
    }
`;

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

export const ProfileVerifiedContact = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    @media (min-width: 1280px) {
        width: 100%;
    }
`;

export const ProfileVerifiedContactIcon = styled.img`
    height: 16px;
    width: 16px;
    margin: 0;
    object-fit: cover;
`;

export const ProfileVerifiedContactText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    margin: 0;
    margin-left: 16px;
`;

export const ProfileDesktopHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    color: ${ColorTheme.White.color};
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        box-shadow: ${ShadowTheme.shadow_100.boxShadow};
        border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    }
    @media (min-width: 1280px) {
        flex-direction: column;
        min-width: 368px;
        width: 368px;
        display: flex;
    }
`;
export const ProfileDescriptionReviewsContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1280px) {
        padding-top: 0;
    }
`;

export const ProfileListingsTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-top: 32px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
        margin-top: 48px;
        margin-bottom: 20px;
    }
`;

export const ProfileContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 4/5;
    @media (min-width: 1280px) {
        grid-column: 2/3;
        margin-left: 44px;
        padding: 0;
        width: calc(100% - 44px);
    }
`;

export const ProfileDescriptionSocialsWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_350.gap};
    padding-bottom: 16px;
`;

export const ProfileDescriptionSocial = styled.a`
    text-decoration: none;
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

    &placeholder {
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
    background: ${ColorTheme.Blue.color};
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
    background: ${(props) => (props.selected ? ColorTheme.Blue.color : ColorTheme.Grey1.color)};
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    width: 156px;
`;
export const ProfileReviewsReviewWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;
export const ProfileReviewsReviewImage = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
`;

export const ProfileReviewsReviewName = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};

    margin: 0;
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-bottom: auto;
`;

export const ProfileReviewsReviewDate = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    font-weight: ${TextTheme.sans_200.fontWeight};
`;

export const ProfileReviewsReviewText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    padding-right: 16px;
    margin: 0;
    margin-top: 16px;
`;
