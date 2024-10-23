import styled from "styled-components";
import { ColorTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const ListingCardHostPfpWrapper = styled.div`
    width: 64px;
    height: 64px;
    position: absolute;
    right: 16px;
    bottom: 16px;
    border-radius: 50%;
    border: 3px solid ${ColorTheme.White.color};
`;
export const ListingCardHostPfpImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
