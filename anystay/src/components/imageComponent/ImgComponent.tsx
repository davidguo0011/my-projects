import { ImgComponentWrapper, Img } from "./ImgComponentStyling";

interface ImgComponentProps {
    hasImage: boolean;
    width: string;
    desktopWidth?: string;
    height?: string;
    hasBackground?: boolean;
    cursorStyle?: string;
    noShadow?: boolean;
    iconSize?: string;
    borderRadius?: string;
    src: string;
    alt: string;
}

const ImgComponent = ({ src, alt, hasImage, iconSize, borderRadius, desktopWidth, ...props }: ImgComponentProps) => {
    return (
        <ImgComponentWrapper hasImage={hasImage} borderRadius={borderRadius} desktopWidth={desktopWidth} {...props}>
            <Img src={src} alt={alt} hasImage={hasImage} borderRadius={borderRadius} iconSize={iconSize} />
        </ImgComponentWrapper>
    );
};

export default ImgComponent;
