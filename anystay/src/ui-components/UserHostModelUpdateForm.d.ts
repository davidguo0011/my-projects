/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserHostModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserHostModelUpdateFormInputValues = {
    owner?: string;
    stripeAccountID?: string;
    stripeAccountVerified?: boolean;
    standardServiceFee?: boolean;
};
export declare type UserHostModelUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    stripeAccountID?: ValidationFunction<string>;
    stripeAccountVerified?: ValidationFunction<boolean>;
    standardServiceFee?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHostModelUpdateFormOverridesProps = {
    UserHostModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    stripeAccountID?: PrimitiveOverrideProps<TextFieldProps>;
    stripeAccountVerified?: PrimitiveOverrideProps<SwitchFieldProps>;
    standardServiceFee?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserHostModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserHostModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userHostModel?: UserHostModel;
    onSubmit?: (fields: UserHostModelUpdateFormInputValues) => UserHostModelUpdateFormInputValues;
    onSuccess?: (fields: UserHostModelUpdateFormInputValues) => void;
    onError?: (fields: UserHostModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHostModelUpdateFormInputValues) => UserHostModelUpdateFormInputValues;
    onValidate?: UserHostModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserHostModelUpdateForm(props: UserHostModelUpdateFormProps): React.ReactElement;
