import styled from "styled-components";
import { TextTheme, ColorTheme, ButtonTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
export const NoResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
`;
export const NoResultIcon = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 32px;
`;
export const NoResultTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin-bottom: 8px;
`;
export const NoResultSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 32px;
`;
export const NoResultBtn = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Black.color};
    border-radius: 100px;
    padding: ${SpacingTheme.spacing_250.padding} ${SpacingTheme.spacing_350.padding};
    cursor: pointer;
    border: none;
`;
