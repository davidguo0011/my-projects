import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface AnimationWrapperForPageSliderProps {
    children: ReactNode;
    currentPageIndex: number;
    thisPageIndex: number;
    style: CSSProperties;
    initial: boolean;
}

const AnimationWrapperForPageSlider: React.FC<AnimationWrapperForPageSliderProps> = ({ children, currentPageIndex, thisPageIndex, style, initial }) => {
    const getContentPosition = (): number => {
        if (currentPageIndex === thisPageIndex) {
            return 0;
        } else if (currentPageIndex > thisPageIndex) {
            return -(window.innerWidth + 1);
        } else {
            return window.innerWidth + 1;
        }
    };
    const showAnimation = {
        x: getContentPosition(),
        display: "block",
    };
    const hideAnimation = {
        x: getContentPosition(),
        transitionEnd: {
            display: "none",
        },
    };

    return (
        <motion.div animate={currentPageIndex === thisPageIndex ? showAnimation : hideAnimation} transition={{ duration: 0.2 }} initial={initial} style={style ? style : {}}>
            {children}
        </motion.div>
    );
};

export default AnimationWrapperForPageSlider;
