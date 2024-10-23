import styled from "styled-components";
import { TextTheme, ColorTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const SelectControl = styled.div`
    width: 100%;
    max-height: 150px;
    position: relative;
`;

export const SelectWrapper = styled.div`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    cursor: pointer;
    padding: 0 16px 0 16px;
`;

export const SelectArrowIcon = styled.img`
    width: 8px;
    height: 12px;
    transform: rotate(-90deg);
    transition: 0.1s;
    object-fit: cover;
`;

interface SelectOptionsListProps {
    isOpen: boolean;
}
export const SelectOptionsList = styled.ul<SelectOptionsListProps>`
    width: 100%;
    max-height: 253px;
    list-style: none;
    padding: 0;
    margin-top: 10px;
    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${ColorTheme.White.color};
    display: ${(props) => (props.isOpen ? "block" : "none")};
    overflow-y: scroll;
    z-index: 1000;
    position: absolute;

    @media screen and (max-width: 767px) {
        width: 100%;
        max-height: 248px;
    }
`;

interface SelectOptionProps {
    selectedOption: boolean;
}
export const SelectOption = styled.li<SelectOptionProps>`
    padding: ${SpacingTheme.spacing_350.padding};
    z-index: 1000;
    height: 54px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.selectedOption ? ColorTheme.Grey4.color : "transparent")};

    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;
