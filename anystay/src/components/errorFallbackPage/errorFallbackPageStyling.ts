import styled from "styled-components";
import { ButtonTheme, ColorTheme, TextTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const ErrorFallbackPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    padding: ${SpacingTheme.spacing_500.padding};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const ErrorFallbackPageBtn = styled.button`
    width: 325px;
    background-color: ${ColorTheme.White.color};
    padding: ${SpacingTheme.spacing_250.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: none;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    cursor: pointer;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const ErrorFallbackPageIconWrapper = styled.div`
    width: 24px;
    height: 24px;
`;

export const ErrorFallbackPageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
    align-items: flex-start;
`;

export const ErrorFallbackPageTitle = styled.h1`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const ErrorFallbackPageText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
`;
