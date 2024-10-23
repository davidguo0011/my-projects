import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type UserModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type UserHostModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type ListingModelMetaData = {
    readOnlyFields: "updatedAt";
};

type ConversationModelMetaData = {
    readOnlyFields: "createdAt";
};

type MessageModelMetaData = {
    readOnlyFields: "updatedAt";
};

type BookingRequestModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type ChangeBookingRequestModelMetaData = {
    readOnlyFields: "updatedAt";
};

type ReviewStayModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type ReviewGuestModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type RefundRequestModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type ListingIDVerificationRequestModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type ListingSearchVerificationRequestModelMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type NotificationMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type HostNotificationMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type CouponMetaData = {
    readOnlyFields: "createdAt" | "updatedAt";
};

type EagerUserModel = {
    readonly id: string;
    readonly owner: string;
    readonly email: string;
    readonly phone: string;
    readonly dateOfBirth: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly profileDescription?: string | null;
    readonly profilePicture?: string | null;
    readonly coverPicture?: string | null;
    readonly savedListings?: (string | null)[] | null;
    readonly username?: string | null;
    readonly identityID?: string | null;
    readonly guestMode?: boolean | null;
    readonly stripeCustomerID?: string | null;
    readonly phoneConfirmed?: boolean | null;
    readonly emailConfirmed?: boolean | null;
    readonly userIDConfirmed?: boolean | null;
    readonly privacyPolicyAccepted?: boolean | null;
    readonly identityDocuments?: (string | null)[] | null;
    readonly facebookURL?: string | null;
    readonly instagramURL?: string | null;
    readonly twitterURL?: string | null;
    readonly tiktokURL?: string | null;
    readonly deactivated?: boolean | null;
    readonly suspended?: boolean | null;
    readonly suspendedUntil?: string | null;
    readonly ConversationModels?: (ConversationModel | null)[] | null;
    readonly BookingRequestModels?: (BookingRequestModel | null)[] | null;
    readonly Notifications?: (Notification | null)[] | null;
    readonly ReviewGuestModel?: (ReviewGuestModel | null)[] | null;
    readonly suspendedReason?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyUserModel = {
    readonly id: string;
    readonly owner: string;
    readonly email: string;
    readonly phone: string;
    readonly dateOfBirth: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly profileDescription?: string | null;
    readonly profilePicture?: string | null;
    readonly coverPicture?: string | null;
    readonly savedListings?: (string | null)[] | null;
    readonly username?: string | null;
    readonly identityID?: string | null;
    readonly guestMode?: boolean | null;
    readonly stripeCustomerID?: string | null;
    readonly phoneConfirmed?: boolean | null;
    readonly emailConfirmed?: boolean | null;
    readonly userIDConfirmed?: boolean | null;
    readonly privacyPolicyAccepted?: boolean | null;
    readonly identityDocuments?: (string | null)[] | null;
    readonly facebookURL?: string | null;
    readonly instagramURL?: string | null;
    readonly twitterURL?: string | null;
    readonly tiktokURL?: string | null;
    readonly deactivated?: boolean | null;
    readonly suspended?: boolean | null;
    readonly suspendedUntil?: string | null;
    readonly ConversationModels: AsyncCollection<ConversationModel>;
    readonly BookingRequestModels: AsyncCollection<BookingRequestModel>;
    readonly Notifications: AsyncCollection<Notification>;
    readonly ReviewGuestModel: AsyncCollection<ReviewGuestModel>;
    readonly suspendedReason?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel;

export declare const UserModel: (new (init: ModelInit<UserModel, UserModelMetaData>) => UserModel) & {
    copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
};

type EagerUserHostModel = {
    readonly id: string;
    readonly owner: string;
    readonly usermodelID: string;
    readonly stripeAccountID?: string | null;
    readonly stripeAccountVerified?: boolean | null;
    readonly standardServiceFee?: boolean | null;
    readonly UserModel?: UserModel | null;
    readonly ConversationModels?: (ConversationModel | null)[] | null;
    readonly ListingModels?: (ListingModel | null)[] | null;
    readonly BookingRequestModels?: (BookingRequestModel | null)[] | null;
    readonly HostNotifications?: (HostNotification | null)[] | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyUserHostModel = {
    readonly id: string;
    readonly owner: string;
    readonly usermodelID: string;
    readonly stripeAccountID?: string | null;
    readonly stripeAccountVerified?: boolean | null;
    readonly standardServiceFee?: boolean | null;
    readonly UserModel: AsyncItem<UserModel | undefined>;
    readonly ConversationModels: AsyncCollection<ConversationModel>;
    readonly ListingModels: AsyncCollection<ListingModel>;
    readonly BookingRequestModels: AsyncCollection<BookingRequestModel>;
    readonly HostNotifications: AsyncCollection<HostNotification>;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type UserHostModel = LazyLoading extends LazyLoadingDisabled ? EagerUserHostModel : LazyUserHostModel;

export declare const UserHostModel: (new (init: ModelInit<UserHostModel, UserHostModelMetaData>) => UserHostModel) & {
    copyOf(source: UserHostModel, mutator: (draft: MutableModel<UserHostModel, UserHostModelMetaData>) => MutableModel<UserHostModel, UserHostModelMetaData> | void): UserHostModel;
};

type EagerListingModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owner: string;
    readonly placeId?: string | null;
    readonly unitNumber?: number | null;
    readonly streetNumber?: number | null;
    readonly street?: string | null;
    readonly suburb?: string | null;
    readonly postcode?: number | null;
    readonly state?: string | null;
    readonly city?: string | null;
    readonly country?: string | null;
    readonly beds?: number | null;
    readonly bedrooms?: number | null;
    readonly bathrooms?: number | null;
    readonly propertyType?: string | null;
    readonly typeOfPlace?: string | null;
    readonly propertyDescription?: string | null;
    readonly translatedPropertyDescription?: string | null;
    readonly listingImages?: (string | null)[] | null;
    readonly status?: string | null;
    readonly amenities?: (string | null)[] | null;
    readonly categories?: (string | null)[] | null;
    readonly tags?: (string | null)[] | null;
    readonly deposit?: number | null;
    readonly guests?: number | null;
    readonly minimumStay?: number | null;
    readonly minimumPrice?: number | null;
    readonly maximumPrice?: number | null;
    readonly maximumStay?: number | null;
    readonly weeklyMinimumPrice?: number | null;
    readonly weeklyMaximumStay?: number | null;
    readonly location?: string | null;
    readonly propertyTitle?: string | null;
    readonly translatedPropertyTitle?: string | null;
    readonly houseRules?: (string | null)[] | null;
    readonly draft?: boolean | null;
    readonly verified?: boolean | null;
    readonly verifiedDocuments?: (string | null)[] | null;
    readonly weeklyDiscount?: number | null;
    readonly monthlyDiscount?: number | null;
    readonly cleaningFee?: number | null;
    readonly cleaningFrequency?: string | null;
    readonly availabilityRange?: string | null;
    readonly rooms?: (string | null)[] | null;
    readonly UserHostModel?: UserHostModel | null;
    readonly BookingRequestModels?: (BookingRequestModel | null)[] | null;
    readonly ReviewStayModels?: (ReviewStayModel | null)[] | null;
    readonly cancellationPolicy?: string | null;
    readonly onceOffPaymentsOnly?: boolean | null;
    readonly instantBookEnabled?: boolean | null;
    readonly stayType?: string | null;
    readonly checkInTime?: number | null;
    readonly checkOutTime?: number | null;
    readonly timeBeforeCheckIn?: number | null;
    readonly timeAfterCheckOut?: number | null;
    readonly extraGuestFee?: number | null;
    readonly extraMaxGuests?: number | null;
    readonly disabledDates?: (string | null)[] | null;
    readonly unavailableDates?: (string | null)[] | null;
    readonly iCalUnavailableDates?: (string | null)[] | null;
    readonly iCalImportLinks?: (string | null)[] | null;
    readonly straID?: string | null;
    readonly advanceNotice?: number | null;
    readonly advanceNoticeTime?: number | null;
    readonly approved?: boolean | null;
    readonly standardServiceFee?: boolean | null;
    readonly fliggyApproved?: boolean | null;
    readonly fliggyHidden?: boolean | null;
    readonly fliggyID?: string | null;
    readonly updatedAt?: string | null;
};

type LazyListingModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owner: string;
    readonly placeId?: string | null;
    readonly unitNumber?: number | null;
    readonly streetNumber?: number | null;
    readonly street?: string | null;
    readonly suburb?: string | null;
    readonly postcode?: number | null;
    readonly state?: string | null;
    readonly city?: string | null;
    readonly country?: string | null;
    readonly beds?: number | null;
    readonly bedrooms?: number | null;
    readonly bathrooms?: number | null;
    readonly propertyType?: string | null;
    readonly typeOfPlace?: string | null;
    readonly propertyDescription?: string | null;
    readonly translatedPropertyDescription?: string | null;
    readonly listingImages?: (string | null)[] | null;
    readonly status?: string | null;
    readonly amenities?: (string | null)[] | null;
    readonly categories?: (string | null)[] | null;
    readonly tags?: (string | null)[] | null;
    readonly deposit?: number | null;
    readonly guests?: number | null;
    readonly minimumStay?: number | null;
    readonly minimumPrice?: number | null;
    readonly maximumPrice?: number | null;
    readonly maximumStay?: number | null;
    readonly weeklyMinimumPrice?: number | null;
    readonly weeklyMaximumStay?: number | null;
    readonly location?: string | null;
    readonly propertyTitle?: string | null;
    readonly translatedPropertyTitle?: string | null;
    readonly houseRules?: (string | null)[] | null;
    readonly draft?: boolean | null;
    readonly verified?: boolean | null;
    readonly verifiedDocuments?: (string | null)[] | null;
    readonly weeklyDiscount?: number | null;
    readonly monthlyDiscount?: number | null;
    readonly cleaningFee?: number | null;
    readonly cleaningFrequency?: string | null;
    readonly availabilityRange?: string | null;
    readonly rooms?: (string | null)[] | null;
    readonly UserHostModel: AsyncItem<UserHostModel | undefined>;
    readonly BookingRequestModels: AsyncCollection<BookingRequestModel>;
    readonly ReviewStayModels: AsyncCollection<ReviewStayModel>;
    readonly cancellationPolicy?: string | null;
    readonly onceOffPaymentsOnly?: boolean | null;
    readonly instantBookEnabled?: boolean | null;
    readonly stayType?: string | null;
    readonly checkInTime?: number | null;
    readonly checkOutTime?: number | null;
    readonly timeBeforeCheckIn?: number | null;
    readonly timeAfterCheckOut?: number | null;
    readonly extraGuestFee?: number | null;
    readonly extraMaxGuests?: number | null;
    readonly disabledDates?: (string | null)[] | null;
    readonly unavailableDates?: (string | null)[] | null;
    readonly iCalUnavailableDates?: (string | null)[] | null;
    readonly iCalImportLinks?: (string | null)[] | null;
    readonly straID?: string | null;
    readonly advanceNotice?: number | null;
    readonly advanceNoticeTime?: number | null;
    readonly approved?: boolean | null;
    readonly standardServiceFee?: boolean | null;
    readonly fliggyApproved?: boolean | null;
    readonly fliggyHidden?: boolean | null;
    readonly fliggyID?: string | null;
    readonly updatedAt?: string | null;
};

export declare type ListingModel = LazyLoading extends LazyLoadingDisabled ? EagerListingModel : LazyListingModel;

export declare const ListingModel: (new (init: ModelInit<ListingModel, ListingModelMetaData>) => ListingModel) & {
    copyOf(source: ListingModel, mutator: (draft: MutableModel<ListingModel, ListingModelMetaData>) => MutableModel<ListingModel, ListingModelMetaData> | void): ListingModel;
};

type EagerConversationModel = {
    readonly id: string;
    readonly updatedAt?: string | null;
    readonly owners?: string[] | null;
    readonly listingmodelID?: string | null;
    readonly guestSeen?: boolean | null;
    readonly hostSeen?: boolean | null;
    readonly status?: string | null;
    readonly UserModel?: UserModel | null;
    readonly UserHostModel?: UserHostModel | null;
    readonly BookingRequestModel?: BookingRequestModel | null;
    readonly MessageModels?: (MessageModel | null)[] | null;
    readonly createdAt?: string | null;
};

type LazyConversationModel = {
    readonly id: string;
    readonly updatedAt?: string | null;
    readonly owners?: string[] | null;
    readonly listingmodelID?: string | null;
    readonly guestSeen?: boolean | null;
    readonly hostSeen?: boolean | null;
    readonly status?: string | null;
    readonly UserModel: AsyncItem<UserModel | undefined>;
    readonly UserHostModel: AsyncItem<UserHostModel | undefined>;
    readonly BookingRequestModel: AsyncItem<BookingRequestModel | undefined>;
    readonly MessageModels: AsyncCollection<MessageModel>;
    readonly createdAt?: string | null;
};

export declare type ConversationModel = LazyLoading extends LazyLoadingDisabled ? EagerConversationModel : LazyConversationModel;

export declare const ConversationModel: (new (init: ModelInit<ConversationModel, ConversationModelMetaData>) => ConversationModel) & {
    copyOf(
        source: ConversationModel,
        mutator: (draft: MutableModel<ConversationModel, ConversationModelMetaData>) => MutableModel<ConversationModel, ConversationModelMetaData> | void
    ): ConversationModel;
};

type EagerMessageModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owners?: (string | null)[] | null;
    readonly body?: string | null;
    readonly author?: string | null;
    readonly conversationmodelID?: string | null;
    readonly isNote?: boolean | null;
    readonly isTimestamp?: boolean | null;
    readonly guestNoteBody?: string | null;
    readonly hostNoteBody?: string | null;
    readonly updatedAt?: string | null;
};

type LazyMessageModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owners?: (string | null)[] | null;
    readonly body?: string | null;
    readonly author?: string | null;
    readonly conversationmodelID?: string | null;
    readonly isNote?: boolean | null;
    readonly isTimestamp?: boolean | null;
    readonly guestNoteBody?: string | null;
    readonly hostNoteBody?: string | null;
    readonly updatedAt?: string | null;
};

export declare type MessageModel = LazyLoading extends LazyLoadingDisabled ? EagerMessageModel : LazyMessageModel;

export declare const MessageModel: (new (init: ModelInit<MessageModel, MessageModelMetaData>) => MessageModel) & {
    copyOf(source: MessageModel, mutator: (draft: MutableModel<MessageModel, MessageModelMetaData>) => MutableModel<MessageModel, MessageModelMetaData> | void): MessageModel;
};

type EagerBookingRequestModel = {
    readonly id: string;
    readonly owners?: string[] | null;
    readonly arrivalDate?: string | null;
    readonly departureDate?: string | null;
    readonly guests?: number | null;
    readonly adults?: number | null;
    readonly children?: number | null;
    readonly infants?: number | null;
    readonly pets?: number | null;
    readonly maxGuests?: number | null;
    readonly expired?: boolean | null;
    readonly paymentmodelID?: string | null;
    readonly stripeAccountID?: string | null;
    readonly confirmationCode?: string | null;
    readonly conversationmodelID?: string | null;
    readonly confirmed?: boolean | null;
    readonly confirmedAt?: string | null;
    readonly couponCode?: string | null;
    readonly couponDiscountAmount?: number | null;
    readonly declined?: boolean | null;
    readonly reasonDeclined?: string | null;
    readonly cancelled?: boolean | null;
    readonly cancelledAt?: string | null;
    readonly cancelledBy?: string | null;
    readonly reasonCancelled?: string | null;
    readonly completed?: boolean | null;
    readonly stayReviewed?: boolean | null;
    readonly guestReviewed?: boolean | null;
    readonly checkInTime?: number | null;
    readonly checkOutTime?: number | null;
    readonly cancellationPolicy?: string | null;
    readonly bookingAmount?: number | null;
    readonly bookingAmountIncludingServiceFee?: number | null;
    readonly paymentAmount?: number | null;
    readonly pricePerNight?: number | null;
    readonly serviceFee?: number | null;
    readonly cleaningFee?: number | null;
    readonly extraGuestFee?: number | null;
    readonly extraMaxGuests?: number | null;
    readonly weeklyDiscount?: number | null;
    readonly monthlyDiscount?: number | null;
    readonly paymentModels?: (string | null)[] | null;
    readonly transferModels?: (string | null)[] | null;
    readonly refundModels?: (string | null)[] | null;
    readonly transferReversalModels?: (string | null)[] | null;
    readonly UserModel?: UserModel | null;
    readonly UserHostModel?: UserHostModel | null;
    readonly ListingModel?: ListingModel | null;
    readonly ConversationModel?: (ConversationModel | null)[] | null;
    readonly ChangeBookingRequestModel?: (ChangeBookingRequestModel | null)[] | null;
    readonly RefundRequestModel?: (RefundRequestModel | null)[] | null;
    readonly deposit?: number | null;
    readonly refundedAmount?: number | null;
    readonly standardServiceFee?: boolean | null;
    readonly hostPaid?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyBookingRequestModel = {
    readonly id: string;
    readonly owners?: string[] | null;
    readonly arrivalDate?: string | null;
    readonly departureDate?: string | null;
    readonly guests?: number | null;
    readonly adults?: number | null;
    readonly children?: number | null;
    readonly infants?: number | null;
    readonly pets?: number | null;
    readonly maxGuests?: number | null;
    readonly expired?: boolean | null;
    readonly paymentmodelID?: string | null;
    readonly stripeAccountID?: string | null;
    readonly confirmationCode?: string | null;
    readonly conversationmodelID?: string | null;
    readonly confirmed?: boolean | null;
    readonly confirmedAt?: string | null;
    readonly couponCode?: string | null;
    readonly couponDiscountAmount?: number | null;
    readonly declined?: boolean | null;
    readonly reasonDeclined?: string | null;
    readonly cancelled?: boolean | null;
    readonly cancelledAt?: string | null;
    readonly cancelledBy?: string | null;
    readonly reasonCancelled?: string | null;
    readonly completed?: boolean | null;
    readonly stayReviewed?: boolean | null;
    readonly guestReviewed?: boolean | null;
    readonly checkInTime?: number | null;
    readonly checkOutTime?: number | null;
    readonly cancellationPolicy?: string | null;
    readonly bookingAmount?: number | null;
    readonly bookingAmountIncludingServiceFee?: number | null;
    readonly paymentAmount?: number | null;
    readonly pricePerNight?: number | null;
    readonly serviceFee?: number | null;
    readonly cleaningFee?: number | null;
    readonly extraGuestFee?: number | null;
    readonly extraMaxGuests?: number | null;
    readonly weeklyDiscount?: number | null;
    readonly monthlyDiscount?: number | null;
    readonly paymentModels?: (string | null)[] | null;
    readonly transferModels?: (string | null)[] | null;
    readonly refundModels?: (string | null)[] | null;
    readonly transferReversalModels?: (string | null)[] | null;
    readonly UserModel: AsyncItem<UserModel | undefined>;
    readonly UserHostModel: AsyncItem<UserHostModel | undefined>;
    readonly ListingModel: AsyncItem<ListingModel | undefined>;
    readonly ConversationModel: AsyncCollection<ConversationModel>;
    readonly ChangeBookingRequestModel: AsyncCollection<ChangeBookingRequestModel>;
    readonly RefundRequestModel: AsyncCollection<RefundRequestModel>;
    readonly deposit?: number | null;
    readonly refundedAmount?: number | null;
    readonly standardServiceFee?: boolean | null;
    readonly hostPaid?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type BookingRequestModel = LazyLoading extends LazyLoadingDisabled ? EagerBookingRequestModel : LazyBookingRequestModel;

export declare const BookingRequestModel: (new (init: ModelInit<BookingRequestModel, BookingRequestModelMetaData>) => BookingRequestModel) & {
    copyOf(
        source: BookingRequestModel,
        mutator: (draft: MutableModel<BookingRequestModel, BookingRequestModelMetaData>) => MutableModel<BookingRequestModel, BookingRequestModelMetaData> | void
    ): BookingRequestModel;
};

type EagerChangeBookingRequestModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owners?: string[] | null;
    readonly bookingRequestID: string;
    readonly newArrivalDate?: string | null;
    readonly newDepartureDate?: string | null;
    readonly newGuests?: number | null;
    readonly newAdults?: number | null;
    readonly newChildren?: number | null;
    readonly newInfants?: number | null;
    readonly newPets?: number | null;
    readonly paymentIntentID?: string | null;
    readonly bookingAmount?: number | null;
    readonly bookingAmountIncludingServiceFee?: number | null;
    readonly serviceFee?: number | null;
    readonly newBookingAmount?: number | null;
    readonly newServiceFee?: number | null;
    readonly newBookingAmountIncludingServiceFee?: number | null;
    readonly priceDifference?: number | null;
    readonly serviceFeePriceDifference?: number | null;
    readonly confirmed?: boolean | null;
    readonly declined?: boolean | null;
    readonly completed?: boolean | null;
    readonly updatedAt?: string | null;
};

type LazyChangeBookingRequestModel = {
    readonly id: string;
    readonly createdAt?: string | null;
    readonly owners?: string[] | null;
    readonly bookingRequestID: string;
    readonly newArrivalDate?: string | null;
    readonly newDepartureDate?: string | null;
    readonly newGuests?: number | null;
    readonly newAdults?: number | null;
    readonly newChildren?: number | null;
    readonly newInfants?: number | null;
    readonly newPets?: number | null;
    readonly paymentIntentID?: string | null;
    readonly bookingAmount?: number | null;
    readonly bookingAmountIncludingServiceFee?: number | null;
    readonly serviceFee?: number | null;
    readonly newBookingAmount?: number | null;
    readonly newServiceFee?: number | null;
    readonly newBookingAmountIncludingServiceFee?: number | null;
    readonly priceDifference?: number | null;
    readonly serviceFeePriceDifference?: number | null;
    readonly confirmed?: boolean | null;
    readonly declined?: boolean | null;
    readonly completed?: boolean | null;
    readonly updatedAt?: string | null;
};

export declare type ChangeBookingRequestModel = LazyLoading extends LazyLoadingDisabled ? EagerChangeBookingRequestModel : LazyChangeBookingRequestModel;

export declare const ChangeBookingRequestModel: (new (init: ModelInit<ChangeBookingRequestModel, ChangeBookingRequestModelMetaData>) => ChangeBookingRequestModel) & {
    copyOf(
        source: ChangeBookingRequestModel,
        mutator: (draft: MutableModel<ChangeBookingRequestModel, ChangeBookingRequestModelMetaData>) => MutableModel<ChangeBookingRequestModel, ChangeBookingRequestModelMetaData> | void
    ): ChangeBookingRequestModel;
};

type EagerReviewStayModel = {
    readonly id: string;
    readonly bookingRequestID: string;
    readonly listingmodelID?: string | null;
    readonly usermodelID?: string | null;
    readonly overall?: number | null;
    readonly communication?: number | null;
    readonly amenities?: number | null;
    readonly cleaning?: number | null;
    readonly location?: number | null;
    readonly service?: number | null;
    readonly value?: number | null;
    readonly body?: string | null;
    readonly completed?: boolean | null;
    readonly hidden?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyReviewStayModel = {
    readonly id: string;
    readonly bookingRequestID: string;
    readonly listingmodelID?: string | null;
    readonly usermodelID?: string | null;
    readonly overall?: number | null;
    readonly communication?: number | null;
    readonly amenities?: number | null;
    readonly cleaning?: number | null;
    readonly location?: number | null;
    readonly service?: number | null;
    readonly value?: number | null;
    readonly body?: string | null;
    readonly completed?: boolean | null;
    readonly hidden?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type ReviewStayModel = LazyLoading extends LazyLoadingDisabled ? EagerReviewStayModel : LazyReviewStayModel;

export declare const ReviewStayModel: (new (init: ModelInit<ReviewStayModel, ReviewStayModelMetaData>) => ReviewStayModel) & {
    copyOf(source: ReviewStayModel, mutator: (draft: MutableModel<ReviewStayModel, ReviewStayModelMetaData>) => MutableModel<ReviewStayModel, ReviewStayModelMetaData> | void): ReviewStayModel;
};

type EagerReviewGuestModel = {
    readonly id: string;
    readonly bookingRequestID: string;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly overall?: number | null;
    readonly communication?: number | null;
    readonly cleanliness?: number | null;
    readonly body?: string | null;
    readonly completed?: boolean | null;
    readonly hidden?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyReviewGuestModel = {
    readonly id: string;
    readonly bookingRequestID: string;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly overall?: number | null;
    readonly communication?: number | null;
    readonly cleanliness?: number | null;
    readonly body?: string | null;
    readonly completed?: boolean | null;
    readonly hidden?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type ReviewGuestModel = LazyLoading extends LazyLoadingDisabled ? EagerReviewGuestModel : LazyReviewGuestModel;

export declare const ReviewGuestModel: (new (init: ModelInit<ReviewGuestModel, ReviewGuestModelMetaData>) => ReviewGuestModel) & {
    copyOf(source: ReviewGuestModel, mutator: (draft: MutableModel<ReviewGuestModel, ReviewGuestModelMetaData>) => MutableModel<ReviewGuestModel, ReviewGuestModelMetaData> | void): ReviewGuestModel;
};

type EagerRefundRequestModel = {
    readonly id: string;
    readonly bookingRequestID?: string | null;
    readonly confirmed?: boolean | null;
    readonly declined?: boolean | null;
    readonly completed?: boolean | null;
    readonly refundAmount?: number | null;
    readonly refundReason?: string | null;
    readonly refundMessage?: string | null;
    readonly status?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyRefundRequestModel = {
    readonly id: string;
    readonly bookingRequestID?: string | null;
    readonly confirmed?: boolean | null;
    readonly declined?: boolean | null;
    readonly completed?: boolean | null;
    readonly refundAmount?: number | null;
    readonly refundReason?: string | null;
    readonly refundMessage?: string | null;
    readonly status?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type RefundRequestModel = LazyLoading extends LazyLoadingDisabled ? EagerRefundRequestModel : LazyRefundRequestModel;

export declare const RefundRequestModel: (new (init: ModelInit<RefundRequestModel, RefundRequestModelMetaData>) => RefundRequestModel) & {
    copyOf(
        source: RefundRequestModel,
        mutator: (draft: MutableModel<RefundRequestModel, RefundRequestModelMetaData>) => MutableModel<RefundRequestModel, RefundRequestModelMetaData> | void
    ): RefundRequestModel;
};

type EagerListingIDVerificationRequestModel = {
    readonly id: string;
    readonly listingmodelID: string;
    readonly privateBucket?: string | null;
    readonly verificationDocuments?: (string | null)[] | null;
    readonly completed?: boolean | null;
    readonly confirmed?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyListingIDVerificationRequestModel = {
    readonly id: string;
    readonly listingmodelID: string;
    readonly privateBucket?: string | null;
    readonly verificationDocuments?: (string | null)[] | null;
    readonly completed?: boolean | null;
    readonly confirmed?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type ListingIDVerificationRequestModel = LazyLoading extends LazyLoadingDisabled ? EagerListingIDVerificationRequestModel : LazyListingIDVerificationRequestModel;

export declare const ListingIDVerificationRequestModel: (new (init: ModelInit<ListingIDVerificationRequestModel, ListingIDVerificationRequestModelMetaData>) => ListingIDVerificationRequestModel) & {
    copyOf(
        source: ListingIDVerificationRequestModel,
        mutator: (
            draft: MutableModel<ListingIDVerificationRequestModel, ListingIDVerificationRequestModelMetaData>
        ) => MutableModel<ListingIDVerificationRequestModel, ListingIDVerificationRequestModelMetaData> | void
    ): ListingIDVerificationRequestModel;
};

type EagerListingSearchVerificationRequestModel = {
    readonly id: string;
    readonly listingmodelID: string;
    readonly completed?: boolean | null;
    readonly confirmed?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyListingSearchVerificationRequestModel = {
    readonly id: string;
    readonly listingmodelID: string;
    readonly completed?: boolean | null;
    readonly confirmed?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type ListingSearchVerificationRequestModel = LazyLoading extends LazyLoadingDisabled ? EagerListingSearchVerificationRequestModel : LazyListingSearchVerificationRequestModel;

export declare const ListingSearchVerificationRequestModel: (new (
    init: ModelInit<ListingSearchVerificationRequestModel, ListingSearchVerificationRequestModelMetaData>
) => ListingSearchVerificationRequestModel) & {
    copyOf(
        source: ListingSearchVerificationRequestModel,
        mutator: (
            draft: MutableModel<ListingSearchVerificationRequestModel, ListingSearchVerificationRequestModelMetaData>
        ) => MutableModel<ListingSearchVerificationRequestModel, ListingSearchVerificationRequestModelMetaData> | void
    ): ListingSearchVerificationRequestModel;
};

type EagerNotification = {
    readonly id: string;
    readonly owner: string;
    readonly title?: string | null;
    readonly message?: string | null;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly listingmodelID?: string | null;
    readonly read?: boolean | null;
    readonly category?: string | null;
    readonly eventUrl?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyNotification = {
    readonly id: string;
    readonly owner: string;
    readonly title?: string | null;
    readonly message?: string | null;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly listingmodelID?: string | null;
    readonly read?: boolean | null;
    readonly category?: string | null;
    readonly eventUrl?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification;

export declare const Notification: (new (init: ModelInit<Notification, NotificationMetaData>) => Notification) & {
    copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
};

type EagerHostNotification = {
    readonly id: string;
    readonly owner: string;
    readonly title?: string | null;
    readonly message?: string | null;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly listingmodelID?: string | null;
    readonly read?: boolean | null;
    readonly category?: string | null;
    readonly eventUrl?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyHostNotification = {
    readonly id: string;
    readonly owner: string;
    readonly title?: string | null;
    readonly message?: string | null;
    readonly usermodelID?: string | null;
    readonly userhostmodelID?: string | null;
    readonly listingmodelID?: string | null;
    readonly read?: boolean | null;
    readonly category?: string | null;
    readonly eventUrl?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type HostNotification = LazyLoading extends LazyLoadingDisabled ? EagerHostNotification : LazyHostNotification;

export declare const HostNotification: (new (init: ModelInit<HostNotification, HostNotificationMetaData>) => HostNotification) & {
    copyOf(source: HostNotification, mutator: (draft: MutableModel<HostNotification, HostNotificationMetaData>) => MutableModel<HostNotification, HostNotificationMetaData> | void): HostNotification;
};

type EagerCoupon = {
    readonly id: string;
    readonly expireDate?: string | null;
    readonly beginDate?: string | null;
    readonly discountAmount?: number | null;
    readonly discountPercent?: number | null;
    readonly maxDiscountAmount?: number | null;
    readonly minAmount?: number | null;
    readonly couponCode: string;
    readonly timesRedeemed?: number | null;
    readonly valid?: boolean | null;
    readonly exclusive?: boolean | null;
    readonly validUsers?: (string | null)[] | null;
    readonly oneTimeUse?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

type LazyCoupon = {
    readonly id: string;
    readonly expireDate?: string | null;
    readonly beginDate?: string | null;
    readonly discountAmount?: number | null;
    readonly discountPercent?: number | null;
    readonly maxDiscountAmount?: number | null;
    readonly minAmount?: number | null;
    readonly couponCode: string;
    readonly timesRedeemed?: number | null;
    readonly valid?: boolean | null;
    readonly exclusive?: boolean | null;
    readonly validUsers?: (string | null)[] | null;
    readonly oneTimeUse?: boolean | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;
};

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon;

export declare const Coupon: (new (init: ModelInit<Coupon, CouponMetaData>) => Coupon) & {
    copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon, CouponMetaData>) => MutableModel<Coupon, CouponMetaData> | void): Coupon;
};
