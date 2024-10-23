import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ExperienceItemWrapper = styled.div`
    min-width: calc((100% - 24px) / 2);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    aspect-ratio: 1 / 1;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: calc((100% - 72px) / 4);
    }

    @media (min-width: 1024px) {
        min-width: calc((100% - 96px) / 5);
    }
`;

export const ExperienceItemIcon = styled.img`
    width: 32px;
    height: 32px;
`;

export const ExperienceItemTextWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const ExperienceItemCardTitle = styled.div`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Black.color};
`;

export const ExperienceItemCardSubTitle = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;
