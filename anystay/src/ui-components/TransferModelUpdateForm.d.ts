/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TransferModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransferModelUpdateFormInputValues = {
    transferStatus?: string;
    transferAmount?: number;
    transferDate?: string;
    transferInitiatedAt?: string;
    transferID?: string;
    completed?: boolean;
    hostusermodelID?: string;
    hoststripeaccountID?: string;
};
export declare type TransferModelUpdateFormValidationValues = {
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
export declare type TransferModelUpdateFormOverridesProps = {
    TransferModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    transferStatus?: PrimitiveOverrideProps<TextFieldProps>;
    transferAmount?: PrimitiveOverrideProps<TextFieldProps>;
    transferDate?: PrimitiveOverrideProps<TextFieldProps>;
    transferInitiatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    transferID?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    hostusermodelID?: PrimitiveOverrideProps<TextFieldProps>;
    hoststripeaccountID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransferModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransferModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transferModel?: TransferModel;
    onSubmit?: (fields: TransferModelUpdateFormInputValues) => TransferModelUpdateFormInputValues;
    onSuccess?: (fields: TransferModelUpdateFormInputValues) => void;
    onError?: (fields: TransferModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransferModelUpdateFormInputValues) => TransferModelUpdateFormInputValues;
    onValidate?: TransferModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransferModelUpdateForm(props: TransferModelUpdateFormProps): React.ReactElement;
