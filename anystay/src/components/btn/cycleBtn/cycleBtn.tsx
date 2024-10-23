import { Btn, BtnArrow } from "./cycleBtnStyling";
import LoadingSpinner from "../../spinner/loadingSpinner/loadingSpinner";
import { CSSProperties } from "react";

interface CycleBtnProperties {
    isLoading?: boolean;
    children?: any;
    disabled?: boolean;
    background: string;
    props?: any;
    style?: CSSProperties;
    onClick?: () => void;
    src?: string;
    iconSize?: string;
    size?: string;
}

const CycleBtn: React.FC<CycleBtnProperties> = ({ isLoading, children, disabled, background, src, iconSize, size, ...props }) => {
    return (
        <Btn {...props} background={background} disabled={disabled} isLoading={isLoading ? isLoading : false} size={size}>
            {isLoading && <LoadingSpinner height={"14px"} color={"white"} width={"32px"} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />}
            {children}
            {!isLoading && <BtnArrow src={src ? src : "https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg"} alt={"Arrow Btn"} iconSize={iconSize} />}
        </Btn>
    );
};

export default CycleBtn;
