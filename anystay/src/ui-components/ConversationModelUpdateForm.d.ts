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
export declare type ConversationModelUpdateFormInputValues = {
    updatedAt?: string;
    owners?: string[];
    listingmodelID?: string;
    externalConversationId?: string;
    externalSyncEnabled?: boolean;
    externalLastSyncedAt?: string;
    guestSeen?: boolean;
    hostSeen?: boolean;
    status?: string;
};
export declare type ConversationModelUpdateFormValidationValues = {
    updatedAt?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
    listingmodelID?: ValidationFunction<string>;
    externalConversationId?: ValidationFunction<string>;
    externalSyncEnabled?: ValidationFunction<boolean>;
    externalLastSyncedAt?: ValidationFunction<string>;
    guestSeen?: ValidationFunction<boolean>;
    hostSeen?: ValidationFunction<boolean>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConversationModelUpdateFormOverridesProps = {
    ConversationModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
    listingmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    externalConversationId?: PrimitiveOverrideProps<TextFieldProps>;
    externalSyncEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    externalLastSyncedAt?: PrimitiveOverrideProps<TextFieldProps>;
    guestSeen?: PrimitiveOverrideProps<SwitchFieldProps>;
    hostSeen?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConversationModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConversationModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conversationModel?: any;
    onSubmit?: (fields: ConversationModelUpdateFormInputValues) => ConversationModelUpdateFormInputValues;
    onSuccess?: (fields: ConversationModelUpdateFormInputValues) => void;
    onError?: (fields: ConversationModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConversationModelUpdateFormInputValues) => ConversationModelUpdateFormInputValues;
    onValidate?: ConversationModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConversationModelUpdateForm(props: ConversationModelUpdateFormProps): React.ReactElement;
