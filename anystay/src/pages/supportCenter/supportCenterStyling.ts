import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const SupportCenterContainer = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    padding-bottom: 90px;

    @media (min-width: 768px) {
        width: calc(100% - 32px);
        display: grid;
        grid-template-columns: 50% 50%;
        gap: ${SpacingTheme.spacing_500.gap};
        margin: 0 auto;
    }
    @media (min-width: 1611px) {
        max-width: 1579px;
        padding: 0;
    }
`;

export const SupportCenterHeader = styled.div`
    height: 250px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding};
    display: flex;
    align-items: flex-end;
    margin-bottom: 48px;
    background: url("https://d292awxalydr86.cloudfront.net/Home+page/Hero+Image+2.jpg"), linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
    background-size: cover;

    @media (min-width: 768px) {
        height: 300px;
        padding: 85px;
        grid-column: 1/3;
    }
`;

export const SupportCenterTitle = styled.h2`
    font-size: ${TextTheme.sans_1000_bold.fontSize};
    font-weight: ${TextTheme.sans_1000_bold.fontWeight};
    line-height: ${TextTheme.sans_1000_bold.lineHeight};
    color: ${ColorTheme.White.color};
    max-width: 120px;
    margin: 0;

    @media (min-width: 768px) {
        max-width: unset;
        font-size: ${TextTheme.sans_1200_bold.fontSize};
        line-height: ${TextTheme.sans_1200_bold.lineHeight};
    }
`;

export const SupportCenterCard = styled.div`
    width: 100%;
    height: 308px;
    display: flex;
    flex-direction: column;
    padding: ${SpacingTheme.spacing_400.padding};
    padding-top: 32px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
    &.guest {
        margin-bottom: 24px;
    }
    @media (min-width: 1024px) {
        height: 382px;
        padding: 44px 64px;
    }
`;

export const SupportCenterCardTitle = styled.p`
    font-size: ${TextTheme.sans_800_bold.fontSize};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    @media (min-width: 1024px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-bottom: 44px;
    }
`;

export const SupportCenterCardSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-bottom: 64px;

    span {
        font-weight: ${TextTheme.sans_300_semi.fontWeight};
    }
    @media (min-width: 1024px) {
        max-width: 340px;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const SupportCenterCardButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: ceenter;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    align-items: center;
    background: ${ColorTheme.Red.color};

    @media (min-width: 1024px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;

export const SupportCenterCardHostButton = styled.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: ceenter;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    color: ${ColorTheme.White.color};
    align-items: center;
    background: ${ColorTheme.Blue.color};

    @media (min-width: 1024px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
    }
`;
