import styled from "styled-components";
import { ButtonTheme, ColorTheme, ShadowTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";
import { motion } from "framer-motion";

interface SupportButton {
    transition: boolean;
    path: string;
}

export const Btn = styled.div<SupportButton>`
    height: 44px;
    border-radius: 50%;
    width: 44px;
    position: fixed;
    right: 16px;
    bottom: ${(props) => (props.transition ? "20px" : props.path === "/" ? "84px" : "100px")};
    background-color: ${ColorTheme.Black.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    margin-top: auto;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s,
        bottom 0.3s ease;
    z-index: 100;
    @media (min-width: 768px) {
        bottom: 24px;
        right: 24px;
    }
`;

export const SupportArrowSvg = styled(motion.svg)`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SupportInitialSvgWrappar = styled.div`
    width: 20px;
    height: 20px;
`;

export const SupportInitialSvgImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
