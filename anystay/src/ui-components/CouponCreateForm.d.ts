/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CouponCreateFormInputValues = {
    expireDate?: string;
    beginDate?: string;
    discountAmount?: number;
    discountPercent?: number;
    maxDiscountAmount?: number;
    minAmount?: number;
    couponCode?: string;
    timesRedeemed?: number;
    valid?: boolean;
    exclusive?: boolean;
    validUsers?: string[];
    invalidUsers?: string[];
    oneTimeUse?: boolean;
};
export declare type CouponCreateFormValidationValues = {
    expireDate?: ValidationFunction<string>;
    beginDate?: ValidationFunction<string>;
    discountAmount?: ValidationFunction<number>;
    discountPercent?: ValidationFunction<number>;
    maxDiscountAmount?: ValidationFunction<number>;
    minAmount?: ValidationFunction<number>;
    couponCode?: ValidationFunction<string>;
    timesRedeemed?: ValidationFunction<number>;
    valid?: ValidationFunction<boolean>;
    exclusive?: ValidationFunction<boolean>;
    validUsers?: ValidationFunction<string>;
    invalidUsers?: ValidationFunction<string>;
    oneTimeUse?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouponCreateFormOverridesProps = {
    CouponCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    expireDate?: PrimitiveOverrideProps<TextFieldProps>;
    beginDate?: PrimitiveOverrideProps<TextFieldProps>;
    discountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    discountPercent?: PrimitiveOverrideProps<TextFieldProps>;
    maxDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    minAmount?: PrimitiveOverrideProps<TextFieldProps>;
    couponCode?: PrimitiveOverrideProps<TextFieldProps>;
    timesRedeemed?: PrimitiveOverrideProps<TextFieldProps>;
    valid?: PrimitiveOverrideProps<SwitchFieldProps>;
    exclusive?: PrimitiveOverrideProps<SwitchFieldProps>;
    validUsers?: PrimitiveOverrideProps<TextFieldProps>;
    invalidUsers?: PrimitiveOverrideProps<TextFieldProps>;
    oneTimeUse?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CouponCreateFormProps = React.PropsWithChildren<{
    overrides?: CouponCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onSuccess?: (fields: CouponCreateFormInputValues) => void;
    onError?: (fields: CouponCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onValidate?: CouponCreateFormValidationValues;
} & React.CSSProperties>;
export default function CouponCreateForm(props: CouponCreateFormProps): React.ReactElement;
