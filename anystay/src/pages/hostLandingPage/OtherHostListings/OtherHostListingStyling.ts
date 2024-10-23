import styled from "styled-components";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, GradientTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const HostLandingPageOtherListingWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        max-width: 1120px;
        padding-bottom: 80px;
    }
`;

export const HostLandingPageOtherListingTitle = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    color: ${ColorTheme.Black.color};
    padding-bottom: 48px;
    text-align: center;
    padding-top: 32px;

    @media (min-width: 768px) {
        padding-bottom: 0px;
        padding-top: 80px;
        font-size: ${TextTheme.sans_1200_semi.fontSize};
        font-weight: ${TextTheme.sans_1200_semi.fontWeight};
        line-height: ${TextTheme.sans_1200_semi.lineHeight};
    }
    @media (min-width: 1024px) {
        padding-top: 128px;
    }
`;

export const HostLandingPageOtherListingContent = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 64px;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    overflow: scroll;
    gap: ${SpacingTheme.spacing_400.gap};

    ::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    @media (min-width: 768px) {
        padding-top: 64px;
        max-width: 1120px;
    }
`;

export const HostLandingPageOtherListingCardWrapper = styled.div`
    min-width: 280px;
    width: 280px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    background: none;
    text-align: left;
    padding: 0;

    @media (min-width: 768px) {
        width: calc(33.33% - 30px);
    }
`;

export const HostLandingPageOtherListingCardImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    background: ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    overflow: hidden;
`;

export const HostLandingPageOtherListingCardImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

export const HostLandingPageOtherListingCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin-top: 24px;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media(min-width: 768px){
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};  
    }  
`;

export const HostLandingPageOtherListingCardFooterWrapper = styled.div`
    width: 100%;
    margin-top: 12px;
    font-size: ${TallTextTheme.sans_text_300};
    line-height: ${TallTextTheme.sans_text_300};
    font-weight: ${TallTextTheme.sans_text_300};
    color: ${ColorTheme.Grey.color};

    @media(min-width: 768px){
    font-size: ${TallTextTheme.sans_text_400.fontSize};
    line-height: ${TallTextTheme.sans_text_400.lineHeight};
    font-weight: ${TallTextTheme.sans_text_400.fontWeight};  
    }  
`;

export const HostLandingPageOtherListingButton = styled.button`
    height: 48px;
    padding: 0 20px;
    margin-top: 64px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    border: 1px solid ${ColorTheme.Black.color};
    color: ${ColorTheme.Black.color};
    border-radius: 9px;
    background-color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    gap: ${SpacingTheme.spacing_250.gap};
    cursor: pointer;
`;

export const HostLandingPageOtherListingButtonIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
`;
