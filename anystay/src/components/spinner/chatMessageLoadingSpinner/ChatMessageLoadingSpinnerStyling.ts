import styled, { keyframes } from "styled-components";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface ChatMessageLoadingSpinnerComponentProps {
    props?: any;
}
const rotation = () => keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;

export const ChatMessageLoadingSpinnerComponent = styled.span<ChatMessageLoadingSpinnerComponentProps>`
    width: 28px;
    height: 28px;
    border: 5px solid ${ColorTheme.Grey3.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation()} 1s linear infinite;
`;
