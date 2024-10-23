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
export declare type ListingSearchVerificationRequestModelUpdateFormInputValues = {
    listingmodelID?: string;
    completed?: boolean;
    confirmed?: boolean;
};
export declare type ListingSearchVerificationRequestModelUpdateFormValidationValues = {
    listingmodelID?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    confirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingSearchVerificationRequestModelUpdateFormOverridesProps = {
    ListingSearchVerificationRequestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListingSearchVerificationRequestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListingSearchVerificationRequestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listingSearchVerificationRequestModel?: any;
    onSubmit?: (fields: ListingSearchVerificationRequestModelUpdateFormInputValues) => ListingSearchVerificationRequestModelUpdateFormInputValues;
    onSuccess?: (fields: ListingSearchVerificationRequestModelUpdateFormInputValues) => void;
    onError?: (fields: ListingSearchVerificationRequestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingSearchVerificationRequestModelUpdateFormInputValues) => ListingSearchVerificationRequestModelUpdateFormInputValues;
    onValidate?: ListingSearchVerificationRequestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListingSearchVerificationRequestModelUpdateForm(props: ListingSearchVerificationRequestModelUpdateFormProps): React.ReactElement;
