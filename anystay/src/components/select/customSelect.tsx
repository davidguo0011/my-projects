import { useState, useEffect } from "react";
import { SelectControl, SelectWrapper, SelectOptionsList, SelectOption, SelectArrowIcon } from "./selectStyling";
import useClickOutside from "../../hook/useClickOutside";

interface CustomSelectProps {
    options: {
        value: string | number;
        label: string;
    }[];
    onChange: (event: { value: string | number; label: string }) => void;
    placeholder?: string | number;
    initialValue?: { value: string | number; label: string } | null;
    styles?: React.CSSProperties;
}

export default function CustomSelect({ options, onChange, placeholder, initialValue, styles }: CustomSelectProps) {
    const [selectedOption, setSelectedOption] = useState<{ value: string | number; label: string } | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectChange = (event: { value: string | number; label: string }) => {
        setIsDropdownOpen(false);
        setSelectedOption(event);
        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        if (initialValue) {
            const selectedValue = options.find((option) => option.value === initialValue.value);
            if (selectedValue) {
                setSelectedOption(selectedValue);
            }
        }
    }, [initialValue, options]);

    const wrapperRef = useClickOutside(
        isDropdownOpen,
        () => {
            setIsDropdownOpen(false);
        },
        true
    );

    useEffect(() => {
        if (isDropdownOpen && selectedOption && wrapperRef.current) {
            const selectedOptionElement = wrapperRef.current.querySelector(`[data-value="${selectedOption.value}"]`) as HTMLElement;
            if (selectedOptionElement) {
                const offsetTop = selectedOptionElement.offsetTop - wrapperRef.current.offsetTop;
                wrapperRef.current.scrollTop = offsetTop;
            }
        }
    }, [isDropdownOpen, selectedOption, wrapperRef]);

    return (
        <SelectControl>
            <SelectWrapper
                onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                }}
                ref={wrapperRef}
            >
                <p>{selectedOption ? selectedOption.label : placeholder}</p>
                <SelectArrowIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="Select arrow" />
            </SelectWrapper>
            <SelectOptionsList isOpen={isDropdownOpen} style={styles}>
                {options.map((option, index) => (
                    <SelectOption key={index} onMouseDown={() => handleSelectChange(option)} selectedOption={(selectedOption && selectedOption.value === option.value) || false}>
                        {option.label}
                    </SelectOption>
                ))}
            </SelectOptionsList>
        </SelectControl>
    );
}
