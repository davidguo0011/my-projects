import styled from "styled-components";
import { BorderRadiusTheme, ColorTheme, TextTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const IntegrationResultSubTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-bottom: 16px;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin-top: 32px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        margin-bottom: 24px;
        margin-top: 48px;
    }
`;
export const IntegrationResultTodoItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const IntegrationResultTodoItem = styled.div`
    padding: 16px;
    border: 1px solid ${ColorTheme.Grey2.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;
export const IntegrationResultText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;
