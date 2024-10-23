import React, { forwardRef } from "react";
import { CancelButton, CenterPopup, CancelAndSaveButtons } from "./GlobalPopupContainerStyle";
import BackBtn from "../btn/backBtn/backBtn";
import ContinueBtn from "../btn/continueBtn/continueBtn";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
interface PopupContainerProps {
    children: React.ReactNode;
    closePopup: () => void;
    style?: React.CSSProperties;
    handleSave?: () => void;
    disable?: boolean;
    isContinueBtnLoading?: boolean;
    btnText?: string;
    btnColor?: string;
    backBtnType?: "Arrow" | "Close";
    noBackBtn?: boolean;
    noContinueBtn?: boolean;
    desktopWidth?: string;
    height?: string;
    desktopHeight?: string;
    backBtnBackground?: boolean;
    cancelBtnText?: string;
    cancelPopup?: () => void;
    noBackdrop?: boolean;
    onTouchEnd?: () => void;
}
const GlobalPopupContainerCenter = forwardRef<HTMLDivElement, PopupContainerProps>(
    (
        {
            children,
            closePopup,
            style,
            handleSave,
            disable,
            isContinueBtnLoading,
            btnText,
            btnColor,
            backBtnType,
            noBackBtn,
            noContinueBtn,
            desktopWidth,
            height,
            desktopHeight,
            backBtnBackground,
            cancelBtnText,
            cancelPopup,
            noBackdrop,
            onTouchEnd,
        },
        ref
    ) => {
        return (
            <>
                <AnimationWrapperForPopup noBackdrop={noBackdrop}>
                    <CenterPopup ref={ref} style={style} desktopWidth={desktopWidth} height={height} desktopHeight={desktopHeight}>
                        {!noBackBtn && (
                            <BackBtn
                                onClick={() => closePopup()}
                                type={backBtnType ? backBtnType : "Close"}
                                mobileTop={24}
                                mobileLeft={24}
                                desktopTop={24}
                                desktopLeft={24}
                                hasBackground={backBtnBackground}
                            />
                        )}
                        {children}
                        {!noContinueBtn && (
                            <CancelAndSaveButtons>
                                <CancelButton
                                    disabled={isContinueBtnLoading}
                                    onClick={() => {
                                        cancelPopup !== undefined ? cancelPopup() : closePopup();
                                    }}
                                    onTouchEnd={onTouchEnd ? onTouchEnd : undefined}
                                >
                                    {cancelBtnText ? cancelBtnText : "Cancel"}
                                </CancelButton>
                                <ContinueBtn
                                    background={btnColor ? btnColor : "black"}
                                    style={{ width: "unset", margin: "0" }}
                                    onClick={handleSave}
                                    disabled={disable ? disable : false}
                                    isLoading={isContinueBtnLoading ? isContinueBtnLoading : false}
                                >
                                    {btnText ? btnText : "Save"}
                                </ContinueBtn>
                            </CancelAndSaveButtons>
                        )}
                    </CenterPopup>
                </AnimationWrapperForPopup>
            </>
        );
    }
);
export default GlobalPopupContainerCenter;
