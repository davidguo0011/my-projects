/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserHostModelCreateFormInputValues = {
    owner?: string;
    stripeAccountID?: string;
    stripeAccountVerified?: boolean;
    standardServiceFee?: boolean;
};
export declare type UserHostModelCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    stripeAccountID?: ValidationFunction<string>;
    stripeAccountVerified?: ValidationFunction<boolean>;
    standardServiceFee?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHostModelCreateFormOverridesProps = {
    UserHostModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    stripeAccountID?: PrimitiveOverrideProps<TextFieldProps>;
    stripeAccountVerified?: PrimitiveOverrideProps<SwitchFieldProps>;
    standardServiceFee?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserHostModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UserHostModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserHostModelCreateFormInputValues) => UserHostModelCreateFormInputValues;
    onSuccess?: (fields: UserHostModelCreateFormInputValues) => void;
    onError?: (fields: UserHostModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHostModelCreateFormInputValues) => UserHostModelCreateFormInputValues;
    onValidate?: UserHostModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserHostModelCreateForm(props: UserHostModelCreateFormProps): React.ReactElement;
