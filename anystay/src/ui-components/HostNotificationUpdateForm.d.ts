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
export declare type HostNotificationUpdateFormInputValues = {
    owner?: string;
    title?: string;
    message?: string;
    usermodelID?: string;
    listingmodelID?: string;
    read?: boolean;
    category?: string;
    eventUrl?: string;
};
export declare type HostNotificationUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    usermodelID?: ValidationFunction<string>;
    listingmodelID?: ValidationFunction<string>;
    read?: ValidationFunction<boolean>;
    category?: ValidationFunction<string>;
    eventUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HostNotificationUpdateFormOverridesProps = {
    HostNotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    usermodelID?: PrimitiveOverrideProps<TextFieldProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    read?: PrimitiveOverrideProps<SwitchFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    eventUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HostNotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: HostNotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hostNotification?: any;
    onSubmit?: (fields: HostNotificationUpdateFormInputValues) => HostNotificationUpdateFormInputValues;
    onSuccess?: (fields: HostNotificationUpdateFormInputValues) => void;
    onError?: (fields: HostNotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HostNotificationUpdateFormInputValues) => HostNotificationUpdateFormInputValues;
    onValidate?: HostNotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HostNotificationUpdateForm(props: HostNotificationUpdateFormProps): React.ReactElement;
