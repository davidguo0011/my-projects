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
export declare type ReviewStayModelUpdateFormInputValues = {
    hostawayReview?: boolean;
    hostawayReviewId?: string;
    externalUserFirstName?: string;
    externalUserLastName?: string;
    overall?: number;
    communication?: number;
    amenities?: number;
    cleaning?: number;
    location?: number;
    service?: number;
    value?: number;
    body?: string;
    completed?: boolean;
    hidden?: boolean;
};
export declare type ReviewStayModelUpdateFormValidationValues = {
    hostawayReview?: ValidationFunction<boolean>;
    hostawayReviewId?: ValidationFunction<string>;
    externalUserFirstName?: ValidationFunction<string>;
    externalUserLastName?: ValidationFunction<string>;
    overall?: ValidationFunction<number>;
    communication?: ValidationFunction<number>;
    amenities?: ValidationFunction<number>;
    cleaning?: ValidationFunction<number>;
    location?: ValidationFunction<number>;
    service?: ValidationFunction<number>;
    value?: ValidationFunction<number>;
    body?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    hidden?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewStayModelUpdateFormOverridesProps = {
    ReviewStayModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hostawayReview?: PrimitiveOverrideProps<SwitchFieldProps>;
    hostawayReviewId?: PrimitiveOverrideProps<TextFieldProps>;
    externalUserFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    externalUserLastName?: PrimitiveOverrideProps<TextFieldProps>;
    overall?: PrimitiveOverrideProps<TextFieldProps>;
    communication?: PrimitiveOverrideProps<TextFieldProps>;
    amenities?: PrimitiveOverrideProps<TextFieldProps>;
    cleaning?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    service?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReviewStayModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewStayModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reviewStayModel?: any;
    onSubmit?: (fields: ReviewStayModelUpdateFormInputValues) => ReviewStayModelUpdateFormInputValues;
    onSuccess?: (fields: ReviewStayModelUpdateFormInputValues) => void;
    onError?: (fields: ReviewStayModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewStayModelUpdateFormInputValues) => ReviewStayModelUpdateFormInputValues;
    onValidate?: ReviewStayModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewStayModelUpdateForm(props: ReviewStayModelUpdateFormProps): React.ReactElement;
