import { Btn } from "./continueBtnStyling";
import LoadingSpinner from "../../spinner/loadingSpinner/loadingSpinner";
import { MouseEventHandler, TouchEventHandler } from "react";
interface ContinueBtnProperties {
    isLoading: boolean;
    children: any;
    disabled: boolean;
    background: string;
    props?: any;
    style?: React.CSSProperties;
    continueType?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onTouchEnd?: TouchEventHandler<HTMLButtonElement>;
}

const ContinueBtn: React.FC<ContinueBtnProperties> = ({ isLoading, children, disabled, background, ...props }) => {
    return (
        <Btn {...props} background={background} disabled={disabled} isLoading={isLoading}>
            {isLoading && <LoadingSpinner height={"14px"} color={"white"} width={"32px"} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />}
            {children}
        </Btn>
    );
};

export default ContinueBtn;
