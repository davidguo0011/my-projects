import styled from "styled-components";
import { motion } from "framer-motion";
import { TextTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";
//CopiedToClipboardWrapper, CopiedToClipboardIcon, CopiedToClipboardText
export const CopiedToClipboardWrapper = styled(motion.div)`
    height: 48px;
    position: fixed;
    bottom: 24px;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 16px;
    gap: ${SpacingTheme.spacing_250.gap};
    z-index: 102;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background-color: white;

    @media(min-width: 768px){
        bottom: 32px;
    }
`;
export const CopiedToClipboardIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const CopiedToClipboardText = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    white-space: nowrap;
`;
