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
export declare type ReviewGuestModelUpdateFormInputValues = {
    bookingRequestID?: string;
    overall?: number;
    communication?: number;
    cleanliness?: number;
    body?: string;
    completed?: boolean;
    hidden?: boolean;
};
export declare type ReviewGuestModelUpdateFormValidationValues = {
    bookingRequestID?: ValidationFunction<string>;
    overall?: ValidationFunction<number>;
    communication?: ValidationFunction<number>;
    cleanliness?: ValidationFunction<number>;
    body?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    hidden?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewGuestModelUpdateFormOverridesProps = {
    ReviewGuestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookingRequestID?: PrimitiveOverrideProps<TextFieldProps>;
    overall?: PrimitiveOverrideProps<TextFieldProps>;
    communication?: PrimitiveOverrideProps<TextFieldProps>;
    cleanliness?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReviewGuestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewGuestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reviewGuestModel?: any;
    onSubmit?: (fields: ReviewGuestModelUpdateFormInputValues) => ReviewGuestModelUpdateFormInputValues;
    onSuccess?: (fields: ReviewGuestModelUpdateFormInputValues) => void;
    onError?: (fields: ReviewGuestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewGuestModelUpdateFormInputValues) => ReviewGuestModelUpdateFormInputValues;
    onValidate?: ReviewGuestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewGuestModelUpdateForm(props: ReviewGuestModelUpdateFormProps): React.ReactElement;
