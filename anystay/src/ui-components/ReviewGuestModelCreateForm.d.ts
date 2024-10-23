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
export declare type ReviewGuestModelCreateFormInputValues = {
    bookingRequestID?: string;
    overall?: number;
    communication?: number;
    cleanliness?: number;
    body?: string;
    completed?: boolean;
    hidden?: boolean;
};
export declare type ReviewGuestModelCreateFormValidationValues = {
    bookingRequestID?: ValidationFunction<string>;
    overall?: ValidationFunction<number>;
    communication?: ValidationFunction<number>;
    cleanliness?: ValidationFunction<number>;
    body?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    hidden?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewGuestModelCreateFormOverridesProps = {
    ReviewGuestModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookingRequestID?: PrimitiveOverrideProps<TextFieldProps>;
    overall?: PrimitiveOverrideProps<TextFieldProps>;
    communication?: PrimitiveOverrideProps<TextFieldProps>;
    cleanliness?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReviewGuestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewGuestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewGuestModelCreateFormInputValues) => ReviewGuestModelCreateFormInputValues;
    onSuccess?: (fields: ReviewGuestModelCreateFormInputValues) => void;
    onError?: (fields: ReviewGuestModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewGuestModelCreateFormInputValues) => ReviewGuestModelCreateFormInputValues;
    onValidate?: ReviewGuestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewGuestModelCreateForm(props: ReviewGuestModelCreateFormProps): React.ReactElement;
