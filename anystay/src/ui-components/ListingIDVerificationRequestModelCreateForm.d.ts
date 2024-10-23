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
export declare type ListingIDVerificationRequestModelCreateFormInputValues = {
    listingmodelID?: string;
    privateBucket?: string;
    verificationDocuments?: string[];
    completed?: boolean;
    confirmed?: boolean;
};
export declare type ListingIDVerificationRequestModelCreateFormValidationValues = {
    listingmodelID?: ValidationFunction<string>;
    privateBucket?: ValidationFunction<string>;
    verificationDocuments?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    confirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingIDVerificationRequestModelCreateFormOverridesProps = {
    ListingIDVerificationRequestModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    privateBucket?: PrimitiveOverrideProps<TextFieldProps>;
    verificationDocuments?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListingIDVerificationRequestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ListingIDVerificationRequestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListingIDVerificationRequestModelCreateFormInputValues) => ListingIDVerificationRequestModelCreateFormInputValues;
    onSuccess?: (fields: ListingIDVerificationRequestModelCreateFormInputValues) => void;
    onError?: (fields: ListingIDVerificationRequestModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingIDVerificationRequestModelCreateFormInputValues) => ListingIDVerificationRequestModelCreateFormInputValues;
    onValidate?: ListingIDVerificationRequestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListingIDVerificationRequestModelCreateForm(props: ListingIDVerificationRequestModelCreateFormProps): React.ReactElement;
