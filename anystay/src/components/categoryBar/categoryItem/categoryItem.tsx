import { CategoryItemWrapper, CategoryItemIcon, CategoryItemText } from "./categoryItemStyling";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
interface CategoryItemProps {
    label: string;
    imgSrc: string;
    selected: boolean;
    onClick: (() => void) | undefined;
    onTouchEnd: (() => void) | undefined;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, imgSrc, selected, onClick, onTouchEnd }) => {
    return (
        <CategoryItemWrapper onClick={onClick} onTouchEnd={onTouchEnd}>
            <CategoryItemIcon src={imgSrc} alt={label} />
            <CategoryItemText selected={selected}>{label}</CategoryItemText>
        </CategoryItemWrapper>
    );
};

export default CategoryItem;
