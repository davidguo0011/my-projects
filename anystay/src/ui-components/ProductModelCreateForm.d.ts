/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProductModelCreateFormInputValues = {
    owner?: string;
    productTitle?: string;
    productDescription?: string;
    productType?: string;
    productFulfillmentType?: string;
    productImages?: string[];
    netPrice?: number;
    pricingType?: string;
    inventory?: number;
    location?: string;
    fulfillmentRadius?: number;
    guestOnlyPurchase?: boolean;
    minOrderQuantity?: number;
    maxOrderQuantity?: number;
    minOrderAmount?: number;
    maxOrderAmount?: number;
    maxGuests?: number;
    duration?: number;
    minimumNotice?: number;
    unavailableDates?: string[];
    internalCode?: string;
    unlimitedInventory?: boolean;
    status?: string;
    approved?: boolean;
    draft?: boolean;
    instantBookEnabled?: boolean;
    categories?: string[];
    tags?: string[];
};
export declare type ProductModelCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    productTitle?: ValidationFunction<string>;
    productDescription?: ValidationFunction<string>;
    productType?: ValidationFunction<string>;
    productFulfillmentType?: ValidationFunction<string>;
    productImages?: ValidationFunction<string>;
    netPrice?: ValidationFunction<number>;
    pricingType?: ValidationFunction<string>;
    inventory?: ValidationFunction<number>;
    location?: ValidationFunction<string>;
    fulfillmentRadius?: ValidationFunction<number>;
    guestOnlyPurchase?: ValidationFunction<boolean>;
    minOrderQuantity?: ValidationFunction<number>;
    maxOrderQuantity?: ValidationFunction<number>;
    minOrderAmount?: ValidationFunction<number>;
    maxOrderAmount?: ValidationFunction<number>;
    maxGuests?: ValidationFunction<number>;
    duration?: ValidationFunction<number>;
    minimumNotice?: ValidationFunction<number>;
    unavailableDates?: ValidationFunction<string>;
    internalCode?: ValidationFunction<string>;
    unlimitedInventory?: ValidationFunction<boolean>;
    status?: ValidationFunction<string>;
    approved?: ValidationFunction<boolean>;
    draft?: ValidationFunction<boolean>;
    instantBookEnabled?: ValidationFunction<boolean>;
    categories?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductModelCreateFormOverridesProps = {
    ProductModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    productTitle?: PrimitiveOverrideProps<TextFieldProps>;
    productDescription?: PrimitiveOverrideProps<TextFieldProps>;
    productType?: PrimitiveOverrideProps<TextFieldProps>;
    productFulfillmentType?: PrimitiveOverrideProps<TextFieldProps>;
    productImages?: PrimitiveOverrideProps<TextAreaFieldProps>;
    netPrice?: PrimitiveOverrideProps<TextFieldProps>;
    pricingType?: PrimitiveOverrideProps<TextFieldProps>;
    inventory?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextAreaFieldProps>;
    fulfillmentRadius?: PrimitiveOverrideProps<TextFieldProps>;
    guestOnlyPurchase?: PrimitiveOverrideProps<SwitchFieldProps>;
    minOrderQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    maxOrderQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    minOrderAmount?: PrimitiveOverrideProps<TextFieldProps>;
    maxOrderAmount?: PrimitiveOverrideProps<TextFieldProps>;
    maxGuests?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    minimumNotice?: PrimitiveOverrideProps<TextFieldProps>;
    unavailableDates?: PrimitiveOverrideProps<TextAreaFieldProps>;
    internalCode?: PrimitiveOverrideProps<TextFieldProps>;
    unlimitedInventory?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    approved?: PrimitiveOverrideProps<SwitchFieldProps>;
    draft?: PrimitiveOverrideProps<SwitchFieldProps>;
    instantBookEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    categories?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductModelCreateFormInputValues) => ProductModelCreateFormInputValues;
    onSuccess?: (fields: ProductModelCreateFormInputValues) => void;
    onError?: (fields: ProductModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductModelCreateFormInputValues) => ProductModelCreateFormInputValues;
    onValidate?: ProductModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductModelCreateForm(props: ProductModelCreateFormProps): React.ReactElement;
