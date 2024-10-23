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
export declare type OrderModelCreateFormInputValues = {
    owner?: string;
    productmodelID?: string;
    quantity?: number;
    status?: string;
    confirmed?: boolean;
    declined?: boolean;
    expired?: boolean;
    completed?: boolean;
    cancelled?: boolean;
    instantBookEnabled?: boolean;
    people?: number;
    guests?: number;
    adults?: number;
    children?: number;
    infants?: number;
    pets?: number;
    items?: number;
    startDate?: string;
    endDate?: string;
    bookingAmount?: number;
    bookingAmountIncludingServiceFee?: number;
    serviceFee?: number;
    couponCode?: string;
    couponDiscountAmount?: number;
    refunded?: number;
    paymentModels?: string[];
    transferModels?: string[];
    refundModels?: string[];
    transferReversalModels?: string[];
};
export declare type OrderModelCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    productmodelID?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    confirmed?: ValidationFunction<boolean>;
    declined?: ValidationFunction<boolean>;
    expired?: ValidationFunction<boolean>;
    completed?: ValidationFunction<boolean>;
    cancelled?: ValidationFunction<boolean>;
    instantBookEnabled?: ValidationFunction<boolean>;
    people?: ValidationFunction<number>;
    guests?: ValidationFunction<number>;
    adults?: ValidationFunction<number>;
    children?: ValidationFunction<number>;
    infants?: ValidationFunction<number>;
    pets?: ValidationFunction<number>;
    items?: ValidationFunction<number>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    bookingAmount?: ValidationFunction<number>;
    bookingAmountIncludingServiceFee?: ValidationFunction<number>;
    serviceFee?: ValidationFunction<number>;
    couponCode?: ValidationFunction<string>;
    couponDiscountAmount?: ValidationFunction<number>;
    refunded?: ValidationFunction<number>;
    paymentModels?: ValidationFunction<string>;
    transferModels?: ValidationFunction<string>;
    refundModels?: ValidationFunction<string>;
    transferReversalModels?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderModelCreateFormOverridesProps = {
    OrderModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    productmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    declined?: PrimitiveOverrideProps<SwitchFieldProps>;
    expired?: PrimitiveOverrideProps<SwitchFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    cancelled?: PrimitiveOverrideProps<SwitchFieldProps>;
    instantBookEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    people?: PrimitiveOverrideProps<TextFieldProps>;
    guests?: PrimitiveOverrideProps<TextFieldProps>;
    adults?: PrimitiveOverrideProps<TextFieldProps>;
    children?: PrimitiveOverrideProps<TextFieldProps>;
    infants?: PrimitiveOverrideProps<TextFieldProps>;
    pets?: PrimitiveOverrideProps<TextFieldProps>;
    items?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    bookingAmount?: PrimitiveOverrideProps<TextFieldProps>;
    bookingAmountIncludingServiceFee?: PrimitiveOverrideProps<TextFieldProps>;
    serviceFee?: PrimitiveOverrideProps<TextFieldProps>;
    couponCode?: PrimitiveOverrideProps<TextFieldProps>;
    couponDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    refunded?: PrimitiveOverrideProps<TextFieldProps>;
    paymentModels?: PrimitiveOverrideProps<TextFieldProps>;
    transferModels?: PrimitiveOverrideProps<TextFieldProps>;
    refundModels?: PrimitiveOverrideProps<TextFieldProps>;
    transferReversalModels?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderModelCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderModelCreateFormInputValues) => OrderModelCreateFormInputValues;
    onSuccess?: (fields: OrderModelCreateFormInputValues) => void;
    onError?: (fields: OrderModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderModelCreateFormInputValues) => OrderModelCreateFormInputValues;
    onValidate?: OrderModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderModelCreateForm(props: OrderModelCreateFormProps): React.ReactElement;
