// export const onUpdateConversationModelMessages = /* GraphQL */ `
//     subscription OnUpdateConversationModel {
//         onUpdateConversationModel {
//             id
//             messageownerID
//             userhostmodelID
//             listingmodelID
//             createdAt
//             updatedAt
//         }
//     }
// `;

export const onUpdateUserByIDTrigger = /* GraphQL */ `
    subscription onUpdateUserByIDTrigger($id: ID!) {
        onUpdateUserByIDTrigger(id: $id) {
          id
          owner
          email
          phone
          dateOfBirth
          firstName
          lastName
          profileDescription
          profilePicture
          savedListings
          emailConfirmed
          userIDConfirmed
          stripeCustomerID
          username
          identityID
          guestMode
          createdAt
          identityDocuments
          updatedAt
          owner
          privacyPolicyAccepted
          facebookURL
          twitterURL
          instagramURL
        }
    }
`;


export const onUpdateConversationModelByID = /* GraphQL */ `
  subscription onUpdateConversationModelByID($id: ID!) {
    onUpdateConversationModelByID(id: $id) {
      id
      messageownerID
      listingmodelID
      userhostmodelID
      bookingrequestID
      guestSeen
      hostSeen
      createdAt
      updatedAt
      MessageModels {
        items {
          id
          body
          author
          createdAt
          conversationmodelID
          updatedAt
        }
      }
    }
  }
`;

export const onCreateConversationMessageModel = /* GraphQL */ `
  subscription onCreateMessageModel($conversationmodelID: ID!) {
    onCreateMessageModel(conversationmodelID: $conversationmodelID) {
      id
      owners
      isNote
      isTimestamp
      guestNoteBody
      hostNoteBody
      conversationmodelID
      author
      body
    }
  }
`

export const onUpdateConversationByMessageOwnerID = /* GraphQL */ `
  subscription onUpdateConversationByMessageOwnerID($messageownerID: ID!) {
    onUpdateConversationByMessageOwnerID(messageownerID: $messageownerID) {
      id
      owners
      bookingrequestID
      listingmodelID
      messageownerID
      userhostmodelID
      status
      guestSeen
      hostSeen
      updatedAt
      MessageModels(limit: 10, sortDirection: DESC) {
        items {
          updatedAt
          id
          createdAt
          conversationmodelID
          body
          author
        }
      }
    }
  }
`
export const onUpdateConversationByUserHostModelID = /* GraphQL */ `
  subscription onUpdateConversationByUserHostModelID($userhostmodelID: ID!) {
    onUpdateConversationByUserHostModelID(userhostmodelID: $userhostmodelID) {
      id
      owners
      bookingrequestID
      listingmodelID
      messageownerID
      userhostmodelID
      status
      guestSeen
      hostSeen
      updatedAt
      MessageModels(limit: 10, sortDirection: DESC) {
        items {
          updatedAt
          id
          createdAt
          conversationmodelID
          body
          author
        }
      }
    }
  }
`

export const onMessageByConversationModelID = /* GraphQL */ `
  subscription onMessageByConversationModelID($conversationmodelID: ID!) {
    onMessageByConversationModelID(conversationmodelID: $conversationmodelID) {
      id
      owners
      isNote
      isTimestamp
      guestNoteBody
      hostNoteBody
      conversationmodelID
      author
      body
    }
  }
`

export const onBookingByUserModelID = /* GraphQL */ `
  subscription onBookingByUserModelID($usermodelID: ID!) {
    onBookingByUserModelID(usermodelID: $usermodelID) {
      id
      owners
      adults
      children
      infants
      pets
      guests
      arrivalDate
      departureDate
      bookingAmount
      bookingAmountIncludingServiceFee
      cancellationPolicy
      cancelled
      cancelledAt
      cancelledBy
      deposit
      createdAt
      confirmed
      completed
      usermodelID
      userhostmodelID
      listingmodelID
    }
  }
`

export const onUpdateBookingByID = /* GraphQL */ `
  subscription onUpdateBookingByID($id: ID!) {
    onUpdateBookingByID(id: $id) {
      id
      owners
      adults
      children
      infants
      pets
      guests
      arrivalDate
      departureDate
      bookingAmount
      bookingAmountIncludingServiceFee
      cancellationPolicy
      cancelled
      cancelledAt
      cancelledBy
      deposit
      createdAt
      confirmed
      completed
      usermodelID
      userhostmodelID
      listingmodelID
    }
  }
`

export const onNotificationByOwner = /* GraphQL */ `
  subscription onNotificationByOwner($owner: String!) {
    onNotificationByOwner(owner: $owner) {
      id
      owner
    }
  }
`

export const onCreateNotification = /* GraphQL */ `
  subscription onCreateGuestNotificationByID($usermodelID: ID!) {
    onCreateGuestNotificationByID(usermodelID: $usermodelID) {
      usermodelID
      userhostmodelID
      updatedAt
      title
      read
      owner
      message
      listingmodelID
      id
      eventUrl
      createdAt
      category
    }
  }
`

export const onCreateHostNotification = /* GraphQL */ `
  subscription onCreateHostNotificationByID($userhostmodelID: ID!) {
    onCreateHostNotificationByID(userhostmodelID: $userhostmodelID) {
      usermodelID
      userhostmodelID
      updatedAt
      title
      read
      owner
      message
      listingmodelID
      id
      eventUrl
      createdAt
      category
    }
  }
`

export const onConversationByMessageOwnerID = /* GraphQL */ `
  subscription onConversationByMessageOwnerID($messageownerID: ID!) {
    onConversationByMessageOwnerID(messageownerID: $messageownerID) {
      id
      owners
      bookingrequestID
      listingmodelID
      messageownerID
      userhostmodelID
      status
      guestSeen
      hostSeen
      MessageModels(limit: 10, sortDirection: DESC) {
        items {
          updatedAt
          id
          createdAt
          conversationmodelID
          body
          author
        }
      }
    }
  }
`

export const onConversationByUserHostModelID = /* GraphQL */ `
  subscription onConversationByUserHostModelID($userhostmodelID: ID!) {
    onConversationByUserHostModelID(userhostmodelID: $userhostmodelID) {
      id
      owners
      bookingrequestID
      listingmodelID
      messageownerID
      userhostmodelID
      status
      guestSeen
      hostSeen
      MessageModels(limit: 10, sortDirection: DESC) {
        items {
          updatedAt
          id
          createdAt
          conversationmodelID
          body
          author
        }
      }
    }
  }
`

// export const onUpdateConversation = /* GraphQL */ `
//   subscription onUpdateConversationModel($id: ID!) {
//     onUpdateConversationModel(id: $id) {
//       id
//       messageownerID
//       listingmodelID
//       userhostmodelID
//       bookingrequestID
//       guestSeen
//       hostSeen
//       MessageModels {
//         nextToken
//         startedAt
//       }
//     }
//   }
// `;