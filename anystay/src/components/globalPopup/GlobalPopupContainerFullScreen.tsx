import { MouseEventHandler, ReactNode } from "react";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
import BackBtn from "../btn/backBtn/backBtn";
import { FullScreenPopupBtnWrapper, FullScreenPopupCancelBtn, FullScreenPopupContentWrapper, FullScreenPopupWrapper } from "./GlobalPopupContainerStyle";
import ContinueBtn from "../btn/continueBtn/continueBtn";

interface GlobalPopupContainerFullScreenProps {
    backBtnOnClick: MouseEventHandler<HTMLButtonElement>;
    backBtnType?: "Arrow" | "Close";
    backBtnDisabled?: boolean;
    mobileHeight?: string;
    children: ReactNode;
    noContentWrapper?: boolean;
    cancelBtnOnClick?: MouseEventHandler<HTMLButtonElement>;
    cancelBtnDisabled?: boolean;
    cancelBtnText?: string;
    continueBtnOnClick?: MouseEventHandler<HTMLButtonElement>;
    continueBtnText?: string;
    continueBtnBgColor?: string;
    continueBtnLoading?: boolean;
    continueBtnDisabled?: boolean;
}

const GlobalPopupContainerFullScreen = ({ ...props }: GlobalPopupContainerFullScreenProps) => {
    return (
        <AnimationWrapperForPopup>
            <FullScreenPopupWrapper mobileHeight={props.mobileHeight}>
                <BackBtn
                    onClick={props.backBtnOnClick}
                    type={props.backBtnType ? props.backBtnType : "Close"}
                    desktopTop={32}
                    desktopLeft={32}
                    mobileLeft={24}
                    mobileTop={24}
                    disabled={props.backBtnDisabled ? props.backBtnDisabled : false}
                />
                {props.noContentWrapper ? <>{props.children}</> : <FullScreenPopupContentWrapper>{props.children}</FullScreenPopupContentWrapper>}
                {!props.noContentWrapper && (
                    <FullScreenPopupBtnWrapper>
                        <FullScreenPopupCancelBtn onClick={props.cancelBtnOnClick} disabled={props.cancelBtnDisabled ? props.cancelBtnDisabled : false}>
                            {props.cancelBtnText ? props.cancelBtnText : "Cancel"}
                        </FullScreenPopupCancelBtn>
                        <ContinueBtn
                            background={props.continueBtnBgColor ? props.continueBtnBgColor : "black"}
                            style={{ width: "unset" }}
                            onClick={props.continueBtnOnClick}
                            isLoading={props.continueBtnLoading ? props.continueBtnLoading : false}
                            disabled={props.continueBtnDisabled ? props.continueBtnDisabled : false}
                        >
                            {props.continueBtnText ? props.continueBtnText : "Save"}
                        </ContinueBtn>
                    </FullScreenPopupBtnWrapper>
                )}
            </FullScreenPopupWrapper>
        </AnimationWrapperForPopup>
    );
};

export default GlobalPopupContainerFullScreen;
