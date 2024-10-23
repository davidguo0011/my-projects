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
export declare type RoomModelUpdateFormInputValues = {
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
export declare type RoomModelUpdateFormValidationValues = {
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
export declare type RoomModelUpdateFormOverridesProps = {
    RoomModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RoomModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoomModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    roomModel?: any;
    onSubmit?: (fields: RoomModelUpdateFormInputValues) => RoomModelUpdateFormInputValues;
    onSuccess?: (fields: RoomModelUpdateFormInputValues) => void;
    onError?: (fields: RoomModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoomModelUpdateFormInputValues) => RoomModelUpdateFormInputValues;
    onValidate?: RoomModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoomModelUpdateForm(props: RoomModelUpdateFormProps): React.ReactElement;
