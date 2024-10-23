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
export declare type TransferModelCreateFormInputValues = {
    transferStatus?: string;
    transferAmount?: number;
    transferDate?: string;
    transferInitiatedAt?: string;
    transferID?: string;
    completed?: boolean;
    hostusermodelID?: string;
    hoststripeaccountID?: string;
};
export declare type TransferModelCreateFormValidationValues = {
    transferStatus?: ValidationFunction<string>;
    transferAmount?: ValidationFunction<number>;
    transferDate?: ValidationFunction<string>;
    transferInitiatedAt?: ValidationFunction<string>;
    transferID?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    hostusermodelID?: ValidationFunction<string>;
    hoststripeaccountID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransferModelCreateFormOverridesProps = {
    TransferModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    transferStatus?: PrimitiveOverrideProps<TextFieldProps>;
    transferAmount?: PrimitiveOverrideProps<TextFieldProps>;
    transferDate?: PrimitiveOverrideProps<TextFieldProps>;
    transferInitiatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    transferID?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    hostusermodelID?: PrimitiveOverrideProps<TextFieldProps>;
    hoststripeaccountID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransferModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TransferModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransferModelCreateFormInputValues) => TransferModelCreateFormInputValues;
    onSuccess?: (fields: TransferModelCreateFormInputValues) => void;
    onError?: (fields: TransferModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransferModelCreateFormInputValues) => TransferModelCreateFormInputValues;
    onValidate?: TransferModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransferModelCreateForm(props: TransferModelCreateFormProps): React.ReactElement;
