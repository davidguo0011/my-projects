import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ReactNode, ComponentProps, CSSProperties } from "react";

interface AnimationWrapperForPopupProps {
    children: ReactNode;
    noBackdrop?: boolean;
    direction?: "horizontal" | "vertical";
}

interface AnimationWrapperForPopupPortalProps extends AnimationWrapperForPopupProps {}

type MotionDivProps = ComponentProps<typeof motion.div>;

const AnimationWrapperForPopup: React.FC<AnimationWrapperForPopupProps> = ({ children, noBackdrop, direction }) => {
    const initValue = () => {
        if (direction === "horizontal") {
            return { x: window.innerWidth };
        } else {
            return { y: window.innerHeight };
        }
    };

    const endValue = () => {
        if (direction === "horizontal") {
            return { x: 0 };
        } else {
            return { y: 0 };
        }
    };

    const popupAnimation: Omit<MotionDivProps, "style"> & { style: CSSProperties } = {
        initial: initValue(),
        animate: endValue(),
        transition: { ease: "easeOut", duration: 0.2 },
        style: { position: "fixed", zIndex: 102, width: "100%", height: "100%", bottom: 0, left: 0 },
    };
    return (
        <div>
            {noBackdrop ? null : (
                <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(0px)" }}></div>
            )}
            <motion.div {...popupAnimation} key="popupAnimation">
                {children}
            </motion.div>
        </div>
    );
};
const AnimationWrapperForPopupPortal: React.FC<AnimationWrapperForPopupPortalProps> = ({ children, noBackdrop, direction }) => {
    return createPortal(
        <AnimationWrapperForPopup noBackdrop={noBackdrop} direction={direction}>
            {children}
        </AnimationWrapperForPopup>,
        document.getElementById("root") as HTMLElement
    );
};

export default AnimationWrapperForPopupPortal;
