import styled from "styled-components";
import { TextTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
export const ChooseHowToPayWrapper = styled.div`
    width: 100%;
    padding: 40px 0;
    @media (min-width: 768px) {
        border-top: 1px solid ${ColorTheme.Grey2.color};
    }
`;
export const ChooseHowToPayTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin-bottom: 24px;
`;

interface ChooseHowToPayItemProps {
    selected: boolean;
}
export const ChooseHowToPayItem = styled.div<ChooseHowToPayItemProps>`
    padding: ${SpacingTheme.spacing_300.padding};
    height: 76px;
    display: flex;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : `2px solid transparent`)};
    cursor: pointer;
`;
export const ChooseHowToPayItemIcon = styled.img`
    width: 32px;
    height: 24px;
    background: black;
    margin-right: 16px;
`;
export const ChooseHowToPayTextWrapper = styled.div``;
export const ChooseHowToPayTextTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-bottom: 4px;
`;
export const ChooseHowToPayTextSubtitle = styled.p`
    color: ${ColorTheme.Grey.color};
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
`;
