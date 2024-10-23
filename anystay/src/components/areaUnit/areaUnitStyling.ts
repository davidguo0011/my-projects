import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface AreaUnit {
    areaUnit: string;
}

export const AreaUnitWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 40px;
    cursor: pointer;
`;

export const AreaUnitText = styled.div`
    width: 144px;
    height: 48px;
    font-size: 72px;
    font-weight: 600;
    background-color: ${ColorTheme.Grey3.color};
    display: flex;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    align-items: center;
    position: relative;
`;

export const AreaUnitM2 = styled.div<AreaUnit>`
    width: 77px;
    height: 40px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    background-color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${SpacingTheme.spacing_100.margin};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    transition: margin-left 0.2s;
    margin-left: ${(props) => (props.areaUnit === "Ha" ? "calc(100% - 77px - 4px)" : "4px")};
    z-index: 2;
`;

export const AreaMeterLabel = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Grey.color};
    position: absolute;
    top: 14px;
    left: 28px;
    z-index: 1;
`;

export const AreaHaLabel = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${ColorTheme.Grey.color};
    position: absolute;
    top: 14px;
    right: 28px;
    z-index: 1;
`;
