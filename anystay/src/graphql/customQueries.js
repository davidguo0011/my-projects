// Fetch host profile
export const listUserHostModels = /* GraphQL */ `
    query ListUserHostModels(
        $filter: ModelUserHostModelFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserHostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            usermodelID
            createdAt
            updatedAt
            ListingModels {
                items {
                    id
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
                    deposit
                    guests
                    minimumStay
                    minimumPrice
                    maximumPrice
                    maximumStay
                    latitude
                    longitude
                    propertyTitle
                    houseRules
                    verified
                    weeklyDiscount
                    monthlyDiscount
                    cleaningFee
                    cleaningFrequency
                    availabilityRange
                    userhostmodelID
                    createdAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            ConversationModels {
                items {
                    id
                    MessageModels {
                        items {
                            id
                        }
                        nextToken
                        startedAt
                    }
                }
                nextToken
                startedAt
            }
        }
        nextToken
        startedAt
        }
    }
`;
export const listUserModelsAndConversations = /* GraphQL */ `
    query ListUserModels(
        $filter: ModelUserModelFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            email
            phone
            dateOfBirth
            firstName
            lastName
            profileDescription
            profilePicture
            savedListings
            username
            guestMode
            ConversationModels {
                items {
                    id
                    messageownerID
                    listingmodelID
                    createdAt
                    updatedAt
                    MessageModels {
                        items {
                            author
                            body
                            createdAt
                        }
                    }
                }
                nextToken
                startedAt
            }
            BookingRequestModels {
                items {
                    id
                    arrivalDate
                    departureDate
                    guests
                    usermodelID
                    userhostmodelID
                    listingmodelID
                }
                nextToken
                startedAt
            }
            createdAt
            updatedAt
            owner
        }
        nextToken
        startedAt
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
        email
        phone
        dateOfBirth
        firstName
        lastName
        profileDescription
        profilePicture
        savedListings
        username
        guestMode
        createdAt
        updatedAt
        owner
    }
    nextToken
    startedAt
    }
}
`;
export const getUserHostModelByUserID = /* GraphQL */ `
    query GetUserHostModel($id: ID!) {
        getUserHostModel(id: $id) {
        id
        usermodelID
        createdAt
        updatedAt
        }
    }
`;

// COnversation fetching + subscriptions
export const getUserModelAndConversations = /* GraphQL */ `
    query GetUserModel($id: ID!) {
        getUserModel(id: $id) {
        id
        email
        phone
        dateOfBirth
        firstName
        lastName
        profileDescription
        profilePicture
        savedListings
        username
        guestMode
        createdAt
        updatedAt
        ConversationModels {
            items {
                id
                userhostmodelID
                messageownerID
                listingmodelID
                createdAt
                updatedAt
                MessageModels {
                    items {
                        author
                        body
                        createdAt
                    }
                }
            }
            nextToken
            startedAt
        }
        BookingRequestModels {
            items {
                id
            }
            nextToken
            startedAt
        }
        owner
        }
    }
`;
export const getUserModelRequiredDetails = /* GraphQL */ `
query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
        id
        identityID
        firstName
        lastName
        profileDescription
        profilePicture
        username
        phone
        email
        userIDConfirmed
        createdAt
        updatedAt
        owner
    }
}
`;


export const getUserModelRequiredHostDetails = /* GraphQL */ `
query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
        id
        firstName
        lastName
        profileDescription
        profilePicture
        username
        phone
        createdAt
        updatedAt
        owner
    }
}
`;

export const getUserModelName = /* GraphQL */ `
query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
        id
        firstName
        lastName
        createdAt
        updatedAt
        owner
    }
}
`;

export const getUserHostModelGuestID = /* GraphQL */ `
    query GetUserHostModel($id: ID!) {
        getUserHostModel(id: $id) {
            usermodelID
            id
            createdAt
            updatedAt
        }
    }
`;

export const getUserModelConversationDetails = /* GraphQL */ `
query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
        id
        firstName
        lastName
        profileDescription
        profilePicture
        owner
    }
}
`;

export const getConversationModelMessages = /* GraphQL */ `
    query GetConversationModel($id: ID!) {
        getConversationModel(id: $id) {
        id
        createdAt
        updatedAt
        messageownerID
        userhostmodelID
        listingmodelID
        bookingrequestID
        MessageModels {
            items {
                body
                author
                createdAt
                updatedAt
            }
            nextToken
            startedAt
        }
        }
    }
`;

export const listConversationModelsMessages = /* GraphQL */ `
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
            messageownerID
            userhostmodelID
            listingmodelID
            MessageModels {
                items {
                    body
                    author
                    createdAt
                    updatedAt
                }
                nextToken
                startedAt
            }
            createdAt
            updatedAt
        }
        nextToken
        startedAt
        }
    }
`;

// Get listing model title and id
export const getListingModelTitle = /* GraphQL */ `
    query GetListingModel($id: ID!) {
        getListingModel(id: $id) {
        id
        propertyTitle
        verified
        userhostmodelID
        extraMaxGuests
        extraGuestFee
        guests
        createdAt
        updatedAt
        }
    }
`;

// Get listing model title and id
export const getListingModelHeaderDetails = /* GraphQL */ `
    query GetListingModel($id: ID!) {
        getListingModel(id: $id) {
        id
        propertyTitle
        minimumPrice
        propertyType
        typeOfPlace
        listingImages
        verified
        userhostmodelID
        createdAt
        updatedAt
        }
    }
`;