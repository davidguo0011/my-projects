import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

interface loadingFullPageSmallModalStylingProps {
    waiting: boolean;
}

export const Title = styled.p`
    margin-top: 32px;
    font-size: ${TextTheme.sans_800_bold.fontSize};
    line-height: ${TextTheme.sans_800_bold.lineHeight};
    font-weight: ${TextTheme.sans_800_bold.fontWeight};
    margin-bottom: 24px;
`;

export const Subtitle = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const Wrapper = styled.div`
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 120px);
    background: ${ColorTheme.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, 50%);
        border-radius: 14px;
    }
`;

export const Waiting = styled.p<loadingFullPageSmallModalStylingProps>`
    margin: 0;
    visibility: ${(props) => (props.waiting ? "visible" : "hidden")};
`;
