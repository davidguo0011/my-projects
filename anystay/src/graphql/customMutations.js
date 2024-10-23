
export const updateUserModelProfile = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
      id
      owner
      email
      phone
      dateOfBirth
      firstName
      lastName
      profileDescription
      profilePicture
      coverPicture
      savedListings
      username
      identityID
      emailConfirmed
      guestMode
      stripeCustomerID
      userIDConfirmed
      privacyPolicyAccepted
      identityDocuments
      facebookURL
      instagramURL
      twitterURL
      tiktokURL
      deactivated
      suspended
      suspendedUntil
      suspendedReason
      createdAt
      updatedAt
    }
  }
`;


export const updateListingModelProfile = /* GraphQL */ `
  mutation UpdateListingModel(
    $input: UpdateListingModelInput!
    $condition: ModelListingModelConditionInput
  ) {
    updateListingModel(input: $input, condition: $condition) {
      id
      owner
      unitNumber
      streetNumber
      street
      suburb
      postcode
      state
      city
      country
      bedrooms
      bathrooms
      propertyType
      typeOfPlace
      propertyDescription
      listingImages
      status
      amenities
      categories
      deposit
      guests
      minimumStay
      minimumPrice
      maximumPrice
      maximumStay
      weeklyMinimumPrice
      weeklyMaximumStay
      location
      propertyTitle
      houseRules
      draft
      verified
      verifiedDocuments
      weeklyDiscount
      monthlyDiscount
      cleaningFee
      cleaningFrequency
      availabilityRange
      rooms
      userhostmodelID
      cancellationPolicy
      onceOffPaymentsOnly
      instantBookEnabled
      stayType
      checkInTime
      checkOutTime
      timeBeforeCheckIn
      timeAfterCheckOut
      extraGuestFee
      extraMaxGuests
      unavailableDates
      iCalUnavailableDates
      straID
      advanceNotice
      advanceNoticeTime
      approved
      standardServiceFee
      checkInInstructions
      checkOutInstructions
      createdAt
      updatedAt
    }
  }
`;