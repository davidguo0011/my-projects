import styled from "styled-components";
import { keyframes } from "styled-components";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

const flash = () => keyframes`
    0% {
      background-color: ${ColorTheme.White.color};
      box-shadow: 22px 0 ${ColorTheme.White.color}, -22px 0 ${ColorTheme.Grey1.color};
    }
    50% {
      background-color: ${ColorTheme.Grey1.color};
      box-shadow: 22px 0 ${ColorTheme.White.color}, -22px 0 ${ColorTheme.White.color};
    }
    100% {
      background-color: ${ColorTheme.White.color};
      box-shadow: 22px 0 ${ColorTheme.Grey1.color}, -22px 0 ${ColorTheme.White.color};
    }
`;

export const InlineLoadingSpinnerComponent = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${ColorTheme.Grey1.color};
    box-shadow:
        22px 0 ${ColorTheme.Grey1.color},
        -22px 0 ${ColorTheme.Grey1.color};
    position: relative;
    animation: ${flash()} 0.5s ease-out infinite alternate;
`;
