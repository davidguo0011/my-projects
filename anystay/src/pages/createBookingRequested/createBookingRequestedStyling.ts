import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const CreateBookingRequestedWrapper = styled.div`
    width: calc(100% - 48px);
    min-height: calc(100vh - 60px);
    display: flex;
    margin: 0 24px;
    flex-direction: column;
    margin-top: 60px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 264px;
        width: calc(100% - 32px);
        margin: 0;
        margin-left: 32px;
        min-height: calc(100vh - 80px);
        margin-top: 80px;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 380px;
    }
    @media (min-width: 1280px) {
        grid-template-columns: 1fr 32vw;
    }
    @media (min-width: 1920px) {
        grid-template-columns: 1fr 36vw;
    }
`;

export const CreateBookingRequestedTitleWrapper = styled.div`
    width: 100%;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        border-top: none;
    }
`;

export const CreateBookingRequestedProfilePicture = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;

export const CreateBookingRequestedTitle = styled.h1`
    margin: 0;
    font-size: ${TextTheme.sans_800_bold.fontSize};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    padding-top: 48px;
    text-align: left;
    padding-bottom: 32px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        padding-top: 64px;
        padding-bottom: 44px;
    }
`;

export const CreateBookingRequestedHeaderWrapper = styled.div`
    width: 100%;
    padding: ${SpacingTheme.spacing_700.padding} ${SpacingTheme.spacing_500.padding};
    display: flex;
    flex-direction: column;
    max-width: 380px;
    margin-right: auto;
`;

export const CreateBookingRequestedHeaderImage = styled.img`
    height: 200px;
    border-radius: 9px;
    object-fit: cover;
    width: 100%;
    margin-bottom: 20px;
`;

export const CreateBookingRequestedHeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const CreateBookingRequestedHeaderText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;

    span {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
        font-weight: ${TextTheme.sans_400_semi.fontWeight};
        margin-bottom: 8px;
    }
`;

export const CreateBookingMessageHostTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
    }
`;

export const CreateBookingMessageHostSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const CreateBookingMessageInput = styled.textarea`
    width: 100%;
    border-radius: 9px;
    height: 150px;
    padding: ${SpacingTheme.spacing_200.padding};
    padding-left: 16px;
    outline: none;
    border: 1px solid ${ColorTheme.Grey1.color};

    @media (min-width: 768px) {
        height: 200px;
        padding: ${SpacingTheme.spacing_300.padding};
        padding-left: 20px;
        font-size: ${TextTheme.sans_400.fontSize};
    }
`;

export const CreateBookingDivider = styled.div`
    width: 100%;
    position: relative;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin-top: auto;
    justify-self: flex-end;
`;

export const CreateBookingButton = styled.button`
    height: 50px;
    position: relative;
    width: 100%;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.Red.color};
    border: none;
    border-radius: 9px;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    margin: ${SpacingTheme.spacing_400.margin} 0;
`;

export const CreateBookingRequestedProfileHeaderWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-top: 32px;
    padding-bottom: 24px;
`;

export const CreateBookingSendMessageDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    margin: ${SpacingTheme.spacing_500.margin} 0;
    @media (min-width: 768px) {
        margin: 44px 0;
    }
`;

export const CreateBookingSendMessageText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-bottom: 16px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        line-height: ${TextTheme.sans_500.lineHeight};
        margin-bottom: 20px;
    }
`;

export const CreateBookingRequestedDesktopContentWrapper = styled.div`
    grid-column: 1/2;
    padding-right: 32px;

    @media (min-width: 1024px) {
        max-width: 440px;
        padding: 0;
        margin: 0 auto;
    }
    @media (min-width: 1280px) {
        max-width: 570px;
        margin-right: 190px;
    }
`;
export const CreateBookingRequestedDesktopListingWrapper = styled.div`
    grid-column: 2/3;
    background: ${ColorTheme.Grey4.color};
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const CreateBookingRequestedDesktopListingDateTextInfo = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`;
