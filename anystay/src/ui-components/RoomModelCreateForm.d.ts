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
export declare type RoomModelCreateFormInputValues = {
    owner?: string;
    userhostmodelID?: string;
    images?: string[];
    roomTitle?: string;
    roomDescription?: string;
    roomType?: string;
    roomAmenities?: string[];
    roomBeds?: string[];
    isHotelRoom?: boolean;
    disabledDates?: string[];
    unavailableDates?: string[];
    nightlyPrices?: string[];
};
export declare type RoomModelCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    userhostmodelID?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    roomTitle?: ValidationFunction<string>;
    roomDescription?: ValidationFunction<string>;
    roomType?: ValidationFunction<string>;
    roomAmenities?: ValidationFunction<string>;
    roomBeds?: ValidationFunction<string>;
    isHotelRoom?: ValidationFunction<boolean>;
    disabledDates?: ValidationFunction<string>;
    unavailableDates?: ValidationFunction<string>;
    nightlyPrices?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomModelCreateFormOverridesProps = {
    RoomModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    userhostmodelID?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    roomTitle?: PrimitiveOverrideProps<TextFieldProps>;
    roomDescription?: PrimitiveOverrideProps<TextFieldProps>;
    roomType?: PrimitiveOverrideProps<TextFieldProps>;
    roomAmenities?: PrimitiveOverrideProps<TextFieldProps>;
    roomBeds?: PrimitiveOverrideProps<TextFieldProps>;
    isHotelRoom?: PrimitiveOverrideProps<SwitchFieldProps>;
    disabledDates?: PrimitiveOverrideProps<TextAreaFieldProps>;
    unavailableDates?: PrimitiveOverrideProps<TextAreaFieldProps>;
    nightlyPrices?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type RoomModelCreateFormProps = React.PropsWithChildren<{
    overrides?: RoomModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoomModelCreateFormInputValues) => RoomModelCreateFormInputValues;
    onSuccess?: (fields: RoomModelCreateFormInputValues) => void;
    onError?: (fields: RoomModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoomModelCreateFormInputValues) => RoomModelCreateFormInputValues;
    onValidate?: RoomModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoomModelCreateForm(props: RoomModelCreateFormProps): React.ReactElement;
