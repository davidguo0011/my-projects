import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const SettingsContainer = styled.div`
    width: calc(100% - 64px);
    margin: 0 32px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin: 0 auto;
        border-top: none;
        margin-top: 80px;
        min-height: calc(100vh - 80px);
        max-width: calc(100vw - 64px);
    }
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
`;

export const SettingsLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

export const SettingsTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};

    margin: 0;
`;

export const SettingsCardWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: ${SpacingTheme.spacing_300.gap};

    @media (min-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const SettingsCard = styled.div`
    width: 100%;
    min-height: 127px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_400.padding};
    position: relative;
`;

export const SettingsCardIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
`;

export const SettingsCardTitleWrapper = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SettingsCardTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin: 0;
`;

export const SettingsCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-top: 8px;
`;

// Hidden by Bill

export const SettingsListPlaceCard = styled.button`
    width: 100%;
    height: 450px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/Upload+Listing+Cover.jpg");
    background-size: cover;
    border: none;
    cursor: pointer;
    text-align: left;
    margin-bottom: 48px;
    margin-top: 32px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    background-position: center;
    padding: 0;

    // Hidden
    display: none;

    @media (min-width: 768px) {
        height: 320px;
        margin: 44px auto 64px;
    }
`;

export const SettingsListPlaceCardContent = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const SettingsListPlaceCardTitle = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    color: ${ColorTheme.White.color};
    margin: 0 24px;
    margin-top: 48px;
    position: relative;
    max-width: 240px;

    @media (min-width: 768px) {
        margin-left: 48px;
        margin-top: 48px;
        width: 260px;
    }
`;

export const SettingsListPlaceCardButton = styled(Link)`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-end;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    background: ${ColorTheme.White.color};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};

    border: none;
    text-decoration: none;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-bottom: 32px;
    cursor: pointer;

    @media (min-width: 768px) {
        max-width: 300px;
        align-self: flex-end;
        margin-bottom: 64px;
        margin-right: 64px;
        justify-self: flex-end;
    }
`;

export const SettingsTitleWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-top: 48px;
        margin-bottom: 32px;
    }
`;

export const SettingsSwitchUserModeButton = styled.button`
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    /* line-height: ${ButtonTheme.sans_button_100.lineHeight}; */
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: 48px;
    height: 40px;

    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    cursor: pointer;
    background: none;
    border: none;
    padding: 0 24px;
    border: 1px solid ${ColorTheme.Grey1.color};

    @media (min-width: 768px) {
        margin-top: 64px;
        margin-bottom: 120px;
    }
`;

export const SwitchGuestModeCard = styled.div`
    width: 100%;
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    min-height: calc(100vh - 12px);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        width: 550px;
        max-height: 600px !important;
        height: 600px !important;
        min-height: unset !important;
        margin: auto auto 24px;
    }
`;

export const SwitchGuestModeImage = styled.img`
    height: 128px;
    width: 128px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 4px solid ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    margin-bottom: 48px;

    margin-top: 64px;
    @media (max-width: 767px) {
        margin-top: 119px;
    }
`;

export const SwitchGuestModeSubtitle = styled.p`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};

    margin-bottom: 12px;
    text-align: center;
    max-width: 270px;

    @media (min-width: 768px) {
    }
`;

export const SwitchGuestModeText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};

    text-align: center;
    margin: 0;
    max-width: 270px;

    @media (min-width: 768px) {
        max-width: 320px;
    }
`;

// come back to this after we found what it is, add font-size and line-height, mysterious button
export const SwitchGuestModeSwitchButton = styled.button`
    height: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: auto;
    margin-bottom: 24px;
    border-radius: 9px;
    background-color: ${ColorTheme.Black.color};
    border: none;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 32px;
        margin-bottom: 32px;
        margin-top: auto;
    }
`;

export const PayoutNoticeBarWrapper = styled(Link)`
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    padding: ${SpacingTheme.spacing_350.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    background: ${ColorTheme.White.color};

    text-decoration: none;
`;

export const PayoutNoticeBarTitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    margin: 0;
`;

export const PayoutNoticeBarSubtitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    margin: 0;
`;

export const ProfileLogOutButton = styled.button`
    width: 100%;
    height: 20px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    text-decoration: underline;
    margin-top: 48px;
    margin-bottom: 64px;
`;
