import {
    NewListingAddAmenitiesTitle,
    NewListingWriteTitleQuestionSubtitle,
    CreateListingAddAddressTitle,
    CreatelistingInstructionText,
    CreateListingNewListingQuestionWrapper,
} from "../createListingStyling";
import CustomSelect from "../../../components/select/customSelect";

interface AddDiscountsProps {
    weeklyDiscount: string | number;
    updateWeeklyDiscount: (weeklyDiscount: string) => void;
    monthlyDiscount: string | number;
    updateMonthlyDiscount: (monthlyDiscount: string) => Promise<void>;
}

export default function AddDiscounts({ weeklyDiscount, updateWeeklyDiscount, monthlyDiscount, updateMonthlyDiscount }: AddDiscountsProps) {
    const weeklyDiscountOptions = [
        { value: "0", label: "No weekly discount" },
        { value: "5", label: "5%" },
        { value: "10", label: "10%" },
        { value: "15", label: "15%" },
        { value: "20", label: "20%" },
        { value: "35", label: "35%" },
        { value: "50", label: "50%" },
        { value: "65", label: "65%" },
    ];
    const monthlyDiscountOptions = [
        { value: "0", label: "No monthly discount" },
        { value: "10", label: "10%" },
        { value: "20", label: "20%" },
        { value: "30", label: "30%" },
        { value: "40", label: "40%" },
        { value: "50", label: "50%" },
        { value: "60", label: "60%" },
        { value: "70", label: "70%" },
    ];
    const weeklyDiscountValue = weeklyDiscountOptions.filter((option) => Number(option.value) === weeklyDiscount)[0];
    const monthlyDiscountValue = monthlyDiscountOptions.filter((option) => Number(option.value) === monthlyDiscount)[0];
    return (
        <CreateListingNewListingQuestionWrapper>
            {/* <CreateListingNewListingDesktopTitle>Set your discounts</CreateListingNewListingDesktopTitle> */}
            <CreateListingAddAddressTitle>Set your discounts</CreateListingAddAddressTitle>
            {window.innerWidth > 768 && <CreatelistingInstructionText>Offer long stay discounts to your guests.</CreatelistingInstructionText>}
            <NewListingAddAmenitiesTitle>Weekly discount</NewListingAddAmenitiesTitle>
            <CustomSelect
                placeholder="No weekly discount"
                options={weeklyDiscountOptions}
                onChange={(value: { value: string | number; label: string }) => updateWeeklyDiscount(value.value as string)}
                initialValue={weeklyDiscountValue}
            />
            <NewListingWriteTitleQuestionSubtitle>Applies to stays 7 nights or over.</NewListingWriteTitleQuestionSubtitle>
            <NewListingAddAmenitiesTitle>Monthly discount</NewListingAddAmenitiesTitle>
            <CustomSelect
                placeholder="No monthly discount"
                options={monthlyDiscountOptions}
                onChange={(value: { value: string | number; label: string }) => updateMonthlyDiscount(value.value as string)}
                initialValue={monthlyDiscountValue}
            />
            <NewListingWriteTitleQuestionSubtitle>Applies to stays 28 nights or over.</NewListingWriteTitleQuestionSubtitle>
        </CreateListingNewListingQuestionWrapper>
    );
}
