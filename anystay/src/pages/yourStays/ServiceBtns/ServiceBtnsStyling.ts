import styled from "styled-components";
import { TextTheme, ColorTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { Link } from "react-router-dom";
export const YourStayServiceBtnsScrollWrapper = styled.div`
    overflow: scroll;
    width: 100%;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const YourStayServiceBtnsWrapper = styled.div`
    padding-top: 48px;
    padding-bottom: 48px;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_600.gap};
    width: 100%;
    min-width: 903px;
    @media (max-width: 767px) {
        padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_500.padding};
    }
`;
export const YourStayServiceLink = styled(Link)`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${SpacingTheme.spacing_300.gap};
`;
export const YourStayServiceBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
`;
export const YourStayServiceCallBtn = styled.a`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    text-decoration: none;
`;
export const YourStayServiceBtnIconWrapper = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 10px;
    border: 1px solid ${ColorTheme.Grey3.color};
    background-color: ${ColorTheme.Grey5.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const YourStayServiceBtnIcon = styled.img`
    width: 20px;
    height: 20px;
`;
export const YourStayServiceBtnTextContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const YourStayServiceBtnTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    margin-bottom: 4px;
`;
export const YourStayServiceBtnSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
`;
