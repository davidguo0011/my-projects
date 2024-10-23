import { useState, useEffect } from "react";
import { LogoSpinnerWrapper, SvgPath } from "./logoSpinnerStyling";
import { ColorTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

interface logoSpinnerProps {
    width: string | number;
    height: string | number;
    speedSeconds?: number;
    guestMode: boolean;
    reverse?: boolean;
}

const LogoSpinner: React.FC<logoSpinnerProps> = ({ width, height, speedSeconds, guestMode, reverse }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        setIsAnimated(true);
    }, []);
    useEffect(() => {
        const interval = setTimeout(() => {
            setIsAnimated(!isAnimated);
        }, 1050);
        return () => {
            clearTimeout(interval);
        };
    }, [isAnimated]);

    return (
        <>
            <LogoSpinnerWrapper version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 356 356" xmlSpace="preserve" width={width} height={height}>
                <g id="Layer_2_00000152242470239081577260000001968903415695278761_">
                    <g id="Layer_1-2">
                        <SvgPath
                            style={{ stroke: !guestMode ? ColorTheme.Blue.color : ColorTheme.Red.color }}
                            active={isAnimated}
                            speedSeconds={speedSeconds}
                            reverse={reverse}
                            d="M263.5,319.8c-99,59.9-247.7,1.1-250.5-141.5C13,87.6,87.5,13,178,13c89.9-0.2,164.3,71,165,165.3
			c0,1.9-0.7,22.1-5.5,33.8c-5.9,14.4-18.2,32.3-41.2,32.3h-6.4c-15.5,0-26.1-10.6-26.1-26.1v-68.5c0-7.6-3.8-14.8-10.1-19L189.7,88
			c-7.1-4.8-16.4-4.8-23.5,0l-64.6,43.3c-5.9,4-9.5,10.7-9.5,17.8v95.3"
                        ></SvgPath>
                    </g>
                </g>
            </LogoSpinnerWrapper>
        </>
    );
};

export default LogoSpinner;
