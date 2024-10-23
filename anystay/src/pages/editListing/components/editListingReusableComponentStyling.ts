import styled from "styled-components";
import { ColorTheme, TextTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

// edit content button card
interface EditContentBtnCardWrapperProps {
    withImg?: boolean;
}
export const EditContentBtnCardWrapper = styled.div<EditContentBtnCardWrapperProps>`
    padding: ${(props) => (props.withImg ? "48px" : "24px")};
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_400.gap};
    cursor: pointer;
    ${(props) => props.withImg && "align-items: center;"}
`;

interface EditContentBtnCardTextWrapperProps {
    textGap?: string;
    textCenter?: boolean;
}
export const EditContentBtnCardTextWrapper = styled.div<EditContentBtnCardTextWrapperProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    gap: ${(props) => (props.textGap ? props.textGap : "8px")};
    ${(props) => (props.textCenter ? "align-items: center;" : null)}
`;

export const EditContentBtnCardTitle = styled.h1`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    text-align: left;
`;

interface EditContentBtnCardSubTitleProps {
    textCenter?: boolean;
}
export const EditContentBtnCardSubTitle = styled.p<EditContentBtnCardSubTitleProps>`
    width: 100%;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    text-align: ${(props) => (props.textCenter ? "center" : "left")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
