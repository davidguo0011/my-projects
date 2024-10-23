// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserModel, UserHostModel, ListingModel, ConversationModel, MessageModel, BookingRequestModel, ChangeBookingRequestModel, ReviewStayModel, ReviewGuestModel, RefundRequestModel, ListingIDVerificationRequestModel, ListingSearchVerificationRequestModel, Notification, HostNotification, Coupon } = initSchema(schema);

export {
  UserModel,
  UserHostModel,
  ListingModel,
  ConversationModel,
  MessageModel,
  BookingRequestModel,
  ChangeBookingRequestModel,
  ReviewStayModel,
  ReviewGuestModel,
  RefundRequestModel,
  ListingIDVerificationRequestModel,
  ListingSearchVerificationRequestModel,
  Notification,
  HostNotification,
  Coupon
};