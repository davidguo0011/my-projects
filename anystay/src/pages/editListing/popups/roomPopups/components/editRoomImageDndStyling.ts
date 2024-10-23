import styled from "styled-components";
import { ColorTheme, ShadowTheme } from "../../../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const EditRoomImageDropzoneWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 3/2;
    flex-shrink: 0;
    border-radius: 10px;
    @media (min-width: 768px) {
        width: 308px;
    }
`;

export const EditRoomImageDropzonePlaceHolder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ColorTheme.Grey3.color};
    border-radius: 10px;
    background-color: ${ColorTheme.Grey5.color};
`;

export const EditRoomImageDropzoneImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const EditRoomImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 3/2;
    border-radius: 10px;
    cursor: grab;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        width: 308px;
    }
`;

export const EditRoomDraggableImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const SelectedDotCircle = styled.div<{ selected?: boolean }>`
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.White.color)};
    right: 16px;
    top: 16px;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border: ${(props) => (props.selected ? "none" : `0.5px solid ${ColorTheme.Grey2.color}`)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SelectedDotInnerCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${ColorTheme.White.color};
`;

interface DragItemButtonProps {
    size?: string;
    borderRadius?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    background?: string;
}
export const DragItemButton = styled.div<DragItemButtonProps>`
    width: ${(props) => (props.size ? props.size : "32px")};
    height: ${(props) => (props.size ? props.size : "32px")};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "8px")};
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
    position: absolute;
    cursor: grab;
    background: ${(props) => (props.background ? props.background : ColorTheme.White.color)};
    ${(props) => (props.left ? `left: ${props.left};` : "")}
    ${(props) => (props.top ? `top: ${props.top};` : "")}
    ${(props) => (props.right ? `right: ${props.right};` : "")}
    ${(props) => (props.bottom ? `bottom: ${props.bottom};` : "")}
`;
export const DragItemButtonIcon = styled.img`
    width: 16px;
    height: 16px;
`;
