import styled from "styled-components";
import { keyframes } from "styled-components";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface LoadingSpinnerStylingProps {
    width: string | undefined;
    height: string | undefined;
    color: string;
}

const dotsAnimation = keyframes`
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`;

export const LoadingSpinnerComponent = styled.div<LoadingSpinnerStylingProps>`
    width: ${(props) => (props.width ? props.width : "32px")};
    height: ${(props) => (props.height ? props.height : " 14px")};
    background:
        radial-gradient(circle closest-side, ${(props) => props.color} 90%, #0000) 0% 50%,
        radial-gradient(circle closest-side, ${(props) => props.color} 90%, #0000) 50% 50%,
        radial-gradient(circle closest-side, ${(props) => props.color} 90%, #0000) 100% 50%;
    background-size: 8px 8px;
    background-repeat: no-repeat;
    animation: ${dotsAnimation} 0.7s infinite linear;
`;
