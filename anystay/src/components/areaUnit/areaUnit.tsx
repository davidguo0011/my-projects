import { AreaUnitWrapper, AreaUnitText, AreaUnitM2, AreaMeterLabel, AreaHaLabel } from "./areaUnitStyling";

interface AreaUnitProps {
    setAreaUnit: (unit: "Ha" | "m²") => void;
    areaUnit: "Ha" | "m²" | "";
    style?: React.CSSProperties;
}

const AreaUnit: React.FC<AreaUnitProps> = ({ setAreaUnit, areaUnit }) => {
    const handleUnit = (): void => {
        setAreaUnit(areaUnit === "Ha" ? "m²" : "Ha");
    };

    return (
        <AreaUnitWrapper onClick={handleUnit}>
            <AreaUnitText>
                <AreaUnitM2 areaUnit={areaUnit}>{areaUnit !== "" ? areaUnit : "m²"}</AreaUnitM2>
                <AreaMeterLabel>m²</AreaMeterLabel>
                <AreaHaLabel>Ha</AreaHaLabel>
            </AreaUnitText>
        </AreaUnitWrapper>
    );
};

export default AreaUnit;
