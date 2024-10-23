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
export declare type ListingIDVerificationRequestModelUpdateFormInputValues = {
    listingmodelID?: string;
    privateBucket?: string;
    verificationDocuments?: string[];
    completed?: boolean;
    confirmed?: boolean;
};
export declare type ListingIDVerificationRequestModelUpdateFormValidationValues = {
    listingmodelID?: ValidationFunction<string>;
    privateBucket?: ValidationFunction<string>;
    verificationDocuments?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    confirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingIDVerificationRequestModelUpdateFormOverridesProps = {
    ListingIDVerificationRequestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    privateBucket?: PrimitiveOverrideProps<TextFieldProps>;
    verificationDocuments?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListingIDVerificationRequestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListingIDVerificationRequestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listingIDVerificationRequestModel?: any;
    onSubmit?: (fields: ListingIDVerificationRequestModelUpdateFormInputValues) => ListingIDVerificationRequestModelUpdateFormInputValues;
    onSuccess?: (fields: ListingIDVerificationRequestModelUpdateFormInputValues) => void;
    onError?: (fields: ListingIDVerificationRequestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingIDVerificationRequestModelUpdateFormInputValues) => ListingIDVerificationRequestModelUpdateFormInputValues;
    onValidate?: ListingIDVerificationRequestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListingIDVerificationRequestModelUpdateForm(props: ListingIDVerificationRequestModelUpdateFormProps): React.ReactElement;
