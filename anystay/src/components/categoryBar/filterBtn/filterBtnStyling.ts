import styled from "styled-components";
import { TextTheme, ColorTheme, BorderRadiusTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const FilterBtnWrapper = styled.button`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 2px;
    width: 66px;
    height: 66px;
    gap: 6px;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    cursor: pointer;
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }

    @media (max-width: 767px) {
        display: none;
    }
`;
export const FilterBtnIcon = styled.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
    margin-bottom: 2px;
`;

export const FilterBtnText = styled.p`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`;
export const FilterSelectedNumberBubble = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${ColorTheme.Red.color};
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_200_semi.fontSize};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
`;
