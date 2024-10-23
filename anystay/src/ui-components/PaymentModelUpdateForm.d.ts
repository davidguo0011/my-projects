/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PaymentModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentModelUpdateFormInputValues = {
    owners?: string[];
    transferID?: string;
    transferStatus?: string;
    paymentIntentID?: string;
    paymentMethodID?: string;
    paymentStatus?: string;
    paymentAmount?: number;
    couponDiscountAmount?: number;
    couponCode?: string;
    serviceFee?: number;
    cleaningFee?: number;
    extraGuestFeePerNight?: number;
    nights?: number;
    refundedAmount?: number;
    hostusermodelID?: string;
    guestusermodelID?: string;
    hoststripeaccountID?: string;
    paymentCreatedAt?: number;
    charges?: string[];
};
export declare type PaymentModelUpdateFormValidationValues = {
    owners?: ValidationFunction<string>;
    transferID?: ValidationFunction<string>;
    transferStatus?: ValidationFunction<string>;
    paymentIntentID?: ValidationFunction<string>;
    paymentMethodID?: ValidationFunction<string>;
    paymentStatus?: ValidationFunction<string>;
    paymentAmount?: ValidationFunction<number>;
    couponDiscountAmount?: ValidationFunction<number>;
    couponCode?: ValidationFunction<string>;
    serviceFee?: ValidationFunction<number>;
    cleaningFee?: ValidationFunction<number>;
    extraGuestFeePerNight?: ValidationFunction<number>;
    nights?: ValidationFunction<number>;
    refundedAmount?: ValidationFunction<number>;
    hostusermodelID?: ValidationFunction<string>;
    guestusermodelID?: ValidationFunction<string>;
    hoststripeaccountID?: ValidationFunction<string>;
    paymentCreatedAt?: ValidationFunction<number>;
    charges?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentModelUpdateFormOverridesProps = {
    PaymentModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
    transferID?: PrimitiveOverrideProps<TextFieldProps>;
    transferStatus?: PrimitiveOverrideProps<TextFieldProps>;
    paymentIntentID?: PrimitiveOverrideProps<TextFieldProps>;
    paymentMethodID?: PrimitiveOverrideProps<TextFieldProps>;
    paymentStatus?: PrimitiveOverrideProps<TextFieldProps>;
    paymentAmount?: PrimitiveOverrideProps<TextFieldProps>;
    couponDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    couponCode?: PrimitiveOverrideProps<TextFieldProps>;
    serviceFee?: PrimitiveOverrideProps<TextFieldProps>;
    cleaningFee?: PrimitiveOverrideProps<TextFieldProps>;
    extraGuestFeePerNight?: PrimitiveOverrideProps<TextFieldProps>;
    nights?: PrimitiveOverrideProps<TextFieldProps>;
    refundedAmount?: PrimitiveOverrideProps<TextFieldProps>;
    hostusermodelID?: PrimitiveOverrideProps<TextFieldProps>;
    guestusermodelID?: PrimitiveOverrideProps<TextFieldProps>;
    hoststripeaccountID?: PrimitiveOverrideProps<TextFieldProps>;
    paymentCreatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    charges?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    paymentModel?: PaymentModel;
    onSubmit?: (fields: PaymentModelUpdateFormInputValues) => PaymentModelUpdateFormInputValues;
    onSuccess?: (fields: PaymentModelUpdateFormInputValues) => void;
    onError?: (fields: PaymentModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentModelUpdateFormInputValues) => PaymentModelUpdateFormInputValues;
    onValidate?: PaymentModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentModelUpdateForm(props: PaymentModelUpdateFormProps): React.ReactElement;
