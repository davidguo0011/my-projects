/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
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
      guestMode
      stripeCustomerID
      phoneConfirmed
      emailConfirmed
      userIDConfirmed
      privacyPolicyAccepted
      identityDocuments
      facebookURL
      instagramURL
      twitterURL
      tiktokURL
      overallAverage
      communicationAverage
      cleanlinessAverage
      referredBy
      referralCode
      deactivated
      suspended
      suspendedUntil
      suspendedReason
      externalSignOn
      externalSignOnCompleted
      xiaozhuUserId
      ConversationModels {
        nextToken
        __typename
      }
      BookingRequestModels {
        nextToken
        __typename
      }
      OrderModels {
        nextToken
        __typename
      }
      Notifications {
        nextToken
        __typename
      }
      ReviewGuestModel {
        nextToken
        __typename
      }
      ReviewStayModels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      __typename
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userModelByEmail = /* GraphQL */ `
  query UserModelByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userModelByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userModelByPhone = /* GraphQL */ `
  query UserModelByPhone(
    $phone: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userModelByPhone(
      phone: $phone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userModelByUsername = /* GraphQL */ `
  query UserModelByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userModelByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userModelByXiaozhuUserId = /* GraphQL */ `
  query UserModelByXiaozhuUserId(
    $xiaozhuUserId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userModelByXiaozhuUserId(
      xiaozhuUserId: $xiaozhuUserId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserHostModel = /* GraphQL */ `
  query GetUserHostModel($id: ID!) {
    getUserHostModel(id: $id) {
      id
      owners
      primaryOwner
      readOnlyOwners
      usermodelID
      stripeAccountID
      stripeAccountVerified
      standardServiceFee
      totalListings
      UserModel {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      ConversationModels {
        nextToken
        __typename
      }
      ListingModels {
        nextToken
        __typename
      }
      ProductModels {
        nextToken
        __typename
      }
      BookingRequestModels {
        nextToken
        __typename
      }
      OrderModels {
        nextToken
        __typename
      }
      ReviewGuestModels {
        nextToken
        __typename
      }
      piggyUpdatedAt
      hostawayKey
      hostawaySecret
      homeheroAPIKey
      guestyKey
      guestySecret
      hospitableChannelActivated
      hospitableRedirectUrl
      hospitableRedirectUrlExpiry
      hospitableAccessToken
      hospitableRefreshToken
      invitedUsers
      readOnlyInvitedUsers
      lodgifyAppId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserHostModels = /* GraphQL */ `
  query ListUserHostModels(
    $filter: ModelUserHostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserHostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userHostModelByPrimaryOwner = /* GraphQL */ `
  query UserHostModelByPrimaryOwner(
    $primaryOwner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserHostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userHostModelByPrimaryOwner(
      primaryOwner: $primaryOwner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userHostModelByUsermodelID = /* GraphQL */ `
  query UserHostModelByUsermodelID(
    $usermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserHostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userHostModelByUsermodelID(
      usermodelID: $usermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userHostModelByStripeAccountID = /* GraphQL */ `
  query UserHostModelByStripeAccountID(
    $stripeAccountID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserHostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userHostModelByStripeAccountID(
      stripeAccountID: $stripeAccountID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListingModel = /* GraphQL */ `
  query GetListingModel($id: ID!) {
    getListingModel(id: $id) {
      id
      createdAt
      owners
      readOnlyOwners
      placeId
      unitNumber
      streetNumber
      street
      suburb
      postcode
      state
      stateShort
      city
      country
      beds
      bedrooms
      bathrooms
      propertyType
      typeOfPlace
      propertyDescription
      propertyDescriptionEmbedding
      propertySoftEmbedding
      trainingEvolutions
      translatedPropertyDescription
      listingImages
      status
      amenities
      categories
      tags
      deposit
      guests
      minimumStay
      minimumPrice
      maximumPrice
      nightlyPrices
      maximumStay
      weeklyMinimumPrice
      weeklyMaximumStay
      location
      propertyTitle
      internalName
      translatedPropertyTitle
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
      RoomModels {
        nextToken
        __typename
      }
      userhostmodelID
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      ProductModels {
        nextToken
        __typename
      }
      BookingRequestModels {
        nextToken
        __typename
      }
      ReviewStayModels {
        nextToken
        __typename
      }
      totalReviews
      qualityScore
      overallAverage
      communicationAverage
      amenitiesAverage
      cleaningAverage
      locationAverage
      serviceAverage
      valueAverage
      cancellationPolicy
      onceOffPaymentsOnly
      instantBookEnabled
      stayType
      averageStayLength
      checkInTime
      checkOutTime
      checkInInstructions
      checkOutInstructions
      timeBeforeCheckIn
      timeAfterCheckOut
      extraGuestFee
      extraMaxGuests
      disabledDates
      unavailableDates
      iCalUnavailableDates
      iCalImportLinks
      straID
      advanceNotice
      advanceNoticeTime
      approved
      standardServiceFee
      fliggyApproved
      fliggyHidden
      fliggyID
      wifiName
      wifiPassword
      piggyApproved
      piggyUpdatedAt
      areaValue
      areaUnit
      xiaozhuRoomId
      xiaozhuReviewApproved
      xiaozhuAddressId
      xiaozhuRejectReasons
      customServiceFeePercent
      hostawayListingId
      hostawayLastSyncedAt
      hostawayReviewLastSyncedAt
      hostawaySyncEnabled
      guestyListingId
      guestyLastSyncedAt
      guestySyncEnabled
      homeheroListingId
      homeheroLastSyncedAt
      homeheroSyncEnabled
      hospitableListingId
      hospitableLastSyncedAt
      hospitableSyncEnabled
      invitedUsers
      readOnlyInvitedUsers
      seoUpdatedAt
      lodgifyListingId
      lodgifyLastSyncedAt
      lodgifySyncEnabled
      updatedAt
      __typename
    }
  }
`;
export const listListingModels = /* GraphQL */ `
  query ListListingModels(
    $filter: ModelListingModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListingModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listingModelByUserHostModel = /* GraphQL */ `
  query ListingModelByUserHostModel(
    $userhostmodelID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelListingModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listingModelByUserHostModel(
      userhostmodelID: $userhostmodelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listingModelByXiaozhuRoomId = /* GraphQL */ `
  query ListingModelByXiaozhuRoomId(
    $xiaozhuRoomId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelListingModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listingModelByXiaozhuRoomId(
      xiaozhuRoomId: $xiaozhuRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchListingModels = /* GraphQL */ `
  query SearchListingModels(
    $filter: SearchableListingModelFilterInput
    $sort: [SearchableListingModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableListingModelAggregationInput]
  ) {
    searchListingModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getRoomModel = /* GraphQL */ `
  query GetRoomModel($id: ID!) {
    getRoomModel(id: $id) {
      id
      owner
      listingmodelID
      userhostmodelID
      ListingModel {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      images
      roomTitle
      roomDescription
      roomType
      roomAmenities
      roomBeds
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRoomModels = /* GraphQL */ `
  query ListRoomModels(
    $filter: ModelRoomModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        listingmodelID
        userhostmodelID
        images
        roomTitle
        roomDescription
        roomType
        roomAmenities
        roomBeds
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const roomModelByListingModel = /* GraphQL */ `
  query RoomModelByListingModel(
    $listingmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoomModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomModelByListingModel(
      listingmodelID: $listingmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        listingmodelID
        userhostmodelID
        images
        roomTitle
        roomDescription
        roomType
        roomAmenities
        roomBeds
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConversationModel = /* GraphQL */ `
  query GetConversationModel($id: ID!) {
    getConversationModel(id: $id) {
      id
      updatedAt
      owners
      messageownerID
      listingmodelID
      userhostmodelID
      bookingrequestID
      externalConversationId
      externalSyncEnabled
      externalLastSyncedAt
      guestSeen
      hostSeen
      status
      UserModel {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      BookingRequestModel {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      MessageModels {
        nextToken
        __typename
      }
      createdAt
      __typename
    }
  }
`;
export const listConversationModels = /* GraphQL */ `
  query ListConversationModels(
    $filter: ModelConversationModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updatedAt
        owners
        messageownerID
        listingmodelID
        userhostmodelID
        bookingrequestID
        externalConversationId
        externalSyncEnabled
        externalLastSyncedAt
        guestSeen
        hostSeen
        status
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessageModel = /* GraphQL */ `
  query GetMessageModel($id: ID!) {
    getMessageModel(id: $id) {
      id
      createdAt
      tempId
      owners
      body
      author
      conversationmodelID
      isNote
      isTimestamp
      hostawayMessageId
      guestNoteBody
      hostNoteBody
      updatedAt
      __typename
    }
  }
`;
export const listMessageModels = /* GraphQL */ `
  query ListMessageModels(
    $filter: ModelMessageModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        tempId
        owners
        body
        author
        conversationmodelID
        isNote
        isTimestamp
        hostawayMessageId
        guestNoteBody
        hostNoteBody
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messageModelByConversationModel = /* GraphQL */ `
  query MessageModelByConversationModel(
    $conversationmodelID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageModelByConversationModel(
      conversationmodelID: $conversationmodelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        tempId
        owners
        body
        author
        conversationmodelID
        isNote
        isTimestamp
        hostawayMessageId
        guestNoteBody
        hostNoteBody
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookingRequestModel = /* GraphQL */ `
  query GetBookingRequestModel($id: ID!) {
    getBookingRequestModel(id: $id) {
      id
      hostawayReservationId
      hostawayConversationId
      owners
      arrivalDate
      departureDate
      nights
      guests
      adults
      children
      infants
      pets
      maxGuests
      expired
      usermodelID
      userhostmodelID
      listingmodelID
      paymentmodelID
      stripeAccountID
      confirmationCode
      conversationmodelID
      ordermodelID
      confirmed
      confirmedAt
      couponCode
      couponDiscountAmount
      declined
      reasonDeclined
      cancelled
      cancelledAt
      cancelledBy
      reasonCancelled
      completed
      stayReviewed
      guestReviewed
      checkInTime
      checkOutTime
      cancellationPolicy
      timeBeforeCheckIn
      timeAfterCheckOut
      bookingAmount
      bookingAmountIncludingServiceFee
      paymentAmount
      pricePerNight
      guestPriceBreakdown
      hostPriceBreakdown
      nightlyPrices
      minimumPrice
      serviceFee
      cleaningFee
      extraGuestFee
      extraMaxGuests
      weeklyDiscount
      monthlyDiscount
      paymentModels
      transferModels
      refundModels
      transferReversalModels
      UserModel {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      ListingModel {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      ConversationModel {
        id
        updatedAt
        owners
        messageownerID
        listingmodelID
        userhostmodelID
        bookingrequestID
        externalConversationId
        externalSyncEnabled
        externalLastSyncedAt
        guestSeen
        hostSeen
        status
        createdAt
        __typename
      }
      OrderModels {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      ChangeBookingRequestModel {
        nextToken
        __typename
      }
      RefundRequestModel {
        nextToken
        __typename
      }
      ReviewStayModel {
        nextToken
        __typename
      }
      deposit
      refundedAmount
      standardServiceFee
      hostPaid
      responseNeeded
      responseBefore
      changeRequested
      refundRequested
      state
      overallReviewScore
      xiaozhuOrderId
      xiaozhuParentOrderId
      xiaozhuOrderStatus
      xiaozhuRoomId
      xiaozhuRoomFee
      xiaozhuPenaltyFee
      xiaozhuOrderAmount
      xiaozhuPromotionFee
      xiaozhuPaidFee
      xiaozhuBookTime
      xiaozhuCancelRule
      xiaozhuBookFromEnv
      customServiceFeePercent
      referredBy
      invitedUsers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookingRequestModels = /* GraphQL */ `
  query ListBookingRequestModels(
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingRequestModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingRequestModelByUserModel = /* GraphQL */ `
  query BookingRequestModelByUserModel(
    $usermodelID: ID!
    $arrivalDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingRequestModelByUserModel(
      usermodelID: $usermodelID
      arrivalDate: $arrivalDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingRequestModelByUserHostModel = /* GraphQL */ `
  query BookingRequestModelByUserHostModel(
    $userhostmodelID: ID!
    $arrivalDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingRequestModelByUserHostModel(
      userhostmodelID: $userhostmodelID
      arrivalDate: $arrivalDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingRequestModelByListingModel = /* GraphQL */ `
  query BookingRequestModelByListingModel(
    $listingmodelID: ID!
    $arrivalDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingRequestModelByListingModel(
      listingmodelID: $listingmodelID
      arrivalDate: $arrivalDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingRequestModelByOrderModel = /* GraphQL */ `
  query BookingRequestModelByOrderModel(
    $ordermodelID: ID!
    $arrivalDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingRequestModelByOrderModel(
      ordermodelID: $ordermodelID
      arrivalDate: $arrivalDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookingRequestModelByXiaozhuOrderId = /* GraphQL */ `
  query BookingRequestModelByXiaozhuOrderId(
    $xiaozhuOrderId: String!
    $arrivalDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingRequestModelByXiaozhuOrderId(
      xiaozhuOrderId: $xiaozhuOrderId
      arrivalDate: $arrivalDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchBookingRequestModels = /* GraphQL */ `
  query SearchBookingRequestModels(
    $filter: SearchableBookingRequestModelFilterInput
    $sort: [SearchableBookingRequestModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBookingRequestModelAggregationInput]
  ) {
    searchBookingRequestModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getChangeBookingRequestModel = /* GraphQL */ `
  query GetChangeBookingRequestModel($id: ID!) {
    getChangeBookingRequestModel(id: $id) {
      id
      createdAt
      owners
      bookingRequestID
      newArrivalDate
      newDepartureDate
      newGuests
      newAdults
      newChildren
      newInfants
      newPets
      paymentIntentID
      bookingAmount
      bookingAmountIncludingServiceFee
      serviceFee
      newBookingAmount
      newServiceFee
      newBookingAmountIncludingServiceFee
      priceDifference
      newPaymentAmount
      serviceFeePriceDifference
      confirmed
      declined
      expired
      completed
      pricePerNight
      newCouponCode
      newCouponDiscountAmount
      updatedAt
      __typename
    }
  }
`;
export const listChangeBookingRequestModels = /* GraphQL */ `
  query ListChangeBookingRequestModels(
    $filter: ModelChangeBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChangeBookingRequestModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        owners
        bookingRequestID
        newArrivalDate
        newDepartureDate
        newGuests
        newAdults
        newChildren
        newInfants
        newPets
        paymentIntentID
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        newBookingAmount
        newServiceFee
        newBookingAmountIncludingServiceFee
        priceDifference
        newPaymentAmount
        serviceFeePriceDifference
        confirmed
        declined
        expired
        completed
        pricePerNight
        newCouponCode
        newCouponDiscountAmount
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const changeBookingRequestModelByBookingRequestID = /* GraphQL */ `
  query ChangeBookingRequestModelByBookingRequestID(
    $bookingRequestID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChangeBookingRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    changeBookingRequestModelByBookingRequestID(
      bookingRequestID: $bookingRequestID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        owners
        bookingRequestID
        newArrivalDate
        newDepartureDate
        newGuests
        newAdults
        newChildren
        newInfants
        newPets
        paymentIntentID
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        newBookingAmount
        newServiceFee
        newBookingAmountIncludingServiceFee
        priceDifference
        newPaymentAmount
        serviceFeePriceDifference
        confirmed
        declined
        expired
        completed
        pricePerNight
        newCouponCode
        newCouponDiscountAmount
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProductModel = /* GraphQL */ `
  query GetProductModel($id: ID!) {
    getProductModel(id: $id) {
      id
      owner
      productTitle
      productDescription
      productType
      productFulfillmentType
      productImages
      pricePerItem
      pricePerHour
      pricePerDay
      pricePerPerson
      pricingType
      inventory
      location
      fulfillmentRadius
      guestOnlyPurchase
      minOrderQuantity
      maxOrderQuantity
      minOrderAmount
      maxOrderAmount
      guests
      duration
      minimumNotice
      unavailableDates
      internalCode
      unlimitedInventory
      status
      approved
      draft
      instantBookEnabled
      userhostmodelID
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      OrderModels {
        nextToken
        __typename
      }
      ListingModels {
        nextToken
        __typename
      }
      categories
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProductModels = /* GraphQL */ `
  query ListProductModels(
    $filter: ModelProductModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        productTitle
        productDescription
        productType
        productFulfillmentType
        productImages
        pricePerItem
        pricePerHour
        pricePerDay
        pricePerPerson
        pricingType
        inventory
        location
        fulfillmentRadius
        guestOnlyPurchase
        minOrderQuantity
        maxOrderQuantity
        minOrderAmount
        maxOrderAmount
        guests
        duration
        minimumNotice
        unavailableDates
        internalCode
        unlimitedInventory
        status
        approved
        draft
        instantBookEnabled
        userhostmodelID
        categories
        tags
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productModelByUserHostModel = /* GraphQL */ `
  query ProductModelByUserHostModel(
    $userhostmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productModelByUserHostModel(
      userhostmodelID: $userhostmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        productTitle
        productDescription
        productType
        productFulfillmentType
        productImages
        pricePerItem
        pricePerHour
        pricePerDay
        pricePerPerson
        pricingType
        inventory
        location
        fulfillmentRadius
        guestOnlyPurchase
        minOrderQuantity
        maxOrderQuantity
        minOrderAmount
        maxOrderAmount
        guests
        duration
        minimumNotice
        unavailableDates
        internalCode
        unlimitedInventory
        status
        approved
        draft
        instantBookEnabled
        userhostmodelID
        categories
        tags
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchProductModels = /* GraphQL */ `
  query SearchProductModels(
    $filter: SearchableProductModelFilterInput
    $sort: [SearchableProductModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductModelAggregationInput]
  ) {
    searchProductModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        owner
        productTitle
        productDescription
        productType
        productFulfillmentType
        productImages
        pricePerItem
        pricePerHour
        pricePerDay
        pricePerPerson
        pricingType
        inventory
        location
        fulfillmentRadius
        guestOnlyPurchase
        minOrderQuantity
        maxOrderQuantity
        minOrderAmount
        maxOrderAmount
        guests
        duration
        minimumNotice
        unavailableDates
        internalCode
        unlimitedInventory
        status
        approved
        draft
        instantBookEnabled
        userhostmodelID
        categories
        tags
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getOrderModel = /* GraphQL */ `
  query GetOrderModel($id: ID!) {
    getOrderModel(id: $id) {
      id
      owner
      usermodelID
      userhostmodelID
      status
      confirmed
      declined
      expired
      completed
      cancelled
      fulfilled
      bookingAmount
      bookingAmountIncludingServiceFee
      serviceFee
      couponCode
      couponDiscountAmount
      refunded
      payments
      transfers
      refunds
      transferReversals
      UserModel {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      BookingRequestModels {
        nextToken
        __typename
      }
      OrderItemModels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderModels = /* GraphQL */ `
  query ListOrderModels(
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderModelByUserModel = /* GraphQL */ `
  query OrderModelByUserModel(
    $usermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderModelByUserModel(
      usermodelID: $usermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderModelByUserHostModel = /* GraphQL */ `
  query OrderModelByUserHostModel(
    $userhostmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderModelByUserHostModel(
      userhostmodelID: $userhostmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchOrderModels = /* GraphQL */ `
  query SearchOrderModels(
    $filter: SearchableOrderModelFilterInput
    $sort: [SearchableOrderModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableOrderModelAggregationInput]
  ) {
    searchOrderModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getOrderItemModel = /* GraphQL */ `
  query GetOrderItemModel($id: ID!) {
    getOrderItemModel(id: $id) {
      id
      owner
      productmodelID
      quantity
      status
      fulfilled
      subTotal
      itemPrice
      guests
      adults
      children
      infants
      pets
      startDate
      endDate
      ordermodelID
      OrderModel {
        id
        owner
        usermodelID
        userhostmodelID
        status
        confirmed
        declined
        expired
        completed
        cancelled
        fulfilled
        bookingAmount
        bookingAmountIncludingServiceFee
        serviceFee
        couponCode
        couponDiscountAmount
        refunded
        payments
        transfers
        refunds
        transferReversals
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderItemModels = /* GraphQL */ `
  query ListOrderItemModels(
    $filter: ModelOrderItemModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItemModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        productmodelID
        quantity
        status
        fulfilled
        subTotal
        itemPrice
        guests
        adults
        children
        infants
        pets
        startDate
        endDate
        ordermodelID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemModelByProductModel = /* GraphQL */ `
  query OrderItemModelByProductModel(
    $productmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemModelByProductModel(
      productmodelID: $productmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        productmodelID
        quantity
        status
        fulfilled
        subTotal
        itemPrice
        guests
        adults
        children
        infants
        pets
        startDate
        endDate
        ordermodelID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemModelByOrderModel = /* GraphQL */ `
  query OrderItemModelByOrderModel(
    $ordermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemModelByOrderModel(
      ordermodelID: $ordermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        productmodelID
        quantity
        status
        fulfilled
        subTotal
        itemPrice
        guests
        adults
        children
        infants
        pets
        startDate
        endDate
        ordermodelID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReviewStayModel = /* GraphQL */ `
  query GetReviewStayModel($id: ID!) {
    getReviewStayModel(id: $id) {
      id
      bookingRequestID
      listingmodelID
      usermodelID
      hostawayReview
      hostawayReviewId
      externalUserFirstName
      externalUserLastName
      overall
      communication
      amenities
      cleaning
      location
      service
      value
      body
      completed
      hidden
      UserModel {
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
        guestMode
        stripeCustomerID
        phoneConfirmed
        emailConfirmed
        userIDConfirmed
        privacyPolicyAccepted
        identityDocuments
        facebookURL
        instagramURL
        twitterURL
        tiktokURL
        overallAverage
        communicationAverage
        cleanlinessAverage
        referredBy
        referralCode
        deactivated
        suspended
        suspendedUntil
        suspendedReason
        externalSignOn
        externalSignOnCompleted
        xiaozhuUserId
        createdAt
        updatedAt
        owners
        __typename
      }
      BookingRequestModel {
        id
        hostawayReservationId
        hostawayConversationId
        owners
        arrivalDate
        departureDate
        nights
        guests
        adults
        children
        infants
        pets
        maxGuests
        expired
        usermodelID
        userhostmodelID
        listingmodelID
        paymentmodelID
        stripeAccountID
        confirmationCode
        conversationmodelID
        ordermodelID
        confirmed
        confirmedAt
        couponCode
        couponDiscountAmount
        declined
        reasonDeclined
        cancelled
        cancelledAt
        cancelledBy
        reasonCancelled
        completed
        stayReviewed
        guestReviewed
        checkInTime
        checkOutTime
        cancellationPolicy
        timeBeforeCheckIn
        timeAfterCheckOut
        bookingAmount
        bookingAmountIncludingServiceFee
        paymentAmount
        pricePerNight
        guestPriceBreakdown
        hostPriceBreakdown
        nightlyPrices
        minimumPrice
        serviceFee
        cleaningFee
        extraGuestFee
        extraMaxGuests
        weeklyDiscount
        monthlyDiscount
        paymentModels
        transferModels
        refundModels
        transferReversalModels
        deposit
        refundedAmount
        standardServiceFee
        hostPaid
        responseNeeded
        responseBefore
        changeRequested
        refundRequested
        state
        overallReviewScore
        xiaozhuOrderId
        xiaozhuParentOrderId
        xiaozhuOrderStatus
        xiaozhuRoomId
        xiaozhuRoomFee
        xiaozhuPenaltyFee
        xiaozhuOrderAmount
        xiaozhuPromotionFee
        xiaozhuPaidFee
        xiaozhuBookTime
        xiaozhuCancelRule
        xiaozhuBookFromEnv
        customServiceFeePercent
        referredBy
        invitedUsers
        createdAt
        updatedAt
        __typename
      }
      ListingModel {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviewStayModels = /* GraphQL */ `
  query ListReviewStayModels(
    $filter: ModelReviewStayModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviewStayModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        listingmodelID
        usermodelID
        hostawayReview
        hostawayReviewId
        externalUserFirstName
        externalUserLastName
        overall
        communication
        amenities
        cleaning
        location
        service
        value
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewStayModelByBookingRequestID = /* GraphQL */ `
  query ReviewStayModelByBookingRequestID(
    $bookingRequestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewStayModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewStayModelByBookingRequestID(
      bookingRequestID: $bookingRequestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        listingmodelID
        usermodelID
        hostawayReview
        hostawayReviewId
        externalUserFirstName
        externalUserLastName
        overall
        communication
        amenities
        cleaning
        location
        service
        value
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewStayModelByListingModel = /* GraphQL */ `
  query ReviewStayModelByListingModel(
    $listingmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewStayModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewStayModelByListingModel(
      listingmodelID: $listingmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        listingmodelID
        usermodelID
        hostawayReview
        hostawayReviewId
        externalUserFirstName
        externalUserLastName
        overall
        communication
        amenities
        cleaning
        location
        service
        value
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewStayModelByUserModelID = /* GraphQL */ `
  query ReviewStayModelByUserModelID(
    $usermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewStayModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewStayModelByUserModelID(
      usermodelID: $usermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        listingmodelID
        usermodelID
        hostawayReview
        hostawayReviewId
        externalUserFirstName
        externalUserLastName
        overall
        communication
        amenities
        cleaning
        location
        service
        value
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReviewGuestModel = /* GraphQL */ `
  query GetReviewGuestModel($id: ID!) {
    getReviewGuestModel(id: $id) {
      id
      bookingRequestID
      usermodelID
      userhostmodelID
      overall
      communication
      cleanliness
      body
      completed
      hidden
      UserHostModel {
        id
        owners
        primaryOwner
        readOnlyOwners
        usermodelID
        stripeAccountID
        stripeAccountVerified
        standardServiceFee
        totalListings
        piggyUpdatedAt
        hostawayKey
        hostawaySecret
        homeheroAPIKey
        guestyKey
        guestySecret
        hospitableChannelActivated
        hospitableRedirectUrl
        hospitableRedirectUrlExpiry
        hospitableAccessToken
        hospitableRefreshToken
        invitedUsers
        readOnlyInvitedUsers
        lodgifyAppId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviewGuestModels = /* GraphQL */ `
  query ListReviewGuestModels(
    $filter: ModelReviewGuestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviewGuestModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        usermodelID
        userhostmodelID
        overall
        communication
        cleanliness
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewGuestModelByBookingRequestID = /* GraphQL */ `
  query ReviewGuestModelByBookingRequestID(
    $bookingRequestID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewGuestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewGuestModelByBookingRequestID(
      bookingRequestID: $bookingRequestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        usermodelID
        userhostmodelID
        overall
        communication
        cleanliness
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewGuestModelByUserModelID = /* GraphQL */ `
  query ReviewGuestModelByUserModelID(
    $usermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewGuestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewGuestModelByUserModelID(
      usermodelID: $usermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        usermodelID
        userhostmodelID
        overall
        communication
        cleanliness
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewGuestModelByUserHostModelID = /* GraphQL */ `
  query ReviewGuestModelByUserHostModelID(
    $userhostmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewGuestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewGuestModelByUserHostModelID(
      userhostmodelID: $userhostmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        usermodelID
        userhostmodelID
        overall
        communication
        cleanliness
        body
        completed
        hidden
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRefundRequestModel = /* GraphQL */ `
  query GetRefundRequestModel($id: ID!) {
    getRefundRequestModel(id: $id) {
      id
      bookingRequestID
      confirmed
      declined
      expired
      completed
      refundAmount
      refundReason
      refundMessage
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listRefundRequestModels = /* GraphQL */ `
  query ListRefundRequestModels(
    $filter: ModelRefundRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefundRequestModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        confirmed
        declined
        expired
        completed
        refundAmount
        refundReason
        refundMessage
        status
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const refundRequestModelByBookingRequestID = /* GraphQL */ `
  query RefundRequestModelByBookingRequestID(
    $bookingRequestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRefundRequestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refundRequestModelByBookingRequestID(
      bookingRequestID: $bookingRequestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookingRequestID
        confirmed
        declined
        expired
        completed
        refundAmount
        refundReason
        refundMessage
        status
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      owner
      title
      message
      usermodelID
      userhostmodelID
      sentTo
      read
      eventType
      event
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        title
        message
        usermodelID
        userhostmodelID
        sentTo
        read
        eventType
        event
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notificationByOwner = /* GraphQL */ `
  query NotificationByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        title
        message
        usermodelID
        userhostmodelID
        sentTo
        read
        eventType
        event
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notificationByUserModelID = /* GraphQL */ `
  query NotificationByUserModelID(
    $usermodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationByUserModelID(
      usermodelID: $usermodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        title
        message
        usermodelID
        userhostmodelID
        sentTo
        read
        eventType
        event
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notificationByUserHostModelID = /* GraphQL */ `
  query NotificationByUserHostModelID(
    $userhostmodelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationByUserHostModelID(
      userhostmodelID: $userhostmodelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        title
        message
        usermodelID
        userhostmodelID
        sentTo
        read
        eventType
        event
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      expireDate
      beginDate
      discountAmount
      discountPercent
      maxDiscountAmount
      minAmount
      couponCode
      timesRedeemed
      valid
      exclusive
      validUsers
      invalidUsers
      oneTimeUse
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expireDate
        beginDate
        discountAmount
        discountPercent
        maxDiscountAmount
        minAmount
        couponCode
        timesRedeemed
        valid
        exclusive
        validUsers
        invalidUsers
        oneTimeUse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const couponByCouponCode = /* GraphQL */ `
  query CouponByCouponCode(
    $couponCode: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    couponByCouponCode(
      couponCode: $couponCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        expireDate
        beginDate
        discountAmount
        discountPercent
        maxDiscountAmount
        minAmount
        couponCode
        timesRedeemed
        valid
        exclusive
        validUsers
        invalidUsers
        oneTimeUse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListingProducts = /* GraphQL */ `
  query GetListingProducts($id: ID!) {
    getListingProducts(id: $id) {
      id
      listingModelID
      productModelID
      listingModel {
        id
        createdAt
        owners
        readOnlyOwners
        placeId
        unitNumber
        streetNumber
        street
        suburb
        postcode
        state
        stateShort
        city
        country
        beds
        bedrooms
        bathrooms
        propertyType
        typeOfPlace
        propertyDescription
        propertyDescriptionEmbedding
        propertySoftEmbedding
        trainingEvolutions
        translatedPropertyDescription
        listingImages
        status
        amenities
        categories
        tags
        deposit
        guests
        minimumStay
        minimumPrice
        maximumPrice
        nightlyPrices
        maximumStay
        weeklyMinimumPrice
        weeklyMaximumStay
        location
        propertyTitle
        internalName
        translatedPropertyTitle
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
        totalReviews
        qualityScore
        overallAverage
        communicationAverage
        amenitiesAverage
        cleaningAverage
        locationAverage
        serviceAverage
        valueAverage
        cancellationPolicy
        onceOffPaymentsOnly
        instantBookEnabled
        stayType
        averageStayLength
        checkInTime
        checkOutTime
        checkInInstructions
        checkOutInstructions
        timeBeforeCheckIn
        timeAfterCheckOut
        extraGuestFee
        extraMaxGuests
        disabledDates
        unavailableDates
        iCalUnavailableDates
        iCalImportLinks
        straID
        advanceNotice
        advanceNoticeTime
        approved
        standardServiceFee
        fliggyApproved
        fliggyHidden
        fliggyID
        wifiName
        wifiPassword
        piggyApproved
        piggyUpdatedAt
        areaValue
        areaUnit
        xiaozhuRoomId
        xiaozhuReviewApproved
        xiaozhuAddressId
        xiaozhuRejectReasons
        customServiceFeePercent
        hostawayListingId
        hostawayLastSyncedAt
        hostawayReviewLastSyncedAt
        hostawaySyncEnabled
        guestyListingId
        guestyLastSyncedAt
        guestySyncEnabled
        homeheroListingId
        homeheroLastSyncedAt
        homeheroSyncEnabled
        hospitableListingId
        hospitableLastSyncedAt
        hospitableSyncEnabled
        invitedUsers
        readOnlyInvitedUsers
        seoUpdatedAt
        lodgifyListingId
        lodgifyLastSyncedAt
        lodgifySyncEnabled
        updatedAt
        __typename
      }
      productModel {
        id
        owner
        productTitle
        productDescription
        productType
        productFulfillmentType
        productImages
        pricePerItem
        pricePerHour
        pricePerDay
        pricePerPerson
        pricingType
        inventory
        location
        fulfillmentRadius
        guestOnlyPurchase
        minOrderQuantity
        maxOrderQuantity
        minOrderAmount
        maxOrderAmount
        guests
        duration
        minimumNotice
        unavailableDates
        internalCode
        unlimitedInventory
        status
        approved
        draft
        instantBookEnabled
        userhostmodelID
        categories
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
  }
`;
export const listListingProducts = /* GraphQL */ `
  query ListListingProducts(
    $filter: ModelListingProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListingProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        listingModelID
        productModelID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
