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
export declare type ListingUpdateSearchVerificationRequestModelUpdateFormInputValues = {
    listingmodelID?: string;
    completed?: boolean;
    confirmed?: boolean;
};
export declare type ListingUpdateSearchVerificationRequestModelUpdateFormValidationValues = {
    listingmodelID?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    confirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingUpdateSearchVerificationRequestModelUpdateFormOverridesProps = {
    ListingUpdateSearchVerificationRequestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListingUpdateSearchVerificationRequestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListingUpdateSearchVerificationRequestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listingUpdateSearchVerificationRequestModel?: any;
    onSubmit?: (fields: ListingUpdateSearchVerificationRequestModelUpdateFormInputValues) => ListingUpdateSearchVerificationRequestModelUpdateFormInputValues;
    onSuccess?: (fields: ListingUpdateSearchVerificationRequestModelUpdateFormInputValues) => void;
    onError?: (fields: ListingUpdateSearchVerificationRequestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListingUpdateSearchVerificationRequestModelUpdateFormInputValues) => ListingUpdateSearchVerificationRequestModelUpdateFormInputValues;
    onValidate?: ListingUpdateSearchVerificationRequestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListingUpdateSearchVerificationRequestModelUpdateForm(props: ListingUpdateSearchVerificationRequestModelUpdateFormProps): React.ReactElement;
