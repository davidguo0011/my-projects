import { CSSProperties } from "styled-components";
import { LoadingSpinnerComponent } from "./loadingSpinnerStyling";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface LoadingSpinnerProps {
    color?: string | undefined;
    height?: string | undefined;
    width?: string | undefined;
    style?: CSSProperties | undefined;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, height, width, style }) => {
    const globalColor = color === "white" ? ColorTheme.White.color : ColorTheme.Black.color;
    return <LoadingSpinnerComponent color={globalColor} height={height} width={width} style={style} />;
};

export default LoadingSpinner;
