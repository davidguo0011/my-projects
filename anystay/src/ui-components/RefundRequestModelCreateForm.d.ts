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
export declare type RefundRequestModelCreateFormInputValues = {
    confirmed?: boolean;
    declined?: boolean;
    expired?: boolean;
    completed?: boolean;
    refundAmount?: number;
    refundReason?: string;
    refundMessage?: string;
    status?: string;
};
export declare type RefundRequestModelCreateFormValidationValues = {
    confirmed?: ValidationFunction<boolean>;
    declined?: ValidationFunction<boolean>;
    expired?: ValidationFunction<boolean>;
    completed?: ValidationFunction<boolean>;
    refundAmount?: ValidationFunction<number>;
    refundReason?: ValidationFunction<string>;
    refundMessage?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RefundRequestModelCreateFormOverridesProps = {
    RefundRequestModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    declined?: PrimitiveOverrideProps<SwitchFieldProps>;
    expired?: PrimitiveOverrideProps<SwitchFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    refundAmount?: PrimitiveOverrideProps<TextFieldProps>;
    refundReason?: PrimitiveOverrideProps<TextFieldProps>;
    refundMessage?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RefundRequestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: RefundRequestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RefundRequestModelCreateFormInputValues) => RefundRequestModelCreateFormInputValues;
    onSuccess?: (fields: RefundRequestModelCreateFormInputValues) => void;
    onError?: (fields: RefundRequestModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RefundRequestModelCreateFormInputValues) => RefundRequestModelCreateFormInputValues;
    onValidate?: RefundRequestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function RefundRequestModelCreateForm(props: RefundRequestModelCreateFormProps): React.ReactElement;
