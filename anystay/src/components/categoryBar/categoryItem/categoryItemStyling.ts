import styled, { css } from "styled-components";
import { TextTheme, ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface CategoryItemProps {
    selected?: boolean;
}

export const CategoryItemWrapper = styled.button<CategoryItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    padding-top: 2px;
    height: 100%;
    ${(props) =>
        !props.selected &&
        css`
            &:hover p {
                border-bottom: 2px solid ${ColorTheme.Black.color};
                color: ${ColorTheme.Black.color};
            }
        `}

    @media (min-width: 768px) {
        padding-top: 16px;
    }
`;

export const CategoryItemIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    margin-bottom: 4px;

    @media (min-width: 768px) {
        margin-bottom: 6px;
    }
`;
export const CategoryItemText = styled.p<CategoryItemProps>`
    font-size: ${TextTheme.sans_200_semi.fontSize};
    line-height: ${TextTheme.sans_200_semi.lineHeight};
    font-weight: ${TextTheme.sans_200_semi.fontWeight};
    padding-bottom: 14px;
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : `2px solid transparent`)};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    transition: 0.2s;
`;
