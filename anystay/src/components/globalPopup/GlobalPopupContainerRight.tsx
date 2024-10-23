import React, { forwardRef } from "react";
import useIsDesktopSize from "../../hook/useIsDesktopSize";
import { CancelButton, RightPopup, CancelAndSaveButtons, ChildrenContainer } from "./GlobalPopupContainerStyle";
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
    noContinueBtn?: boolean;
    desktopWidth?: string;
    height?: string;
    backBtnBackground?: boolean;
    cancelBtnText?: string;
    cancelPopup?: () => void;
}

const GlobalPopupContainerRight = forwardRef<HTMLDivElement, PopupContainerProps>(
    (
        { children, closePopup, style, handleSave, disable, isContinueBtnLoading, btnText, btnColor, backBtnType, noContinueBtn, desktopWidth, height, backBtnBackground, cancelBtnText, cancelPopup },
        ref
    ) => {
        const isDesktopSize = useIsDesktopSize();

        return (
            <>
                <AnimationWrapperForPopup direction={isDesktopSize ? "horizontal" : "vertical"}>
                    <RightPopup ref={ref} style={style}>
                        <BackBtn
                            onClick={() => closePopup()}
                            type={backBtnType ? backBtnType : "Close"}
                            mobileTop={24}
                            mobileLeft={24}
                            desktopTop={24}
                            desktopLeft={24}
                            hasBackground={backBtnBackground}
                        />
                        <ChildrenContainer>{children}</ChildrenContainer>
                        {!noContinueBtn && (
                            <CancelAndSaveButtons>
                                <CancelButton
                                    disabled={isContinueBtnLoading}
                                    onClick={() => {
                                        cancelPopup !== undefined ? cancelPopup() : closePopup();
                                    }}
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
                    </RightPopup>
                </AnimationWrapperForPopup>
            </>
        );
    }
);

export default GlobalPopupContainerRight;
