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
export declare type MessageModelUpdateFormInputValues = {
    createdAt?: string;
    tempId?: string;
    owners?: string[];
    body?: string;
    author?: string;
    isNote?: boolean;
    isTimestamp?: boolean;
    hostawayMessageId?: string;
    guestNoteBody?: string;
    hostNoteBody?: string;
};
export declare type MessageModelUpdateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    tempId?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    isNote?: ValidationFunction<boolean>;
    isTimestamp?: ValidationFunction<boolean>;
    hostawayMessageId?: ValidationFunction<string>;
    guestNoteBody?: ValidationFunction<string>;
    hostNoteBody?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessageModelUpdateFormOverridesProps = {
    MessageModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    tempId?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    isNote?: PrimitiveOverrideProps<SwitchFieldProps>;
    isTimestamp?: PrimitiveOverrideProps<SwitchFieldProps>;
    hostawayMessageId?: PrimitiveOverrideProps<TextFieldProps>;
    guestNoteBody?: PrimitiveOverrideProps<TextFieldProps>;
    hostNoteBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MessageModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessageModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    messageModel?: any;
    onSubmit?: (fields: MessageModelUpdateFormInputValues) => MessageModelUpdateFormInputValues;
    onSuccess?: (fields: MessageModelUpdateFormInputValues) => void;
    onError?: (fields: MessageModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessageModelUpdateFormInputValues) => MessageModelUpdateFormInputValues;
    onValidate?: MessageModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MessageModelUpdateForm(props: MessageModelUpdateFormProps): React.ReactElement;
