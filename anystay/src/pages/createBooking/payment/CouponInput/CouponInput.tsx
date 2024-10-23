import { useDebounce } from "../../../../hook/useDebounce";
import { CouponCodeWrapper, CouponCodeTitle, CouponCodeInput, CouponCodeInvalid, CouponCodeTitleWrapper, CouponInputWrapper, CouponCodeSuccessIcon } from "../../createBookingStyling";
import { useEffect, useState } from "react";

interface CouponInputProps {
    updateCoupon: (couponCodeInput: string) => Promise<any>;
}

const isValidInput = (value: string) => /^[a-zA-Z0-9]+$/.test(value);

export default function CouponInput({ updateCoupon }: CouponInputProps) {
    const [couponCodeInput, setCouponCodeInput] = useState("");
    const [couponCodeInvalid, setCouponCodeInvalid] = useState(false);
    const [couponCodeValid, setCouponCodeValid] = useState(false);

    const debouncedValue = useDebounce(couponCodeInput, 1000);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCodeValid(false);
        setCouponCodeInvalid(false);
        const value = e.target.value;
        if (isValidInput(value) || value === "") {
            setCouponCodeInput(value.toUpperCase());
        }
    };

    useEffect(() => {
        const validateCoupon = async () => {
            if (debouncedValue.length >= 6) {
                try {
                    const res = await updateCoupon(debouncedValue);
                    if (res.success) {
                        setCouponCodeValid(true);
                    } else {
                        setCouponCodeInvalid(true);
                    }
                } catch (error) {
                    setCouponCodeInvalid(true);
                }
            }
        };

        validateCoupon();
    }, [debouncedValue]);

    return (
        <CouponCodeWrapper>
            <CouponCodeTitleWrapper>
                <CouponCodeTitle>Got a coupon?</CouponCodeTitle>
                {couponCodeInvalid && <CouponCodeInvalid>Coupon expired or used</CouponCodeInvalid>}
            </CouponCodeTitleWrapper>
            <CouponInputWrapper>
                <CouponCodeInput type="text" placeholder="Add coupon code" value={couponCodeInput} onChange={handleChange} />
                {couponCodeValid && <CouponCodeSuccessIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"Tick icon"} />}
            </CouponInputWrapper>
        </CouponCodeWrapper>
    );
}
