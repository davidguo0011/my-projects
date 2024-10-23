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
export declare type ListingUpdateSearchVerificationRequestModelCreateFormInputValues = {
    listingmodelID?: string;
    completed?: boolean;
    confirmed?: boolean;
};
export declare type ListingUpdateSearchVerificationRequestModelCreateFormValidationValues = {
    listingmodelID?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    confirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingUpdateSearchVerificationRequestModelCreateFormOverridesProps = {
    ListingUpdateSearchVerificationRequestModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListingUpdateSearchVerificationRequestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ListingUpdateSearchVerificationRequestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListingUpdateSearchVerificationRequestModelCreateFormInputValues) => ListingUpdateSearchVerificationRequestModelCreateFormInputValues;
    onSuccess?: (fields: ListingUpdateSearchVerificationRequestModelCreateFormInputValues) => void;
    onError?: (fields: ListingUpdateSearchVerificationRequestModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingUpdateSearchVerificationRequestModelCreateFormInputValues) => ListingUpdateSearchVerificationRequestModelCreateFormInputValues;
    onValidate?: ListingUpdateSearchVerificationRequestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListingUpdateSearchVerificationRequestModelCreateForm(props: ListingUpdateSearchVerificationRequestModelCreateFormProps): React.ReactElement;
