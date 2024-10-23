import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface ShareButtonStylingProps {
    width: number;
}

export const ShareButtonsContainer = styled.div<ShareButtonStylingProps>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: 280px;
    display: flex;
    flex-wrap: wrap;
`;
export const BtnWrapper = styled.div`
    width: 50%;
    height: 70px;
    padding: 10px;
    cursor: pointer;
`;
export const EmailBtn = styled(EmailShareButton)`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const FacebookBtn = styled(FacebookShareButton)`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;
export const TwitterBtn = styled(TwitterShareButton)`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;
export const WhatsappBtn = styled(WhatsappShareButton)`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;
export const IndividualShareButton = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    padding-left: 16px !important;
`;

export const IndividualShareButtonIcon = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`;

export const IndividualShareButtonText = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    margin: 0;
`;
