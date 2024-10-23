import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorTheme, TextTheme, ButtonTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const SettingsMobileContainer = styled.div`
    width: 100%;
    padding: 0 24px;
    padding-bottom: 112px;
`;

interface SettingsMobileHeaderProps {
    isGuestMode: boolean | null | undefined;
}
export const SettingsMobileHeader = styled.div<SettingsMobileHeaderProps>`
    margin: ${(props) => (props.isGuestMode ? "32px 0 48px" : "36px 0 32px")};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SettingsMobileHeaderLink = styled(Link)`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const SettingsMobileHeaderBellIconWrapper = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
`;

export const SettingsMobileHeaderHost = styled.h1`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
`;

interface SettingsProfileInfoWrapperProps {
    isGuestMode: boolean | null | undefined;
}
export const SettingsProfileInfoWrapper = styled.div<SettingsProfileInfoWrapperProps>`
    display: flex;
    flex-direction: ${(props) => (props.isGuestMode ? "column" : "row")};
    align-items: ${(props) => (props.isGuestMode ? "center" : "flex-start")};
    gap: ${(props) => (props.isGuestMode ? "24px" : "16px")};
    ${(props) => (props.isGuestMode ? "" : "height: 96px")}
`;

interface SettingsProfileInfoPfpProps {
    isGuestMode: boolean | null | undefined;
}
export const SettingsProfileInfoPfp = styled.div<SettingsProfileInfoPfpProps>`
    box-sizing: border-box;
    width: ${(props) => (props.isGuestMode ? "128px" : "96px")};
    height: ${(props) => (props.isGuestMode ? "128px" : "96px")};
    border-radius: 50%;
    border: ${(props) => (props.isGuestMode ? `4px solid ${ColorTheme.White.color}` : "none")};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const SettingsProfileInfoHostTextWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const SettingsProfileInfoName = styled.h1`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
`;

export const SettingsProfileInfoHostNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const SettingsProfileInfoHostName = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
`;

export const SettingsProfileInfoHostTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const SettingsProfileInfoStatsWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const SettingsProfileInfoStat = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const SettingsProfileInfoStatNum = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
`;

export const SettingsProfileInfoStatTitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    line-height: ${TextTheme.sans_200.lineHeight};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const SettingsProfileBio = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    margin: ${SpacingTheme.spacing_500.margin} 0;
`;

export const SettingsHostPayoutCardWrapper = styled(Link)`
    text-decoration: none;
`;

export const SettingsHostPayoutCard = styled.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: ${SpacingTheme.spacing_300.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const SettingsHostPayoutCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SettingsHostPayoutCardTitle = styled.h1`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
`;

export const SettingsHostPayoutCardSubTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;

export const SettingsHostPayoutCardEarning = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};

    margin-top: 8px;
`;

export const SettingsReferralBanner = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 48px;
`;

export const SettingsReferralBannerIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-top: 32px;
`;

export const SettingsReferralBannerText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    text-align: center;
    width: 240px;
    margin-top: 24px;
`;

export const SettingsReferralBannerLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 48px;
    background-color: ${ColorTheme.Black.color};
    margin: ${SpacingTheme.spacing_400.margin} 0 ${SpacingTheme.spacing_300.margin} 0;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
`;

export const SettingsLinksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_500.gap};
    margin-bottom: 48px;
`;

export const SettingsLink = styled(Link)`
    text-decoration: none;
`;

export const SettingsLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SettingsLinkTitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const SettingsLinkTitleIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const SettingsLinkTitleText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const SettingsLinkRightArrow = styled.img`
    width: 8px;
    height: 12px;
    transform: rotate(180deg);
`;

export const SettingsSwitchModeButton = styled.div`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    margin-bottom: 16px;
`;

export const SettingsVersionText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 32px;
`;

export const SettingsLogoutButton = styled.div`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const SettingsHeaderImage = styled.img`
    width: 100%;
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
`;
