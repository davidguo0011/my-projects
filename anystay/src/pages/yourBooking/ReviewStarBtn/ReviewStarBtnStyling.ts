import styled from "styled-components";
import { SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ReviewStarBtnWrapper = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
`;
export const ReviewStarBtnContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    margin: ${SpacingTheme.spacing_300.margin} auto 0px auto;
`;
