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
export declare type RefundRequestModelUpdateFormInputValues = {
    confirmed?: boolean;
    declined?: boolean;
    expired?: boolean;
    completed?: boolean;
    refundAmount?: number;
    refundReason?: string;
    refundMessage?: string;
    status?: string;
};
export declare type RefundRequestModelUpdateFormValidationValues = {
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
export declare type RefundRequestModelUpdateFormOverridesProps = {
    RefundRequestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    declined?: PrimitiveOverrideProps<SwitchFieldProps>;
    expired?: PrimitiveOverrideProps<SwitchFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    refundAmount?: PrimitiveOverrideProps<TextFieldProps>;
    refundReason?: PrimitiveOverrideProps<TextFieldProps>;
    refundMessage?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RefundRequestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: RefundRequestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    refundRequestModel?: any;
    onSubmit?: (fields: RefundRequestModelUpdateFormInputValues) => RefundRequestModelUpdateFormInputValues;
    onSuccess?: (fields: RefundRequestModelUpdateFormInputValues) => void;
    onError?: (fields: RefundRequestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RefundRequestModelUpdateFormInputValues) => RefundRequestModelUpdateFormInputValues;
    onValidate?: RefundRequestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RefundRequestModelUpdateForm(props: RefundRequestModelUpdateFormProps): React.ReactElement;
