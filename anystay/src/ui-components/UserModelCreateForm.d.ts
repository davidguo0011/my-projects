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
export declare type UserModelCreateFormInputValues = {
    owner?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    firstName?: string;
    lastName?: string;
    profileDescription?: string;
    profilePicture?: string;
    coverPicture?: string;
    savedListings?: string[];
    username?: string;
    identityID?: string;
    guestMode?: boolean;
    stripeCustomerID?: string;
    phoneConfirmed?: boolean;
    emailConfirmed?: boolean;
    userIDConfirmed?: boolean;
    privacyPolicyAccepted?: boolean;
    identityDocuments?: string[];
    facebookURL?: string;
    instagramURL?: string;
    twitterURL?: string;
    tiktokURL?: string;
    overallAverage?: number;
    communicationAverage?: number;
    cleanlinessAverage?: number;
    referredBy?: string;
    referralCode?: string;
    deactivated?: boolean;
    suspended?: boolean;
    suspendedUntil?: string;
    suspendedReason?: string;
    externalSignOn?: boolean;
    externalSignOnCompleted?: boolean;
    xiaozhuUserId?: string;
};
export declare type UserModelCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    profileDescription?: ValidationFunction<string>;
    profilePicture?: ValidationFunction<string>;
    coverPicture?: ValidationFunction<string>;
    savedListings?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    identityID?: ValidationFunction<string>;
    guestMode?: ValidationFunction<boolean>;
    stripeCustomerID?: ValidationFunction<string>;
    phoneConfirmed?: ValidationFunction<boolean>;
    emailConfirmed?: ValidationFunction<boolean>;
    userIDConfirmed?: ValidationFunction<boolean>;
    privacyPolicyAccepted?: ValidationFunction<boolean>;
    identityDocuments?: ValidationFunction<string>;
    facebookURL?: ValidationFunction<string>;
    instagramURL?: ValidationFunction<string>;
    twitterURL?: ValidationFunction<string>;
    tiktokURL?: ValidationFunction<string>;
    overallAverage?: ValidationFunction<number>;
    communicationAverage?: ValidationFunction<number>;
    cleanlinessAverage?: ValidationFunction<number>;
    referredBy?: ValidationFunction<string>;
    referralCode?: ValidationFunction<string>;
    deactivated?: ValidationFunction<boolean>;
    suspended?: ValidationFunction<boolean>;
    suspendedUntil?: ValidationFunction<string>;
    suspendedReason?: ValidationFunction<string>;
    externalSignOn?: ValidationFunction<boolean>;
    externalSignOnCompleted?: ValidationFunction<boolean>;
    xiaozhuUserId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserModelCreateFormOverridesProps = {
    UserModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    profileDescription?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicture?: PrimitiveOverrideProps<TextFieldProps>;
    coverPicture?: PrimitiveOverrideProps<TextFieldProps>;
    savedListings?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    identityID?: PrimitiveOverrideProps<TextFieldProps>;
    guestMode?: PrimitiveOverrideProps<SwitchFieldProps>;
    stripeCustomerID?: PrimitiveOverrideProps<TextFieldProps>;
    phoneConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    emailConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    userIDConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    privacyPolicyAccepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    identityDocuments?: PrimitiveOverrideProps<TextFieldProps>;
    facebookURL?: PrimitiveOverrideProps<TextFieldProps>;
    instagramURL?: PrimitiveOverrideProps<TextFieldProps>;
    twitterURL?: PrimitiveOverrideProps<TextFieldProps>;
    tiktokURL?: PrimitiveOverrideProps<TextFieldProps>;
    overallAverage?: PrimitiveOverrideProps<TextFieldProps>;
    communicationAverage?: PrimitiveOverrideProps<TextFieldProps>;
    cleanlinessAverage?: PrimitiveOverrideProps<TextFieldProps>;
    referredBy?: PrimitiveOverrideProps<TextFieldProps>;
    referralCode?: PrimitiveOverrideProps<TextFieldProps>;
    deactivated?: PrimitiveOverrideProps<SwitchFieldProps>;
    suspended?: PrimitiveOverrideProps<SwitchFieldProps>;
    suspendedUntil?: PrimitiveOverrideProps<TextFieldProps>;
    suspendedReason?: PrimitiveOverrideProps<TextFieldProps>;
    externalSignOn?: PrimitiveOverrideProps<SwitchFieldProps>;
    externalSignOnCompleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    xiaozhuUserId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UserModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onSuccess?: (fields: UserModelCreateFormInputValues) => void;
    onError?: (fields: UserModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserModelCreateFormInputValues) => UserModelCreateFormInputValues;
    onValidate?: UserModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserModelCreateForm(props: UserModelCreateFormProps): React.ReactElement;
