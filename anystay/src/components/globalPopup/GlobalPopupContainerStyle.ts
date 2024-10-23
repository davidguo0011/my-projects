import styled from "styled-components";
import { ButtonTheme, ColorTheme, ShadowTheme, SpacingTheme } from "../globaStyledComponents/globalStyledComponentsStyling";

export const RightPopup = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 14px 14px 0 0;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    background: ${ColorTheme.White.color};
    flex-direction: column;
    z-index: 102;
    align-items: center;
    min-height: fit-content;

    @media (min-width: 768px) {
        width: 560px;
        height: 100%;
        border-radius: 14px 0 0 0;
        top: 0;
        margin: 0 auto;
    }
`;
interface CenterPopupProps {
    desktopWidth?: string;
    height?: string;
    desktopHeight?: string;
}
export const CenterPopup = styled.div<CenterPopupProps>`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 14px 14px 0 0;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    background: ${ColorTheme.White.color};
    flex-direction: column;
    z-index: 102;
    align-items: center;
    min-height: fit-content;
    height: ${(props) => (props.height ? props.height : "fit-content")};

    @media (min-width: 768px) {
        width: ${(props) => (props.desktopWidth ? props.desktopWidth : "560px")};
        height: ${(props) => (props.desktopHeight ? props.desktopHeight : props.height ? props.height : "fit-content")};
        border-radius: 14px;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`;

export const CancelAndSaveButtons = styled.div`
    width: 100%;
    background-color: ${ColorTheme.White.color};
    display: flex;
    justify-content: space-between;
    /* border-top: 1px solid ${ColorTheme.Grey2.color}; */
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    margin-top: auto;
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding};
        border-radius: 0 0 14px 14px;
    }
`;

export const CancelButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    padding: 0;
`;

export const ChildrenContainer = styled.div`
    width: 100%;
    overflow-y: scroll;
    margin-top: 48px;
    padding: 0 24px;
    flex: 1;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        margin-top: 64px;
    }
`;

// full screen popup
interface FullScreenPopupWrapperProps {
    mobileHeight?: string;
}
export const FullScreenPopupWrapper = styled.div<FullScreenPopupWrapperProps>`
    position: fixed;
    width: 100%;
    height: ${(props) => (props.mobileHeight ? props.mobileHeight : "98%")};
    bottom: 0;
    left: 0;
    border-radius: ${(props) => (props.mobileHeight === "100%" ? "0" : "16px 16px 0 0")};
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${ColorTheme.White.color};
    z-index: 102;

    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`;
export const FullScreenPopupContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding} 0;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_1000.padding} ${SpacingTheme.spacing_300.padding} 0;
        width: calc(640px + 32px);
    }
`;
export const FullScreenPopupBtnWrapper = styled.div`
    background: ${ColorTheme.White.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    margin-top: auto;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_800.padding};
    }
`;
export const FullScreenPopupCancelBtn = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
`;
